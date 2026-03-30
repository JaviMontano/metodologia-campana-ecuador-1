# {{Nombre Canonico del Servicio}}

**Documento canonico de servicio** — v{{X.Y}} ({{YYYY-MM-DD}})

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre una derivada (ejecutiva, comercial, compras) y este canonico, **este canonico manda**.
> **Ruta oficial:** {{Nombre de la ruta}} (concepto tematico: **{{Concepto}}**)
> **Marca:** {{MetodologIA / JM Labs / IAC (white-label)}}
> **Clasificacion:** {{Publico / Confidencial-cliente / Interno}}

### Convenciones de trazabilidad
Toda afirmacion critica lleva una de estas etiquetas al final de la linea:
- `[EVIDENCIA: fuente]` — dato verificado con localizador.
- `[SUPUESTO: riesgo | plan de validacion]` — propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` — informacion faltante que bloquea publicacion.
- `[DECISION: fecha, quien decidio, alternativa descartada]` — trade-off resuelto.

---

## 0) Ficha rapida (decision en 60s)

| Atributo | Especificacion |
|---|---|
| **Nombre canonico** | {{Nombre exacto: web, oferta, contrato. Sin variaciones.}} |
| **Slug (ID unico)** | {{kebab-case, ej: `workshop-de-ocupado-a-productivo`}} |
| **SKUs** | {{SKU-1 / SKU-2 si aplica. Definir si son variantes de segmento o de contenido.}} |
| **Tipo de servicio** | {{Workshop / Bootcamp / Consultive Workshop / Programa}} |
| **Categoria comercial** | {{Entrada / Profundizacion / Premium / Transformacion}} |
| **Ruta oficial** | {{Ruta de (R)Evolucion Empresarial / Personal / Ambas}} |
| **Duracion total** | {{X horas total (desglose: Xh nucleo + Xh contexto/nivelacion)}} |
| **Modalidad** | {{Virtual sincronico (default) / Presencial (a solicitud; logistica separada)}} |
| **Mecanismo didactico** | {{Demostracion -> Practica guiada -> Verificacion por evidencia}} |
| **Proporcion didactica** | {{X% demo / Y% practica / Z% verificacion}} |
| **Motor IA** | {{Agnostico. Default: ChatGPT. Alternativas: Gemini / Copilot / motor permitido por TI}} |
| **Entregables core** | {{Lista breve — detalle completo en Sec 7}} |
| **Certificacion** | {{Asistencia (todos) / Competencia (condicionada a evaluacion — detallar rubrica)}} |
| **Soporte / SLA** | {{Email D+1 / WhatsApp <=2h (9-16h COT) / Embajador asignado}} |
| **Repositorio** | {{Google Drive, N dias post-cierre}} |
| **Campus / LMS** | {{Incluido X meses / No aplica. Si aplica: costo de continuidad post-periodo.}} |
| **Participantes** | {{Min-Max recomendado. Umbral de cofacilitacion. Maximo absoluto.}} |
| **Precio canonico B2C** | {{COP X por persona}} |
| **Precio canonico B2B** | {{COP X por ciclo (hasta N participantes)}} |
| **Costo por participante efectivo** | {{COP X/persona en grupo de N — ayuda a comparar}} |
| **Credito desde** | {{Nombre del servicio previo, %, ventana, condiciones de acumulacion}} |
| **Credito hacia** | {{Nombre del servicio siguiente, %, ventana}} |
| **Impuestos** | Segun regimen de facturacion y legislacion vigente. Online: incluidos. Corporativo: discriminados. |
| **Vigencia de precios** | {{Hasta YYYY-MM-DD o "hasta nueva version del canonico"}} |

**Trade-off de diseno del servicio:** {{En 1-2 frases, explicar la decision de diseno principal. Ej: "Priorizamos velocidad de adopcion sobre profundidad tecnica porque el objetivo es instalar un habito en 3 horas, no dominio experto."}}

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica — usar textual en web/contrato)
> {{Descripcion canonica. Debe ser comprensible para alguien nuevo y funcionar como parrafo de apertura en cualquier documento.}}

### 1.2 Que es (y por que funciona)
- {{Razon 1 de efectividad — vinculada a evidencia o experiencia}}
- {{Razon 2}}
- {{Razon 3}}

**Diferenciador clave:** {{Que hace este servicio que la competencia o alternativas internas no logran. 1-2 frases.}}

### 1.3 Que NO es (expectativas frecuentes que deben cortarse)
| Expectativa erronea | Realidad | Como se descubre temprano |
|---|---|---|
| {{Ej: "Me van a hacer la estrategia"}} | {{Ej: "Co-creamos; tu decides"}} | {{Ej: Pregunta de cualificacion #2}} |
| {{...}} | {{...}} | {{...}} |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Prerequisito] --credito X%--> [ESTE SERVICIO] --credito Y%--> [Siguiente]
```
1. **Prerequisito sugerido:** {{Servicio anterior o "Ninguno — punto de entrada"}}
2. **Este servicio:** {{Nombre}} ({{duracion}})
3. **Siguiente paso natural:** {{Servicio posterior + tipo de credito}}
4. **Ruta completa:** {{Workshop -> Bootcamp -> EstrategIA -> Programa}}

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Como se verifica | Fuente |
|---|---|---|
| {{Senal 1}} | {{Pregunta o evidencia}} | {{Brief / conversacion / formulario}} |
| {{Senal 2}} | {{...}} | {{...}} |
| {{Senal 3}} | {{...}} | {{...}} |

### 2.2 Anti-fit (no-fit — rechazar con tacto)
| Condicion de rechazo | Por que no funciona | Alternativa sugerida |
|---|---|---|
| {{Condicion 1}} | {{Razon}} | {{Que ofrecer en su lugar o por que no}} |
| {{Condicion 2}} | {{...}} | {{...}} |
| {{Condicion 3}} | {{...}} | {{...}} |

### 2.3 Preguntas de cualificacion (script de venta)
Orden deliberado: la pregunta 1 detecta urgencia, la 2 detecta capacidad de decision, la 3 detecta viabilidad tecnica.
1. {{Pregunta discriminante 1 — detecta dolor real vs curiosidad}}
2. {{Pregunta discriminante 2 — detecta decision-maker vs delegado}}
3. {{Pregunta discriminante 3 — detecta viabilidad tecnica/logistica}}

**Regla de corte:** si la respuesta a la pregunta 1 es vaga, la probabilidad de cierre cae >60%. Ofrecer recurso gratuito en lugar de forzar venta. `[SUPUESTO: basado en experiencia de venta 2025 | validar con datos de conversion Q2 2026]`

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lo que el cliente siente — lenguaje del cliente, no tecnico)
- {{Sintoma 1 — frase textual que usa el cliente}}
- {{Sintoma 2}}

### 3.2 Causas raiz (lo que realmente pasa — analisis del consultor)
- {{Causa 1 — modelo causal: causa -> efecto -> impacto en negocio/persona}}
- {{Causa 2}}

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto cuantificable estimado |
|---|---|---|
| 30 dias | {{...}} | {{...}} |
| 90 dias | {{...}} | {{...}} |
| 12 meses | {{...}} | {{...}} |

### 3.4 Limites eticos (no negociables — aplican a todas las marcas)
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
| 1 | {{...}} | {{Como se sabe que esta "listo"}} | {{Facilitador / Participante / Co-creacion}} |
| 2 | {{...}} | {{...}} | {{...}} |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que se excluye | Donde se consigue |
|---|---|---|
| {{Exclusion 1}} | {{Razon: complejidad, riesgo, o fuera de expertise}} | {{Servicio propio, tercero, o "no aplica"}} |
| {{Exclusion 2}} | {{...}} | {{...}} |
| Ejecucion operativa total | El valor esta en instalar capacidad, no en crear dependencia | Consultoria done-for-you (fuera de portafolio) |
| Decisiones legales/contractuales | Requiere abogado; riesgo regulatorio | Asesor legal del cliente |
| Integraciones/desarrollo/APIs | Fuera de expertise; cambia el tipo de servicio | Sofka Technologies u otro proveedor tech |

### 4.3 Zona gris (se evalua caso a caso)
| Solicitud frecuente | Decision default | Condicion para incluir |
|---|---|---|
| {{Ej: "Nos ayudan a implementar despues?"}} | {{Fuera de alcance}} | {{Si se contrata EstrategIA como siguiente paso}} |
| {{...}} | {{...}} | {{...}} |

---

## 5) Arquitectura del servicio (modulos / sesiones / fases)

### 5.1 Principio rector
**Cada modulo/sesion produce un entregable verificable** y registra: decisiones tomadas, supuestos explicitos, trade-offs ("que NO haremos"), metrica de seguimiento y fecha de revision.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta exposicion, **nunca practica ni documentacion**. El participante debe irse con artefactos, no con apuntes.

### 5.2 Diseno pedagogico / consultivo
- **Proporcion objetivo:** {{X% demo / Y% practica guiada / Z% verificacion}}
- **Gestion de niveles:** plantillas copiables (basico) + retos de adaptacion con restricciones (avanzado).
- **Criterio de avance:** no se avanza al siguiente modulo sin verificar el entregable del anterior. `[DECISION: 2025-12, JM, alternativa descartada: avance libre sin gate — generaba deuda de entregables al final]`

### 5.3 Mapa de modulos

| # | Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|--------|--------|-------------------|----------------------|--------------------|----|
| 1 | {{Nombre}} | {{Xmin}} | {{Objetivo}} | {{Evidencia}} | {{Como se verifica}} | {{Modulo previo o "Ninguna"}} |
| 2 | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |
| **Total** | | **{{X min}}** | | | | |

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| {{Condicion 1}} | {{Como se detecta}} | {{Que hacer}} | {{Facilitador / Embajador}} |
| {{Condicion 2}} | {{...}} | {{...}} | {{...}} |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
Al finalizar, el participante puede:
| # | Capacidad | Como se verifica en sesion | Como se verifica post-sesion (3 semanas) |
|---|---|---|---|
| 1 | {{Capacidad}} | {{Evidencia in-situ}} | {{Indicador de adopcion}} |
| 2 | {{...}} | {{...}} | {{...}} |

### 6.2 Definition of Done (criterios de aceptacion)
El servicio se considera **completo y aceptado** si se cumplen **todos** los criterios:
| # | Criterio | Verificacion | Responsable de validar |
|---|---|---|---|
| 1 | {{Criterio}} | {{Como se comprueba}} | {{Facilitador / Participante / Embajador}} |
| 2 | {{...}} | {{...}} | {{...}} |
| N | Entrega operativa: repositorio, accesos y certificados entregados | Checklist de cierre firmado | Embajador |

### 6.3 Criterios de NO-aceptacion (cuando el servicio fallo)
- {{Condicion que indica que el servicio no cumplio — activa garantia o ronda de ajuste}}
- {{Condicion 2}}

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Momento de entrega | Vigencia | Propiedad intelectual |
|---|---|---|---|---|---|
| 1 | {{Entregable}} | {{PDF/Doc/HTML/enlace}} | {{Al cierre / D+1 / D+2}} | {{Permanente / N dias}} | {{Cliente / Licencia MetodologIA}} |
| 2 | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |

### 7.2 Repositorio + vigencia + backup
- **Google Drive:** acceso por **{{N}} dias** post-cierre.
- **Responsabilidad de backup:** el cliente debe descargar antes de vencimiento. MetodologIA no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** {{Incluido X meses / No incluido. Si aplica: costo de continuidad = COP X/mes.}}

### 7.3 Grabacion y consentimiento
- Grabacion + transcripcion automatica entregada via repositorio.
- Expira a los **{{N}} dias** de cierre.
- Grabacion individual por participantes: solo con **autorizacion explicita** de todos los asistentes. Sin autorizacion = el facilitador solicita detener.
- **Uso de la grabacion por MetodologIA:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| {{Asistencia}} | {{Asistir a la sesion}} | {{PDF nominal}} | {{D+2}} |
| {{Competencia}} | {{Completar proyecto final + rubrica}} | {{PDF nominal + validacion online}} | {{D+5}} |

### 7.5 Propiedad intelectual
- **Materiales del servicio** (playbook, prompts, plantillas): licencia de uso otorgada al cliente. Propiedad intelectual de MetodologIA.
- **Artefactos producidos por el participante en sesion:** propiedad del participante.
- **Modificacion/redistribucion:** el cliente puede usar internamente. No puede revender ni publicar sin autorizacion escrita.

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo concreto | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | {{Principio de entrega}} | {{Como se implementa}} | {{Como se sabe que funciono}} |
| 2 | {{...}} | {{...}} | {{...}} |

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
| Motor IA | Cuenta activa verificada | Caso de ejemplo sin IA + guia para replicar |
| Calendario/tareas | Acceso en sesion | Google Docs como alternativa minima |

### 9.2 Prerrequisitos de habilidad (minimos)
- Copiar/pegar, abrir pestanas, compartir pantalla.
- Formular preguntas simples y ejecutar instrucciones paso a paso.
- **Prueba de verificacion:** ejecutar un prompt simple 48h antes (Anexo A, seccion A8).

### 9.3 Protocolos de contingencia
| Situacion | Accion inmediata | Prevencion |
|---|---|---|
| Sin acceso a IA | Practica con caso de ejemplo + guia post-sesion para replicar | Checklist 48h con verificacion de login |
| Brecha de habilidad severa | Observador activo con tarea de documentacion; o reprogramacion | Pre-screening en brief |
| Conexion inestable | Priorizar audio + entregar memorias + marcar tareas para replicar | Recomendacion de red estable en checklist |
| Movil en vez de computador | No puede hacer practica; entra como oyente o reprograma | Convocatoria exige computador |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
La contextualizacion esta **{{incluida sin recargo / con recargo de COP X}}** y es altamente recomendada. Ajusta ejemplos, casos, ejercicios y artefactos al sector/nicho/entorno del cliente.

### 10.2 Lead time
| Tipo | Lead time minimo | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 3 dias habiles | Se ejecuta con casos genericos |
| Con contextualizacion | >=3 dias habiles entre brief completo y ejecucion | Si el brief llega tarde, se ejecuta generico + se entregan ajustes post-sesion |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en la primera conversacion y se confirma por escrito. Un brief incompleto no bloquea la ejecucion pero degrada la calidad de contextualizacion.

---

## 11) Operacion: logistica, soporte y repositorios

### 11.1 Roles y responsabilidades (RACI)
| Actividad | Embajador | Facilitador | Cliente | Participante |
|---|---|---|---|---|
| Agenda y logistica | **R/A** | C | I | I |
| Entrega de contenido | I | **R/A** | — | C |
| Verificacion de evidencias | — | **R** | — | **A** |
| Soporte post-sesion | **R/A** | C | — | I |
| Permisos TI / motor IA | I | I | **R/A** | I |

### 11.2 Tamano maximo + escalamiento
| Escenario | Participantes | Facilitadores | Costo |
|---|---|---|---|
| Estandar | 1–{{N}} | 1 | Precio base |
| Cofacilitacion | {{N+1}}–{{2N}} | 2 | +50% |
| 2 ejecuciones | {{N+1}}+ (dividido) | 1 por ejecucion | -20% en segunda |
| Recomendacion intima | 3–10 | 1 | Precio base |

### 11.3 SLA de soporte
| Canal | Tiempo de respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion |
| WhatsApp | **<=2h habiles** | L-V 9:00-16:00 COT | Dudas urgentes, coordinacion |
| Embajador | Canal dedicado | Segun disponibilidad | Coordinacion integral |

### 11.4 Fuera de alcance del soporte
Consultoria personalizada, ejecucion de tareas del cliente, soporte tecnico de herramientas de terceros (motor IA, calendario, gestor de tareas del cliente).

---

## 12) Politicas comerciales

### 12.1 Precios (canonicos)
| Segmento | Precio | Condicion | Costo por participante efectivo |
|---|---|---|---|
| **B2C** | **COP {{X}}** | Por persona | COP {{X}} |
| **B2B** | **COP {{X}}** | Por ciclo (hasta {{N}} pax) | COP {{X/N}} |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP {{tasa}} = USD 1 | Politica comercial, no tasa de mercado | — |

**Vigencia:** hasta {{YYYY-MM-DD}} o hasta nueva version del canonico.

### 12.2 Pago en 3 cuotas (regla completa)
| Cuota | % del total | Vencimiento | Consecuencia de no pagar |
|---|---|---|---|
| Cuota 1 (mobilization) | 33.3% | Antes del inicio | No se bloquea agenda ni se preparan materiales |
| Cuota 2 | 33.3% | Ultimo dia del mes siguiente al inicio | Notificacion + ventana 5 dias habiles |
| Cuota 3 | 33.4% | Ultimo dia del segundo mes siguiente | Notificacion + suspension de accesos si persiste |

**Mora:** notificacion formal → ventana de regularizacion (5 dias habiles) → suspension de accesos (repositorio, grabaciones, soporte, creditos). Recargos conforme a legislacion vigente.

**Acuerdos a medida:** posibles por escrito (via embajador) antes del inicio. No se aceptan acuerdos verbales.

### 12.3 Impuestos
- Persona natural / pasarela en linea: impuestos **incluidos**.
- Facturacion corporativa: impuestos **discriminados** segun normativa.
- El precio canonico se entiende **antes de impuestos** para empresas.

### 12.4 Reprogramacion / cancelacion / no-show / fuerza mayor
| Situacion | Condicion | Costo | Plazo de aviso |
|---|---|---|---|
| 1a reprogramacion | Justa causa | Sin costo | >=48h antes |
| 2a reprogramacion en adelante | Cualquier causa | COP {{X}} | >=48h antes |
| No-show | Sin aviso | = 2a reprogramacion (fee) | — |
| Quorum empresarial | >=2 asistentes activos | Se ejecuta normalmente | — |
| Sin quorum por causa del cliente | <2 asistentes | Fee de no-show | — |
| Fuerza mayor (cualquier parte) | Irresistible e imprevisible | Sin costo | Primera fecha en 3 dias habiles |
| Cancelacion total pre-inicio | Antes de Cuota 1 | Sin costo | — |
| Cancelacion total post-inicio | Despues de ejecucion | No aplica devolucion (ver garantia) | — |

### 12.5 Garantia
- {{Descripcion completa de garantia}}.
- **Condiciones de activacion:** {{plazo, forma de solicitud, requisitos}}.
- **Proceso de devolucion:** {{plazo de procesamiento, medio de devolucion}}.
- **Limite etico:** no se garantizan resultados financieros, de carrera, ni de productividad automatica.

### 12.6 Credito educativo (puente a siguiente servicio)
| Campo | Especificacion |
|---|---|
| Ventana | {{N}} meses desde la compra |
| Monto | {{100%}} de lo efectivamente pagado |
| Acumulable | Si, con promociones y otros creditos |
| Descuento maximo | = gratis (no hay saldos negativos ni devolucion de diferencia) |
| Aplicacion | Se descuenta de la primera cuota del servicio destino |
| Activacion | Contactar canales oficiales + solicitar cotizacion con referencia del servicio fuente |
| Transferibilidad | {{Intransferible / Transferible a miembros del mismo equipo/empresa}} |

---

## 13) Metricas de exito

### 13.1 North Star (metrica unica de impacto)
- **Metrica:** {{descripcion}}.
- **Horizonte de medicion:** {{semanas/meses post-sesion}}.
- **Nota etica:** es meta de adopcion; logro depende del contexto, consistencia y aplicacion del participante. MetodologIA no se compromete a valores especificos.

### 13.2 Leading indicators (comportamiento — medibles en semanas 1-3)
| Indicador | Unidad | Frecuencia de medicion | Fuente |
|---|---|---|---|
| {{Indicador 1}} | {{%/numero/si-no}} | {{Diaria/semanal}} | {{Auto-reporte/herramienta}} |
| {{Indicador 2}} | {{...}} | {{...}} | {{...}} |

### 13.3 Lagging indicators (resultado — medibles en semanas 3-12)
| Indicador | Unidad | Frecuencia | Fuente |
|---|---|---|---|
| {{Indicador 1}} | {{...}} | {{...}} | {{...}} |
| {{Indicador 2}} | {{...}} | {{...}} | {{...}} |

### 13.4 Responsabilidad de medicion
Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. MetodologIA entrega herramientas y plantillas de seguimiento dentro de los materiales del servicio.

---

## 14) Casos borde (adversarial — decisiones sin improvisacion)

| # | Caso borde | Senal temprana | Decision en vivo | Mitigacion previa | Trade-off aceptado |
|---|---|---|---|---|---|
| 1 | {{Caso}} | {{Como se detecta}} | {{Protocolo exacto}} | {{Que hacer antes para prevenirlo}} | {{Que se pierde al aplicar la decision}} |
| 2 | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |
| N | Motor IA bloqueado por TI | Checklist 48h falla | Usar motor permitido; asistentes -> especificacion equivalente | Validar politicas TI en brief | Se pierde fluidez si el motor alternativo es limitado |
| N+1 | Datos sensibles | Participante pega info real | Detener actividad, anonimizar o caso sintetico | Reglas de datos en checklist + advertencia al inicio | Se pierde realismo del ejercicio |
| N+2 | No-show / quorum bajo | <2 conectados al inicio | Quorum minimo >=2; si no, fee + reagendar | Confirmacion 24h antes + owners asignados | Se pierde la sesion para los ausentes |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Siguiente servicio | Tipo | Duracion | Credito aplicable | Conexion tematica |
|---|---|---|---|---|---|
| {{Necesidad 1}} | {{Servicio}} | {{Tipo}} | {{X horas}} | {{X% del valor de este servicio}} | {{Que construye sobre lo que se hizo aqui}} |
| {{Necesidad 2}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos minimos listos, expectativas alineadas.
> **Envio:** 48h antes de la sesion. Confirmacion requerida por cada participante.
> **Consecuencia de no completar:** ver protocolos de contingencia (Sec 9.3).

### A1. Confirmacion de modalidad
- [ ] Confirmo fecha/hora y disponibilidad completa para {{X}} horas sin interrupciones.
- [ ] Confirmo participacion desde **computador** (no movil ni tablet).

### A2. Motor de IA
- [ ] Motor elegido: ( ) ChatGPT  ( ) Gemini  ( ) Otro: __________
- [ ] Tengo cuenta activa y **puedo iniciar sesion ahora**.
- [ ] Puedo crear conversacion nueva y escribir instruccion simple.
- [ ] Mi empresa/TI **no bloquea** este motor. Si lo bloquea, avisar al embajador para alternativa.

### A3. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome, Edge, Firefox o Safari version vigente).

### A4. Herramientas de trabajo
- [ ] Acceso a mi calendario digital (Google Calendar / Outlook / otro).
- [ ] Acceso a mi sistema de tareas/notas (Notion / Todoist / Google Docs / otro).

### A5. Habilidad minima (auto-verificacion)
- [ ] Se copiar/pegar texto.
- [ ] Se abrir varias pestanas del navegador.
- [ ] Se compartir pantalla si me lo piden.
- [ ] Se nombrar y guardar conversaciones en mi motor de IA.

### A6. Insumos preparados (sin datos sensibles)
- [ ] Traigo {{insumo especifico}} (anonimizado si contiene datos reales).
- [ ] Si no tengo insumo propio, usare el caso de ejemplo que provee el facilitador.

### A7. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales ni credenciales.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A8. Mini-prueba (verificacion funcional)
- [ ] Abri mi motor de IA.
- [ ] Escribi: *"Inicia una conversacion llamada 'Practica MetodologIA' y dime 3 usos seguros de IA para productividad."*
- [ ] Obtuve respuesta funcional.

### A9. Si algo falla
- Si no tengo cuenta o permisos: aviso al embajador **antes** de la sesion.
- Si me conectare desde movil: solicito reprogramacion.
- Si mi internet es inestable: preparo alternativa de audio + solicito memorias.

---

## Anexo B -- Brief estandar (contextualizacion)

> Se levanta en primera conversacion (o formulario) y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion.

### B1. Identidad del cliente
- Organizacion / iniciativa:
- Segmento: ( ) Personas/small business  ( ) Empresa  ( ) Partner/B2B2B
- Industria/nicho/entorno:
- Objetivo del servicio (1 frase):

### B2. Participantes
- # participantes estimado:
- Roles (lista):
- Nivel de madurez (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Zonas horarias (si aplica):
- Idioma preferido (si no es espanol):

### B3. Restricciones y politicas
- Motores IA permitidos por TI:
- Herramientas bloqueadas: (detalle)
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:

### B4. Casos de uso / retos
- {{Campos especificos del servicio — personalizar por tipo}}

### B5. Herramientas actuales del participante
- Calendario:
- Tareas/proyectos:
- Notas/Docs:
- Comunicacion (Slack/Teams/otro):

### B6. Criterios de exito (medibles)
- Que tiene que pasar en {{horizonte}} para decir "valio la pena":
- Senal de adopcion minima (1 habito verificable):

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Ventana de fechas preferidas:
- Plataforma de videoconferencia preferida:
- Contacto embajador (nombre/WhatsApp/email):
- Contacto TI (si aplica, para validar motores):

---

## Registro de versiones

| Version | Fecha | Autor | Cambios clave | Aprobado por |
|---------|-------|-------|---------------|-------------|
| v{{X.Y}} | {{YYYY-MM-DD}} | {{Nombre}} | {{Descripcion de cambios}} | {{Nombre}} |

---

## Instrucciones de uso del template

1. Copiar este archivo en el directorio del servicio como `canonico.md`.
2. Reemplazar **todos** los `{{placeholders}}` con informacion real.
3. **No cambiar nombres de secciones, orden ni numeracion.** Si necesitas agregar una subseccion, numerar como X.N+1.
4. Si una seccion no aplica, escribir "No aplica a este servicio" con **justificacion** (ej: "Campus no aplica porque es un Workshop de 3h; los Workshops no incluyen LMS por diseno").
5. Etiquetar afirmaciones criticas: `[EVIDENCIA]`, `[SUPUESTO]`, `[POR CONFIRMAR]`, `[DECISION]`.
6. **Secciones requeridas (minimo para publicar):** 0, 1, 2, 4, 5, 6, 7, 12, 14.
7. **Secciones requeridas para contrato/SOW:** todas las requeridas + 3, 8, 9, 11.
8. **Secciones opcionales (completar cuando exista informacion):** 3.3, 4.3, 10, Anexos.
9. Antes de publicar: verificar que los precios en Sec 0 y Sec 12 coinciden exactamente.
10. Al actualizar: incrementar version, registrar en changelog, notificar a embajadores activos.
