# Anexo H -- Cierre Operativo del Servicio

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Autor:** JM + Claude
**Aplica a:** Todos los 17 servicios del catalogo (transversal).
**Trigger:** Todas las sesiones ejecutadas + todas las memorias entregadas con confirmacion del cliente.
**Objetivo:** Declarar formalmente el servicio CERRADO con evidencia auditable, de modo que ningun actor pueda alegar ambiguedad sobre el estado.
**Responsable primario:** Embajador.
**Clasificacion:** Interno-operativo.

> **Regla de autoridad:** Este anexo es operativo. No modifica alcance ni politicas definidas en el canonico de cada servicio. Si hay conflicto, el canonico del servicio manda.

### Convenciones de trazabilidad
- `[EVIDENCIA: fuente]` -- dato verificado.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- bloquea publicacion.
- `[DECISION: fecha, quien, alternativa descartada]` -- trade-off resuelto.

---

## H1) Checklist de cierre operativo

El embajador ejecuta esta checklist secuencialmente. Un servicio NO puede pasar a estado CERRADO hasta que todos los items obligatorios esten marcados como completados. Los items condicionales solo aplican cuando la condicion se cumple.

### H1.1 Items obligatorios (todos los servicios)

| # | Item de cierre | Verificacion | Fuente de evidencia | Responsable |
|---|---------------|-------------|-------------------|-------------|
| 1 | Todas las sesiones ejecutadas segun plan aprobado | Comparar sesiones ejecutadas vs plan original. Si hubo reprogramaciones, verificar que las sesiones de recuperacion se ejecutaron. | CRM: `total_sesiones_ejecutadas` vs `total_sesiones_planificadas` | Embajador |
| 2 | Todas las memorias entregadas con confirmacion del cliente | Cada sesion tiene su paquete entregado (Anexo G) y la confirmacion de recepcion registrada en CRM. | CRM: `memorias_sesion_N_confirmacion_cliente = confirmada` para todas las N | Embajador |
| 3 | Certificados de asistencia emitidos | Para todos los participantes que cumplieron el umbral de asistencia definido en el canonico del servicio (Sec 8). | Archivo de certificados en repositorio + lista de emision | Embajador (genera), Facilitador (valida datos) |
| 4 | Certificados de competencia emitidos (si aplica) | Para participantes que ademas aprobaron la evaluacion segun rubrica del canonico. | Rubrica completada por facilitador + certificado emitido | Embajador (genera), Facilitador (evalua) |
| 5 | Repositorio del servicio completo y accesible | Todos los archivos de todas las sesiones estan en el repositorio, con nomenclatura correcta (Anexo G, G8), y el cliente tiene acceso. | Verificacion manual del repositorio: abrir 3 archivos aleatorios para confirmar accesibilidad | Embajador |
| 6 | Credito educativo registrado | Si el servicio genera credito hacia un servicio siguiente (definido en Sec 1.4 del canonico), registrar: monto, ventana de vigencia, servicio destino. | CRM: campos de credito completados | Embajador |
| 7 | Encuesta de satisfaccion enviada | Enviar encuesta NPS + preguntas abiertas (template en Anexo I, I3). | CRM: `encuesta_enviada = SI`, `encuesta_fecha_envio` | Embajador |
| 8 | NPS registrado | Si el cliente respondio la encuesta, registrar score y comentarios. Si no respondio, registrar `nps_score = NULL` con `nps_estado = NO_RESPONDIDO`. | CRM: campos de NPS | Embajador |
| 9 | CRM completamente actualizado | Todos los campos de la seccion H2 estan completados. Ninguno en blanco o con valor placeholder. | Revision campo por campo del CRM | Embajador |
| 10 | Ventana de garantia comunicada al cliente | Informar por escrito al cliente las condiciones de garantia del servicio: ventana temporal, que cubre, como activarla. | Email de cierre con seccion de garantia + confirmacion de lectura | Embajador |
| 11 | Facturacion al dia | Todas las cuotas pactadas estan pagadas, o existe un plan de regularizacion activo y documentado. No se cierra un servicio con deuda no gestionada. | CRM: `billing_status` = `AL_DIA` o `REGULARIZACION` (no `EN_MORA` sin plan) | Embajador + Administracion |
| 12 | Notas del embajador completadas | El embajador documenta: observaciones sobre el cliente, oportunidades detectadas, riesgos identificados, recomendaciones para post-venta. Estas notas alimentan el seguimiento (Anexo I). | CRM: `ambassador_notes` no vacio y con contenido sustantivo | Embajador |
| 13 | Accion de seguimiento agendada | Debe existir al menos una accion de seguimiento con fecha concreta dentro de los primeros 7 dias post-cierre. | CRM: `next_action` y `next_action_date` completados, `next_action_date` <= cierre + 7 dias | Embajador |
| 14 | Participantes informados del cierre | Comunicacion a todos los participantes (no solo al contacto comercial) confirmando que el servicio ha concluido, con links al repositorio y datos de contacto del embajador. | Email de cierre a lista de participantes | Embajador |
| 15 | Facilitador liberado formalmente | El facilitador recibe confirmacion de que su compromiso con este servicio termino. Se solicita feedback interno sobre el cliente y la ejecucion. | Email interno al facilitador + registro de feedback recibido | Embajador |

### H1.2 Items condicionales

| # | Item | Condicion de activacion | Verificacion | Responsable |
|---|------|------------------------|-------------|-------------|
| 16 | Co-facilitador liberado | Servicio tuvo co-facilitador asignado | Misma logica que item 15 | Embajador |
| 17 | Reembolso parcial procesado | Se otorgo garantia durante la ejecucion (sesion fallida no recuperada, incidente grave) | CRM: `garantia_activada = SI`, nota de credito emitida | Embajador + Administracion |
| 18 | Plan de regularizacion de pagos documentado | Facturacion no esta al dia y se acordo un plan | Documento firmado por cliente con fechas de pago | Embajador + Administracion |
| 19 | Escalamiento de calidad registrado | Hubo incidentes de calidad durante la ejecucion (NPS < 7, queja formal, sesion fallida) | Reporte de incidente en CRM + accion correctiva definida | Embajador + Director de Operaciones |
| 20 | Transferencia de credito B2B2B negociada | Servicio B2B2B con credito que requiere negociacion especial | Acuerdo documentado en contrato marco actualizado | Embajador + Director Comercial |

---

## H2) Esquema de actualizacion de CRM al cierre

Al declarar el cierre, el embajador actualiza los siguientes campos en el CRM. Todos son obligatorios (no se permite dejar campos en blanco). Si un dato no aplica, se registra con valor explicito "N/A" y justificacion.

| Campo CRM | Tipo de dato | Valores permitidos | Descripcion | Ejemplo |
|-----------|-------------|-------------------|-------------|---------|
| `service_status` | Enum | `CERRADO` | Estado final del servicio tras completar checklist | `CERRADO` |
| `close_date` | Date | YYYY-MM-DD | Fecha en que el embajador completo la checklist de cierre y declaro el cierre formal | `2026-05-15` |
| `nps_score` | Integer (nullable) | 0-10 o NULL | Score NPS del cliente. NULL si no respondio encuesta. | `9` |
| `nps_comments` | Text (nullable) | Texto libre o NULL | Comentarios literales del cliente en la encuesta. No editar ni interpretar. | "Excelente facilitador, los ejercicios fueron muy practicos" |
| `credit_active` | Boolean | true / false | Si este servicio genera credito educativo hacia un servicio siguiente. | `true` |
| `credit_amount` | Currency (COP) | >= 0 | Monto del credito en pesos colombianos. 0 si no aplica credito. | `200000` |
| `credit_expiry` | Date | YYYY-MM-DD | Fecha limite para activar el credito. Calculada como: close_date + ventana definida en canonico (Sec 1.4). | `2026-08-15` |
| `credit_destination` | Slug | Slug del servicio destino o "any" si es flexible | Servicio al que aplica el credito. | `bootcamp-trabajar-amplificado` |
| `ambassador_notes` | Text | Texto libre (>= 100 caracteres) | Observaciones del embajador: dinamica del cliente, oportunidades, riesgos, recomendaciones para post-venta. Minimo 100 caracteres para evitar notas vacias disfrazadas. | "Cliente muy comprometido, equipo de marketing mostro interes en Bootcamp Ventas Amplificadas. Riesgo: sponsor principal cambia de cargo en Q3. Recomendar contacto directo con nuevo sponsor." |
| `next_action` | Text | Texto libre | Descripcion de la proxima accion de seguimiento post-venta. | "Llamada de seguimiento semana 1 - validar aplicacion de aprendizajes" |
| `next_action_date` | Date | YYYY-MM-DD | Fecha de la proxima accion. Debe ser <= close_date + 7 dias. | `2026-05-20` |
| `guarantee_activated` | Boolean | true / false | Si se activo la garantia del servicio durante o despues de la ejecucion. | `false` |
| `guarantee_reason` | Text (nullable) | Texto libre o NULL | Motivo de activacion de garantia. NULL si no se activo. | NULL |
| `billing_status` | Enum | `AL_DIA` / `EN_MORA` / `REGULARIZACION` | Estado de la facturacion al momento del cierre. | `AL_DIA` |
| `total_sessions_executed` | Integer | >= 0 | Numero total de sesiones efectivamente ejecutadas (incluye recuperaciones, excluye fallidas no recuperadas). | `3` |
| `total_participants` | Integer | >= 1 | Numero de participantes unicos que asistieron al menos a una sesion. | `18` |
| `certificates_issued` | Integer | >= 0 | Numero total de certificados emitidos (asistencia + competencia). | `20` |

**Validacion automatica (recomendada):** Configurar el CRM para que no permita cambiar `service_status` a `CERRADO` sin que todos los campos obligatorios esten completos. Si el CRM no soporta validacion automatica, el embajador ejecuta la verificacion manual campo por campo. [POR CONFIRMAR: JM, 2026-04-15 -- verificar capacidad del CRM actual para validaciones condicionales]

---

## H3) Condiciones para reabrir un servicio cerrado

Un servicio en estado CERRADO es, por defecto, inmutable. Reabrirlo implica riesgo operativo (confunde metricas, reabre compromisos, genera ambiguedad contractual). Por tanto, la reapertura requiere aprobacion explicita del Director de Operaciones.

### H3.1 Causales validas de reapertura

| Causal | Condicion especifica | Aprobador | Estado resultante |
|--------|---------------------|-----------|------------------|
| Garantia activada | El cliente activa la garantia dentro de la ventana definida en el canonico del servicio (tipicamente 48h para workshops, condiciones especificas para otros). | Director de Operaciones | `EN_GARANTIA` |
| Disputa de pago | El cliente disputa un cobro y la resolucion requiere re-evaluacion del servicio entregado. | Director de Operaciones + Administracion | `EN_DISPUTA` |
| Reclamacion formal de calidad | El cliente presenta una queja formal (por escrito) que requiere investigacion sobre la ejecucion del servicio. | Director de Operaciones | `EN_DISPUTA` |
| Error administrativo de cierre | El embajador cerro el servicio prematuramente (faltan sesiones, memorias no entregadas). | Director de Operaciones | `EN_EJECUCION` o `MEMORIAS_PENDIENTES` segun corresponda |

### H3.2 Causales NO validas de reapertura

| Solicitud | Por que no procede | Alternativa |
|-----------|-------------------|-------------|
| "Quiero agregar mas participantes" | El servicio ya se ejecuto. Nuevos participantes requieren nuevo ciclo de servicio. | Cotizar nuevo servicio con credito si aplica. |
| "Quiero repetir una sesion" | Las sesiones no se repiten post-cierre salvo activacion de garantia. | Evaluar si aplica garantia. Si no, cotizar sesion adicional. |
| "Necesito acceso al repositorio" (despues de los 30 dias) | La politica de retencion (Anexo G, G5) es clara y fue comunicada 3 veces. | Verificar si MetodologIA aun tiene copia interna (<=90 dias). Si si, compartir por unica vez como gesto comercial. |

### H3.3 Proceso de reapertura

1. Embajador recibe solicitud del cliente y documenta causal.
2. Embajador presenta caso al Director de Operaciones con: causal, evidencia, impacto esperado, recomendacion.
3. Director aprueba o rechaza en <= 24 horas habiles.
4. Si aprobado: embajador cambia `service_status` al estado correspondiente, registra `reopen_date`, `reopen_reason`, `reopen_approved_by` en CRM.
5. Se ejecuta la accion correctiva (sesion de garantia, investigacion de queja, etc.).
6. Al resolver, se ejecuta nuevamente la checklist de cierre (H1) completa.

---

## H4) Flujo de estados del servicio

El ciclo de vida de un servicio sigue un flujo definido de estados. Las transiciones solo ocurren cuando se cumplen las condiciones especificadas. No hay transiciones implicitas.

### H4.1 Estados y transiciones

| Estado | Descripcion | Transiciones posibles | Condicion de transicion |
|--------|-------------|----------------------|------------------------|
| `ACTIVADA` | Servicio contratado y pagado (al menos Cuota 1). Aun no se inicia preparacion. | `EN_PREPARACION`, `CANCELADO` | Preparacion: embajador inicia onboarding. Cancelacion: cliente cancela antes de cualquier ejecucion. |
| `EN_PREPARACION` | Brief enviado, checklist 48h en curso, facilitador asignado. | `EN_EJECUCION`, `CANCELADO` | Ejecucion: primera sesion ejecutada. Cancelacion: cliente cancela antes de primera sesion. |
| `EN_EJECUCION` | Al menos una sesion ejecutada. Servicio activo. | `MEMORIAS_PENDIENTES`, `CANCELADO` | Memorias pendientes: ultima sesion ejecutada, quedan entregas por completar. Cancelacion: interrupcion antes de completar todas las sesiones (aplican condiciones de reembolso del canonico). |
| `MEMORIAS_PENDIENTES` | Todas las sesiones ejecutadas. Faltan entregas de memorias, certificados o confirmaciones. | `CERRADO` | Cierre: checklist H1 completada al 100%. |
| `CERRADO` | Servicio formalmente concluido. Ciclo de post-venta iniciado (Anexo I). | `EN_GARANTIA`, `EN_DISPUTA` | Garantia: cliente activa garantia dentro de ventana. Disputa: reclamacion formal. |
| `EN_GARANTIA` | Garantia activada. Se esta ejecutando la accion correctiva. | `CERRADO` | Cierre: accion correctiva completada + nueva checklist H1. |
| `EN_DISPUTA` | Hay una reclamacion o disputa activa que impide considerar el servicio como satisfactoriamente concluido. | `CERRADO`, `CANCELADO` | Cierre: disputa resuelta favorablemente. Cancelacion: disputa resulta en cancelacion retroactiva (excepcional). |
| `CANCELADO` | Servicio interrumpido antes de completarse. No genera credito educativo. | Ninguna (estado terminal) | N/A |

### H4.2 Reglas de integridad

1. Un servicio solo puede estar en un estado a la vez. No hay estados simultaneos.
2. La transicion a `CERRADO` solo es posible desde `MEMORIAS_PENDIENTES` o desde `EN_GARANTIA`/`EN_DISPUTA` (reapertura resuelta).
3. `CANCELADO` es un estado terminal. No se puede reactivar un servicio cancelado; se debe crear uno nuevo.
4. Todo cambio de estado se registra en CRM con: estado anterior, estado nuevo, fecha, responsable, motivo.
5. Los estados `EN_GARANTIA` y `EN_DISPUTA` requieren aprobacion del Director de Operaciones (no los puede activar el embajador unilateralmente). [DECISION: 2026-03-29, JM, activacion unilateral por embajador descartada -- riesgo de uso excesivo de garantias sin supervision]

---

## H5) Comunicacion de cierre al cliente

El cierre se comunica al cliente mediante un email formal que consolida toda la informacion relevante. Este email no es una formalidad: es el documento que el cliente conservara como referencia de lo que contrato y recibio.

### H5.1 Estructura del email de cierre

```
Asunto: Cierre formal del servicio [Nombre del servicio] - [Nombre del cliente]

Estimado/a [Nombre del contacto],

Nos es grato confirmar que el servicio [Nombre del servicio] ha sido ejecutado
y entregado en su totalidad. A continuacion, un resumen del cierre:

RESUMEN DE EJECUCION:
- Sesiones ejecutadas: [N] de [M] planificadas
- Participantes: [N] personas
- Periodo de ejecucion: [fecha inicio] a [fecha fin]

ENTREGABLES:
- Memorias de sesion: entregadas y confirmadas (Sesiones 1 a N)
- Certificados de asistencia: [N] emitidos
- Certificados de competencia: [N] emitidos (si aplica)
- Repositorio: accesible en [URL] hasta [fecha de vencimiento]

CREDITO EDUCATIVO (si aplica):
- Monto: COP [X]
- Vigencia: hasta [fecha]
- Aplicable a: [nombre del servicio destino]
- Para activarlo, comuniquese con su embajador.

GARANTIA:
- Ventana: [condiciones segun canonico del servicio]
- Para activarla: contactar a [nombre del embajador] a [email/telefono]

ACCESO A REPOSITORIO:
- URL: [link]
- Vigencia: [N] dias a partir de hoy ([fecha de vencimiento])
- Recomendamos descargar todos los materiales antes del vencimiento.

CONTACTO POST-SERVICIO:
- Embajador asignado: [Nombre] - [email] - [telefono]
- Para cualquier consulta sobre el servicio completado o sobre servicios futuros.

Agradecemos la confianza depositada en [MetodologIA / IAC / JM Labs].

Cordialmente,
[Nombre del embajador]
[Cargo]
[Datos de contacto]
```

---

## Historial de versiones

| Version | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-03-29 | JM + Claude | Creacion inicial. 5 secciones: checklist de cierre (20 items), esquema CRM (17 campos), condiciones de reapertura, flujo de estados (8 estados), comunicacion de cierre. Transversal a los 17 servicios. |
