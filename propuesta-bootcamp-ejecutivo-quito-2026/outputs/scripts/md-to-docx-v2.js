/**
 * MetodologIA — Markdown to DOCX Converter v2
 * Now with: markdown table parsing, page numbers, improved brand tokens.
 *
 * Usage: node md-to-docx-v2.js
 * Prereqs: npm install docx
 */

const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        Table, TableRow, TableCell, WidthType, ShadingType,
        Header, Footer, PageNumber, NumberFormat } = require('docx');

const V2_DIR = path.resolve(__dirname, '..', 'v2');
const MD_DIR = path.join(V2_DIR, 'md');
const EXPORT_DIR = path.join(V2_DIR, 'export');

const B = {
    navy: '0B2545', gold: 'FFD700', goldDark: 'FFA000',
    dark: '1F2833', gray: '808080', light: 'F8F9FC', white: 'FFFFFF',
    h: 'Arial', b: 'Trebuchet MS',
};

function parseLines(md) {
    const lines = md.split('\n');
    const elements = [];
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        // Table detection
        if (line.trim().startsWith('|') && i + 1 < lines.length && lines[i + 1].trim().match(/^\|[\s\-:|]+\|/)) {
            const tableLines = [];
            while (i < lines.length && lines[i].trim().startsWith('|')) {
                tableLines.push(lines[i]);
                i++;
            }
            elements.push({ type: 'table', lines: tableLines });
            continue;
        }
        if (line.startsWith('# ')) elements.push({ type: 'h1', text: line.slice(2) });
        else if (line.startsWith('## ')) elements.push({ type: 'h2', text: line.slice(3) });
        else if (line.startsWith('### ')) elements.push({ type: 'h3', text: line.slice(4) });
        else if (line.startsWith('> ')) elements.push({ type: 'quote', text: line.slice(2) });
        else if (line.startsWith('- ')) elements.push({ type: 'bullet', text: line.slice(2) });
        else if (line.startsWith('```')) {
            i++;
            while (i < lines.length && !lines[i].startsWith('```')) i++;
            // skip code blocks
        }
        else if (line.trim() === '---') elements.push({ type: 'hr' });
        else if (line.trim()) elements.push({ type: 'p', text: line });
        i++;
    }
    return elements;
}

function clean(t) { return t.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '').trim(); }

function parseTableLines(tableLines) {
    const rows = [];
    for (let i = 0; i < tableLines.length; i++) {
        const line = tableLines[i].trim();
        if (line.match(/^\|[\s\-:|]+\|$/)) continue; // separator
        const cells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
        rows.push(cells);
    }
    return rows;
}

function buildTable(tableLines) {
    const rows = parseTableLines(tableLines);
    if (rows.length === 0) return null;
    const colCount = rows[0].length;
    const colWidth = Math.floor(9000 / colCount);

    const tableRows = rows.map((cells, rowIdx) => {
        const isHeader = rowIdx === 0;
        return new TableRow({
            children: cells.map(cellText => new TableCell({
                width: { size: colWidth, type: WidthType.DXA },
                shading: isHeader
                    ? { type: ShadingType.CLEAR, color: 'auto', fill: B.navy }
                    : (rowIdx % 2 === 0 ? { type: ShadingType.CLEAR, color: 'auto', fill: B.light } : undefined),
                children: [new Paragraph({
                    children: [new TextRun({
                        text: clean(cellText),
                        font: isHeader ? B.h : B.b,
                        size: isHeader ? 18 : 18,
                        bold: isHeader,
                        color: isHeader ? B.white : B.dark,
                    })],
                    spacing: { before: 40, after: 40 },
                })],
            })),
        });
    });

    return new Table({ rows: tableRows, width: { size: 9000, type: WidthType.DXA } });
}

function createDocx(mdPath, outputPath, lang) {
    const md = fs.readFileSync(mdPath, 'utf-8');
    const elements = parseLines(md);
    const children = [];

    // Title page
    children.push(new Paragraph({ spacing: { before: 3000 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'MetodologIA', font: B.h, size: 48, bold: true, color: B.navy })],
    }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({
            text: lang === 'es' ? 'Acelere su EstrategIA' : 'Accelerate your StrategIA',
            font: B.b, size: 20, color: B.gray, italics: true,
        })],
    }));
    children.push(new Paragraph({ spacing: { before: 600 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: lang === 'es' ? 'Bootcamp Ejecutivo Agentico' : 'Executive Agentic Bootcamp',
            font: B.h, size: 36, bold: true, color: B.navy,
        })],
    }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: lang === 'es' ? 'Edicion Creyentes — Quito 2026' : 'Believers Edition — Quito 2026',
            font: B.h, size: 24, color: B.goldDark,
        })],
    }));
    children.push(new Paragraph({ spacing: { before: 1200 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'contacto@metodologia.info', font: B.b, size: 18, color: B.gray })],
    }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: lang === 'es' ? 'Confidencial — Abril 2026' : 'Confidential — April 2026',
            font: B.b, size: 16, color: B.gray, italics: true,
        })],
    }));

    // Content
    for (const el of elements) {
        switch (el.type) {
            case 'h1':
                children.push(new Paragraph({
                    heading: HeadingLevel.HEADING_1,
                    spacing: { before: 400, after: 200 },
                    children: [new TextRun({ text: clean(el.text), font: B.h, bold: true, color: B.navy, size: 32 })],
                }));
                break;
            case 'h2':
                children.push(new Paragraph({
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 300, after: 150 },
                    children: [new TextRun({ text: clean(el.text), font: B.h, bold: true, color: B.navy, size: 26 })],
                }));
                break;
            case 'h3':
                children.push(new Paragraph({
                    heading: HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 },
                    children: [new TextRun({ text: clean(el.text), font: B.h, bold: true, color: B.goldDark, size: 22 })],
                }));
                break;
            case 'quote':
                children.push(new Paragraph({
                    spacing: { before: 100, after: 100 },
                    indent: { left: 400 },
                    children: [new TextRun({ text: clean(el.text), font: B.b, size: 20, color: B.gray, italics: true })],
                }));
                break;
            case 'bullet':
                children.push(new Paragraph({
                    spacing: { after: 60 },
                    children: [new TextRun({ text: `  \u2022  ${clean(el.text)}`, font: B.b, size: 20, color: B.dark })],
                }));
                break;
            case 'table':
                const table = buildTable(el.lines);
                if (table) children.push(table);
                break;
            case 'hr':
                children.push(new Paragraph({ spacing: { before: 200, after: 200 } }));
                break;
            case 'p':
                children.push(new Paragraph({
                    spacing: { after: 80 },
                    children: [new TextRun({ text: clean(el.text), font: B.b, size: 20, color: B.dark })],
                }));
                break;
        }
    }

    // Disclaimer
    children.push(new Paragraph({ spacing: { before: 400 } }));
    children.push(new Paragraph({
        children: [new TextRun({
            text: lang === 'es'
                ? 'Esta es una propuesta de diseno de servicio personalizado. Los precios indicados son indicativos y se confirman antes de la firma del acuerdo. Este documento no constituye un compromiso de entrega ni un contrato.'
                : 'This is a custom service design proposal. Indicated prices are indicative and confirmed before signing. This document does not constitute a delivery commitment or contract.',
            font: B.b, size: 16, color: B.gray, italics: true,
        })],
    }));
    children.push(new Paragraph({
        children: [new TextRun({
            text: lang === 'es'
                ? 'Construido por profesionales, potenciado por la red agentica de MetodologIA.'
                : 'Built by professionals, powered by MetodologIA\'s agentic network.',
            font: B.b, size: 14, color: B.gray, italics: true,
        })],
    }));

    const doc = new Document({
        sections: [{
            properties: {},
            headers: {
                default: new Header({
                    children: [new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [new TextRun({ text: 'MetodologIA', font: B.h, size: 14, color: B.gray })],
                    })],
                }),
            },
            footers: {
                default: new Footer({
                    children: [new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: 'contacto@metodologia.info | ', font: B.b, size: 14, color: B.gray }),
                            new TextRun({ children: [PageNumber.CURRENT], font: B.b, size: 14, color: B.gray }),
                            new TextRun({ text: ' / ', font: B.b, size: 14, color: B.gray }),
                            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: B.b, size: 14, color: B.gray }),
                        ],
                    })],
                }),
            },
            children,
        }],
    });

    return Packer.toBuffer(doc).then(buffer => {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        console.log(`  Created: ${path.basename(outputPath)}`);
    });
}

async function main() {
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
    const files = [
        { md: 'propuesta-ejecutiva-es.md', out: 'propuesta-ejecutiva-es.docx', lang: 'es' },
        { md: 'propuesta-detallada-es.md', out: 'propuesta-detallada-es.docx', lang: 'es' },
        { md: 'propuesta-ejecutiva-en.md', out: 'propuesta-ejecutiva-en.docx', lang: 'en' },
        { md: 'propuesta-detallada-en.md', out: 'propuesta-detallada-en.docx', lang: 'en' },
    ];
    for (const f of files) {
        const mdPath = path.join(MD_DIR, f.md);
        const outPath = path.join(EXPORT_DIR, f.out);
        if (fs.existsSync(mdPath)) await createDocx(mdPath, outPath, f.lang);
        else console.warn(`  WARNING: ${f.md} not found, skipping.`);
    }
}

main().catch(err => { console.error(err); process.exit(1); });
