# _scripts/ — MetodologIA Automation Scripts

> Scripts de automatizacion para conversion de documentos, manipulacion de datos, y auditorias.
> Dos runtimes: Python (document manipulation pesado) y Node.js (conversion rapida + brand).

---

## Estructura

```
_scripts/
├── python/                      ← Scripts Python para manipulacion de documentos
│   ├── requirements.txt         — Dependencias: docx, openpyxl, reportlab, pptx, pandas, etc.
│   ├── doc_converter.py         — Conversor multi-formato (md→docx, md→pdf, md→xlsx, xlsx→md, docx→md, md→html)
│   └── data_utils.py            — Utilidades de datos (CSV/JSON/YAML/XLSX + validacion de precios)
│
└── node/                        ← Scripts Node.js para conversion con brand
    ├── package.json             — Dependencias: docx, pptxgenjs, exceljs, marked, handlebars, etc.
    ├── convert.js               — Conversor unificado CLI (md→docx/pptx/xlsx/html, yaml↔json)
    └── audit.js                 — Auditor automatizado (red-list, brand safety, price integrity)
```

## Instalacion

```bash
# Python (una vez)
cd _scripts/python && pip install -r requirements.txt

# Node.js (una vez)
cd _scripts/node && npm install
```

## Uso Rapido

### Python

```bash
# Markdown → DOCX
python _scripts/python/doc_converter.py md2docx propuesta.md propuesta.docx

# Markdown → PDF (branded)
python _scripts/python/doc_converter.py md2pdf reporte.md reporte.pdf

# Markdown → XLSX (tablas)
python _scripts/python/doc_converter.py md2xlsx datos.md datos.xlsx

# XLSX → Markdown
python _scripts/python/doc_converter.py xlsx2md datos.xlsx datos.md

# DOCX → Markdown
python _scripts/python/doc_converter.py docx2md documento.docx documento.md

# Validar precios del catalogo
python _scripts/python/data_utils.py validate-prices catalog/services.yaml catalog/conditions.yaml
```

### Node.js

```bash
# Markdown → DOCX (branded)
node _scripts/node/convert.js md2docx propuesta.md propuesta.docx

# Markdown → PPTX (branded slides)
node _scripts/node/convert.js md2pptx propuesta.md propuesta.pptx

# Markdown → XLSX (branded tables)
node _scripts/node/convert.js md2xlsx datos.md datos.xlsx

# Markdown → HTML (con template opcional)
node _scripts/node/convert.js md2html reporte.md reporte.html --template report

# YAML ↔ JSON
node _scripts/node/convert.js yaml2json catalog.yaml catalog.json

# Auditar documento(s)
node _scripts/node/audit.js propuesta.md
node _scripts/node/audit.js ./documentos/
```

## Cuando Usar Cada Runtime

| Tarea | Python | Node.js |
|---|---|---|
| MD → DOCX | `doc_converter.py` (python-docx) | `convert.js` (docx npm) |
| MD → PDF | `doc_converter.py` (reportlab) | No disponible |
| MD → XLSX | `doc_converter.py` (openpyxl) | `convert.js` (exceljs) |
| MD → PPTX | No disponible | `convert.js` (pptxgenjs) |
| MD → HTML | `doc_converter.py` (markdown) | `convert.js` (marked) |
| DOCX → MD | `doc_converter.py` | No disponible |
| XLSX → MD | `doc_converter.py` | No disponible |
| Data analysis | `data_utils.py` (pandas) | No disponible |
| Price validation | `data_utils.py` | `audit.js` (parcial) |
| Red-list audit | No disponible | `audit.js` |
| Brand audit | No disponible | `audit.js` |
