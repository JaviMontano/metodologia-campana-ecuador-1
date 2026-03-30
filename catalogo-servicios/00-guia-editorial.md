# Guia de Estilo Editorial del Catalogo de Servicios

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Propietario:** Javier Montano
**Aplica a:** todos los documentos del catalogo de servicios (canonicos, derivadas, guias, anexos operativos).

---

## Principio rector

Cada oracion del catalogo existe para que alguien tome una decision o ejecute una accion. Si una oracion no ayuda a decidir ni a actuar, se elimina. La claridad no es un atributo estetico: es un requisito operativo. Un documento confuso genera preguntas; un documento claro genera ejecucion.

---

## 1) Reglas de estilo por tipo de documento

### Canonico exhaustivo
- **Audiencia:** operaciones, legal, facilitadores, embajadores.
- **Tono:** preciso, contractual, sin marketing. Tercera persona ("el servicio incluye", "el participante puede").
- **Longitud de oracion:** maximo 30 palabras. Si una oracion tiene mas de 30 palabras, dividirla.
- **Estructura preferida:** tablas > listas > prosa. Usar prosa solo cuando la tabla no captura la relacion entre ideas.
- **Nivel tecnico:** alto. Puede usar terminos del glosario sin simplificar, pero debe definirlos en primera mencion.
- **Datos:** siempre con unidad, condicion y fuente. "COP 12.000.000 + IVA por ciclo (hasta 20 participantes)" — nunca "12M".
- **Verbos:** infinitivo para instrucciones ("verificar", "entregar"), indicativo para afirmaciones ("el servicio incluye").

### Ejecutiva
- **Audiencia:** C-suite (B2B), decision maker individual (B2C).
- **Tono:** estrategico, orientado a resultados. B2B: tercera persona formal ("su equipo", "la organizacion"). B2C: segunda persona directa ("tu", "vas a").
- **Longitud de oracion:** maximo 25 palabras.
- **Estructura preferida:** bullets > tablas > prosa. Cada bullet responde "por que importa esto para el negocio/la persona".
- **Nivel tecnico:** medio. Evitar detalles operativos (SLA, checklist, repositorio). Incluir solo lo que afecta la decision de compra.
- **Regla de CTA:** siempre terminar con una accion clara ("contacte a su embajador", "agenda una conversacion").

### Comercial cliente final
- **Audiencia:** comprador corporativo (B2B), comprador individual (B2C).
- **Tono:** aspiracional + concreto. B2B: "tu equipo". B2C: "tu". Emocional en el hook, concreto en la inversion.
- **Longitud de oracion:** maximo 20 palabras.
- **Estructura preferida:** narrativa con subtitulos claros. Tablas solo para precios y comparativas.
- **Nivel tecnico:** bajo. Sustituir terminos tecnicos por lenguaje de beneficio. "Meta-prompt" → "instrucciones personalizadas para la IA". "Playbook" → "guia paso a paso".
- **Regla de hook:** primera oracion identifica un dolor reconocible. No empieza con el nombre del servicio.

### Comercial area de compras
- **Audiencia:** procurement, adquisiciones, legal corporativo.
- **Tono:** formal, especificaciones tecnicas, compliance-friendly. Tercera persona. Sin marketing.
- **Longitud de oracion:** maximo 30 palabras (igual que canonico).
- **Estructura preferida:** tablas > listas numeradas > prosa. Cada dato con unidad y condicion.
- **Nivel tecnico:** alto. Incluir codigos UNSPSC, RACI, penalidades, SLA con tiempos exactos.
- **Regla de completitud:** cada seccion debe ser autosuficiente para incluir en un contrato sin referenciar otros documentos.

### Usuario inexperto
- **Audiencia:** persona sin background tecnico, primera vez con IA.
- **Tono:** conversacional, como explicar a un amigo. Segunda persona directa ("tu"). Preguntas retoricas permitidas.
- **Longitud de oracion:** maximo 15 palabras. Si es mas larga, partir.
- **Estructura preferida:** parrafos cortos (2-3 oraciones max), listas simples, subtitulos como preguntas.
- **Nivel tecnico:** cero. Sustituir TODO termino tecnico por lenguaje cotidiano.
- **Terminos prohibidos:** ROI, OKR, KPI, SLA, framework, metodologia, agil, meta-prompt, compliance, human-in-the-loop, SSOT, DoD, RACI, stakeholder, capstone, co-creacion.
- **Sustituciones obligatorias:**

| Termino tecnico | Sustitucion para inexperto |
|----------------|--------------------------|
| Meta-prompt | Instrucciones personalizadas para la IA |
| Playbook | Guia paso a paso |
| Asistente IA | Herramienta de IA configurada para ti |
| Framework | Metodo / sistema |
| Bootcamp | Curso intensivo practico |
| Facilitador | Instructor / guia |
| Embajador | Tu contacto personal |
| Brief | Informacion que necesitamos de ti |
| Artefacto | Documento / resultado que produces |
| Campus / LMS | Plataforma de materiales |
| NPS | Encuesta de satisfaccion |
| Iteracion | Revision / mejora |

---

## 2) Reglas de contextualizacion de conceptos

### Primera mencion
La primera vez que un concepto, sigla, tecnica, metodologia, practica o autor aparece en un documento, debe contextualizarse. Hay dos formas:

**Forma 1 — Definicion inline (preferida para audiencias tecnicas):**
> "Los OKR (Objectives and Key Results — marco de definicion de objetivos donde cada objetivo tiene 2-5 resultados clave medibles, popularizado por John Doerr en 'Measure What Matters') se definen en la sesion 5."

**Forma 2 — Referencia al glosario (preferida para mantener fluidez):**
> "Los OKR (ver Glosario, entrada: OKR) se definen en la sesion 5."

**Forma 3 — Para audiencia inexperta (eliminar el termino):**
> "En la sesion 5, defines tus objetivos y las 2-3 senales que te dicen si vas por buen camino."

### Regla de hilado
La definicion no se pega en frio. Se hila con el proposito de la seccion y el texto donde aparece.

**Mal ejemplo:**
> "En esta seccion usamos OKR. OKR significa Objectives and Key Results. Los OKR se usan mucho en empresas de tecnologia."

**Buen ejemplo:**
> "Para que la estrategia no quede en declaraciones, la convertimos en OKR (Objectives and Key Results): cada objetivo tiene 2-5 resultados clave medibles que permiten saber si avanzas o no, sin depender de opiniones."

La diferencia: el buen ejemplo conecta la definicion con el POR QUE de esa seccion (convertir declaraciones en accion medible).

### Autores y fuentes
Cuando se menciona un autor, tecnica o metodologia por primera vez:
- Nombre completo + obra/contribucion principal + por que es relevante aqui.
- Ejemplo: "...usando el modelo Business Model Canvas (Alexander Osterwalder, 'Business Model Generation', 2010), que estructura los 9 bloques de un modelo de negocio en una sola pagina para facilitar la co-creacion."

No mencionar autores por namedropping. Solo cuando la referencia agrega credibilidad o contexto necesario.

---

## 3) Reglas de trazabilidad

### Cuando usar cada etiqueta

| Etiqueta | Cuando usarla | Ejemplo |
|----------|--------------|---------|
| `[EVIDENCIA: fuente]` | Dato verificado con localizador especifico | `[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion "Pricing"]` |
| `[SUPUESTO: riesgo \| plan de validacion]` | Afirmacion no verificada pero razonable | `[SUPUESTO: B2C COP 800.000 por analogia con otros bootcamps \| validar con politica comercial Q2 2026]` |
| `[DECISION: fecha, quien, alternativa descartada]` | Trade-off resuelto que podria cuestionarse | `[DECISION: 2026-03-29, JM, descartada version de 6h por no mejorar conversion]` |
| `[POR CONFIRMAR: responsable, fecha limite]` | Informacion faltante que bloquea o degrada | `[POR CONFIRMAR: JM, 2026-04-15 — credito hacia EstrategIA aun no definido]` |

### Donde NO poner etiquetas
- En datos triviales que no afectan decisiones ("el Workshop dura 3 horas" no necesita [EVIDENCIA]).
- En definiciones del glosario (son convenciones, no claims).
- En instrucciones operativas ("enviar checklist 48h antes" es una regla, no un claim).

### Regla de densidad
Un canonico bien trazado tiene ~15-25 etiquetas. Menos de 10 = probablemente hay claims sin rastrear. Mas de 40 = probablemente se estan etiquetando trivialidades.

---

## 4) Reglas de formato y estructura

### Tablas vs listas vs prosa
- **Tabla:** cuando hay 2+ dimensiones (filas x columnas). Siempre que se compare algo.
- **Lista:** cuando hay una secuencia o coleccion de items de 1 dimension.
- **Prosa:** cuando se necesita explicar una relacion causal, un trade-off, o un razonamiento.
- **Nunca:** prosa para datos que caben en tabla. Nunca tabla para 2 items.

### Numeros y moneda
- **Moneda:** siempre "COP" seguido de puntos de miles. "COP 12.000.000" — nunca "12M", "$12M", "12 millones".
- **Porcentajes:** siempre con %. "70%" — nunca "setenta por ciento" (excepto en inexperto donde puede ir en texto).
- **Duraciones:** "3 horas", "18h", "16 semanas" — consistente dentro del mismo documento.
- **Fechas:** "YYYY-MM-DD" en metadata. "2026-03-29" — nunca "29 de marzo de 2026" (excepto en prosa de comercial-cliente).

### Referencias cruzadas entre documentos
- **Dentro del mismo servicio:** "(ver Seccion X)" o "(ver canonico, Sec X.Y)".
- **Entre servicios:** "(ver catalogo-servicios/{slug}/canonico.md, Sec X)".
- **A documentos transversales:** "(ver Glosario, entrada: {termino})" o "(ver Anexo {letra}: {nombre})".
- **Nunca:** referencias genericas como "ver documentacion" o "consultar materiales".

### Encabezados
- **Canonico:** numerados (## 0) Ficha rapida, ## 1) Definicion, etc.)
- **Derivadas:** no numerados (## Ficha rapida, ## Definicion)
- **Maximo 3 niveles** de profundidad (##, ###, ####). Si necesitas mas, reestructura.

---

## 5) Reglas editoriales generales

1. **Voz activa sobre pasiva.** "El facilitador verifica las evidencias" — no "Las evidencias son verificadas por el facilitador."
2. **Concreto sobre abstracto.** "Recuperar ~4 horas/semana" — no "Mejorar la productividad."
3. **Especifico sobre generico.** "COP 12.000.000 por ciclo (hasta 20 participantes)" — no "precio competitivo."
4. **Sin adjetivos de marketing** en canonicos y compras: "innovador", "revolucionario", "unico", "lider", "disruptivo". Permitidos en comercial-cliente con moderacion.
5. **Sin emojis** en ningun documento del catalogo.
6. **Sin signos de exclamacion** en canonicos, ejecutivas y compras. Permitido 1 por documento en comercial-cliente e inexperto.
7. **Español latinoamericano (Colombia).** "Tu" (no "vos"). "Computador" (no "ordenador"). "Celular" (no "movil" — excepto en contexto formal).
8. **Genero inclusivo pragmatico.** Usar "participante", "persona", "equipo" cuando sea natural. No forzar desdoblamientos ("los/las participantes") que rompan fluidez. No usar "x" ni "@" (participantxs, participantes).
