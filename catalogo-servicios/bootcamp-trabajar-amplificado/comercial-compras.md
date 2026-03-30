# Bootcamp Trabajar Amplificado -- Ficha Tecnica para Adquisiciones

**Documento:** Ficha tecnica de servicio para departamentos de compras y adquisiciones
**Version:** 2.0
**Fecha:** 2026-03-29
**Clasificacion:** Comercial -- uso interno del adquirente
**Marca proveedora:** MetodologIA
**Vigencia de la oferta:** 90 dias calendario a partir de la fecha de este documento. Precios sujetos a confirmacion escrita para contrataciones posteriores a la vigencia.

---

## 1. Identificacion del servicio

| Campo | Especificacion |
|---|---|
| **Nombre del servicio** | Bootcamp Trabajar Amplificado |
| **Tipo** | Bootcamp (entrenamiento aplicado + laboratorio + proyecto final) |
| **Proveedor** | MetodologIA |
| **Duracion total** | 20 horas (18h nucleo + 2h contexto/nivelacion) |
| **Modalidad** | Virtual sincronico en vivo (default). Presencial a solicitud con logistica separada. |
| **Participantes incluidos** | Hasta 20 participantes por ciclo (1 facilitador) |
| **Mecanismo didactico** | Demostracion breve, practica guiada con herramienta en mano, verificacion por evidencia. Gate por modulo. |
| **Motor IA** | Agnostico. Default: ChatGPT. Alternativa: motor autorizado por TI del cliente. |
| **Entregables** | Playbook interactivo HTML, biblioteca de +100 prompts (HTML + JSON), plantillas por modulo, grabaciones, proyecto final, certificados |
| **Certificacion** | Asistencia (todos) + Competencia (proyecto final evaluado por rubrica) |
| **Idioma de imparticion** | Espanol latinoamericano |

---

## 2. Clasificacion para adquisiciones

### 2.1 Codigos UNSPSC

| Codigo UNSPSC | Descripcion |
|---|---|
| 86101700 | Servicios de capacitacion vocacional no cientifica |
| 86101705 | Servicios de desarrollo de habilidades de gestion |
| 86111600 | Servicios de formacion vocacional o de desarrollo profesional |
| 81111500 | Ingenieria de software o hardware (si se clasifica como capacitacion tecnologica) |

### 2.2 Codigos CPV (referencia UE)

| Codigo CPV | Descripcion |
|---|---|
| 80500000-9 | Servicios de formacion |
| 80530000-8 | Servicios de formacion profesional |
| 80533100-0 | Servicios de formacion informatica |

*Nota: el codigo aplicable depende de la clasificacion interna del adquirente. Se sugiere validar con el area de compras segun el objeto contractual predominante.*

---

## 3. Requisitos de proveedor

| Requisito | Estado / Referencia |
|---|---|
| NIT o documento de identificacion tributaria | Disponible a solicitud |
| Certificado de Camara de Comercio (vigente) | Disponible a solicitud |
| RUT actualizado | Disponible a solicitud |
| Certificacion bancaria (para pagos) | Disponible a solicitud |
| Experiencia acreditada en capacitacion | Portafolio y referencias disponibles a solicitud |
| Poliza de responsabilidad civil | Segun requerimiento del contratante; negociable |
| Certificaciones del facilitador | Hoja de vida y soportes disponibles a solicitud |
| Antecedentes disciplinarios / fiscales | Certificados vigentes disponibles a solicitud |

*Para procesos formales de contratacion, el proveedor entrega el paquete documental completo dentro de los 5 dias habiles siguientes a la solicitud.*

---

## 4. Alcance y exclusiones

### 4.1 Alcance incluido

1. Entrenamiento aplicado con practica guiada "herramienta en mano" (20 horas distribuidas en sesiones).
2. Diseno y construccion de activos reutilizables: prompts, plantillas, playbooks, especificaciones de asistentes/flows.
3. Entrega de biblioteca de +100 prompts (HTML + JSON).
4. Entrega de playbook interactivo HTML por nivel.
5. Verificacion por evidencias (por modulo + proyecto final).
6. Guia de adopcion y estandarizacion (personal/equipo) con metricas.
7. Proyecto final aplicado a caso real del participante, evaluado por rubrica.
8. Certificado de asistencia y/o competencia.
9. Acceso a Campus durante formacion + 1 mes.

### 4.2 Exclusiones explicitas

- Integraciones por API, desarrollo de software, automatizaciones productivas dentro del stack del cliente.
- Auditorias de seguridad/compliance.
- Ejecucion operativa de tareas del cliente.
- Soporte tecnico avanzado de plataformas de terceros (motor IA, calendario, gestor del cliente).
- Decisiones legales/contractuales.
- Diagnostico organizacional profundo.

---

## 5. Especificaciones tecnicas

### 5.1 Estructura modular

| Modulo | Contenido | Duracion | Prerequisito |
|---|---|---|---|
| 0. Contexto / nivelacion | Lenguaje comun, setup minimo, alineacion de expectativas | 2h (120 min) | Checklist 48h completado |
| 1. Fundamentos de amplificacion | De "usar IA" a "sistematizar": marco conceptual | ~2h | Mod 0 |
| 2. Prompting estructurado | Controlar formato, calidad y consistencia de outputs | ~2h | Mod 1 |
| 3. Meta-prompts y evaluacion | Prompts testeables, comparables y mejorables | ~2h | Mod 2 |
| 4. Plantillas y playbooks | Reutilizacion por niveles: basico, intermedio, avanzado | ~2h | Mod 3 |
| 5. Inteligencia agentiva | Disenar y especificar agentes de IA | ~2h | Mod 4 |
| 6. Automatizacion agentiva | Orquestar flujos end-to-end con multiples pasos | ~2h | Mod 5 |
| 7. Prototipado y mini-apps | Crear prototipos funcionales por lenguaje natural | ~2h | Mod 6 |
| 8. Adopcion de IA | Disenar cambio + estandarizacion personal/equipo | ~1h | Mod 7 |
| 9. Proyecto final | Integrar todo en un sistema real aplicado | ~3h | Mod 0-8 |
| **Total** | | **~20h** | |

### 5.2 Metodo pedagogico

Cada modulo sigue el ciclo: demostracion breve, practica guiada del participante con herramienta en mano, verificacion de evidencia producida. No se avanza al siguiente modulo sin verificar el entregable del anterior. Proporcion objetivo: 15% demo / 70% practica / 15% verificacion.

### 5.3 Plataforma y herramientas

- Plataforma de videoconferencia: a definir por el cliente (Zoom, Google Meet, Microsoft Teams u otra compatible).
- Motor de IA: agnostico. El proveedor trabaja con el motor autorizado por el area de TI del cliente.
- Herramientas complementarias por modulo: Mod 5 (GPTs/equivalente), Mod 6 (n8n/equivalente), Mod 7 (v0/Replit/equivalente).
- Repositorio de materiales: Google Drive + Campus, con acceso garantizado por 30 dias calendario posteriores al cierre.

### 5.4 Comparativa de modalidades

| Criterio | Virtual sincronico | Presencial | Hibrido |
|---|---|---|---|
| Costo base | COP 12.000.000 + IVA | COP 12.000.000 + IVA + logistica | COP 12.000.000 + IVA + logistica parcial |
| Logistica adicional | Ninguna (plataforma del cliente) | Salon, conectividad, transporte facilitador, refrigerios | Salon + plataforma simultanea |
| Capacidad efectiva | Hasta 20 (1 facilitador) | Hasta 20 (1 facilitador) | Hasta 15 (complejidad de atencion dividida) |
| Lead time minimo | 3 dias habiles | 10 dias habiles (logistica) | 10 dias habiles |
| Grabacion | Incluida | Requiere equipo adicional | Incluida (componente virtual) |

*Para modalidad presencial o hibrida, la logistica es responsabilidad y costo del cliente salvo acuerdo escrito en contrario.*

---

## 6. Entregables y criterios de aceptacion (Definition of Done)

### 6.1 Entregables

| Entregable | Formato | Momento de entrega |
|---|---|---|
| Playbook interactivo HTML por nivel | HTML interactivo | Al cierre de Mod 4 + version final al cierre |
| Biblioteca de +100 prompts | HTML + JSON | Al cierre |
| Plantillas por modulo (>=1 por entregable clave) | Docs editables | Progresivo (al cierre de cada modulo) |
| Memorias del proceso (artefactos + materiales) | Docs/archivos en Drive | D+1 |
| Grabaciones + transcripciones | Video en Drive | D+1 |
| Material generado por el participante | Propio del participante | En sesion |
| Proyecto final + feedback estructurado | Formato del participante + rubrica | Al cierre del Mod 9 |
| Certificado de asistencia | PDF nominal | D+2 |
| Certificado de competencia (si aplica) | PDF nominal + validacion online | D+5 |
| Acceso a Campus | Plataforma online | Durante formacion + 1 mes |

### 6.2 Criterios de aceptacion (DoD)

El servicio se considera aceptado cuando se cumplen todos los criterios siguientes:

1. **Carga horaria:** se ejecutaron las 20 horas acordadas (18h nucleo + 2h contexto).
2. **Entregables por modulo:** verificados segun rubrica (>=8 de 10 modulos con entregable aceptado).
3. **Proyecto final:** entregado y evaluado por rubrica (claridad, aplicabilidad, seguridad de datos, reproducibilidad).
4. **Materiales comprometidos:** biblioteca, playbooks, plantillas, grabaciones entregados y accesibles.
5. **Etica respetada:** reglas de datos explicadas y cumplidas (sin incidentes de datos sensibles).
6. **Certificados:** emitidos segun corresponda (asistencia y/o competencia).

### 6.3 Proceso de aceptacion formal

| Paso | Responsable | Plazo | Accion |
|---|---|---|---|
| 1. Ejecucion del Bootcamp | Proveedor | Fechas acordadas | Facilitar sesiones completas segun estructura modular |
| 2. Entrega de materiales | Proveedor | 48h habiles post-cierre | Repositorio con todos los entregables accesible |
| 3. Verificacion de entregables | Cliente (compras o area solicitante) | 5 dias habiles post-entrega | Confirmar recepcion y completitud |
| 4. Acta de aceptacion | Cliente | 5 dias habiles post-verificacion | Firma de acta o comunicacion escrita |
| 5. Observaciones (si aplica) | Cliente | Dentro del plazo de verificacion | Comunicar inconformidades especificas por escrito |
| 6. Subsanacion (si aplica) | Proveedor | 5 dias habiles post-observacion | Corregir o complementar entregables observados |

*Silencio administrativo: si el cliente no emite observaciones dentro de los 5 dias habiles posteriores a la entrega de materiales, se entiende aceptacion tacita del servicio.*

---

## 7. Matriz RACI contractual

| Actividad | Proveedor | Cliente (compras) | Cliente (area solicitante) | Participantes |
|---|---|---|---|---|
| Cotizacion y negociacion | R | A | C | I |
| Firma de contrato/orden | C | R/A | C | I |
| Brief de contextualizacion | A | I | R | C |
| Verificacion de prerequisitos tecnicos | C | I | R | A |
| Autorizacion de motor IA (TI) | I | I | R/A | I |
| Programacion de fechas | R | C | A | I |
| Ejecucion del Bootcamp | R/A | I | I | A (participar) |
| Evaluacion de proyecto final | R/A | I | C | A (entregar) |
| Verificacion de entregables | R (entregar) | A (verificar) | C | I |
| Emision de acta de aceptacion | I | R/A | C | I |
| Facturacion y pago | R (facturar) | R/A (pagar) | I | I |
| Soporte post-cierre | R/A | I | C | A (consultar) |
| Gestion de Campus (accesos) | R/A | I | I | I |

R = Responsable, A = Aprobador, C = Consultado, I = Informado.

---

## 8. Requisitos previos (obligaciones del cliente)

El cliente debera garantizar las siguientes condiciones antes del inicio. El incumplimiento de estos requisitos puede impactar la calidad de la experiencia y no constituye responsabilidad del proveedor.

| Requisito | Especificacion |
|---|---|
| Equipo | Computador con navegador actualizado (Chrome, Edge, Firefox o Safari vigente) |
| Conectividad | Conexion a internet estable, con capacidad suficiente para videoconferencia con camara |
| Audio y video | Camara web y microfono funcionales |
| Cuenta de IA | Cuenta activa y verificada en el motor de IA acordado |
| Herramientas complementarias | Acceso a plataformas de agentes/workflow/prototipado segun modulo (Mod 5-7) |
| Calendario/tareas | Acceso a calendario digital y gestor del participante |
| Habilidades basicas | Copiar y pegar, abrir pestanas, compartir pantalla, manejar archivos basicos |
| Disponibilidad | Compromiso de 20 horas distribuidas segun cronograma acordado |

---

## 9. Niveles de servicio (SLA)

### 9.1 Tiempos de respuesta

| Canal | Tiempo de respuesta comprometido | Horario |
|---|---|---|
| Correo electronico | Dia habil siguiente (D+1) | Dias habiles |
| WhatsApp | Maximo 2 horas | Lunes a viernes, 09:00 a 16:00 (hora Colombia, GMT-5) |
| Embajador asignado | Canal dedicado | Segun disponibilidad comunicada |

### 9.2 Lead time de programacion

- **Primera fecha disponible:** dentro de los 3 dias habiles siguientes a la confirmacion de pago.
- **Contextualizacion previa:** minimo 3 dias habiles de anticipacion para recibir brief completo.
- **Modalidad presencial:** minimo 10 dias habiles para logistica.

### 9.3 Alcance del soporte post-cierre

**Incluido:** dudas de acceso a materiales, guia de aplicacion, dudas de entregables, coordinacion de creditos, gestion de Campus.

**No incluido:** consultoria personalizada, ejecucion de tareas, soporte tecnico de herramientas de terceros, debugging de integraciones/APIs.

---

## 10. Penalidades por incumplimiento del proveedor

| Incumplimiento | Penalidad |
|---|---|
| No ejecucion en la fecha acordada sin causa justificada | Reprogramacion sin costo + penalidad del 5% del valor del contrato por cada dia habil de retraso, hasta un maximo del 20% |
| Entrega incompleta de materiales (>48h habiles de retraso) | 2% del valor del contrato por cada dia habil adicional de retraso |
| Facilitador no calificado o sustitucion sin autorizacion | El cliente puede exigir reprogramacion sin costo o resolucion del contrato con devolucion del 100% |
| Incumplimiento de SLA de soporte (3 o mas eventos) | Penalidad del 3% del valor del contrato |
| Incumplimiento de confidencialidad | Resolucion del contrato + indemnizacion conforme a clausula de confidencialidad |
| No ejecucion del ciclo Demo->Practica->Verificacion en mayoria de modulos | Resolucion del contrato con devolucion del 100% |

*Maximo acumulado de penalidades: 30% del valor del contrato, salvo incumplimiento de confidencialidad. Penalidades superiores al 30% facultan la resolucion del contrato.*

---

## 11. Condiciones comerciales

### 11.1 Precio

| Concepto | Valor | Condicion |
|---|---|---|
| **Bootcamp B2B (hasta 20 participantes)** | **COP 12.000.000 + IVA** | Por ciclo de 20 horas, 1 facilitador |
| Cofacilitacion (hasta 40 participantes) | COP 18.000.000 + IVA | +50% sobre tarifa base, 2 facilitadores |
| 2 ejecuciones simultaneas | COP 21.600.000 + IVA | -20% en segunda ejecucion |

### 11.2 Forma de pago

| Cuota | Monto | Vencimiento |
|---|---|---|
| Cuota 1 (mobilization fee) | 33.3% del valor total | Antes del inicio |
| Cuota 2 | 33.3% del valor total | Ultimo dia habil del mes siguiente al inicio |
| Cuota 3 | 33.4% del valor total | Ultimo dia habil del segundo mes siguiente |

### 11.3 Impuestos

Segun regimen de facturacion vigente del proveedor y legislacion tributaria aplicable. Para facturacion corporativa, los impuestos se desglosan de forma itemizada en la factura.

### 11.4 Mora en el pago

1. Notificacion formal al contacto de compras.
2. Ventana de regularizacion de 5 dias habiles.
3. Mora persistente: suspension de accesos a materiales, repositorio, Campus y soporte hasta regularizacion.
4. Recargos e intereses: conforme a legislacion vigente.

### 11.5 Reprogramacion

| Situacion | Condicion | Costo |
|---|---|---|
| Primera reprogramacion (cohorte abierta) | Causa justificada, >=72h antes | Sin costo |
| Segunda reprogramacion en adelante / no-show | Cualquier causa | COP 200.000 por evento |
| Reprogramacion empresa (>=10 dias habiles) | -- | Sin costo |
| Reprogramacion empresa (<10 dias habiles) | Cancelacion tardia | 100% del ciclo |
| Quorum empresarial | >=2 asistentes activos | La sesion se ejecuta normalmente |

### 11.6 Fuerza mayor

Reprogramacion sin costo. Primera fecha dentro de 3 dias habiles posteriores a la cesacion del evento. Evento irresistible e imprevisible debidamente acreditado.

### 11.7 Garantia (Try & Align)

- Ventana: hasta completar el primer bloque de 4 horas del Bootcamp.
- Condicion: solicitud explicita + 1 hora de retroalimentacion estructurada.
- Devolucion: 100% de lo efectivamente pagado.
- Procesamiento: 10 dias habiles.
- Exclusion: no aplica si la insatisfaccion es por causa del participante.

### 11.8 Credito educativo acumulable

| Condicion | Especificacion |
|---|---|
| Origen | Workshop "De Ocupado a Productivo" |
| Porcentaje acreditable | 100% del valor pagado |
| Vigencia del credito | 6 meses calendario desde la compra del Workshop |
| Acumulacion | Stackable con otros creditos y promociones |
| Descuento maximo | Hasta el 100% del valor del Bootcamp |
| Aplicacion | Se descuenta de la primera cuota (mobilization fee) |

### 11.9 Acceso a Campus post-cierre

Incluido durante formacion + 1 mes post-cierre. Continuidad opcional: COP 20.000/mes (~USD 5.7/mes).

---

## 12. Clausulas sugeridas para el contrato

### 12.1 Objeto

Prestacion del servicio de capacitacion denominado "Bootcamp Trabajar Amplificado" conforme a las especificaciones tecnicas, alcance y entregables descritos en este documento.

### 12.2 Criterios de aceptacion

El servicio se considera aceptado conforme al proceso descrito en la seccion 6.3. El acta de aceptacion constituye el soporte para efectos de facturacion y pago.

### 12.3 Propiedad intelectual

- Los materiales del Bootcamp (playbook, prompts, plantillas, biblioteca) son propiedad intelectual de MetodologIA.
- El cliente recibe licencia de uso interno, no exclusiva y no transferible.
- Los artefactos y el proyecto final producidos por los participantes son propiedad del participante o del cliente.
- Queda prohibida la reproduccion, distribucion o comercializacion de los materiales del proveedor sin autorizacion escrita.

### 12.4 Confidencialidad

- Ambas partes se comprometen a confidencialidad sobre informacion compartida durante contratacion y ejecucion.
- Vigencia: 2 anos posteriores a la terminacion del servicio.

### 12.5 Proteccion de datos personales

El proveedor se compromete a tratar datos personales conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.

### 12.6 Fuerza mayor

Segun lo establecido en la seccion 11.6. Ninguna de las partes sera responsable por incumplimientos derivados de eventos de fuerza mayor.

### 12.7 Resolucion anticipada

- Por mutuo acuerdo: sin penalidad.
- Por incumplimiento: notificacion escrita + 10 dias habiles para subsanar.
- Por conveniencia del cliente: con 10 dias habiles de anticipacion. Se facturan servicios efectivamente prestados.

---

## 13. Indicadores de desempeno (KPIs)

### 13.1 Indicador North Star

| Indicador | Meta orientativa | Unidad | Periodo de medicion |
|---|---|---|---|
| Calidad y consistencia de entregables amplificados (reduccion de retrabajo) | >=30% reduccion | % reduccion | Semana 3-4 post-cierre |

### 13.2 Indicadores leading (comportamiento)

| Indicador | Descripcion | Unidad | Metodologia de medicion | Frecuencia |
|---|---|---|---|---|
| Prompts reutilizados de la biblioteca | Prompts de la biblioteca usados en trabajo real | #/semana | Auto-reporte | Semanal |
| Activos nuevos creados | Plantillas, playbooks, specs nuevos | #/semana | Auto-reporte | Semanal |
| Cumplimiento del plan de adopcion | Rituales ejecutados sobre comprometidos | % | Auto-reporte/calendario | Semanal |
| Uso de asistente/workflow del bootcamp | Ejecuciones de activos construidos | #/semana | Auto-reporte | Semanal |

### 13.3 Indicadores lagging (resultado)

| Indicador | Descripcion | Unidad | Metodologia de medicion | Frecuencia |
|---|---|---|---|---|
| Reduccion de retrabajo | Iteraciones evitadas en entregables clave | % reduccion | Comparacion pre/post | Mensual |
| Mejora de tiempos de borrador | Reduccion de tiempo en primer draft | % reduccion | Medicion directa | Mensual |
| Satisfaccion con entregables | Percepcion de calidad por usuarios internos | Escala 1-5 | Encuesta | Mensual |
| Activos en biblioteca activamente usados | Prompts/playbooks en uso regular | # | Revision de biblioteca | Mensual |

### 13.4 Responsabilidad de medicion

Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. El proveedor entrega plantillas de seguimiento dentro de los materiales del Bootcamp.

---

## 14. Servicios complementarios

| Servicio | Tipo | Duracion | Relacion con el Bootcamp |
|---|---|---|---|
| **EstrategIA Empresarial** | Consultive Workshop | 18 horas (9 sesiones) | De sistematizacion operativa a estrategia organizacional con IA |
| **Programa Digital Champions** | Programa de transformacion | 16 semanas (48h) | Formacion de agentes de cambio digital |
| **Segundo ciclo Bootcamp** | Bootcamp | 20 horas | Mismo contenido, otro grupo. -20% si se contrata simultaneamente |

---

**Fin del documento.**

Para solicitudes de cotizacion formal, aclaraciones tecnicas o inicio del proceso de contratacion, dirigirse al contacto comercial de MetodologIA.

Derivado de: bootcamp-trabajar-amplificado/canonico.md v2.0 (2026-03-29). Precios verificados contra canonico: si, 2026-03-29.
