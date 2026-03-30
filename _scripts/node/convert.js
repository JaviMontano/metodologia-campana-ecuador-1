#!/usr/bin/env node
/**
 * convert.js — Unified CLI document converter for MetodologIA
 * Single entry point for all Node.js document conversions.
 *
 * Usage:
 *   node convert.js md2docx input.md output.docx [--brand own|cobrand|whitelabel]
 *   node convert.js md2pptx input.md output.pptx
 *   node convert.js md2xlsx input.md output.xlsx
 *   node convert.js md2html input.md output.html [--template report|dashboard|email]
 *   node convert.js yaml2json input.yaml output.json
 *   node convert.js json2yaml input.json output.yaml
 *
 * All conversions apply MetodologIA brand tokens by default.
 */

const fs   = require('fs');
const path = require('path');

// ── Brand Constants ─────────────────────────────────────────────────────────

const BRAND = {
  navy:   '122562', navyHex: '#122562',
  gold:   'FFD700', goldHex: '#FFD700',
  blue:   '137DC5', blueHex: '#137DC5',
  dark:   '1F2833', darkHex: '#1F2833',
  gray:   '808080', grayHex: '#808080',
  white:  'FFFFFF', whiteHex: '#FFFFFF',
  light:  'F8F9FC', lightHex: '#F8F9FC',
  fontHeading: 'Arial',
  fontBody:    'Trebuchet MS',
};

// ── Markdown Parser ─────────────────────────────────────────────────────────

function parseMdSections(md) {
  const lines = md.split('\n');
  const sections = [];
  let current = null;

  for (const line of lines) {
    let level = 0, title = '';
    if (line.startsWith('### '))      { level = 3; title = line.slice(4); }
    else if (line.startsWith('## '))   { level = 2; title = line.slice(3); }
    else if (line.startsWith('# '))    { level = 1; title = line.slice(2); }

    if (level) {
      current = { level, title: title.trim(), content: [], lists: [] };
      sections.push(current);
    } else if (current) {
      current.content.push(line);
      if (/^\s*[-*+]\s/.test(line)) {
        current.lists.push(line.replace(/^\s*[-*+]\s+/, '').trim());
      }
    }
  }
  return sections;
}

function parseMdTables(md) {
  const tables = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      const headers = line.split('|').filter(c => c.trim()).map(c => c.trim());
      if (i + 1 < lines.length && lines[i + 1].includes('---')) i += 2;
      else i += 1;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim().split('|').filter(c => c.trim()).map(c => c.trim()));
        i++;
      }
      tables.push({ headers, rows });
    } else {
      i++;
    }
  }
  return tables;
}

// ── MD → DOCX ───────────────────────────────────────────────────────────────

async function md2docx(inputPath, outputPath) {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow,
          TableCell, WidthType, AlignmentType } = require('docx');

  const md = fs.readFileSync(inputPath, 'utf-8');
  const sections = parseMdSections(md);

  const children = [];
  const headingMap = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3 };

  for (const sec of sections) {
    children.push(new Paragraph({
      text: sec.title,
      heading: headingMap[sec.level] || HeadingLevel.HEADING_3,
    }));

    for (const line of sec.content) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('|')) continue;

      if (/^\s*[-*+]\s/.test(line)) {
        children.push(new Paragraph({ text: trimmed.replace(/^[-*+]\s+/, ''), bullet: { level: 0 } }));
      } else {
        const parts = trimmed.split(/(\*\*.+?\*\*)/);
        const runs = parts.map(part => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return new TextRun({ text: part.slice(2, -2), bold: true, font: BRAND.fontBody, size: 22 });
          }
          return new TextRun({ text: part, font: BRAND.fontBody, size: 22, color: BRAND.dark });
        });
        children.push(new Paragraph({ children: runs }));
      }
    }
  }

  // Tables
  const tables = parseMdTables(md);
  for (const tbl of tables) {
    if (!tbl.headers.length) continue;
    const headerRow = new TableRow({
      children: tbl.headers.map(h => new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: BRAND.white, font: BRAND.fontHeading, size: 20 })] })],
        shading: { fill: BRAND.navy },
      })),
    });
    const dataRows = tbl.rows.map(row => new TableRow({
      children: row.map(cell => new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: cell, font: BRAND.fontBody, size: 20 })] })],
      })),
    }));
    children.push(new Table({ rows: [headerRow, ...dataRows], width: { size: 100, type: WidthType.PERCENTAGE } }));
  }

  const doc = new Document({ sections: [{ children }] });
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`DOCX saved: ${outputPath}`);
}

// ── MD → PPTX ───────────────────────────────────────────────────────────────

async function md2pptx(inputPath, outputPath) {
  const PptxGenJS = require('pptxgenjs');
  const md = fs.readFileSync(inputPath, 'utf-8');
  const sections = parseMdSections(md);

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'MetodologIA';

  // Title slide
  const titleSlide = pptx.addSlide();
  titleSlide.background = { fill: BRAND.navy };
  const mainTitle = sections[0]?.title || path.basename(inputPath, '.md');
  titleSlide.addText([
    { text: 'Metodolog', options: { color: BRAND.white, fontSize: 36, fontFace: BRAND.fontHeading, bold: true } },
    { text: 'IA', options: { color: BRAND.gold, fontSize: 36, fontFace: BRAND.fontHeading, bold: true } },
  ], { x: 0.8, y: 1.5, w: 11, h: 1 });
  titleSlide.addText(mainTitle, { x: 0.8, y: 3, w: 11, h: 1.5, fontSize: 32, fontFace: BRAND.fontHeading, bold: true, color: BRAND.white });

  // Content slides (one per H2 section)
  for (const sec of sections.filter(s => s.level === 2)) {
    const slide = pptx.addSlide();
    slide.addText(sec.title, { x: 0.5, y: 0.3, w: 12, h: 0.8, fontSize: 24, fontFace: BRAND.fontHeading, bold: true, color: BRAND.navy });

    const content = sec.content.filter(l => l.trim()).join('\n');
    if (sec.lists.length > 0) {
      const bullets = sec.lists.map(item => ({ text: item, options: { bullet: true, fontSize: 14, fontFace: BRAND.fontBody, color: BRAND.dark } }));
      slide.addText(bullets, { x: 0.8, y: 1.3, w: 11, h: 5.5 });
    } else if (content.trim()) {
      slide.addText(content.substring(0, 800), { x: 0.8, y: 1.3, w: 11, h: 5.5, fontSize: 14, fontFace: BRAND.fontBody, color: BRAND.dark });
    }

    // Brand footer
    slide.addText([
      { text: 'Metodolog', options: { color: BRAND.gray, fontSize: 8 } },
      { text: 'IA', options: { color: BRAND.gold, fontSize: 8 } },
    ], { x: 11.5, y: 7, w: 1.5, h: 0.3 });
  }

  await pptx.writeFile({ fileName: outputPath });
  console.log(`PPTX saved: ${outputPath}`);
}

// ── MD → XLSX ───────────────────────────────────────────────────────────────

async function md2xlsx(inputPath, outputPath) {
  let ExcelJS;
  try { ExcelJS = require('exceljs'); } catch { console.error('exceljs not installed. Run: npm install exceljs'); return; }

  const md = fs.readFileSync(inputPath, 'utf-8');
  const tables = parseMdTables(md);

  const wb = new ExcelJS.Workbook();
  wb.creator = 'MetodologIA';

  for (let t = 0; t < tables.length; t++) {
    const tbl = tables[t];
    const ws = wb.addWorksheet(tbl.headers[0] || `Table ${t + 1}`);

    // Header row
    const headerRow = ws.addRow(tbl.headers);
    headerRow.eachCell(cell => {
      cell.font = { name: BRAND.fontHeading, bold: true, color: { argb: 'FF' + BRAND.white }, size: 11 };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + BRAND.navy } };
      cell.alignment = { horizontal: 'left', vertical: 'middle' };
    });

    // Data rows
    for (let r = 0; r < tbl.rows.length; r++) {
      const row = ws.addRow(tbl.rows[r]);
      row.eachCell(cell => {
        cell.font = { name: BRAND.fontBody, size: 10, color: { argb: 'FF' + BRAND.dark } };
        if (r % 2 === 1) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + BRAND.light } };
        }
        cell.border = { bottom: { style: 'thin', color: { argb: 'FFDDDDDD' } } };
      });
    }

    // Auto-width
    ws.columns.forEach(col => {
      let maxLen = 10;
      col.eachCell(cell => {
        const len = String(cell.value || '').length;
        if (len > maxLen) maxLen = len;
      });
      col.width = Math.min(maxLen + 4, 50);
    });
  }

  await wb.xlsx.writeFile(outputPath);
  console.log(`XLSX saved: ${outputPath}`);
}

// ── MD → HTML ───────────────────────────────────────────────────────────────

async function md2html(inputPath, outputPath, templateName) {
  let marked;
  try { marked = require('marked'); } catch { marked = null; }

  const md = fs.readFileSync(inputPath, 'utf-8');
  let body;

  if (marked) {
    body = marked.parse(md);
  } else {
    // Fallback basic conversion
    body = md.split('\n').map(line => {
      if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
      if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
      if (line.trim() === '') return '<br>';
      return `<p>${line}</p>`;
    }).join('\n');
  }

  // Check for custom template
  const templateDir = path.resolve(__dirname, '..', '..', '_templates', 'html');
  let html;

  if (templateName && fs.existsSync(path.join(templateDir, `${templateName}.html`))) {
    const template = fs.readFileSync(path.join(templateDir, `${templateName}.html`), 'utf-8');
    html = template.replace('{{content}}', body).replace(/\{\{title\}\}/g, path.basename(inputPath, '.md'));
  } else {
    html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${path.basename(inputPath, '.md')}</title>
<style>
:root{--primary:${BRAND.navyHex};--accent:${BRAND.goldHex};--dark:${BRAND.darkHex};}
body{font-family:'Trebuchet MS',Arial,sans-serif;color:var(--dark);max-width:900px;margin:0 auto;padding:24px;line-height:1.6;}
h1,h2,h3{font-family:Arial,sans-serif;color:var(--primary);}
h2{border-bottom:3px solid var(--accent);padding-bottom:4px;display:inline-block;}
table{width:100%;border-collapse:collapse;margin:16px 0;}
th{background:var(--primary);color:white;padding:8px 12px;text-align:left;}
td{padding:8px 12px;border-bottom:1px solid rgba(0,0,0,0.08);}
tr:nth-child(even){background:#F8F9FC;}
code{background:#F8F9FC;padding:2px 6px;border-radius:4px;font-size:0.9em;}
</style></head><body>${body}</body></html>`;
  }

  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`HTML saved: ${outputPath}`);
}

// ── YAML ↔ JSON ─────────────────────────────────────────────────────────────

function yaml2json(inputPath, outputPath) {
  const yaml = require('js-yaml');
  const data = yaml.load(fs.readFileSync(inputPath, 'utf-8'));
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`JSON saved: ${outputPath}`);
}

function json2yaml(inputPath, outputPath) {
  const yaml = require('js-yaml');
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  fs.writeFileSync(outputPath, yaml.dump(data, { indent: 2, lineWidth: 120 }), 'utf-8');
  console.log(`YAML saved: ${outputPath}`);
}

// ── CLI ──────────────────────────────────────────────────────────────────────

const COMMANDS = {
  md2docx, md2pptx, md2xlsx, md2html,
  yaml2json, json2yaml,
};

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.log('Usage: node convert.js <command> <input> <output> [--template name]');
    console.log(`Commands: ${Object.keys(COMMANDS).join(', ')}`);
    process.exit(1);
  }

  const [cmd, input, output] = args;
  const templateIdx = args.indexOf('--template');
  const template = templateIdx > -1 ? args[templateIdx + 1] : null;

  if (!COMMANDS[cmd]) {
    console.error(`Unknown command: ${cmd}. Available: ${Object.keys(COMMANDS).join(', ')}`);
    process.exit(1);
  }

  try {
    if (cmd === 'md2html') await COMMANDS[cmd](input, output, template);
    else await COMMANDS[cmd](input, output);
  } catch (err) {
    console.error(`Error in ${cmd}:`, err.message);
    process.exit(1);
  }
}

main();
