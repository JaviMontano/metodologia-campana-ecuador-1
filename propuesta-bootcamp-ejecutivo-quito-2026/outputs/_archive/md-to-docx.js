/**
 * MetodologIA — Markdown to DOCX Converter
 * Generates brand-compliant Word documents from markdown sources.
 *
 * Brand: Poppins -> Arial (Office compat), Trebuchet MS body
 * Colors: Navy (#0B2545), Gold (#FFD700)
 *
 * Usage: node md-to-docx.js
 * Prereqs: npm install docx
 */

const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        Table, TableRow, TableCell, WidthType, BorderStyle, TabStopPosition,
        TabStopType, Header, Footer, PageNumber } = require('docx');

const OUTPUT_DIR = path.resolve(__dirname, '..');
const BRAND = {
    navy: '0B2545',
    gold: 'FFD700',
    goldDark: 'FFA000',
    dark: '1F2833',
    gray: '808080',
    light: 'F8F9FC',
    white: 'FFFFFF',
    fontHeading: 'Arial',     // Poppins fallback for Office
    fontBody: 'Trebuchet MS',
};

function parseMarkdownSections(mdContent) {
    const lines = mdContent.split('\n');
    const sections = [];
    let current = null;

    for (const line of lines) {
        if (line.startsWith('# ')) {
            current = { level: 1, title: line.replace('# ', ''), content: [] };
            sections.push(current);
        } else if (line.startsWith('## ')) {
            current = { level: 2, title: line.replace('## ', ''), content: [] };
            sections.push(current);
        } else if (line.startsWith('### ')) {
            current = { level: 3, title: line.replace('### ', ''), content: [] };
            sections.push(current);
        } else if (current) {
            current.content.push(line);
        }
    }
    return sections;
}

function createDocx(mdPath, outputPath, lang) {
    const md = fs.readFileSync(mdPath, 'utf-8');
    const sections = parseMarkdownSections(md);

    const children = [];

    // Title page
    children.push(new Paragraph({ spacing: { before: 4000 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: 'MetodologIA',
            font: BRAND.fontHeading, size: 48, bold: true, color: BRAND.navy,
        })],
    }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
        children: [new TextRun({
            text: lang === 'es' ? 'Acelere su EstrategIA' : 'Accelerate your StrategIA',
            font: BRAND.fontBody, size: 20, color: BRAND.gray, italics: true,
        })],
    }));
    children.push(new Paragraph({ spacing: { before: 800 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: lang === 'es' ? 'Bootcamp Ejecutivo Agentico' : 'Executive Agentic Bootcamp',
            font: BRAND.fontHeading, size: 36, bold: true, color: BRAND.navy,
        })],
    }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: lang === 'es' ? 'Edicion Fundacional Quito 2026' : 'Foundational Quito 2026 Edition',
            font: BRAND.fontHeading, size: 24, color: BRAND.goldDark,
        })],
    }));
    children.push(new Paragraph({ spacing: { before: 2000 } }));
    children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({
            text: 'contacto@metodologia.info',
            font: BRAND.fontBody, size: 18, color: BRAND.gray,
        })],
    }));

    // Content
    for (const section of sections) {
        const headingLevel = section.level === 1 ? HeadingLevel.HEADING_1
            : section.level === 2 ? HeadingLevel.HEADING_2
            : HeadingLevel.HEADING_3;

        children.push(new Paragraph({
            heading: headingLevel,
            spacing: { before: 400, after: 200 },
            children: [new TextRun({
                text: section.title.replace(/\*\*/g, '').replace(/\*/g, ''),
                font: BRAND.fontHeading,
                bold: true,
                color: BRAND.navy,
                size: section.level === 1 ? 32 : section.level === 2 ? 26 : 22,
            })],
        }));

        const text = section.content.join('\n').trim();
        if (text) {
            // Split by double newlines for paragraphs
            const paragraphs = text.split(/\n\n+/);
            for (const para of paragraphs) {
                const cleanPara = para.replace(/^\> /, '').replace(/\*\*/g, '').replace(/\*/g, '').trim();
                if (cleanPara && !cleanPara.startsWith('|')) {
                    children.push(new Paragraph({
                        spacing: { after: 120 },
                        children: [new TextRun({
                            text: cleanPara,
                            font: BRAND.fontBody,
                            size: 20,
                            color: BRAND.dark,
                        })],
                    }));
                }
            }
        }
    }

    // Disclaimer
    children.push(new Paragraph({ spacing: { before: 600 } }));
    children.push(new Paragraph({
        children: [new TextRun({
            text: lang === 'es'
                ? 'Esta es una propuesta de diseno de servicio personalizado. Los precios indicados son indicativos y se confirman antes de la firma del acuerdo de servicios. Este documento no constituye un compromiso de entrega ni un contrato.'
                : 'This is a custom service design proposal. Indicated prices are indicative and confirmed before SOW signing. This document does not constitute a delivery commitment or contract.',
            font: BRAND.fontBody, size: 16, color: BRAND.gray, italics: true,
        })],
    }));

    const doc = new Document({
        sections: [{ children }],
    });

    Packer.toBuffer(doc).then(buffer => {
        fs.writeFileSync(outputPath, buffer);
        console.log(`  Created: ${outputPath}`);
    });
}

// Generate all 4 DOCX files
const files = [
    { md: 'es/propuesta-ejecutiva-es.md', out: 'es/propuesta-ejecutiva-es.docx', lang: 'es' },
    { md: 'es/propuesta-detallada-es.md', out: 'es/propuesta-detallada-es.docx', lang: 'es' },
    { md: 'en/propuesta-ejecutiva-en.md', out: 'en/propuesta-ejecutiva-en.docx', lang: 'en' },
    { md: 'en/propuesta-detallada-en.md', out: 'en/propuesta-detallada-en.docx', lang: 'en' },
];

for (const f of files) {
    const mdPath = path.join(OUTPUT_DIR, f.md);
    const outPath = path.join(OUTPUT_DIR, f.out);
    if (fs.existsSync(mdPath)) {
        createDocx(mdPath, outPath, f.lang);
    } else {
        console.warn(`  WARNING: ${mdPath} not found, skipping.`);
    }
}
