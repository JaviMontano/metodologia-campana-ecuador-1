# Bootcamp Ofimatica con IA (Google Workspace + Gemini)

**Documento canonico de servicio** — v1.0 (2026-03-29)

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre derivada y este canonico, **este canonico manda**.
> **Ruta oficial:** Ruta de **(R)Evolucion Empresarial** (concepto: **Soberania Digital**)
> **Marca:** MetodologIA
> **Clasificacion:** Publico (precios incluidos)

### Convenciones de trazabilidad
- `[EVIDENCIA: fuente]` — dato verificado con localizador.
- `[SUPUESTO: riesgo | plan de validacion]` — propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha]` — informacion faltante.
- `[DECISION: fecha, quien, alternativa descartada]` — trade-off resuelto.

---

## 0) Ficha rapida (decision en 60s)

| Atributo | Especificacion |
|---|---|
| **Nombre canonico** | **Bootcamp Ofimatica con IA (Google Workspace + Gemini)** |
| **Slug** | `bootcamp-ofimatica-google` |
| **SKUs** | Bootcamp Empresas (Google) / Bootcamp Personas (Google). Variante de entorno: existe `bootcamp-ofimatica-microsoft` con contenido equivalente en Microsoft 365 + Copilot. |
| **Tipo** | Bootcamp de profundizacion (instalacion sistematica de capacidades ofimaticas amplificadas con IA) |
| **Categoria comercial** | Profundizacion — segundo nivel en la ruta de (R)Evolucion Empresarial |
| **Ruta oficial** | (R)Evolucion Empresarial |
| **Duracion total** | **18 horas** nucleo (8 modulos + cierre) + **2 horas** nivelacion opcional = **20 horas** maximo. Formato: 2 sesiones/semana de 2h cada una. `[EVIDENCIA: bootcamp-ofimatica-google.html, hero section]` |
| **Modalidad** | Virtual sincronico en vivo (default). Presencial a solicitud (logistica y viaticos aparte). |
| **Mecanismo didactico** | Demo -> Practica guiada con caso real -> Verificacion por evidencia |
| **Proporcion didactica** | 20% demo / 70% practica guiada / 10% verificacion `[SUPUESTO: proporcion alineada con Workshop piloto | validar en primera ejecucion]` |
| **Motor IA** | **Google Gemini** (motor primario; integrado nativamente en Google Workspace). Alternativa: motor permitido por TI para modulos conceptuales. `[DECISION: 2026-03, JM, descartada: motor agnostico — este Bootcamp es especifico de Google Workspace, el motor debe ser Gemini para coherencia con el entorno]` |
| **Entregables core** | 50 prompts ofimatica + 1 playbook implementacion + memorias + grabaciones + proyecto final + certificado participacion |
| **Certificacion** | **Participacion** (todos) + **Competencia** (condicionada a proyecto final aprobado por rubrica) |
| **Soporte / SLA** | Email D+1 habil / WhatsApp <=2h (9-16h COT) / Embajador asignado |
| **Repositorio** | Google Drive, **30 dias** post-cierre. Backup es responsabilidad del cliente. |
| **Campus / LMS** | **Incluido 3 meses** post-cierre (acceso a grabaciones, materiales, playbook). Costo de continuidad post-periodo: por definir. `[POR CONFIRMAR: JM, 2026-04-15 — definir costo de extension LMS]` |
| **Participantes** | Recomendado: **5-15**. Estandar: **20** (1 facilitador). Maximo: **40** (2 facilitadores). |
| **Precio B2C** | **COP 800.000** por persona `[SUPUESTO: precio B2C no publicado en HTML | validar con JM antes de publicacion]` |
| **Precio B2B** | **COP 12.000.000** por ciclo (hasta 20 pax) `[EVIDENCIA: bootcamp-ofimatica-google.html, seccion pricing + bootcamps_data_reference.md]` |
| **Costo efectivo por persona** | B2B: COP 600.000/persona en grupo de 20. B2C: COP 800.000 fijo. |
| **Credito desde** | **Workshop De Ocupado a Productivo**: 100%, 6 meses, acumulable, intransferible |
| **Credito hacia** | Aplicable al **Programa Digital Champions** u otro servicio de profundizacion. `[POR CONFIRMAR: JM, 2026-04-15 — definir % y ventana de credito hacia siguiente servicio]` |
| **Impuestos** | Online: incluidos (pasarela). Corporativo: discriminados (factura). |
| **Vigencia de precios** | Hasta nueva version del canonico |

**Trade-off de diseno:** priorizamos dominio del entorno Google Workspace completo sobre profundidad en una sola herramienta. El objetivo es que el participante salga con un ecosistema ofimatico integrado y amplificado con Gemini, no con maestria aislada en Docs o Sheets. Quien necesita profundidad especifica en una herramienta puede solicitar sesion custom. `[DECISION: 2026-03, JM, descartada: bootcamp especializado por herramienta (ej. solo Sheets) — fragmentaba el valor y no instalaba el ecosistema completo]`

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica — usar textual en web/contrato)
> Bootcamp intensivo de 18 horas para dominar la productividad ofimatica integrando Google Gemini en Google Docs, Sheets, Slides, Gmail, Keep y herramientas de colaboracion de Google Workspace, produciendo entregables reales y un proyecto final aplicado al contexto del participante.

### 1.2 Que es (y por que funciona)
- **Instalacion sistematica de capacidades**, no transferencia teorica: cada modulo produce un entregable verificable que el participante usa desde el dia siguiente en su entorno Google Workspace. `[EVIDENCIA: estructura modular con entregable por modulo, bootcamp-ofimatica-google.html]`
- Cubre el **ecosistema completo** de Google Workspace (Docs, Sheets, Slides, Gmail, Keep, Drive, Chat, Sites, Tasks) con Gemini como motor de amplificacion integrado, eliminando la friccion de herramientas aisladas.
- El 70% del tiempo es practica guiada con casos reales del participante. La verificacion al cierre de cada modulo asegura avance comprobable.

**Diferenciador clave:** este Bootcamp NO ensena a crear asistentes personalizados de IA. Se enfoca en usar Google Gemini **integrado nativamente** en cada aplicacion de Google Workspace. El valor esta en la sinergia del ecosistema sin friccion, no en herramientas de IA separadas. `[EVIDENCIA: bootcamps_data_reference.md, seccion "Diferencia Clave"]`

### 1.3 Que NO es (expectativas que deben cortarse)
| Expectativa erronea | Realidad | Como se detecta temprano |
|---|---|---|
| "Es un curso de programacion" | No. Todo se hace escribiendo prompts en espanol dentro de Google Workspace. No se requiere codigo. | Pregunta de cualificacion: "tu equipo programa?" |
| "Me van a ensenar a crear asistentes de IA" | No. El Bootcamp usa Gemini integrado en Google Apps, no asistentes independientes. | Brief: aclarar diferencia asistentes vs IA integrada |
| "Sirve para cualquier suite ofimatica" | No. Este Bootcamp es especifico de Google Workspace + Gemini. Para Microsoft 365 + Copilot existe la version Microsoft. | Pregunta: "que suite usa tu organizacion?" |
| "Con 18 horas sere experto en todo" | No. Se instala un ecosistema funcional. La maestria viene con practica sostenida post-Bootcamp. | Expectativas en kickoff |
| "Reemplaza consultoria de transformacion" | No. Para transformacion organizacional: Programa Digital Champions. | Pregunta: "necesitas cambio cultural o capacitacion tecnica?" |
| "Funciona sin cuenta Google Workspace" | No. Se requiere cuenta Google Workspace activa con acceso a Gemini. Cuentas gratuitas de Gmail pueden no tener todas las funciones. | Checklist 48h |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Workshop De Ocupado a Productivo, 3h] --100% credito, 6 meses-->
  [BOOTCAMP OFIMATICA CON IA (Google), 18h] --credito por definir-->
    [Programa Digital Champions, 16 sem]
```

1. **Prerequisito sugerido:** Workshop De Ocupado a Productivo (punto de entrada; no obligatorio pero altamente recomendado)
2. **Este servicio:** Bootcamp Ofimatica con IA — Google Workspace + Gemini (18h)
3. **Siguiente paso natural:** Programa Digital Champions (transformacion organizacional) o Bootcamps complementarios (Trabajar Amplificado, GerencIA de Proyectos, Ventas Amplificadas)
4. **Ruta completa:** Workshop -> Bootcamp Ofimatica -> Bootcamp Trabajar Amplificado -> EstrategIA -> Programa

**Logica de credito entrante:** el Workshop funciona como "prueba de concepto". El credito del 100% elimina la barrera de "ya pague por algo similar" y convierte el Workshop en mobilization fee del Bootcamp. `[DECISION: 2025-10, JM, descartada: credito parcial 50% — no movia la conversion suficientemente]`

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Verificacion | Fuente | Peso |
|---|---|---|---|
| Equipo usa Google Workspace como suite principal | "Que suite ofimatica usan?" | Brief / conversacion | Critica (sin esto, no funciona) |
| Productividad ofimatica fragmentada: cada quien usa las herramientas a su manera | "Tienen estandares de uso de Docs/Sheets/Slides?" | Brief | Alta |
| Quieren integrar IA sin cambiar de herramientas | "Buscan adoptar IA dentro de su entorno actual?" | Conversacion | Alta |
| Equipo de 5-20 personas con rol ofimatico diario | "Cuantas personas y que hacen en su dia a dia?" | Brief | Alta |
| Dispuestos a dedicar 18h distribuidas en varias semanas | "Pueden bloquear 2h dos veces por semana durante 5 semanas?" | Confirmacion | Critica |

### 2.2 Anti-fit (rechazar con tacto)
| Condicion | Por que no funciona | Alternativa |
|---|---|---|
| Usan Microsoft 365, no Google Workspace | El Bootcamp es especifico de Google + Gemini; las integraciones no aplican | Bootcamp Ofimatica Microsoft (version Microsoft 365 + Copilot) |
| Buscan crear asistentes IA personalizados | Este Bootcamp usa Gemini integrado, no asistentes independientes | Bootcamp Trabajar Amplificado (incluye creacion de asistentes) |
| No tienen cuenta Google Workspace con Gemini habilitado | Sin Gemini, el 80% del Bootcamp pierde su motor | Validar con TI; si no es posible: no vender este Bootcamp |
| Equipo sin habilidades ofimaticas basicas | El Bootcamp asume manejo basico de Google Workspace | Modulo 0 (Nivelacion) como prerequisito obligatorio + evaluacion previa |
| Buscan transformacion organizacional, no capacitacion | El Bootcamp instala capacidades; no transforma cultura | Programa Digital Champions |
| No pueden dedicar 18h distribuidas | Sin asistencia sostenida, los modulos pierden continuidad | Reducir a modulos especificos (servicio custom) |

### 2.3 Preguntas de cualificacion (script de venta)
1. **Detecta dolor real:** "Cuanto tiempo pierde tu equipo en tareas ofimaticas repetitivas (documentos, reportes, emails, presentaciones)?" — Si la respuesta es vaga o "no mucho", el dolor no es suficiente. Ofrecer recurso gratuito. `[SUPUESTO: conversion cae >60% con respuesta vaga | validar con datos CRM Q2 2026]`
2. **Detecta entorno:** "Tu equipo trabaja con Google Workspace y tienen Gemini habilitado?" — Sin esto, redirigir a version Microsoft o resolver con TI primero.
3. **Detecta decision-maker:** "Quien aprueba la inversion y el tiempo de los participantes?" — Si es un delegado sin autoridad, pedir acceso al decision-maker.
4. **Detecta viabilidad logistica:** "Pueden bloquear 2 horas dos veces por semana durante 5 semanas para el equipo?" — Sin este compromiso temporal, no vender.

**Regla de corte:** si la respuesta a la pregunta 1 es vaga o a la pregunta 2 es "no", la probabilidad de cierre cae drasticamente. Ofrecer recurso gratuito o redirigir.

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lenguaje del cliente)
- "Cada quien usa Google Docs/Sheets a su manera y no hay estandar."
- "Gemini esta habilitado pero nadie lo usa; no sabemos como sacarle provecho."
- "Los documentos y presentaciones nos toman horas y la calidad es inconsistente."
- "El email nos consume; no hay gestion inteligente de correo ni de tareas."
- "Queremos integrar IA pero sin herramientas externas ni complejidad tecnica."

### 3.2 Causas raiz (analisis del consultor)
| Causa | Efecto directo | Impacto en negocio |
|---|---|---|
| Uso fragmentado de Google Workspace | Cada persona reinventa flujos; no hay ecosistema integrado | Duplicacion de esfuerzo, inconsistencia de calidad, perdida de tiempo |
| Gemini habilitado pero sin adopcion | Inversion en licencia sin retorno | ROI negativo de la suscripcion a Google Workspace con Gemini |
| Ausencia de prompts y flujos estandarizados | Cada tarea ofimatica empieza de cero | Tiempo desperdiciado en tareas repetitivas que Gemini podria amplificar |
| Falta de automatizaciones entre apps | Procesos manuales entre Docs, Sheets, Gmail, etc. | Fricciones operativas, errores humanos, cuello de botella |

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto estimado |
|---|---|---|
| 30 dias | Gemini sigue sin usarse; equipo continua con flujos manuales | ~8h/semana/equipo desperdiciadas en tareas ofimaticas que Gemini podria amplificar `[SUPUESTO: basado en meta North Star | validar con data post-bootcamp]` |
| 90 dias | Brecha de productividad crece vs equipos que ya adoptaron IA integrada | Perdida competitiva; equipo se frustra con herramientas que "no sirven" |
| 12 meses | Riesgo de migracion a otra suite por percepcion de que Google Workspace "no alcanza" | Costos de cambio de plataforma + periodo de improductividad |

### 3.4 Limites eticos (no negociables)
- **Human-in-the-loop:** Gemini propone; el humano valida y decide. Sin excepciones.
- No se garantizan ahorros especificos de tiempo ni resultados financieros; se instala capacidad sistematica y se guia adopcion.
- No se interviene en decisiones legales, financieras, medicas ni de carrera criticas.
- No se generan contenidos que suplanten identidad, violen copyright o manipulen audiencias.
- El facilitador no emite juicios sobre la calidad del trabajo del participante; facilita metodo.

### 3.5 Reglas de datos (no negociables)
| Categoria | Prohibido | Permitido | Ejemplo |
|---|---|---|---|
| Datos personales (PII) | Nombres reales, cedulas, telefono, email de terceros | Anonimizados: "Cliente A", "Proyecto X" | "Juan Perez" -> "Participante 1" |
| Datos financieros | Cifras reales de ingresos, costos, margenes | Ordenes de magnitud o ficticios | "$500M" -> "rango alto" |
| Secretos industriales | Formulas, algoritmos, planes no publicos | Abstraccion del problema sin detalle propietario | "Nuestro proceso de..." -> "un proceso de manufactura" |
| Credenciales | Passwords, API keys, tokens | Nunca. Sin alternativa. | N/A |

**Escalamiento:** si un participante insiste en usar datos sensibles, el facilitador pausa la actividad y escala al embajador. No se negocia.

---

## 4) Alcance y fuera de alcance

### 4.1 Dentro del alcance (In-scope)
| # | Actividad/Entregable | Criterio de "listo" | Quien lo produce |
|---|---|---|---|
| 1 | Nivelacion en Gemini y Google Workspace (Mod 0, opcional) | Participante demuestra uso basico de Gemini en al menos 1 app | Facilitador (guiado) |
| 2 | Sistema de documentos profesionales con Docs + Gemini | Documento profesional completo + plantillas inteligentes | Participante (guiado) |
| 3 | Sistema de analisis de datos con Sheets + Gemini | Dashboard interactivo + analisis de datos completo | Participante (guiado) |
| 4 | Sistema de presentaciones con Slides + Gemini | Presentacion profesional completa + plantillas | Participante (guiado) |
| 5 | Sistema de gestion de email con Gmail + Gemini | Sistema de gestion de email + plantillas inteligentes | Participante (guiado) |
| 6 | Sistema de notas inteligentes con Keep + Gemini | Sistema de notas organizado + plantillas de organizacion | Participante (guiado) |
| 7 | Automatizaciones y flujos de trabajo con Gemini | Sistema de automatizaciones + flujos integrados | Participante (guiado) |
| 8 | Ecosistema de colaboracion empresarial (Drive, Chat, Sites, Tasks) | Ecosistema funcional: espacios Chat + sitios Drive + proyectos Tasks | Participante (guiado) |
| 9 | Proyecto final integrador | Proyecto aplicado al contexto real del participante | Participante (guiado) |
| 10 | Entrega de materiales (50 prompts, playbook, memorias, grabaciones) | Acceso verificado al repositorio | Facilitador/Embajador |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que | Donde se consigue |
|---|---|---|
| Creacion de asistentes IA personalizados | Este Bootcamp usa Gemini integrado, no asistentes independientes | Bootcamp Trabajar Amplificado |
| Desarrollo de Apps Script / APIs / integraciones tecnicas | Fuera de expertise; cambia tipo de servicio | Sofka Technologies / proveedor tech |
| Consultoria de negocio / estrategia | Cambia naturaleza del servicio | EstrategIA Empresarial/Personal |
| Ejecucion de tareas del participante | Crea dependencia; contradice modelo de instalacion | Consultoria done-for-you (fuera de portafolio) |
| Soporte tecnico de Google Workspace (admin, licencias, permisos) | Fuera de control de MetodologIA | Admin TI del cliente o Google Support |
| Configuracion de cuentas Google Workspace / habilitacion de Gemini | Requiere acceso de administrador del dominio | Admin TI del cliente |
| Decisiones legales/contractuales | Requiere abogado | Asesor legal del cliente |

### 4.3 Zona gris (solicitudes frecuentes — decision caso a caso)
| Solicitud | Decision default | Condicion para incluir |
|---|---|---|
| "Adapten los prompts a nuestro sector" | Incluido en contextualizacion | Brief completo >= 3 dias antes |
| "Necesitamos modulos adicionales sobre Apps Script" | Fuera de alcance | Cotizacion custom separada |
| "Pueden hacer seguimiento post-Bootcamp?" | Fuera de alcance estandar | Si contratan Programa Digital Champions: incluye. Si no: soporte 30 dias |
| "Queremos repetir con otro grupo" | Nuevo ciclo | Segundo ciclo con -20% si se contrata simultaneamente |
| "Queremos version hibrida (Google + Microsoft)" | Fuera de alcance | Cotizacion custom: 2 bootcamps paralelos o version custom |

---

## 5) Arquitectura del servicio (18 horas + 2h nivelacion opcional)

### 5.1 Principio rector
**Cada modulo produce un entregable verificable** y registra: sistema funcional construido, prompts utilizados, entregable tangible y criterio de verificacion. No se avanza sin verificar el anterior.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta exposicion, **nunca practica ni documentacion**. El participante debe irse con sistemas funcionales, no con apuntes.

### 5.2 Diseno pedagogico
- **Proporcion objetivo:** 20% demo / 70% practica guiada / 10% verificacion.
- **Gestion de niveles:** plantillas copiables + paso a paso (basico); retos de adaptacion con restricciones contextuales (avanzado).
- **Criterio de avance:** no se avanza al siguiente modulo sin verificar el entregable del anterior. `[DECISION: 2025-12, JM, alternativa descartada: avance libre sin gate — generaba deuda de entregables al final]`
- **Formato de sesion:** 2 sesiones/semana de 2 horas cada una. Teoria aplicada con casos practicos reales de Google Workspace + Gemini. `[EVIDENCIA: bootcamp-ofimatica-google.html, seccion formato]`

### 5.3 Mapa de modulos

| # | Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|--------|--------|-------------------|----------------------|--------------------|----|
| 0 | Nivelacion: Lenguaje Comun y Fundamentos de Gemini | 120 min (opcional) | Establecer vocabulario tecnico + fundamentos de Gemini integrado | Vocabulario tecnico basico + orientacion del programa + Gemini funcional | Participante ejecuta prompt basico en Gemini dentro de Google Workspace | Ninguna |
| 1 | Fundamentos de Ofimatica con IA | 120 min | Dominar fundamentos de Google Workspace + Gemini + NotebookLM | Documento profesional completo + plantillas inteligentes + documento NotebookLM | Participante demuestra creacion de documento con asistencia de Gemini y contenido en NotebookLM | Mod 0 (si aplica) |
| 2 | Documentos con IA (Docs + Gemini) | 120 min | Crear, editar y optimizar documentos profesionales con Gemini | Documento profesional completo + plantillas inteligentes de documentos | Documento entregado con estructura profesional y asistencia de Gemini verificable | Mod 1 |
| 3 | Hojas de Calculo con IA (Sheets + Gemini) | 120 min | Analizar datos, formulas y automatizaciones avanzadas con Gemini | Analisis de datos completo + dashboard interactivo | Dashboard funcional con formulas y analisis generados con asistencia de Gemini | Mod 2 |
| 4 | Presentaciones con IA (Slides + Gemini) | 120 min | Disenar presentaciones profesionales con contenido y narrativa asistidos por Gemini | Presentacion profesional completa + plantillas inteligentes | Presentacion entregada con contenido generado y diseno asistido por Gemini | Mod 3 |
| 5 | Email con IA (Gmail + Gemini) | 120 min | Gestionar correo, agenda y tareas eficientemente con Gemini | Sistema de gestion de email + plantillas inteligentes de correo | Sistema de reglas/etiquetas + plantillas funcionales con asistencia de Gemini | Mod 4 |
| 6 | Notas y Organizacion con IA (Keep + Gemini) | 120 min | Organizar informacion y gestionar conocimiento con notas inteligentes | Sistema de notas inteligentes + plantillas de organizacion | Sistema de notas categorizado y funcional con asistencia de Gemini | Mod 5 |
| 7 | Automatizaciones y Flujos de Trabajo | 120 min | Crear flujos de trabajo integrados y optimizar procesos con Gemini | Sistema de automatizaciones + flujos de trabajo integrados | Al menos 1 automatizacion funcional entre 2+ apps de Google Workspace | Mod 6 |
| 8 | Colaboracion en Google (Drive + Chat + Sites + Tasks + NotebookLM) | 120 min | Construir ecosistema de colaboracion empresarial | Espacios Chat + sitios Drive + proyectos Tasks + NotebookLM colaborativo | Ecosistema de colaboracion funcional con al menos 3 herramientas integradas | Mod 7 |
| 9 | Sesion de Cierre | 60 min | Socializar proyectos finales + cierre del Bootcamp | Proyecto final presentado + retroalimentacion | Proyecto presentado ante el grupo con retroalimentacion del facilitador | Mod 8 |
| **Total** | | **18h (1080 min) + 2h nivelacion opc.** | | **9 entregables modulares + 1 proyecto final** | | |

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| Gemini no habilitado para participante | Checklist 48h indica restriccion | Escalar a admin TI del cliente; si no se resuelve: participante observa y replica post-sesion con guia | Embajador (pre) + Facilitador (vivo) |
| Grupo >20 sin cofacilitador | Mas de 20 confirmados | Rechazar ejecucion hasta resolver: cofacilitacion o dividir grupo | Embajador |
| Participante sin Google Workspace (usa Gmail gratis) | Se detecta en checklist 48h | Evaluar si funciones de Gemini estan disponibles; si no: observador con guia post | Embajador + Facilitador |
| Participante desde movil | Se conecta sin computador | Observador; no se cuentan sus evidencias para DoD | Facilitador |
| Tiempo aprieta (modulo se extiende) | >5 min de retraso acumulado | Recortar demo del siguiente modulo, proteger practica | Facilitador |
| Participante insiste con datos sensibles | Pega info real en Gemini | Pausa inmediata, anonimizar o sustituir por caso sintetico | Facilitador (escala a Embajador si resiste) |
| Nivel muy heterogeneo | Avanzados terminan rapido, basicos atascados | Reto extra para avanzados; plantilla paso-a-paso para basicos | Facilitador |
| NotebookLM no disponible | Restriccion de TI o region | Sustituir ejercicio NotebookLM por ejercicio equivalente en Docs + Gemini | Facilitador |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
| # | Capacidad | Verificacion en sesion | Verificacion post-sesion (3 semanas) |
|---|---|---|---|
| 1 | Crear documentos profesionales con Gemini en Google Docs | Documento completo + plantillas | Usa Gemini para >= 50% de documentos nuevos |
| 2 | Analizar datos con Gemini en Google Sheets | Dashboard + analisis verificable | Genera reportes de datos con asistencia de Gemini |
| 3 | Disenar presentaciones con Gemini en Google Slides | Presentacion profesional completa | Crea presentaciones con asistencia de Gemini |
| 4 | Gestionar email eficientemente con Gemini en Gmail | Sistema de gestion email funcional | Reduce tiempo de gestion de correo >= 30% |
| 5 | Organizar informacion con Keep + Gemini | Sistema de notas funcional | Mantiene sistema de notas activo |
| 6 | Crear automatizaciones entre apps Google Workspace | Al menos 1 automatizacion funcional | Automatizaciones activas y en uso |
| 7 | Colaborar en ecosistema Google (Drive, Chat, Sites, Tasks) | Ecosistema configurado con 3+ herramientas | Equipo usa ecosistema de colaboracion activamente |
| 8 | Ejecutar prompts efectivos para tareas ofimaticas | Prompts ejecutados con resultado util en sesion | >= 10 prompts usados/semana en trabajo diario |

### 6.2 Definition of Done (criterios de aceptacion)
El Bootcamp se considera **completo y aceptado** si se cumplen **todos**:
| # | Criterio | Verificacion | Responsable |
|---|---|---|---|
| 1 | Asistencia: participante asistio a >= 7 de 10 sesiones (incluyendo cierre) | Registro de asistencia | Embajador |
| 2 | Entregables: >= 7 de 9 entregables modulares producidos | Checklist de entregables por modulo | Facilitador |
| 3 | Proyecto final: presentado y aprobado por rubrica (para certificado de competencia) | Rubrica de evaluacion | Facilitador |
| 4 | Ciclo completo: Demo->Practica->Verificacion ejecutado en todos los modulos asistidos | Observacion del facilitador | Facilitador |
| 5 | Etica respetada: reglas de datos explicadas y cumplidas | Sin incidentes de datos sensibles | Facilitador |
| 6 | Entrega operativa: repositorio accesible + materiales + certificados entregados | Checklist de cierre firmado | Embajador |

### 6.3 Criterios de NO-aceptacion (activan garantia)
- Menos de 5 entregables modulares producidos por causa atribuible a MetodologIA (falla del facilitador, materiales no disponibles, plataforma caida).
- El facilitador no ejecuto el ciclo Demo->Practica->Verificacion (hizo solo demo/charla).
- Repositorio no entregado en 48h post-cierre.
- Sesiones canceladas por MetodologIA sin reprogramacion.

> **Nota:** si los entregables no se produjeron por causa del participante (inasistencia, no participo, no trajo caso), el Bootcamp se considera entregado. La garantia no aplica por inaccion del participante.

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Entrega | Vigencia | PI |
|---|---|---|---|---|---|
| 1 | Bateria de 50 prompts de ofimatica con Gemini | Doc editable | Al inicio del Bootcamp | Permanente (descargable) | Licencia MetodologIA; uso interno |
| 2 | Playbook de implementacion | PDF/HTML interactivo | Al cierre | Permanente (descargable) | Licencia MetodologIA; uso interno |
| 3 | Memorias completas del Bootcamp (slides, notas, ejercicios) | Docs editables en Drive | Al cierre | **30 dias** (Drive) / Permanente (descargable) | Licencia MetodologIA; uso interno |
| 4 | Grabacion de todas las sesiones | Video en Drive | D+1 por sesion | **30 dias** post-cierre | MetodologIA; no redistribuible |
| 5 | Plantillas inteligentes por modulo (Docs, Sheets, Slides, Gmail, Keep) | Docs editables | Por modulo | Permanente (descargable) | Licencia MetodologIA; uso interno |
| 6 | Proyecto final aplicado (producido por participante) | Formato variable | Sesion de cierre | Permanente | Participante |
| 7 | Certificado de participacion | PDF nominal | D+2 post-cierre | Permanente | MetodologIA |
| 8 | Certificado de competencia (condicionado a proyecto final) | PDF nominal + validacion online | D+5 post-cierre | Permanente | MetodologIA |
| 9 | Credito educativo | Registro interno | Automatico | **6 meses** | N/A |

### 7.2 Repositorio + vigencia + backup
- **Google Drive:** acceso **30 dias** post-cierre.
- **Responsabilidad de backup:** el cliente debe descargar antes de vencimiento. MetodologIA no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** Incluido **3 meses** post-cierre (acceso a grabaciones, materiales, playbook). `[POR CONFIRMAR: JM, 2026-04-15 — definir costo de extension y plataforma LMS]`

### 7.3 Grabacion y consentimiento
- Grabacion oficial + transcripcion automatica entregada via repositorio por sesion.
- Expira a los **30 dias** post-cierre del Bootcamp. No se extiende.
- Grabacion individual por participantes: solo con **autorizacion explicita de todos los asistentes**. Sin autorizacion = facilitador solicita detener.
- **Uso por MetodologIA:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito por escrito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| Participacion | Asistir a >= 7 de 10 sesiones | PDF nominal | D+2 post-cierre |
| Competencia | Completar proyecto final + rubrica aprobada por facilitador | PDF nominal + validacion online | D+5 post-cierre |

### 7.5 Propiedad intelectual
| Elemento | Propiedad | Uso permitido |
|---|---|---|
| Materiales (prompts, playbook, plantillas) | MetodologIA (licencia de uso al cliente) | Uso interno; no revender, no publicar, no redistribuir |
| Artefactos producidos por el participante | Participante | Sin restriccion |
| Grabacion de las sesiones | MetodologIA | Acceso temporal al participante; no redistribuible |
| Proyecto final del participante | Participante | Sin restriccion (construido sobre templates MetodologIA) |

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | Instalacion, no teoria | Cada modulo produce un sistema funcional verificable | Checklist de cierre: 9 entregables modulares + proyecto final |
| 2 | Practica dominante (70%) | Herramienta en mano durante ~756 de 1080 minutos | Observacion del facilitador; grabacion |
| 3 | Verificacion por evidencia | Gate al final de cada modulo; no se avanza sin verificar | Facilitador confirma antes de avanzar |
| 4 | Transferencia sostenida | Playbook + 50 prompts + plantillas reutilizables | Participante tiene materiales permanentes |
| 5 | Contextualizacion | Ejemplos y casos adaptados al sector/herramientas del cliente | Brief de contextualizacion completado pre-Bootcamp |
| 6 | Proyecto integrador | Proyecto final que conecta todos los modulos en un caso real | Presentacion y retroalimentacion en sesion de cierre |

**Regla de calidad:** si el tiempo aprieta, se recorta exposicion, nunca practica ni documentacion.

**Regla de facilitacion:** el facilitador co-crea; no dicta. Si el participante no participa activamente, el facilitador pausa y reencuadra antes de continuar. No se fuerza participacion.

---

## 9) Prerrequisitos y verificacion 48h

### 9.1 Prerrequisitos tecnicos
| Requisito | Minimo | Alternativa si no cumple | Consecuencia si no se resuelve |
|---|---|---|---|
| Computador | Portatil/escritorio, navegador moderno (Chrome recomendado) | No hay alternativa funcional | No puede participar en practica (observador) |
| Internet | Estable para video con camara | Solo audio + memorias post | Pierde 30% de experiencia |
| Camara/microfono | Funcionales | Solo audio | Menor interaccion pero viable |
| Cuenta Google Workspace | Cuenta activa con dominio corporativo (idealmente con Gemini habilitado) | Cuenta Gmail personal (funcionalidad puede ser limitada) | Sin Gemini: observador con guia para replicar |
| Google Gemini | Habilitado en Google Workspace por admin del dominio | Gemini web (gemini.google.com) como alternativa parcial | Pierde integracion nativa; el 60% del valor depende de Gemini integrado |
| Acceso a Google Drive, Docs, Sheets, Slides, Gmail, Keep | Verificado y funcional | N/A | Sin acceso a apps: no puede participar |

### 9.2 Prerrequisitos de habilidad
- Manejo basico de Google Workspace: crear documentos, hojas de calculo, presentaciones, enviar email.
- Copiar/pegar, abrir pestanas, compartir pantalla, navegar entre apps Google.
- **Prueba de verificacion (48h antes):** ejecutar prompt simple en Gemini (Anexo A, seccion A8).
- **Si no pasa la prueba o habilidad insuficiente:** Modulo 0 (Nivelacion) se activa como obligatorio para ese participante.

### 9.3 Protocolos de contingencia
| Situacion | Accion | Prevencion |
|---|---|---|
| Gemini no habilitado por TI | Escalar a admin TI; usar Gemini web como alternativa parcial; guia post-sesion | Validar habilitacion de Gemini en checklist 48h |
| Sin cuenta Google Workspace | Crear cuenta temporal o usar Gmail personal (funcionalidad limitada) | Verificar en brief |
| Brecha de habilidad severa | Modulo 0 obligatorio; si persiste: observador con tarea de documentacion | Pre-screening en brief |
| Conexion inestable | Audio + memorias + tareas para replicar | Recomendacion de red estable |
| Movil en vez de computador | Observador; reprogramar para practica | Convocatoria exige computador |
| NotebookLM restringido | Sustituir por ejercicio equivalente en Docs + Gemini | Validar acceso a NotebookLM en checklist |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
Incluida **sin recargo** para clientes B2B. Altamente recomendada. Ajusta ejemplos, casos, ejercicios y plantillas al sector/nicho/entorno del cliente y su uso especifico de Google Workspace.

**Trade-off:** la contextualizacion mejora relevancia significativamente en un Bootcamp de 18h pero consume 4-8h de preparacion del facilitador. Se incluye sin recargo porque aumenta satisfaccion y conversion al siguiente servicio. `[SUPUESTO: uplift en NPS y conversion | validar con data post-ejecucion]`

### 10.2 Lead time
| Tipo | Lead time | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 5 dias habiles desde confirmacion de pago | Se ejecuta con casos genericos |
| Con contextualizacion | >= 5 dias habiles entre brief completo y primera sesion | Brief tarde = ejecucion generica + ajustes progresivos durante el Bootcamp |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en primera conversacion y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion. Campos criticos: version de Google Workspace, Gemini habilitado, restricciones de TI, sector/industria, casos de uso prioritarios.

---

## 11) Operacion: logistica, soporte y repositorios

### 11.1 Roles y responsabilidades (RACI)
| Actividad | Embajador | Facilitador | Cliente | Participante |
|---|---|---|---|---|
| Agenda, logistica, confirmaciones | **R/A** | C | I | I |
| Brief de contextualizacion | **R** | C | **A** (provee info) | — |
| Validacion de Gemini habilitado | I | I | **R/A** (admin TI) | I |
| Entrega de contenido en sesion | I | **R/A** | — | C |
| Verificacion de evidencias por modulo | — | **R** | — | **A** |
| Entrega de repositorio/materiales | **R/A** | C | — | I |
| Soporte post-sesion | **R/A** | C | — | I |
| Evaluacion de proyecto final | — | **R/A** | — | I |
| Emision de certificados | **R/A** | C (provee evaluacion) | — | I |
| Credito educativo (activacion) | **R/A** | — | — | I |

### 11.2 Tamano y escalamiento
| Escenario | Participantes | Facilitadores | Costo | Efectividad |
|---|---|---|---|---|
| Intimo (recomendado) | 5-15 | 1 | Precio base | Maxima (atencion individual) |
| Estandar | 16-20 | 1 | Precio base | Alta |
| Cofacilitacion | 21-40 | 2 | +50% | Media-alta (requiere coordinacion) |
| 2 ejecuciones | 21+ (dividido) | 1 por ejecucion | -20% en segunda | Alta (grupos mas pequenos) |

### 11.3 SLA de soporte
| Canal | Respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion |
| WhatsApp | **<=2h** | L-V 9-16h COT | Dudas urgentes, coordinacion |
| Embajador | Dedicado | Segun disponibilidad | Coordinacion integral, creditos, evaluacion |

### 11.4 Fuera del soporte
Consultoria personalizada, ejecucion de tareas del cliente, soporte tecnico de Google Workspace (admin, licencias), configuracion de cuentas Google.

---

## 12) Politicas comerciales

### 12.1 Precios
| Segmento | Precio | Condicion | COP/persona efectivo |
|---|---|---|---|
| **B2C** | **COP 800.000** | Por persona | 800.000 `[SUPUESTO: precio B2C no publicado en HTML | validar con JM]` |
| **B2B** | **COP 12.000.000** | Por ciclo (hasta 20 pax) | 600.000 `[EVIDENCIA: bootcamp-ofimatica-google.html + bootcamps_data_reference.md]` |
| **B2B >20 (cofacilitacion)** | **COP 18.000.000** | Hasta 40 pax | 450.000 `[SUPUESTO: +50% por cofacilitacion | confirmar con JM]` |
| **B2B 2 ejecuciones** | **COP 19.200.000** | 2 ciclos de hasta 20 | 480.000 `[SUPUESTO: -20% en segundo ciclo | confirmar con JM]` |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP 3.500 = USD 1 | Politica comercial, no tasa de mercado | — |

**Vigencia:** hasta nueva version del canonico.

**Justificacion del precio B2B:** COP 12.000.000 por 18 horas de Bootcamp + 50 prompts + playbook + memorias + grabaciones + certificados + proyecto final + contextualizacion incluida + soporte de embajador dedicado. El precio es por ciclo (hasta 20 participantes), no por persona. `[EVIDENCIA: bootcamp-ofimatica-google.html, seccion pricing]`

### 12.2 Pago en 3 cuotas
| Cuota | % | Vencimiento | Consecuencia |
|---|---|---|---|
| Cuota 1 (mobilization) | 33.3% | Antes del inicio | Sin pago: no se bloquea agenda ni preparan materiales |
| Cuota 2 | 33.3% | Ultimo dia del mes siguiente al inicio | Notificacion + 5 dias habiles de ventana |
| Cuota 3 | 33.4% | Ultimo dia del segundo mes siguiente | Notificacion + suspension de accesos si persiste |

**Mora:** notificacion formal -> 5 dias habiles de ventana -> suspension de accesos (repositorio, grabaciones, soporte, creditos). Recargos conforme a legislacion vigente. Acuerdos a medida posibles por escrito (via embajador) **antes** del inicio.

### 12.3 Impuestos
| Tipo de compra | Tratamiento |
|---|---|
| Persona natural / pasarela en linea | Incluidos |
| Facturacion corporativa | Discriminados segun normativa vigente |

### 12.4 Reprogramacion / no-show / fuerza mayor
| Situacion | Costo | Condicion |
|---|---|---|
| 1a reprogramacion de sesion individual | Sin costo | Aviso >= 48h antes |
| 2a reprogramacion en adelante | **COP 500.000** por sesion | Cualquier causa `[SUPUESTO: fee de reprogramacion proporcional al precio del Bootcamp | confirmar con JM]` |
| No-show de sesion | COP 500.000 (= 2a reprogramacion) | — |
| Quorum empresarial >= 2 | Se ejecuta | — |
| Sin quorum por causa del cliente | Fee de no-show | — |
| Fuerza mayor | Sin costo | Primera fecha disponible en 5 dias habiles |
| Cancelacion pre-pago | Sin costo | — |
| Cancelacion post-inicio | No aplica devolucion standard; ver garantia | — |

### 12.5 Garantia
- **Devolucion proporcional** del valor pagado correspondiente a modulos no ejecutados por causa atribuible a MetodologIA.
- **Condiciones:** solicitud dentro de **5 dias habiles** post-ultima-sesion + **1 hora de retroalimentacion estructurada**.
- **Proceso:** solicitud al embajador -> sesion de retroalimentacion -> devolucion proporcional en **15 dias habiles**.
- **Exclusion:** no aplica si la insatisfaccion es por causa del participante (inasistencia, no participo, no trajo caso). Se aplica si MetodologIA no cumplio el DoD (ver Sec 6.3).
- **Limite etico:** no se garantizan resultados financieros, de productividad ni de carrera.

`[SUPUESTO: politica de garantia proporcional diferente al Workshop (que es 100%) | confirmar con JM]`

### 12.6 Credito educativo
| Campo | Especificacion |
|---|---|
| Credito entrante | Workshop De Ocupado a Productivo: 100% del valor pagado, 6 meses |
| Credito saliente | Aplicable al Programa Digital Champions u otro servicio posterior `[POR CONFIRMAR: JM, 2026-04-15]` |
| Ventana | 6 meses desde la compra del Bootcamp |
| Monto | 100% de lo efectivamente pagado `[SUPUESTO: mismo esquema que Workshop | confirmar con JM]` |
| Acumulable | Si (con promociones y otros creditos) |
| Descuento maximo | = gratis (no hay saldos negativos) |
| Aplicacion | Se descuenta de Cuota 1 del servicio destino |
| Transferibilidad | Intransferible (solo aplica para quien pago el Bootcamp) |
| Activacion | Contactar canales oficiales + solicitar cotizacion |

---

## 13) Metricas de exito

### 13.1 North Star
**~8 horas/semana recuperadas** en tareas ofimaticas por adopcion sistematica de Gemini en Google Workspace. Medicion: semana 4 post-cierre del Bootcamp.

`[SUPUESTO: 8h/sem basado en estimacion de que participantes dedican ~40% de su jornada a tareas ofimaticas y la amplificacion con Gemini reduce ese tiempo en ~50% | validar con encuesta post-bootcamp Q2 2026]`

**Nota etica:** es meta de adopcion. Logro depende de contexto, consistencia y aplicacion sostenida del participante. MetodologIA no se compromete a valores especificos.

### 13.2 Leading indicators (semanas 1-4)
| Indicador | Unidad | Frecuencia | Fuente | Meta orientativa |
|---|---|---|---|---|
| Prompts de Gemini usados en trabajo diario | #/semana | Semanal | Auto-reporte | >= 10 |
| Documentos creados con asistencia de Gemini | #/semana | Semanal | Auto-reporte | >= 3 |
| Automatizaciones activas | # | Al cierre + semana 4 | Auto-reporte | >= 2 |
| Sesiones asistidas (engagement) | # de 10 | Por sesion | Registro asistencia | >= 7 |

### 13.3 Lagging indicators (semanas 4-12)
| Indicador | Unidad | Frecuencia | Fuente | Meta orientativa |
|---|---|---|---|---|
| Reduccion de tiempo en tareas ofimaticas | % reduccion | Mensual | Auto-reporte / encuesta | >= 30% |
| Calidad percibida de documentos/presentaciones | Escala 1-5 | Mensual | Encuesta | >= 4 |
| Adopcion sostenida de Gemini integrado | % equipo que sigue usando | Mensual | Auto-reporte | >= 70% |
| NPS del Bootcamp | -100 a 100 | Post-cierre | Encuesta | >= 50 |

### 13.4 Responsabilidad de medicion
MetodologIA entrega plantillas de seguimiento dentro del playbook. La medicion la ejecuta el participante o el area contratante. MetodologIA no mide ni reporta indicadores salvo acuerdo especifico en contrato.

---

## 14) Casos borde (decisiones sin improvisacion)

| # | Caso borde | Senal | Decision en vivo | Mitigacion previa | Trade-off |
|---|---|---|---|---|---|
| 1 | Gemini no habilitado por TI | Checklist 48h falla | Usar Gemini web; modulos pierden integracion nativa | Validar con TI en brief | Se pierde 60% del valor diferencial |
| 2 | Datos sensibles | Participante pega info real en Gemini | Pausa -> anonimizar o caso sintetico | Reglas de datos en checklist | Se pierde realismo del ejercicio |
| 3 | Usan Microsoft 365, no Google | Se descubre en sesion 1 | Detener; reprogramar con version Microsoft | Pregunta de cualificacion obligatoria | Se pierde tiempo del primer modulo |
| 4 | Desde movil | Se conecta sin computador | Observador; sugerir reprogramacion | Convocatoria exige PC | Pierde practica |
| 5 | Conexion inestable | Caidas frecuentes | Audio + memorias + tareas post | Recomendacion red estable | Pierde interaccion visual |
| 6 | Grupo heterogeneo | Avanzados terminan, basicos atascados | Plantillas copiables + retos extra | Pre-screening en brief | Avanzados pueden aburrirse |
| 7 | >20 sin cofacilitador | Mas de 20 confirmados | Rechazar ejecucion hasta resolver | Definir tamano antes de cotizar | Retrasa ejecucion |
| 8 | Inasistencia cronica (>3 sesiones) | Participante falta reiteradamente | Notificar cliente; ofrecer material de catch-up; no emitir certificado competencia | Politica de asistencia clara desde kickoff | Puede frustrar al participante |
| 9 | Mora en cuotas | Pago vencido, exigen continuar | Suspender accesos segun politica | Calendario de pagos por escrito | Friccion con cliente |
| 10 | NotebookLM no disponible | Restriccion TI o region | Sustituir por ejercicio en Docs + Gemini | Validar acceso en checklist | Se pierde ejercicio especifico de NotebookLM |
| 11 | Piden certificado competencia sin proyecto | Quieren certificado sin presentar proyecto | Solo participacion sin proyecto; competencia requiere rubrica aprobada | Distincion explicita en kickoff y Sec 7 | Cliente puede sentirse "limitado" |
| 12 | Grabacion sin permiso | Participante graba sin consentimiento | Solicitar detener; referir a memorias oficiales | Politica de consentimiento en kickoff | Puede molestar al participante |
| 13 | Reprogramaciones multiples | 3+ reprogramaciones de sesiones | Aplicar politica de fee desde 2a reprogramacion | Politica escrita desde inicio | Puede perder cliente |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Servicio | Tipo | Duracion | Credito | Conexion tematica |
|---|---|---|---|---|---|
| Amplificar trabajo con asistentes IA personalizados | **Bootcamp Trabajar Amplificado** | Bootcamp | 18h | Por definir | De ofimatica integrada a sistema operativo personal con asistentes |
| Gerencia de proyectos con IA | **Bootcamp GerencIA de Proyectos** | Bootcamp | 18h | Por definir | De productividad ofimatica a gestion de proyectos amplificada |
| Ventas amplificadas con IA | **Bootcamp Ventas Amplificadas** | Bootcamp | 18h | Por definir | De productividad ofimatica a pipeline de ventas con IA |
| Estrategia ejecutable para negocio/equipo | **EstrategIA Empresarial** | Consultive Workshop | Variable | No aplica | De productividad a estrategia organizacional |
| Transformacion organizacional profunda | **Programa Digital Champions** | Programa | 16 sem | Por definir | De capacitacion puntual a transformacion cultural con IA |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos listos, expectativas alineadas.
> **Envio:** embajador envia 48h antes de la primera sesion. Participante confirma por escrito.
> **Consecuencia de no completar:** protocolos de contingencia (Sec 9.3).

### A1. Modalidad
- [ ] Confirmo fecha/hora de las sesiones y disponibilidad (2h por sesion, sin interrupciones).
- [ ] Participare desde **computador** (no movil ni tablet).

### A2. Cuenta Google Workspace
- [ ] Tengo cuenta Google Workspace activa (corporativa o personal).
- [ ] Puedo acceder a: Google Docs, Sheets, Slides, Gmail, Drive, Keep, Chat.
- [ ] **Google Gemini esta habilitado** en mi cuenta (puedo ver sugerencias de Gemini en Docs/Sheets/Gmail).
- [ ] Si Gemini NO esta habilitado: he avisado al embajador para gestionar con TI.

### A3. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome recomendado para mejor experiencia con Google Workspace).

### A4. Habilidad minima (auto-verificacion)
- [ ] Se crear un documento en Google Docs.
- [ ] Se crear una hoja de calculo en Google Sheets.
- [ ] Se enviar un email con Gmail.
- [ ] Se copiar/pegar, abrir pestanas, compartir pantalla.

### A5. Insumos preparados (sin datos sensibles)
- [ ] Tengo acceso a documentos de trabajo recientes (anonimizados si contienen datos sensibles).
- [ ] Si no tengo insumo propio, usare el caso de ejemplo del facilitador.

### A6. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales ni credenciales en Gemini.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A7. Mini-prueba (verificacion funcional de Gemini)
- [ ] Abri Google Docs y active Gemini (o verifique que esta disponible).
- [ ] Escribi un prompt simple a Gemini: *"Ayudame a redactar un resumen ejecutivo de 3 parrafos sobre productividad ofimatica."*
- [ ] Obtuve respuesta funcional de Gemini.

### A8. Si algo falla
- Si Gemini no esta habilitado: avisar al embajador **antes** de la primera sesion.
- Si me conectare desde movil: solicitar alternativa.
- Si mi internet es inestable: preparar alternativa audio + solicitar memorias.

---

## Anexo B -- Brief estandar (contextualizacion)

> Levantado en primera conversacion, confirmado por escrito. Brief incompleto = ejecucion generica.

### B1. Identidad
- Organizacion / iniciativa:
- Segmento: ( ) Persona/small business  ( ) Empresa  ( ) Partner B2B2B
- Industria/nicho:
- Objetivo del Bootcamp (1 frase):

### B2. Participantes
- # estimado:
- Roles:
- Nivel de manejo de Google Workspace: ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Zonas horarias (si aplica):

### B3. Restricciones y entorno tecnico
- Version de Google Workspace (Business Starter / Standard / Plus / Enterprise):
- Gemini habilitado: ( ) Si  ( ) No  ( ) No se
- Herramientas bloqueadas por TI:
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:
- Acceso a NotebookLM: ( ) Si  ( ) No  ( ) No se

### B4. Casos de uso prioritarios
- 3 tareas ofimaticas donde mas se pierde tiempo: 1) 2) 3)
- Tipo de documentos mas frecuentes (informes, propuestas, actas, etc.):
- Tipo de datos mas frecuentes en Sheets (financieros, operativos, RRHH, etc.):
- Frecuencia de presentaciones (diaria, semanal, mensual):

### B5. Herramientas actuales del equipo
- Suite ofimatica: ( ) Google Workspace  ( ) Microsoft 365  ( ) Mixto
- Comunicacion: ( ) Google Chat  ( ) Slack  ( ) Teams  ( ) Otro
- Gestion de proyectos: ( ) Google Tasks  ( ) Asana  ( ) Monday  ( ) Otro

### B6. Criterios de exito
- Que tiene que pasar en 4 semanas para decir "valio la pena":
- Senal de adopcion minima (1 habito verificable):

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Ventana de fechas preferidas:
- Plataforma videoconferencia preferida: ( ) Google Meet  ( ) Zoom  ( ) Teams  ( ) Otro
- Contacto embajador:
- Contacto TI (para validar Gemini y permisos):

---

## Registro de versiones

| Version | Fecha | Autor | Cambios clave |
|---------|-------|-------|---------------|
| v1.0 | 2026-03-29 | JM (asistido por Claude) | Documento canonico inicial. Extraido de bootcamp-ofimatica-google.html + bootcamps_data_reference.md. Template V2 completo con 15 secciones + 2 anexos. Trazabilidad con etiquetas [EVIDENCIA], [SUPUESTO], [POR CONFIRMAR], [DECISION]. |
