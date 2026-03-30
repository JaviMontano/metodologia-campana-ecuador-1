# Bootcamp GerencIA de Proyectos

**Documento canonico de servicio** -- v1.0 (2026-03-29)

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre una derivada (ejecutiva, comercial, compras) y este canonico, **este canonico manda**.
> **Ruta oficial:** Ruta de **(R)Evolucion Empresarial** (concepto: **Soberania Digital en Gestion de Proyectos**)
> **Marca:** MetodologIA
> **Clasificacion:** Publico (precios incluidos)

### Convenciones de trazabilidad
Toda afirmacion critica lleva una de estas etiquetas al final de la linea:
- `[EVIDENCIA: fuente]` -- dato verificado con localizador.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- informacion faltante que bloquea publicacion.
- `[DECISION: fecha, quien decidio, alternativa descartada]` -- trade-off resuelto.

---

## 0) Ficha rapida (decision en 60s)

| Atributo | Especificacion |
|---|---|
| **Nombre canonico** | **Bootcamp GerencIA de Proyectos** |
| **Slug (ID unico)** | `bootcamp-gerencia-proyectos` |
| **SKUs** | Bootcamp Empresas (B2B) / Bootcamp Personas (B2C) |
| **Tipo de servicio** | Bootcamp (formacion aplicada intensiva + laboratorio + proyecto final) |
| **Categoria comercial** | Profundizacion -- requiere capacidad basica de IA; verticaliza en gestion de proyectos `[EVIDENCIA: bootcamp-gerencia-proyectos.html, posicion Nivel 4 en ruta]` |
| **Ruta oficial** | Ruta de (R)Evolucion Empresarial |
| **Duracion total** | **18 horas nucleo + 2 horas opcionales de nivelacion (Modulo 0)** `[EVIDENCIA: bootcamp-gerencia-proyectos.html, meta description + hero]` |
| **Modalidad** | Virtual sincronico en vivo (default). Presencial a solicitud (logistica y viaticos aparte). `[SUPUESTO: misma politica que otros bootcamps | confirmar con JM]` |
| **Mecanismo didactico** | Masterclass (teoria/demo) + Workshop (practica guiada) por cada modulo -> Proyecto Final (verificacion por evidencia) |
| **Proporcion didactica** | ~30% masterclass / ~60% workshop-practica / ~10% verificacion y proyecto final `[SUPUESTO: proporcion inferida de la estructura dual masterclass+workshop por modulo | validar con diseno pedagogico]` |
| **Motor IA** | Agnostico. Default: ChatGPT (cuenta gratuita suficiente). Alternativas: Gemini, Copilot, motor permitido por TI. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, modulo 7 menciona Google AI Studio]` |
| **Entregables core** | Memorias + 50+ prompts + 10 asistentes + 1 playbook general + 9 playbooks modulares + grabacion + certificado `[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion entregables + data reference]` |
| **Certificacion** | **Competencia** (condicionada a completar proyecto final) `[EVIDENCIA: bootcamp-gerencia-proyectos.html, modulo 9 "Certificado de Competencia"]` |
| **Soporte / SLA** | Email D+1 habil / WhatsApp <=2h (9-16h COT) / Embajador asignado `[SUPUESTO: misma politica que Workshop DOAP | confirmar]` |
| **Repositorio** | Google Drive, **30 dias** post-cierre `[SUPUESTO: mismo que Workshop DOAP | confirmar]` |
| **Campus / LMS** | Incluido durante el bootcamp + 1 mes post-cierre. Continuidad opcional: COP 20.000/mes `[SUPUESTO: mismo modelo que Bootcamp Trabajar Amplificado | confirmar con JM]` |
| **Participantes** | Recomendado: **3-10**. Practico: **20** (1 facilitador). Maximo: **40** (2 facilitadores, cofacilitacion). `[SUPUESTO: mismos umbrales que otros bootcamps | confirmar]` |
| **Precio canonico B2C** | **COP 800.000** por persona `[SUPUESTO: mismo rango que otros bootcamps B2C | confirmar con JM]` |
| **Precio canonico B2B** | **COP 12.000.000** por ciclo (hasta 20 participantes) + IVA `[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion pricing + bootcamps_data_reference.md]` |
| **Costo por participante efectivo** | B2B: COP 600.000/persona en grupo de 20. B2C: COP 800.000 fijo. `[EVIDENCIA: calculo 12M/20]` |
| **Credito desde** | Bootcamp Trabajar Amplificado (100%, 6 meses, acumulable, intransferible) `[SUPUESTO: misma mecanica de credito que Workshop->Bootcamp | confirmar]` |
| **Credito hacia** | Siguiente servicio en ruta: EstrategIA Amplificada o Digital Champions (100%, 6 meses) `[SUPUESTO: mecanica de credito por definir | confirmar con JM]` |
| **Impuestos** | Online/pasarela: incluidos. Corporativo: discriminados (factura). `[EVIDENCIA: bootcamp-gerencia-proyectos.html, pricing "COP + IVA"]` |
| **Vigencia de precios** | Hasta nueva version del canonico |

**Trade-off de diseno del servicio:** priorizamos profundidad vertical en gestion de proyectos sobre amplitud generalista. El bootcamp asume que el participante ya maneja fundamentos de IA (o los adquiere en el Modulo 0 opcional); invierte las 18h en instalar un sistema completo de gestion de proyectos amplificado con IA, no en enseniar IA desde cero. Quien necesita fundamentos generalistas primero deberia tomar el Bootcamp Trabajar Amplificado. `[DECISION: 2026-03, JM, descartada: bootcamp hibrido fundamentos+proyectos -- diluia la profundidad y no generaba diferenciacion suficiente vs Nivel 3]`

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica -- usar textual en web/contrato)
> Bootcamp intensivo de 18 horas (+2 opcionales de nivelacion) que (r)evoluciona como gestionas proyectos: planificacion inteligente, seguimiento amplificado y herramientas apalancadas en IA, con 10 asistentes especializados, 50+ prompts y proyecto final aplicado a tu realidad. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, meta description]`

### 1.2 Que es (y por que funciona)
- **Instalacion de un sistema completo de gestion de proyectos con IA**, no teoria de project management: produces asistentes, dashboards, matrices de riesgo y un sistema integral en sesion. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, estructura de modulos]`
- Cada modulo sigue el patron **Masterclass + Workshop**: la masterclass instala el concepto; el workshop produce el entregable verificable. No se avanza sin evidencia. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, estructura de cada modulo]`
- El 60% del tiempo es practica guiada con proyectos reales del participante. La verificacion al cierre (Proyecto Final, Modulo 9) asegura que nadie sale con apuntes sino con un sistema funcional. `[SUPUESTO: proporcion estimada de la estructura | validar con diseno pedagogico]`

**Diferenciador clave:** la mayoria de cursos de gestion de proyectos ensenan marcos teoricos (PMBOK, Scrum, etc.); este instala un sistema operativo de gestion amplificado con IA donde el participante construye sus propios asistentes, herramientas y flujos automatizados, no consume plantillas genericas.

### 1.3 Que NO es (expectativas frecuentes que deben cortarse)
| Expectativa erronea | Realidad | Como se descubre temprano |
|---|---|---|
| "Es un curso de PMP/certificacion PMBOK" | No. Es un bootcamp practico de gestion amplificada con IA; no prepara para examenes de certificacion tipo PMI. | Pregunta: "buscas certificacion profesional o capacidad operativa?" |
| "Me van a gestionar mis proyectos" | Co-creamos; tu produces los artefactos con tu proyecto real. El facilitador guia, no ejecuta. | Brief: "traiga un proyecto real para trabajar" |
| "Es un curso basico de IA" | No. La IA es la palanca, no el tema. Se asume un nivel minimo de interaccion con IA (o se nivela en Mod 0). | Checklist 48h: verificacion de cuenta y prompt basico |
| "Resultados garantizados en mis proyectos" | Instalamos capacidad verificable. Los resultados dependen de aplicacion sostenida en tu contexto real. | Limite etico explicado en kickoff |
| "Reemplaza un PMO o consultoria de gestion" | No. Para transformacion organizacional: EstrategIA o Digital Champions. Esto instala capacidades individuales/equipo. | Pregunta: "tu necesidad es de competencia del equipo o de rediseno organizacional?" |
| "Funciona sin computador" | No. Requiere computador + motor IA. Movil = observador, no participante. | Checklist 48h |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Workshop DOAP, 3h] --100% credito, 6m--> [Bootcamp Trabajar Amplificado, 18h] --credito %-->
  [BOOTCAMP GERENCIA DE PROYECTOS, 18h] --credito %--> [EstrategIA Amplificada / Digital Champions]
```
1. **Prerequisito sugerido:** Bootcamp Trabajar Amplificado (Nivel 3) o experiencia equivalente con IA generativa. Modulo 0 (nivelacion) disponible para quienes entren directamente. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, Modulo 0 "Nivelacion" opcional]`
2. **Este servicio:** Bootcamp GerencIA de Proyectos (18h + 2h opcionales, Nivel 4)
3. **Siguiente paso natural:** EstrategIA Amplificada (Nivel 1, consultivo) o Ventas Amplificadas (Nivel 5) o Digital Champions (Nivel 6, programa elite) `[EVIDENCIA: bootcamps_data_reference.md, tabla comparativa]`
4. **Ruta completa:** Workshop DOAP -> Bootcamp Trabajar Amplificado -> Bootcamp GerencIA Proyectos -> EstrategIA Amplificada -> Digital Champions

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Como se verifica | Fuente | Peso |
|---|---|---|---|
| Gestiona proyectos con alta carga operativa manual (reportes, seguimiento, minutas) | "Cuanto tiempo dedicas a reportes de estado y seguimiento semanal?" | Conversacion / brief | Alta |
| Equipo de gestion de proyectos que necesita estandarizar con IA | "Cuantas personas gestionan proyectos y con que herramientas?" | Brief | Alta |
| Puede dedicar 18h de formacion (sesiones de ~2h) | "Pueden bloquear las sesiones completas?" | Confirmacion explicita | Critica |
| Maneja herramientas de IA o esta dispuesto a nivelarse (Mod 0) | "Han usado ChatGPT/Gemini? Tienen cuentas activas?" | Brief / checklist 48h | Media |
| Tiene proyectos reales para aplicar durante el bootcamp | "Con que proyecto real quieren trabajar?" | Brief | Alta |

### 2.2 Anti-fit (no-fit -- rechazar con tacto)
| Condicion de rechazo | Por que no funciona | Alternativa sugerida |
|---|---|---|
| Busca certificacion PMP/PRINCE2/Scrum Master | El bootcamp no prepara para examenes de certificacion; instala capacidad operativa con IA | Redirigir a proveedor de certificaciones + ofrecer bootcamp como complemento post-certificacion |
| Sin habilidades minimas de computador | No puede hacer practica guiada, que es el nucleo del bootcamp | Sesion de nivelacion previa + Bootcamp Trabajar Amplificado primero |
| Motor IA totalmente bloqueado por TI sin alternativa | Sin herramienta, 80% del bootcamp pierde su centro | Validar alternativa antes de confirmar. Si no hay ninguna: no vender |
| Quiere tratar datos confidenciales sin anonimizar | Riesgo legal y etico | Explicar reglas de datos. Si insiste: no proceder |
| Necesita rediseno de PMO / transformacion organizacional | Problema equivocado para este servicio; requiere intervencion consultiva | Redirigir a EstrategIA Amplificada o Digital Champions |
| Equipo sin ningun contacto previo con IA | La curva de aprendizaje es demasiado pronunciada para 18h de contenido avanzado | Bootcamp Trabajar Amplificado primero, luego este |

### 2.3 Preguntas de cualificacion (script de venta)
Orden deliberado: la pregunta 1 detecta urgencia, la 2 detecta capacidad de decision, la 3 detecta viabilidad tecnica.
1. **Detecta dolor real:** "Cuanto tiempo semanal dedica tu equipo a reportes de estado, seguimiento manual y gestion de comunicaciones de proyecto?" -- Si la respuesta es vaga o "poco", la probabilidad de cierre cae >60%. Ofrecer recurso gratuito (blog, 3 prompts). `[SUPUESTO: basado en experiencia de venta 2025 | validar con datos CRM Q2 2026]`
2. **Detecta decision-maker:** "Quien aprueba la capacitacion y tiene el presupuesto asignado?" -- Sin esto, el ciclo de venta se duplica.
3. **Detecta viabilidad tecnica:** "Con que motor de IA trabajan y TI lo permite?" -- Si TI bloquea todo, explorar alternativa antes de cerrar.
4. **Detecta proyecto real:** "Que proyecto(s) activo(s) usarian para las practicas del bootcamp?" -- Sin proyecto real, el bootcamp pierde 50% de efectividad.

**Regla de corte:** si la respuesta a la pregunta 1 es vaga, ofrecer recurso gratuito en lugar de forzar venta.

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lo que el cliente siente -- lenguaje del cliente)
- "Paso mas tiempo haciendo reportes y seguimiento que gestionando el proyecto."
- "Mis cronogramas se desactualizan tan rapido que nadie los consulta."
- "Cada proyecto empieza de cero; no tenemos plantillas ni lecciones aprendidas sistematizadas."
- "Se que la IA puede ayudarme con la gestion, pero no se por donde empezar ni como implementarla."
- "La gestion de comunicaciones con stakeholders me consume horas que deberian ir a decision estrategica."
- "Los riesgos nos explotan en la cara porque no tenemos un sistema de alertas tempranas." `[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion de impactos y pain points]`

### 3.2 Causas raiz (lo que realmente pasa -- analisis del consultor)
| Causa | Efecto directo | Impacto en negocio |
|---|---|---|
| Gestion de proyectos 100% manual | Reportes tardios, seguimiento reactivo, sobrecarga operativa | Proyectos fuera de tiempo/presupuesto; equipo de PM como cuello de botella |
| Ausencia de sistema de lecciones aprendidas | Cada proyecto repite errores del anterior | Costos acumulados por retrabajo; curva de aprendizaje plana |
| Comunicaciones no estandarizadas | Stakeholders con informacion desigual, malentendidos | Desalineacion, escalamientos innecesarios, perdida de confianza |
| Sin sistema de gestion de riesgos proactivo | Riesgos descubiertos cuando ya impactan | Sobrecostos, retrasos, desgaste del equipo |
| IA subutilizada o no adoptada en gestion | Tareas delegables hechas a mano | Productividad suboptima; brecha competitiva vs equipos que si usan IA |

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto cuantificable estimado |
|---|---|---|
| 30 dias | Acumulacion de deuda operativa: reportes atrasados, riesgos no monitoreados | ~20h/mes del equipo PM perdidas en trabajo manual evitable `[SUPUESTO: basado en benchmark de productividad PM | validar con data post-sesion]` |
| 90 dias | Proyectos criticos con desviaciones no detectadas a tiempo; escalamientos ejecutivos | 10-15% de sobrecosto promedio por reactividad `[SUPUESTO]` |
| 12 meses | Obsolescencia del equipo de PM: competidores que adoptan IA entregan mas rapido y con menos error | Brecha competitiva; riesgo de reestructuracion del area de proyectos |

### 3.4 Limites eticos (no negociables -- aplican a todas las marcas)
- **Human-in-the-loop:** la IA propone cronogramas, riesgos, comunicaciones; el PM valida y decide. Sin excepciones.
- No se garantizan resultados financieros de proyecto ni cumplimiento automatico de plazos; se garantiza **metodo + artefactos + sistema**.
- No se interviene en decisiones legales/contractuales de proyecto.
- No se generan contenidos que suplanten identidad, violen copyright o manipulen stakeholders.
- El facilitador no emite juicios sobre la calidad del proyecto del participante; facilita metodo.

### 3.5 Reglas de datos (no negociables)
| Categoria | Prohibido | Permitido | Ejemplo |
|---|---|---|---|
| Datos personales (PII) | Nombres reales de clientes/empleados, cedulas, contactos | Anonimizados: "Cliente A", "Recurso 1" | "Juan Perez, PM" -> "Participante 1" |
| Datos financieros de proyecto | Cifras reales de presupuesto, costos, margenes | Ordenes de magnitud o ficticios | "$500M presupuesto" -> "rango alto" |
| Datos contractuales | Clausulas, penalidades, condiciones especificas | Abstraccion del problema sin detalle propietario | "Clausula 4.2 del contrato" -> "restriccion contractual tipo X" |
| Credenciales | Passwords, API keys, tokens, accesos a sistemas | Nunca. Sin alternativa. | N/A |

**Escalamiento:** si un participante insiste en usar datos sensibles, el facilitador pausa la actividad y escala al embajador. No se negocia.

---

## 4) Alcance y fuera de alcance

### 4.1 Dentro del alcance (In-scope)
| # | Actividad/Entregable | Criterio de completitud | Quien lo produce |
|---|---|---|---|
| 1 | Nivelacion en fundamentos de gestion de proyectos + IA (Mod 0, opcional) | Glosario completado, herramientas configuradas, prompt basico ejecutado | Participante (guiado) |
| 2 | Asistente de Planificacion configurado (Mod 1) | Asistente funcional que genera WBS, cronograma y plan de proyecto | Participante (guiado) |
| 3 | Dashboard de seguimiento de proyecto (Mod 2) | Dashboard funcional con KPIs, alertas y estado en tiempo real | Participante (guiado) |
| 4 | Sistema de Lecciones Aprendidas (Mod 3) | Sistema que captura y analiza retrospectivas automaticamente | Participante (guiado) |
| 5 | Sistema de Gestion de Comunicaciones (Mod 4) | Sistema que genera reportes ejecutivos adaptados a cada stakeholder | Participante (guiado) |
| 6 | Matriz de Riesgos Automatizada (Mod 5) | Matriz funcional con probabilidad, impacto y sugerencias de mitigacion | Participante (guiado) |
| 7 | Asistente Personalizado (Mod 6) | GPT configurado con knowledge base propia del participante | Participante (guiado) |
| 8 | Mini App Funcional (Mod 7) | Herramienta personalizada desarrollada con Google AI Studio | Participante (guiado) |
| 9 | Roadmap de (R)Evolucion (Mod 8) | Plan de upskilling, reskilling y gestion del cambio documentado | Participante (guiado) |
| 10 | Proyecto Final: Sistema de Gestion de Proyectos con IA (Mod 9) | Sistema integral presentado y validado con feedback del facilitador | Participante (guiado) |
| 11 | Entrega de materiales (memorias, prompts, playbooks, asistentes, grabaciones, certificado) | Acceso verificado al repositorio + certificado emitido | Facilitador/Embajador |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que se excluye | Donde se consigue |
|---|---|---|
| Implementacion en herramientas enterprise (Jira, MS Project, Monday, etc.) | Requiere integracion tecnica; cambia la naturaleza del servicio | Sofka Technologies u otro proveedor tech |
| Consultoria de PMO / rediseno organizacional | Requiere discovery, stakeholders multiples, intervencion de meses | EstrategIA Amplificada o Digital Champions |
| Ejecucion operativa de proyectos del participante | Crea dependencia; contradice el modelo de instalacion de capacidad | Consultoria done-for-you (fuera de portafolio) |
| Preparacion para certificaciones (PMP, PRINCE2, Scrum) | Fuera de expertise; requiere contenido especifico de cada marco | Proveedor de certificaciones |
| Soporte tecnico de herramientas de terceros | Fuera de control de MetodologIA | Proveedor de la herramienta |
| Decisiones legales/contractuales de proyecto | Requiere abogado; riesgo regulatorio | Asesor legal del cliente |

### 4.3 Zona gris (se evalua caso a caso)
| Solicitud frecuente | Decision default | Condicion para incluir |
|---|---|---|
| "Nos ayudan a implementar en nuestro Jira/Monday?" | Fuera de alcance | Si es configuracion basica de campos y workflows: se incluye como ejemplo en Mod 7. Si requiere API/integracion: fuera |
| "Pueden adaptar los asistentes a nuestro framework de PM?" | Incluido en contextualizacion | Si el ajuste es de terminologia y procesos: si. Si requiere desarrollo custom: fuera |
| "Queremos seguimiento post-bootcamp del equipo" | Fuera de alcance | Si contratan EstrategIA o Digital Champions: incluye acompanamiento. Si no: soporte estandar (30 dias) |
| "Podemos repetir con otro grupo?" | Nuevo ciclo | Segundo ciclo con -20% si se contrata simultaneamente `[SUPUESTO: misma politica que otros bootcamps | confirmar]` |

---

## 5) Arquitectura del servicio (18h + 2h opcionales)

### 5.1 Principio rector
**Cada modulo produce un entregable verificable** y registra: decisiones tomadas, supuestos explicitos, trade-offs. No se avanza sin verificar el entregable del modulo anterior.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta masterclass (exposicion), **nunca workshop (practica) ni documentacion**. El participante debe irse con artefactos, no con apuntes.

`[DECISION: 2026-03, JM, descartada: avance libre sin gate -- generaba deuda de entregables al final y participantes perdidos en modulos avanzados]`

### 5.2 Diseno pedagogico / consultivo
- **Proporcion objetivo:** ~30% masterclass / ~60% workshop-practica / ~10% verificacion `[SUPUESTO: proporcion estimada | validar con diseno pedagogico formal]`
- **Patron de cada modulo:** Masterclass (conceptual, demo) -> Workshop (practica guiada, co-creacion) -> Entregable verificable
- **Gestion de niveles:** Modulo 0 (nivelacion opcional) para quienes no tienen base de IA. Dentro de cada modulo: plantillas copiables (basico) + retos de adaptacion con restricciones (avanzado).
- **Criterio de avance:** no se avanza al siguiente modulo sin verificar el entregable del anterior. `[DECISION: 2025-12, JM, alternativa descartada: avance libre sin gate]`

### 5.3 Mapa de modulos

| # | Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|--------|--------|-------------------|----------------------|--------------------|----|
| 0 | Nivelacion (opcional) | ~2h | Establecer base comun: fundamentos PM + IA + setup de herramientas | Glosario + IA y Setup | Participante tiene herramientas configuradas y ejecuta prompt basico | Ninguna |
| 1 | Planificacion (y Diseno) | ~2h | Disenar y planificar proyecto con IA | Asistente de Planificacion Configurado | Asistente funcional que genera WBS y cronograma para el proyecto real | Mod 0 (o equivalente) |
| 2 | Seguimiento y Control con IA | ~2h | Implementar seguimiento automatizado | Dashboard de Proyecto | Dashboard funcional con KPIs, alertas y estado del proyecto | Mod 1 |
| 3 | Mejora Continua y Gestion del Cambio | ~2h | Sistematizar aprendizaje inter-proyecto | Sistema de Lecciones Aprendidas | Sistema que captura retrospectivas y sugiere mejoras | Mod 2 |
| 4 | Gestion de Comunicaciones | ~2h | Automatizar comunicaciones de proyecto | Sistema de Gestion de Comunicaciones | Sistema que genera reportes ejecutivos para diferentes stakeholders | Mod 3 |
| 5 | Gestion de Riesgos con IA | ~2h | Implementar gestion proactiva de riesgos | Matriz de Riesgos Automatizada | Matriz funcional con probabilidad, impacto y mitigacion | Mod 4 |
| 6 | Asistentes Personalizados | ~2h | Crear GPT a medida para su metodologia | Asistente Personalizado Configurado | GPT funcional con knowledge base propia | Mod 5 |
| 7 | Herramientas Personalizadas | ~2h | Desarrollar herramientas custom con IA | Mini App Funcional (Google AI Studio) | Mini app personalizada funcionando | Mod 6 |
| 8 | Estrategia de (R)Evolucion | ~2h | Definir roadmap de adopcion y cambio | Roadmap de (R)Evolucion | Plan documentado de upskilling, reskilling y gestion del cambio | Mod 7 |
| 9 | Proyecto Integral de Gestion | ~2h | Consolidar todo en sistema funcional + presentar | Sistema de Gestion de Proyectos con IA + Certificado de Competencia | Proyecto presentado, feedback recibido, certificado emitido | Todos |
| **Total** | | **~18h (+2h Mod 0)** | | | | |

`[EVIDENCIA: bootcamp-gerencia-proyectos.html, modulesData JavaScript + bootcamps_data_reference.md]`

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| >30% del grupo no completa entregable del modulo | Verificacion rapida al cierre del workshop | Pausa de 10 min para nivelacion focalizada; si persiste, simplificar entregable a version minima viable | Facilitador |
| Participante con proyecto confidencial que no puede anonimizar | Insiste en usar datos reales en sesion | Pausa, ofrecer caso sintetico equivalente. Si insiste: escalar a embajador | Facilitador/Embajador |
| Motor IA bloqueado por TI en medio de sesion | Participante reporta bloqueo | Migrar a motor alternativo (Gemini, Copilot); si todos bloqueados: practica con caso de ejemplo + guia post-sesion | Facilitador |
| Tiempo insuficiente para completar modulo | Reloj indica <10 min para cierre y >40% no ha terminado | Recortar masterclass del siguiente modulo, nunca workshop. Entregar guia para completar asincronicamente | Facilitador |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
Al finalizar, el participante puede:
| # | Capacidad | Como se verifica en sesion | Como se verifica post-sesion (3-4 semanas) |
|---|---|---|---|
| 1 | Planificar y disenar proyectos con IA (WBS, cronograma, entregables) | Asistente de Planificacion funcional en Mod 1 | Planificacion de un proyecto nuevo usando el asistente |
| 2 | Implementar seguimiento automatizado con dashboards | Dashboard funcional en Mod 2 | Dashboard actualizado semanalmente con datos reales |
| 3 | Sistematizar lecciones aprendidas y retrospectivas | Sistema de Lecciones en Mod 3 | Al menos 1 retrospectiva procesada con el sistema |
| 4 | Gestionar comunicaciones de proyecto automaticamente | Sistema de Comunicaciones en Mod 4 | Reportes ejecutivos generados con el sistema |
| 5 | Identificar y mitigar riesgos proactivamente con IA | Matriz de Riesgos en Mod 5 | Matriz actualizada con riesgos reales del proyecto |
| 6 | Crear asistentes personalizados (GPTs) para su contexto | Asistente Personalizado en Mod 6 | Asistente en uso regular por el equipo |
| 7 | Desarrollar herramientas custom con IA (mini apps) | Mini App en Mod 7 | Mini app en uso o iterada |
| 8 | Definir estrategia de adopcion de IA en gestion de proyectos | Roadmap de (R)Evolucion en Mod 8 | Al menos 1 accion del roadmap ejecutada |
| 9 | Integrar todos los componentes en un sistema funcional | Proyecto Final presentado en Mod 9 | Sistema en uso activo |

### 6.2 Definition of Done (criterios de aceptacion)
El servicio se considera **completo y aceptado** si se cumplen **todos** los criterios:
| # | Criterio | Verificacion | Responsable de validar |
|---|---|---|---|
| 1 | 9 modulos ejecutados (sin contar Mod 0 opcional) con entregables verificados | Checklist de entregables por modulo | Facilitador |
| 2 | Proyecto Final presentado con feedback | Presentacion documentada + feedback registrado | Facilitador |
| 3 | Materiales entregados: memorias, prompts, playbooks, asistentes, grabaciones | Acceso verificado al repositorio | Embajador |
| 4 | Certificados emitidos: Asistencia (todos) + Competencia (quienes completaron proyecto final) | Certificados generados y entregados | Embajador |
| 5 | Encuesta de satisfaccion completada (>=60% de participantes) | Formulario de encuesta | Embajador |
| 6 | Entrega operativa: repositorio, accesos y certificados entregados | Checklist de cierre firmado | Embajador |

### 6.3 Criterios de NO-aceptacion (cuando el servicio fallo)
- Menos de 6 de 9 modulos completados con entregables verificables (excluye Mod 0) -- activa ronda de ajuste sin costo adicional.
- Proyecto Final no fue presentado por falta de tiempo imputable al facilitador -- activa sesion adicional sin costo.
- Materiales no entregados dentro de D+5 del cierre -- activa entrega inmediata + disculpa formal.
- Satisfaccion promedio <3.5/5 -- activa analisis de causa raiz + plan de accion para el siguiente ciclo.

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Momento de entrega | Vigencia | Propiedad intelectual |
|---|---|---|---|---|---|
| 1 | Memorias completas del bootcamp (9 modulos) | PDF descargable | D+2 | Permanente (descargable) | Licencia MetodologIA |
| 2 | Bateria de 50+ Prompts optimizados para gestion de proyectos | HTML (estudio) + JSON (integracion) | Al cierre del bootcamp | Permanente | Licencia MetodologIA |
| 3 | 1 Playbook General + 9 Playbooks Modulares | PDF | Al cierre del bootcamp | Permanente | Licencia MetodologIA |
| 4 | 10 Asistentes Especializados (GPTs configurados) | Acceso via motor IA | Durante bootcamp + permanente | Permanente (propiedad del participante una vez creados) | Participante (asistente); MetodologIA (diseno/especificacion) |
| 5 | Grabacion de todas las sesiones | Video (acceso via repositorio) | D+1 | 30 dias en repositorio `[SUPUESTO: verificar vigencia de grabaciones]` | Licencia MetodologIA |
| 6 | Certificado de Asistencia | PDF nominal | D+2 | Permanente | MetodologIA |
| 7 | Certificado de Competencia | PDF nominal + validacion | D+5 (post-evaluacion proyecto final) | Permanente | MetodologIA |

`[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion entregables + pricingData JavaScript]`

**Valor de mercado referencial de los entregables:** USD 1,610 (10 asistentes @ USD 150 c/u = USD 1,500 + 50+ prompts @ USD 20 + 9 playbooks @ USD 10 c/u = USD 90). `[EVIDENCIA: bootcamp-gerencia-proyectos.html, pricingData]`

### 7.2 Repositorio + vigencia + backup
- **Google Drive:** acceso por **30 dias** post-cierre. `[SUPUESTO: mismo que Workshop DOAP | confirmar]`
- **Responsabilidad de backup:** el cliente debe descargar antes de vencimiento. MetodologIA no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** Incluido durante el bootcamp + 1 mes post-cierre. Continuidad opcional: COP 20.000/mes. `[SUPUESTO: mismo modelo que Bootcamp Trabajar Amplificado | confirmar con JM]`

### 7.3 Grabacion y consentimiento
- Grabacion + transcripcion automatica entregada via repositorio.
- Expira a los **30 dias** de cierre. `[SUPUESTO: verificar vigencia]`
- Grabacion individual por participantes: solo con **autorizacion explicita** de todos los asistentes. Sin autorizacion = el facilitador solicita detener.
- **Uso de la grabacion por MetodologIA:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| Asistencia | Asistir al bootcamp (>=80% de las sesiones) | PDF nominal | D+2 |
| Competencia | Completar Proyecto Final (Mod 9) + presentacion + evaluacion aprobada | PDF nominal + validacion online | D+5 |

`[EVIDENCIA: bootcamp-gerencia-proyectos.html, Modulo 9 "Certificado de Competencia"]`

### 7.5 Propiedad intelectual
- **Materiales del servicio** (playbooks, prompts, plantillas, especificaciones de asistentes): licencia de uso otorgada al cliente. Propiedad intelectual de MetodologIA.
- **Asistentes (GPTs) construidos en sesion:** propiedad operativa del participante (el los crea en su cuenta). El diseno y la especificacion son IP de MetodologIA.
- **Artefactos producidos por el participante en sesion** (dashboards, matrices, roadmaps): propiedad del participante.
- **Modificacion/redistribucion:** el cliente puede usar internamente. No puede revender ni publicar sin autorizacion escrita.

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo concreto | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | Cada modulo produce entregable verificable | Patron Masterclass -> Workshop -> Entregable con gate de avance | Checklist de entregables por participante |
| 2 | Practica con proyecto real, no ejemplos genericos | Contextualizacion via brief; ejercicios sobre proyecto real del participante | Artefactos producidos con datos del participante (anonimizados) |
| 3 | Asistentes construidos por el participante, no entregados como producto | El participante crea el GPT en su propia cuenta siguiendo especificacion | Asistente funcional demostrado en sesion |
| 4 | Progresion acumulativa modulo a modulo | Cada modulo alimenta al siguiente; Proyecto Final integra todos | Sistema integral presentado en Mod 9 |
| 5 | Si el tiempo aprieta, se recorta masterclass, nunca workshop | Facilitador tiene indicadores de tiempo por modulo | Entregables completados vs tiempo disponible |

**Regla de calidad:** si el tiempo aprieta, se recorta explicacion, nunca practica ni documentacion.

**Regla de facilitacion:** el facilitador co-crea; no dicta. Si el participante no participa activamente, el facilitador pausa y reencuadra antes de continuar.

---

## 9) Prerrequisitos y verificacion 48h

### 9.1 Prerrequisitos tecnicos (minimos)
| Requisito | Especificacion minima | Alternativa si no cumple |
|---|---|---|
| Computador | Portatil/escritorio con navegador moderno | No se acepta movil para practica |
| Internet | Estable, suficiente para video con camara | Solo audio + memorias post-sesion |
| Camara/microfono | Funcionales | Solo audio |
| Motor IA | Cuenta activa verificada (ChatGPT, Gemini o alternativa) | Caso de ejemplo sin IA + guia para replicar. Modulo 0 ayuda a configurar |
| Google AI Studio | Acceso funcional (para Mod 7: Herramientas Personalizadas) | Motor alternativo + guia adaptada `[EVIDENCIA: bootcamp-gerencia-proyectos.html, Mod 7]` |

### 9.2 Prerrequisitos de habilidad (minimos)
- Copiar/pegar, abrir pestanas, compartir pantalla.
- Interaccion basica con motor de IA (formular un prompt, evaluar respuesta).
- Conceptos basicos de gestion de proyectos (que es un cronograma, un hito, un riesgo). Modulo 0 cubre esto para quienes no tengan la base.
- **Prueba de verificacion:** ejecutar un prompt simple 48h antes (Anexo A, seccion A8).

### 9.3 Protocolos de contingencia
| Situacion | Accion inmediata | Prevencion |
|---|---|---|
| Sin acceso a IA | Practica con caso de ejemplo + guia post-sesion para replicar | Checklist 48h con verificacion de login |
| Brecha de habilidad severa en PM | Asignar como observador activo; o reprogramar con Modulo 0 | Pre-screening en brief; recomendar Bootcamp Trabajar Amplificado |
| Conexion inestable | Priorizar audio + entregar memorias + marcar tareas para replicar | Recomendacion de red estable en checklist |
| Movil en vez de computador | No puede hacer practica; entra como oyente o reprograma | Convocatoria exige computador |
| Google AI Studio bloqueado (Mod 7) | Usar motor alternativo; adaptar ejercicio | Validar acceso en checklist 48h |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
La contextualizacion esta **incluida sin recargo** y es altamente recomendada. Ajusta ejemplos, tipos de proyecto, ejercicios y artefactos al sector/industria/metodologia del cliente. `[SUPUESTO: misma politica que Workshop DOAP | confirmar]`

### 10.2 Lead time
| Tipo | Lead time minimo | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 5 dias habiles | Se ejecuta con casos genericos de gestion de proyectos |
| Con contextualizacion | >=5 dias habiles entre brief completo y primera sesion | Si el brief llega tarde, se ejecuta generico + se entregan ajustes post-sesion |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en la primera conversacion y se confirma por escrito. Un brief incompleto no bloquea la ejecucion pero degrada la calidad de contextualizacion.

---

## 11) Operacion: logistica, soporte y repositorios

### 11.1 Roles y responsabilidades (RACI)
| Actividad | Embajador | Facilitador | Cliente | Participante |
|---|---|---|---|---|
| Agenda y logistica | **R/A** | C | I | I |
| Entrega de contenido | I | **R/A** | -- | C |
| Verificacion de evidencias | -- | **R** | -- | **A** |
| Soporte post-sesion | **R/A** | C | -- | I |
| Permisos TI / motor IA | I | I | **R/A** | I |
| Contextualizacion de contenido | I | **R/A** | C (brief) | -- |

### 11.2 Tamano maximo + escalamiento
| Escenario | Participantes | Facilitadores | Costo |
|---|---|---|---|
| Estandar | 1-20 | 1 | Precio base (COP 12M) |
| Cofacilitacion | 21-40 | 2 | +50% (COP 18M) |
| 2 ejecuciones | 21+ (dividido) | 1 por ejecucion | -20% en segunda (COP 12M + COP 9.6M) |
| Recomendacion intima | 3-10 | 1 | Precio base |

`[SUPUESTO: misma escala que otros bootcamps | confirmar con JM]`

### 11.3 SLA de soporte
| Canal | Tiempo de respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion |
| WhatsApp | **<=2h habiles** | L-V 9:00-16:00 COT | Dudas urgentes, coordinacion |
| Embajador | Canal dedicado | Segun disponibilidad | Coordinacion integral |

### 11.4 Fuera de alcance del soporte
Consultoria personalizada de PM, ejecucion de tareas del cliente, soporte tecnico de herramientas de terceros (motor IA, Jira, MS Project, herramientas de gestion del cliente), integraciones tecnicas.

---

## 12) Politicas comerciales

### 12.1 Precios (canonicos)
| Segmento | Precio | Condicion | Costo por participante efectivo |
|---|---|---|---|
| **B2C** | **COP 800.000** | Por persona | COP 800.000 `[SUPUESTO: precio B2C por definir | confirmar con JM]` |
| **B2B** | **COP 12.000.000** | Por ciclo (hasta 20 pax) + IVA | COP 600.000/persona en grupo de 20 |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP 4,400 = USD 1 | Politica comercial, no tasa de mercado | -- `[POR CONFIRMAR: JM, 2026-04-15]` |

`[EVIDENCIA: bootcamp-gerencia-proyectos.html, seccion pricing "$12.000.000 COP + IVA" + bootcamps_data_reference.md]`

**Vigencia:** hasta nueva version del canonico.

### 12.2 Pago en 3 cuotas (regla completa)
| Cuota | % del total | Vencimiento | Consecuencia de no pagar |
|---|---|---|---|
| Cuota 1 (mobilization) | 33.3% | Antes del inicio | No se bloquea agenda ni se preparan materiales |
| Cuota 2 | 33.3% | Ultimo dia del mes siguiente al inicio | Notificacion + ventana 5 dias habiles |
| Cuota 3 | 33.4% | Ultimo dia del segundo mes siguiente | Notificacion + suspension de accesos si persiste |

**Mora:** notificacion formal -> ventana de regularizacion (5 dias habiles) -> suspension de accesos (repositorio, grabaciones, soporte, creditos). Recargos conforme a legislacion vigente.

**Acuerdos a medida:** posibles por escrito (via embajador) antes del inicio. No se aceptan acuerdos verbales.

`[SUPUESTO: misma politica de pago que otros servicios MetodologIA | confirmar]`

### 12.3 Impuestos
- Persona natural / pasarela en linea: impuestos **incluidos**.
- Facturacion corporativa: impuestos **discriminados** segun normativa.
- El precio canonico se entiende **antes de impuestos** para empresas. `[EVIDENCIA: bootcamp-gerencia-proyectos.html, "COP + IVA"]`

### 12.4 Reprogramacion / cancelacion / no-show / fuerza mayor
| Situacion | Condicion | Costo | Plazo de aviso |
|---|---|---|---|
| 1a reprogramacion | Justa causa | Sin costo | >=48h antes |
| 2a reprogramacion en adelante | Cualquier causa | COP 500.000 | >=48h antes `[SUPUESTO: fee por definir | confirmar]` |
| No-show | Sin aviso | = 2a reprogramacion (fee) | -- |
| Quorum empresarial | >=2 asistentes activos | Se ejecuta normalmente | -- |
| Sin quorum por causa del cliente | <2 asistentes | Fee de no-show | -- |
| Fuerza mayor (cualquier parte) | Irresistible e imprevisible | Sin costo | Primera fecha en 3 dias habiles |
| Cancelacion total pre-inicio | Antes de Cuota 1 | Sin costo | -- |
| Cancelacion total post-inicio | Despues de ejecucion | No aplica devolucion (ver garantia) | -- |

### 12.5 Garantia
- Si el participante (B2C) o el cliente (B2B) no queda satisfecho, se ofrece **una ronda de ajuste** (sesion adicional de 2h) sin costo para cubrir los modulos que no cumplieron expectativas. `[SUPUESTO: misma garantia que Workshop DOAP | confirmar]`
- **Condiciones de activacion:** solicitar dentro de los 7 dias post-cierre, por escrito al embajador, indicando modulos/entregables no satisfactorios.
- **Proceso de devolucion:** no aplica devolucion monetaria post-ejecucion. La garantia es de ajuste, no de reembolso.
- **Limite etico:** no se garantizan resultados financieros, de proyecto, ni de productividad automatica.

### 12.6 Credito educativo (puente a siguiente servicio)
| Campo | Especificacion |
|---|---|
| Ventana | **6 meses** desde la compra |
| Monto | **100%** de lo efectivamente pagado |
| Acumulable | Si, con promociones y otros creditos |
| Descuento maximo | = gratis (no hay saldos negativos ni devolucion de diferencia) |
| Aplicacion | Se descuenta de la primera cuota del servicio destino |
| Activacion | Contactar canales oficiales + solicitar cotizacion con referencia del servicio fuente |
| Transferibilidad | Intransferible (persona o empresa que pago) `[SUPUESTO: misma politica que Workshop DOAP | confirmar]` |

---

## 13) Metricas de exito

### 13.1 North Star (metrica unica de impacto)
- **Metrica:** Reduccion del tiempo dedicado a trabajo operativo de gestion de proyectos (reportes, seguimiento, minutas) medida en horas/semana.
- **Horizonte de medicion:** 4-8 semanas post-sesion.
- **Meta indicativa:** recuperar >=6h/semana de trabajo operativo convertido en capacidad estrategica. `[SUPUESTO: estimacion basada en benchmark de productividad PM y claim del HTML "reducir trabajo operativo en 70%" | validar con data post-sesion]`
- **Nota etica:** es meta de adopcion; logro depende del contexto, consistencia y aplicacion del participante. MetodologIA no se compromete a valores especificos.

### 13.2 Leading indicators (comportamiento -- medibles en semanas 1-3)
| Indicador | Unidad | Frecuencia de medicion | Fuente |
|---|---|---|---|
| Uso semanal de al menos 1 asistente de los 10 entregados | Si/No | Semanal | Auto-reporte |
| Reportes de estado generados con el sistema (no manualmente) | Numero | Semanal | Herramienta de seguimiento |
| Dashboards actualizados con datos reales | Si/No | Semanal | Auto-reporte |
| Prompts de la bateria utilizados en gestion real | Numero | Semanal | Auto-reporte |

### 13.3 Lagging indicators (resultado -- medibles en semanas 4-12)
| Indicador | Unidad | Frecuencia | Fuente |
|---|---|---|---|
| Horas/semana ahorradas en trabajo operativo de PM | Horas | Mensual | Auto-reporte + herramienta |
| Proyectos con dashboard de seguimiento activo | % del portafolio | Mensual | Herramienta |
| Riesgos identificados proactivamente (antes de impacto) | Numero | Mensual | Matriz de riesgos |
| Satisfaccion de stakeholders con comunicaciones de proyecto | Rating (1-5) | Trimestral | Encuesta |

### 13.4 Responsabilidad de medicion
Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. MetodologIA entrega herramientas y plantillas de seguimiento dentro de los materiales del servicio.

---

## 14) Casos borde (adversarial -- decisiones sin improvisacion)

| # | Caso borde | Senal temprana | Decision en vivo | Mitigacion previa | Trade-off aceptado |
|---|---|---|---|---|---|
| 1 | Participante sin base de PM (no tomo Mod 0) | No entiende terminologia en Mod 1 | Facilitar glosario express + asignar buddy avanzado; si persiste: observador activo | Modulo 0 recomendado en convocatoria; pre-screening en brief | Se pierde profundidad del participante sin base |
| 2 | Motor IA bloqueado por TI | Checklist 48h falla | Usar motor permitido; asistentes -> especificacion equivalente en motor alternativo | Validar politicas TI en brief | Se pierde fluidez si el motor alternativo es limitado |
| 3 | Datos sensibles | Participante pega info real de proyecto sin anonimizar | Detener actividad, anonimizar o caso sintetico | Reglas de datos en checklist + advertencia al inicio | Se pierde realismo del ejercicio |
| 4 | No-show / quorum bajo | <2 conectados al inicio de sesion | Quorum minimo >=2; si no, fee + reagendar | Confirmacion 24h antes + owners asignados | Se pierde la sesion para los ausentes |
| 5 | Participante dominante que monopoliza | 1 persona habla >50% del tiempo en workshop | Facilitador redistribuye: breakout rooms, turnos, work individual | Acuerdos de convivencia al inicio (Mod 1) | El dominante puede sentirse limitado |
| 6 | Proyecto del participante demasiado complejo para el tiempo | Entregables de modulo toman 3x mas tiempo | Simplificar scope del ejercicio a una fase/area del proyecto; entregar guia para completar post-sesion | Brief que identifique complejidad del proyecto | Se pierde completitud del ejercicio en sesion |
| 7 | Google AI Studio no disponible (Mod 7) | Bloqueo geografico o corporativo | Alternativa: ChatGPT Canvas, Gemini, u otra herramienta de prototipado IA | Validar acceso en checklist 48h | Se pierde la experiencia especifica de AI Studio |
| 8 | Facilitador con problema tecnico | Desconexion, fallo de herramienta | Embajador toma control temporal; facilitador reconecta; si >15 min, reagendar sesion | Embajador siempre presente como backup en primeras sesiones | Se pierde continuidad de la sesion |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Siguiente servicio | Tipo | Duracion | Credito aplicable | Conexion tematica |
|---|---|---|---|---|---|
| Amplificar competencias generales del equipo con IA (base) | Bootcamp Trabajar Amplificado | Bootcamp | 18h | `[POR CONFIRMAR: JM, 2026-04-15]` | Fundamentos de amplificacion que alimentan gestion de proyectos |
| Amplificar ventas con IA | Bootcamp Ventas Amplificadas | Bootcamp | 18h | `[POR CONFIRMAR: JM, 2026-04-15]` | Gestion de proyectos comerciales, pipeline, deals |
| Transformar la estrategia organizacional | EstrategIA Amplificada | Taller consultivo | Variable (2-3 dias o 2-3 sem) | 100% del valor de este bootcamp, 6 meses | De gestion de proyectos a estrategia organizacional con IA |
| Convertirse en lider de transformacion digital | Digital Champions | Programa elite | 16 semanas | 100% del valor, incluye todos los bootcamps | De PM amplificado a champion de transformacion digital |
| Profundizar ofimatica con IA (Google/Microsoft) | Bootcamp Ofimatica con IA | Bootcamp | 18h | `[POR CONFIRMAR: JM, 2026-04-15]` | Herramientas de productividad que complementan gestion de proyectos |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos minimos listos, expectativas alineadas.
> **Envio:** 48h antes de la primera sesion. Confirmacion requerida por cada participante.
> **Consecuencia de no completar:** ver protocolos de contingencia (Sec 9.3).

### A1. Confirmacion de modalidad
- [ ] Confirmo fecha/hora y disponibilidad completa para las sesiones del bootcamp (18h distribuidas segun calendario acordado).
- [ ] Confirmo participacion desde **computador** (no movil ni tablet).

### A2. Motor de IA
- [ ] Motor elegido: ( ) ChatGPT  ( ) Gemini  ( ) Copilot  ( ) Otro: __________
- [ ] Tengo cuenta activa y **puedo iniciar sesion ahora**.
- [ ] Puedo crear conversacion nueva y escribir instruccion simple.
- [ ] Mi empresa/TI **no bloquea** este motor. Si lo bloquea, avisar al embajador para alternativa.

### A3. Google AI Studio (para Modulo 7)
- [ ] Puedo acceder a Google AI Studio (aistudio.google.com).
- [ ] Si no tengo acceso, aviso al embajador para alternativa.

### A4. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome, Edge, Firefox o Safari version vigente).

### A5. Habilidad minima (auto-verificacion)
- [ ] Se copiar/pegar texto.
- [ ] Se abrir varias pestanas del navegador.
- [ ] Se compartir pantalla si me lo piden.
- [ ] Se nombrar y guardar conversaciones en mi motor de IA.
- [ ] Tengo nociones basicas de gestion de proyectos (cronograma, hito, riesgo). Si no: asistire al Modulo 0 de nivelacion.

### A6. Insumos preparados (sin datos sensibles)
- [ ] Traigo un **proyecto real** (activo o reciente) para trabajar durante el bootcamp (anonimizado si contiene datos reales).
- [ ] Si no tengo proyecto propio, usare el caso de ejemplo que provee el facilitador.

### A7. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales, cifras reales de presupuesto ni credenciales.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A8. Mini-prueba (verificacion funcional)
- [ ] Abri mi motor de IA.
- [ ] Escribi: *"Inicia una conversacion llamada 'Practica GerencIA' y genera un WBS de 3 niveles para un proyecto de migracion de sistema."*
- [ ] Obtuve respuesta funcional.

### A9. Si algo falla
- Si no tengo cuenta o permisos: aviso al embajador **antes** de la sesion.
- Si me conectare desde movil: solicito reprogramacion.
- Si mi internet es inestable: preparo alternativa de audio + solicito memorias.
- Si no tengo base de PM: confirmo asistencia al Modulo 0 de nivelacion.

---

## Anexo B -- Brief estandar (contextualizacion)

> Se levanta en primera conversacion (o formulario) y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion.

### B1. Identidad del cliente
- Organizacion / iniciativa:
- Segmento: ( ) Personas/small business  ( ) Empresa  ( ) Partner/B2B2B
- Industria/nicho/entorno:
- Objetivo del bootcamp (1 frase):

### B2. Participantes
- # participantes estimado:
- Roles (lista): (PMs, lideres de equipo, directores de proyecto, etc.)
- Nivel de madurez en PM (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Nivel de madurez en IA (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Zonas horarias (si aplica):
- Idioma preferido (si no es espanol):

### B3. Restricciones y politicas
- Motores IA permitidos por TI:
- Herramientas bloqueadas: (detalle)
- Herramientas de gestion de proyectos actuales: (Jira, MS Project, Monday, Asana, otro)
- Metodologia de PM predominante: (PMBOK, Scrum, SAFe, hibrido, otro)
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:

### B4. Proyectos de referencia
- Tipo de proyectos que gestionan (tecnologia, construccion, consultoria, etc.):
- Tamano tipico de proyecto (equipo, duracion, presupuesto):
- Dolor principal en la gestion actual:
- Proyecto real que usaran en el bootcamp (descripcion breve, anonimizado):

### B5. Herramientas actuales del participante
- Gestion de proyectos:
- Comunicacion (Slack/Teams/otro):
- Documentacion:
- Calendario:
- Tareas/backlog:

### B6. Criterios de exito (medibles)
- Que tiene que pasar en 30 dias para decir "valio la pena":
- Senal de adopcion minima (1 habito verificable):

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Ventana de fechas preferidas:
- Distribucion de sesiones preferida: ( ) 9 sesiones de 2h  ( ) 6 sesiones de 3h  ( ) 3 sesiones de 6h  ( ) Intensivo (otro)
- Plataforma de videoconferencia preferida:
- Contacto embajador (nombre/WhatsApp/email):
- Contacto TI (si aplica, para validar motores y accesos):

---

## Anexo C -- Detalle de los 10 Asistentes Especializados

| # | Asistente | Modulo | Funcion principal | Entregable que produce |
|---|---|---|---|---|
| 1 | Asistente de Onboarding | Mod 0 | Guia de configuracion y fundamentos | Entorno listo + glosario |
| 2 | Asistente de Planificacion | Mod 1 | Genera WBS, cronogramas, planes de proyecto | Plan de proyecto estructurado |
| 3 | Asistente de Seguimiento | Mod 2 | Monitorea KPIs, genera reportes de estado | Dashboard de seguimiento |
| 4 | Asistente de Mejora Continua | Mod 3 | Analiza retrospectivas, captura lecciones | Sistema de lecciones aprendidas |
| 5 | Asistente de Comunicaciones | Mod 4 | Genera reportes ejecutivos, minutas, comunicados | Sistema de comunicaciones |
| 6 | Asistente de Riesgos | Mod 5 | Identifica, clasifica y mitiga riesgos | Matriz de riesgos automatizada |
| 7 | Asistente Constructor | Mod 6 | Crea otros asistentes con knowledge base propia | Asistente personalizado |
| 8 | Asistente de Desarrollo | Mod 7 | Prototipa herramientas y mini apps | Mini app funcional |
| 9 | Asistente de Estrategia | Mod 8 | Disena roadmaps de adopcion y cambio | Roadmap de (R)Evolucion |
| 10 | Asistente Gestor de Proyectos | Mod 9 | Integra todos los componentes en sistema funcional | Sistema integral de gestion |

`[EVIDENCIA: bootcamp-gerencia-proyectos.html, modulesData + pricingData + bootcamps_data_reference.md]`

---

## Registro de versiones

| Version | Fecha | Autor | Cambios clave | Aprobado por |
|---------|-------|-------|---------------|-------------|
| v1.0 | 2026-03-29 | Claude (extraccion) + JM (revision pendiente) | Primera version canonica extraida de bootcamp-gerencia-proyectos.html + bootcamps_data_reference.md. Template V2 completo. | `[POR CONFIRMAR: JM, 2026-04-15]` |
