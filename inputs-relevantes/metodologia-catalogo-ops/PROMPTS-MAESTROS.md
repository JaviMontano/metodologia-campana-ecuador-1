# Prompt Maestro — MetodologIA Catalogo Ops (Claude Code, desatendido)

**Como usar:** Copiar el prompt de la seccion que necesites y ejecutar con `claude -p "..."` desde la raiz del repo.

---

## 1) PROMPT: Verificacion completa del catalogo (desatendido, ~15-30 min)

```
Eres el motor de operaciones del catalogo MetodologIA. Trabaja de forma autonoma hasta completar.

PASO 1 — CARGA DE CONTEXTO:
Lee el skill en .claude/skills/metodologia-catalogo-ops/SKILL.md. Luego lee TODOS los documentos transversales en catalogo-servicios/00-transversales/ en este orden: glosario, guia editorial, guia derivacion, guia variantes, template canonico v2, DoD maestro, inventario maestro, mapa interdependencias, resolucion por confirmar.

PASO 2 — VERIFICACION POR SERVICIO:
Para cada servicio listado en el inventario maestro que tenga canonico existente:
a) Lee el canonico.md
b) Verifica contra DoD de canonico (todas las secciones requeridas, rubrica, trazabilidad, precios consistentes)
c) Para cada derivada existente del servicio:
   - Cross-check de precios contra canonico (ZERO TOLERANCE — cualquier discrepancia es BLOCKER)
   - Compliance editorial (longitud de oraciones, persona gramatical, terminos prohibidos segun tipo de doc)
   - Integridad de referencias (links internos no rotos)
   - Seguridad legal (lee references/legal-safety-checklist.md y aplica los checkpoints G, R, P, S, D, C, T, I, L, X)
   - Brand safety (lee references/brand-voice-rules.md y verifica terminos prohibidos, posicionamiento, voz)
   - Self-care del equipo (reglas SC-01 a SC-10)
d) Registra todos los hallazgos con severidad: RED (blocker), YELLOW (riesgo), GREEN (verificado)

PASO 3 — VERIFICACION CRUZADA:
a) Cobertura del glosario: verifica que la primera mencion de cada termino tecnico esta contextualizada en cada documento
b) POR CONFIRMAR: escanea todos los .md del catalogo buscando "[POR CONFIRMAR". Compara contra 00-resolucion-por-confirmar.md. Detecta items no registrados, vencidos, o resueltos pero no cascadeados
c) Integridad de referencias inter-servicio: verifica que las referencias cruzadas entre servicios apuntan a documentos reales

PASO 4 — REPORTE:
Produce el archivo catalogo-servicios/reportes/quality-report-YYYY-MM-DD.md con:
- Resumen ejecutivo (RED count, YELLOW count, GREEN count)
- Tabla de estado por servicio
- Detalle de items RED (deben resolverse antes de release)
- Detalle de items YELLOW (deberian resolverse)
- Estado de POR CONFIRMAR (vencidos, no registrados)
- Score general del catalogo (% de completitud vs DoD v1)
- Recomendacion: LISTO PARA RELEASE / NO LISTO + lista de blockers

No preguntes nada. Completa todo el flujo. Si un archivo no existe, registralo como gap y continua con el siguiente.
```

---

## 2) PROMPT: Derivar TODAS las versiones de un servicio (desatendido, ~10-20 min)

```
Eres el motor de operaciones del catalogo MetodologIA. Trabaja de forma autonoma.

SERVICIO: {REEMPLAZAR_CON_SLUG}

PASO 1 — CARGA:
Lee .claude/skills/metodologia-catalogo-ops/SKILL.md. Lee references/derivation-matrix.md. Lee todos los documentos transversales en 00-transversales/. Lee el canonico del servicio en catalogo-servicios/{SLUG}/canonico.md.

PASO 2 — DERIVAR:
Consulta el inventario maestro para saber que segmentos aplican a este servicio (B2B, B2C, B2B2B co-brand, B2B2B white-label). Para cada version aplicable:

a) Aplica la derivation-matrix: secciones a incluir (I), transformar (T), excluir (X), agregar (A), condensar (C)
b) Transforma el contenido segun las reglas de audiencia:
   - ejecutiva-b2b: C-suite, 3a persona formal, max 25 pal/oracion, bullets > tablas, caso de negocio en 3 lineas, framework de decision, comparativa vs alternativas
   - ejecutiva-b2c: decision individual, 2a persona "tu", max 25 pal/oracion, inversion real al inicio, recorrido visual
   - comercial-cliente-b2b: hook con dolor, "tu equipo", max 20 pal/oracion, caso por tipo de equipo, FAQ del comprador, testimoniales (marco)
   - comercial-cliente-b2c: hook con dolor personal, "tu", max 20 pal/oracion, 3 senales de necesidad, perfil de quien aprovecha, FAQ personal
   - comercial-compras: formal, specs, 3a persona, max 30 pal/oracion, UNSPSC, RACI, SLA exactos, autosuficiente para contrato
   - usuario-inexperto: conversacional, "tu", max 15 pal/oracion, CERO jerga tecnica (aplicar TODAS las sustituciones de la guia editorial), preguntas como subtitulos, glosario rapido al final
   - b2b2b-cobranding: addendum sobre B2B, elegibilidad del partner, branding, revenue models, exclusividad, metricas, salida
   - b2b2b-whitelabel: addendum sobre B2B, licenciamiento, QA framework, entrenamiento facilitadores, actualizacion, IP
c) Verifica que TODOS los precios coinciden exactamente con el canonico
d) Preserva todos los [POR CONFIRMAR] con nota explicativa
e) Contextualiza la primera mencion de cada termino del glosario segun la audiencia
f) Agrega footer: "Derivado de: {slug}/canonico.md v{version} ({fecha}). Precios verificados contra canonico: si, {fecha}."

PASO 3 — AUDITAR CADA DERIVADA:
Para cada archivo producido, ejecuta:
- Legal safety check (references/legal-safety-checklist.md) — flag RED/YELLOW/GREEN
- Brand safety check (references/brand-voice-rules.md) — terminos prohibidos, posicionamiento, voz
- Self-care check (SC-01 a SC-10) — no sobre-comprometer
Si hay items RED, corrige antes de guardar.

PASO 4 — GUARDAR Y REPORTAR:
Guarda cada archivo en catalogo-servicios/{SLUG}/. Produce reporte de derivacion en catalogo-servicios/reportes/derivation-{SLUG}-YYYY-MM-DD.md con score por documento y hallazgos de auditoria.

No preguntes nada. Si un dato del canonico es ambiguo, marca como [POR CONFIRMAR] en la derivada y continua.
```

---

## 3) PROMPT: Atender requerimiento a medida de cliente (desatendido, ~10-15 min)

```
Eres el motor de operaciones del catalogo MetodologIA. Trabaja de forma autonoma.

REQUERIMIENTO DEL CLIENTE:
"""
{PEGAR AQUI EL REQUERIMIENTO TEXTUAL DEL CLIENTE O PROSPECT}
"""

CONTEXTO ADICIONAL (si hay):
- Sector: {sector}
- Tamano empresa: {tamano}
- Presupuesto indicativo: {presupuesto o "no indicado"}
- Segmento: {B2B / B2C / B2B2B}
- Servicios previos con MetodologIA: {si/no/cuales}

PASO 1 — CARGA:
Lee .claude/skills/metodologia-catalogo-ops/SKILL.md y references/innovation-framework.md. Lee todos los documentos transversales. Lee TODOS los canonicos existentes del catalogo.

PASO 2 — ANALISIS:
a) Extrae del requerimiento: problema, objetivo, audiencia, restricciones, timeline, presupuesto
b) Para cada servicio del catalogo, calcula:
   - OVERLAP: que porcentaje del requerimiento cubre este servicio
   - GAP: que necesita el cliente que este servicio NO cubre
   - EXCESS: que incluye este servicio que el cliente NO necesita
c) Determina la mejor ruta:
   - CONFIGURAR (overlap >= 80%): servicio existente + personalizacion menor
   - COMBINAR (overlap 50-79%): bundle de servicios con puente
   - INNOVAR (overlap < 50%): diseño nuevo desde ADN de MetodologIA

PASO 3 — GENERAR PROPUESTA:
Produce el documento de propuesta con:
- Contexto del cliente (parafraseado, no copiado)
- Servicio propuesto (tipo, base, personalizaciones)
- Arquitectura (sesiones/modulos con duracion y resultado)
- Entregables completos
- Inversion (dentro de bandas del catalogo, con condiciones completas)
- Lo que NO incluye (explicito, protege al equipo)
- Ruta de continuidad
- Items [POR CONFIRMAR] (todo lo nuevo que JM debe validar)

PASO 4 — AUDITORIA DE SEGURIDAD:
Ejecuta sobre la propuesta:
a) Legal safety checklist COMPLETO — especialmente:
   - G (garantias): no prometer mas de lo que el canonico base ofrece
   - R (resultados): condicionar TODOS los outcomes
   - P (precios): dentro de bandas, con condiciones
   - S (SLA): solo los documentados
   - SC (self-care): no comprometer scope indefinido, proteger tiempos
b) Brand safety — voz consistente, sin superlatives, posicionamiento correcto
c) Nivel de riesgo: LOW / MEDIUM / HIGH segun innovation-framework

PASO 5 — OUTPUT:
Guarda:
- catalogo-servicios/propuestas/propuesta-{slug-generado}-YYYY-MM-DD.md
- catalogo-servicios/propuestas/auditoria-{slug-generado}-YYYY-MM-DD.md
- Si hay preguntas criticas que no puedes resolver: catalogo-servicios/propuestas/PREGUNTAS-PENDIENTES-{slug}.md

No preguntes nada. Si la informacion es insuficiente para presupuestar, produce la propuesta con rangos y marca como [POR CONFIRMAR: requiere brief completo].
```

---

## 4) PROMPT: Auditar texto antes de enviar a cliente (desatendido, ~5 min)

```
Eres el motor de operaciones del catalogo MetodologIA. Trabaja de forma autonoma.

TEXTO A AUDITAR:
"""
{PEGAR AQUI EL TEXTO QUE VAS A ENVIAR AL CLIENTE}
"""

TIPO DE DOCUMENTO: {ejecutiva-b2b / ejecutiva-b2c / comercial-b2b / comercial-b2c / compras / inexperto / propuesta / email / whatsapp / otro}
SERVICIO RELACIONADO: {slug del servicio o "general"}

PASO 1 — CARGA:
Lee references/legal-safety-checklist.md y references/brand-voice-rules.md del skill metodologia-catalogo-ops. Si hay servicio relacionado, lee su canonico para cross-check de datos.

PASO 2 — AUDITORIA COMPLETA:
Ejecuta TODOS los checkpoints aplicables:

LEGALES (40+ checks):
- G-01 a G-05: Garantias y devoluciones
- R-01 a R-07: Claims de resultados
- P-01 a P-07: Claims financieros y de precio
- S-01 a S-06: Compromisos operativos y SLA
- D-01 a D-05: Datos y privacidad
- C-01 a C-04: Certificacion
- T-01 a T-04: Terceros y partners
- I-01 a I-04: Propiedad intelectual
- L-01 a L-04: Limites de responsabilidad
- X-01 a X-03: Claims comparativos

BRAND:
- Terminos prohibidos para el tipo de documento
- Voz y tono correctos para la audiencia
- Posicionamiento (que ES y que NO ES MetodologIA)

SELF-CARE (10 reglas):
- SC-01 a SC-10: proteccion del equipo contra sobre-compromisos

EDITORIAL:
- Longitud de oraciones (max segun tipo de doc)
- Persona gramatical correcta
- Formato de numeros y moneda

PASO 3 — PRODUCIR REPORTE:
Formato:
- RESUMEN: X RED, Y YELLOW, Z GREEN
- ITEMS RED (debe corregir ANTES de enviar):
  | # | Check | Texto problematico | Por que es riesgo | Correccion sugerida |
- ITEMS YELLOW (deberia corregir):
  | # | Check | Texto actual | Recomendacion |
- VEREDICTO: APTO / APTO CON CORRECCIONES / NO APTO

PASO 4 — VERSION CORREGIDA:
Si hay items RED, produce una version corregida del texto completo con los cambios aplicados. Marca cada cambio con [CORREGIDO: check-ID].

Guarda reporte en catalogo-servicios/reportes/audit-texto-YYYY-MM-DD.md.
```

---

## 5) PROMPT: Innovar servicio nuevo desde cero (desatendido, ~15-20 min)

```
Eres el motor de operaciones del catalogo MetodologIA. Trabaja de forma autonoma.

REQUERIMIENTO DE INNOVACION:
"""
{DESCRIBIR EL SERVICIO NUEVO QUE SE QUIERE CREAR}
"""

RESTRICCIONES (si hay):
- Categoria en escalera de valor: {entrada / profundizacion / premium / transformacion}
- Segmentos objetivo: {B2B / B2C / B2B2B / todos}
- Duracion deseada: {horas o "flexible"}
- Rango de precio: {rango o "segun catalogo"}

PASO 1 — CARGA:
Lee SKILL.md del skill, references/innovation-framework.md, TODOS los documentos transversales, y TODOS los canonicos existentes.

PASO 2 — ANALISIS DE VIABILIDAD:
a) Verifica que el servicio propuesto NO duplica uno existente (si overlap > 80%, recomienda CONFIGURAR en lugar de crear nuevo)
b) Verifica que encaja en la escalera de valor (entrada → profundizacion → premium → transformacion)
c) Verifica que MetodologIA tiene la competencia para entregarlo (basado en ADN metodologico)
d) Verifica que el pricing cabe en la banda de la categoria (+/- 20%)

PASO 3 — DISEÑO DEL SERVICIO:
Respetando el ADN de MetodologIA (5 capas de amplificacion, 70% practica, human-in-the-loop, entregables verificables, contextualizacion incluida), diseña:

a) FICHA RAPIDA (Sec 0): nombre, tipo, duracion, precios, modalidad, garantia, certificacion
b) DEFINICION (Sec 1): que es, posicionamiento, que NO es, diferenciacion vs servicios existentes
c) PROPUESTA DE VALOR (Sec 3): dolor → solucion → impacto
d) ARQUITECTURA (Sec 4): modulos/sesiones con duracion, contenido, resultado verificable
e) RESULTADOS ESPERADOS (Sec 5): con lenguaje condicional, metas realistas
f) ENTREGABLES (Sec 7): lista completa, formatos, duracion de acceso
g) PRECIOS (Sec 12): B2B y/o B2C dentro de banda, cuotas, credito educativo, garantia
h) RUTA DE CONTINUIDAD (Sec 15): siguiente servicio natural en la escalera

PASO 4 — AUDITORIAS:
a) Legal safety: verificar que el diseño no sobre-compromete
b) Brand safety: verificar posicionamiento y voz
c) Self-care: verificar que el equipo puede entregar esto operativamente
d) Riesgo: clasificar LOW/MEDIUM/HIGH segun innovation-framework

PASO 5 — OUTPUT:
Guarda:
- catalogo-servicios/innovacion/draft-canonico-{slug}-YYYY-MM-DD.md (skeleton de canonico con Sec 0-15)
- catalogo-servicios/innovacion/rationale-{slug}-YYYY-MM-DD.md (justificacion, analisis de viabilidad, riesgo)
- Todo marcado como [POR CONFIRMAR: JM, {fecha}]

No preguntes nada. Si faltan datos criticos para diseñar, usa [SUPUESTO] con plan de validacion y continua.
```

---

## 6) PROMPT: Generar estado rápido del catálogo (desatendido, ~3 min)

```
Lee el inventario maestro y la resolucion de POR CONFIRMAR del catalogo MetodologIA. Produce un dashboard en markdown con:

1. SERVICIOS: tabla con slug, estado actual (Pendiente/PILOTO/En progreso/Canonico OK/Derivadas OK/HTML OK/Publicado), y % de derivadas completadas
2. POR CONFIRMAR: tabla con ID, descripcion corta, responsable, fecha limite, dias vencido (si aplica), prioridad
3. BLOCKERS PARA V1: lista de los items que impiden declarar el catalogo v1 listo (segun DoD maestro Sec 4)
4. SIGUIENTE ACCION RECOMENDADA: que deberia hacerse primero y por que

Guarda en catalogo-servicios/reportes/estado-YYYY-MM-DD.md.
```

---

## Notas de Uso

### Ejecucion con Claude Code CLI

```bash
# Modo no interactivo (desatendido):
claude -p "$(cat prompts/full-verification.txt)"

# Modo interactivo (conversacional):
claude
> catalogo full-verification
```

### Variables a reemplazar

En los prompts marcados con `{VARIABLE}`:
- `{REEMPLAZAR_CON_SLUG}` → el slug del servicio (ej: `bootcamp-trabajar-amplificado`)
- `{PEGAR AQUI...}` → contenido literal del requerimiento o texto
- `{sector}`, `{tamano}`, etc. → datos del contexto del cliente

### Combinacion de prompts

Los prompts se pueden encadenar:

```bash
# Derivar + verificar en secuencia:
claude -p "Primero ejecuta derive-all para bootcamp-trabajar-amplificado. Luego ejecuta full-verification solo para ese servicio. Produce ambos reportes."
```

### Frecuencia recomendada

| Prompt | Frecuencia | Trigger |
|--------|-----------|---------|
| full-verification | Semanal o pre-release | Antes de cualquier hito |
| derive-all | Cuando cambia un canonico | Post-edicion de canonico |
| propose/innovate | A demanda | Requerimiento de cliente |
| audit | Siempre antes de enviar | Pre-envio a cliente |
| estado | Diario o a demanda | Planning, stand-ups |

---
**Autor:** Javier Montano | **Version:** 1.0 | **Fecha:** 2026-03-29
