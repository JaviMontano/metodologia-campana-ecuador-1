#!/usr/bin/env node
/**
 * audit.js — Automated document audit for MetodologIA
 * Checks documents against red-list, brand safety, and price integrity rules.
 *
 * Usage:
 *   node audit.js <file.md>           — Full audit
 *   node audit.js <file.md> --redlist — Red-list scan only
 *   node audit.js <file.md> --prices  — Price integrity only
 *   node audit.js <dir/>              — Audit all .md files in directory
 *
 * Output: JSON report to stdout, human-readable summary to stderr.
 */

const fs   = require('fs');
const path = require('path');

// ── Red List Terms ──────────────────────────────────────────────────────────

const RED_LIST = [
  { term: 'resultados garantizados', category: 'legal', severity: 'RED' },
  { term: 'guaranteed results', category: 'legal', severity: 'RED' },
  { term: 'sin riesgo', category: 'legal', severity: 'RED' },
  { term: 'zero risk', category: 'legal', severity: 'RED' },
  { term: 'resultados instantáneos', category: 'legal', severity: 'RED' },
  { term: 'instant results', category: 'legal', severity: 'RED' },
  { term: 'revolucionario', category: 'brand', severity: 'RED' },
  { term: 'revolutionary', category: 'brand', severity: 'RED' },
  { term: 'disruptivo', category: 'brand', severity: 'RED' },
  { term: 'disruptive', category: 'brand', severity: 'RED' },
  { term: 'único en el mercado', category: 'brand', severity: 'RED' },
  { term: 'unique in the market', category: 'brand', severity: 'RED' },
  { term: 'soluciones innovadoras', category: 'brand', severity: 'RED' },
  { term: 'innovative solutions', category: 'brand', severity: 'RED' },
  { term: 'equipo de expertos', category: 'brand', severity: 'RED' },
  { term: 'team of experts', category: 'brand', severity: 'RED' },
  { term: 'hack', category: 'brand', severity: 'RED' },
  { term: 'truco', category: 'brand', severity: 'RED' },
  { term: 'secreto', category: 'brand', severity: 'RED' },
];

const TRANSFORMATION_CHECK = [
  { find: /transformaci[oó]n/gi, replace: '(R)Evolución', lang: 'es' },
  { find: /transformation/gi, replace: '(R)Evolution', lang: 'en' },
];

// ── Audit Functions ─────────────────────────────────────────────────────────

function auditRedList(content, filePath) {
  const findings = [];
  const lines = content.split('\n');
  const contentLower = content.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (const rule of RED_LIST) {
    const termNorm = rule.term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (contentLower.includes(termNorm)) {
      // Find line number
      for (let i = 0; i < lines.length; i++) {
        const lineNorm = lines[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (lineNorm.includes(termNorm)) {
          findings.push({
            file: filePath,
            line: i + 1,
            severity: rule.severity,
            category: rule.category,
            term: rule.term,
            context: lines[i].trim().substring(0, 120),
            fix: `Remove or replace "${rule.term}"`,
          });
        }
      }
    }
  }

  // Check for "transformación" not replaced
  for (const check of TRANSFORMATION_CHECK) {
    const matches = content.match(check.find);
    if (matches) {
      for (let i = 0; i < lines.length; i++) {
        if (check.find.test(lines[i])) {
          findings.push({
            file: filePath,
            line: i + 1,
            severity: 'YELLOW',
            category: 'brand',
            term: matches[0],
            context: lines[i].trim().substring(0, 120),
            fix: `Replace with "${check.replace}"`,
          });
          check.find.lastIndex = 0; // reset regex
        }
      }
    }
  }

  return findings;
}

function auditPrices(content, filePath) {
  const findings = [];
  const lines = content.split('\n');
  const copPattern = /COP\s*[\d.,]+/gi;
  const usdPattern = /USD\s*[\d.,]+/gi;
  const pcPattern = /\[POR CONFIRMAR[^\]]*\]/gi;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check COP format (should use dots for thousands)
    const copMatches = line.match(copPattern);
    if (copMatches) {
      for (const m of copMatches) {
        const digits = m.replace(/[^0-9]/g, '');
        if (digits.length > 6 && !m.includes('.')) {
          findings.push({
            file: filePath, line: i + 1, severity: 'YELLOW', category: 'price',
            term: m, context: line.trim().substring(0, 120),
            fix: 'COP amounts should use dots for thousands: COP 12.000.000',
          });
        }
      }
    }

    // Check USD without indicative rate note
    const usdMatches = line.match(usdPattern);
    if (usdMatches) {
      const hasNote = line.toLowerCase().includes('indicat') || line.toLowerCase().includes('sujeto a variación');
      if (!hasNote) {
        findings.push({
          file: filePath, line: i + 1, severity: 'YELLOW', category: 'price',
          term: usdMatches[0], context: line.trim().substring(0, 120),
          fix: 'USD amounts need: "(indicative rate, subject to variation)"',
        });
      }
    }

    // Track [POR CONFIRMAR] items
    const pcMatches = line.match(pcPattern);
    if (pcMatches) {
      for (const m of pcMatches) {
        findings.push({
          file: filePath, line: i + 1, severity: 'INFO', category: 'por_confirmar',
          term: m, context: line.trim().substring(0, 120),
          fix: 'Verify this item is documented in conditions.yaml',
        });
      }
    }
  }

  return findings;
}

function auditDocument(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const findings = [
    ...auditRedList(content, filePath),
    ...auditPrices(content, filePath),
  ];

  const red    = findings.filter(f => f.severity === 'RED').length;
  const yellow = findings.filter(f => f.severity === 'YELLOW').length;
  const info   = findings.filter(f => f.severity === 'INFO').length;

  let verdict = 'APPROVED';
  if (red > 0) verdict = 'BLOCKED';
  else if (yellow > 0) verdict = 'APPROVED_WITH_WARNINGS';

  return { file: filePath, verdict, red, yellow, info, findings };
}

// ── CLI ──────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: node audit.js <file.md|directory/> [--redlist|--prices]');
    process.exit(1);
  }

  const target = args[0];
  let files;

  if (fs.statSync(target).isDirectory()) {
    files = fs.readdirSync(target)
      .filter(f => f.endsWith('.md'))
      .map(f => path.join(target, f));
  } else {
    files = [target];
  }

  const results = files.map(f => auditDocument(f));

  // Human-readable summary to stderr
  for (const r of results) {
    const icon = r.verdict === 'BLOCKED' ? 'X' : r.verdict === 'APPROVED_WITH_WARNINGS' ? '!' : 'OK';
    process.stderr.write(`[${icon}] ${r.file} — ${r.verdict} (R:${r.red} Y:${r.yellow} I:${r.info})\n`);
  }

  const totalRed = results.reduce((s, r) => s + r.red, 0);
  const totalYellow = results.reduce((s, r) => s + r.yellow, 0);
  process.stderr.write(`\nTotal: ${files.length} files | ${totalRed} RED | ${totalYellow} YELLOW\n`);

  // JSON to stdout
  console.log(JSON.stringify(results, null, 2));

  process.exit(totalRed > 0 ? 1 : 0);
}

main();
