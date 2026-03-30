# Derivation Matrix — Sections per Document Version

**Purpose:** Define exactly which sections of a canonical document appear in each derived version, how they transform, and what rules apply.

---

## Table of Contents
1. Section Map by Version
2. Transformation Rules
3. Tone & Style per Version
4. Price Consistency Protocol
5. CTA Rules
6. Footer Requirements

---

## 1) Section Map by Version

Legend:
- **I** = Include as-is (may condense)
- **T** = Transform (rewrite for audience)
- **X** = Exclude
- **A** = Add (section doesn't exist in canonical; create for this version)
- **C** = Condense to table/bullet (extract key data only)

| Sec # | Canonical Section | ejecutiva-b2b | ejecutiva-b2c | comercial-b2b | comercial-b2c | compras | inexperto | cobranding | whitelabel |
|-------|-------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | Ficha rapida | C | C | C | C | I | T | C | C |
| 1 | Definicion y posicionamiento | T | T | T | T | I | T | T | T |
| 2 | Que NO es | I | I | X | X | I | T | I | I |
| 3 | Propuesta de valor (dolor→solucion) | T | T | T(hook) | T(hook) | X | T | T | T |
| 4 | Arquitectura del servicio | C | C | T(recorrido) | T(recorrido) | I | T(pasos) | C | C |
| 5 | Resultados esperados | T | T | T | T | C | T | T | T |
| 6 | Criterios de aceptacion | X | X | X | X | I | X | X | X |
| 7 | Entregables | C | C | I | I | I | T | C | C |
| 8 | Metodo de entrega | X | X | X | X | I | X | T | T |
| 9 | Gestion de niveles | X | X | X | X | I | X | X | T |
| 10 | Contextualizacion | X | X | A(mencion) | A(mencion) | I | X | T | T |
| 11 | Operacion y soporte | X | X | X | X | I | X | T | T |
| 12 | Precios | I | I | I | I | I | T | T | T |
| 12.6 | Credito educativo | I | I | I | I | I | T | T | T |
| 13 | Metricas de impacto | C | C | X | X | I | X | X | X |
| 14 | Riesgos y mitigaciones | X | X | X | X | I | X | A(alianza) | A(alianza) |
| 15 | Continuidad y siguiente paso | I | I | I | I | X | T | T | T |
| -- | Comparativa honesta | A | A | A | A | X | A | X | X |
| -- | FAQ del comprador/participante | X | X | A | A | X | A | X | X |
| -- | Caso de negocio (3 lineas) | A | A | X | X | X | X | X | X |
| -- | Framework de decision | A | X | X | X | X | X | X | X |
| -- | Condiciones de exito | A | A | A | A | X | A | X | X |
| -- | Testimoniales (marco) | X | X | A | A | X | X | X | X |
| -- | CTA / siguiente paso | I | I | I | I | X | I | X | X |

---

## 2) Transformation Rules

### T (Transform) — How to rewrite

| Target Version | Transformation Rules |
|----------------|---------------------|
| **ejecutiva-b2b** | Rewrite for C-suite. Focus: ROI, risk, strategic impact. Remove operational detail. Max 25 words/sentence. Third person formal ("su equipo", "la organizacion"). Include comparison table vs alternatives. |
| **ejecutiva-b2c** | Rewrite for individual decision maker. Focus: personal outcome, time saved, career impact. Max 25 words/sentence. Second person ("tu"). Include personal investment framing. |
| **comercial-b2b** | Hook with pain point. Aspirational + concrete. "Tu equipo". Max 20 words/sentence. Case studies by team type. Substitute technical terms with benefit language. |
| **comercial-b2c** | Hook with pain point. Personal narrative. "Tu". Max 20 words/sentence. Three signals of need. Substitute ALL technical terms. |
| **compras** | Formal, specification-grade. Third person. Max 30 words/sentence. Include UNSPSC codes, RACI, SLA with exact times. Self-sufficient for contract inclusion. |
| **inexperto** | Conversational, zero jargon. "Tu". Max 15 words/sentence. Apply ALL substitutions from editorial guide. Questions as subtitles. 2-3 sentence paragraphs max. |
| **cobranding** | Addendum over B2B. Focus: partner eligibility, branding rules, revenue models, exclusivity, exit protocol. |
| **whitelabel** | Addendum over B2B. Focus: licensing, QA framework, facilitator training, IP rules, update protocol. |

### Mandatory Substitutions for "inexperto"

Always apply these — never leave technical terms in usuario-inexperto documents:

| Technical Term | Substitution |
|----------------|-------------|
| Meta-prompt | Instrucciones personalizadas para la IA |
| Playbook | Guia paso a paso |
| Asistente IA | Herramienta de IA configurada para ti |
| Framework | Metodo / sistema |
| Bootcamp | Curso intensivo practico (first mention only; then "Bootcamp" is OK) |
| Facilitador | Instructor / guia |
| Embajador | Tu contacto personal |
| Brief | Informacion que necesitamos de ti |
| Artefacto | Documento / resultado que produces |
| Campus / LMS | Plataforma de materiales |
| NPS | Encuesta de satisfaccion |
| Iteracion | Revision / mejora |
| ROI, OKR, KPI, SLA | PROHIBITED — rewrite in plain language |
| SSOT, DoD, RACI | PROHIBITED — rewrite or omit |
| Capstone | Proyecto final |
| Co-creacion | Trabajo conjunto |
| Stakeholder | Persona clave / responsable |
| Compliance | Cumplimiento / requisitos legales |
| Human-in-the-loop | Tu siempre decides / la IA es tu herramienta, no tu jefe |

---

## 3) Tone & Style per Version (quick reference)

| Version | Person | Max words/sentence | Structure preference | Emoji | Exclamation marks |
|---------|--------|-------------------|---------------------|-------|-------------------|
| ejecutiva-b2b | 3rd formal | 25 | bullets > tables > prose | No | No |
| ejecutiva-b2c | 2nd "tu" | 25 | bullets > tables > prose | No | No |
| comercial-b2b | 2nd "tu equipo" | 20 | narrative + subtitles | No | Max 1/doc |
| comercial-b2c | 2nd "tu" | 20 | narrative + subtitles | No | Max 1/doc |
| compras | 3rd formal | 30 | tables > lists > prose | No | No |
| inexperto | 2nd "tu" | 15 | short paragraphs, questions | No | Max 1/doc |
| cobranding | 3rd formal | 30 | tables > lists > prose | No | No |
| whitelabel | 3rd formal | 30 | tables > lists > prose | No | No |

---

## 4) Price Consistency Protocol

**ZERO TOLERANCE for price discrepancies between canonical and any derived document.**

Verification steps:
1. Extract ALL price mentions from canonical (Sec 0, Sec 12.*, any inline mentions)
2. Extract ALL price mentions from the derived document
3. Compare character-by-character including:
   - Amount (COP X.XXX.XXX)
   - IVA notation (+ IVA, incluido, discriminado)
   - Conditions (por ciclo, por persona, hasta X participantes)
   - Credit conditions (%, ventana, intransferible)
   - Guarantee conditions (%, time window, retroalimentacion requirement)
4. ANY discrepancy = BLOCKER. Do not produce the document until resolved.

**Common price fields to verify:**
- Base price B2B (per cycle)
- Base price B2C (per person)
- Cofacilitation surcharge
- Multiple execution discount
- Reprogramming fees
- Campus continuation price
- Credit educativo percentage and window
- Guarantee percentage and time window

---

## 5) CTA Rules

| Version | CTA Required | CTA Style |
|---------|:---:|-----------|
| ejecutiva-b2b | Yes | "Contacte a su embajador" or equivalent formal |
| ejecutiva-b2c | Yes | "Reserva tu lugar" or equivalent direct |
| comercial-b2b | Yes | Action-oriented with calendar link placeholder |
| comercial-b2c | Yes | Action-oriented with WhatsApp/email/calendar |
| compras | No | (Self-sufficient for procurement process) |
| inexperto | Yes | Conversational: "Escribe 'hola' por WhatsApp" |
| cobranding | No | (Addendum, not standalone sales doc) |
| whitelabel | No | (Addendum, not standalone sales doc) |

---

## 6) Footer Requirements

Every derived document MUST end with:

```
Derivado de: {service-slug}/canonico.md v{version} ({YYYY-MM-DD}). Precios verificados contra canonico: si, {YYYY-MM-DD}.
```

If prices could NOT be verified (e.g., canonical has [POR CONFIRMAR] on pricing):
```
Derivado de: {service-slug}/canonico.md v{version} ({YYYY-MM-DD}). Precios: PENDIENTE DE VERIFICACION — ver items [PC-XX] en 00-resolucion-por-confirmar.md.
```
