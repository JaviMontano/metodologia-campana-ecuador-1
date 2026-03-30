# Consultive Workshop — EstrategIA

**Documento canonico de servicio** — v2.0 (2026-03-29)

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre una derivada (ejecutiva, comercial, compras) y este canonico, **este canonico manda**.
> **Ruta oficial:** Ruta de **(R)Evolucion Empresarial** (concepto: **Soberania Digital**) y Ruta de **(R)Evolucion Personal** (concepto: **Empoderamiento**)
> **Marca:** MetodologIA
> **Clasificacion:** Publico (precios incluidos)

### Convenciones de trazabilidad
Toda afirmacion critica lleva una de estas etiquetas al final de la linea:
- `[EVIDENCIA: fuente]` — dato verificado con localizador.
- `[SUPUESTO: riesgo | plan de validacion]` — propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha]` — informacion faltante que bloquea publicacion.
- `[DECISION: fecha, quien, alternativa descartada]` — trade-off resuelto.

---

## 0) Ficha rapida (decision en 60s)

| Atributo | Especificacion |
|---|---|
| **Nombre canonico** | **EstrategIA (Consultive Workshop)** |
| **Slug (ID unico)** | `consultive-workshop-estrategia` |
| **SKUs** | **EstrategIA Empresarial** (B2B) / **EstrategIA Personal** (B2C). Variantes de segmento y contenido: el Empresarial aterriza estrategia organizacional; el Personal aterriza estrategia de carrera/negocio individual. |
| **Tipo de servicio** | Consultive Workshop (co-creacion estrategica con produccion de artefactos) |
| **Categoria comercial** | Premium — servicio de alto valor con entregables ejecutables |
| **Ruta oficial** | (R)Evolucion Empresarial + (R)Evolucion Personal (ambas) |
| **Duracion total** | **18 horas total** por SKU (9 sesiones x 2h). Puede ajustarse a 90-120 min/sesion sin perder outputs. `[DECISION: 2025-12, JM, descartada: sesiones de 3h — fatiga cognitiva en co-creacion estrategica degradaba calidad de decisiones]` |
| **Modalidad** | Virtual sincronico (default). **Intensiva** (2-3 dias) o **Diluida** (2-3 semanas) segun agenda y fatiga cognitiva del equipo. Presencial a solicitud (logistica y viaticos aparte). |
| **Mecanismo didactico/consultivo** | Co-creacion dirigida -> Produccion de artefacto -> Gate de decision -> Proxima accion |
| **Proporcion operativa** | 20% encuadre/contexto / 60% co-creacion guiada / 20% verificacion y decision |
| **Motor IA** | Agnostico. Default: ChatGPT. Alternativas: Gemini / Claude / Copilot / motor permitido por TI. |
| **Entregables core** | Pack de EstrategIA (9 artefactos por SKU) + Prompt Pack + Playbook de continuidad + memorias (si aplica) |
| **Certificacion** | **Asistencia** (por sesion). Competencia no aplica — servicio consultivo, no formativo. `[DECISION: 2026-01, JM, descartada: certificado de competencia — EstrategIA mide decisiones, no habilidades evaluables con rubrica]` |
| **Soporte / SLA** | Email D+1 habil / WhatsApp <=2h (9-16h COT) / Embajador asignado |
| **Repositorio** | Google Drive, **30 dias** post-cierre. Backup es responsabilidad del cliente. |
| **Campus / LMS** | **No aplica** — exclusivo de Bootcamps y Programas. `[DECISION: 2025-12, JM, descartada: campus temporal — servicio consultivo no requiere plataforma de aprendizaje; los artefactos viven en el Drive del cliente]` |
| **Participantes** | Empresarial: **3-10 decision makers** (maximo 10). Personal: **1-3 personas**. |
| **Precio canonico B2C** | **COP 3.400.000** (EstrategIA Personal, 1-3 personas) |
| **Precio canonico B2B** | **COP 18.000.000** (EstrategIA Empresarial, hasta 10 decision makers; tarifa plana por ciclo) |
| **Costo por participante efectivo** | B2B: COP 1.800.000/persona en grupo de 10. B2C: COP 3.400.000 (1 persona) o COP 1.133.333 (3 personas). |
| **Credito desde** | Workshop De Ocupado a Productivo: no aplica credito directo (son servicios de naturaleza distinta). Bootcamp Trabajar Amplificado: credito negociable via embajador. `[POR CONFIRMAR: JM, 2026-04-15 — definir politica de credito desde Bootcamp hacia EstrategIA]` |
| **Credito hacia** | 100% acreditable a **Programa Digital Champions** (Empresarial) o **Programa Empoderamiento** (Personal) por **6 meses**, acumulable, intransferible. `[SUPUESTO: credito 100% replica modelo Workshop->Bootcamp | validar con conversion real Q3 2026]` |
| **Impuestos** | Online: incluidos (pasarela). Corporativo: discriminados (factura). Segun regimen de facturacion y legislacion vigente. |
| **Vigencia de precios** | Hasta nueva version del canonico. |

**Trade-off de diseno del servicio:** priorizamos decisiones y estructura ejecutable sobre exhaustividad enciclopedica. El servicio produce artefactos que el cliente puede ejecutar inmediatamente, no un diagnostico pasivo. Cada sesion cierra con un gate de decision explicito: sin decision, no hay progreso. `[DECISION: 2025-11, JM, descartada: modelo de diagnostico extenso (6 sesiones de analisis + 3 de recomendaciones) — generaba dependencia y no transferia capacidad de decision al cliente]`

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica — usar textual en web/contrato)
> En 9 sesiones, convertimos un objetivo estrategico ambiguo en un sistema ejecutable (artefactos + cadencia + metricas), usando IA para acelerar analisis y documentacion sin reemplazar el juicio humano.

### 1.2 Que es (y por que funciona)
- **Instalacion de decisiones**, no transferencia teorica: cada sesion produce un artefacto verificable con duerio, metrica y fecha de revision. `[EVIDENCIA: diseno de servicio v1.1, validado en 2 ejecuciones piloto 2025-2026]`
- **Co-creacion dirigida con gate de decision:** el consultor facilita estructura y analisis; el cliente toma las decisiones. Sin decision explicita no hay avance, lo que evita "reuniones bonitas" sin compromiso.
- **IA como acelerador, no como decisor:** la IA acelera analisis, documentacion y generacion de escenarios. El humano valida, prioriza y decide. Esto garantiza ownership real de la estrategia.
- **Dual-track (Empresarial + Personal):** misma arquitectura de 9 sesiones, contenidos especializados por contexto. El Empresarial aterriza estrategia organizacional; el Personal aterriza carrera, marca y negocio individual.

**Diferenciador clave:** la mayoria de servicios estrategicos entregan diagnosticos o recomendaciones. EstrategIA entrega un sistema de ejecucion completo (artefactos + cadencia + metricas + prompts para iterar) que el cliente puede operar sin dependencia del consultor.

### 1.3 Que NO es (expectativas frecuentes que deben cortarse)
| Expectativa erronea | Realidad | Como se descubre temprano |
|---|---|---|
| "Me van a hacer la estrategia" | Co-creamos: el consultor facilita, el cliente decide y produce con apoyo. Si no participa activamente, los artefactos quedan vacios. | Pregunta de cualificacion #1: "quien decide en tu organizacion?" |
| "Es consultoria pasiva (PowerPoint)" | No. Cada sesion produce artefactos con owners, metricas y fechas. No hay deck de recomendaciones sin sistema de ejecucion. | Brief: validar expectativa de entregables |
| "Resultado garantizado (ingresos/crecimiento)" | Se garantiza metodo + artefactos + claridad. Los resultados dependen de ejecucion consistente del cliente. | Limite etico explicado en Kickoff |
| "Incluye implementacion operativa" | No. Se entrega estructura ejecutable, no ejecucion operativa. Para implementacion: contratar done-for-you (fuera de portafolio). | Pregunta: "necesitas diseno o ejecucion?" |
| "Es asesoria legal/financiera/contable" | No. Se trabajan hipotesis y modelos, no se emiten recomendaciones reguladas. Personal: habitos y planificacion, no consejos de inversion. | Brief: validar alcance esperado |
| "Sustituye gobierno corporativo" | No. Los artefactos complementan; no reemplazan comites, juntas ni politicas internas. | Pregunta: "como se toman decisiones en tu organizacion?" |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Workshop De Ocupado a Productivo, 3h] --> [Bootcamp Trabajar Amplificado, 20h] -->
  [ESTRATEGIA (este servicio), 18h] --100% credito, 6 meses-->
  [Programa Digital Champions / Empoderamiento, 16 sem]
```

1. **Prerequisito sugerido:** Bootcamp Trabajar Amplificado (recomendado, no obligatorio). Alternativa: Workshop como primer contacto si el dolor es claramente estrategico.
2. **Este servicio:** EstrategIA (18h, 9 sesiones por SKU).
3. **Siguiente paso natural:** Programa Digital Champions (Empresarial) o Programa Empoderamiento (Personal) con credito del 100%.
4. **Ruta completa:** Workshop -> Bootcamp -> EstrategIA -> Programa.

**Logica de ruta:** EstrategIA es el tercer escalon de la ruta. Llegan clientes que ya tienen base operativa (productividad, foco, IA como palanca) y necesitan elevar a nivel estrategico. Tambien pueden entrar directamente clientes con dolor estrategico evidente sin pasar por Workshop/Bootcamp. `[DECISION: 2025-12, JM, descartada: EstrategIA como punto de entrada obligatorio — excluia clientes con dolor estrategico urgente que no necesitan productividad operativa]`

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Como se verifica | Fuente |
|---|---|---|
| Hay una decision estrategica atascada: "sabemos que queremos, no como aterrizarlo" | "Cual es la decision que mas te esta costando tomar y por que?" | Conversacion inicial / brief |
| Multiples frentes y urgencias sin priorizacion ni cadencia | "Cuantas iniciativas activas tienes? Cuantas tienen owner y fecha?" | Brief |
| Existen ideas, OKRs o iniciativas pero sin sistema de ejecucion verificable | "Mostrame tu plan actual — tiene duerios, metricas y fechas de revision?" | Documentos previos del cliente |
| Quiere usar IA como acelerador estrategico sin arriesgar datos ni perder control | "Has usado IA para analisis o documentacion? Que te gustaria delegar?" | Brief |
| **Empresarial:** decision makers disponibles y comprometidos (3-10 personas) | "Quienes participan y tienen poder de decision sobre el alcance?" | Lista de asistentes confirmados |
| **Personal:** duerio del plan presente, dispuesto a explicitar supuestos y trade-offs | "Estas dispuesto a decir 'no' a opciones que no priorizas?" | Conversacion |

### 2.2 Anti-fit (no-fit — rechazar con tacto)
| Condicion de rechazo | Por que no funciona | Alternativa sugerida |
|---|---|---|
| Busca "resultado garantizado" (crecimiento/ingresos) sin asumir decisiones ni trade-offs | EstrategIA instala capacidad de decision y ejecucion, no garantiza resultados financieros. Sin compromiso real, los artefactos quedan en papel. | Alinear limites eticos. Si persiste: no vender. Recurso: blog + caso de estudio gratuito. |
| No puede asegurar asistencia de quienes deciden (Empresarial) o del duerio del plan (Personal) | Sin decision makers, las sesiones producen artefactos sin ownership. Se pierde el valor central. | Condicionar: "confirma asistencia de quienes deciden o reprogramamos". |
| Requiere implementacion tecnica profunda (APIs, automatizaciones, integraciones) como necesidad primaria | Cambia la naturaleza del servicio. EstrategIA disefia; no implementa. | Redirigir a Sofka Technologies u otro proveedor tech para implementacion, luego EstrategIA para la capa estrategica. |
| Espera diagnostico organizacional extenso sin co-creacion | EstrategIA es co-creacion, no auditoria. El consultor no "analiza y reporta"; facilita decisiones con el equipo. | Redirigir a discovery SDF (Sofka) o consultoria diagnostica tradicional. |
| Sin habilidades digitales minimas (no puede usar motor IA, no puede co-crear en documentos) | El 60% del tiempo es co-creacion con herramientas digitales. Sin capacidad minima, el participante no produce artefactos. | Prerequisito: Workshop De Ocupado a Productivo para nivelar base operativa. |

### 2.3 Preguntas de cualificacion (script de venta)
Orden deliberado: la pregunta 1 detecta urgencia real, la 2 detecta capacidad de decision, la 3 detecta viabilidad.

1. **Detecta dolor real:** "Si esto sale perfecto, que debe ser distinto en **90 dias**?" — Si la respuesta es vaga o generica ("mejorar"), la probabilidad de cierre cae. Ofrecer recurso gratuito (blog/caso de estudio) en lugar de forzar venta. `[SUPUESTO: conversion cae >60% con respuesta vaga | validar con datos CRM Q2 2026]`
2. **Detecta capacidad de decision:** "Que decision estrategica te esta costando mas tomar hoy y por que?" — Si no puede nombrar una decision concreta, el servicio es prematuro. Sugerir Workshop o Bootcamp primero.
3. **Detecta viabilidad de grupo (Empresarial):** "Quienes participan, tienen poder de decision y pueden comprometer 18 horas?" — Sin decision makers comprometidos, no vender Empresarial.
4. **Detecta viabilidad (Personal):** "Estas dispuesto a dedicar 18 horas y tomar decisiones explicitas sobre tu carrera/negocio?" — Sin compromiso de tiempo y decision, no vender Personal.

**Regla de corte:** si la pregunta 1 no tiene respuesta concreta, no forzar venta. Ofrecer recurso gratuito y dejar puerta abierta.

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lo que el cliente siente — lenguaje del cliente)
- "Tenemos muchas ideas pero no un plan ejecutable — todo queda en el aire."
- "Cada trimestre definimos prioridades y al mes ya cambiaron."
- "Sabemos que queremos crecer pero no sabemos por donde empezar ni como medir."
- "Intentamos OKRs pero nadie les da seguimiento."
- "Se que la IA puede ayudarme a analizar y documentar pero no se como usarla de forma segura."
- **(Personal):** "Quiero reinventarme pero tengo demasiadas opciones y ninguna estructura."
- **(Personal):** "Se que deberia tener un plan de carrera pero no se como hacerlo ni priorizarlo."

### 3.2 Causas raiz (lo que realmente pasa — analisis del consultor)
| Causa raiz | Efecto directo | Impacto en negocio/persona |
|---|---|---|
| Estrategia "declarativa" sin traduccion operativa | Ideas sin roadmap, owners ni metricas | Estancamiento: no se ejecuta lo que se planifica |
| Prioridades cambiantes sin criterios explicitos | Todo es urgente, nada avanza de forma sostenida | Desgaste del equipo, oportunidades perdidas, retrabajo |
| Falta de lenguaje comun para decir si/no | Decisiones evitadas o tomadas sin trade-offs explicitos | Desalineacion interna, conflictos de prioridad |
| IA usada de forma reactiva y desordenada | Herramienta subutilizada; analisis manual que podria acelerarse | Costo de oportunidad: horas en trabajo que IA podria hacer en minutos |
| **(Personal)** Ausencia de sistema personal de carrera | Decisiones reactivas: "lo que salga" en vez de plan | Estancamiento profesional, ingresos planos, burnout |

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto cuantificable estimado |
|---|---|---|
| 30 dias | Acumulacion de deuda estrategica: decisiones pospuestas generan mas opciones abiertas y mayor complejidad | Cada decision pospuesta genera ~3 dependencias nuevas que complican ejecucion futura `[SUPUESTO: basado en experiencia de facilitadores | validar con data post-sesion Q2 2026]` |
| 90 dias | Desalineacion operativa: el equipo ejecuta sin norte claro, genera retrabajo y conflictos de prioridad | Estimado: 20-30% del esfuerzo operativo desperdiciado en iniciativas no priorizadas `[SUPUESTO: ratio basado en benchmarks de estrategia operativa | validar con medicion post-servicio]` |
| 12 meses | Obsolescencia competitiva: sin estrategia ejecutable, la organizacion/persona reacciona en vez de anticipar | Brecha creciente vs competidores que si tienen sistema de ejecucion y adopcion de IA estrategica |

### 3.4 Limites eticos (no negociables — aplican a todas las marcas)
- **Human-in-the-loop:** la IA propone; el humano valida y decide. Sin excepciones.
- No se garantizan resultados financieros, de crecimiento ni de carrera; se garantiza **metodo + artefactos + claridad**.
- No se interviene en decisiones legales, financieras, medicas ni contractuales criticas.
- No se generan contenidos que suplanten identidad, violen copyright o manipulen audiencias.
- El consultor no emite juicios sobre la calidad de las decisiones del cliente; facilita metodo y estructura.
- **(Personal):** se trabajan habitos y planificacion, no se emiten recomendaciones de inversion ni asesoria financiera profesional.

### 3.5 Reglas de datos (no negociables)
| Categoria | Prohibido | Permitido | Ejemplo |
|---|---|---|---|
| Datos personales (PII) | Nombres reales de terceros, cedulas, telefono, email | Anonimizados: "Cliente A", "Proyecto X" | "Juan Perez" -> "Stakeholder 1" |
| Datos financieros | Cifras exactas de ingresos, costos, margenes sensibles | Ordenes de magnitud o rangos | "$500M revenue" -> "rango alto" |
| Secretos industriales | Formulas, algoritmos, planes no publicos | Abstraccion del problema sin detalle propietario | "Nuestro algoritmo de pricing" -> "un modelo de pricing" |
| Credenciales | Passwords, API keys, tokens | Nunca. Sin alternativa. | N/A |
| Datos de terceros | Informacion de competidores/clientes sin consentimiento | Datos publicos o anonimizados | Usar fuentes publicas |

**Escalamiento:** si un participante insiste en usar datos sensibles, el facilitador pausa la actividad y escala al embajador. No se negocia.

---

## 4) Alcance y fuera de alcance

### 4.1 Dentro del alcance (In-scope)
| # | Actividad/Entregable | Criterio de completitud | Quien lo produce |
|---|---|---|---|
| 1 | Co-disenio y documentacion del **Pack de EstrategIA** (9 artefactos segun SKU) | Todos los artefactos producidos, revisados y con owners asignados | Co-creacion (facilitador estructura, cliente decide/valida) |
| 2 | Priorizacion explicita: que se hace, que se pospone, que no se hara (trade-offs) | Lista de "si/no/despues" documentada con justificacion | Co-creacion |
| 3 | Cadencia de ejecucion: owners, metricas, fechas de revision | Cada artefacto tiene owner + metrica + fecha de revision | Co-creacion |
| 4 | Prompt Pack EstrategIA (prompts por modulo para replicar/iterar) | Pack entregado y probado en al menos 1 modulo en sesion | Facilitador (produce) + Participante (valida) |
| 5 | Playbook de continuidad (como mantener/actualizar la estrategia con IA) | Playbook entregado con cadencia, rituales y criterios de actualizacion | Facilitador |
| 6 | Memorias de sesion (grabacion + transcripcion si aplica) | Acceso verificado al repositorio | Facilitador/Embajador |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que se excluye | Donde se consigue |
|---|---|---|
| Ejecucion operativa total (implementar las iniciativas por el cliente) | El valor esta en instalar capacidad de decision y ejecucion, no en crear dependencia | Consultoria done-for-you (fuera de portafolio) |
| Decisiones legales/contractuales/tributarias | Requiere abogado/contador; riesgo regulatorio | Asesor legal/contable del cliente |
| Integraciones, desarrollo de software, automatizaciones via API | Fuera de expertise consultivo; cambia la naturaleza del servicio | Sofka Technologies u otro proveedor tech |
| Sustitucion de comites, juntas o politicas internas de gobierno | Los artefactos complementan; no reemplazan gobernanza existente | Consultoria de gobierno corporativo |
| Diagnostico organizacional extenso (entrevistas multiples, analisis cuantitativo profundo) | Requiere scope y timeline de discovery, no de consultive workshop | Discovery SDF (Sofka) |
| **(Personal)** Asesoria de inversion, planificacion tributaria, recomendaciones financieras reguladas | Requiere profesional certificado | Asesor financiero del cliente |

### 4.3 Zona gris (se evalua caso a caso)
| Solicitud frecuente | Decision default | Condicion para incluir |
|---|---|---|
| "Nos ayudan a implementar despues?" | Fuera de alcance | Si se contrata acompaamiento post-servicio (scope y precio separado) o si se escala a Programa |
| "Pueden facilitar con nuestro equipo de TI para la parte de IA?" | Fuera de alcance | Si la facilitacion conjunta requiere <=2h adicionales: se incluye en contextualizacion. Si requiere mas: scope adicional |
| "Queremos un reporte ejecutivo para la junta" | Incluido parcialmente | El Resumen Ejecutivo (sesion 9 Empresarial) cubre esto. Si el formato requiere adaptacion mayor: scope adicional |
| "Podemos hacer las 9 sesiones en 2 dias?" | Modalidad intensiva (incluida) | Se acepta con advertencia de fatiga cognitiva y revision de calidad post-sesion `[DECISION: 2025-12, JM, descartada: prohibir intensiva — clientes ejecutivos la prefieren; se mitiga con pausas]` |
| "Podemos hacer solo 5 sesiones en vez de 9?" | No recomendado | Se evalua si el alcance reducido produce artefactos suficientes. Si no: no se acepta. Se ofrece servicio custom. |

---

## 5) Arquitectura del servicio (9 sesiones por SKU)

### 5.1 Principio rector
**Cada sesion produce un artefacto verificable** y registra: decisiones tomadas, supuestos explicitos, trade-offs ("que NO haremos"), metrica de seguimiento y fecha de revision.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta exposicion, **nunca co-creacion ni documentacion**. El participante debe irse con artefactos y decisiones, no con apuntes.

`[DECISION: 2025-12, JM, descartada: estructura flexible donde el facilitador elige orden de sesiones — generaba inconsistencia entre ejecuciones y dificultaba comparabilidad de resultados]`

### 5.2 Diseno consultivo
- **Proporcion objetivo:** 20% encuadre/contexto / 60% co-creacion guiada / 20% verificacion y decision.
- **Gestion de niveles:** plantillas copiables + paso a paso (contexto basico); retos de adaptacion con restricciones (contexto avanzado).
- **Gate de decision:** no se avanza a la siguiente sesion sin verificar el artefacto de la sesion anterior. Si el artefacto esta incompleto, se reservan los primeros 15 min de la siguiente sesion para cerrar. `[DECISION: 2025-12, JM, descartada: avance libre sin gate — generaba deuda de artefactos al final que no se podia recuperar en sesion 9]`

### 5.3 Mapa de modulos — EstrategIA Empresarial (9 sesiones)

> Diseno estandar de 9 sesiones (18h). Para mantener 9 sin perder cobertura, se fusionan: (a) Kickoff + Team Canvas, (b) Presupuesto + Control. `[DECISION: 2026-01, JM, descartada: 12 sesiones — costo y calendario excesivos para clientes ejecutivos]`

| # | Sesion/Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|---|---|---|---|---|---|
| 1 | Kickoff + Team Canvas | 120 min | Alinear contexto, roles, reglas de co-creacion, acuerdos y responsabilidad | Team Canvas completo (roles, acuerdos, reglas de decision) + objetivo estrategico del ciclo | Documento firmado/validado por decision makers presentes; objetivo SMART escrito | Ninguna |
| 2 | Declaraciones Estrategicas | 120 min | Definir norte (tesis/posicionamiento) y principios de decision | Declaraciones estrategicas: tesis + principios + foco | Principios testeados: "ante esta situacion, que dice el principio?" con >=2 casos | Sesion 1 |
| 3 | Arbol de Objetivos | 120 min | Mapear objetivos, resultados clave e iniciativas con causalidad | Arbol de objetivos (causalidad) + priorizacion explicita (si/no/despues) | Cada objetivo tiene >=1 resultado clave medible y >=1 iniciativa con owner | Sesion 2 |
| 4 | Modelo Operativo + Roadmap | 120 min | Definir modelo operativo minimo y roadmap por fases (90-180 dias) | Modelo operativo minimo + roadmap con fases, owners y dependencias | Roadmap tiene >=3 milestones con fecha y owner; dependencias mapeadas | Sesion 3 |
| 5 | OKRs y KPIs | 120 min | Traducir objetivos a OKRs operativos con cadencia de seguimiento | OKRs por frente + KPIs operativos + cadencia (frecuencia, owner, foro) | Cada OKR tiene >=1 KR medible; cadencia con fecha de primera revision | Sesion 4 |
| 6 | Adopcion IA + Alfabetizacion | 120 min | Priorizar casos de uso de IA y definir reglas minimas de adopcion | Casos de uso priorizados (valor vs esfuerzo) + reglas minimas + plan de adopcion | >=3 casos priorizados con owner; reglas de datos explicitas | Sesion 5 |
| 7 | Proyeccion de Ingresos | 120 min | Construir hipotesis de crecimiento con palancas y escenarios | Hipotesis de crecimiento + palancas + escenarios (base/optimista/pesimista) | >=3 escenarios con supuestos explicitos y variables clave identificadas | Sesion 3, 4 |
| 8 | Presupuesto + Control | 120 min | Asignar presupuesto por iniciativa y definir metricas de margen/control | Presupuesto por iniciativas + metricas de margen + alertas de desviacion | Cada iniciativa con presupuesto asignado; >=1 metrica de control | Sesion 4, 7 |
| 9 | Resumen Ejecutivo + Pitch | 120 min | Consolidar Pack en one-pager ejecutivo y narrativa de alineacion | Resumen ejecutivo (1 pager) + narrativa/pitch para decision y alineacion | One-pager aprobado por sponsor; pitch ensayado con feedback | Todas las anteriores |
| **Total** | | **1080 min (18h)** | | **9 artefactos** | | |

### 5.3b Mapa de modulos — EstrategIA Personal (9 sesiones)

| # | Sesion/Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|---|---|---|---|---|---|
| 1 | Kickoff + Diagnostico | 120 min | Alinear objetivo 12 meses, restricciones reales y punto de partida | Diagnostico personal: objetivo 12 meses + restricciones + punto de partida | Objetivo SMART con horizonte; restricciones listadas con impacto | Ninguna |
| 2 | Business Model You | 120 min | Mapear propuesta de valor, segmentos, canales, ingresos/costos personales | Business Model You completo | Canvas con >=1 propuesta de valor diferenciada y >=2 canales | Sesion 1 |
| 3 | Proposito de Marca + Ikigai | 120 min | Definir brujula de decisiones: proposito, motivadores, fortalezas, mercado | Ikigai operativo + proposito de marca personal | Brujula testeada: "ante esta oferta/oportunidad, que dice mi proposito?" con >=2 casos | Sesion 2 |
| 4 | Plan de Carrera y Desarrollo | 120 min | Construir hipotesis de rol/mercado y plan de habilidades con evidencias | Plan de carrera: hipotesis + habilidades target + evidencias + timeline | >=3 habilidades con plan de desarrollo y fuente de evidencia | Sesion 3 |
| 5 | Metas, OKRs y Roadmap (90 dias) | 120 min | Traducir vision en OKRs personales con roadmap semanal y rituales | OKRs personales + roadmap semanal + rituales de seguimiento | >=2 OKRs con KRs medibles; roadmap con acciones semanales concretas | Sesion 4 |
| 6 | Sistema de Trabajo a Medida | 120 min | Disenar rutinas, herramientas, cadencias y agenda protegida | Sistema de trabajo: rutinas + herramientas + cadencias + disenio de agenda | Agenda semanal diseenada con bloques protegidos; >=1 rutina probada en sesion | Sesion 5 |
| 7 | IA Personal + Segundo Cerebro | 120 min | Disenar arquitectura de captura/organizacion/recuperacion y prompts de uso diario | Arquitectura de segundo cerebro + prompts de uso diario | >=3 prompts probados en vivo; flujo de captura->organizacion->recuperacion mapeado | Sesion 6 |
| 8 | Ingresos + Presupuesto Personal | 120 min | Diversificar opciones de ingreso y disenar presupuesto/control con habitos y metricas | Opciones de diversificacion + presupuesto personal + metricas | >=2 opciones de ingreso evaluadas; presupuesto con metricas de seguimiento | Sesion 2, 5 |
| 9 | Networking + Despliegue Estrategico | 120 min | Disenar plan de red, visibilidad, pitch personal y cadencia de ejecucion | Plan de networking + pitch personal + cadencia de despliegue | Pitch de <=2 min ensayado; plan con >=3 acciones concretas y fechas | Todas las anteriores |
| **Total** | | **1080 min (18h)** | | **9 artefactos** | | |

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| TI bloquea motor IA | Checklist 48h indica restriccion | Usar motor permitido por TI; adaptar prompts. Si no hay ningun motor: foco en metodo y templates sin IA | Embajador (pre) + Facilitador (vivo) |
| Decision makers ausentes (Empresarial) | <2 decision makers conectados al inicio | Confirmar quorum minimo (>=2 con poder de decision). Si no hay quorum: reagendar con fee de no-show | Embajador |
| Participante no participa activamente | No produce artefactos, solo observa | Facilitador pausa y reencuadra: "que necesitas para avanzar?" Si persiste: se registra como observador, artefacto queda incompleto | Facilitador |
| Datos sensibles en sesion | Participante pega informacion real en IA | Pausa inmediata -> anonimizar o sustituir por caso sintetico | Facilitador (escala a Embajador si resiste) |
| Tiempo aprieta (sesion se extiende) | >10 min de retraso acumulado | Recortar encuadre/contexto, proteger co-creacion y verificacion | Facilitador |
| Conflicto de prioridades en grupo | Desacuerdo en trade-offs que bloquea avance | Aplicar principios de decision (sesion 2). Si no resuelve: registrar como "pendiente de sponsor" y avanzar | Facilitador |
| Modalidad intensiva genera fatiga | Caida de participacion en sesiones consecutivas | Pausas de 15-20 min entre sesiones; proteger co-creacion sobre exposicion | Facilitador |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
Al finalizar, el participante puede:
| # | Capacidad | Como se verifica en sesion | Como se verifica post-sesion (4 semanas) |
|---|---|---|---|
| 1 | Traducir un objetivo ambiguo en sistema de ejecucion (artefactos + cadencia + metricas) | Pack de artefactos producido y validado en sesion | Cadencia de revision ejecutada al menos 1 vez sin facilitador |
| 2 | Priorizar explicitamente: decir si, no y despues con criterios documentados | Lista de trade-offs producida en sesion (que si/no/despues) | Evidencia de al menos 1 decision tomada usando principios de sesion 2 |
| 3 | Usar IA como acelerador estrategico (analisis, documentacion, escenarios) | >=1 prompt ejecutado en sesion con resultado util | >=3 prompts del Pack usados para iterar artefactos |
| 4 | Mantener y actualizar la estrategia con cadencia propia | Playbook de continuidad entregado y revisado | Al menos 1 ciclo de revision ejecutado (semanal o quincenal) |
| 5 | Presentar la estrategia de forma clara y alineada (pitch/resumen ejecutivo) | One-pager y pitch producidos y ensayados | Pitch presentado a al menos 1 stakeholder real |

### 6.2 Definition of Done (criterios de aceptacion)
El servicio se considera **completo y aceptado** si se cumplen **todos** los criterios:
| # | Criterio | Verificacion | Responsable de validar |
|---|---|---|---|
| 1 | Pack de artefactos entregado completo segun SKU (9 artefactos) | Checklist de cierre: todos los artefactos en repositorio con contenido real (no placeholder) | Facilitador + Cliente |
| 2 | Decisiones explicitas registradas: prioridades, trade-offs, supuestos y "no haremos" | Documento de trade-offs producido (minimo sesion 3) | Facilitador |
| 3 | Cadencia definida: owners, metricas, fechas de revision | Cada artefacto tiene owner + metrica + proxima fecha de revision | Facilitador |
| 4 | Transferencia de metodo: el cliente puede replicar al menos 1 modulo usando playbook + prompts | Prueba en sesion: facilitador pide replicar 1 paso del playbook | Facilitador |
| 5 | Entrega operativa: repositorio, accesos, grabaciones y certificados entregados | Checklist de cierre con confirmacion de acceso | Embajador |

### 6.3 Criterios de NO-aceptacion (cuando el servicio fallo — activa garantia o ronda de ajuste)
- Menos de 7 de 9 artefactos producidos por causa atribuible a MetodologIA (falla del facilitador, materiales no disponibles, plataforma caida).
- El facilitador no ejecuto el ciclo de co-creacion en >=3 sesiones (solo hizo exposicion sin produccion de artefactos).
- Repositorio no entregado en 48h post-cierre de la ultima sesion.
- No se registro ninguna decision explicita ni trade-off a lo largo de las 9 sesiones.

> **Nota:** si los artefactos no se produjeron por causa del participante (no asistio, no participo, no tomo decisiones), el servicio se considera entregado. La garantia no aplica por inaccion del participante.

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Momento de entrega | Vigencia | Propiedad intelectual |
|---|---|---|---|---|---|
| 1 | Pack de EstrategIA (9 artefactos segun SKU) | Google Docs/Sheets/Slides editables + exportable a PDF | Progresivo por sesion; pack completo al cierre | Permanente (descargable) | Cliente (contenido); MetodologIA (templates/estructura) |
| 2 | Prompt Pack EstrategIA (prompts por modulo) | Doc editable | Al cierre (D+1) | Permanente (descargable) | Licencia MetodologIA; uso interno del cliente |
| 3 | Playbook de continuidad (cadencia, rituales, criterios de actualizacion) | Doc editable | Al cierre (D+1) | Permanente (descargable) | Licencia MetodologIA; uso interno del cliente |
| 4 | Grabacion + transcripcion de sesiones | Video en Drive | D+1 por sesion | **30 dias** post-cierre | MetodologIA; no redistribuible |
| 5 | Material generado en sesion por el participante | Propio del participante | En sesion | Permanente | Participante |
| 6 | Certificado de asistencia (por sesion completada) | PDF nominal | D+2 post-cierre | Permanente | MetodologIA |

### 7.2 Repositorio + vigencia + backup
- **Google Drive:** acceso por **30 dias** post-cierre de la ultima sesion.
- **Responsabilidad de backup:** el cliente debe descargar todos los artefactos y grabaciones antes de vencimiento. MetodologIA no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** No aplica. `[DECISION: 2025-12, JM, descartada: campus temporal — EstrategIA es consultivo, no formativo; los artefactos viven en el ecosistema del cliente]`
- **Formato alternativo:** si el cliente requiere Notion/Confluence/SharePoint, se define en brief. El facilitador adapta la entrega pero no garantiza funcionalidad de la plataforma del cliente.

### 7.3 Grabacion y consentimiento
- Grabacion oficial + transcripcion automatica entregada via repositorio.
- Expira a los **30 dias** de cierre. No se extiende.
- Grabacion individual por participantes: solo con **autorizacion explicita de todos los asistentes**. Sin autorizacion = facilitador solicita detener.
- **Uso por MetodologIA:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito por escrito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| Asistencia | Asistir a >=7 de 9 sesiones | PDF nominal | D+2 post-cierre |

> Certificado de competencia no aplica. EstrategIA es un servicio consultivo que produce artefactos estrategicos, no un programa formativo con rubrica de evaluacion. `[DECISION: 2026-01, JM, descartada: certificacion de competencia — EstrategIA mide decisiones, no habilidades estandarizadas]`

### 7.5 Propiedad intelectual
| Elemento | Propiedad | Uso permitido |
|---|---|---|
| Materiales del servicio (playbook, prompts, plantillas, estructura de sesiones) | MetodologIA (licencia de uso al cliente) | Uso interno; no revender, no publicar, no redistribuir sin autorizacion escrita |
| Artefactos producidos por el participante en sesion (contenido estrategico) | Participante/cliente | Sin restriccion |
| Grabaciones de sesion | MetodologIA | Acceso temporal al participante (30 dias); no redistribuible |
| Prompts construidos por el participante sobre templates MetodologIA | Participante | Sin restriccion (construidos sobre estructura de MetodologIA) |
| Metodologia y diseno del servicio | MetodologIA | No reproducible ni licenciable sin acuerdo escrito |

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo concreto | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | Co-creacion dirigida, no consultoria pasiva | Cada sesion produce un artefacto con decisiones explicitas del cliente | Pack de 9 artefactos con contenido real (no placeholder) |
| 2 | IA como acelerador | IA acelera analisis, documentacion y generacion de escenarios. El humano valida y decide. | >=1 prompt ejecutado por sesion con resultado util |
| 3 | Gates de decision | Sin decision explicita no hay progreso. El facilitador no avanza sin cierre de sesion anterior. | Documento de trade-offs y decisiones por sesion |
| 4 | Verificabilidad | Cada sesion deja artefacto + proxima accion con duerio y fecha | Checklist de cierre por sesion |
| 5 | Transferencia sostenida | Playbook de continuidad + Prompt Pack permiten iterar sin dependencia del consultor | Cliente replica al menos 1 modulo en prueba |
| 6 | Contextualizacion | Ejemplos, casos y ejercicios adaptados al sector/nicho/contexto del cliente | Brief de contextualizacion completado pre-sesion |

**Regla de calidad:** si el tiempo aprieta, se recorta encuadre/explicacion, nunca co-creacion ni documentacion.

**Regla de facilitacion:** el facilitador co-crea; no dicta. Si el participante no participa activamente, el facilitador pausa y reencuadra ("que necesitas para avanzar?") antes de continuar. No se fuerzan decisiones.

---

## 9) Prerrequisitos y verificacion 48h

### 9.1 Prerrequisitos tecnicos (minimos)
| Requisito | Especificacion minima | Alternativa si no cumple | Consecuencia si no se resuelve |
|---|---|---|---|
| Computador | Portatil/escritorio con navegador moderno | No hay alternativa funcional para co-creacion | No puede participar activamente (observador) |
| Internet | Estable, suficiente para video con camara | Solo audio | Pierde interaccion visual; se compensa con memorias |
| Camara/microfono | Funcionales | Solo audio | Menor interaccion pero viable |
| Motor IA | Cuenta activa verificada en motor elegido | Motor alternativo permitido por TI | Sin motor: co-creacion sin IA + guia para replicar post-sesion |
| Documentos compartidos | Acceso a Google Docs (o alternativa definida en brief) | Alternativa del cliente (Notion/Confluence/etc.) | Facilitador adapta pero no garantiza funcionalidad de plataforma ajena |

### 9.2 Prerrequisitos de habilidad (minimos)
- Copiar/pegar, abrir pestanas, compartir pantalla, trabajar en documentos colaborativos.
- Formular preguntas, ejecutar instrucciones paso a paso, tomar decisiones con trade-offs explicitos.
- **Prueba de verificacion (48h antes):** ejecutar un prompt simple en el motor elegido (Anexo A, seccion A8).
- **Si no pasa la prueba:** embajador ofrece nivelacion previa (sin costo) o recomienda Workshop De Ocupado a Productivo como prerequisito.

### 9.3 Protocolos de contingencia
| Situacion | Accion inmediata | Prevencion |
|---|---|---|
| Sin acceso a IA | Co-creacion basada en metodo y templates sin IA + guia post-sesion para replicar con IA | Checklist 48h con verificacion de login |
| Brecha de habilidad severa | Observador activo con tarea de documentacion; o reprogramacion + nivelacion previa | Pre-screening en brief |
| Conexion inestable | Priorizar audio + entregar memorias + marcar artefactos para completar offline | Recomendacion de red estable en checklist |
| Decision makers no asisten (Empresarial) | Quorum minimo >=2 con poder de decision. Si no: fee de no-show + reagendar | Confirmacion 24h antes + owners asignados |
| Motor alternativo limitado | Adaptar prompts al motor disponible; foco en metodo sobre herramienta | Validar capacidades del motor en brief |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
La contextualizacion esta **incluida sin recargo** y es altamente recomendada. Ajusta ejemplos, casos, ejercicios y artefactos al sector/nicho/contexto del cliente.

**Trade-off:** la contextualizacion consume 4-8h de preparacion del facilitador (segun complejidad del sector). Se incluye sin recargo porque aumenta la calidad de artefactos y la conversion a Programas. `[SUPUESTO: contextualizacion mejora percepcion de valor en ~30% | validar con NPS post-servicio 2026]`

### 10.2 Lead time
| Tipo | Lead time minimo | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 3 dias habiles desde confirmacion de pago | Se ejecuta con casos genericos |
| Con contextualizacion | >=5 dias habiles entre brief completo y primera sesion | Brief tarde = primeras sesiones genericas + contextualizacion progresiva |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en la primera conversacion y se confirma por escrito. Un brief incompleto no bloquea la ejecucion pero degrada la calidad de contextualizacion. El Kickoff (sesion 1) sirve como segunda oportunidad para completar informacion critica.

---

## 11) Operacion: logistica, soporte y repositorios

### 11.1 Roles y responsabilidades (RACI)
| Actividad | Embajador | Facilitador | Cliente | Participante |
|---|---|---|---|---|
| Agenda, logistica, confirmaciones | **R/A** | C | I | I |
| Brief de contextualizacion | **R** | C | **A** (provee info) | I |
| Entrega de contenido en sesion | I | **R/A** | — | C |
| Co-creacion de artefactos | — | C (facilita) | **A** (decide) | **R** (produce) |
| Verificacion de artefactos (gate) | — | **R** | — | **A** |
| Entrega de repositorio/materiales | **R/A** | C | — | I |
| Soporte post-sesion | **R/A** | C | — | I |
| Permisos TI / motor IA | I | I | **R/A** | I |
| Credito educativo (activacion) | **R/A** | — | — | I |

### 11.2 Tamano maximo + escalamiento
| Escenario | Participantes | Facilitadores | Costo | Nota |
|---|---|---|---|---|
| **EstrategIA Empresarial (estandar)** | 3-10 decision makers | 1 consultor lider + embajador | COP 18.000.000 (precio base) | Maximo recomendado: 10. La calidad de decision degrada con >10 personas. |
| **Empresarial >10 decision makers** | 11+ | Rediseno a medida | Cotizacion custom | Se evalua: dividir en 2 ciclos o co-facilitacion. No se acepta >10 en sesion estandar. `[DECISION: 2026-01, JM, descartada: cofacilitacion para >10 — la co-creacion estrategica pierde profundidad con grupos grandes]` |
| **EstrategIA Personal (estandar)** | 1-3 personas | 1 consultor lider | COP 3.400.000 (precio base) | 1 persona = sesion individual. 2-3 = co-creacion grupal (socios, equipo fundador). |
| **2 ejecuciones simultaneas** | 2 grupos | 1 por grupo | -20% en segundo ciclo | Aplica si se contrata al mismo tiempo |

### 11.3 SLA de soporte
| Canal | Tiempo de respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion, coordinacion |
| WhatsApp | **<=2h habiles** | L-V 9:00-16:00 COT | Dudas urgentes, coordinacion entre sesiones |
| Embajador | Canal dedicado | Segun disponibilidad | Coordinacion integral, creditos, escalamiento |

### 11.4 Fuera de alcance del soporte
Consultoria personalizada fuera de sesiones, ejecucion de tareas del cliente, soporte tecnico de herramientas de terceros (motor IA, plataformas del cliente), integraciones tecnicas.

---

## 12) Politicas comerciales

### 12.1 Precios (canonicos)
| Segmento | Precio | Condicion | Costo por participante efectivo |
|---|---|---|---|
| **B2C (Personal)** | **COP 3.400.000** | Por persona (1-3 pax) | COP 3.400.000 (1p) / COP 1.133.333 (3p) |
| **B2B (Empresarial)** | **COP 18.000.000** | Por ciclo (hasta 10 decision makers) | COP 1.800.000/persona en grupo de 10 |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP 3.500 = USD 1 | Politica comercial, no tasa de mercado | — |

**Vigencia:** hasta nueva version del canonico.

**Justificacion del diferencial B2B/B2C:** el precio Empresarial incluye contextualizacion sectorial (4-8h prep), gestion de grupo (logistica, confirmaciones, coordinacion entre sesiones), embajador dedicado, y la complejidad de co-crear con multiples decision makers. El Personal es sesion directa con menor complejidad logistica. `[DECISION: 2026-01, JM, descartada: precio per-capita uniforme — no reflejaba la complejidad diferencial de facilitacion grupal vs individual]`

### 12.2 Pago en 3 cuotas (regla completa)
| Cuota | % del total | Vencimiento | Consecuencia de no pagar |
|---|---|---|---|
| Cuota 1 (mobilization) | 33.3% | Antes del inicio (bloquea agenda y activa preparacion) | No se bloquea agenda ni se preparan materiales |
| Cuota 2 | 33.3% | Ultimo dia del mes siguiente al inicio | Notificacion + ventana 5 dias habiles |
| Cuota 3 | 33.4% | Ultimo dia del segundo mes siguiente al inicio | Notificacion + suspension de accesos si persiste |

**Mora:** notificacion formal -> ventana de regularizacion (5 dias habiles) -> suspension de accesos (repositorio, grabaciones, soporte, creditos). Recargos conforme a legislacion vigente.

**Acuerdos a medida:** posibles por escrito (via embajador) antes del inicio. No se aceptan acuerdos verbales.

### 12.3 Impuestos
| Tipo de compra | Tratamiento |
|---|---|
| Persona natural / pasarela en linea | Incluidos |
| Facturacion corporativa | Discriminados segun normativa vigente |

El precio canonico se entiende **antes de impuestos** para empresas.

### 12.4 Reprogramacion / cancelacion / no-show / fuerza mayor
| Situacion | Condicion | Costo | Plazo de aviso |
|---|---|---|---|
| 1a reprogramacion | Justa causa | Sin costo | >=48h antes de la sesion |
| 2a reprogramacion en adelante | Cualquier causa | **COP 200.000** por sesion reprogramada | >=48h antes |
| No-show | Sin aviso | = 2a reprogramacion (COP 200.000) | — |
| Quorum empresarial | >=2 decision makers activos | Se ejecuta normalmente | — |
| Sin quorum por causa del cliente | <2 decision makers | Fee de no-show | — |
| Fuerza mayor (cualquier parte) | Irresistible e imprevisible | Sin costo | Primera fecha en 3 dias habiles |
| Cancelacion total pre-inicio | Antes de Cuota 1 | Sin costo | — |
| Cancelacion total post-inicio | Despues de iniciar sesiones | No aplica devolucion estandar (ver garantia) | — |

### 12.5 Garantia
- **Garantia de entrega:** se entrega el Pack de EstrategIA completo si el cliente cumple requisitos y provee insumos minimos.
- **Ronda de ajuste sin costo:** 1 ronda de ajustes (1 semana post-cierre) para mejorar claridad o consistencia de artefactos, con feedback estructurado del cliente.
- **Condiciones de activacion:** solicitud dentro de **7 dias** post-cierre + feedback estructurado por escrito (que artefactos requieren ajuste y por que).
- **Proceso:** solicitud al embajador -> revision de feedback -> ajustes en **5 dias habiles**.
- **Exclusion:** no aplica si la insatisfaccion es por causa del participante (no asistio, no participo, no tomo decisiones). Aplica si MetodologIA no cumplio el DoD (ver Sec 6.3).
- **Limite etico:** no se garantizan resultados financieros, de crecimiento, de carrera ni de productividad automatica.

### 12.6 Credito educativo (puente a siguiente servicio)
| Campo | Especificacion |
|---|---|
| Destino | Programa Digital Champions (desde Empresarial) / Programa Empoderamiento (desde Personal) |
| Ventana | **6 meses** desde la compra |
| Monto | **100%** de lo efectivamente pagado |
| Acumulable | Si, con promociones y otros creditos |
| Descuento maximo | = gratis (no hay saldos negativos ni devolucion de diferencia) |
| Aplicacion | Se descuenta de la primera cuota del servicio destino |
| Activacion | Contactar canales oficiales + solicitar cotizacion con referencia de EstrategIA |
| Transferibilidad | Intransferible (solo aplica para quien pago EstrategIA) |

---

## 13) Metricas de exito

### 13.1 North Star (metrica unica de impacto)
- **Empresarial:** estrategia ejecutable con cadencia activa — roadmap + OKRs + owners + revision programada ejecutandose a semana 4 post-cierre.
- **Personal:** claridad + ejecucion sostenida — roadmap 90 dias + rituales + evidencia de avance medible a semana 4 post-cierre.
- **Horizonte de medicion:** 4 semanas post-cierre.
- **Nota etica:** es meta de adopcion; logro depende del contexto, consistencia y aplicacion del participante. MetodologIA no se compromete a valores especificos. `[SUPUESTO: 4 semanas suficientes para primer ciclo de revision | validar con data de seguimiento Q3 2026]`

### 13.2 Leading indicators (comportamiento — medibles en semanas 1-4)
| Indicador | Unidad | Frecuencia de medicion | Fuente |
|---|---|---|---|
| Decisiones por sesion registradas | # decisiones/sesion | Por sesion | Documento de trade-offs |
| % artefactos completados al cierre | % (objetivo: 100%) | Al cierre | Checklist de cierre |
| Asistencia de decision makers (Empresarial) | % sesiones con quorum | Por sesion | Registro de asistencia |
| Prompts del Pack utilizados post-sesion | # prompts/semana | Semanal | Auto-reporte |
| Revisiones de cadencia ejecutadas | # revisiones | Semanal | Auto-reporte |

### 13.3 Lagging indicators (resultado — medibles en semanas 4-12)
| Indicador | Unidad | Frecuencia | Fuente |
|---|---|---|---|
| **Empresarial:** avance de iniciativas del roadmap | % iniciativas en progreso/completadas | Mensual | Revision de OKRs del cliente |
| **Empresarial:** cumplimiento OKRs al primer trimestre | % KRs alcanzados | Trimestral | Revision de OKRs |
| **Empresarial:** adopcion IA en casos priorizados | # casos activos | Mensual | Auto-reporte |
| **Personal:** roadmap 90 dias ejecutado | % acciones completadas | Mensual | Auto-reporte |
| **Personal:** crecimiento de oportunidades/ingresos | Tendencia (mejora/igual/peor) | Trimestral | Auto-reporte |
| **Personal:** consistencia del sistema de trabajo | % semanas con rituales ejecutados | Semanal | Auto-reporte |

### 13.4 Responsabilidad de medicion
Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. MetodologIA entrega herramientas y plantillas de seguimiento dentro del Playbook de continuidad. MetodologIA no mide ni reporta indicadores salvo acuerdo especifico en contrato.

---

## 14) Casos borde (adversarial — decisiones sin improvisacion)

| # | Caso borde | Senal temprana | Decision en vivo | Mitigacion previa | Trade-off aceptado |
|---|---|---|---|---|---|
| 1 | Cliente quiere "resultado garantizado" | Insiste en proyecciones especificas en sesion de venta | Recalibrar: garantizamos metodo + artefactos, no resultados financieros. Si insiste: no vender. | Limites eticos en brief, contrato y Kickoff | Puede perder cliente que busca certeza |
| 2 | Datos sensibles en sesion | Participante pega info real en IA | Pausa -> anonimizar o caso sintetico | Reglas de datos en checklist + advertencia en Kickoff | Se pierde realismo del ejercicio |
| 3 | Motor IA bloqueado por TI | Checklist 48h falla | Usar motor permitido; si no hay ninguno: foco en metodo sin IA | Validar TI en brief y checklist | Pierde aceleracion por IA; sesion 6/7 (adopcion) reduce scope |
| 4 | Decision makers no asisten | <2 conectados al inicio | Quorum minimo >=2; si no: fee de no-show + reagendar | Confirmacion 24h antes + lista de owners | Se pierde la sesion para los ausentes |
| 5 | Conflicto de prioridades bloquea avance | Desacuerdo irreconciliable entre stakeholders | Aplicar principios de decision (sesion 2). Si no resuelve: registrar como pendiente de sponsor, avanzar | Establecer reglas de decision en sesion 1 | Artefacto queda con decision pendiente |
| 6 | Todo es prioridad (no hay trade-offs) | Equipo no puede decir "no" a ninguna iniciativa | Forzar priorizacion con arbol de objetivos + lista de "NO" | Arbol de objetivos (sesion 3) + criterios de corte | Incomodidad del equipo al renunciar a opciones |
| 7 | Modalidad intensiva genera fatiga | Caida de participacion en dia 2-3 | Ajustar cadencia; proteger co-creacion sobre exposicion; pausas cada 2h | Definir modalidad optima en brief | Posible extension a 1 dia extra sin costo adicional |
| 8 | Participante no participa activamente | Solo observa, no produce artefactos | Pausa + reencuadre. Si persiste: registrar como observador, DoD parcial | Validar compromiso en brief | Artefacto incompleto para ese participante |
| 9 | Mora en cuotas | Pago vencido, exigen continuar sesiones | Suspender accesos; sesiones continuan solo tras regularizacion | Calendario de pagos por escrito desde inicio | Friccion con cliente; posible perdida |
| 10 | Piden alcance adicional (implementacion, integracion) | Solicitan en sesion tareas fuera de scope | Registrar como scope adicional; ofrecer cotizacion separada | Alcance explicito en contrato/brief | Cliente puede sentir "limitacion" |
| 11 | Grabacion sin permiso | Participante graba sin consentimiento | Solicitar detener; referir a memorias oficiales | Politica de consentimiento en Kickoff | Puede molestar al participante |
| 12 | Sesion 9 sin cierre de artefactos previos | Artefactos de sesiones anteriores incompletos | Dedicar sesion 9 a cerrar artefactos criticos en vez de Resumen/Pitch; reprogramar pitch si es necesario | Gates de decision en cada sesion | Se pierde la sesion de cierre como fue diseñada |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Siguiente servicio | Tipo | Duracion | Credito aplicable | Conexion tematica |
|---|---|---|---|---|---|
| Base operativa (foco, habitos, prompts) como prerequisito | **Workshop De Ocupado a Productivo** | Workshop | 3h | No aplica | De productividad individual a base para estrategia |
| Sistema de trabajo amplificado antes de estrategia | **Bootcamp Trabajar Amplificado** | Bootcamp | 20h | Credito negociable | Expande capacidad operativa como base para EstrategIA |
| Transformacion organizacional profunda post-estrategia | **Programa Digital Champions** | Programa | 16 sem / 48h | 100% de EstrategIA Empresarial | De estrategia diseñada a transformacion ejecutada a escala |
| Empoderamiento personal integral post-estrategia | **Programa Empoderamiento** | Programa | 16 sem / 48h | 100% de EstrategIA Personal | De estrategia personal a soberania digital y liderazgo |
| Implementacion tecnica de iniciativas estrategicas | **Sofka Technologies** (partner) | Consultoria/desarrollo | Segun scope | No aplica | De diseno estrategico a ejecucion tecnica |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos minimos listos, expectativas alineadas.
> **Envio:** embajador envia 48h antes de la **primera** sesion. Confirmacion requerida por cada participante.
> **Consecuencia de no completar:** ver protocolos de contingencia (Sec 9.3).

### A1. Confirmacion de modalidad
- [ ] Confirmo fecha/hora y disponibilidad completa para **2 horas** por sesion sin interrupciones.
- [ ] Confirmo modalidad: ( ) Intensiva (2-3 dias) ( ) Diluida (2-3 semanas).
- [ ] Confirmo participacion desde **computador** (no movil ni tablet).

### A2. Motor de IA
- [ ] Motor elegido: ( ) ChatGPT  ( ) Gemini  ( ) Claude  ( ) Otro: __________
- [ ] Tengo cuenta activa y **puedo iniciar sesion ahora**.
- [ ] Puedo crear conversacion nueva y escribir instruccion simple.
- [ ] Mi empresa/TI **no bloquea** este motor. Si lo bloquea, avisar al embajador para alternativa.

### A3. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome, Edge, Firefox o Safari version vigente).

### A4. Herramientas de trabajo
- [ ] Acceso a documentos colaborativos (Google Docs / Notion / Confluence / otro acordado).
- [ ] Acceso a mi calendario digital (para sesion de Roadmap).
- [ ] Acceso a mis datos de negocio/carrera necesarios para co-creacion (anonimizados si aplica).

### A5. Habilidad minima (auto-verificacion)
- [ ] Se copiar/pegar texto.
- [ ] Se abrir varias pestanas del navegador.
- [ ] Se compartir pantalla si me lo piden.
- [ ] Se trabajar en documentos colaborativos (editar, comentar).
- [ ] Se nombrar y guardar conversaciones en mi motor de IA.

### A6. Insumos preparados (sin datos sensibles)
- [ ] **(Empresarial):** Tengo claridad sobre el objetivo estrategico del ciclo y quienes deciden.
- [ ] **(Personal):** Tengo un objetivo de 12 meses y puedo describir mi situacion actual.
- [ ] Si tengo documentos previos (plan, OKRs, roadmap, CV, portafolio), los traigo anonimizados si contienen datos sensibles.
- [ ] Si no tengo insumos propios, usare los casos de ejemplo que provee el facilitador.

### A7. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales ni credenciales.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A8. Mini-prueba (verificacion funcional)
- [ ] Abri mi motor de IA.
- [ ] Escribi: *"Inicia una conversacion llamada 'Practica EstrategIA' y dime 3 usos seguros de IA para estrategia de negocio."*
- [ ] Obtuve respuesta funcional.

### A9. Si algo falla
- Si no tengo cuenta o permisos: aviso al embajador **antes** de la primera sesion.
- Si me conectare desde movil: solicito reprogramacion.
- Si mi internet es inestable: preparo alternativa de audio + solicito memorias.

---

## Anexo B -- Brief estandar (contextualizacion)

> Se levanta en primera conversacion (o formulario) y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion. El Kickoff (sesion 1) complementa informacion faltante.

### B1. Identidad del cliente
- Organizacion / iniciativa:
- Segmento: ( ) Persona/small business  ( ) Empresa  ( ) Partner B2B2B
- Industria/nicho/entorno:
- Objetivo del servicio (1 frase):

### B2. Participantes
- # participantes estimado:
- Roles (lista):
- Nivel de madurez digital (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Zonas horarias (si aplica):
- Idioma preferido (si no es espanol):

### B3. Restricciones y politicas
- Motores IA permitidos por TI:
- Herramientas bloqueadas (detalle):
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:

### B4. Contexto estrategico (campos especificos por SKU)

**Empresarial:**
- Ambito (area/unidad/empresa completa):
- Industria/nicho + 3 referentes/competidores:
- Portafolio actual (productos/servicios):
- Segmentos de clientes:
- Propuesta de valor actual:
- Top 5 dolores (clientes/operacion/comercial/finanzas/talento):
- Metricas base existentes (OKRs, KPIs, revenue, etc.):
- Iniciativas en curso y estado:
- Riesgos principales conocidos:
- Criterios de priorizacion existentes (o preferencias del sponsor):

**Personal:**
- Identidad actual (empleado/freelance/fundador/buscando empleo):
- Oferta actual / ticket promedio:
- Habilidades nucleo + brechas identificadas:
- Marca personal actual (audiencia, canales, credenciales):
- Disponibilidad semanal real para ejecucion:
- Restricciones personales (tiempo, familia, otros compromisos):
- Estado del "segundo cerebro" (notas/archivos/CRM personal):
- Habitos actuales de planificacion y seguimiento:

### B5. Herramientas actuales
- Calendario:
- Tareas/proyectos:
- Notas/Docs:
- Comunicacion (Slack/Teams/otro):

### B6. Criterios de exito (medibles)
- Que tiene que pasar en 90 dias para decir "valio la pena":
- Senal de adopcion minima (1 artefacto en uso activo):

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Modalidad de agenda: ( ) Intensiva (2-3 dias)  ( ) Diluida (2-3 semanas)
- Ventana de fechas preferidas:
- Plataforma de videoconferencia preferida:
- Contacto embajador (nombre/WhatsApp/email):
- Contacto TI (si aplica, para validar motores):

### B8. Insumos opcionales
- Documentos existentes (plan/OKRs/roadmap/pitch) aunque esten incompletos:
- Reportes/tableros/resultados previos:
- **(Personal):** CV/LinkedIn/portafolio:

---

## Anexo C -- 3 prompts estrella EstrategIA (agnosticos de herramienta)

> Copiar/pegar en el motor elegido. Usar informacion **anonimizada**.

### C1. Diagnostico de priorizacion estrategica
> Actua como consultor de estrategia operativa. Voy a describir 5 iniciativas/proyectos activos con su contexto. Para cada uno, evalua: (A) Impacto en el objetivo principal (alto/medio/bajo), (B) Esfuerzo estimado (alto/medio/bajo), (C) Dependencias criticas. Luego: 1) Recomienda un orden de priorizacion con justificacion, 2) Identifica las 2 que deberian posponerse o eliminarse, 3) Senala los 3 supuestos mas riesgosos. Formato: tabla iniciativa|impacto|esfuerzo|dependencias|recomendacion + trade-offs + supuestos.

### C2. Generador de OKRs desde objetivo estrategico
> Actua como facilitador de OKRs. Mi objetivo estrategico es: [PEGAR OBJETIVO]. Genera: 1) 3 OKRs con resultados clave medibles (numeros, no porcentajes vagos), 2) Para cada KR: una metrica lider y una metrica de resultado, 3) Cadencia de revision recomendada, 4) Senala que NO deberia ser un OKR (anti-patron). Formato: tabla OKR|KR1|KR2|KR3|metrica lider|metrica resultado|cadencia + anti-patrones.

### C3. Escenarios estrategicos (base/optimista/pesimista)
> Actua como analista de escenarios. Voy a describir mi hipotesis de crecimiento y variables clave. Genera 3 escenarios: (1) Base (probabile), (2) Optimista (mejor caso razonable), (3) Pesimista (peor caso manejable). Para cada escenario: supuestos clave, impacto en metricas principales, acciones recomendadas, y senales de alerta temprana para detectar en cual escenario estamos. Formato: tabla escenario|supuestos|impacto|acciones|senales.

---

## Registro de versiones

| Version | Fecha | Autor | Cambios clave | Aprobado por |
|---------|-------|-------|---------------|-------------|
| v2.0 | 2026-03-29 | JM (asistido por IA) | Normalizacion completa a Template V2 (15 secciones + 3 anexos). Seccion 3.3 consecuencias segundo orden, 4.3 zona gris, 6.3 criterios NO-aceptacion, 7.5 propiedad intelectual, mapas de modulos con criterios de verificacion y dependencias, 3 prompts estrella (Anexo C), trade-offs y trazabilidad en todas las secciones. | `[POR CONFIRMAR: JM, 2026-04-05]` |
| v1.1 | 2026-01-23 | JM | Conformidad parcial Template V2 + endurecimiento adversarial. Normalizacion para comparabilidad con Workshop/Bootcamp. | JM |
| v1.0 | 2025 | JM | Documento canonico inicial. Primera consolidacion por SKUs + mapa de modulos (9 sesiones) + DoD. | JM |
