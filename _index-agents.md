# Index: Master Agent Catalog

> Archivo de referencia on-demand. NO cargar al inicio de sesion.
> Cargar cuando se necesite composicion de triad o busqueda de agente especializado.
> Organizado en 3 niveles: Orchestrators, Domain Specialists, Support Specialists.

---

## Nivel 1: Orchestrators (Siempre Disponibles)

Estos agentes coordinan pipelines completos y nunca ejecutan trabajo directamente.

| Agente | Plugin | Rol | Activacion |
|--------|--------|-----|------------|
| **proposal-conductor** | MetodologIA Engine | Orquesta pipeline de propuestas (5 capas: Discover -> Normalize -> Design -> Protect -> Generate) | `/metodologia-engine:propuesta`, `/metodologia-engine:cotizacion` |
| **discovery-conductor** | MAO | Orquesta pipeline de discovery (4 fases: Fundamentar -> Acelerar -> Catalizar -> Amplificar) | `/mao:discovery`, `/mao:run-auto`, `/mao:run-express` |
| **project-orchestrator** | PMO-APEX | Orquesta lifecycle de proyecto (initiation -> planning -> execution -> close) | `/pm:init`, `/pm:run-auto` |
| **principal-architect** | SA | Orquesta analisis arquitectonico (5 fases: AS-IS -> Friction -> Design -> Plan -> Report) | `/sa:analyze`, `/sa:run-auto` |

---

## Nivel 2: Domain Specialists

### SA — Software Architecture Specialists (66 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| backend-specialist | Arquitectura server-side, APIs, concurrencia | Codigo backend, endpoints API, bases de datos |
| frontend-specialist | Arquitectura cliente, UI, accesibilidad, Core Web Vitals | Componentes React/Vue/Angular, CSS, accessibility |
| security-specialist | OWASP, threat modeling, auth/authz, supply chain | Vulnerabilidades, autenticacion, secrets |
| performance-analyst | Latencia, throughput, scaling, memory, observability | Metricas de performance, profiling |
| test-strategist | Test pyramid, coverage, test design, CI validation | Archivos de test, coverage reports |
| devops-engineer | CI/CD, Docker, K8s, IaC, deployment | Dockerfiles, pipelines, infra config |
| data-modeler | Schema design, migration, normalization, ERD | Modelos de datos, migrations, schemas |
| database-specialist | Query optimization, indexing, sharding, replication | SQL, query plans, database config |
| cloud-architect | AWS/GCP/Azure, cloud-native, cost governance | Cloud config, IaC, cloud services |
| api-designer | REST, GraphQL, gRPC, versioning, contracts | API specs, OpenAPI, protobuf |
| react-specialist | React 19+, Server Components, hooks, RSC | .tsx, React components, hooks |
| nextjs-specialist | Next.js 16+, App Router, Server Actions, Cache | next.config, app/, route handlers |
| typescript-specialist | TypeScript 5+, branded types, conditional types | .ts, tsconfig, type definitions |
| node-specialist | Node.js runtime, streams, workers, ESM | Node.js code, package.json |
| css-architect | Tailwind, CSS Layers, container queries, tokens | CSS/SCSS, tailwind.config |
| code-analyst | Patterns, technical debt, complexity, refactoring | Codebase metrics, complexity analysis |
| observability-engineer | Logging, metrics, tracing, alerting | Monitoring config, logging |
| infrastructure-architect | Cloud networking, IaC, DR, compute strategy | Terraform, CloudFormation |
| migration-specialist | Strangler fig, data migration, re-platforming | Legacy code, migration plans |
| quality-guardian | Validates deliverables against excellence criteria | Gate checkpoints |

### MAO — Discovery & Consulting Specialists (101 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| technical-architect | Arquitectura tecnica para discovery | Evaluacion de stack, infraestructura |
| business-analyst | Analisis de negocio, requirements, gap analysis | Procesos de negocio, requisitos |
| domain-analyst | Industry lens, regulatory constraints, DDD | Contexto de industria, regulaciones |
| data-strategist | Arquitectura de datos, governance, analytics | Datos, bases de datos, analytics |
| change-catalyst | Gestion del cambio, adoption strategy | Cambio organizacional |
| delivery-manager | Timelines, scope, risk, stakeholder comms | Planificacion, presupuesto |
| risk-controller | Governance, gate enforcement, risk monitoring | Riesgos, compliance |
| quality-guardian | Validates deliverables, catches inconsistencies | Checkpoints de calidad |
| full-stack-generalist | Code analysis, infra assessment, DevOps | Codigo, infraestructura |
| ux-researcher | User research, personas, usability, journey maps | UX, interfaces, usuarios |
| content-strategist | Copywriting, storytelling, data storytelling | Contenido, narrativa |
| editorial-director | Narrative coherence across deliverables | Calidad editorial |
| product-strategist | Roadmap, value streams, product-market fit | Producto, backlog |
| compliance-analyst | GDPR, SOX, PCI-DSS, HIPAA | Regulaciones, compliance |
| security-architect | Threat modeling, zero trust, DevSecOps | Seguridad |
| solutions-architect | End-to-end integration, cross-cutting concerns | Integraciones |
| platform-engineer | Cloud readiness, migration, API governance | Plataforma |
| mobile-architect | Cross-platform, store compliance, mobile CI/CD | Apps mobile |
| data-scientist | Statistical validation, ML/AI viability | Datos, ML |
| research-scientist | State-of-art validation, PoC design | Investigacion |

### PMO-APEX — Project Management Specialists (48 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| delivery-lead | Timeline, scope, velocity, burndown | Ejecucion de proyecto |
| risk-manager | Risk register, evidence audit, gate enforcement | Riesgos |
| quality-auditor | Validates deliverables against acceptance criteria | Calidad |
| scope-analyst | WBS, scope management, change control | Alcance |
| schedule-planner | Gantt, critical path, dependencies, CPM | Cronograma |
| budget-controller | EVM, cost tracking, variance analysis | Presupuesto |
| stakeholder-engagement | Influence networks, engagement strategies | Stakeholders |
| communication-strategist | Reporting cadences, information flow | Comunicaciones |
| change-controller | Change requests, impact analysis, CCB | Control de cambios |
| methodology-architect | Framework selection (Agile/Traditional/Hybrid) | Metodologia |
| agile-coach | Scrum, Kanban, SAFe, velocity analysis | Agilidad |
| scrum-master | Sprint ceremonies, impediment removal | Scrum |
| resource-optimizer | Capacity planning, utilization, leveling | Recursos |
| risk-analyst | Monte Carlo, decision trees, EMV, sensitivity | Riesgos cuantitativos |
| benefits-tracker | KPIs, ROI, value delivery | Beneficios |

### Vercel — Platform & AI Specialists (3 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| ai-architect | Arquitectura AI en Vercel (AI SDK, providers, agents, MCP) | AI features, chatbots, agentes |
| deployment-expert | Deploy, CI/CD, preview URLs, rollbacks, env vars | Deployment, dominios, pipelines |
| performance-optimizer | Core Web Vitals, caching, image optimization, bundle size | Performance, Lighthouse, slow pages |

### PR-Review-Toolkit — Code Quality Specialists (7 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| code-reviewer | Review de codigo contra guidelines y best practices | PR abierto, codigo modificado |
| code-simplifier | Simplificar codigo preservando funcionalidad | Codigo complejo, post-implementacion |
| comment-analyzer | Analizar comentarios para accuracy y mantenibilidad | Docstrings, documentacion inline |
| pr-test-analyzer | Analizar cobertura de tests en un PR | PR con nueva funcionalidad |
| silent-failure-hunter | Encontrar silent failures y error handling inadecuado | Catch blocks, fallbacks, try-catch |
| type-design-analyzer | Analizar diseno de tipos para encapsulacion e invariantes | Nuevos tipos, interfaces, enums |
| code-reviewer (feature) | Review de codigo por feature (agente Feature-dev) | Review post-feature |

### Feature-Dev — Development Specialists (3 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| code-architect | Disenar arquitectura de feature con blueprint completo | Nueva feature, planificacion |
| code-explorer | Analizar codebase existente, trazar paths, mapear dependencias | Exploracion pre-implementacion |
| code-reviewer | Review de codigo por bugs, seguridad, quality | Post-implementacion |

### MetodologIA Engine — Proposal Specialists (7 agentes)

| Agente | Rol | Senales de Activacion |
|--------|-----|----------------------|
| proposal-conductor | Orquesta pipeline de propuestas | Propuesta solicitada |
| proposal-writer | Genera contenido bilingue (ES+EN) | Redaccion de propuesta |
| service-selector | Match client need -> service slug + segment | Seleccion de servicio |
| input-interpreter | Normaliza input de cualquier calidad a JSON | Input del usuario |
| legal-guardian | 10 legal blockers + 7 warnings | Pre-generacion |
| format-producer | Genera 10 archivos (HTML, DOCX, PPTX, XLSX, MD) | Post-aprobacion legal |
| catalog-curator | Mantenimiento de catalogo de servicios | Operaciones de catalogo |

---

## Nivel 3: Support & Cross-Cutting Specialists

Estos agentes se activan para composicion de triad o tareas de soporte.

| Agente | Plugin | Rol de Soporte |
|--------|--------|----------------|
| evidence-classifier | SA | Clasificar y validar evidencia |
| excellence-loop | SA | 10 criterios de excelencia en artefactos |
| friction-detector | SA | Detectar 10 categorias de friccion |
| root-cause-analyzer | SA | Analisis de causa raiz |
| trade-off-analyzer | SA | Analisis de trade-offs |
| dynamic-sme | SA/MAO | Subject matter expert adaptativo |
| input-analysis | SA/MAO/PMO | Analisis de input del usuario |
| output-engineering | SA/MAO/PMO | Ingenieria de output |
| context-optimization | SA/MAO/PMO | Optimizacion de contexto |
| mermaid-diagramming | SA/MAO/PMO | Generacion de diagramas Mermaid |
| rendering-engine | MAO/PMO | Motor de renderizado |
| brand-docx | MAO | Generacion DOCX con marca |
| brand-pptx | MAO | Generacion PPTX con marca |
| brand-xlsx | MAO | Generacion XLSX con marca |

---

## Tabla de Composicion Triad

Para auto-componer Lead + Support + Guardian por tipo de tarea:

| Tipo de Tarea | Lead | Support | Guardian |
|---|---|---|---|
| Analisis de arquitectura | SA principal-architect | MAO solutions-architect | SA security-specialist |
| Propuesta comercial | ME proposal-conductor | MAO executive-pitch | ME legal-guardian |
| Planificacion de proyecto | PMO project-orchestrator | SA implementation-planning | PMO risk-manager |
| Discovery de cliente | MAO discovery-conductor | SA technical-discovery | MAO risk-controller |
| Code review | PR-review code-reviewer | SA code-analyst | SA security-specialist |
| Deployment a produccion | Vercel deployment-expert | SA deployment-strategy | SA security-surface-scanner |
| Feature development | Feature-dev code-architect | SA frontend/backend-specialist | Superpowers verification |
| Innovacion de servicio | MAO product-strategist | SA software-viability | ME legal-guardian |
| Quality audit | SA quality-guardian | MAO quality-guardian | PMO quality-auditor |
| Data architecture | SA data-modeler | MAO data-strategist | SA security-specialist |
| Migration planning | SA migration-specialist | MAO solutions-architect | PMO risk-manager |
| Performance optimization | SA performance-analyst | SA observability-engineer | SA quality-guardian |
| AI/ML feature | Vercel ai-architect | SA ai-architect | SA security-specialist |
| API testing | Postman API tester | SA api-designer | SA security-specialist |
| Design implementation | Figma design implementer | SA frontend-specialist | SA accessibility |
