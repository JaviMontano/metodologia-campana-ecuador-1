# Index: Intent Routing Rules

> Archivo de referencia on-demand. NO cargar al inicio de sesion.
> Cargar cuando la tabla condensada en CLAUDE.md no resuelve la ambiguedad.

---

## Algoritmo de Routing

```
1. TOKENIZAR -- Extraer palabras clave del input del usuario (ignorar stopwords)
2. NORMALIZAR -- Quitar acentos, lowercase, expandir abreviaturas comunes
3. MATCH -- Comparar tokens contra keyword groups por dominio
4. SCORE -- Calcular confianza = sum(peso_keyword * match) / max_posible
5. BIAS -- Aplicar bias contextual:
   - +0.15 si el dominio coincide con workspace activo
   - +0.10 si el dominio fue usado en los ultimos 3 mensajes
   - +0.05 si hay archivos del dominio en el CWD
6. RESOLVER -- Si score >= 0.95: despachar. Si 0.60-0.94: opciones. Si < 0.60: preguntar.
7. DESPACHAR -- Invocar Skill tool con el skill seleccionado
```

---

## Keyword Groups por Dominio

### 1. Arquitectura de Software (-> SA)
**Primary (1.0):** arquitectura, architecture, refactor, patron, pattern, design-pattern, deuda-tecnica, tech-debt, microservicio, monolito, API-design, system-design
**Secondary (0.6):** codigo, code, componente, modulo, dependencia, acoplamiento, cohesion, SOLID, clean-architecture, DDD, hexagonal
**Tech Signal (0.3):** .ts, .tsx, .py, .java, next.config, package.json, dockerfile, docker-compose
**Context Signal:** Archivos de codigo fuente en CWD, presencia de `src/`, `lib/`, `app/`

### 2. Gestion de Proyectos (-> PMO-APEX)
**Primary (1.0):** proyecto, project, sprint, backlog, timeline, cronograma, schedule, riesgo, risk, presupuesto, budget, stakeholder, milestone, entregable, deliverable
**Secondary (0.6):** scrum, kanban, agile, waterfall, gantt, burndown, velocity, retrospectiva, standup, daily, PMO, charter, WBS
**Tech Signal (0.3):** jira, azure-devops, monday, trello, asana
**Context Signal:** Presencia de `plan.md`, `charter.md`, `schedule.md`

### 3. Discovery y Consultoria (-> MAO)
**Primary (1.0):** discovery, diagnostico, diagnostic, as-is, oportunidades, opportunities, fundamentar, consultoria, consulting, maduracion, madurez
**Secondary (0.6):** PIVOTE, flujo, flow, proceso, process, stakeholder-mapping, cambio, change-management, transformacion-digital, analisis-de-brechas
**Tech Signal (0.3):** mermaid, diagrama, diagram, canvas, lean, design-thinking
**Context Signal:** Presencia de directorios `discovery/`, `research/`, `inputs-relevantes/`

### 4. Propuestas Comerciales (-> MetodologIA Engine)
**Primary (1.0):** propuesta, proposal, cotizacion, quote, pitch, oferta, offer, cliente, client, venta, sale, comercial
**Secondary (0.6):** precio, price, servicio, service, bootcamp, workshop, programa, program, catalogo, catalog
**Tech Signal (0.3):** .html (template), docx, pptx, xlsx
**Context Signal:** Presencia de `catalogo-servicios/`, `propuesta-*/`, `metodologia-engine-plugin/`

### 5. Catalogo de Servicios (-> MetodologIA Engine: catalogo)
**Primary (1.0):** catalogo, catalog, canonico, canonical, derivar, derive, verificar-catalogo, precios, pricing, inventario, servicio-nuevo
**Secondary (0.6):** tier, segmento, segment, audiencia, audience, version-ejecutiva, version-comercial, whitelabel, cobranding
**Tech Signal (0.3):** canonico.md, ejecutiva-b2b.md, comercial-cliente.md
**Context Signal:** Presencia de `catalogo-servicios/` con subdirectorios de servicios

### 6. Desarrollo de Codigo (-> Feature-dev + Superpowers)
**Primary (1.0):** feature, implementar, implement, construir, build, codear, code, funcionalidad, functionality, crear-componente, endpoint
**Secondary (0.6):** react, next, angular, vue, svelte, express, fastapi, nest, hono, component, hook, middleware, route
**Tech Signal (0.3):** .tsx, .jsx, .vue, .svelte, .py, .go, .rs
**Context Signal:** Presencia de `src/`, `app/`, `pages/`, `components/`, package.json

### 7. Code Review (-> PR-review-toolkit)
**Primary (1.0):** review, revisar, PR, pull-request, simplificar, simplify, code-review, revisar-codigo
**Secondary (0.6):** lint, bug, error, vulnerability, silent-failure, type-design, test-coverage
**Tech Signal (0.3):** git diff, git log, .github/
**Context Signal:** Cambios recientes en git (unstaged changes)

### 8. Deployment y Operaciones (-> Vercel)
**Primary (1.0):** deploy, desplegar, ship, produccion, production, preview, rollback, hosting, dominio, domain
**Secondary (0.6):** vercel, env-vars, CI/CD, build, bundle, CDN, edge, serverless, cron, function
**Tech Signal (0.3):** vercel.json, vercel.ts, .vercel/, next.config
**Context Signal:** Presencia de vercel.json o .vercel/ en CWD

### 9. Testing y QA (-> Superpowers / SA)
**Primary (1.0):** test, TDD, cobertura, coverage, spec, prueba, testing, e2e, unit-test, integration-test
**Secondary (0.6):** jest, vitest, playwright-test, cypress, mocha, assertion, mock, fixture
**Tech Signal (0.3):** *.test.ts, *.spec.ts, __tests__/, jest.config, vitest.config
**Context Signal:** Presencia de archivos de test en CWD

### 10. Browser Automation (-> Playwright / Chrome DevTools)
**Primary (1.0):** browser, screenshot, lighthouse, visual-test, accesibilidad, accessibility, a11y, performance-audit
**Secondary (0.6):** DOM, console, network, devtools, responsive, mobile-view, click, navigate
**Tech Signal (0.3):** playwright.config, .puppeteerrc
**Context Signal:** Dev server corriendo (localhost)

### 11. AI & ML (-> Vercel AI SDK / Anthropic Skills)
**Primary (1.0):** AI, modelo, LLM, agente-IA, chatbot, embeddings, RAG, prompt, fine-tune, generative
**Secondary (0.6):** openai, anthropic, gemini, claude, GPT, vector, semantic-search, ai-sdk, ai-gateway
**Tech Signal (0.3):** @ai-sdk/*, @anthropic-ai/*, langchain, llamaindex, transformers
**Context Signal:** Imports de AI SDK, archivos de prompts, modelo en uso

### 12. Data Engineering (-> Data-eng plugin)
**Primary (1.0):** airflow, DAG, pipeline-datos, warehouse, dbt, ETL, ELT, data-lake
**Secondary (0.6):** cosmos, lineage, freshness, profiling, orchestration, astro, deployment-airflow
**Tech Signal (0.3):** dags/, airflow.cfg, dbt_project.yml, profiles.yml
**Context Signal:** Presencia de `dags/`, `models/`, Astronomer config

### 13. Figma & Design (-> Figma plugin)
**Primary (1.0):** figma, diseno, design-system, componentes-UI, library, mockup, wireframe
**Secondary (0.6):** design-tokens, atomic-design, storybook, component-library, UI-kit
**Tech Signal (0.3):** .fig, figma-export, design-tokens.json
**Context Signal:** URLs de Figma en el input, archivos de design tokens

### 14. API Testing (-> Postman plugin)
**Primary (1.0):** postman, API-test, coleccion, mock-API, newman, API-security
**Secondary (0.6):** collection, environment, pre-request, test-script, monitor, OpenAPI-test
**Tech Signal (0.3):** .postman_collection.json, .postman_environment.json, openapi.yaml
**Context Signal:** Presencia de Postman collections o OpenAPI specs

### 15. WordPress (-> WordPress plugin)
**Primary (1.0):** wordpress, WP, sitio-web, website, tema, theme, plugin-WP
**Secondary (0.6):** blog, CMS, landing-page, ecommerce-WP, woocommerce
**Tech Signal (0.3):** wp-config.php, functions.php, style.css (theme)
**Context Signal:** Mencion explicita de WordPress

### 16. HuggingFace (-> HuggingFace plugin)
**Primary (1.0):** huggingface, HF, modelo-ML, dataset, transformers, training, fine-tuning
**Secondary (0.6):** gradio, spaces, inference, tokenizer, trainer, evaluacion-modelos
**Tech Signal (0.3):** transformers, datasets, huggingface_hub imports
**Context Signal:** Trabajo con modelos ML, datasets, training pipelines

### 17. Enterprise Search (-> Enterprise Search plugin)
**Primary (1.0):** busqueda-enterprise, knowledge-base, buscar-informacion, digest, fuentes
**Secondary (0.6):** search-strategy, knowledge-synthesis, source-management
**Tech Signal (0.3):** N/A (MCP-based)
**Context Signal:** Necesidad de buscar informacion en multiples fuentes empresariales

### 18. MCP Server Development (-> MCP Server Dev plugin)
**Primary (1.0):** MCP-server, crear-MCP, build-MCP, herramienta-MCP
**Secondary (0.6):** model-context-protocol, MCP-tool, MCP-resource, MCP-prompt
**Tech Signal (0.3):** mcp.json, @modelcontextprotocol/sdk
**Context Signal:** Desarrollo de servidores MCP

### 19. Git & Commits (-> Commit Commands plugin)
**Primary (1.0):** commit, push, PR, pull-request, branch, git
**Secondary (0.6):** merge, rebase, cherry-pick, stash, tag, release
**Tech Signal (0.3):** .git/, .github/, CODEOWNERS
**Context Signal:** Cambios pendientes en git (unstaged/staged)

### 20. Sourcegraph (-> Sourcegraph plugin)
**Primary (1.0):** sourcegraph, buscar-codigo, code-search, buscar-en-repos
**Secondary (0.6):** cross-repo, codigo-externo, buscar-patrones
**Tech Signal (0.3):** N/A
**Context Signal:** Necesidad de buscar codigo fuera del repo actual

### 21. Document Generation (-> Anthropic Skills)
**Primary (1.0):** PDF, DOCX, XLSX, PPTX, generar-documento, exportar-documento
**Secondary (0.6):** reporte, informe, presentacion, hoja-calculo, CV, certificado
**Tech Signal (0.3):** Templates .docx, .xlsx, .pptx
**Context Signal:** Solicitud de generar archivos Office o PDF

### 22. Scheduling & Reminders (-> Scheduled Tasks)
**Primary (1.0):** schedule, cron, recordar, agendar, programar, recurrente, reminder
**Secondary (0.6):** trigger, automatizar, cada-hora, cada-dia, periodico
**Tech Signal (0.3):** N/A
**Context Signal:** Solicitud de tarea futura o recurrente

---

## Input Tolerance -- Normalizacion

### Acentos y Caracteres
`á→a, é→e, í→i, ó→o, ú→u, ñ→n` (para matching, NO para output)

### Typos Comunes
| Typo | Intencion |
|------|-----------|
| deployame, deployear, deployea | deploy |
| hasme, azme | hazme |
| revisa el codgo | revisa el codigo |
| propesta, propuest | propuesta |
| cotisacion, cotizasion | cotizacion |
| architectura | arquitectura |
| brainstrom, brainstore | brainstorm |
| analisar, analizar | analizar |

### Spanglish Patterns
| Input | Mapeo |
|-------|-------|
| "buildea esto" | build / construir |
| "pushea al repo" | git push |
| "mergea el PR" | merge pull request |
| "fixea el bug" | fix / reparar |
| "fetchea los datos" | fetch data |
| "renderiza el componente" | render component |
| "escala la infra" | scale infrastructure |

### Abreviaturas
| Abreviatura | Expansion |
|-------------|-----------|
| arq | arquitectura |
| PM | project management |
| disco | discovery |
| prop | propuesta |
| coti | cotizacion |
| cat | catalogo |
| sec | seguridad |
| perf | performance |
| a11y | accessibility |
| i18n | internationalization |
| dx | developer experience |

---

## Fallback Rules

1. **Sin match (score < 0.30):** Preguntar al usuario: "No estoy seguro de que dominio necesitas. Puedes elegir: [lista de dominios top 5 mas cercanos]"
2. **Match multiple igual (delta < 0.05):** Presentar las 2-3 opciones empatadas con descripcion de 1 linea cada una
3. **Plugin no disponible:** Informar y sugerir alternativa. Ej: "Firebase no esta configurado para este proyecto. Quieres usar Supabase via SA scaffold?"
4. **Skill no encontrado en lista:** Cargar `_index-skills.md` y buscar skill mas cercano por nombre
5. **Comando ambiguo:** Ej: `/export-pdf` existe en SA, MAO y PMO. Resolver por contexto de workspace activo. Si no hay workspace, preguntar.
