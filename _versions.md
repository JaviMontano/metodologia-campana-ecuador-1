# ACC Versions — Katherine's Agentic Command Center

> Registro de versiones del meta-orquestador y sus index files.
> Cada version documenta: que cambio, por que, y que impacto tiene.

---

## v3.1 — 2026-03-29 (Current)

**Contexto:** Modelado BPMN de las 10 capacidades principales del ACC como flujos de proceso en Mermaid. Dashboard HTML interactivo para visualizar, navegar e invocar cada flujo. Comando launcher para abrir el dashboard.

### Archivos Nuevos

| Archivo | Tipo | Proposito |
|---------|------|-----------|
| `_flows/bpmn-catalog.md` | BPMN Definitions | 10 flujos Mermaid: Discovery, Propuesta, Arquitectura, Proyecto, Code Review, Feature TDD, Catalogo, Conversion, Deploy, Full Engagement |
| `_flows/dashboard.html` | Dashboard | UI interactiva: sidebar con busqueda, diagramas Mermaid renderizados, info cards (invoke/trigger/gates/triad), guia paso-a-paso con copy-to-clipboard |
| `_flows/open-dashboard.js` | Launcher | CLI para abrir dashboard en browser (`node _flows/open-dashboard.js`) o servir localmente (`--serve`, puerto 3333) |

### Cambios en Archivos Existentes

| Archivo | Cambio | Impacto |
|---------|--------|---------|
| `CLAUDE.md` | v3.0→v3.1. +1 trigger ("dashboard"/"BPMN"). +2 filas ontologia (_flows). Ghost Menu +1 categoria (FLUJOS & DASHBOARD). | Dashboard invocable por lenguaje natural |

---

## v3.0 — 2026-03-29

**Contexto:** Robustecimiento del sistema con templates, scripts, utilidades de conversion de documentos, componentes TSX, prompts/meta-prompts reutilizables, y dependencias Python/Node para manipulacion de PDF, DOCX, XLSX, PPTX, HTML.

### Archivos Nuevos

| Archivo | Tipo | Proposito |
|---------|------|-----------|
| `_templates/html/report.html` | Template | Reporte HTML con KPIs, tablas, brand tokens, print-ready |
| `_templates/html/dashboard.html` | Template | Dashboard con cards, metricas, progreso, responsive |
| `_templates/html/email.html` | Template | Email marketing compatible Outlook/Gmail, CTA branded |
| `_templates/css/brand-base.css` | Stylesheet | Reset + tokens + layout + componentes + utilidades |
| `_templates/css/print.css` | Stylesheet | Optimizaciones para impresion A4 |
| `_templates/js/utils.js` | Utility | Slug, currency (COP/USD), dates, markdown, red-list checker, data helpers |
| `_templates/js/md-parser.js` | Utility | Parser MD a secciones + tables + HTML (Node + Browser) |
| `_templates/tsx/ProposalCard.tsx` | Component | Card de propuesta con status, monto, fecha, brand |
| `_templates/tsx/KPIGrid.tsx` | Component | Grid de metricas con trends up/down |
| `_templates/tsx/StatusBadge.tsx` | Component | Badge de estado semantico (approved/warning/blocked/tier) |
| `_templates/prompts/discovery-intake.md` | Prompt | Captura estructurada de contexto de cliente (10 campos) |
| `_templates/prompts/quality-audit.md` | Prompt | Auditoria RED/YELLOW/GREEN de cualquier documento |
| `_templates/prompts/content-derivation.md` | Prompt | Derivar documento para audiencia especifica |
| `_templates/meta-prompts/meta-excellence-loop.md` | Meta-prompt | Prefijo: forzar calidad 10/10 con rubrica interna |
| `_templates/meta-prompts/meta-bilingual.md` | Meta-prompt | Prefijo: output bilingue ES+EN de calidad nativa |
| `_templates/meta-prompts/meta-autonomous.md` | Meta-prompt | Prefijo: ejecucion desatendida con log y error handling |
| `_templates/INDEX.md` | Index | Indice navegable de templates y assets |
| `_scripts/python/doc_converter.py` | Script | Conversor multi-formato: md→docx, md→pdf, md→xlsx, xlsx→md, docx→md, md→html |
| `_scripts/python/data_utils.py` | Script | Utilidades de datos: CSV/JSON/YAML/XLSX + validacion de precios |
| `_scripts/python/requirements.txt` | Dependencies | python-docx, openpyxl, reportlab, python-pptx, markdown, pandas, PyPDF2, pdfplumber, beautifulsoup4, Jinja2, Pillow |
| `_scripts/node/convert.js` | Script | Conversor unificado CLI: md→docx/pptx/xlsx/html, yaml↔json (branded) |
| `_scripts/node/audit.js` | Script | Auditor automatizado: red-list, brand safety, price integrity |
| `_scripts/node/package.json` | Dependencies | docx, pptxgenjs, exceljs, marked, handlebars, js-yaml, jszip, csv-parse |
| `_scripts/INDEX.md` | Index | Indice navegable de scripts con uso rapido |

### Cambios en Archivos Existentes

| Archivo | Cambio | Impacto |
|---------|--------|---------|
| `CLAUDE.md` | v2.0→v3.0. +2 dominios router (Doc Generation, Templates). +2 triggers. +2 filas ontologia. Ghost Menu ampliado con 2 categorias nuevas. | Routing ahora cubre conversion de documentos y templates |

### Cobertura de Dependencias

| Formato | Lectura | Escritura | Runtime |
|---------|---------|-----------|---------|
| **PDF** | PyPDF2, pdfplumber | reportlab | Python |
| **DOCX** | python-docx / docx npm | python-docx / docx npm | Ambos |
| **XLSX** | openpyxl / exceljs | openpyxl / exceljs | Ambos |
| **PPTX** | python-pptx / pptxgenjs | python-pptx / pptxgenjs | Ambos |
| **HTML** | beautifulsoup4 / marked | markdown / marked | Ambos |
| **CSV** | pandas / csv-parse | pandas / csv-parse | Ambos |
| **YAML** | PyYAML / js-yaml | PyYAML / js-yaml | Ambos |
| **JSON** | nativo | nativo | Ambos |
| **Markdown** | nativo | nativo | Ambos |
| **Images** | Pillow | Pillow | Python |

---

## v2.1 — 2026-03-29

**Contexto:** Segundo pase del bucle de excelencia. Aplicado a los 5 index files + refactorizacion del sistema (archivos nuevos y modificados).

### Cambios respecto a v2.0

| Archivo | Cambio | Impacto |
|---------|--------|---------|
| `_index-routing.md` | +12 keyword groups (dominios 11-22: AI/ML, Data Eng, Figma, Postman, WordPress, HuggingFace, Enterprise Search, MCP Dev, Git, Sourcegraph, Document Gen, Scheduling) | Routing profundo ahora cubre los 22 dominios del CLAUDE.md |
| `_index-skills.md` | +10 secciones nuevas: HuggingFace (10 skills), WordPress (3), Enterprise Search (5), MCP Dev (3), Sourcegraph (2), Git (3), Memory (1), Figma (+3 skills) | ~40 skills indexados que faltaban |
| `_index-agents.md` | +3 secciones: Vercel agents (3), PR-review agents (7), Feature-dev agents (3). +3 filas triad table (AI/ML, API testing, Design) | 13 agentes catalogados que faltaban. Triad composition ampliada |
| `_index-commands.md` | +6 secciones: Data Engineering (21 cmds), Figma (6), HuggingFace (8), Enterprise & Specialized (8), Git & Commits (3) | ~50 comandos indexados que faltaban |
| `_index-workflows.md` | +Error Recovery Protocol (5 pasos) + Checkpoint Resume Protocol (6 pasos, formato tasklog) | Workflows resilientes: recuperan de fallos y resumen entre sesiones |
| `session-state.template.json` | Archivo nuevo | Template para estado de sesion persistente entre sesiones |

---

## v2.0 — 2026-03-29

**Contexto:** Primer pase del bucle de excelencia sobre CLAUDE.md. Evaluacion contra 10 criterios de calidad. Refinado hasta alcanzar estandar maximo.

### Cambios respecto a v1.0

| Criterio | Problema en v1.0 | Solucion en v2.0 |
|----------|-------------------|-------------------|
| **Fundamento** | No referenciaba archivos criticos del proyecto en awakening | Seccion 1 ahora detecta `catalogo-servicios/`, `propuesta-*/`, `metodologia-engine-plugin/`, `discovery/` |
| **Veracidad** | Router cubria 17 dominios pero omitia AI/ML, Data Eng, Figma, Postman, WordPress, HuggingFace | Router ampliado a 22 dominios con cobertura completa del ecosistema |
| **Calidad** | Algunas secciones tenian prosa explicativa innecesaria | Toda seccion reducida a tabla/lista sin filler. Formato uniforme. |
| **Densidad** | Modos de ejecucion no vinculaban gates activos por modo | Tabla de modos ahora incluye columna "Gates Activos" |
| **Simplicidad** | Reglas de confianza dispersas en subsecciones | Consolidadas en tabla de 4 filas: score -> accion |
| **Claridad** | Numeracion de secciones ausente; navegacion dificil | 15 secciones numeradas con titulos inequivocos |
| **Precision** | Tabla de capacidades incompleta (faltaban Data Eng, Figma, HF, WP, Chrome DevTools, Sourcegraph) | 19 plugins listados con conteos verificados |
| **Profundidad** | "Exceeding Expectations" mencionado en Hard Rules pero sin definicion operativa | Seccion 11 dedicada con las 4 capas concretas |
| **Coherencia** | Hard Rules eran 12; faltaba self-improvement | 13 reglas con self-improvement loop como regla 13 |
| **Valor** | Sin Ghost Menu raiz; usuario debia saber los comandos | Seccion 13: Mapa de Capacidades visual por accion (analizar, crear, ejecutar, discovery, review, exportar) |

### Archivos Modificados

| Archivo | Accion | Detalle |
|---------|--------|---------|
| `CLAUDE.md` | Reescrito | v1.0 -> v2.0. 15 secciones numeradas. 22 dominios. Ghost Menu raiz. |

### Archivos Sin Cambios

| Archivo | Razon |
|---------|-------|
| `_index-routing.md` | Algoritmo de routing, keyword groups y tolerance ya cumplian estandar |
| `_index-skills.md` | Catalogo por dominio completo y preciso |
| `_index-agents.md` | 3 niveles + triad composition table ya cumplian |
| `_index-commands.md` | Top 20 + organizacion por accion ya cumplian |
| `_index-workflows.md` | 8 workflows + custom builder ya cumplian |

---

## v1.0 — 2026-03-29

**Contexto:** Primera version. Creacion del meta-orquestador completo desde cero, basado en exploracion profunda del ecosistema de Katherine (44 plugins, 4 frameworks custom JM Labs) y el JM Agentic Delivery Kit v5.1.0 (Pristino v6.0).

### Archivos Creados

| Archivo | Lineas | Proposito |
|---------|--------|-----------|
| `CLAUDE.md` | ~295 | Meta-orquestador principal (12 secciones, 17 dominios) |
| `_index-routing.md` | ~141 | Algoritmo de routing, 10 keyword groups, input tolerance |
| `_index-skills.md` | ~500 | 347+ skills por dominio, 14 categorias |
| `_index-agents.md` | ~350 | 215+ agentes en 3 niveles, triad composition |
| `_index-commands.md` | ~400 | 331+ comandos por accion, Top 20 quick ref |
| `_index-workflows.md` | ~203 | 8 cadenas cross-plugin, custom workflow builder |

### Decisiones de Diseno

1. **Hub + Index (lazy loading):** CLAUDE.md siempre cargado (~300 lineas). Index files on-demand (~1,700 lineas combinadas). Preserva ~80% del context window.
2. **Organizacion por dominio, no por plugin:** Skills, agentes y comandos agrupados por lo que hacen (Arquitectura, PM, Discovery...) no por de donde vienen (SA, PMO, MAO). Esto permite busqueda natural.
3. **Route, don't duplicate:** El orquestador NUNCA reimplementa logica de plugins. Solo mapea intencion a `Skill()` calls existentes. Cuando los plugins se actualizan, el orquestador sigue funcionando.
4. **Evidence protocol unificado:** Union de tags de SA + MAO + PMO + MetodologIA Engine = 11 tags canonicos. Regla del 30% heredada de MAO/PMO.
5. **Triad composition heredada de ADK v5.1.0:** Lead + Support + Guardian para tareas complejas. Solo se activa cuando la tarea es no-trivial.

### Fuentes de Diseno

- **Pristino v6.0** (JM-ADK): Awakening protocol, triad pattern, input tolerance, exceeding expectations, 5 execution modes, workspace automation
- **SA v4.0** (CLAUDE.md): Hub + ontology sub-files, hard rules, evidence protocol, quality gates G0-G2, progressive loading
- **MAO v1.4** (CLAUDE.md): Zero-hallucination protocol, pipeline phases, ghost menus, regla del 30%
- **PMO-APEX v1.0** (CLAUDE.md): Project lifecycle, gates G0-G3, steering committee pattern, changelog discipline
- **MetodologIA Engine** (CLAUDE.md): POR CONFIRMAR protocol, bilingual output, never-block principle, legal guardian pattern

---

## Rubrica de Calidad (Reference)

Criterios contra los que se evalua cada version:

| # | Criterio | Definicion | Medicion |
|---|----------|------------|----------|
| 1 | **Fundamento** | Basado en patrones reales del ecosistema, no inventados | Cada seccion tiene origen trazable a SA/MAO/PMO/ADK |
| 2 | **Veracidad** | Datos correctos (conteos, nombres de skills, rutas) | Verificado contra skill list del sistema |
| 3 | **Calidad** | Formato consistente, sin errores, profesional | Tablas alineadas, markdown valido, sin typos |
| 4 | **Densidad** | Maxima informacion por linea, sin filler | Toda linea aporta informacion accionable |
| 5 | **Simplicidad** | Facil de escanear y navegar | Secciones numeradas, tablas sobre prosa, headers claros |
| 6 | **Claridad** | Inequivoco; cualquier sesion de Claude puede interpretar | Sin ambiguedades en reglas o routing |
| 7 | **Precision** | Skills, comandos y agentes corresponden a los reales | Cross-referenciado con skill list del sistema |
| 8 | **Profundidad** | Cubre todos los aspectos necesarios para orquestar | 22 dominios, 8 workflows, triad, gates, evidence, workspace |
| 9 | **Coherencia** | Terminologia y patrones consistentes entre archivos | Mismo formato tabla en CLAUDE.md y todos los index files |
| 10 | **Valor** | Resuelve el problema del usuario de forma inmediata | Con solo hablar natural, el routing despacha al plugin correcto |
