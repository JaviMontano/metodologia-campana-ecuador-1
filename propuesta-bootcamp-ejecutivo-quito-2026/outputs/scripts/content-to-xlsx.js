/**
 * MetodologIA — content.json to XLSX generator
 * Generates branded Excel files from the single source of truth.
 *
 * Outputs:
 *   1. financial-model.xlsx — Full financial model (5 sheets)
 *   2. comparativa-productos.xlsx — Product comparison for clients (3 sheets)
 *
 * Dependencies: exceljs
 * Usage: node content-to-xlsx.js
 */

const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const SCRIPT_DIR = __dirname;
const OUTPUT_DIR = path.join(SCRIPT_DIR, '..');
const EXPORT_DIR = path.join(OUTPUT_DIR, 'export');
const CONTENT_PATH = path.join(OUTPUT_DIR, 'content.json');

// Brand tokens
const NAVY = 'FF0B2545';
const NAVY_DARK = 'FF071A33';
const GOLD = 'FFFFD700';
const WHITE = 'FFFFFFFF';
const LIGHT = 'FFF8F9FC';
const GRAY = 'FF94A3B8';

const headerFont = { name: 'Arial', bold: true, color: { argb: WHITE }, size: 11 };
const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
const goldFont = { name: 'Arial', bold: true, color: { argb: NAVY_DARK }, size: 12 };
const goldFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
const altFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT } };
const bodyFont = { name: 'Arial', size: 10 };
const borderStyle = { style: 'thin', color: { argb: 'FFD1D5DB' } };
const borders = { top: borderStyle, left: borderStyle, bottom: borderStyle, right: borderStyle };

function applyHeaderRow(sheet, row) {
  row.eachCell(cell => {
    cell.font = headerFont;
    cell.fill = headerFill;
    cell.border = borders;
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  });
  row.height = 28;
}

function applyBodyRow(sheet, row, idx) {
  row.eachCell(cell => {
    cell.font = bodyFont;
    cell.border = borders;
    cell.alignment = { vertical: 'middle', wrapText: true };
    if (idx % 2 === 0) cell.fill = altFill;
  });
}

function applyGoldRow(sheet, row) {
  row.eachCell(cell => {
    cell.font = goldFont;
    cell.fill = goldFill;
    cell.border = borders;
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
  row.height = 30;
}

function usd(val) { return `$${Number(val).toLocaleString('en-US')}`; }

async function generateFinancialModel(content) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'MetodologIA';
  wb.created = new Date();

  // --- SHEET 1: Resumen ---
  const s1 = wb.addWorksheet('Resumen', { properties: { tabColor: { argb: GOLD } } });
  s1.columns = [
    { header: 'KPI', key: 'kpi', width: 30 },
    { header: 'Valor', key: 'valor', width: 20 },
    { header: 'Fuente', key: 'fuente', width: 25 },
  ];
  applyHeaderRow(s1, s1.getRow(1));

  const kpis = [
    ['TAM Ecuador', usd(content.market.tam.value), 'KYC Ecuador'],
    ['SAM (Pichincha + Guayas)', usd(content.market.sam.value), 'KYC Ecuador'],
    ['SOM Anio 1', usd(content.market.som_y1.value), 'Forecast Model'],
    ['SOM Anio 2', usd(content.market.som_y2.value), 'Forecast Model'],
    ['Revenue 24 meses', usd(content.market.som_24mo.value), 'Forecast Model'],
    ['Burn mensual', usd(content.market.burn_monthly), 'Revenue Model'],
    ['Break-even', content.market.breakeven.es, 'Revenue Model'],
    ['LTV/CAC Anio 1', content.market.ltv_cac_y1, 'Revenue Model'],
    ['Competidores directos Ecuador', String(content.market.competitors_in_ecuador), 'KYC Ecuador'],
  ];
  kpis.forEach((row, i) => {
    const r = s1.addRow(row);
    applyBodyRow(s1, r, i);
  });

  // --- SHEET 2: P&L Mensual ---
  const s2 = wb.addWorksheet('P&L', { properties: { tabColor: { argb: NAVY } } });
  s2.columns = [
    { header: 'Concepto', key: 'concepto', width: 30 },
    { header: 'Anio 1', key: 'y1', width: 18 },
    { header: 'Anio 2', key: 'y2', width: 18 },
    { header: '24 meses', key: 'total', width: 18 },
  ];
  applyHeaderRow(s2, s2.getRow(1));

  const segments = content.financials.segments;
  const totalY1 = segments.reduce((s, seg) => s + seg.y1, 0);
  const totalY2 = segments.reduce((s, seg) => s + seg.y2, 0);

  segments.forEach((seg, i) => {
    const r = s2.addRow([seg.name.es, usd(seg.y1), usd(seg.y2), usd(seg.y1 + seg.y2)]);
    applyBodyRow(s2, r, i);
  });

  let r = s2.addRow(['TOTAL REVENUE', usd(totalY1), usd(totalY2), usd(totalY1 + totalY2)]);
  applyGoldRow(s2, r);

  r = s2.addRow(['Costos operativos', `-${usd(content.financials.costs_y1)}`, `-${usd(content.financials.costs_y2)}`, `-${usd(content.financials.costs_y1 + content.financials.costs_y2)}`]);
  applyBodyRow(s2, r, segments.length);

  r = s2.addRow(['RESULTADO NETO', usd(content.financials.net_y1), usd(content.financials.net_y2), usd(content.financials.net_y1 + content.financials.net_y2)]);
  applyGoldRow(s2, r);

  r = s2.addRow(['Margen neto', `${Math.round(content.financials.net_y1 / totalY1 * 100)}%`, `${Math.round(content.financials.net_y2 / totalY2 * 100)}%`, '']);
  applyBodyRow(s2, r, segments.length + 2);

  // --- SHEET 3: Unit Economics ---
  const s3 = wb.addWorksheet('Unit Economics', { properties: { tabColor: { argb: 'FF137DC5' } } });
  s3.columns = [
    { header: 'Producto', key: 'producto', width: 35 },
    { header: 'Precio (USD)', key: 'precio', width: 15 },
    { header: 'Formato', key: 'formato', width: 25 },
    { header: 'Capacidad', key: 'capacidad', width: 15 },
    { header: 'Audiencia', key: 'audiencia', width: 40 },
  ];
  applyHeaderRow(s3, s3.getRow(1));

  content.products.forEach((p, i) => {
    const price = p.price_special || p.price_regular || 0;
    const r = s3.addRow([
      p.name.es,
      price === 0 ? 'Gratis' : usd(price),
      p.format.es,
      p.capacity ? String(p.capacity) : 'Sin limite',
      typeof p.audience === 'string' ? p.audience : p.audience.es,
    ]);
    applyBodyRow(s3, r, i);
  });

  // --- SHEET 4: Escenarios ---
  const s4 = wb.addWorksheet('Escenarios', { properties: { tabColor: { argb: 'FFE67E22' } } });
  s4.columns = [
    { header: 'Escenario', key: 'escenario', width: 20 },
    { header: 'Multiplicador', key: 'mult', width: 15 },
    { header: 'Revenue Y1', key: 'rev_y1', width: 18 },
    { header: 'Revenue Y2', key: 'rev_y2', width: 18 },
    { header: 'Net Y1', key: 'net_y1', width: 18 },
    { header: 'Net Y2', key: 'net_y2', width: 18 },
  ];
  applyHeaderRow(s4, s4.getRow(1));

  [
    ['Conservador', 0.7],
    ['Base', 1.0],
    ['Agresivo', 1.3],
  ].forEach(([name, mult], i) => {
    const ry1 = Math.round(totalY1 * mult);
    const ry2 = Math.round(totalY2 * mult);
    const r = s4.addRow([
      name, `${mult * 100}%`,
      usd(ry1), usd(ry2),
      usd(ry1 - content.financials.costs_y1),
      usd(ry2 - content.financials.costs_y2),
    ]);
    if (mult === 1.0) applyGoldRow(s4, r);
    else applyBodyRow(s4, r, i);
  });

  // --- SHEET 5: Calendario ---
  const s5 = wb.addWorksheet('Calendario', { properties: { tabColor: { argb: 'FF27AE60' } } });
  const months = ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar'];
  s5.columns = [
    { header: 'Producto', key: 'producto', width: 25 },
    ...months.map(m => ({ header: m, key: m.toLowerCase(), width: 8 })),
  ];
  applyHeaderRow(s5, s5.getRow(1));

  const calendar = [
    ['Taller DOAP', 'X', 'X', '', '', '', '', '', '', '', '', '', ''],
    ['CAO Creyentes', 'X', '', '', '', '', '', '', '', '', '', '', ''],
    ['CAO Academico', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X', '', 'X'],
    ['Empoderamiento', '', 'X', '', '', 'X', '', '', 'X', '', '', 'X', ''],
    ['B2B', '', '', '', '', '', '', 'X', '', 'X', '', '', ''],
    ['Cobrand', '', '', '', '', '', '', '', 'X', '', '', '', 'X'],
  ];
  calendar.forEach((row, i) => {
    const r = s5.addRow(row);
    applyBodyRow(s5, r, i);
    r.eachCell((cell, col) => {
      if (col > 1 && cell.value === 'X') {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GOLD } };
        cell.font = { name: 'Arial', bold: true, size: 10, color: { argb: NAVY_DARK } };
        cell.alignment = { horizontal: 'center' };
      }
    });
  });

  await wb.xlsx.writeFile(path.join(EXPORT_DIR, 'financial-model.xlsx'));
  console.log('  -> financial-model.xlsx generated (5 sheets)');
}

async function generateComparativa(content) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'MetodologIA';

  // --- SHEET 1: Productos ---
  const s1 = wb.addWorksheet('Productos', { properties: { tabColor: { argb: GOLD } } });
  s1.columns = [
    { header: 'Producto', key: 'producto', width: 30 },
    { header: 'Precio (USD)', key: 'precio', width: 15 },
    { header: 'Duracion', key: 'duracion', width: 20 },
    { header: 'Formato', key: 'formato', width: 25 },
    { header: 'Audiencia', key: 'audiencia', width: 40 },
    { header: 'Entregable clave', key: 'entregable', width: 35 },
  ];
  applyHeaderRow(s1, s1.getRow(1));

  content.products.forEach((p, i) => {
    const price = p.price_special || p.price_regular || 0;
    const dur = p.duration_hours ? `${p.duration_hours}h` : (p.duration_weeks ? `${p.duration_weeks} semanas` : 'N/A');
    const entregable = p.deliverables ? p.deliverables[0].es : (p.note ? p.note.es : '');
    const r = s1.addRow([
      p.name.es,
      price === 0 ? 'Gratis' : usd(price),
      dur,
      p.format.es,
      typeof p.audience === 'string' ? p.audience : p.audience.es,
      entregable,
    ]);
    applyBodyRow(s1, r, i);
  });

  // --- SHEET 2: vs Competencia ---
  const s2 = wb.addWorksheet('vs Competencia', { properties: { tabColor: { argb: NAVY } } });
  s2.columns = [
    { header: 'Proveedor', key: 'proveedor', width: 25 },
    { header: 'Tipo', key: 'tipo', width: 30 },
    { header: 'Rango de precio', key: 'precio', width: 18 },
    { header: 'Ventaja / Debilidad', key: 'nota', width: 50 },
  ];
  applyHeaderRow(s2, s2.getRow(1));

  content.competition.forEach((c, i) => {
    const nota = c.strength ? c.strength.es : (c.weakness ? c.weakness.es : '');
    const r = s2.addRow([c.name, c.type.es, c.price_range, nota]);
    applyBodyRow(s2, r, i);
    if (c.name === 'MetodologIA') applyGoldRow(s2, r);
  });

  // --- SHEET 3: ROI Calculator ---
  const s3 = wb.addWorksheet('ROI Calculator', { properties: { tabColor: { argb: 'FF27AE60' } } });
  s3.columns = [
    { header: 'Parametro', key: 'param', width: 35 },
    { header: 'Valor', key: 'valor', width: 20 },
    { header: 'Nota', key: 'nota', width: 40 },
  ];
  applyHeaderRow(s3, s3.getRow(1));

  const roiData = [
    ['Horas recuperadas / semana', String(content.roi.hours_reclaimed_per_week), 'Editable: ajuste a su caso'],
    ['Valor hora directivo (USD)', usd(content.roi.hourly_rate_usd), 'Editable: ingrese su tarifa'],
    ['Valor mensual recuperado', usd(content.roi.monthly_value), 'Formula: horas x tarifa x 4'],
    ['Valor anual del sistema', usd(content.roi.annual_value), 'Formula: mensual x 12'],
    ['Inversion CAO Creyentes', '$1,490', 'Precio fundador'],
    ['Payback estimado', `${content.roi.payback_days} dias`, 'Proyeccion ilustrativa'],
    ['Ratio valor/inversion (anual)', '34.8x', 'Anual / Inversion'],
  ];
  roiData.forEach((row, i) => {
    const r = s3.addRow(row);
    applyBodyRow(s3, r, i);
  });

  // Disclaimer row
  s3.addRow([]);
  const disc = s3.addRow(['Proyeccion ilustrativa. Resultado depende de consistencia de adopcion.', '', '']);
  disc.getCell(1).font = { name: 'Arial', italic: true, size: 9, color: { argb: GRAY } };

  await wb.xlsx.writeFile(path.join(EXPORT_DIR, 'comparativa-productos.xlsx'));
  console.log('  -> comparativa-productos.xlsx generated (3 sheets)');
}

async function main() {
  if (!fs.existsSync(CONTENT_PATH)) {
    console.error('ERROR: content.json not found at', CONTENT_PATH);
    process.exit(1);
  }
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
  const content = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));

  await generateFinancialModel(content);
  await generateComparativa(content);
}

main().catch(err => { console.error(err); process.exit(1); });
