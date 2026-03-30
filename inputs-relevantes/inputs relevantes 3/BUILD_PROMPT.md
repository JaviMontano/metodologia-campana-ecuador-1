# MetodologIA Proposal Engine — Master Build Prompt
# For: Claude Code | Claude Desktop | Cowork
# Language: English (scaffolding) — output bilingual ES + EN
# Standalone: no API key required. All intelligence runs natively in the model.
# Version: 1.0 | 2026-03-29

---

# ACTIVATION PROMPT
## Paste this entire block as your first message in Claude Code

---

```
You are launching the MetodologIA Proposal Engine build process.

This is a BMAD agentic development run:
Brief → Map → Architect → Develop → Assert → Deliver

You will build a production-grade, standalone commercial proposal agent —
no API key, no external services, no configuration required to run.
It works in Claude Desktop, Claude Code, and Cowork out of the box.

The agent must survive the worst-case user: non-technical, non-methodological,
not from the brand, temporarily empowered for adversarial testing,
who communicates only in natural language, voice notes, and screen interactions,
makes every possible mistake, and still receives world-class proposals.

Do not write a single line of code until Phase 0 and Phase 1 are complete
and you have presented the plan to me for approval.

BEGIN.
```

---

## PHASE 0: RECONNAISSANCE (run before anything else — silent)

**Goal:** Know the territory before planning anything.

Execute all of the following. Do not skip any step. Do not start Phase 1 until complete.

### 0.1 Repository inventory

```bash
# Full structure
find . -not -path "*/.git/*" -not -path "*/node_modules/*" \
  -not -path "*/__pycache__/*" | sort

# Document catalog (all .md, .yaml, .json, .txt)
find . -not -path "*/.git/*" -type f \
  \( -name "*.md" -o -name "*.yaml" -o -name "*.yml" \
     -o -name "*.json" -o -name "*.txt" -o -name "*.toml" \) \
  | sort

# Existing skills (local + global)
find . -name "SKILL.md" 2>/dev/null | head -20
find ~/.claude/skills -name "SKILL.md" 2>/dev/null | head -20

# Existing scripts and executable files
find . -name "*.js" -o -name "*.py" -o -name "*.sh" \
  | grep -v node_modules | grep -v .git | sort | head -40

# Package configs
cat package.json 2>/dev/null || echo "no package.json"
cat requirements.txt 2>/dev/null || echo "no requirements.txt"
cat pyproject.toml 2>/dev/null || echo "no pyproject.toml"

# Existing CLAUDE.md
cat CLAUDE.md 2>/dev/null || echo "no CLAUDE.md"
cat .claude/CLAUDE.md 2>/dev/null || echo "no .claude/CLAUDE.md"
```

### 0.2 Content intelligence — read every relevant document

```bash
# Service catalog documents
for f in 00-inventario-maestro.md 00-glosario-catalogo.md \
          00-guia-editorial.md 00-dod-maestro.md \
          00-guia-derivacion-versiones.md 00-guia-variantes-segmento.md \
          00-resolucion-por-confirmar.md 00-mapa-interdependencias.md \
          00-template-canonico-servicio-v2.md; do
  [ -f "$f" ] && echo "=== $f ===" && cat "$f" && echo ""
done

# All canonical service files
find . -name "canonico.md" -not -path "*/.git/*" | while read f; do
  echo "=== CANONICO: $f ===" && cat "$f" && echo ""
done

# All derived commercial documents
for pattern in ejecutiva-b2b.md ejecutiva-b2c.md comercial-cliente-b2b.md \
               comercial-cliente-b2c.md comercial-compras.md \
               usuario-inexperto.md b2b2b-cobranding.md b2b2b-whitelabel.md; do
  find . -name "$pattern" | while read f; do
    echo "=== $f ===" && head -60 "$f" && echo ""
  done
done

# Any existing proposal templates or brand assets
find . -iname "*propuesta*" -o -iname "*proposal*" \
  -o -iname "*template*" -o -iname "*brand*" \
  | grep -v ".git" | grep -v "node_modules" | head -20
```

### 0.3 Build inventory manifest

After reading all documents, produce this inventory before proceeding:

```
REPOSITORY INVENTORY MANIFEST
==============================
Repo root: [path]
Total documents: [n]
Total scripts: [n]
Existing skills: [list or "none"]

CATALOG STATUS:
  Transversal docs found: [n]/8 — list which are present vs missing
  Canonical services found: [n] — list slugs
  Derived documents found: [n] — list which types
  [POR CONFIRMAR] items active: [n] — list IDs

CONTENT GAPS (what's missing that the agent needs):
  - [gap 1]
  - [gap 2]

REUSABLE ASSETS (what already exists that we can leverage):
  - [asset 1]
  - [asset 2]

RISK FLAGS:
  - [anything that will cause problems if not addressed]

LANGUAGE PROFILE:
  Primary content language: [es / en / mixed]
  Required output languages: ES + EN (always bilingual)
```

**Do not proceed to Phase 1 until the manifest is complete and presented to me.**

---

## PHASE 1: ANALYSIS — Five-Pass Input Intelligence

**Goal:** Understand the real requirements, not just the stated ones.

Apply the Input Analyst framework to the build requirements.

### Pass 1 — Surface

What is literally being asked?
- A standalone proposal generation agent
- Works in Claude Desktop, Claude Code, Cowork
- No API key required
- Bilingual ES + EN output
- Multi-format: HTML, DOCX, XLSX, PPTX, Markdown
- MetodologIA brand + co-brand + white-label modes

### Pass 2 — Five Whys (root need)

```
Why build this? → Commercial proposals take too long and lack consistency
Why is that a problem? → Sales velocity is constrained by document production time
Why does it block sales? → Proposals require brand/legal/content expertise every time
Why can't that expertise be delegated? → It lives in people's heads, not in systems
Root need: Encode MetodologIA's commercial expertise into an agent that
           any person — even adversarial or non-technical — can run and get
           a world-class, legally safe, brand-correct proposal in minutes.
```

### Pass 3 — Seven So-Whats (implications)

```
1. If non-technical users can run this → sales team can be larger, lower-trained
2. If output is always legally safe → no review bottleneck before sending
3. If brand is resolved at runtime → IAC, co-brand, white-label handled uniformly
4. If catalog is hot-swappable → price/policy changes propagate instantly
5. If it's standalone → no maintenance dependency on external services
6. If it handles worst-case input → adversarial testing = QA, not liability
7. So-what: this is infrastructure, not a document. Build it with that quality bar.
```

### Pass 4 — Intent gap analysis

| Stated | Real intent |
|--------|------------|
| "Build a proposal agent" | Build a commercial operations system that scales sales |
| "Handle non-technical users" | Eliminate the expertise requirement from every interaction |
| "Standalone, no API key" | Zero-maintenance, zero-dependency, runs forever |
| "Worst-case user protection" | Adversarial testing is a feature, not an edge case |
| "BMAD flow" | Full engineering discipline, not a quick script |

### Pass 5 — Reformulated brief

```
BUILD: MetodologIA Proposal Engine — a standalone Claude skill (no API key,
no external dependencies) that runs in Claude Desktop / Code / Cowork.

THE AGENT MUST:
1. Auto-discover the host repository's catalog on activation
2. Handle any natural-language input (voice transcription, typos, vague,
   wrong) and produce a world-class proposal through intelligent degradation
3. Generate 10 files per proposal (HTML·DOCX·XLSX·PPTX·MD × ES+EN +
   verification report) with brand resolved at runtime
4. Verify legal/brand compliance before generating any file
5. Support own brand | co-brand | white-label without code changes
6. Allow catalog extension (add service, change price, resolve PC-item)
   without touching SKILL.md
7. Work identically across Claude Desktop, Code, and Cowork

SUCCESS CRITERIA:
- Worst-case user input → output passes brand + legal verification
- New service added to catalog → reflected in next proposal run
- White-label output → zero MetodologIA references in all files
- First-time user, zero training → complete proposal in <15 minutes
```

---

## PHASE 2: PLAN — Architecture Decision Record

**Goal:** Explicit decisions before building anything.

Present this plan to me and wait for approval before proceeding to Phase 3.

### 2.1 Skill anatomy

```
metodologia-proposal-engine/
├── SKILL.md                    ← Orchestrator (<500 lines, 5 layers)
├── CHANGELOG.md
├── agents/                     ← Specialized subagents
│   ├── input-interpreter.md    ← Worst-case input handling
│   ├── legal-reviewer.md       ← L1-L10 + W1-W7 verification
│   ├── catalog-manager.md      ← CRUD + cascade
│   └── format-generator.md     ← Parallelizable output
├── catalog/                    ← Hot-swap SSOT (no SKILL.md edits needed)
│   ├── services.yaml           ← All 17 services + pricing
│   ├── conditions.yaml         ← Credits, guarantees, SLAs, policies
│   └── segments.yaml           ← Audience rules, branding matrix
├── evals/
│   └── evals.json              ← 10+ test cases, all modes + edge cases
├── hooks/                      ← Lifecycle contracts
│   ├── on-catalog-update.md    ← Cascade protocol
│   ├── pre-generate.md         ← Gate before file generation
│   └── post-generate.md        ← QA after generation
├── references/                 ← Loaded as needed
│   ├── brand-system.md         ← Tokens + per-format specs + runtime resolution
│   ├── legal-guardrails.md     ← L1-L10 blockers, W1-W7, safe phrasing, exact clauses
│   ├── voice-content.md        ← Minto, pillars, evidence, tone by audience
│   ├── service-innovation.md   ← Innovation Mode: 3 types, composition rules
│   ├── schemas.md              ← ProposalData, BrandConfig, VerificationReport
│   └── worst-case-recovery.md  ← Input degradation playbook + meta-prompts
├── scripts/                    ← Executable, importable, independently usable
│   ├── brand-resolver.js       ← own | cobrand | whitelabel runtime resolution
│   ├── verify-legal.js         ← Automated L1-L10 + W1-W7 (CLI + module)
│   ├── catalog-query.js        ← find | list | credit-check | price-check
│   ├── service-composer.js     ← Innovation Mode: compose from building blocks
│   ├── i18n.js                 ← Language detection, substitutions, formatting
│   ├── generate-all.js         ← Multi-format orchestrator (HTML+DOCX+XLSX+PPTX+MD)
│   └── input-normalizer.js     ← Worst-case input → ProposalData JSON
├── templates/                  ← Pre-built output templates for fast generation
│   ├── proposal-html.hbs       ← Handlebars HTML template (brand-token aware)
│   ├── proposal-md.hbs         ← Markdown template
│   └── verification-report.hbs ← Verification report template
└── workflows/                  ← Pre-defined prompt chains for common scenarios
    ├── standard-b2b.md         ← Standard B2B flow with decision points
    ├── standard-b2c.md         ← Standard B2C flow
    ├── innovation-mode.md      ← Custom service design flow
    └── adversarial-recovery.md ← Worst-case input recovery flow
```

### 2.2 Architectural decisions (ADRs)

| Decision | Choice | Rationale | Trade-off |
|----------|--------|-----------|-----------|
| No API key | Native Claude intelligence | Zero maintenance, works everywhere | Cannot call external services (acceptable — all logic is in the model) |
| YAML catalog as SSOT | catalog/*.yaml | Machine-readable, hot-swappable, diffable | Requires js-yaml or manual parsing; graceful fallback to .md scan |
| brand_mode resolves IAC | `default_brand_mode: whitelabel` | Eliminates IAC-specific code paths | Partner config required for whitelabel generation |
| verify-legal.js runs before generation | Pre-generation gate | Catches issues before wasting generation time | Extra step; acceptable cost |
| Handlebars templates | Pre-compiled layout | 3-5× faster than building HTML/MD from scratch | Template maintenance overhead |
| input-normalizer.js | ProposalData JSON from any input | Worst-case inputs produce structured data | Normalization may miss nuance; validated after |
| Minto Complete by default | 3 supports + evidence + CTA | Consistent quality floor | Can be reduced to Minto Micro if audience needs it |

### 2.3 Checklists before building

**Pre-build gate (review with me before Phase 3):**
```
□ Inventory manifest complete (Phase 0)
□ All canonical .md files read and understood
□ All [POR CONFIRMAR] items catalogued
□ Architecture diagram approved
□ ADRs reviewed — no unresolved conflicts
□ Worst-case user scenario understood and documented
□ Standalone constraint confirmed (no API keys, no external calls)
□ 10 eval cases drafted in evals/evals.json before writing code
```

---

## PHASE 3: ARCHITECT — System Design

**Goal:** Design every component interface before implementation.

### 3.1 The 5-layer orchestration model

```
LAYER 0: DISCOVERY     — read repo silently before responding
LAYER 1: NORMALIZATION — worst-case input → clean ProposalData
LAYER 2: DESIGN        — Standard | Innovation | Catalog Edit
LAYER 3: VERIFICATION  — legal + brand gate (run verify-legal.js)
LAYER 4: GENERATION    — 10 files, bilingual, brand-resolved
LAYER 5: DELIVERY      — present_files + handoff summary
```

### 3.2 Worst-case input handling architecture

The adversarial user communicates via:
- Voice note transcription (filler words, incomplete sentences, background noise artifacts)
- Screen sharing commentary ("you know, that thing, the one for the company")
- Natural language with zero domain vocabulary
- Contradictory requirements ("make it cheap but also comprehensive")
- Missing critical info (no company name, no budget, no timeline)

The `agents/input-interpreter.md` + `scripts/input-normalizer.js` subsystem must handle all of these. Design:

```
RAW INPUT (any quality)
  ↓
[input-normalizer.js]
  Pass 1: Surface repair (typos, voice artifacts, sentence reconstruction)
  Pass 2: 5-Whys root need extraction
  Pass 3: Confidence scoring (high/medium/low per field)
  Pass 4: Intelligent defaults (from catalog + context)
  Pass 5: ProposalData JSON with confidence annotations
  ↓
[Confidence check]
  HIGH on all critical fields → proceed to Layer 2
  MEDIUM → proceed with flagged assumptions, ask one clarifying Q
  LOW on critical fields → ask minimum questions (≤3), smart defaults
  ↓
ProposalData (validated, complete enough to generate)
```

**Critical insight:** The agent must never block. Even with terrible input, it produces something — using smart defaults, marking assumptions, and offering refinement. The user iterates, not re-starts.

### 3.3 Template system design

Templates reduce generation time from minutes to seconds and enforce structure:

```javascript
// templates/proposal-html.hbs — critical sections
{{> header brand=brand lang=lang}}
{{> hero client=client hook=content.hook}}
{{> problem content=content.problem}}
{{> solution content=content.solution}}
{{> scope items=content.scope exclusions=content.exclusions}}
{{> plan phases=content.plan}}
{{> investment services=services currency=currency}}
{{> why items=content.why}}
{{> cta cta=cta brand=brand}}
{{> footer brand=brand id=id date=date valid_days=valid_days}}
```

Templates are parameterized with BrandConfig — same template produces own/cobrand/whitelabel output.

### 3.4 The meta-prompt library

Pre-built meta-prompts that the agent uses internally to handle specific situations:

```
META-PROMPT: voice_note_recovery
"The following text is a voice note transcription. Extract the commercial intent,
 ignore filler words, correct speech artifacts, and identify: (1) client name/company,
 (2) problem to solve, (3) budget signal if any, (4) timeline signal if any.
 Output as JSON with confidence scores. If a field is unclear, use 'unclear' and
 explain what signal you used."

META-PROMPT: contradictory_requirements
"The user has provided contradictory requirements: [A] and [B]. These cannot both
 be satisfied. Present both options clearly, explain the trade-off, and recommend
 one with a brief justification. Ask for confirmation before proceeding."

META-PROMPT: zero_budget_signal
"No budget was mentioned. Based on the client profile [profile] and the need
 [need], identify the most likely service tier from the catalog, present it with
 its price, and ask for confirmation. Do not ask for the budget directly — infer
 and confirm."

META-PROMPT: unknown_company
"The company was not named or is unclear. Generate the proposal with placeholder
 [CLIENT COMPANY] and flag it clearly. Do not block generation — complete the
 full proposal and mark all placeholders for easy replacement."

META-PROMPT: out_of_catalog_request  
"The requested service does not exist in the catalog. The closest match is [service].
 Activate Innovation Mode: design a variant that addresses [specific need] while
 tracing every element back to canonical building blocks. Mark all novel elements
 as [POR CONFIRMAR]."
```

### 3.5 Workflow definitions

Pre-defined decision flows for the most common scenarios. These live in `workflows/` and the SKILL.md orchestrator calls them by name.

```
workflow: standard-b2b
  trigger: clear B2B request + catalog service identified
  steps: [discovery → diagnosis(≤3q) → service_select → minto_draft → verify → generate → deliver]
  time_estimate: 8–12 minutes

workflow: standard-b2c
  trigger: individual buyer + catalog service identified
  steps: [discovery → diagnosis(≤2q) → service_select → minto_draft → verify → generate → deliver]
  time_estimate: 6–10 minutes

workflow: innovation-mode
  trigger: need not in catalog | custom request detected
  steps: [discovery → innovation_detect → composer_run → gap_doc → disclaimer → verify → generate → deliver]
  time_estimate: 12–20 minutes

workflow: adversarial-recovery
  trigger: input quality < 30% confidence | contradictions | voice transcription artifacts
  steps: [input_normalize → confidence_check → smart_defaults → assumption_list → confirm_or_clarify → standard_flow]
  time_estimate: 10–15 minutes (includes one clarification round)

workflow: catalog-edit
  trigger: "add service" | "change price" | "resolve PC-XX" | any catalog modification
  steps: [parse_intent → validate_schema → apply_change → cascade_check → changelog_update → confirm]
  time_estimate: 3–5 minutes
```

---

## PHASE 4: DEVELOP — Build Order and Contracts

**Goal:** Build in dependency order. Test each layer before the next.

### 4.1 Build order (strict — do not parallelize)

```
Sprint 1: Foundation
  1. catalog/services.yaml        — all 17 services, prices, credits
  2. catalog/conditions.yaml      — policies, SLAs, guarantees, red list
  3. catalog/segments.yaml        — audience rules, branding matrix
  4. scripts/catalog-query.js     — query layer (test: can read all 17 services)
  5. scripts/brand-resolver.js    — own | cobrand | whitelabel (test: 3 modes)

Sprint 2: Intelligence
  6. scripts/input-normalizer.js  — worst-case → ProposalData (test: voice note)
  7. agents/input-interpreter.md  — subagent spec for input normalization
  8. scripts/verify-legal.js      — L1-L10 + W1-W7 (test: catches 5 violations)
  9. agents/legal-reviewer.md     — subagent spec for deep legal review
  10. scripts/i18n.js             — language, substitutions, formatting

Sprint 3: Content
  11. references/voice-content.md  — Minto, pillars, evidence, tone
  12. references/legal-guardrails.md — exact clauses, safe phrasing, checklists
  13. references/brand-system.md   — tokens, per-format specs, logo SVGs
  14. references/service-innovation.md — 3 types, composition rules
  15. references/worst-case-recovery.md — meta-prompts, degradation playbook
  16. references/schemas.md        — all data contracts

Sprint 4: Generation
  17. templates/proposal-html.hbs  — brand-aware HTML template
  18. templates/proposal-md.hbs    — Markdown template
  19. templates/verification-report.hbs — report template
  20. scripts/service-composer.js  — Innovation Mode composition
  21. scripts/generate-all.js      — multi-format orchestrator
  22. agents/format-generator.md   — subagent spec

Sprint 5: Workflows + Hooks
  23. workflows/standard-b2b.md
  24. workflows/standard-b2c.md
  25. workflows/innovation-mode.md
  26. workflows/adversarial-recovery.md
  27. hooks/on-catalog-update.md
  28. hooks/pre-generate.md
  29. hooks/post-generate.md

Sprint 6: Orchestration + Evals
  30. SKILL.md                     — the 5-layer orchestrator
  31. agents/catalog-manager.md
  32. evals/evals.json             — 10 test cases
  33. CHANGELOG.md
  34. CLAUDE_CODE_PROMPT.md        — master prompt for users
```

### 4.2 Per-file development contract

For every file in the build order, before writing:
1. State the **single responsibility** of this file
2. State the **interface** (inputs it takes, outputs it produces)
3. State the **test** that proves it works
4. Write the file
5. Run the test
6. Only then move to the next file

### 4.3 Standalone compliance checklist

Every file must be checkable against this:
```
□ Requires no API key (no fetch() to external services)
□ Requires no environment variables that don't exist by default
□ Works with: node >=18 + npm install + pip install (and graceful fallback if missing)
□ Runs identically in: Claude Desktop | Claude Code | Cowork
□ All dependencies declared in package.json / requirements comment at top of file
□ No hardcoded paths — all relative or using __dirname
□ No platform-specific code (no win32-only, darwin-only)
```

---

## PHASE 5: HARDEN — Worst-Case Proofing

**Goal:** Make the system survive adversarial testing.

### 5.1 The adversarial user profile

```
NAME: "The Empowered Tester"
CHARACTERISTICS:
  - Zero knowledge of MetodologIA services, pricing, or methodology
  - Communicates entirely in voice notes (transcribed) or casual typing
  - Makes every mistake: wrong names, impossible requirements, missing info
  - Does NOT read any instructions or output text carefully
  - Is on a 15-minute test window — frustrated if it takes longer
  - Will try: "make it cheap", "make it fancy", "you know what I mean",
    "the bootcamp thing", "something for a meeting tomorrow",
    "do the one for the company that sells stuff online"

SUCCESS CRITERION:
  Even this user, given a single 15-minute session with zero training,
  receives a complete, legally safe, brand-correct, bilingual proposal
  that a MetodologIA sales professional would be proud to send.
```

### 5.2 Recovery playbook (implement in references/worst-case-recovery.md)

```
SCENARIO: Voice note with no company name
DETECT: client.company = "unclear" in ProposalData
ACTION: Use "[CLIENT COMPANY]" placeholder everywhere. Generate complete proposal.
OUTPUT: All 10 files. Flag 3 placeholders at delivery.

SCENARIO: "I want everything" (contradictory scope)
DETECT: scope_items > 12 OR impossible combination detected
ACTION: Present 3-item scope (essential + standard + premium).
        Ask: "Which of these three best fits your need?"
OUTPUT: Continue with highest-confidence selection.

SCENARIO: Budget too low for any service
DETECT: mentioned_budget < min(b2c_prices) from catalog
ACTION: Never say "your budget isn't enough". Instead:
        "The closest option is [service] at [price]. Here's what makes it
         worth it: [1 sentence]. Want to see the full proposal?"
OUTPUT: Generate proposal for the cheapest available service.

SCENARIO: "That other service" (ambiguous service reference)
DETECT: service_slug = null, confidence < 40%
ACTION: Run top-3 similarity match against catalog names.
        Present: "You might mean: (1) [A], (2) [B], or (3) [C]. Which one?"
OUTPUT: Wait for selection. Generate immediately on response.

SCENARIO: Pure voice transcription artifact
INPUT EXAMPLE: "uh yeah so I need uh a thing for the uh the people that you know
                work in sales and they want to learn the AI stuff but make it
                like not too long and uh our boss said maybe around twelve million"
DETECT: filler_word_density > 30%, incomplete_sentences > 2
ACTION: Apply voice_note_recovery meta-prompt.
EXTRACT: audience=sales_team, topic=AI_training, duration=not_too_long,
         budget_signal=COP_12M → match=bootcamp-trabajar-amplificado
OUTPUT: Proceed with standard B2B flow.
```

### 5.3 Input confidence matrix

```javascript
// scripts/input-normalizer.js — confidence scoring
const CRITICAL_FIELDS = ['problem', 'segment'];           // must have or ask
const IMPORTANT_FIELDS = ['budget', 'timeline', 'audience']; // use defaults if missing
const OPTIONAL_FIELDS = ['company_name', 'contact', 'industry']; // placeholder if missing

// Confidence thresholds
const PROCEED_THRESHOLD = 0.4;   // proceed with assumptions if ≥ 40% on critical
const CLARIFY_THRESHOLD = 0.2;   // ask ≤3 questions if < 40% on critical
const BLOCK_NEVER = true;        // never block — always produce something
```

### 5.4 Self-healing defaults

When a field is unclear or missing, use these intelligent defaults (not empty):

| Field | Default logic |
|-------|--------------|
| company_name | "[CLIENT COMPANY]" — placeholder, clearly marked |
| segment | B2B if "team/equipo/empresa" detected; B2C otherwise |
| budget | Map to nearest price tier; confirm with user |
| timeline | "Flexible — we can start when you're ready" |
| industry | Infer from company name or problem description |
| language | Detect from input; produce bilingual regardless |
| service_slug | Match by similarity to catalog names; top-1 with confirmation |

---

## PHASE 6: ASSERT — Quality Gates

### 6.1 Build verification checklist

Run this before declaring the build complete:

**Structure (all must pass):**
```
□ All 34 files in the build order exist
□ SKILL.md body ≤ 500 lines
□ All scripts have CLI usage + module.exports
□ All agents have: Role, Input protocol, Protocol steps, Output format
□ All hooks have: Trigger, Steps, SLA, Edge cases
□ All templates produce valid HTML/MD when rendered
□ Evals file has ≥ 10 cases covering all 5 modes
□ CHANGELOG.md documents all ADRs
```

**Standalone compliance (all must pass):**
```
□ No external API calls in any script
□ No hardcoded API keys or secrets
□ No absolute paths
□ Works with: node verify: node scripts/verify-legal.js --help
□ Works with: catalog verify: node scripts/catalog-query.js --list b2b
□ Works with: brand verify: node scripts/brand-resolver.js '{"brand_mode":"own"}'
□ Works with: i18n verify: node scripts/i18n.js
```

**Worst-case coverage (all must pass):**
```
□ Voice note input → ProposalData (confidence ≥ 0.4 on critical fields)
□ Missing company name → proposal generates with placeholder
□ Budget contradiction → three-tier offer presented
□ Unknown service → top-3 similarity match shown
□ White-label → zero MetodologIA references in output
□ [POR CONFIRMAR] item → conditional language, not stated as confirmed
□ Red list word in input → replaced in output
□ Result % promised → wrapped with "indicative target"
```

**Output quality (verify on one test run):**
```
□ 10 files generated per proposal
□ ES and EN versions both present and non-empty
□ Verification report included
□ All prices match catalog (within COP 0 tolerance for confirmed services)
□ Guarantee clause uses exact wording
□ Minto structure present: conclusion + ≥2 supports + CTA
□ HTML is responsive (test at 640px width)
□ DOCX opens without errors in LibreOffice
□ XLSX formulas calculate correctly (no #REF!, #DIV/0!)
□ PPTX opens without errors
```

### 6.2 Eval run (10 test cases)

Run all 10 cases in evals/evals.json before declaring done:

```bash
# For each eval, run in Claude Code:
# Test 1: standard-b2b-bootcamp-logistics
# Test 2: b2c-individual-freelancer
# Test 3: innovation-mode-school-teachers
# Test 4: legal-blocker-detection-and-auto-fix
# Test 5: whitelabel-iac-zero-visible
# Test 6: cobrand-partner-accent-only
# Test 7: catalog-edit-add-service
# Test 8: procurement-full-spec
# Test 9: novice-user-zero-jargon
# Test 10: adversarial-voice-note-input  ← THIS IS THE KEY ONE
```

Test 10 is the adversarial test. If it passes, the system is hardened.
If it fails, return to Phase 5 and strengthen the recovery playbook.

### 6.3 Assembly-line certification

After all tests pass, run the assembly skill quality pipeline:

```bash
# X-Ray: diagnostic
/x-ray-skill .claude/skills/metodologia-proposal-engine

# Surgeon: if score < 8
/surgeon-skill .claude/skills/metodologia-proposal-engine

# Certify: final gate
/certify-skill .claude/skills/metodologia-proposal-engine
```

Target: CERTIFIED with score ≥ 9/10.

---

## PHASE 7: DELIVER — Packaging and Handoff

### 7.1 Output artifacts

```
mpe-v4/                          ← full skill directory
  └── [all 34 files]

CLAUDE_CODE_PROMPT.md            ← master prompt (this document, refined)
INSTALL.md                       ← 3-command installation guide
QUICK_START.md                   ← first proposal in 5 minutes
README.md                        ← complete documentation
```

### 7.2 Installation (3 commands)

```bash
# 1. Copy skill to repo
mkdir -p .claude/skills/metodologia-proposal-engine
cp -r mpe-v4/* .claude/skills/metodologia-proposal-engine/

# 2. Install dependencies
npm install -g docx pptxgenjs js-yaml && \
pip install openpyxl pyyaml --break-system-packages

# 3. Verify
node .claude/skills/metodologia-proposal-engine/scripts/catalog-query.js --list b2b
```

### 7.3 Quick start (5 minutes to first proposal)

```
Step 1: Open Claude Code in your repo
Step 2: Type: /propuesta empresa de manufactura, equipo de 20 personas de logística,
         quieren usar IA para reportes, presupuesto COP 12M
Step 3: The agent asks ≤3 clarifying questions (or none if enough context)
Step 4: Review the verification report
Step 5: 10 files are generated in outputs/
Step 6: Open the HTML file to preview
Total time: ~10 minutes
```

### 7.4 Handoff checklist

```
□ All 34 files present and passing build verification
□ All 10 evals pass
□ Assembly skill certification: CERTIFIED ≥ 9/10
□ Installation tested from scratch (clean directory)
□ Quick start guide verified (someone who hasn't seen this can follow it)
□ CHANGELOG.md documents every ADR with rationale
□ README.md is complete
□ User has: INSTALL.md + QUICK_START.md + master prompt
```

---

## CRITICAL CONSTRAINTS (enforce throughout all phases)

1. **Standalone** — no API key, no external service, no .env file required. Everything is native Claude intelligence + local scripts.

2. **Never block** — even the worst input produces a complete proposal with smart defaults and clear placeholders. The user iterates, not re-starts.

3. **Verify before generate** — the legal/brand gate (verify-legal.js) runs before any file is written. This is a hard constraint, not a suggestion.

4. **Catalog is the SSOT** — all prices, credits, policies, and red lists come from catalog/*.yaml, not from SKILL.md. SKILL.md is an orchestrator, not a data store.

5. **White-label means invisible** — if brand_mode is whitelabel, MetodologIA does not appear in any output file, in any language, in any format. Zero exceptions.

6. **Bilingual always** — every proposal produces ES + EN versions. If the user only asks for one language, still produce both and note the default.

7. **Minto Complete is the floor** — the minimum content structure is conclusion + 3 MECE supports + evidence + 1-step CTA. This cannot be skipped for any audience or urgency.

8. **[POR CONFIRMAR] items are never stated as confirmed** — this is a legal safety rule, not a style preference. The agent checks catalog/conditions.yaml before every credit or price mention.

---

## GATE PROTOCOL

This build has 4 gates where I (the user) must approve before proceeding:

| Gate | After phase | Question |
|------|------------|---------|
| G1 | Phase 0 | "Inventory manifest looks right?" |
| G2 | Phase 2 | "Architecture and ADRs approved?" |
| G3 | Phase 4 Sprint 1 | "Foundation scripts working correctly?" |
| G4 | Phase 6 | "All tests pass — ready to certify?" |

At each gate, present me with a concise summary and wait for explicit approval.
The phrase "looks good" or "yes" counts as approval. Silence does not.

---

## READY STATE

You may begin Phase 0 now.

When Phase 0 is complete, present the inventory manifest and ask: "G1: Inventory manifest looks right?"

Do not proceed to Phase 1 until I approve.
