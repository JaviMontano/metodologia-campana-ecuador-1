/**
 * MetodologIA — Markdown to PPTX Converter
 * Generates brand-compliant PowerPoint pitch decks.
 *
 * Brand: Navy (#0B2545), Gold (#FFD700), Arial/Trebuchet
 * Slides: 8 slides per deck (executive summary format)
 *
 * Usage: node md-to-pptx.js
 * Prereqs: npm install pptxgenjs
 */

const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');

const OUTPUT_DIR = path.resolve(__dirname, '..');

const BRAND = {
    navy: '0B2545',
    navyDark: '020617',
    gold: 'FFD700',
    goldDark: 'FFA000',
    white: 'FFFFFF',
    gray: '94A3B8',
    lightGray: 'F8F9FC',
};

function createPitch(lang, outputPath) {
    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5 inches
    pptx.author = 'MetodologIA';
    pptx.company = 'MetodologIA';
    pptx.title = lang === 'es' ? 'Bootcamp Ejecutivo Agentico — Quito 2026' : 'Executive Agentic Bootcamp — Quito 2026';

    const isEs = lang === 'es';

    // ── Slide 1: Title ──
    let slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText([
        { text: 'Metodolog', options: { color: BRAND.white, fontSize: 36, fontFace: 'Arial', bold: true } },
        { text: 'IA', options: { color: BRAND.gold, fontSize: 36, fontFace: 'Arial', bold: true } },
    ], { x: 0.8, y: 1.5, w: 11, h: 1 });
    slide.addText(isEs ? 'Bootcamp Ejecutivo Agentico' : 'Executive Agentic Bootcamp', {
        x: 0.8, y: 2.8, w: 11, h: 1.2, fontSize: 44, fontFace: 'Arial', bold: true, color: BRAND.white,
    });
    slide.addText(isEs ? 'Edicion Fundacional Quito 2026 — Solo 5 Plazas' : 'Foundational Quito 2026 Edition — Only 5 Seats', {
        x: 0.8, y: 4.2, w: 11, h: 0.6, fontSize: 18, fontFace: 'Trebuchet MS', color: BRAND.gold,
    });
    slide.addText('contacto@metodologia.info', {
        x: 0.8, y: 6.2, w: 5, h: 0.4, fontSize: 12, fontFace: 'Trebuchet MS', color: BRAND.gray,
    });

    // ── Slide 2: The Invitation ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'La Invitacion' : 'The Invitation', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    slide.addText(
        isEs
            ? 'Buscamos 5 directivos en Quito dispuestos a co-crear el primer caso de exito de entrenamiento ejecutivo agentico en Ecuador.\n\nUsted operara con un agente de IA propio desde el dia uno.\nNo es un curso. Es una (r)evolucion operativa personal.'
            : 'We are looking for 5 executives in Quito ready to co-create the first success case of agentic executive training in Ecuador.\n\nYou will operate with your own AI agent from day one.\nThis is not a course. It is a personal operational (r)evolution.',
        { x: 0.8, y: 1.8, w: 11, h: 4.5, fontSize: 18, fontFace: 'Trebuchet MS', color: BRAND.white, lineSpacing: 28 }
    );

    // ── Slide 3: What You Receive ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'Que Recibe' : 'What You Receive', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    const deliverables = isEs
        ? [
            ['Agente Pristino', 'Open Source, instalado desde dia 1. Suyo al cerrar.'],
            ['13 Asistentes IA', 'Task tracking, meeting analysis, planning, time management + 8 mas.'],
            ['Segundo Cerebro', 'NotebookLM + Gemini. Su repositorio vivo de conocimiento.'],
            ['Exoesqueleto IDE', 'Antigravity, Codex o VS Code (capas gratuitas).'],
            ['9 Sesiones x 2h', '18 horas de co-creacion, ritmo de 3-6 semanas.'],
        ]
        : [
            ['Pristino Agent', 'Open Source, installed from day 1. Yours at closure.'],
            ['13 AI Assistants', 'Task tracking, meeting analysis, planning, time management + 8 more.'],
            ['Second Brain', 'NotebookLM + Gemini. Your living knowledge repository.'],
            ['IDE Exoskeleton', 'Antigravity, Codex or VS Code (free tiers).'],
            ['9 Sessions x 2h', '18 hours of co-creation, paced over 3-6 weeks.'],
        ];
    deliverables.forEach((item, i) => {
        const y = 1.8 + i * 1.0;
        slide.addText(item[0], { x: 0.8, y, w: 3.5, h: 0.5, fontSize: 16, fontFace: 'Arial', bold: true, color: BRAND.gold });
        slide.addText(item[1], { x: 4.5, y, w: 8, h: 0.5, fontSize: 14, fontFace: 'Trebuchet MS', color: BRAND.white });
    });

    // ── Slide 4: Investment ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'Inversion' : 'Investment', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    slide.addText('$2,500 USD', {
        x: 0.8, y: 2.0, w: 5, h: 0.7, fontSize: 24, fontFace: 'Arial', color: BRAND.gray, strike: true,
    });
    slide.addText('$1,500 USD', {
        x: 0.8, y: 2.8, w: 5, h: 1.2, fontSize: 54, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    slide.addText(
        isEs ? 'Precio especial — primeros 5 casos en Quito\n(indicative rate, subject to variation)' : 'Special price — first 5 cases in Quito\n(indicative rate, subject to variation)',
        { x: 0.8, y: 4.2, w: 5, h: 0.8, fontSize: 14, fontFace: 'Trebuchet MS', color: BRAND.gray }
    );
    slide.addText(
        isEs ? 'Licencias IA no incluidas\n~$20-60 USD/mes a cargo del ejecutivo' : 'AI licenses not included\n~$20-60 USD/month, executive\'s responsibility',
        { x: 7, y: 2.5, w: 5, h: 1.5, fontSize: 14, fontFace: 'Trebuchet MS', color: BRAND.white }
    );

    // ── Slide 5: Modalities ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'Modalidades' : 'Modalities', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    const modes = isEs
        ? [['Solo (1:1)', 'Usted y su facilitador. Maxima profundidad.'],
           ['Dupla', 'Con su primera linea. Capacidad en tandem.'],
           ['Terna', 'Con 2 aliados clave. (R)Evolucion sincronizada.']]
        : [['Solo (1:1)', 'You and your facilitator. Maximum depth.'],
           ['Duo', 'With your direct report. Capability in tandem.'],
           ['Trio', 'With 2 key allies. Synchronized (r)evolution.']];
    modes.forEach((m, i) => {
        const y = 2.0 + i * 1.4;
        slide.addText(m[0], { x: 0.8, y, w: 3, h: 0.5, fontSize: 20, fontFace: 'Arial', bold: true, color: BRAND.gold });
        slide.addText(m[1], { x: 4.0, y, w: 8, h: 0.5, fontSize: 16, fontFace: 'Trebuchet MS', color: BRAND.white });
    });
    slide.addText(
        isEs ? 'Mismo precio en cualquier modalidad. Requisito: trabajar juntos.' : 'Same price for all modalities. Requirement: work together.',
        { x: 0.8, y: 6.0, w: 11, h: 0.5, fontSize: 12, fontFace: 'Trebuchet MS', color: BRAND.gray, italic: true }
    );

    // ── Slide 6: Conditions ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'Condiciones' : 'Conditions', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    const conditions = isEs
        ? ['Duracion: 3 a 6 semanas', 'Formato: Online, sesiones de 2h', 'No-show: 1a justificada = $0. Siguientes = $100 USD.',
           'Garantia: 100% devolucion antes de 4h (1h retroalimentacion).', 'Pago previo al inicio.']
        : ['Duration: 3 to 6 weeks', 'Format: Online, 2h sessions', 'No-show: 1st justified = $0. Subsequent = $100 USD.',
           'Guarantee: 100% refund before 4h (1h structured feedback).', 'Payment prior to start.'];
    conditions.forEach((c, i) => {
        slide.addText('  ' + c, { x: 0.8, y: 1.8 + i * 0.8, w: 11, h: 0.5, fontSize: 16, fontFace: 'Trebuchet MS', color: BRAND.white });
    });

    // ── Slide 7: Workshop ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText(isEs ? 'No esta seguro?' : 'Not sure yet?', {
        x: 0.8, y: 0.5, w: 11, h: 0.8, fontSize: 28, fontFace: 'Arial', bold: true, color: BRAND.gold,
    });
    slide.addText(
        isEs
            ? '"De Ocupado a Productivo con Agentes de IA"\n\n3 horas | Gratuito | Sin compromiso\nSemana de Pascua 2026\n\nContacto: Cristian Jarrin\ncontacto@metodologia.info'
            : '"From Busy to Productive with AI Agents"\n\n3 hours | Free | No commitment\nEaster Week 2026\n\nContact: Cristian Jarrin\ncontacto@metodologia.info',
        { x: 1.5, y: 2.0, w: 10, h: 4.5, fontSize: 20, fontFace: 'Trebuchet MS', color: BRAND.white, lineSpacing: 32, align: 'center' }
    );

    // ── Slide 8: CTA ──
    slide = pptx.addSlide();
    slide.background = { fill: BRAND.navyDark };
    slide.addText([
        { text: 'Metodolog', options: { color: BRAND.white, fontSize: 44, fontFace: 'Arial', bold: true } },
        { text: 'IA', options: { color: BRAND.gold, fontSize: 44, fontFace: 'Arial', bold: true } },
    ], { x: 0.8, y: 1.5, w: 11, h: 1, align: 'center' });
    slide.addText(isEs ? 'Reserve su plaza ahora' : 'Reserve your seat now', {
        x: 0.8, y: 3.0, w: 11, h: 1, fontSize: 32, fontFace: 'Arial', bold: true, color: BRAND.gold, align: 'center',
    });
    slide.addText('contacto@metodologia.info', {
        x: 0.8, y: 4.5, w: 11, h: 0.6, fontSize: 20, fontFace: 'Trebuchet MS', color: BRAND.white, align: 'center',
    });
    slide.addText(isEs ? 'Solo 5 plazas disponibles' : 'Only 5 seats available', {
        x: 0.8, y: 5.5, w: 11, h: 0.5, fontSize: 14, fontFace: 'Trebuchet MS', color: BRAND.gray, align: 'center', italic: true,
    });

    pptx.writeFile({ fileName: outputPath })
        .then(() => console.log(`  Created: ${outputPath}`))
        .catch(err => console.error(`  ERROR generating ${outputPath}:`, err));
}

// Generate both language versions
createPitch('es', path.join(OUTPUT_DIR, 'es', 'pitch-deck-es.pptx'));
createPitch('en', path.join(OUTPUT_DIR, 'en', 'pitch-deck-en.pptx'));
