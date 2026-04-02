/**
 * MetodologIA — PPTX Generator v2
 * 12-slide pitch deck from content.json
 *
 * Usage: node md-to-pptx-v2.js
 * Prereqs: npm install pptxgenjs
 */

const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');

const V2_DIR = path.resolve(__dirname, '..', 'v2');
const EXPORT_DIR = path.join(V2_DIR, 'export');
const CONTENT_PATH = path.join(V2_DIR, 'content.json');

const C = { navy: '0B2545', navyDark: '071A33', gold: 'FFD700', goldDark: 'FFA000', white: 'FFFFFF', gray: '94A3B8', light: 'F8F9FC' };

function addSlideBase(pptx, tag) {
    const slide = pptx.addSlide();
    slide.background = { color: C.navy };
    // Gold accent line
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.04, fill: { color: C.gold } });
    // Tag top-right
    if (tag) slide.addText(tag, { x: 10.5, y: 0.2, w: 2.5, h: 0.3, fontSize: 8, color: C.gray, align: 'right', fontFace: 'Arial' });
    // Footer
    slide.addText('MetodologIA — contacto@metodologia.info', { x: 0.5, y: 7.0, w: 8, h: 0.3, fontSize: 7, color: C.gray, fontFace: 'Arial' });
    return slide;
}

function usd(v) { return `$${Number(v).toLocaleString('en-US')}`; }

function createDeck(content, lang, outputPath) {
    const es = lang === 'es';
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE';
    pptx.author = 'MetodologIA';
    pptx.title = es ? 'CAO Bootcamp - Quito 2026' : 'CAO Bootcamp - Quito 2026';

    // SLIDE 1: Title
    const s1 = addSlideBase(pptx, null);
    s1.addText('MetodologIA', { x: 1, y: 1.5, w: 11, h: 1, fontSize: 44, bold: true, color: C.white, fontFace: 'Arial', align: 'center' });
    s1.addText('CAO Bootcamp — Chief Agentic Officer', { x: 1, y: 2.6, w: 11, h: 0.6, fontSize: 24, color: C.gold, fontFace: 'Arial', align: 'center' });
    s1.addText(es ? 'Quito, Ecuador 2026' : 'Quito, Ecuador 2026', { x: 1, y: 3.4, w: 11, h: 0.5, fontSize: 18, color: C.gray, fontFace: 'Arial', align: 'center' });
    s1.addShape(pptx.ShapeType.rect, { x: 5.5, y: 4.2, w: 2, h: 0.04, fill: { color: C.gold } });

    // SLIDE 2: Problem
    const s2 = addSlideBase(pptx, es ? 'PROBLEMA' : 'PROBLEM');
    s2.addText(es ? 'El Problema' : 'The Problem', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const problems = es
        ? ['60% de su semana es operativo: correos, reportes, seguimiento', 'Herramientas de IA aisladas: 73% las abandonan en 2-4 semanas', 'La brecha con directivos que usan IA se duplica cada trimestre']
        : ['60% of your week is operational: emails, reports, follow-ups', 'Isolated AI tools: 73% abandon them in 2-4 weeks', 'The gap with AI-equipped executives doubles every quarter'];
    problems.forEach((p, i) => {
        s2.addShape(pptx.ShapeType.roundRect, { x: 0.8, y: 1.8 + i * 1.6, w: 11.5, h: 1.2, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s2.addText(p, { x: 1.2, y: 2.0 + i * 1.6, w: 10.5, h: 0.8, fontSize: 16, color: C.white, fontFace: 'Arial' });
    });

    // SLIDE 3: Solution
    const s3 = addSlideBase(pptx, es ? 'SOLUCION' : 'SOLUTION');
    s3.addText(es ? 'La Solucion' : 'The Solution', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    s3.addText(es ? 'No es un curso. Es una instalacion.' : 'Not a course. An installation.', { x: 0.5, y: 1.3, w: 12, h: 0.5, fontSize: 18, color: C.gold, fontFace: 'Arial', italic: true });
    const solutions = es
        ? [['Pristino', 'Agente IA personal, Open Source, suyo para siempre'], ['13 Asistentes', 'IA especializados por funcion ejecutiva'], ['2do Cerebro', 'NotebookLM: organiza y conecta su conocimiento']]
        : [['Pristino', 'Personal AI agent, Open Source, yours forever'], ['13 Assistants', 'AI specialized by executive function'], ['2nd Brain', 'NotebookLM: organizes and connects your knowledge']];
    solutions.forEach(([title, desc], i) => {
        const x = 0.8 + i * 4;
        s3.addShape(pptx.ShapeType.roundRect, { x, y: 2.2, w: 3.5, h: 3.5, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s3.addText(title, { x, y: 2.5, w: 3.5, h: 0.6, fontSize: 20, bold: true, color: C.gold, fontFace: 'Arial', align: 'center' });
        s3.addText(desc, { x: x + 0.3, y: 3.3, w: 2.9, h: 2, fontSize: 14, color: C.white, fontFace: 'Arial', align: 'center' });
    });

    // SLIDE 4: Products
    const s4 = addSlideBase(pptx, es ? 'PRODUCTOS' : 'PRODUCTS');
    s4.addText(es ? 'Productos' : 'Products', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const prods = es
        ? [['Taller', 'Gratis', '3h, 13 plazas', 'Funnel de entrada'], ['CAO Bootcamp', '$1,490-$1,990', '20h, 4-10 sem', 'Solo/Dupla/Terna'], ['Empoderamiento', '$1,490/persona', '16 semanas', 'Managers 7+ anios']]
        : [['Workshop', 'Free', '3h, 13 spots', 'Entry funnel'], ['CAO Bootcamp', '$1,490-$1,990', '20h, 4-10 wks', 'Solo/Duo/Trio'], ['Empowerment', '$1,490/person', '16 weeks', 'Managers 7+ yrs']];
    prods.forEach(([name, price, dur, fmt], i) => {
        const x = 0.8 + i * 4;
        s4.addShape(pptx.ShapeType.roundRect, { x, y: 1.6, w: 3.5, h: 4, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s4.addText(name, { x, y: 1.9, w: 3.5, h: 0.5, fontSize: 18, bold: true, color: C.white, fontFace: 'Arial', align: 'center' });
        s4.addText(price, { x, y: 2.6, w: 3.5, h: 0.5, fontSize: 22, bold: true, color: C.gold, fontFace: 'Arial', align: 'center' });
        s4.addText(dur, { x, y: 3.3, w: 3.5, h: 0.4, fontSize: 14, color: C.gray, fontFace: 'Arial', align: 'center' });
        s4.addText(fmt, { x, y: 3.9, w: 3.5, h: 0.4, fontSize: 14, color: C.white, fontFace: 'Arial', align: 'center' });
    });

    // SLIDE 5: Market
    const s5 = addSlideBase(pptx, es ? 'MERCADO' : 'MARKET');
    s5.addText(es ? 'Mercado' : 'Market', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const mkts = [['TAM', usd(content.market.tam.value)], ['SAM', usd(content.market.sam.value)], ['SOM Y1', usd(content.market.som_y1.value)], ['LTV/CAC', content.market.ltv_cac_y1]];
    mkts.forEach(([label, val], i) => {
        const x = 0.8 + i * 3;
        s5.addShape(pptx.ShapeType.roundRect, { x, y: 1.8, w: 2.5, h: 2, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s5.addText(val, { x, y: 2.0, w: 2.5, h: 0.8, fontSize: 24, bold: true, color: C.gold, fontFace: 'Arial', align: 'center' });
        s5.addText(label, { x, y: 2.9, w: 2.5, h: 0.5, fontSize: 14, color: C.gray, fontFace: 'Arial', align: 'center' });
    });
    s5.addText(es ? 'IA Corp Training: $1.5B → $10.4B (2033). LatAm: 7.7% ($280M)' : 'AI Corp Training: $1.5B → $10.4B (2033). LatAm: 7.7% ($280M)', { x: 0.8, y: 4.5, w: 11, h: 0.5, fontSize: 14, color: C.gray, fontFace: 'Arial', align: 'center' });

    // SLIDE 6: Business Model
    const s6 = addSlideBase(pptx, es ? 'MODELO' : 'MODEL');
    s6.addText(es ? 'Modelo de Negocio' : 'Business Model', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    // Revenue split bar
    const shares = [['Coach 50%', 50, C.gold], ['Franquicia 20%', 20, C.goldDark], ['IP 10%', 10, '137DC5'], ['Comercial 20%', 20, C.gray]];
    let barX = 0.8;
    shares.forEach(([label, pct, color]) => {
        const w = (11.5 * pct) / 100;
        s6.addShape(pptx.ShapeType.rect, { x: barX, y: 2, w, h: 0.6, fill: { color } });
        if (w > 1) s6.addText(label, { x: barX, y: 2, w, h: 0.6, fontSize: 10, color: color === C.gold ? C.navy : C.white, fontFace: 'Arial', align: 'center', valign: 'middle' });
        barX += w;
    });
    // Segment table
    const segs = content.financials.segments;
    const tableData = [[es ? 'Segmento' : 'Segment', 'Y1', 'Y2']];
    segs.forEach(s => tableData.push([s.name.es.substring(0, 30), usd(s.y1), usd(s.y2)]));
    s6.addTable(tableData, { x: 0.8, y: 3.2, w: 11.5, fontSize: 12, fontFace: 'Arial',
        color: C.white, border: { type: 'solid', pt: 0.5, color: C.gray },
        colW: [5, 3, 3],
        autoPage: false,
    });

    // SLIDE 7: Competitive Landscape
    const s7 = addSlideBase(pptx, es ? 'COMPETENCIA' : 'COMPETITION');
    s7.addText(es ? 'Panorama Competitivo' : 'Competitive Landscape', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const compData = [[es ? 'Proveedor' : 'Provider', es ? 'Precio' : 'Price', es ? 'Entrega al cierre' : 'Delivery at close']];
    content.competition.forEach(c => {
        const nota = c.strength ? c.strength[lang] : (c.weakness ? c.weakness[lang] : '');
        compData.push([c.name, c.price_range, nota.substring(0, 50)]);
    });
    s7.addTable(compData, { x: 0.8, y: 1.6, w: 11.5, fontSize: 11, fontFace: 'Arial', color: C.white, border: { type: 'solid', pt: 0.5, color: C.gray }, autoPage: false });

    // SLIDE 8: Financials
    const s8 = addSlideBase(pptx, es ? 'FINANCIERO' : 'FINANCIALS');
    s8.addText(es ? 'Finanzas' : 'Financials', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const finKpis = [
        [es ? 'Revenue Y1' : 'Revenue Y1', usd(content.market.som_y1.value)],
        [es ? 'Revenue Y2' : 'Revenue Y2', usd(content.market.som_y2.value)],
        ['24mo', usd(content.market.som_24mo.value)],
        ['LTV/CAC', content.market.ltv_cac_y1],
    ];
    finKpis.forEach(([label, val], i) => {
        const x = 0.8 + i * 3;
        s8.addShape(pptx.ShapeType.roundRect, { x, y: 1.6, w: 2.5, h: 1.5, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s8.addText(val, { x, y: 1.7, w: 2.5, h: 0.7, fontSize: 22, bold: true, color: C.gold, fontFace: 'Arial', align: 'center' });
        s8.addText(label, { x, y: 2.5, w: 2.5, h: 0.4, fontSize: 12, color: C.gray, fontFace: 'Arial', align: 'center' });
    });
    s8.addText(`Burn: $${content.market.burn_monthly}/mo | Break-even: ${content.market.breakeven[lang]}`, { x: 0.8, y: 3.5, w: 11, h: 0.5, fontSize: 14, color: C.gold, fontFace: 'Arial', align: 'center' });

    // SLIDE 9: Traction
    const s9 = addSlideBase(pptx, es ? 'TRACCION' : 'TRACTION');
    s9.addText(es ? 'Traccion y Funnel' : 'Traction & Funnel', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const funnel = es
        ? [['13', 'Directivos convocados'], ['5', 'Edicion Creyentes (early access)'], ['33', 'Graduados CAO Anio 1'], ['15-20', 'Embajadores activos']]
        : [['13', 'Executives invited'], ['5', 'Believers Edition (early access)'], ['33', 'CAO Graduates Year 1'], ['15-20', 'Active Ambassadors']];
    funnel.forEach(([num, label], i) => {
        const w = 10 - i * 1.5;
        const x = (13.33 - w) / 2;
        s9.addShape(pptx.ShapeType.roundRect, { x, y: 1.8 + i * 1.3, w, h: 1, fill: { color: i === 0 ? C.gold : C.navyDark }, rectRadius: 0.1 });
        s9.addText(`${num}  ${label}`, { x, y: 1.8 + i * 1.3, w, h: 1, fontSize: 16, bold: true, color: i === 0 ? C.navy : C.white, fontFace: 'Arial', align: 'center', valign: 'middle' });
    });

    // SLIDE 10: Ambassador Flywheel
    const s10 = addSlideBase(pptx, es ? 'EMBAJADORES' : 'AMBASSADORS');
    s10.addText(es ? 'Flywheel de Embajadores' : 'Ambassador Flywheel', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    const fwSteps = es
        ? ['Graduados CAO', 'Se certifican como Embajadores', 'Refieren 2-3 leads cada uno', 'Nuevos clientes (40% conversion)', 'Mas graduados']
        : ['CAO Graduates', 'Certify as Ambassadors', 'Refer 2-3 leads each', 'New clients (40% conversion)', 'More graduates'];
    fwSteps.forEach((step, i) => {
        s10.addShape(pptx.ShapeType.roundRect, { x: 1 + i * 2.3, y: 2.5, w: 2, h: 2, fill: { color: i % 2 === 0 ? C.gold : C.navyDark }, rectRadius: 0.1 });
        s10.addText(step, { x: 1 + i * 2.3, y: 2.7, w: 2, h: 1.6, fontSize: 12, color: i % 2 === 0 ? C.navy : C.white, fontFace: 'Arial', align: 'center', valign: 'middle' });
        if (i < fwSteps.length - 1) s10.addText('→', { x: 2.8 + i * 2.3, y: 3.2, w: 0.5, h: 0.5, fontSize: 24, color: C.gold, fontFace: 'Arial', align: 'center' });
    });

    // SLIDE 11: Team
    const s11 = addSlideBase(pptx, es ? 'EQUIPO' : 'TEAM');
    s11.addText(es ? 'Equipo' : 'Team', { x: 0.5, y: 0.5, w: 12, h: 0.8, fontSize: 32, bold: true, color: C.white, fontFace: 'Arial' });
    content.team.forEach((m, i) => {
        const x = 0.8 + i * 4;
        s11.addShape(pptx.ShapeType.roundRect, { x, y: 1.6, w: 3.5, h: 4, fill: { color: C.navyDark }, rectRadius: 0.1 });
        s11.addText(m.name, { x, y: 2.0, w: 3.5, h: 0.5, fontSize: 18, bold: true, color: C.white, fontFace: 'Arial', align: 'center' });
        s11.addText(m.role[lang], { x, y: 2.6, w: 3.5, h: 0.4, fontSize: 14, color: C.gold, fontFace: 'Arial', align: 'center' });
        s11.addText(`${m.equity_pct}%`, { x, y: 3.2, w: 3.5, h: 0.5, fontSize: 28, bold: true, color: C.gold, fontFace: 'Arial', align: 'center' });
        s11.addText(m.bio[lang].substring(0, 80), { x: x + 0.2, y: 4.0, w: 3.1, h: 1.2, fontSize: 11, color: C.gray, fontFace: 'Arial', align: 'center' });
    });

    // SLIDE 12: CTA
    const s12 = addSlideBase(pptx, null);
    s12.addText(es ? '5 directivos. 1 (R)Evolucion.\nQuito 2026.' : '5 executives. 1 (R)Evolution.\nQuito 2026.', { x: 1, y: 1.5, w: 11, h: 2, fontSize: 36, bold: true, color: C.white, fontFace: 'Arial', align: 'center' });
    s12.addShape(pptx.ShapeType.rect, { x: 5.5, y: 3.8, w: 2, h: 0.04, fill: { color: C.gold } });
    s12.addText('contacto@metodologia.info', { x: 1, y: 4.2, w: 11, h: 0.5, fontSize: 18, color: C.gold, fontFace: 'Arial', align: 'center' });
    s12.addText(es ? content.disclaimers.innovation_mode.es : content.disclaimers.innovation_mode.en, { x: 1, y: 5.5, w: 11, h: 1, fontSize: 8, color: C.gray, fontFace: 'Arial', align: 'center', italic: true });

    return pptx.writeFile({ fileName: outputPath }).then(() => console.log(`  Created: ${path.basename(outputPath)}`));
}

async function main() {
    if (!fs.existsSync(CONTENT_PATH)) { console.error('ERROR: content.json not found'); process.exit(1); }
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
    const content = JSON.parse(fs.readFileSync(CONTENT_PATH, 'utf8'));
    await createDeck(content, 'es', path.join(EXPORT_DIR, 'pitch-deck-es.pptx'));
    await createDeck(content, 'en', path.join(EXPORT_DIR, 'pitch-deck-en.pptx'));
}

main().catch(err => { console.error(err); process.exit(1); });
