# Inteligencia del Catálogo — Referencia Standalone
# Usar cuando no hay canónicos disponibles en el repo
# o para complementar la exploración del repo

## Catálogo vigente al 2026-03-29 (snapshot)

### Resumen ejecutivo del catálogo
MetodologIA ofrece 17 servicios organizados en 3 tiers y 4 tipos de formación.
La escalera de valor va de entrada (Workshop 3h) a transformación (Programa 16 semanas).

---

## Servicios Tier 1 — Canónico .md disponible (máxima confiabilidad)

### 1. Workshop De Ocupado a Productivo
```yaml
slug: workshop-de-ocupado-a-productivo
tipo: Workshop
duración: 3 horas
categoría: Entrada
marca: MetodologIA
precio_b2c: COP 200.000 / persona
precio_b2b: COP 3.000.000 (hasta 20 pax)
entregables_core:
  - Agenda etiquetada
  - Fuga crítica identificada
  - Bloques de foco
  - Meta-prompt inicial
  - Rutina mínima de adopción
certificación: Asistencia (D+2)
crédito_hacia: Bootcamp Trabajar Amplificado (100%, 6 meses, intransferible)
garantía: Devolución 100% si no cumple expectativas en primeras 4h (con 1h feedback)
```

### 2. Bootcamp Trabajar Amplificado
```yaml
slug: bootcamp-trabajar-amplificado
tipo: Bootcamp
duración: 20 horas (18h núcleo + 2h contexto/nivelación)
categoría: Profundización
marca: MetodologIA
precio_b2c: COP 800.000 / persona
precio_b2b: COP 12.000.000 + IVA (hasta 20 pax)
precio_cofacilitación: COP 18.000.000 + IVA (hasta 40 pax)
precio_2_ejecuciones: COP 21.600.000 + IVA (-20% segunda ejecución)
campus_continuidad: COP 20.000 / mes (opcional post-cierre)
entregables_core:
  - Playbook interactivo HTML por nivel (básico, intermedio, avanzado)
  - Biblioteca +100 prompts (HTML + JSON)
  - Plantillas editables por módulo
  - Proyecto final evaluado por rúbrica
  - Memorias + grabaciones (30 días)
certificación:
  - Asistencia: todos los participantes
  - Competencia: requiere proyecto final aprobado (rúbrica: claridad, aplicabilidad, seguridad, reproducibilidad)
participantes_recomendado: 10-20
participantes_máximo_1_facilitador: 20
modalidad_default: Virtual sincrónico en vivo
presencial: "A solicitud — logística y viáticos cotizados por separado"
motor_ia: "Agnóstico. Default: ChatGPT. Requiere validación con TI del cliente"
campus: "Incluido durante formación + 1 mes post-cierre. Continuidad: COP 20.000/mes"
crédito_desde: "Workshop DOAP: 100%, 6 meses, acumulable, intransferible"
crédito_hacia: "[POR CONFIRMAR: JM, 2026-04-15] — EstrategIA y Programas"
garantía: "Devolución 100% antes de completar las primeras 4 horas (con 1h retroalimentación estructurada)"
penalidad_reprogramación_1era: "Sin costo — con causa justificada, ≥72h antes"
penalidad_reprogramación_2da: "COP 200.000"
dod_aceptación: "≥80% participantes con ≥4 de 5 artefactos producidos; ciclo pedagógico 100%; repositorio entregado D+2"
que_no_es:
  - Automatizaciones productivas listas para producción (hace prototipos/blueprints)
  - Consultoría estratégica (para eso: EstrategIA)
  - Curso teórico de IA
  - Reemplaza necesidad de cambio de hábitos
impuestos:
  b2c_online: "Incluidos (pasarela)"
  b2b_corporativo: "Discriminados (factura)"
```

### 3. EstrategIA (Consultive Workshop)
```yaml
slug: consultive-workshop-estrategia
variantes: [Empresarial, Personal]
tipo: Consultive Workshop
duración: 18 horas (9 sesiones × 2h)
categoría: Premium
marca: MetodologIA
precio_b2c: COP 3.400.000 (1-3 personas, variante Personal)
precio_b2b: COP 18.000.000 + IVA (hasta 10 participantes)
[NOTA: precio b2b verificado como COP 18.000.000 — canónico prevalece sobre referencias anteriores]
crédito_hacia: "[POR CONFIRMAR: JM, 2026-04-15]"
```

### 4 & 5. Programas Digital Champions y Empoderamiento
```yaml
slug_4: programa-digital-champions
slug_5: programa-empoderamiento
tipo: Programa
duración: 16 semanas / 48 horas
categoría: Transformación
precio_b2c_5: COP 18.000.000 / persona (Empoderamiento — solo B2C)
precio_b2b_4: COP 35.000.000 (5-10 cohort, Digital Champions)
nota_b2b_empoderamiento: "[POR CONFIRMAR: JM, 2026-Q2] — SKU B2B no definido para Empoderamiento"
crédito_estrategia_personal_hacia_empoderamiento: "100%, 6 meses [CONFIRMADO]"
```

---

## Servicios Tier 2 — Solo HTML disponible (confiabilidad media)

```yaml
bootcamp_gerencia_proyectos:
  slug: bootcamp-gerencia-proyectos
  precio_b2b: COP 12.000.000 + IVA (20 pax)
  nota_usd: "[POR CONFIRMAR: JM] — tasa de referencia USD inconsistente entre servicios"

bootcamp_ofimatica_google:
  slug: bootcamp-ofimatica-google
  precio_b2b: COP 12.000.000 + IVA (20 pax)

bootcamp_ofimatica_microsoft:
  slug: bootcamp-ofimatica-microsoft
  precio_b2b: COP 12.000.000 + IVA (20 pax)

bootcamp_ventas_amplificadas:
  slug: bootcamp-ventas-amplificadas
  precio_b2b: COP 12.000.000 + IVA (20 pax)
```

---

## Servicios Tier 3 — Línea IAC (white-label de MetodologIA)

```yaml
nota_general_iac: >
  IAC es una línea white-label de MetodologIA con currículum propio.
  Precio B2C: [POR CONFIRMAR: Comercial IAC, 2026-Q2] para TODOS los servicios IAC.
  Créditos IAC: se negocian por contrato marco, no aplican automáticamente.
  No producir derivadas B2C de servicios IAC hasta resolver PC-02, PC-07-PC-09.

servicios_iac:
  - Bootcamp IA Comercial (#10)
  - Bootcamp Introducción IA Generativa (#11)
  - Programa Competencias Digitales Universales (#12)
  - Programa Liderazgo Digital (#13)
  - Programa Transformación Digital (#14)
  - Bootcamp Amplificación IA (#15)
  - Bootcamp Ofimática IA Google (#16) [base: Ofimática Google #7]
  - Bootcamp Ofimática IA Microsoft (#17) [base: Ofimática Microsoft #8]
```

---

## Cadena de créditos (mapa completo)

### CONFIRMADOS
```
Workshop DOAP (#1) ──→ Bootcamp TA (#2): 100% · 6 meses · intransferible
EstrategIA Personal (#3-P) ──→ Empoderamiento (#5): 100% · 6 meses
```

### [POR CONFIRMAR] — NO afirmar sin condicional
```
Bootcamp TA (#2) ──→ EstrategIA (#3): ? · ? [PC-01]
Bootcamp TA (#2) ──→ Programas (#4, #5): ? · ? [PC-01]
Bootcamps #6-9 ──→ Cualquier servicio: ? [PC-03]
Cualquier servicio ──→ IAC: negocia en contrato marco [no automático]
```

---

## Reglas de segmentación B2B / B2C / B2B2B

### Qué aplica a qué segmento
| # | Servicio | B2B | B2C | B2B2B co-brand | B2B2B white-label |
|---|---------|:---:|:---:|:--------------:|:-----------------:|
| 1 | Workshop DOAP | ✓ | ✓ | ✓ | ✓ |
| 2 | Bootcamp TA | ✓ | ✓ | ✓ | ✓ |
| 3-E | EstrategIA Empresarial | ✓ | — | ✓ | ✓ |
| 3-P | EstrategIA Personal | — | ✓ | — | — |
| 4 | Digital Champions | ✓ | ✓* | ✓ | ✓ |
| 5 | Empoderamiento | — | ✓ | — | — |
| 6-9 | Bootcamps MetodologIA | ✓ | Caso a caso | ✓ | ✓ |
| 10-17 | IAC | ✓ | [POR CONFIRMAR] | ✓ | ✓ |

*B2C Digital Champions solo en modelo multi-company (cohorte abierto)

### B2B2B — requisitos previos SIEMPRE
```
CO-BRANDING: Contrato marco + acuerdo de uso de marca + kit de marca del partner
WHITE-LABEL: Licencia de contenido + fee setup (COP 4-7M) + entrenamiento facilitadores (Opción B: 26h, COP 8-12M/facilitador)
Lead time co-branding: 35 días calendario desde primer contacto
Lead time white-label Opción A: 35 días | Opción B: 60-75 días
```

---

## SLA y operación (datos para versión de compras)

```
Soporte email: D+1 hábil
Soporte WhatsApp: ≤2 horas (L-V 9-16h COT)
Embajador: punto de contacto para coordinación y seguimiento
Facilitador: diseña y entrega el contenido (no coordina logística)
Repositorio acceso: 30 días post-cierre
Campus acceso: durante formación + 1 mes; continuidad COP 20.000/mes
```

---

## Items [POR CONFIRMAR] críticos (al 2026-03-29)

```
PC-01 (CRÍTICO): Crédito Bootcamp → EstrategIA/Programas [JM, 2026-04-15]
PC-02 (CRÍTICO IAC): Modelo B2C para servicios IAC [JM, 2026-04-15]
PC-03: Crédito Bootcamps #6-9 → otros servicios [JM, 2026-04-15]
PC-04: Plataforma/precio campus para Ofimática Google [JM, 2026-04-15]
PC-05 (CRÍTICO): Tasa USD unificada para todo el catálogo [JM, 2026-04-15]
PC-06: Responsable de datos en B2B2B co-brand (riesgo legal) [JM, 2026-04-15]
PC-13: SKU B2B para Empoderamiento [JM, 2026-Q2]
PC-14: Incentivo de referidos [JM, 2026-Q2]
```

---

## Glosario prioritario (términos más usados en propuestas)

| Término | Definición operativa para propuestas |
|---------|-------------------------------------|
| (R)Evolución | Transformación progresiva: cambio estructural con continuidad operativa |
| Amplificación | Multiplicar capacidad productiva con IA sin aumentar horas, manteniendo criterio humano |
| Soberanía Digital | Organización controla sus decisiones tech sin depender de un proveedor |
| Empoderamiento | Individuo dirige carrera y productividad con autonomía y herramientas propias |
| Meta-prompt | Instrucción estructurada y reutilizable para IA: objetivo + resultado esperado + contexto + datos |
| Playbook | Guía operativa paso a paso para replicar un proceso sin supervisión |
| Asistente IA | Configuración personalizada de motor IA para un caso de uso específico |
| Human-in-the-loop | IA propone; humano valida y decide. Principio ético central |
| Embajador | Orquesta el ciclo completo del servicio — punto único de contacto del cliente |
| Facilitador | Diseña, prepara y entrega el contenido del servicio |
| Campus/LMS | Plataforma de aprendizaje con materiales y grabaciones |
| Crédito educativo | 100% del monto pagado en servicio anterior se descuenta del siguiente (condiciones aplican) |
| Brief | Documento que recoge info mínima para contextualizar el servicio |
| Memorias | Paquete completo post-sesión: grabación + transcripción + notas + artefactos |
