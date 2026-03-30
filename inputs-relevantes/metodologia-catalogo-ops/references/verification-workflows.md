# Verification Workflows

**Purpose:** Procedimientos automatizados de cross-check para mantener coherencia del catalogo. Cada workflow es ejecutable como script mental (pasos deterministicos) o como script de bash/python.

---

## Table of Contents
1. Price Cross-Check Workflow
2. Editorial Compliance Workflow
3. Reference Integrity Workflow
4. Glossary Coverage Workflow
5. POR CONFIRMAR Tracking Workflow
6. DoD Verification Workflow
7. Brand Safety Workflow
8. Full Catalog Release Verification

---

## 1) Price Cross-Check Workflow

**Trigger:** After any price change in canonical, or before release of any derived document.

**Severity:** BLOCKER — no document ships with price discrepancy.

### Steps

```
FOR each service in inventory:
  1. EXTRACT all price mentions from canonico.md
     - Sec 0 (ficha rapida)
     - Sec 12 (all subsections)
     - Any inline price mentions
  2. FOR each derived document of this service:
     a. EXTRACT all price mentions
     b. COMPARE against canonical prices:
        - Amount (exact match, character by character)
        - Currency (COP always)
        - IVA notation (+ IVA / incluido / discriminado)
        - Conditions (por ciclo, por persona, hasta X participantes)
        - Payment terms (cuotas, PO terms)
        - Credit educativo (%, ventana, transferabilidad)
        - Guarantee (%, time window, condition)
        - Surcharges (cofacilitacion, reprogramacion, campus)
     c. IF discrepancy found:
        → LOG: {service, document, field, canonical_value, document_value}
        → SEVERITY: BLOCKER
        → ACTION: Fix derived document to match canonical
  3. CROSS-CHECK against inventario maestro prices
  4. CROSS-CHECK against mapa de interdependencias price table
```

### Output Format

```markdown
## Price Cross-Check Report — {date}

| Service | Document | Field | Canonical | Found | Status |
|---------|----------|-------|-----------|-------|--------|
| ... | ... | ... | ... | ... | OK / DISCREPANCY |

**Summary:** {X} discrepancies found. {Y} documents verified clean.
```

---

## 2) Editorial Compliance Workflow

**Trigger:** Before release of any document.

**Severity:** HIGH — documents with editorial violations lose credibility.

### Steps

```
FOR each document:
  1. IDENTIFY document type (canonico, ejecutiva-b2b, ejecutiva-b2c,
     comercial-b2b, comercial-b2c, compras, inexperto, cobranding, whitelabel)
  2. LOAD editorial rules for that type (from guia editorial)
  3. CHECK:
     a. Sentence length: count words per sentence
        - Flag any sentence exceeding max for document type
     b. Person/voice: scan for incorrect person
        - Canonico/compras: no "tu" (should be 3rd person)
        - B2C docs: no "su equipo" (should be "tu")
        - Inexperto: no technical terms (check substitution list)
     c. Prohibited terms: scan for terms prohibited for this doc type
        - Marketing superlatives in canonicos/compras
        - Technical jargon in inexperto
     d. Format rules:
        - Emojis: 0 in all documents
        - Exclamation marks: count per document (0 for canonico/ejecutiva/compras; <=1 for others)
        - Numbers/currency format: COP with dots, never abbreviations
        - Dates: YYYY-MM-DD in metadata
     e. First mention contextualization:
        - FOR each glossary term in the document:
          - IS the first mention contextualized?
          - Method appropriate for audience?
     f. Headings: correct style (numbered for canonico, unnumbered for derivadas)
     g. Active voice: flag passive constructions
```

### Output Format

```markdown
## Editorial Compliance Report — {document_name}

| # | Rule | Expected | Found | Line/Section | Severity |
|---|------|----------|-------|-------------|----------|
| ... | ... | ... | ... | ... | HIGH/MEDIUM/LOW |

**Score:** {X}/10
**Verdict:** PASS (>=8) / NEEDS REVISION (6-7) / FAIL (<6)
```

---

## 3) Reference Integrity Workflow

**Trigger:** After any document rename, restructure, or new document addition.

**Severity:** HIGH — broken references create confusion and lost navigation.

### Steps

```
FOR each document in catalog:
  1. EXTRACT all cross-references:
     - "(ver Seccion X)"
     - "(ver canonico, Sec X.Y)"
     - "(ver catalogo-servicios/{slug}/canonico.md, Sec X)"
     - "(ver Glosario, entrada: {termino})"
     - "(ver Anexo {letra}: {nombre})"
     - File paths in code blocks or references
  2. FOR each reference:
     a. VERIFY target exists
     b. VERIFY target section/entry exists
     c. IF broken:
        → LOG: {source_doc, reference_text, expected_target, status: BROKEN}
  3. CHECK for orphaned documents (exist but nothing references them)
  4. CHECK for missing required references (from mapa-interdependencias Sec 5)
```

---

## 4) Glossary Coverage Workflow

**Trigger:** After adding new content, new terms, or new documents.

### Steps

```
1. LOAD all terms from 00-glosario-catalogo.md
2. FOR each document in catalog:
   a. SCAN for each glossary term
   b. IF term found:
      - IS first mention contextualized? (inline def, glosario ref, or audience-appropriate rewrite)
      - IF NOT: flag as GAP
   c. IF term NOT found but should be (based on document topic):
      - Flag as POTENTIAL OMISSION
3. SCAN all documents for technical terms NOT in glossary:
   - Flag as CANDIDATE for glossary addition
```

---

## 5) POR CONFIRMAR Tracking Workflow

**Trigger:** Weekly, or before any release.

### Steps

```
1. SCAN all .md files for "[POR CONFIRMAR"
2. FOR each found:
   a. EXTRACT: document, section, full text, responsible, deadline
   b. CHECK against 00-resolucion-por-confirmar.md:
      - IS this item registered? If not: flag as UNTRACKED
      - IS the deadline past? If yes: flag as OVERDUE
      - HAS it been resolved? If yes but still in document: flag as STALE
3. CHECK 00-resolucion-por-confirmar.md for items marked RESUELTO:
   a. VERIFY the source document has been updated (no longer says POR CONFIRMAR)
   b. IF still says POR CONFIRMAR: flag as NOT CASCADED
```

### Output

```markdown
## POR CONFIRMAR Status — {date}

| ID | Document | Status | Deadline | Days Overdue | Priority |
|----|----------|--------|----------|-------------|----------|
| ... | ... | ... | ... | ... | Critica/Alta/Media/Baja |

**Untracked items:** {list}
**Overdue items:** {list}
**Stale items (resolved but not cascaded):** {list}
```

---

## 6) DoD Verification Workflow

**Trigger:** Before declaring any document, service, or phase "complete".

### Steps

```
1. IDENTIFY what is being verified:
   - A canonical document → use DoD Sec 3 "Canonico" criteria
   - A derived document → use DoD Sec 3 "Derivada" criteria
   - An operative annex → use DoD Sec 3 "Anexo operativo" criteria
   - A transversal guide → use DoD Sec 3 "Guia transversal" criteria
   - A service delivery → use DoD Sec 1 for the specific service type
   - The full catalog (v1 release) → use DoD Sec 4

2. FOR each criterion in the applicable DoD:
   a. VERIFY: pass/fail with evidence
   b. IF fail: document what's missing

3. CALCULATE completion percentage

4. DECISION:
   - 100% = READY
   - >=80% = CONDITIONAL (can release with noted exceptions)
   - <80% = NOT READY
```

---

## 7) Brand Safety Workflow

**Trigger:** Before any external-facing document (comercial, ejecutiva, inexperto, B2B2B addendums).

### Steps

```
1. READ references/brand-voice-rules.md
2. READ references/legal-safety-checklist.md

3. SCAN for prohibited terms (brand-voice-rules Section 2)
4. SCAN for legal red flags (legal-safety-checklist all sections)
5. VERIFY positioning guardrails (what MetodologIA IS vs IS NOT)
6. VERIFY self-care rules (SC-01 through SC-10)
7. CHECK comparative claims (categories not competitors, honest framing)

8. PRODUCE audit report with RED/YELLOW/GREEN classification
```

---

## 8) Full Catalog Release Verification

**Trigger:** Before declaring catalog v1 ready for partners.

This is the master workflow that runs ALL other workflows:

```
PHASE 1: Individual documents
  FOR each canonical:
    → Run Price Cross-Check (Workflow 1)
    → Run Editorial Compliance (Workflow 2)
    → Run DoD Verification (Workflow 6)
  FOR each derived document:
    → Run Price Cross-Check (Workflow 1)
    → Run Editorial Compliance (Workflow 2)
    → Run Brand Safety (Workflow 7)

PHASE 2: Cross-document
  → Run Reference Integrity (Workflow 3)
  → Run Glossary Coverage (Workflow 4)
  → Run POR CONFIRMAR Tracking (Workflow 5)

PHASE 3: Release criteria (DoD Sec 4)
  → Verify all 10 criteria from DoD maestro Sec 4
  → Produce final release report

OUTPUT: Catalog Release Readiness Report
  - Individual document scores
  - Cross-document issues
  - Release criteria status (10/10 required)
  - BLOCKERS list (must fix before release)
  - Recommendation: RELEASE / NOT READY
```
