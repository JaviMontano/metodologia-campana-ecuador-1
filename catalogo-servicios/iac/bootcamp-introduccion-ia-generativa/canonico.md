# Bootcamp: Introduccion a la IA Generativa

**Documento canonico de servicio** -- v1.0 (2026-03-29)

> **Nota de marca:** Servicio IAC (white-label de MetodologIA). El curriculo es propiedad de MetodologIA; IAC tiene licencia de uso bajo contrato marco.

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre una derivada (ejecutiva, comercial, compras) y este canonico, **este canonico manda**.
> **Ruta oficial:** Ruta de (R)Evolucion Empresarial (concepto tematico: **Productividad Aumentada con IA Generativa**)
> **Marca:** IAC (white-label de MetodologIA)
> **Clasificacion:** Confidencial-cliente

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
| **Nombre canonico** | Bootcamp: Introduccion a la IA Generativa |
| **Slug (ID unico)** | `bootcamp-introduccion-ia-generativa` |
| **SKUs** | IAC-BOOT-IAGEN-01 `[SUPUESTO: pendiente asignacion formal de SKU | validar con operaciones IAC]` |
| **Tipo de servicio** | Bootcamp / Programa |
| **Categoria comercial** | Profundizacion |
| **Ruta oficial** | Ruta de (R)Evolucion Empresarial |
| **Duracion total** | 18 horas nucleo (9 modulos x 2h) + 2h nivelacion opcional (Modulo 0) `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| **Modalidad** | Virtual sincronico (default) / Presencial (a solicitud; logistica separada) `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| **Mecanismo didactico** | Demostracion -> Practica guiada -> Verificacion por evidencia (MetodologIA (R)Evolucion) |
| **Proporcion didactica** | 30% demo / 50% practica guiada / 20% verificacion `[SUPUESTO: proporcion estimada del HTML | validar con JM]` |
| **Motor IA** | Agnostico. Default: ChatGPT, Gemini, Claude (versiones gratuitas). Alternativas: motor permitido por TI `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| **Entregables core** | 11 playbooks (1 fielbook + 1 general + 9 por modulo), 1 bateria de prompts de amplificacion (50 prompts), 1 asistente de IA a la medida, proyecto final aplicado, memorias, certificado `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| **Certificacion** | Asistencia (todos) / Competencia (condicionada a proyecto final aprobado) `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| **Soporte / SLA** | Email D+1 / WhatsApp <=2h (9-16h COT) / Embajador asignado |
| **Repositorio** | Google Drive, 30 dias post-cierre `[SUPUESTO: 30 dias estandar | validar con operaciones]` |
| **Campus / LMS** | No aplica -- es un Bootcamp de 18h; los Bootcamps no incluyen LMS por diseno |
| **Participantes** | Min 5 -- Max 20 recomendado. Cofacilitacion a partir de 21. Maximo absoluto: 40 (2 facilitadores). `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| **Precio canonico B2C** | No aplica para este servicio (solo B2B) `[POR CONFIRMAR: JM, 2026-04-15]` |
| **Precio canonico B2B** | COP 12.000.000 por ciclo (hasta 20 participantes) `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| **Costo por participante efectivo** | COP 600.000/persona en grupo de 20 |
| **Credito desde** | Taller IA Comercial, 100%, 6 meses `[SUPUESTO: politica estandar de credito | validar con JM]` |
| **Credito hacia** | Programa Competencias Digitales / Programa Liderazgo Digital, 100%, 6 meses `[SUPUESTO: politica estandar de credito | validar con JM]` |
| **Impuestos** | Segun regimen de facturacion y legislacion vigente. Online: incluidos. Corporativo: discriminados. |
| **Vigencia de precios** | Hasta 2026-12-31 o hasta nueva version del canonico `[SUPUESTO: vigencia estimada | validar con JM]` |

**Trade-off de diseno del servicio:** Priorizamos amplitud de competencias en IA generativa (prompting, asistentes, agentes, automatizacion, prototipado) sobre profundidad en un solo dominio, porque el objetivo es instalar una base solida de productividad aumentada con IA que el participante pueda aplicar en cualquier area de su trabajo. Progresion estructurada: Fundamentos (M1-4) -> Profundizacion (M5-8) -> Integracion (M9). `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica -- usar textual en web/contrato)
> Bootcamp intensivo de 18 horas que amplifica la productividad del equipo con IA generativa aplicada: desde prompting basico hasta asistentes avanzados, agentes autonomos, automatizaciones agenticasy prototipado, con metodologia probada y resultados medibles desde el primer modulo. `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

### 1.2 Que es (y por que funciona)
- MetodologIA (R)Evolucion probada en casos reales: de trabajo manual a productividad aumentada con IA, con resultados medibles desde el primer dia. `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`
- Cada modulo combina teoria aplicada con practica inmediata: configuras, pruebas y aplicas asistentes de IA desde el primer dia, generando entregables que usas inmediatamente. `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`
- Progresion estructurada que lleva al participante de prompting basico a automatizaciones agenticascomplejas en 18 horas, con un playbook por cada modulo. `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

**Diferenciador clave:** Unico bootcamp que cubre la cadena completa de IA generativa (prompting -> asistentes -> agentes -> automatizacion agentica -> prototipado) con 9 playbooks especificos por modulo y 3 asistentes especializados incluidos, en un formato intensivo de 18 horas.

### 1.3 Que NO es (expectativas frecuentes que deben cortarse)
| Expectativa erronea | Realidad | Como se descubre temprano |
|---|---|---|
| "Es un curso de programacion de IA" | No requiere ni ensena programacion; es aplicacion practica de IA generativa para productividad | Conversacion inicial / brief |
| "Van a automatizar todos mis procesos" | Se ensenan fundamentos y patrones de automatizacion; la implementacion completa es responsabilidad del participante | Pregunta de cualificacion #1 |
| "Incluye licencias de herramientas premium" | Se trabaja con versiones gratuitas de ChatGPT, Gemini y Claude; licencias premium son responsabilidad del cliente | Checklist 48h |
| "Es solo teoria sobre IA" | Cada modulo genera entregables practicos aplicables directamente al trabajo | Descripcion del servicio |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Taller IA] --credito 100%--> [ESTE BOOTCAMP] --credito 100%--> [Programa Competencias Digitales / Programa Liderazgo Digital]
```
1. **Prerequisito sugerido:** Ninguno -- punto de entrada valido. El Modulo 0 opcional nivela a participantes sin experiencia previa. `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`
2. **Este servicio:** Bootcamp Introduccion a la IA Generativa (18h)
3. **Siguiente paso natural:** Programa Competencias Digitales Universales (10 semanas) o Programa Liderazgo Digital con IA (12 semanas) `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]`
4. **Ruta completa:** Bootcamp IA Generativa -> Programa Competencias Digitales -> Programa Liderazgo Digital -> Digital Champions

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Como se verifica | Fuente |
|---|---|---|
| Equipo que necesita amplificar productividad con IA generativa | Pregunta: "Que tareas repetitivas consumen mas tiempo de su equipo?" | Brief / conversacion |
| Organizacion con disposicion a adoptar herramientas digitales nuevas | Pregunta sobre herramientas actuales y apertura al cambio | Brief |
| Equipo de 5-20 personas con disponibilidad para 18h intensivas | Confirmacion de quorum y disponibilidad | Brief |
| Necesita resultados rapidos en productividad (<1 mes) | Pregunta sobre urgencia y objetivos de corto plazo | Conversacion inicial `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |

### 2.2 Anti-fit (no-fit -- rechazar con tacto)
| Condicion de rechazo | Por que no funciona | Alternativa sugerida |
|---|---|---|
| Busca implementacion tecnica de integraciones/APIs complejas | Fuera de alcance; cambia el tipo de servicio | Sofka Technologies u otro proveedor tech |
| Equipo sin acceso a internet estable ni herramientas basicas | No puede ejecutar practicas; necesita infraestructura minima | Resolver infraestructura primero |
| Expectativa de automatizacion total sin participacion humana | Contradice principio de human-in-the-loop | Consultoria de automatizacion industrial (fuera de portafolio) |

### 2.3 Preguntas de cualificacion (script de venta)
Orden deliberado: la pregunta 1 detecta urgencia, la 2 detecta capacidad de decision, la 3 detecta viabilidad tecnica.
1. "Que tareas repetitivas consumen mas tiempo de su equipo y cuanto tiempo podrian ahorrar si las automatizaran?" -- detecta dolor real vs curiosidad
2. "Quien toma la decision de invertir en formacion para el equipo y tiene disponibilidad para aprobar en esta semana?" -- detecta decision-maker vs delegado
3. "Su equipo tiene acceso a ChatGPT, Gemini o Claude, y el area de TI permite su uso?" -- detecta viabilidad tecnica/logistica

**Regla de corte:** si la respuesta a la pregunta 1 es vaga, la probabilidad de cierre cae >60%. Ofrecer recurso gratuito en lugar de forzar venta. `[SUPUESTO: basado en experiencia de venta 2025 | validar con datos de conversion Q2 2026]`

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lo que el cliente siente -- lenguaje del cliente, no tecnico)
- "Mi equipo pasa horas en tareas repetitivas que deberian estar automatizadas"
- "Sabemos que la IA es importante pero no sabemos por donde empezar"
- "Probamos ChatGPT pero no le sacamos provecho real; solo lo usamos para preguntas basicas"
- "Necesitamos resultados concretos y medibles de la IA, no solo demostraciones"

### 3.2 Causas raiz (lo que realmente pasa -- analisis del consultor)
- Falta de estructura en el uso de IA generativa -> uso ad-hoc y superficial -> no se captura valor real
- Ausencia de metodologia de prompting -> prompts genericos que producen resultados genericos -> frustracion y abandono
- Desconocimiento de capacidades avanzadas (asistentes, agentes, automatizacion) -> subutilizacion de herramientas disponibles -> brecha de productividad

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto cuantificable estimado |
|---|---|---|
| 30 dias | Equipo sigue en modo manual; tareas repetitivas consumen 30-40% del tiempo | Perdida de productividad equivalente a 2-3h/persona/semana `[SUPUESTO: estimacion basada en casos tipicos | validar con metricas del cliente]` |
| 90 dias | Competidores con IA producen mas rapido y con mayor calidad | Brecha de competitividad creciente; perdida de oportunidades |
| 12 meses | Brecha de competencias digitales irreversible a corto plazo; talento migra a organizaciones mas digitales | Rotacion de talento; perdida de participacion de mercado |

### 3.4 Limites eticos (no negociables -- aplican a todas las marcas)
- **Human-in-the-loop:** la IA propone; el humano valida y decide. Sin excepciones.
- No se garantizan resultados financieros; se garantiza **metodo + artefactos + claridad**.
- No se interviene en decisiones legales/financieras/medicas criticas.
- No se generan contenidos que suplanten identidad, violen copyright o manipulen audiencias.

### 3.5 Reglas de datos (no negociables)
- **Prohibido ingresar a herramientas de IA:** datos personales sensibles (PII), secretos industriales, informacion clasificada, credenciales, datos de terceros sin consentimiento.
- **Anonimizacion obligatoria:** para casos reales, sustituir nombres, cifras y clientes por equivalentes ficticios.
- **Caso sintetico:** si la anonimizacion no es suficiente, trabajar con caso completamente ficticio.
- **Responsabilidad del participante:** lo que copie/pegue en su herramienta es su responsabilidad legal.
- **Escalamiento:** si un participante insiste en usar datos sensibles, el facilitador detiene la actividad y escala al embajador.

---

## 4) Alcance y fuera de alcance

### 4.1 Dentro del alcance (In-scope)
| # | Actividad/Entregable | Criterio de completitud | Quien lo produce |
|---|---|---|---|
| 1 | 9 modulos de formacion intensiva (18h) + Modulo 0 opcional (2h) | Todos los modulos ejecutados con evidencia de practica | Facilitador + Participantes |
| 2 | 11 playbooks (1 fielbook + 1 general + 9 por modulo) | PDFs entregados con guias paso a paso por modulo | Facilitador `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| 3 | 1 bateria de prompts de amplificacion (50 prompts) | Documento con prompts verificados y personalizados al contexto | Facilitador `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| 4 | 1 asistente de IA a la medida (GPT personalizado) | Asistente configurado, documentado y con archivos de respaldo | Facilitador `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| 5 | 3 asistentes especializados gratuitos (Generacion de Asistentes, Automatizaciones Agenticasy Planificacion) | Asistentes configurados con metodologia de uso | Facilitador `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| 6 | Proyecto final aplicado (integracion de todos los modulos) | Proyecto completo con evidencia de aplicacion practica | Co-creacion (Participante + Facilitador) |
| 7 | Memorias del bootcamp (grabacion + transcripcion) | Entregadas via repositorio post-cierre | Facilitador |
| 8 | Certificado de competencia (condicionado a proyecto final) | PDF nominal emitido D+5 | Embajador |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que se excluye | Donde se consigue |
|---|---|---|
| Implementacion tecnica de integraciones complejas (APIs, desarrollo custom) | Se ensenan patrones; implementacion avanzada es servicio aparte | Sofka Technologies u otro proveedor tech |
| Licencias de herramientas premium (ChatGPT Plus, N8n Pro, Claude Pro) | Se trabaja con versiones gratuitas; licencias son responsabilidad del cliente | Proveedor de la herramienta |
| Ejecucion operativa total | El valor esta en instalar capacidad, no en crear dependencia | Consultoria done-for-you (fuera de portafolio) |
| Decisiones legales/contractuales | Requiere abogado; riesgo regulatorio | Asesor legal del cliente |
| Integraciones/desarrollo/APIs | Fuera de expertise; cambia el tipo de servicio | Sofka Technologies u otro proveedor tech |

### 4.3 Zona gris (se evalua caso a caso)
| Solicitud frecuente | Decision default | Condicion para incluir |
|---|---|---|
| "Nos ayudan a implementar en toda la organizacion despues?" | Fuera de alcance | Si se contrata Programa de Competencias Digitales o Liderazgo Digital como siguiente paso |
| "Pueden hacer una sesion de nivelacion previa?" | Incluido sin recargo (Modulo 0 opcional de 2h) | Solicitar con 48h de anticipacion `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| "Queremos mas asistentes especializados" | Fuera de alcance (incluye 1 a la medida + 3 especializados) | Cotizacion adicional |

---

## 5) Arquitectura del servicio (modulos / sesiones / fases)

### 5.1 Principio rector
**Cada modulo produce un entregable verificable** y registra: decisiones tomadas, supuestos explicitos, trade-offs, metrica de seguimiento y fecha de revision.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta exposicion, **nunca practica ni documentacion**. El participante debe irse con artefactos, no con apuntes.

### 5.2 Diseno pedagogico / consultivo
- **Proporcion objetivo:** 30% demo / 50% practica guiada / 20% verificacion `[SUPUESTO: proporcion estimada | validar con JM]`
- **Gestion de niveles:** plantillas copiables (basico) + retos de adaptacion con restricciones (avanzado).
- **Criterio de avance:** no se avanza al siguiente modulo sin verificar el entregable del anterior. `[DECISION: 2025-12, JM, alternativa descartada: avance libre sin gate -- generaba deuda de entregables al final]`
- **Formato flexible:** 2 dias intensivos (9h/dia, recomendado) o hasta 3 semanas (9 sesiones de 2h distribuidas) `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`
- **Progresion estructurada:** Fundamentos (M1-4) -> Profundizacion (M5-8) -> Integracion (M9) `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

### 5.3 Mapa de modulos

| # | Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|--------|--------|-------------------|----------------------|--------------------|----|
| 0 | Nivelacion: Lenguaje Comun y Fundamentos | 2h (opcional) | Establecer vocabulario tecnico basico: LLM, asistentes, agentes, prompts, tokens, contexto; introduccion al programa | Vocabulario tecnico validado; participante ejecuta prompt simple | Participante crea conversacion y obtiene respuesta funcional | Ninguna |
| 1 | Prompting Basico | 2h | Aprender a escribir prompts efectivos: estructura, contexto e instrucciones claras | Prompt funcional con estructura correcta aplicado a caso propio | Participante genera respuesta util con prompt estructurado | Ninguna |
| 2 | Optimizar Prompts | 2h | Refinar, testear y medir la efectividad de prompts para resultados optimos | Prompt optimizado con evidencia de mejora respecto al original | Participante demuestra mejora medible entre prompt v1 y v2 | M1 |
| 3 | Documentos y Multimedia | 2h | Transformar documentos en contenido multimedia con IA | Documento transformado en al menos 2 formatos multimedia distintos | Contenido multimedia generado y funcional | M1, M2 |
| 4 | Creacion de Asistentes | 2h | Disenar y construir asistentes de IA especializados para el contexto del participante | Asistente de IA configurado y funcional (personal + profesional) | Asistente responde correctamente a 3 consultas de prueba | M1, M2 |
| 5 | Agentes Generales | 2h | Automatizar tareas complejas con agentes de proposito general | Agente configurado que ejecuta tarea compleja de forma autonoma | Agente completa tarea asignada sin intervencion manual | M4 |
| 6 | Automatizacion Agentica | 2h | Automatizar procesos complejos con workflows agenticosque ejecutan tareas de forma autonoma | Workflow agenticoconfigurando con N8n u herramienta equivalente | Workflow ejecuta proceso de principio a fin | M5 |
| 7 | Prototipado y (mini)apps | 2h | Crear prototipos funcionales y mini aplicaciones con IA para validar ideas rapidamente | Prototipo funcional de mini aplicacion generado con IA | Prototipo es funcional y resuelve un caso de uso real | M4, M5 |
| 8 | Adopcion de IA | 2h | Desarrollar estrategias para adoptar IA a nivel personal y organizacional | Plan de adopcion de IA personalizado con fases, metricas y responsables | Plan tiene al menos 3 acciones concretas con fecha | M1-M7 |
| 9 | Proyecto Final | 2h | Integrar todos los conceptos en un proyecto final de cierre completo | Proyecto final que integra prompting, asistentes, agentes y automatizacion | Proyecto presentado y evaluado con rubrica | M1-M8 |
| **Total** | | **18h (+ 2h opcional)** | | | | |

`[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| Participante sin experiencia previa con IA | Se detecta en checklist 48h o Modulo 0 | Modulo 0 obligatorio; asignar buddy con experiencia | Facilitador |
| Motor IA bloqueado por TI | Checklist 48h falla | Usar motor alternativo permitido (ChatGPT/Gemini/Claude); asistentes con especificacion equivalente | Facilitador |
| Grupo con niveles muy dispares | Se detecta en Modulo 0/1 | Plantillas copiables (basico) + retos con restricciones (avanzado) | Facilitador |
| Tiempo insuficiente en modulo | Practica supera tiempo asignado | Recortar exposicion; proteger practica y documentacion | Facilitador |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
Al finalizar, el participante puede:
| # | Capacidad | Como se verifica en sesion | Como se verifica post-sesion (3 semanas) |
|---|---|---|---|
| 1 | Escribir prompts efectivos y optimizados para cualquier caso de uso | Ejercicios practicos en Modulos 1-2 | Auto-reporte: # tareas resueltas con prompts estructurados / semana |
| 2 | Crear y configurar asistentes de IA especializados para su contexto | Asistente funcional en Modulo 4 | Asistente activo y en uso diario |
| 3 | Implementar agentes autonomos para tareas complejas | Agente funcional en Modulo 5 | Auto-reporte: # procesos automatizados con agentes |
| 4 | Disenar automatizaciones agenticascon N8n u herramientas equivalentes | Workflow funcional en Modulo 6 | Workflow activo y ejecutandose |
| 5 | Crear prototipos funcionales y mini aplicaciones con IA | Prototipo funcional en Modulo 7 | Prototipo en uso o iterado |
| 6 | Desarrollar plan de adopcion de IA personal y organizacional | Plan en Modulo 8 | Avance en al menos 1 fase del plan |

`[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`

### 6.2 Definition of Done (criterios de aceptacion)
El servicio se considera **completo y aceptado** si se cumplen **todos** los criterios:
| # | Criterio | Verificacion | Responsable de validar |
|---|---|---|---|
| 1 | 9 modulos ejecutados completamente | Registro de asistencia + evidencias de practica por modulo | Facilitador |
| 2 | >=80% de participantes completa proyecto final funcional | Evaluacion de proyectos presentados | Facilitador |
| 3 | Satisfaccion >=4.5/5 en evaluacion post-bootcamp | Encuesta estandar | Embajador |
| 4 | Entregables core entregados (11 playbooks, prompts, asistente, memorias, certificados) | Checklist de cierre | Embajador |
| 5 | Participante demuestra uso funcional de al menos 3 capacidades (prompting + asistente + agente/automatizacion) | Evidencia en proyecto final | Facilitador |

### 6.3 Criterios de NO-aceptacion (cuando el servicio fallo)
- Menos del 50% de participantes completa el proyecto final
- NPS o satisfaccion < 3.5/5
- Entregables core no entregados en D+5 post-cierre

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Momento de entrega | Vigencia | Propiedad intelectual |
|---|---|---|---|---|---|
| 1 | 1 Fielbook (guia maestra del programa completo) | PDF | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| 2 | 1 Playbook general (vision integral y metodologia) | PDF | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA |
| 3 | 9 Playbooks de Amplificacion con IA (1 por modulo) | PDF interactivo (9 archivos) | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| 4 | 1 Bateria de prompts de amplificacion (50 prompts) | PDF/Doc | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| 5 | 1 Asistente de IA a la medida (GPT personalizado) | GPT + archivos de configuracion de respaldo | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| 6 | 3 Asistentes especializados gratuitos (Generacion de Asistentes M4, Automatizaciones AgenticasM6, Planificacion M8) | GPTs en ChatGPT + documentacion de uso | Durante el bootcamp | Permanente | Licencia de uso al cliente; PI de MetodologIA `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |
| 7 | Memorias del bootcamp (grabacion + transcripcion) | Video + texto via repositorio | D+1 | 30 dias post-cierre `[SUPUESTO: 30 dias estandar | validar]` | Cliente |
| 8 | Presentaciones y materiales de los 9 modulos | PDF/enlace | D+2 | Permanente | Licencia de uso al cliente; PI de MetodologIA |
| 9 | Proyecto final del participante | Documentos generados en sesion | Al cierre | Permanente | Participante |

### 7.2 Repositorio + vigencia + backup
- **Google Drive:** acceso por **30** dias post-cierre. `[SUPUESTO: 30 dias estandar | validar con operaciones]`
- **Responsabilidad de backup:** el cliente debe descargar antes de vencimiento. MetodologIA/IAC no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** No aplica -- es un Bootcamp de 18h; los Bootcamps no incluyen LMS por diseno.

### 7.3 Grabacion y consentimiento
- Grabacion + transcripcion automatica entregada via repositorio.
- Expira a los **30** dias de cierre. `[SUPUESTO: 30 dias estandar | validar]`
- Grabacion individual por participantes: solo con **autorizacion explicita** de todos los asistentes. Sin autorizacion = el facilitador solicita detener.
- **Uso de la grabacion por MetodologIA/IAC:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| Asistencia | Asistir al bootcamp | PDF nominal | D+2 |
| Competencia | Completar proyecto final + rubrica aprobada | PDF nominal + validacion online | D+5 `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |

### 7.5 Propiedad intelectual
- **Materiales del servicio** (playbooks, fielbook, prompts, plantillas, asistentes): licencia de uso otorgada al cliente. Propiedad intelectual de MetodologIA. IAC opera bajo licencia de uso.
- **Artefactos producidos por el participante en sesion:** propiedad del participante.
- **Modificacion/redistribucion:** el cliente puede usar internamente. No puede revender ni publicar sin autorizacion escrita.

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo concreto | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | Aprender haciendo | Cada modulo tiene practica guiada sobre caso practico real | Entregable verificable por modulo |
| 2 | Progresion estructurada | Fundamentos (M1-4) -> Profundizacion (M5-8) -> Integracion (M9) | Gate de avance: no se avanza sin entregable anterior |
| 3 | Contextualizacion al sector | Ejemplos, casos, ejercicios y prompts ajustados al sector/nicho del cliente | Brief de contextualizacion completado pre-sesion |
| 4 | Entregables tangibles | 1 playbook por modulo + proyecto final; el participante se lleva artefactos desde el dia uno | Checklist de entregables al cierre |
| 5 | Multi-herramienta | Acceso guiado a ChatGPT, Gemini y Claude; uso estrategico segun caso de uso | Participante usa al menos 2 motores de IA durante el bootcamp |

**Regla de calidad:** si el tiempo aprieta, se recorta explicacion, nunca practica ni documentacion.

**Regla de facilitacion:** el facilitador co-crea; no dicta. Si el participante no participa activamente, el facilitador pausa y reencuadra antes de continuar.

---

## 9) Prerrequisitos y verificacion 48h

### 9.1 Prerrequisitos tecnicos (minimos)
| Requisito | Especificacion minima | Alternativa si no cumple |
|---|---|---|
| Computador | Portatil/escritorio con navegador moderno (Chrome 120+, Firefox 121+, Safari 17+, Edge 120+) | No se acepta movil para practica |
| Internet | Estable, minimo 5 Mbps, suficiente para video con camara | Solo audio + memorias post-sesion |
| Camara/microfono | Funcionales | Solo audio |
| Motor IA | Cuenta activa verificada en ChatGPT, Gemini o Claude (version gratuita es suficiente) | Caso de ejemplo sin IA + guia para replicar `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]` |

### 9.2 Prerrequisitos de habilidad (minimos)
- Copiar/pegar, abrir pestanas, compartir pantalla.
- Formular preguntas simples y ejecutar instrucciones paso a paso.
- No se requiere experiencia previa con IA (Modulo 0 nivela). `[EVIDENCIA: 2_bootcamp-introduccion-ia-generativa-metodologia-v2-iac-v2-mejorada.html]`
- **Prueba de verificacion:** ejecutar un prompt simple 48h antes (Anexo A, seccion A8).

### 9.3 Protocolos de contingencia
| Situacion | Accion inmediata | Prevencion |
|---|---|---|
| Sin acceso a IA | Practica con caso de ejemplo + guia post-sesion para replicar | Checklist 48h con verificacion de login |
| Brecha de habilidad severa | Observador activo con tarea de documentacion; o reprogramacion | Pre-screening en brief; Modulo 0 |
| Conexion inestable | Priorizar audio + entregar memorias + marcar tareas para replicar | Recomendacion de red estable en checklist |
| Movil en vez de computador | No puede hacer practica; entra como oyente o reprograma | Convocatoria exige computador |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
La contextualizacion esta **incluida sin recargo** y es altamente recomendada. Ajusta ejemplos, casos, ejercicios y artefactos al sector/nicho/entorno del cliente. `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]`

### 10.2 Lead time
| Tipo | Lead time minimo | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 3 dias habiles | Se ejecuta con casos genericos |
| Con contextualizacion | >=3 dias habiles entre brief completo y ejecucion | Si el brief llega tarde, se ejecuta generico + se entregan ajustes post-sesion |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en la primera conversacion (reunion de diagnostico de 1-2 horas) y se confirma por escrito. Un brief incompleto no bloquea la ejecucion pero degrada la calidad de contextualizacion. `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]`

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

### 11.2 Tamano maximo + escalamiento
| Escenario | Participantes | Facilitadores | Costo |
|---|---|---|---|
| Estandar | 1-20 | 1 | COP 12.000.000 (precio base) |
| Cofacilitacion | 21-40 | 2 | +50% `[SUPUESTO: politica estandar | validar con JM]` |
| 2 ejecuciones | 21+ (dividido) | 1 por ejecucion | -15% en segunda ejecucion `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md -- descuento 15% por repeticion]` |
| Recomendacion intima | 5-10 | 1 | Precio base |

### 11.3 SLA de soporte
| Canal | Tiempo de respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion |
| WhatsApp | **<=2h habiles** | L-V 9:00-16:00 COT | Dudas urgentes, coordinacion |
| Embajador | Canal dedicado | Segun disponibilidad | Coordinacion integral |

### 11.4 Fuera de alcance del soporte
Consultoria personalizada, ejecucion de tareas del cliente, soporte tecnico de herramientas de terceros (motor IA, N8n, gestor de tareas del cliente).

---

## 12) Politicas comerciales

### 12.1 Precios (canonicos)
| Segmento | Precio | Condicion | Costo por participante efectivo |
|---|---|---|---|
| **B2C** | No aplica | -- | -- `[POR CONFIRMAR: JM, 2026-04-15]` |
| **B2B** | **COP 12.000.000** | Por ciclo (hasta 20 pax) | COP 600.000 `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP 4.000 = USD 1 | Politica comercial, no tasa de mercado | -- `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |

**Vigencia:** hasta 2026-12-31 o hasta nueva version del canonico. `[SUPUESTO: vigencia estimada | validar con JM]`

### 12.2 Pago (regla para Bootcamps)
Pago unico al inicio (antes de la primera sesion). `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]`

**Mora:** notificacion formal -> ventana de regularizacion (5 dias habiles) -> suspension de accesos (repositorio, grabaciones, soporte, creditos). Recargos conforme a legislacion vigente.

**Acuerdos a medida:** posibles por escrito (via embajador) antes del inicio. No se aceptan acuerdos verbales.

### 12.3 Impuestos
- Persona natural / pasarela en linea: impuestos **incluidos**.
- Facturacion corporativa: impuestos **discriminados** segun normativa.
- El precio canonico se entiende **antes de impuestos** para empresas.

### 12.4 Reprogramacion / cancelacion / no-show / fuerza mayor
| Situacion | Condicion | Costo | Plazo de aviso |
|---|---|---|---|
| 1a reprogramacion | Justa causa | Sin costo | >=48h antes |
| 2a reprogramacion en adelante | Cualquier causa | COP 1.500.000 `[SUPUESTO: fee estimado | validar con JM]` | >=48h antes |
| No-show | Sin aviso | = 2a reprogramacion (fee) | -- |
| Quorum empresarial | >=2 asistentes activos | Se ejecuta normalmente | -- |
| Sin quorum por causa del cliente | <2 asistentes | Fee de no-show | -- |
| Fuerza mayor (cualquier parte) | Irresistible e imprevisible | Sin costo | Primera fecha en 3 dias habiles |
| Cancelacion total pre-inicio | Antes de pago | Sin costo | -- |
| Cancelacion total post-inicio | Despues de ejecucion | No aplica devolucion (ver garantia) | -- |

### 12.5 Garantia
- Si el cliente no esta satisfecho con la ejecucion, se ofrece una sesion complementaria de ajuste (hasta 2h) sin costo adicional. `[SUPUESTO: politica estandar | validar con JM]`
- **Condiciones de activacion:** solicitar dentro de los 5 dias habiles post-cierre, por escrito al embajador.
- **Proceso de devolucion:** no aplica devolucion monetaria; se ofrece sesion de ajuste.
- **Limite etico:** no se garantizan resultados financieros, de carrera, ni de productividad automatica.

### 12.6 Credito educativo (puente a siguiente servicio)
| Campo | Especificacion |
|---|---|
| Ventana | 6 meses desde la compra `[SUPUESTO: politica estandar | validar con JM]` |
| Monto | 100% de lo efectivamente pagado |
| Acumulable | Si, con promociones y otros creditos |
| Descuento maximo | = gratis (no hay saldos negativos ni devolucion de diferencia) |
| Aplicacion | Se descuenta de la primera cuota del servicio destino |
| Activacion | Contactar canales oficiales + solicitar cotizacion con referencia del servicio fuente |
| Transferibilidad | Transferible a miembros del mismo equipo/empresa `[SUPUESTO: politica estandar | validar con JM]` |

---

## 13) Metricas de exito

### 13.1 North Star (metrica unica de impacto)
- **Metrica:** Porcentaje de participantes que reportan ahorro de >=2 horas/semana en productividad con IA, 30 dias post-bootcamp.
- **Horizonte de medicion:** 30 dias post-sesion.
- **Nota etica:** es meta de adopcion; logro depende del contexto, consistencia y aplicacion del participante. MetodologIA/IAC no se compromete a valores especificos.

### 13.2 Leading indicators (comportamiento -- medibles en semanas 1-3)
| Indicador | Unidad | Frecuencia de medicion | Fuente |
|---|---|---|---|
| # tareas resueltas con IA / semana | numero | Semanal | Auto-reporte |
| Uso activo del asistente de IA personalizado | si/no | Semanal | Auto-reporte |
| # prompts estructurados utilizados en trabajo diario | numero | Semanal | Auto-reporte |

### 13.3 Lagging indicators (resultado -- medibles en semanas 3-12)
| Indicador | Unidad | Frecuencia | Fuente |
|---|---|---|---|
| Ahorro de tiempo en tareas repetitivas | horas/semana | Mensual | Auto-reporte |
| # procesos automatizados con agentes/workflows | numero | Mensual | Auto-reporte |
| Adopcion de IA en el equipo (% de miembros usando IA regularmente) | % | Mensual | Auto-reporte del lider |

### 13.4 Responsabilidad de medicion
Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. MetodologIA/IAC entrega herramientas y plantillas de seguimiento dentro de los materiales del servicio.

---

## 14) Casos borde (adversarial -- decisiones sin improvisacion)

| # | Caso borde | Senal temprana | Decision en vivo | Mitigacion previa | Trade-off aceptado |
|---|---|---|---|---|---|
| 1 | Participante sin experiencia previa con IA | Checklist 48h o Modulo 0 | Modulo 0 obligatorio; buddy con experiencia; plantillas copiables | Pre-screening en brief | Se pierde velocidad del grupo si muchos necesitan nivelacion |
| 2 | Motor IA bloqueado por TI | Checklist 48h falla | Usar motor alternativo permitido; especificacion equivalente | Validar politicas TI en brief | Se pierde fluidez si el motor alternativo es limitado |
| 3 | Datos sensibles en practica | Participante pega info real | Detener actividad, anonimizar o caso sintetico | Reglas de datos en checklist + advertencia al inicio | Se pierde realismo del ejercicio |
| 4 | No-show / quorum bajo | <2 conectados al inicio | Quorum minimo >=2; si no, fee + reagendar | Confirmacion 24h antes + owners asignados | Se pierde la sesion para los ausentes |
| 5 | Participante no logra crear asistente en Modulo 4 | Practica se extiende mas de lo previsto | Facilitador co-crea 1:1; si persiste, entregar asistente pre-configurado | Verificar habilidades en checklist 48h | Se pierde autonomia del participante en esa habilidad |
| 6 | N8n/herramienta de automatizacion inaccesible | TI bloquea acceso a N8n | Demostrar con caso de ejemplo; entregar guia para replicar post-sesion | Validar acceso en brief | Se pierde practica en vivo de automatizacion |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Siguiente servicio | Tipo | Duracion | Credito aplicable | Conexion tematica |
|---|---|---|---|---|---|
| Transformar proceso comercial con IA | Bootcamp Gestion Comercial Estrategica y Digital | Bootcamp | 18h | 100% del valor de este servicio | Aplica IA generativa especificamente al proceso de ventas `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| Competencias digitales universales para el equipo | Programa Competencias Digitales Universales | Programa | 10 semanas | 100% del valor de este servicio | Profundiza competencias digitales en un programa extendido `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| Liderazgo digital para mandos medios/altos | Programa Liderazgo Digital con IA | Programa | 12 semanas | 100% del valor de este servicio | Escala la vision digital a nivel estrategico `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |
| Transformacion digital completa (Digital Champions) | Programa Digital Champions | Programa | 16 semanas | 100% del valor de este servicio | Programa integral que consolida todas las competencias `[EVIDENCIA: PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md]` |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos minimos listos, expectativas alineadas.
> **Envio:** 48h antes de la sesion. Confirmacion requerida por cada participante.
> **Consecuencia de no completar:** ver protocolos de contingencia (Sec 9.3).

### A1. Confirmacion de modalidad
- [ ] Confirmo fecha/hora y disponibilidad completa para las sesiones del bootcamp sin interrupciones.
- [ ] Confirmo participacion desde **computador** (no movil ni tablet).

### A2. Motor de IA
- [ ] Motor elegido: ( ) ChatGPT  ( ) Gemini  ( ) Claude  ( ) Otro: __________
- [ ] Tengo cuenta activa y **puedo iniciar sesion ahora**.
- [ ] Puedo crear conversacion nueva y escribir instruccion simple.
- [ ] Mi empresa/TI **no bloquea** este motor. Si lo bloquea, avisar al embajador para alternativa.

### A3. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes, minimo 5 Mbps).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome 120+, Edge 120+, Firefox 121+ o Safari 17+).

### A4. Herramientas de trabajo
- [ ] Acceso a mi calendario digital (Google Calendar / Outlook / otro).
- [ ] Acceso a mi sistema de tareas/notas (Notion / Todoist / Google Docs / otro).

### A5. Habilidad minima (auto-verificacion)
- [ ] Se copiar/pegar texto.
- [ ] Se abrir varias pestanas del navegador.
- [ ] Se compartir pantalla si me lo piden.
- [ ] Se nombrar y guardar conversaciones en mi motor de IA.

### A6. Insumos preparados (sin datos sensibles)
- [ ] Traigo un caso de uso o tarea repetitiva de mi trabajo que quiero mejorar con IA (anonimizado si contiene datos sensibles).
- [ ] Si no tengo insumo propio, usare el caso de ejemplo que provee el facilitador.

### A7. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales ni credenciales.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A8. Mini-prueba (verificacion funcional)
- [ ] Abri mi motor de IA.
- [ ] Escribi: *"Inicia una conversacion llamada 'Practica IA Generativa' y dime 3 usos seguros de IA para productividad."*
- [ ] Obtuve respuesta funcional.

### A9. Si algo falla
- Si no tengo cuenta o permisos: aviso al embajador **antes** de la sesion.
- Si me conectare desde movil: solicito reprogramacion.
- Si mi internet es inestable: preparo alternativa de audio + solicito memorias.

---

## Anexo B -- Brief estandar (contextualizacion)

> Se levanta en primera conversacion (reunion de diagnostico de 1-2 horas) y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion.

### B1. Identidad del cliente
- Organizacion / iniciativa:
- Segmento: ( ) Personas/small business  ( ) Empresa  ( ) Partner/B2B2B
- Industria/nicho/entorno:
- Objetivo del bootcamp (1 frase):

### B2. Participantes
- # participantes estimado:
- Roles (lista):
- Nivel de madurez digital (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Experiencia previa con IA: ( ) Ninguna  ( ) Basica  ( ) Intermedia
- Zonas horarias (si aplica):

### B3. Restricciones y politicas
- Motores IA permitidos por TI:
- Herramientas bloqueadas: (detalle)
- Acceso a N8n u herramientas de automatizacion: ( ) Si  ( ) No  ( ) No se
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:

### B4. Casos de uso / retos de productividad
- Principales tareas repetitivas del equipo:
- Areas donde se busca mayor productividad:
- Herramientas de productividad actuales:
- Procesos que se podrian automatizar:

### B5. Herramientas actuales del participante
- Calendario:
- Tareas/proyectos:
- Notas/Docs:
- Comunicacion (Slack/Teams/otro):

### B6. Criterios de exito (medibles)
- Que tiene que pasar en 30 dias para decir "valio la pena":
- Senal de adopcion minima (1 habito verificable):

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Formato: ( ) 2 dias intensivos (recomendado)  ( ) 3 semanas (9 sesiones de 2h)
- Ventana de fechas preferidas:
- Plataforma de videoconferencia preferida:
- Contacto embajador (nombre/WhatsApp/email):
- Contacto TI (si aplica, para validar motores y acceso a herramientas):

---

## Registro de versiones

| Version | Fecha | Autor | Cambios clave | Aprobado por |
|---------|-------|-------|---------------|-------------|
| v1.0 | 2026-03-29 | JM (generado con asistencia de IA) | Creacion inicial del documento canonico a partir de HTML de servicio IAC y propuesta comercial agrupadora | JM `[POR CONFIRMAR: JM, 2026-04-15]` |
