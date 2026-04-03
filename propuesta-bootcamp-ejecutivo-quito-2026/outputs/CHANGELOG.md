# CHANGELOG v2.0 — Bootcamp Ejecutivo Quito 2026

**Fecha:** 1 de abril de 2026
**Desde:** v1.1 (30 de marzo de 2026)
**Hacia:** v2.0

---

## Resumen ejecutivo

Upgrade completo del ecosistema documental. 29+ archivos generados desde un Single Source of Truth (`content.json`). Nuevos formatos (XLSX), nuevos documentos (landing workshop, financial dashboard), correcciones de contenido, y disrupcion visual en todos los HTMLs.

---

## Cambios estructurales

### SSOT: content.json
- **NUEVO**: Archivo JSON centralizado que alimenta todos los formatos
- Contiene: productos, timeline, equipo, mercado, financieros, funnel, FAQ, objections, use cases, deliverables, disclaimers, brand tokens, competencia, programa de embajadores

### Organizacion de archivos
- **NUEVO**: `outputs/v2/` con subdirectorios `html/`, `md/`, `export/`
- **ARCHIVADO**: 11 archivos legacy movidos a `outputs/_archive/` (v7, v8, v9, v10, backups, v1.0)

---

## Cambios de contenido

### Timeline actualizado
| v1.1 | v2.0 |
|------|------|
| Abril = Taller + CAO | Abril = Taller (martes 7 de abril) + CAO Creyentes (early access, 5 de 13) |
| Mayo = Empoderamiento | Mayo = CAO abierto ($1,990) + Empoderamiento |
| Julio = Calendario Académico | Julio = Calendario Académico (cada 2 meses) |

### Audiencia Empoderamiento
- **v1.1**: "gerentes y mandos medios"
- **v2.0**: "gerentes, mandos medios y profesionales con al menos 5 años de experiencia en gestion (ideal 7+)"

### Programa de Embajadores
- **NUEVO**: Documentado en content.json y todos los deliverables
- 50% descuento sobre precio regular para Embajadores graduados
- Modelo habilitador: transfieren descuento a su grupo (terna)
- Caso Camilo: Embajador Colombia, toma CAO en terna a titulo personal

### Capacidad CAO
- **v1.1**: Parcialmente corregido (v1.1 correcto, legacy incorrecto)
- **v2.0**: 100% correcto en todos los archivos. "Solo (1:1), Dupla o Terna" — max 3 personas por engagement

### Red-list
- **v2.0**: 0 instancias de "transformacion" en archivos activos (1 corregida en investor-one-pager)

---

## Archivos generados

### MDs (10 archivos, 2,004 lineas)
| Archivo | Lineas | Tipo |
|---------|--------|------|
| propuesta-ejecutiva-es.md | 157 | Propuesta ejecutiva ES |
| propuesta-ejecutiva-en.md | 157 | Propuesta ejecutiva EN |
| propuesta-detallada-es.md | 337 | Dossier detallado ES |
| propuesta-detallada-en.md | 337 | Dossier detallado EN |
| kyc-ecuador-v2.md | 120 | KYC mercado Ecuador |
| due-diligence-v2.md | 113 | Due diligence partners |
| procurement-eval-v2.md | 128 | Evaluacion tech stack |
| market-research-v2.md | 170 | TAM/SAM/SOM + mercado |
| forecast-model-v2.md | 243 | Forecast 4 segmentos |
| revenue-model-v2.md | 242 | P&L comision |

### HTMLs (9 archivos, ~10,000+ lineas)
| Archivo | Lineas | Tipo | Innovaciones |
|---------|--------|------|-------------|
| landing-workshop-v2.html | 566 | Landing taller martes 7 de abril | Countdown, WhatsApp share |
| invitation-mobile-v2.html | ~1,200 | Invitacion mobile | Progress ring, timeline horizontal |
| invitation-desktop-v2.html | 1,347 | Invitacion desktop | Sticky sidebar, ROI calculator, competencia |
| dossier-cao-v2.html | 1,881 | Dossier completo | 4 vistas, configurador, datos dashboard |
| cristian-invitation-v2.html | 1,244 | Invitacion cofundador | Donut equity, P&L toggle 3 escenarios, Gantt |
| cristian-dossier-v2.html | ~1,200 | Dossier cofundador | Unit economics, ambassador model |
| pitch-deck-v2.html | 1,420 | Pitch deck 12 slides | Speaker notes (N), timer (T), flywheel |
| investor-one-pager-v2.html | 562 | Brief A4 investor | Print-optimized, zero JS |
| financial-dashboard-v2.html | 560 | Dashboard financiero | Scenario toggle, segment tabs, calendar |

### Exports (8 archivos)
| Archivo | Formato | Tamano |
|---------|---------|--------|
| propuesta-ejecutiva-es.docx | DOCX | 14 KB |
| propuesta-ejecutiva-en.docx | DOCX | 14 KB |
| propuesta-detallada-es.docx | DOCX | 19 KB |
| propuesta-detallada-en.docx | DOCX | 19 KB |
| pitch-deck-es.pptx | PPTX | 245 KB |
| pitch-deck-en.pptx | PPTX | 245 KB |
| financial-model.xlsx | XLSX | 12 KB |
| comparativa-productos.xlsx | XLSX | 10 KB |

### Scripts (4 archivos)
| Archivo | Funcion |
|---------|---------|
| build-all-v2.sh | Pipeline orquestador |
| md-to-docx-v2.js | MD → DOCX con tablas y paginacion |
| md-to-pptx-v2.js | content.json → PPTX 12 slides |
| content-to-xlsx.js | content.json → XLSX (financial + comparativa) |

---

## Mejoras tecnicas del pipeline

| v1.1 | v2.0 |
|------|------|
| DOCX sin tablas markdown | DOCX con parseo de tablas |
| DOCX sin paginacion | DOCX con header/footer + page numbers |
| Sin XLSX | XLSX con 2 archivos, 8 sheets, brand tokens |
| PPTX 8 slides | PPTX 12 slides + competencia + flywheel |
| Sin SSOT | content.json como fuente única |

---

## Verificacion v2.0

| Check | Resultado |
|-------|-----------|
| "transformacion" (red-list) | 0 instancias |
| "grupo cerrado de hasta 13" | 0 instancias |
| Precios $1,490/$1,990/$347 | 157 refs, consistentes |
| Disclaimer Innovation Mode | Presente en todos |
| Acentos (Montano/Jarrin) | Correctos en content.json |
| Bilingue (ES+EN) | 100% en MDs, HTMLs con toggle |

---

*Construido por profesionales, potenciado por la red agéntica de MetodologIA.*
