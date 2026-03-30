# Index: Cross-Plugin Workflows

> Archivo de referencia on-demand. NO cargar al inicio de sesion.
> Cargar cuando el usuario pide un workflow multi-plugin o cuando el routing detecta intencion compuesta.

---

## Protocolo General de Cadenas

1. **Crear workspace compartido** -- Un solo folder para toda la cadena
2. **Ejecutar paso a paso** -- Cada paso invoca un skill via `Skill` tool
3. **Handoff de artefactos** -- Entre pasos, leer summary del artefacto anterior y pasar como contexto
4. **Quality gates en transiciones** -- G1/G2/G3 segun la definicion del workflow
5. **Rollup final** -- Al completar la cadena, generar resumen ejecutivo en el workspace

---

## Workflow 1: Full Client Engagement

**Trigger phrases:** "engagement completo", "de discovery a propuesta", "cliente nuevo end-to-end", "discovery + propuesta + plan"

**Secuencia:**
```
mao:discovery
  -> Artefactos: AS-IS report, stakeholder map, opportunity matrix
  -> Gate G1: Spec completeness >= 70%

metodologia-engine:propuesta (con contexto del discovery)
  -> Artefactos: 10 archivos (HTML, DOCX, PPTX, XLSX, MD x2, verification)
  -> Gate G3: Legal safety, brand compliance, pricing accuracy

pm:charter (con contexto de propuesta aprobada)
  -> Artefactos: Project charter, WBS, schedule baseline
```

**Workspace:** `engagement-{nombre-cliente}-{YYYY-MM-DD}/`
**Duracion estimada:** 2-3 sesiones (Express) o 5-7 sesiones (Guided)

---

## Workflow 2: Architecture + Deploy

**Trigger phrases:** "disenar y deployear", "arquitectura a produccion", "diseno + implementacion + deploy"

**Secuencia:**
```
sa:design-architecture
  -> Artefactos: C4 diagrams, architecture decision record, tech stack spec
  -> Gate G1: Architecture viability

sa:spec (genera spec de implementacion)
  -> Artefactos: Implementation spec, API contracts, data model

feature-dev:feature-dev (implementa segun spec)
  -> Artefactos: Codigo fuente, tests
  -> Gate G1: Tests pass, coverage >= 80%

vercel:deploy
  -> Artefactos: Deployment URL, preview URL
```

**Workspace:** `arch-deploy-{nombre-proyecto}-{YYYY-MM-DD}/`

---

## Workflow 3: Discovery to Proposal (Express)

**Trigger phrases:** "discovery rapido y propuesta", "disco + prop", "diagnostico para cotizar"

**Secuencia:**
```
mao:run-express (discovery en 1 sesion, 3 entregables)
  -> Artefactos: Quick diagnostic, top-3 opportunities, go/no-go recommendation

metodologia-engine:propuesta (si go, genera propuesta basada en diagnostico)
  -> Artefactos: 10 archivos standard
  -> Gate G3: Legal + pricing
```

**Workspace:** `disco-prop-{nombre-cliente}-{YYYY-MM-DD}/`
**Duracion estimada:** 1 sesion

---

## Workflow 4: Plan + Execute + Review

**Trigger phrases:** "planificar e implementar", "plan + codigo + review", "sprint completo"

**Secuencia:**
```
pm:planning (define scope, tasks, timeline)
  -> Artefactos: Sprint plan, task breakdown, acceptance criteria

feature-dev:feature-dev (implementa las tareas del plan)
  -> Artefactos: Codigo fuente, tests por tarea

pr-review-toolkit:review-pr (revisa todo el codigo producido)
  -> Artefactos: Review report, issues list, suggested fixes
```

**Workspace:** `sprint-{nombre-feature}-{YYYY-MM-DD}/`

---

## Workflow 5: Full Quality Audit

**Trigger phrases:** "auditoria completa de calidad", "audit full", "revisa todo: seguridad + performance + tests + deuda"

**Secuencia:**
```
sa:audit-security
  -> Artefactos: Security findings, OWASP checklist, vulnerability report

sa:audit-performance
  -> Artefactos: Performance profile, bottleneck report, Core Web Vitals

sa:audit-testing
  -> Artefactos: Coverage report, test gap analysis, testing strategy

sa:audit-debt
  -> Artefactos: Tech debt inventory, debt classification, remediation roadmap
```

**Artefacto final:** Consolidated quality report con executive summary
**Workspace:** `audit-{nombre-proyecto}-{YYYY-MM-DD}/`

---

## Workflow 6: Catalog Update Cycle

**Trigger phrases:** "actualizar y verificar catalogo", "ciclo de actualizacion", "mantenimiento del catalogo"

**Secuencia:**
```
metodologia-engine:verificar (quality audit de todos los servicios)
  -> Artefactos: Verification report, inconsistencies list, POR CONFIRMAR items

metodologia-engine:actualizar-catalogo (corregir issues encontrados)
  -> Artefactos: Updated canonical files, derived versions regenerated
```

**No necesita workspace dedicado** -- opera sobre `catalogo-servicios/` directamente.

---

## Workflow 7: Service Innovation

**Trigger phrases:** "innovar servicio nuevo", "crear servicio", "nuevo bootcamp/workshop/programa"

**Secuencia:**
```
mao:validate-feasibility (evalua viabilidad del concepto)
  -> Artefactos: Feasibility report, market analysis, risk assessment
  -> Gate G1: Feasibility >= 60%

metodologia-engine:catalogo (crea el servicio en el catalogo)
  -> Artefactos: canonico.md + 8 versiones derivadas
  -> Gate G3: Pricing, legal compliance

metodologia-engine:propuesta (genera primera propuesta del servicio)
  -> Artefactos: 10 archivos standard
```

**Workspace:** `innovation-{nombre-servicio}-{YYYY-MM-DD}/`

---

## Workflow 8: Code to Production

**Trigger phrases:** "feature completa a produccion", "build + test + review + deploy", "ship it end-to-end"

**Secuencia:**
```
feature-dev:feature-dev (planificacion e implementacion)
  -> Artefactos: Codigo fuente, component architecture

superpowers:test-driven-development (TDD cycle)
  -> Artefactos: Test suite, coverage report
  -> Gate G1: Tests pass, coverage >= 80%

pr-review-toolkit:review-pr (code review exhaustivo)
  -> Artefactos: Review report, approved/rejected

vercel:deploy (si review aprobado)
  -> Artefactos: Production URL, deployment log
```

**Workspace:** `ship-{nombre-feature}-{YYYY-MM-DD}/`

---

## Custom Workflow Builder

Si ninguno de los 8 workflows predefinidos encaja, el orquestador puede construir uno ad-hoc:

1. El usuario describe lo que necesita en lenguaje natural
2. El orquestador identifica los skills necesarios de la tabla de routing
3. Presenta la cadena propuesta para aprobacion
4. Ejecuta paso a paso con handoff de artefactos

Ejemplo: "necesito auditar seguridad, luego generar un plan de remediacion, luego implementar los fixes"
-> `sa:audit-security` -> `pm:planning` -> `feature-dev:feature-dev` -> `pr-review-toolkit:review-pr`

---

## Error Recovery Protocol

Cuando un paso de un workflow falla:

1. **Registrar fallo** en `tasklog.md` con: paso fallido, error, timestamp
2. **No avanzar** al siguiente paso. El gate entre pasos actua como hard stop.
3. **Diagnosticar** causa raiz:
   - Si es error de input: corregir y re-ejecutar el paso fallido
   - Si es error de plugin/skill: informar al usuario con opciones alternativas
   - Si es error de contexto: cargar mas contexto del paso anterior y reintentar
4. **Re-ejecutar** solo el paso fallido, no toda la cadena
5. **Si 3 reintentos fallan**: escalar al usuario con diagnostico detallado y opciones

---

## Checkpoint Resume Protocol

Para retomar un workflow parcialmente completado (entre sesiones):

1. **Al iniciar sesion**, el Awakening Protocol detecta workspaces con `tasklog.md`
2. **Leer ultimo paso completado** del `tasklog.md`
3. **Verificar artefactos** del ultimo paso exitoso (existen y estan intactos?)
4. **Presentar al usuario**: "Workflow [nombre] en progreso. Ultimo paso completado: [paso N]. Siguiente: [paso N+1]. Continuar?"
5. **Si continua**: cargar artefactos del paso N como contexto y ejecutar paso N+1
6. **Si no continua**: mantener workspace en estado ACTIVE para futuro resume

### Formato de Checkpoint en tasklog.md

```markdown
## [YYYY-MM-DD HH:MM] Workflow: {nombre}
- Status: IN_PROGRESS
- Mode: {Express|Guided|Auto|Develop}
- Current Step: {N} of {total}
- Completed Steps:
  - Step 1: {skill} -> {artefactos} [OK]
  - Step 2: {skill} -> {artefactos} [OK]
- Next Step: {skill}
- Gate Pending: {G1|G2|G3|none}
```
