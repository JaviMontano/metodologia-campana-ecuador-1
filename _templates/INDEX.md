# _templates/ — MetodologIA Template & Asset Library

> Plantillas, snippets, utilidades y prompts reutilizables.
> Organizados por tipo. Listos para usar en cualquier proyecto.

---

## Estructura

```
_templates/
├── html/                    ← Plantillas HTML con brand tokens
│   ├── report.html          — Reporte con KPIs, tablas, hallazgos (print-ready)
│   ├── dashboard.html       — Dashboard con cards, metricas, progreso
│   └── email.html           — Email marketing compatible con Outlook/Gmail
│
├── css/                     ← Hojas de estilo reutilizables
│   ├── brand-base.css       — Reset + tokens + layout + componentes + utilidades
│   └── print.css            — Optimizaciones para impresion A4
│
├── js/                      ← Utilidades JavaScript (Node + Browser)
│   ├── utils.js             — Slug, currency, dates, markdown, red-list, data helpers
│   └── md-parser.js         — Parser de Markdown a secciones estructuradas + HTML
│
├── tsx/                     ← Componentes React/TSX reutilizables
│   ├── ProposalCard.tsx     — Card de resumen de propuesta (status, monto, fecha)
│   ├── KPIGrid.tsx          — Grid de metricas con trends
│   └── StatusBadge.tsx      — Badge de estado (approved/warning/blocked/tier)
│
├── prompts/                 ← Prompts listos para copiar y ejecutar
│   ├── discovery-intake.md  — Captura estructurada de contexto de cliente
│   ├── quality-audit.md     — Auditoria RED/YELLOW/GREEN de cualquier documento
│   └── content-derivation.md — Derivar documento para audiencia especifica
│
└── meta-prompts/            ← Prefijos que envuelven otros prompts
    ├── meta-excellence-loop.md  — Forzar calidad 10/10 con rubrica interna
    ├── meta-bilingual.md        — Output bilingue ES+EN de calidad nativa
    └── meta-autonomous.md       — Ejecucion desatendida con log y error handling
```

## Uso Rapido

| Necesito... | Usar |
|---|---|
| Un reporte HTML con brand | `html/report.html` + `css/brand-base.css` |
| Un dashboard de metricas | `html/dashboard.html` |
| Un email con CTA | `html/email.html` |
| Convertir MD a DOCX/PDF/XLSX | `_scripts/python/doc_converter.py` o `_scripts/node/convert.js` |
| Utilidades de slug, currency, fechas | `js/utils.js` |
| Parsear markdown a secciones | `js/md-parser.js` |
| Componente React de propuesta | `tsx/ProposalCard.tsx` |
| Metricas con trends | `tsx/KPIGrid.tsx` |
| Badge de estado | `tsx/StatusBadge.tsx` |
| Capturar info de cliente | `prompts/discovery-intake.md` |
| Auditar documento | `prompts/quality-audit.md` |
| Derivar para audiencia | `prompts/content-derivation.md` |
| Forzar calidad maxima | Prefijo: `meta-prompts/meta-excellence-loop.md` |
| Output bilingue | Prefijo: `meta-prompts/meta-bilingual.md` |
| Ejecucion autonoma | Prefijo: `meta-prompts/meta-autonomous.md` |
