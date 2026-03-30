---
name: metodologia-catalogo-ops
description: >
  This skill should be used when the user asks to "generar canonico",
  "derivar documento", "verificar catalogo", "proponer servicio",
  "auditar texto comercial", "crear version ejecutiva/comercial/inexperto",
  "revisar precios", "verificar brand safety", "generar servicio a medida",
  "innovar servicio", "verificar compromisos legales", or mentions any document
  of the MetodologIA service catalog (canonicos, derivadas, guias, anexos).
  Orchestrates ALL operations on the MetodologIA service catalog: creation,
  derivation, verification, innovation, legal/commercial safety review, and
  brand compliance. Use this skill whenever the user references MetodologIA
  services, catalog documents, pricing, editorial guidelines, service proposals,
  or any combination thereof — even if they don't say "catalogo" explicitly.
argument-hint: "<command> [service-slug] [--flags]"
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, Agent
model: opus
---

# MetodologIA Catalogo Ops

Orquesta todas las operaciones del catalogo de servicios MetodologIA: crear canonicos, derivar documentos por segmento, verificar coherencia, innovar servicios a medida, y auditar textos para seguridad legal/comercial y brand compliance.

## Why This Exists

El catalogo MetodologIA tiene 17 servicios × 9 archivos cada uno = 153 documentos potenciales, gobernados por 7+ documentos transversales (glosario, editorial, DoD, derivacion, variantes, interdependencias, POR CONFIRMAR). Mantener coherencia manual es imposible. Este skill automatiza la produccion, verificacion y evolucion del catalogo con rigor documental completo.

## Assumptions & Limits

- El repositorio contiene la carpeta `catalogo-servicios/` con la estructura definida en el inventario maestro
- Los documentos transversales (`00-*.md`) existen y son la fuente de reglas
- El canonico (.md) de cada servicio es el SSOT; toda derivada se produce DESDE el canonico
- Este skill NO toma decisiones de pricing ni resuelve [POR CONFIRMAR] — los escala
- Este skill NO publica documentos — produce borradores verificados para revision humana
- Limites eticos: human-in-the-loop siempre; la IA propone, el humano valida

## Commands

```
catalogo derivar <service-slug> [--version ejecutiva-b2b|ejecutiva-b2c|comercial-b2b|comercial-b2c|compras|inexperto|cobranding|whitelabel|todas]
catalogo verificar <service-slug|--all> [--check precios|editorial|dod|referencias|legal|brand|todo]
catalogo proponer <brief-description> [--base service-slug] [--segmento b2b|b2c|b2b2b]
catalogo innovar <requerimiento-cliente> [--contexto sector/industria]
catalogo auditar <file-path> [--nivel legal|brand|comercial|todo]
catalogo estado [--servicio slug|--catalogo]
catalogo sync-precios [--fix|--report]
catalogo por-confirmar [--resolver|--listar|--priorizar]
```

## Before Any Operation

1. Read the transversal documents in this order (stop if already loaded in context):
   ```
   00-glosario-catalogo.md        → vocabulary rules
   00-guia-editorial.md           → tone/style per document type
   00-guia-derivacion-versiones.md → derivation rules per version
   00-guia-variantes-segmento.md  → B2B/B2C/B2B2B differences
   00-dod-maestro.md              → acceptance criteria
   00-inventario-maestro.md       → service registry + states
   00-mapa-interdependencias.md   → cross-references + sync rules
   00-resolucion-por-confirmar.md → pending items
   00-template-canonico-servicio-v2.md → canonical template
   ```

2. Read the reference files in `references/` of THIS skill:
   - `references/derivation-matrix.md` — exact sections per version
   - `references/legal-safety-checklist.md` — legal/commercial verification rules
   - `references/brand-voice-rules.md` — brand protection and voice consistency
   - `references/innovation-framework.md` — service proposal methodology
   - `references/verification-workflows.md` — automated cross-check procedures

3. If operating on a specific service, read its canonico.md first.

## Core Workflows

### 1. DERIVAR — Produce derived documents from canonical

Read `references/derivation-matrix.md` for the exact mapping of sections.

For each derived version:
1. Load the canonical (SSOT)
2. Apply the derivation matrix (which sections to include/exclude/transform)
3. Apply editorial rules for the target audience (tone, max sentence length, terminology substitutions)
4. Verify prices match canonical EXACTLY (zero tolerance)
5. Verify all [POR CONFIRMAR] items are preserved (not hidden)
6. Add footer: `Derivado de: {slug}/canonico.md v{version} ({date}). Precios verificados contra canonico: si, {date}.`
7. Run the verification workflow before output

### 2. VERIFICAR — Cross-check documents for consistency

Read `references/verification-workflows.md` for detailed procedures.

| Check | What it validates | Severity |
|-------|-------------------|----------|
| precios | Prices in derivadas match canonico exactly | BLOCKER |
| editorial | Tone, sentence length, terminology per audience | HIGH |
| dod | Document meets Definition of Done criteria | BLOCKER |
| referencias | Cross-references between docs are not broken | HIGH |
| legal | No over-commitments, no false guarantees, penalities match | CRITICAL |
| brand | Voice consistency, prohibited terms, positioning accuracy | HIGH |
| todo | All of the above | -- |

### 3. PROPONER — Generate a custom service proposal

Read `references/innovation-framework.md` for the complete methodology.

Process:
1. Ingest the client brief (requerimiento, contexto, sector, tamano, objetivos)
2. Map against existing services to find the closest base
3. Identify gaps between what exists and what the client needs
4. Propose a configuration: existing service + customizations OR new service design
5. Generate the proposal in brand-ready format
6. Run legal-safety audit on the proposal
7. Flag any commitments that exceed what MetodologIA currently delivers

### 4. INNOVAR — Design new services from catalog DNA

Read `references/innovation-framework.md`.

Rules:
- New services MUST inherit the methodological DNA (five layers of amplification, human-in-the-loop, practice-dominant pedagogy)
- Pricing MUST be consistent with the value ladder (entry < profundizacion < premium < transformacion)
- The proposal includes: ficha rapida, definition, architecture, pricing range, positioning vs existing services, and a draft canonico skeleton
- NEVER promise capabilities that don't exist yet — mark as [POR CONFIRMAR]

### 5. AUDITAR — Legal and commercial safety review

Read `references/legal-safety-checklist.md` and `references/brand-voice-rules.md`.

This is the most critical workflow. It protects MetodologIA from:
- Over-promising results that aren't guaranteed
- Committing to SLAs that aren't operationally sustainable
- Legal exposure from ambiguous guarantees or undefined liability
- Brand damage from inconsistent positioning or prohibited claims

The audit produces a report with:
- RED flags (must fix before any use)
- YELLOW flags (should fix, risk if not)
- GREEN confirmations (verified safe)

## Edge Cases

| Scenario | Handling |
|----------|---------|
| Canonical has [POR CONFIRMAR] items | Preserve in ALL derivadas. Add note: "Pendiente de confirmacion — no usar en cotizacion hasta resolucion." |
| Price discrepancy between canonical and source | Canonical prevails. Log discrepancy. Escalate. |
| Client requests a service that doesn't exist | Use INNOVAR workflow. Never promise delivery without JM approval. |
| B2B2B co-brand/white-label request | Load addendum templates. Verify partner eligibility criteria. |
| Service slug not found in inventory | Check for typos. If truly new, initiate INNOVAR. |
| Document references an undefined glossary term | Flag as gap. Add to glossary candidate list. |
| Editorial style conflicts between source and target | Target audience rules prevail (editorial guide > source style). |

## Validation Gate (applies to every output)

- [ ] Prices in output match canonical SSOT exactly (zero discrepancy)
- [ ] No [POR CONFIRMAR] items were silently resolved (all preserved or explicitly flagged)
- [ ] Editorial style matches target audience (verified against guia editorial)
- [ ] First mention of every glossary term is contextualized for the audience
- [ ] No prohibited terms for the audience type (especially "usuario-inexperto" substitutions)
- [ ] All cross-references resolve to real documents/sections
- [ ] No guarantees of specific outcomes (use "meta realista", "retorno estimado", conditional language)
- [ ] Footer includes derivation source, version, date, and price verification stamp
- [ ] Legal safety audit passed (no RED flags)
- [ ] Brand voice consistent (no marketing superlatives in canonicos/compras)

## Good vs Bad Examples

**GOOD — Commercial B2C text:**
> "Usas IA todos los dias, pero cada vez empiezas de cero. El Bootcamp te da el sistema que te falta: 20 horas donde construyes tu biblioteca, tus playbooks y tu proyecto final. Meta realista: reducir retrabajo en un 30% o mas. No es promesa automatica; es lo que logran quienes aplican con consistencia."

**BAD — Commercial B2C text:**
> "Nuestro revolucionario bootcamp transforma tu productividad garantizando resultados. ROI comprobado. Metodologia agil con frameworks de amplificacion que potencian tus KPIs."

Why bad: uses prohibited terms for B2C audience ("revolucionario", "garantizando", "ROI", "agil", "frameworks", "KPIs"), makes absolute guarantees, and uses marketing superlatives.

**GOOD — Legal safety in guarantee:**
> "Devolucion del 100% si el Bootcamp no cumple expectativas antes de completar las primeras 4 horas. Unica condicion: 1 hora de retroalimentacion estructurada."

**BAD — Legal safety in guarantee:**
> "Garantia total de satisfaccion. Si no estas 100% satisfecho, te devolvemos el dinero sin preguntas en cualquier momento."

Why bad: "sin preguntas" removes the feedback requirement; "en cualquier momento" removes the 4-hour window — both create legal exposure.

## Additional Resources

| File | When to read | What it contains |
|------|-------------|-----------------|
| `references/derivation-matrix.md` | Before any DERIVAR operation | Exact sections per version type, inclusion/exclusion rules, transformation rules |
| `references/legal-safety-checklist.md` | Before any AUDITAR or final output | 40+ checkpoints for legal/commercial safety |
| `references/brand-voice-rules.md` | Before any content creation | Voice rules, prohibited/required terms, positioning guardrails |
| `references/innovation-framework.md` | Before PROPONER or INNOVAR | Methodology for designing new services from catalog DNA |
| `references/verification-workflows.md` | Before VERIFICAR or as final gate | Automated cross-check procedures and severity classification |

---
**Autor:** Javier Montano | **Skill version:** 1.0 | **Fecha:** 2026-03-29
