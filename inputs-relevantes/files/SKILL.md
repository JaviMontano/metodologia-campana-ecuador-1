---
name: metodologia-proposal-engine
description: >
  MetodologIA commercial proposal engine — bilingual (ES+EN), multi-format, brand-resolved.
  Activate whenever the user mentions: proposal, quote, offer, budget for a client, pitch,
  commercial presentation, "design a service", "handle this request", "adapt for this client",
  "innovate a service", "white-label for partner", "co-brand with X", "new service variant",
  or any document intended to sell or scope a MetodologIA service.

  Operates in THREE MODES:
  — STANDARD: existing catalog service, derive correct version per audience/segment
  — INNOVATION: new service or variant designed from canonical building blocks
  — CATALOG EDIT: add/modify a service or condition without generating a proposal

  Default output: 10 files per proposal (HTML·DOCX·XLSX·PPTX·MD × ES+EN + verification report).
  Branding resolved at runtime: own | cobrand | whitelabel.
  Language: follows user's conversation language; scaffolding is English.

compatibility:
  platforms: [claude-code, claude-desktop, cowork]
  tools: [bash, create_file, str_replace, present_files, web_search]
  npm: [docx@9, pptxgenjs@3]
  pip: [openpyxl>=3.1, pyyaml>=6]
  node: ">=18"
  python: ">=3.9"
---

# MetodologIA Proposal Engine — v4.0

## Mental model
This engine has three layers that always run in order:
1. **Discover** — read the repo/catalog silently before talking
2. **Design** — apply the right mode (Standard / Innovation / Catalog Edit)
3. **Protect** — verify legal + brand before generating any file

Never skip layer 3. Never generate files before layer 3 completes.

---

## Layer 1: Discovery (silent — never narrate this to the user)

Run on every activation before responding:

```bash
# Load transversal docs (stop at first match per pattern)
for f in 00-inventario-maestro.md 00-glosario-catalogo.md 00-guia-editorial.md \
          00-dod-maestro.md 00-guia-derivacion-versiones.md \
          00-resolucion-por-confirmar.md 00-mapa-interdependencias.md; do
  [ -f "$f" ] && cat "$f"
done

# Load canonical services (head -80 each to get pricing + scope quickly)
find . -name "canonico.md" -not -path "*/.git/*" | while read f; do
  echo "=== $f ===" && head -80 "$f"
done

# Load skill catalog (machine-readable, preferred over .md scan)
[ -f ".claude/skills/metodologia-proposal-engine/catalog/services.yaml" ] && \
  cat .claude/skills/metodologia-proposal-engine/catalog/services.yaml

[ -f ".claude/skills/metodologia-proposal-engine/catalog/conditions.yaml" ] && \
  cat .claude/skills/metodologia-proposal-engine/catalog/conditions.yaml

# Detect unresolved blockers
grep -r "POR CONFIRMAR" --include="*.md" -l 2>/dev/null | head -10
```

Build a working map:
- Available services + confirmed prices
- Active [POR CONFIRMAR] items (do NOT assert these as confirmed)
- Confirmed credit chains vs. pending ones
- Audience segments available per service

**Decision [2026-03-29, JM]:** catalog/ YAML files are the preferred SSOT over .md scanning because they are machine-readable and faster. If both exist and conflict, the canonical .md wins. If no repo files exist, fall back to `catalog/services.yaml` and `references/schemas.md`.

---

## Layer 2: Design

### Mode selection

```
Incoming request
  → Is the service clearly in the catalog?
      YES → STANDARD MODE
      NO / PARTIALLY →
          Does it fit a known service type (Workshop/Bootcamp/CW/Program)?
              YES → INNOVATION MODE (variant)
              NO  → INNOVATION MODE (new) + [POR CONFIRMAR] on all pricing
  → Does the user want to add/modify a service or condition?
      YES → CATALOG EDIT MODE (read hooks/on-catalog-update.md)
```

### STANDARD MODE

1. Select the canonical service that best matches the need.
2. Read that service's `canonico.md` fully (not just the head).
3. Determine audience version using `catalog/segments.yaml` (see also `references/brand-system.md` for branding mode):
   - **B2B executive** → `ejecutiva-b2b.md` pattern: formal 3rd-person, business case, ≤25 words/sentence
   - **B2C executive** → `ejecutiva-b2c.md`: direct 2nd-person, personal ROI, ≤25 words
   - **B2B commercial** → `comercial-cliente-b2b.md`: narrative hook, benefits, CTA
   - **B2C commercial** → `comercial-cliente-b2c.md`: aspirational + concrete, 2nd person
   - **Procurement** → `comercial-compras.md`: specs, RACI, SLA, full conditions, no marketing
   - **Novice user** → `usuario-inexperto.md`: ≤15 words/sentence, zero jargon, see substitution table

4. Structure content with **Minto Complete** (see `references/voice-content.md`):
   - CONCLUSION — decisory recommendation, 1–2 sentences
   - SUPPORT 1 [P1 — (R)Evolution] — gap analysis + method
   - SUPPORT 2 [P2 — Intention over intensity] — design, focus, trade-offs
   - SUPPORT 3 [P3 — Technology as ally] — reusable assets, systems
   - EVIDENCE per support (real data | suggested indicator | measurable signal | required data)
   - CTA — verb + object + context (when/where/who)

5. Resolve branding: call `scripts/brand-resolver.js` with the `brand_mode` input (own | cobrand | whitelabel). See `references/brand-system.md` for full spec. **Assumption [low risk]:** if no brand_mode is provided, default to `own`.

### INNOVATION MODE

Read `references/service-innovation.md` before proceeding.

**Key rule:** new services are composed from canonical building blocks, not invented from scratch. Every module, deliverable, and duration range must trace back to an existing canonical or be explicitly marked [POR CONFIRMAR].

**Allowed service types:** Workshop (2–4h) | Bootcamp (12–24h) | Consultive Workshop (6–12 × 2h sessions) | Program (8–20 weeks). No new types without JM sign-off.

**Required disclaimer in all Innovation Mode outputs:**
> *This is a custom service design proposal. Prices marked [POR CONFIRMAR] are indicative and confirmed before SOW signing. This document does not constitute a delivery commitment or contract.*

### CATALOG EDIT MODE

Read `hooks/on-catalog-update.md`. It contains the cascade protocol: which derived files to update, in what order, within what SLA (48h).

---

## Layer 3: Legal + Brand Verification (MANDATORY — do not skip)

Run `scripts/verify-legal.js` on the full content, or execute the checklist manually if the script is unavailable.

Read `references/legal-guardrails.md` for the full spec. Summary of hard blockers:

| ID | What fails | How to fix |
|----|-----------|-----------|
| L1 | Price ≠ canonical | Correct to canonical price |
| L2 | [POR CONFIRMAR] stated as confirmed | Add explicit conditional |
| L3 | Guarantee clause differs from exact wording | Replace with exact clause |
| L4 | Workshop→Bootcamp credit terms wrong | Replace with "100%, 6 months, non-transferable" |
| L5 | Result % promised without "indicative target" wrapper | Add wrapper |
| L6 | Out-of-scope item promised (in canonical's "What it is NOT") | Remove or go to Innovation Mode |
| L7 | Red list word present | Replace (see `references/legal-guardrails.md#red-list`) |
| L8 | Unconfirmed credit chain stated as fact | Add "subject to current policy — ask your ambassador" |
| L9 | IAC service with B2C price not confirmed | Mark [POR CONFIRMAR] |
| L10 | Fixed USD rate | Add "(indicative rate, subject to variation)" |

For warnings W1–W7 (co-branding, presential, >20 participants, LMS limits, etc.) see `references/legal-guardrails.md#warnings`.

Produce a verification report before generating any file:
```
VERIFICATION REPORT
===================
Status: ✅ APPROVED | ⚠️ APPROVED WITH WARNINGS | 🔴 BLOCKED
Blockers fixed: [list or "none"]
Active warnings: [list or "none"]
Brand mode: [own | cobrand | whitelabel]
Partner brand applied: [name or "n/a"]
Language detected: [en | es | both]
Canonical reference: [slug + version + date]
Mode: [STANDARD | INNOVATION | CATALOG EDIT]
```

---

## Layer 4: Generation

Only after verification passes. Run `scripts/generate-all.js` or produce each format manually.

**Default output (always, unless user explicitly opts out):**

| Format | ES | EN | Notes |
|--------|----|----|-------|
| HTML   | ✓  | ✓  | Responsive, Neo-Swiss Clean, brand-resolved |
| DOCX   | ✓  | ✓  | Poppins→Arial (Office compat), Trebuchet body |
| PPTX   | ✓  | ✓  | 6 slides minimum |
| XLSX   | bilingual | — | Sheet ES + Sheet EN |
| Markdown | ✓ | ✓ | GitHub/Notion/CMS-ready |
| Verification report | ✓ | — | Internal control file |

File naming: `propuesta_[company-slug]_[YYYY-MM]_[LANG].[ext]`
Output directory: `outputs/` (repo) or `/mnt/user-data/outputs/` (Claude Code)

**White-label branding rule:** when `brand_mode: whitelabel`, ALL MetodologIA visual identity (logo, colors, name) is replaced with partner brand. Methodology content, structure, and quality standards are unchanged. MetodologIA is completely invisible in the output.

**Co-brand rule:** both logos appear. MetodologIA design system is the base; partner's primary color is used as an accent override for `--gold` only. Never override navy or typography.

---

## Layer 5: Delivery

Present files with `present_files`. Then tell the user:

1. What problem this proposal solves and which service is proposed
2. Any active warnings from verification (if any)
3. All output file paths
4. Any [POR CONFIRMAR] items that must be resolved before sending
5. Offer one iteration: "Anything specific you'd like to adjust?"

---

## Reference map

Load these files only when the situation calls for them:

| File | Load when |
|------|-----------|
| `references/brand-system.md` | Generating any visual output or resolving branding mode |
| `references/legal-guardrails.md` | Layer 3 verification (always) |
| `references/voice-content.md` | Drafting content (always in Layer 2) |
| `references/service-innovation.md` | Innovation Mode |
| `references/schemas.md` | Checking data shapes, building ProposalData JSON |
| `catalog/services.yaml` | Querying available services |
| `catalog/conditions.yaml` | Querying prices, credits, policies |
| `catalog/segments.yaml` | Audience/segment rules |
| `agents/legal-reviewer.md` | Spawning dedicated legal review subagent |
| `agents/catalog-manager.md` | Adding/modifying catalog entries |
| `agents/format-generator.md` | Parallelizing format generation |
| `hooks/pre-generate.md` | Pre-generation checks |
| `hooks/post-generate.md` | QA after generation |
| `hooks/on-catalog-update.md` | Cascading updates after catalog change |

---

## Hard rules (non-negotiable, every run)

1. Discovery before responding — always.
2. Verification before file generation — always.
3. Never assert a [POR CONFIRMAR] item as confirmed.
4. Never promise a result % without "indicative target" wrapper.
5. "Transformation" → always "(R)Evolution".
6. Prototypes ≠ production-ready automations — always clarify.
7. White-label = MetodologIA completely invisible. Not "subtle branding". Invisible.
8. Co-brand = partner accent only on one token. Never override the design system.
9. IAC is a delivery channel. No IAC-specific code paths. Brand mode handles it.
10. All output is bilingual ES+EN unless user explicitly requests one language only.
