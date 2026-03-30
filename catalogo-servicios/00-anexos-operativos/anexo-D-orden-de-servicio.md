# Anexo D -- Orden de Servicio

**Documento operativo transversal** -- v1.0 (2026-03-29)

> **Aplica a:** todos los servicios del catalogo MetodologIA / JM Labs / IAC.
> **Trigger:** venta cerrada (Cuota 1 pagada o PO aprobada por el cliente).
> **Responsable:** Embajador asignado al servicio.
> **Regla de autoridad:** este documento define el flujo operativo de activacion. No modifica alcance, precios ni politicas del canonico del servicio. Si hay conflicto, el canonico manda.

---

## 1) Ciclo de estados de la orden

```
ACTIVADA --> EN PREPARACION --> EN EJECUCION --> CERRADA
```

| Estado | Definicion | Trigger de transicion | Responsable de transicion |
|---|---|---|---|
| **ACTIVADA** | Pago Cuota 1 confirmado o PO firmada; orden creada en CRM | Embajador completa todos los campos obligatorios y valida datos | Embajador |
| **EN PREPARACION** | Orden validada; se inicia deep research, brief, creacion de repositorio y materiales | Brief de contextualizacion completado o deadline de preparacion alcanzado (D-3 habiles) | Embajador (con input del Facilitador) |
| **EN EJECUCION** | Primera sesion del servicio ha iniciado | Sesion 1 comenzada segun calendario | Facilitador |
| **CERRADA** | Todos los entregables entregados, encuesta NPS completada o vencida, credito registrado | Checklist de cierre firmado por Embajador | Embajador |

**Regla de retroceso:** una orden solo retrocede de estado si hay cancelacion formal (ver canonico, Sec 12.4). No existe estado "pausada"; una reprogramacion mantiene el estado actual y actualiza fechas.

---

## 2) Template de orden de servicio

> **Instrucciones:** copiar la tabla completa. Completar cada campo. Los campos marcados con `*` son obligatorios para transicionar a EN PREPARACION. Los campos marcados con `**` son obligatorios para transicionar a EN EJECUCION.

---

### Seccion A -- Identificacion de la orden

| Campo | Valor | Validacion |
|---|---|---|
| `*` ID de orden | `ODS-{YYYY}-{###}` (ej: ODS-2026-047) | Secuencial, unico. No reutilizar IDs de ordenes canceladas. |
| `*` Fecha de creacion | YYYY-MM-DD | Debe ser la fecha en que se confirma pago/PO. |
| `*` Estado actual | ACTIVADA / EN PREPARACION / EN EJECUCION / CERRADA | Solo valores validos del ciclo. |
| `*` Embajador asignado | Nombre + email | Debe ser embajador activo en el sistema. |
| `**` Facilitador asignado | Nombre + email | Debe asignarse antes de D-7 (Workshop) o D-14 (otros). |

### Seccion B -- Datos del cliente

| Campo | Valor | Validacion |
|---|---|---|
| `*` Nombre del cliente / organizacion | Texto libre | Razon social si B2B. Nombre completo si B2C. |
| `*` Segmento | B2C / B2B / B2B2B | Determina campos condicionales (ver Sec 5). |
| `*` Contacto principal | Nombre + email + telefono | Quien firma, paga y recibe comunicaciones. |
| Contacto TI (si aplica) | Nombre + email | Obligatorio si el cliente tiene restricciones de motor IA. |
| NIT / Documento fiscal | Texto | Obligatorio para facturacion corporativa. |
| Industria / sector | Texto | Alimenta deep research. Si B2C: ocupacion/nicho. |
| Pais / ciudad | Texto | Determina zona horaria y logistica presencial. |

### Seccion C -- Detalle del servicio

| Campo | Valor | Validacion |
|---|---|---|
| `*` Servicio contratado | Nombre canonico exacto (slug) | Debe existir en el catalogo vigente. |
| `*` Tipo de servicio | Workshop / Bootcamp / Programa / Consultive | Determina timeline operativo (Anexo E). |
| `*` SKU | Codigo SKU del servicio | Debe coincidir con catalogo. |
| `*` Modalidad | Virtual sincronico / Presencial / Hibrido | Presencial requiere cotizacion logistica separada. |
| `*` Precio total acordado (COP) | Numerico | Debe coincidir con canonico o con descuento autorizado por escrito. |
| `*` Moneda | COP / USD | Si USD: aplicar tasa de politica comercial del canonico. |
| `*` Esquema de pago | 1 cuota / 3 cuotas / Personalizado (detallar) | Si personalizado: adjuntar acuerdo escrito. |
| Descuento aplicado | % y justificacion | Solo si hay credito educativo o promocion vigente. |
| Credito educativo aplicado | Servicio fuente + monto + ID de orden fuente | Validar vigencia del credito (ventana de meses). |

### Seccion D -- Participantes

| Campo | Valor | Validacion |
|---|---|---|
| `*` Numero de participantes confirmados | Numerico | Dentro del rango del canonico. Si excede umbral de cofacilitacion: ajustar precio. |
| `**` Lista de participantes | Nombre + email por persona | Obligatorio antes de EN EJECUCION. Minimo: 2 para quorum. |
| Nivel estimado de madurez digital | Basico / Intermedio / Avanzado | Autodeclarado o estimado por el contacto principal. |
| Roles de los participantes | Texto libre | Alimenta contextualizacion. |

### Seccion E -- Calendario y logistica

| Campo | Valor | Validacion |
|---|---|---|
| `*` Fecha(s) de ejecucion | YYYY-MM-DD (lista si multisesion) | Respetar lead time minimo del canonico (Sec 10.2). |
| `*` Horario | HH:MM - HH:MM (zona horaria) | Zona horaria explicita. Default: COT (UTC-5). |
| `**` Plataforma de videoconferencia | Zoom / Meet / Teams / Otra | Si presencial: direccion fisica + contacto logistico. |
| `**` Enlace de sesion | URL | Generado y probado antes de D-2. |
| `**` Link de grabacion configurado | Si / No | Si No: activar antes de D-1. |

### Seccion F -- Motor IA y restricciones

| Campo | Valor | Validacion |
|---|---|---|
| `*` Motor IA principal | ChatGPT / Gemini / Copilot / Otro: _______ | Verificar que participantes tienen acceso. |
| Motor IA alternativo | Texto | Para contingencia si el principal falla. |
| Restricciones de TI del cliente | Texto libre | Motores bloqueados, politicas de datos, VPN requerida. |
| Datos sensibles / restricciones de contenido | Texto libre | Temas que no se pueden tocar, datos que no se pueden usar. |

### Seccion G -- Equipo y asignaciones

| Campo | Valor | Validacion |
|---|---|---|
| `*` Embajador | Nombre + email | Ya asignado en Seccion A. |
| `**` Facilitador principal | Nombre + email | Asignar segun disponibilidad y expertise en el tipo de servicio. |
| Cofacilitador (si aplica) | Nombre + email | Obligatorio si participantes > umbral de cofacilitacion del canonico. |
| Observador / facilitador en formacion | Nombre + email | Opcional. No cuenta como cofacilitador. |

### Seccion H -- Notas y acuerdos especiales

| Campo | Valor |
|---|---|
| Acuerdos especiales (por escrito) | Texto libre. Ej: "Pago en 2 cuotas autorizado por Director el 2026-03-15." |
| Observaciones internas | Texto libre. No visible para el cliente. |

---

## 3) SLA de activacion

| Hito | Plazo | Medido desde | Responsable |
|---|---|---|---|
| Orden creada en CRM con campos obligatorios | **D+1 habil** | Confirmacion de pago / PO firmada | Embajador |
| Repositorio del cliente creado | **D+1 habil** | Orden creada | Embajador |
| Brief de contextualizacion enviado al cliente | **D+1 habil** | Orden creada | Embajador |
| Facilitador asignado y notificado | **D+2 habiles** | Orden creada | Embajador |
| Deep research completado | Segun Anexo E (varia por tipo) | Orden creada | Embajador |

**Incumplimiento del SLA:** si la orden no se completa en D+1, el Embajador escala al Director con justificacion y plan de remediacion.

---

## 4) Checklist de activacion

> Todos los items deben estar completados antes de que la orden transite a EN PREPARACION.

- [ ] Pago Cuota 1 confirmado en sistema de pagos / PO firmada recibida.
- [ ] Orden creada en CRM con todos los campos `*` completados.
- [ ] Repositorio del cliente creado con estructura estandar (Anexo F, Sec 5).
- [ ] Brief de contextualizacion enviado al contacto principal (Template T2, Anexo E).
- [ ] Facilitador asignado y confirmado.
- [ ] Confirmacion de servicio enviada al cliente (Template T1, Anexo E).
- [ ] Accesos al repositorio compartidos con Facilitador.
- [ ] Motor IA y restricciones de TI documentados en la orden.

---

## 5) Campos condicionales por tipo de servicio

### 5.1 Workshop (3h, sesion unica)

| Campo adicional | Obligatoriedad | Nota |
|---|---|---|
| Fecha unica de ejecucion | Obligatorio | Solo 1 fecha. |
| Lista de participantes | Obligatorio D-2 | Lista final; no se admiten cambios post-sesion. |
| Campus/LMS | No aplica | Workshops no incluyen campus. |
| Proyecto final / rubrica | No aplica | Solo para Bootcamps y Programas. |

### 5.2 Bootcamp (18-20h, multisesion)

| Campo adicional | Obligatoriedad | Nota |
|---|---|---|
| Calendario completo (todas las sesiones) | Obligatorio | Fechas + horarios de las 9-10 sesiones. |
| Especificacion de proyecto final | Obligatorio D-7 antes de sesion final | Coordinado con Facilitador. |
| Rubrica de evaluacion | Obligatorio si hay certificacion por competencia | Debe estar aprobada antes de sesion 7. |
| Acceso a campus/LMS | Obligatorio D-3 antes de sesion 1 | Verificar que todos los participantes pueden acceder. |

### 5.3 Programa (16 semanas)

| Campo adicional | Obligatoriedad | Nota |
|---|---|---|
| Calendario completo (16 semanas) | Obligatorio | Incluye sesiones grupales, mentorias 1:1, talleres tematicos. |
| Plan de mentoria 1:1 | Obligatorio D-7 antes de inicio | Asignacion de mentor, frecuencia, canales. |
| Governance model | Obligatorio | Comite de seguimiento, frecuencia de reportes, escalamiento. |
| Capstone / proyecto integrador spec | Obligatorio antes de semana 8 | Tema, alcance, criterios de evaluacion. |
| Acceso a campus/LMS | Obligatorio D-5 antes de sesion 1 | Setup completo con contenido de las primeras 4 semanas. |

### 5.4 Consultive Workshop (18h, 9 sesiones)

| Campo adicional | Obligatoriedad | Nota |
|---|---|---|
| Calendario de 9 sesiones | Obligatorio | 2h por sesion, frecuencia acordada (semanal o quincenal). |
| Artefactos template por sesion | Obligatorio D-3 antes de cada sesion | Coordinado con Facilitador segun progreso del cliente. |
| Prompt pack por sesion | Obligatorio D-3 antes de cada sesion | Personalizado al contexto del cliente. |
| Playbook de continuidad | Obligatorio al cierre | Entregable final que consolida decisiones y proximos pasos. |

---

## 6) Campos condicionales por segmento

### 6.1 B2C (persona natural)

| Campo | Obligatoriedad | Nota |
|---|---|---|
| Nombre completo | Obligatorio | Persona natural. |
| Email personal | Obligatorio | Canal principal de comunicacion. |
| Documento de identidad | No requerido | Solo si solicita factura. |
| NIT / razon social | No aplica | Es persona natural. |
| Contacto TI | No aplica | No hay area de TI. |
| Acuerdo de pago personalizado | Raro | Default: pago unico pre-sesion o 3 cuotas. |

### 6.2 B2B (empresa contrata directamente)

| Campo | Obligatoriedad | Nota |
|---|---|---|
| Razon social | Obligatorio | Para facturacion y contrato. |
| NIT / Documento fiscal | Obligatorio | Para facturacion corporativa. |
| Contacto principal (sponsor) | Obligatorio | Quien aprueba, paga, recibe reportes. |
| Contacto TI | Condicional | Obligatorio si hay restricciones de motor IA o VPN. |
| Lista de participantes por nombre | Obligatorio D-2 | Puede cambiar hasta D-2; despues genera re-emision de certificados. |
| Orden de compra (PO) | Condicional | Requerido si la empresa lo exige para procesar pago. |

### 6.3 B2B2B (partner / contrato marco)

| Campo | Obligatoriedad | Nota |
|---|---|---|
| Razon social del partner | Obligatorio | Quien contrata y paga. |
| Razon social del cliente final | Obligatorio | Quien recibe el servicio. |
| Contacto del partner (coordinador) | Obligatorio | Interlocutor operativo. |
| Contacto del cliente final (sponsor) | Obligatorio | Quien valida contenido y participantes. |
| Contrato marco vigente | Obligatorio | Referencia al contrato que ampara la ejecucion. |
| Marca a usar | Obligatorio | MetodologIA / JM Labs / IAC (white-label). |
| Restricciones de marca | Condicional | Si white-label: que se puede y que no se puede mostrar. |

---

## 7) Integracion con CRM

### 7.1 Mapeo de campos Orden --> CRM

| Campo de la orden | Campo CRM (nombre logico) | Tipo | Notas |
|---|---|---|---|
| ID de orden | `deal_id` o `opportunity_id` | Texto unico | Generado por CRM al crear el deal. |
| Estado de la orden | `deal_stage` | Picklist | Mapear: ACTIVADA = Closed Won, EN PREPARACION = Delivery Prep, EN EJECUCION = In Delivery, CERRADA = Delivered. |
| Nombre del cliente | `company_name` / `contact_name` | Texto | Segun segmento. |
| Segmento | `segment` | Picklist | B2C / B2B / B2B2B. |
| Servicio contratado | `product_name` o `line_item` | Lookup | Vinculado al catalogo de productos en CRM. |
| Precio total | `deal_amount` | Moneda | En COP. Si USD: registrar ambos. |
| Embajador | `deal_owner` | Lookup usuario | El embajador es el owner del deal. |
| Facilitador | Campo custom `facilitator` | Lookup usuario | Campo custom obligatorio. |
| Fecha(s) de ejecucion | Campo custom `delivery_date` | Fecha | Si multisesion: fecha de sesion 1. |
| NPS | Campo custom `nps_score` | Numerico | Actualizado post-cierre. |
| Credito generado | Campo custom `credit_amount` + `credit_expiry` | Moneda + Fecha | Calculado automaticamente al cerrar. |
| Siguiente accion | Campo custom `next_action` | Texto | Actualizado por Embajador en cada transicion de estado. |

`[SUPUESTO: mapeo basado en CRM generico (HubSpot/Pipedrive) | adaptar nombres de campos al CRM real cuando se implemente]`

### 7.2 Automatizaciones recomendadas

| Evento | Automatizacion | Responsable de configurar |
|---|---|---|
| Deal pasa a Closed Won | Crear tarea "Completar Orden de Servicio" asignada al Embajador, vencimiento D+1 | CRM admin |
| Estado pasa a EN EJECUCION | Crear recordatorio de encuesta NPS para D+2 post-ultima-sesion | CRM admin |
| Estado pasa a CERRADA | Calcular credito educativo y registrar en campos custom; crear tarea de follow-up semana 1 | CRM admin |
| Credito proximo a vencer (30 dias) | Notificacion automatica al Embajador y al cliente | CRM admin |

---

## 8) Manejo de errores y cambios

### 8.1 Datos incompletos

| Situacion | Impacto | Protocolo |
|---|---|---|
| Campos `*` incompletos | La orden no transita a EN PREPARACION | Embajador tiene D+1 para completar. Si no completa: escalar a Director. |
| Campos `**` incompletos | La orden no transita a EN EJECUCION | Embajador gestiona con cliente. Deadline: D-2 antes de sesion 1. |
| Brief no completado por el cliente | Ejecucion procede con casos genericos | Embajador notifica al Facilitador. Se documenta en la orden. |

### 8.2 Cambio de participantes

| Momento del cambio | Protocolo | Impacto |
|---|---|---|
| Antes de D-2 | Actualizar lista en la orden y notificar al Facilitador | Sin impacto. |
| Entre D-2 y D-0 | Actualizar lista; Facilitador ajusta materiales si es posible | Certificados pueden retrasarse 1 dia. |
| Despues de sesion 1 (multisesion) | Nuevos participantes entran en desventaja; Embajador provee materiales de nivelacion | No se re-ejecutan sesiones pasadas. Asistencia parcial se refleja en certificado. |
| Cambio que excede umbral de cofacilitacion | Requiere ajuste de precio y asignacion de cofacilitador | Embajador presenta nueva cotizacion al cliente antes de proceder. |

### 8.3 Cambio de fechas

| Situacion | Protocolo | Referencia |
|---|---|---|
| 1a reprogramacion con >=48h de aviso | Sin costo. Actualizar orden y calendario. Notificar equipo y participantes. | Canonico, Sec 12.4. |
| 2a+ reprogramacion o <48h de aviso | Fee segun canonico. Actualizar orden. Registrar incidencia. | Canonico, Sec 12.4. |
| Cambio de horario (misma fecha) | Sin costo si >=48h de aviso. Notificar a todos. | Tratado como reprogramacion menor. |
| Cambio solicitado por MetodologIA | Sin costo. Ofrecer primera alternativa en 3 dias habiles. | Fuerza mayor aplica. |

### 8.4 Cancelacion

| Situacion | Protocolo | Referencia |
|---|---|---|
| Cancelacion antes de Cuota 1 | Sin costo. Marcar orden como CANCELADA. | Canonico, Sec 12.4. |
| Cancelacion post-inicio | No aplica devolucion (ver garantia en canonico). Cerrar orden como CANCELADA con nota. | Canonico, Sec 12.5. |

---

## 9) Registro de versiones

| Version | Fecha | Autor | Cambios clave |
|---|---|---|---|
| v1.0 | 2026-03-29 | JM | Creacion inicial del anexo transversal |
