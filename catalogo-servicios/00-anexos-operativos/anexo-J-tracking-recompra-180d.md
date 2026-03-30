# Anexo J -- Tracking de Recompra (180 dias)

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Autor:** JM + Claude
**Aplica a:** Todos los 17 servicios del catalogo (transversal).
**Trigger:** Dia 180 post-cierre del servicio (touchpoint T7 del Anexo I).
**Responsable primario:** Embajador (evaluacion individual) + Director Comercial (analisis agregado).
**Clasificacion:** Interno-estrategico.

> **Principio rector:** La metrica definitiva de un servicio no es el NPS, ni la tasa de asistencia, ni la satisfaccion declarada. Es si el cliente compro de nuevo dentro de 180 dias. Todo lo demas son indicadores proxy. La recompra es la unica validacion real de que el servicio genero suficiente valor percibido para justificar una nueva inversion. [DECISION: 2026-03-29, JM, NPS como metrica principal descartado -- NPS mide intencion, recompra mide accion. La correlacion entre ambos es informativa pero no definitiva]

> **Regla de autoridad:** Este anexo es operativo y estrategico. No modifica alcance ni politicas definidas en el canonico de cada servicio. Si hay conflicto, el canonico del servicio manda.

### Convenciones de trazabilidad
- `[EVIDENCIA: fuente]` -- dato verificado.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- bloquea publicacion.
- `[DECISION: fecha, quien, alternativa descartada]` -- trade-off resuelto.

---

## J1) Mecanismo de evaluacion a 180 dias

Al cumplirse 180 dias calendario desde la fecha de cierre operativo (`close_date` en CRM, Anexo H), el embajador realiza la evaluacion de recompra. Esta evaluacion no depende de que el cliente responda a un touchpoint: el embajador la ejecuta con base en datos internos del CRM y, si es necesario, contacto directo con el cliente.

### J1.1 Datos a registrar

| Campo CRM | Tipo | Valores permitidos | Descripcion | Ejemplo |
|-----------|------|-------------------|-------------|---------|
| `recompra_180d` | Enum | `SI` / `NO` | El cliente contrato otro servicio de MetodologIA/IAC/JM Labs dentro de los 180 dias posteriores al cierre. | `SI` |
| `recompra_180d_servicio` | Slug (nullable) | Slug del servicio contratado o NULL | Si recompro: cual servicio. NULL si no recompro. | `bootcamp-trabajar-amplificado` |
| `recompra_180d_con_credito` | Boolean (nullable) | true / false / NULL | Si la recompra utilizo credito educativo del servicio original. NULL si no recompro. | `true` |
| `recompra_180d_monto` | Currency (nullable) | COP >= 0 o NULL | Monto total del servicio recomprado (antes de credito). NULL si no recompro. | `800000` |
| `recompra_180d_fecha` | Date (nullable) | YYYY-MM-DD o NULL | Fecha de contratacion del servicio recomprado. NULL si no recompro. | `2026-09-20` |
| `recompra_180d_dias` | Integer (nullable) | >= 0 o NULL | Dias entre `close_date` del servicio original y contratacion del nuevo. Calculado automaticamente. | `95` |
| `razon_no_recompra` | Enum (nullable) | `SIN_PRESUPUESTO` / `SIN_NECESIDAD` / `COMPETIDOR` / `INSATISFACCION` / `SIN_CONTACTO` / `OTRO` / NULL | Si no recompro: categoria de razon. NULL si si recompro. | `SIN_PRESUPUESTO` |
| `razon_no_recompra_detalle` | Text (nullable) | Texto libre o NULL | Detalle de la razon. Especialmente critico para `COMPETIDOR` (cual competidor) e `INSATISFACCION` (que fallo). | "El cliente menciono que no tiene presupuesto hasta Q1 2027. Sugiere contactarlo en enero." |
| `recompra_180d_evaluacion_fecha` | Date | YYYY-MM-DD | Fecha en que el embajador ejecuto esta evaluacion. Debe ser close_date + 180 (+-5 dias de tolerancia). | `2026-11-12` |

### J1.2 Fuentes de datos para la evaluacion

El embajador no necesita preguntarle al cliente "compro de nuevo?" si la informacion ya existe en los sistemas internos. La evaluacion cruza multiples fuentes:

| Fuente | Que buscar | Prioridad |
|--------|-----------|-----------|
| CRM: nuevos servicios del mismo cliente | Verificar si existe otro servicio en estado `ACTIVADA`, `EN_PREPARACION`, `EN_EJECUCION`, `MEMORIAS_PENDIENTES` o `CERRADO` para el mismo cliente, con fecha de inicio posterior a `close_date` y anterior a `close_date + 180`. | 1 (primaria) |
| CRM: cotizaciones emitidas | Verificar si se emitio cotizacion al cliente dentro de los 180 dias. Si hay cotizacion sin cierre, registrar como pipelineactivo, no como recompra. | 2 |
| Contacto directo con cliente | Si no hay datos en CRM, el embajador contacta al cliente en touchpoint T7 (Anexo I) para confirmar situacion. | 3 (complementaria) |

### J1.3 Reglas de conteo

1. **Solo cuentan servicios contratados** (estado >= `ACTIVADA`). Cotizaciones en pipeline no cuentan como recompra.
2. **Cualquier servicio del catalogo cuenta**, no solo el servicio destino del credito educativo. Si el cliente contrato un servicio diferente al destino del credito, sigue siendo recompra.
3. **Servicios de terceros no cuentan.** Si el cliente contrato un proveedor externo (aunque sea de tematica similar), cuenta como `COMPETIDOR` en `razon_no_recompra`.
4. **Multiples recompras:** Si el cliente contrato mas de un servicio dentro de los 180 dias, se registra el primero como recompra principal y los adicionales como nota en `ambassador_notes`. La metrica `recompra_180d` es binaria (SI/NO), no de volumen.
5. **Recompra por referido del mismo cliente:** Si un referido del cliente se convierte en cliente, eso NO cuenta como recompra del cliente original. Son metricas separadas (referido vs. recompra).

---

## J2) Dashboard de metricas de recompra

El Director Comercial mantiene un dashboard con las siguientes metricas. La frecuencia de revision es mensual para metricas operativas y trimestral para metricas estrategicas.

### J2.1 Metricas principales

| # | Metrica | Formula | Target | Frecuencia | Justificacion del target |
|---|---------|---------|--------|-----------|-------------------------|
| 1 | **Tasa de recompra 180d** | (Clientes con `recompra_180d = SI`) / (Total clientes con ciclo de 180 dias completado) x 100 | >= 25% | Mensual | Un cuarto de los clientes recomprando indica servicio viable y cadena de valor funcional. Menos de 25% sugiere que el servicio no genera suficiente valor percibido o que la post-venta falla. [SUPUESTO: que 25% es alcanzable para servicios de formacion B2B en LATAM | validar con benchmark del sector cuando este disponible] |
| 2 | **Tiempo promedio a recompra** | Promedio de `recompra_180d_dias` para clientes con `recompra_180d = SI` | <= 90 dias | Mensual | Si el promedio es menor a 90 dias, la cadena de valor esta funcionando bien: el cliente no necesita 6 meses para decidir. Si es mayor a 90 dias, la post-venta probablemente necesita mas proactividad en T3-T5. |
| 3 | **Servicio de recompra mas frecuente** | Moda de `recompra_180d_servicio` para clientes con `recompra_180d = SI` | N/A (descriptivo) | Trimestral | Identifica cual es el "siguiente paso natural" real (vs. el teorico definido en los canonicos). Si el servicio de recompra mas frecuente no coincide con la ruta definida en Sec 1.4 de los canonicos, hay que ajustar la ruta o el discurso comercial. |
| 4 | **Tasa de activacion de credito** | (Creditos con `credit_status = ACTIVADO`) / (Total creditos con `credit_active = true` y `credit_expiry` vencido) x 100 | >= 40% | Trimestral | Si menos del 40% de los creditos se activan, el mecanismo de credito no esta funcionando como incentivo de recompra. Posibles causas: monto insuficiente, ventana muy corta, servicio destino no atractivo, comunicacion deficiente. [SUPUESTO: que 40% es alcanzable | validar con primer ciclo completo de datos] |
| 5 | **NPS de recompradores vs. no-recompradores** | NPS promedio de clientes con `recompra_180d = SI` vs. NPS promedio de clientes con `recompra_180d = NO` | Delta >= 1.5 puntos | Trimestral | Si los recompradores tienen NPS significativamente mayor, confirma que la satisfaccion predice recompra (y justifica invertir en NPS). Si el delta es bajo, NPS no es buen predictor y hay que buscar otras senales predictivas. |

### J2.2 Metricas de diagnostico (segunda capa)

Estas metricas se calculan cuando las metricas principales muestran desviacion del target. No requieren monitoreo permanente.

| Metrica | Formula | Utilidad |
|---------|---------|---------|
| Distribucion de razones de no-recompra | Frecuencia de cada valor de `razon_no_recompra` | Identifica la barrera principal. Si `SIN_PRESUPUESTO` domina, el problema es de pricing o timing. Si `INSATISFACCION` domina, el problema es de calidad. Si `SIN_CONTACTO` domina, el problema es de post-venta. |
| Recompra por servicio de origen | Tasa de recompra agrupada por `slug` del servicio original | Identifica cuales servicios generan clientes recurrentes y cuales no. Un servicio con alta satisfaccion pero baja recompra puede ser un "servicio terminal" (el cliente siente que ya obtuvo todo lo que necesitaba). |
| Recompra por embajador | Tasa de recompra agrupada por embajador asignado | Identifica si la variacion en recompra se explica por la gestion del embajador o por factores del servicio/cliente. Un embajador con recompra sistematicamente baja necesita coaching o redistribucion de carga. |
| Recompra con credito vs. sin credito | Tasa de recompra para clientes que usaron credito vs. clientes que no tenian credito disponible | Evalua si el credito educativo realmente incentiva la recompra o si los clientes habrian recomprado de todos modos. Si la tasa es similar, el credito no esta funcionando como incentivo y se debe redisenar. |
| Tiempo de recompra por servicio destino | Promedio de `recompra_180d_dias` agrupado por `recompra_180d_servicio` | Identifica si ciertos servicios destino se contratan mas rapido que otros. Util para calibrar la cadencia de touchpoints: si el bootcamp se contrata en promedio a los 60 dias, T4 (D+45) deberia incluir mencion directa del bootcamp. |

---

## J3) Acciones por resultado de evaluacion

La evaluacion de recompra no es un registro pasivo: cada resultado dispara acciones concretas.

### J3.1 Si recompro (recompra_180d = SI)

| # | Accion | Responsable | Plazo | Registro |
|---|--------|-------------|-------|---------|
| 1 | Celebrar internamente: reconocer al embajador y facilitador del servicio original. Un cliente que recompra es validacion directa del trabajo del equipo. | Director Comercial | En la proxima reunion de equipo | Mencion en reporte mensual |
| 2 | Solicitar testimonial: el momento ideal para pedir un testimonial es cuando el cliente ya demostro con su billetera que valora el servicio. Mas creible que un testimonial post-encuesta. | Embajador | <= 7 dias post-deteccion de recompra | CRM: `testimonial_solicitado`, `testimonial_obtenido` |
| 3 | Evaluar referido: si el cliente recompro Y tiene NPS >= 9, es el mejor candidato para referido. Activar protocolo I5 (Anexo I). | Embajador | Junto con solicitud de testimonial | CRM: campos de referido |
| 4 | Analizar patron: documentar que servicio original llevo a que servicio de recompra, en cuanto tiempo, con o sin credito. Este patron alimenta la optimizacion de rutas (Sec 1.4 de los canonicos). | Director Comercial | Trimestral (en business review) | Reporte trimestral |

### J3.2 Si NO recompro -- por razon

| Razon | Diagnostico | Accion inmediata | Accion estructural |
|-------|------------|-----------------|-------------------|
| `SIN_CONTACTO` | **Falla operativa del embajador.** Si el embajador cumplio la cadencia de touchpoints (Anexo I) y aun asi no hubo contacto, el problema puede ser de canal o de percepcion de valor de las comunicaciones. Si no cumplio la cadencia, es un problema de disciplina operativa. | Revisar touchpoints ejecutados en CRM. Si la cadencia fue cumplida: evaluar calidad de los mensajes. Si no fue cumplida: feedback correctivo al embajador. | Monitorear tasa de ghosting por embajador. Si es sistematica, reasignar cuentas o capacitar en comunicacion post-venta. |
| `INSATISFACCION` | **Problema de calidad del servicio.** Correlacionar con NPS: si el NPS fue bajo Y no recompro, la senal es consistente. Si el NPS fue alto pero no recompro por insatisfaccion, hubo un deterioro posterior que no se detecto. | Escalar a Director de Operaciones para investigacion. Revisar memorias del servicio (Anexo G) buscando incidentes o senales tempranas. | Implementar mecanismo de deteccion temprana de insatisfaccion (ej: pulso post-sesion, no solo encuesta post-cierre). Revisar si la garantia fue comunicada oportunamente. |
| `COMPETIDOR` | **Problema de diferenciacion o de precio.** El cliente encontro una alternativa que percibio como mejor en algun eje: precio, contenido, formato, reputacion. | Registrar competidor especifico: nombre, servicio que ofrecio, precio (si disponible), canal por el que llego el competidor al cliente. | Agregar al mapa competitivo. En la proxima revision trimestral, evaluar si se requiere ajuste de propuesta de valor, pricing, o posicionamiento. |
| `SIN_PRESUPUESTO` | **Problema de timing, no necesariamente de valor.** El cliente valora el servicio pero no puede invertir ahora. | Programar re-contacto a 360 dias desde cierre original (180 dias adicionales). Registrar: `recontacto_360d_fecha`. | Evaluar si la estructura de pagos (cuotas, credito) es suficientemente flexible. Si muchos clientes dicen "sin presupuesto", puede ser que el precio sea alto relativo a la capacidad de pago del segmento, no que el servicio carezca de valor. |
| `SIN_NECESIDAD` | **Posible sobre-venta o servicio terminal.** El cliente siente que obtuvo todo lo que necesitaba. Esto puede ser positivo (servicio tan completo que resolvio el problema) o negativo (el cliente fue cualificado incorrectamente y no necesitaba un servicio de continuidad). | Revisar cualificacion original (Sec 2.3 del canonico): las preguntas de cualificacion detectaron correctamente que este cliente tenia potencial de recurrencia? | Si es sistematico para un servicio especifico, evaluar si ese servicio debe redisenar su ruta de continuidad o aceptar que es un "servicio de impacto unico" (sin expectativa de recompra). Ajustar target de recompra para ese servicio. |
| `OTRO` | **Requiere analisis caso por caso.** | Revisar `razon_no_recompra_detalle` para entender la situacion especifica. | Si la razon "otro" es frecuente, crear nueva categoria en el enum de razones. |

---

## J4) Revision trimestral de negocio (Quarterly Business Review)

Cada trimestre, el Director Comercial convoca una revision de negocio que incluye el analisis agregado de recompra. Esta revision no es una reunion informativa: es una sesion de toma de decisiones sobre el catalogo y la operacion.

### J4.1 Agenda de la revision

| # | Tema | Datos requeridos | Decision esperada | Responsable de preparar datos |
|---|------|-----------------|-------------------|------------------------------|
| 1 | Tasa de recompra global y por servicio | Dashboard J2. Comparar contra target (>=25%) y contra trimestre anterior. | Si un servicio tiene tasa de recompra < 15% sostenida por 2 trimestres: abrir investigacion formal de causa. Si >= 35%: evaluar si es escalable o si depende de factores irrepetibles. | Director Comercial |
| 2 | Servicios con mejor/peor desempeno de recompra | Ranking de los 17 servicios por tasa de recompra. Incluir N de evaluaciones (para evitar conclusiones con muestras pequenas). | Identificar top 3 y bottom 3. Para bottom 3: asignar responsable de plan de mejora con entregable en 30 dias. | Director Comercial |
| 3 | Desempeno de embajadores por gestion de ciclo de vida | Tasa de recompra por embajador + tasa de completitud de cadencia (Anexo I, I6) + tasa de ghosting. | Reconocer a embajadores top. Para embajadores con desempeno consistentemente bajo: plan de desarrollo o reasignacion. | Director de Operaciones |
| 4 | Efectividad del credito educativo | Tasa de activacion de credito + recompra con credito vs. sin credito. | Si el credito no impacta recompra: redisenar (monto, ventana, destino). Si impacta positivamente: mantener y evaluar ampliacion. | Director Comercial |
| 5 | Mapa competitivo actualizado | Competidores registrados en `razon_no_recompra = COMPETIDOR` con detalle. | Actualizar propuesta de valor y argumentario comercial frente a competidores detectados. | Director Comercial |
| 6 | Ajustes al catalogo de servicios | Patrones de recompra (servicio de origen -> servicio destino). Comparar patron real vs. ruta teorica (Sec 1.4 de canonicos). | Si la ruta real difiere consistentemente de la teorica: ajustar la ruta en los canonicos. Si un servicio destino tiene alta demanda que no esta en la ruta: evaluar creacion de nuevo servicio o formalizacion de ruta alternativa. | Director Comercial + Director de Producto |

### J4.2 Minimos para validez estadistica

Las decisiones basadas en tasas de recompra requieren un minimo de observaciones para ser confiables. Con muestras pequenas, las tasas fluctuan por ruido estadistico, no por senales reales.

| Nivel de decision | Minimo de ciclos evaluados | Justificacion |
|------------------|--------------------------|---------------|
| Ajuste de servicio (cambiar canonico) | >= 20 ciclos completados para ese servicio | Con menos de 20 observaciones, la tasa de recompra tiene un margen de error demasiado amplio para justificar cambios estructurales. |
| Evaluacion de embajador | >= 10 ciclos gestionados por el embajador | Un embajador con 3 ciclos y 0 recompras puede ser mala suerte, no mal desempeno. |
| Ajuste de politica de credito | >= 30 ciclos con credito disponible | La activacion de credito depende de muchas variables; se necesita muestra suficiente para aislar el efecto del credito. |
| Decision de crear/eliminar servicio | >= 50 ciclos agregados en la categoria del servicio | Crear o eliminar un servicio del catalogo es una decision estrategica que requiere evidencia robusta. |

[SUPUESTO: que estos minimos son conservadores pero alcanzables en el primer ano de operacion completa del catalogo | validar con volumen real de servicios ejecutados al cierre de Q2 2026]

---

## J5) Cierre de ciclo de vida del cliente

### J5.1 Cierre a 180 dias

Al dia 180, independientemente del resultado de recompra, el ciclo de post-venta se cierra formalmente:

1. Embajador completa la evaluacion de recompra (J1).
2. Todos los campos CRM de recompra estan llenos (no hay nulls sin justificacion).
3. El embajador ejecuta el ultimo touchpoint (T7) segun Anexo I.
4. CRM se actualiza: `ciclo_postventa_status = CERRADO`, `ciclo_postventa_cierre_fecha = YYYY-MM-DD`.

### J5.2 Transicion a estado dormant

Si no hubo recompra a los 180 dias:

1. El cliente pasa a estado `DORMANT` en CRM: `client_lifecycle_status = DORMANT`, `dormant_since = YYYY-MM-DD`.
2. El embajador queda liberado de la cadencia de seguimiento activo para este cliente.
3. El cliente NO se elimina del CRM ni se marca como "perdido". Dormant significa inactivo, no irrecuperable.

### J5.3 Cadencia para clientes dormant

Los clientes dormant reciben un touchpoint anual. No mas. La intencion es mantenerse en el radar del cliente sin generar fatiga.

| Frecuencia | Accion | Canal | Contenido | Objetivo |
|-----------|--------|-------|-----------|---------|
| 1 vez al ano (en el aniversario del cierre original o en Q1) | Enviar contenido de valor (no venta directa) | Email | Invitacion a webinar gratuito, publicacion de caso de exito relevante para el sector del cliente, reporte de tendencias del area del servicio original. | Mantener brand awareness. Si el cliente responde o interactua, el embajador evalua si hay apertura para conversacion comercial. |

**Regla critica:** El touchpoint anual a dormant es de valor, no de venta. No se envia cotizacion, no se menciona precio, no se pide reunion comercial. Si el cliente muestra interes espontaneo, se inicia una nueva conversacion de cualificacion (Sec 2.3 del canonico relevante). [DECISION: 2026-03-29, JM, touchpoint de venta a dormant descartado -- genera rechazo y marca como spam. El valor genera pull, la venta genera push]

### J5.4 Reactivacion de cliente dormant

Si un cliente dormant recompra despues de los 180 dias:

1. La recompra NO se cuenta en el KPI del ciclo original de 180 dias (ese ciclo ya cerro). Se registra como un nuevo evento independiente.
2. Se inicia un nuevo ciclo de servicio completo: activacion, preparacion, ejecucion, memorias, cierre, post-venta, tracking de recompra.
3. CRM se actualiza: `client_lifecycle_status = ACTIVO`, `reactivation_date`, `reactivation_source` (touchpoint anual / contacto espontaneo / referido / otro).
4. El embajador asignado puede ser el mismo o uno nuevo, segun disponibilidad y relacion con el cliente.

---

## J6) Integracion con otros anexos

Este anexo cierra el ciclo operativo que inicia con el canonico del servicio y atraviesa todos los anexos operativos. La secuencia completa es:

```
Canonico del servicio (Sec 0-15)
  |
  v
Anexo A/B (Preparacion: checklist 48h + brief) -- internos del canonico
  |
  v
Anexo G (Memorias: documentacion de cada sesion)
  |
  v
Anexo H (Cierre: declaracion formal de servicio completado)
  |
  v
Anexo I (Post-venta: 7 touchpoints en 180 dias)
  |
  v
Anexo J (Recompra: evaluacion a 180 dias + cierre de ciclo)
  |
  v
Dormant (touchpoint anual) O Nuevo ciclo (recompra)
```

Cada transicion entre anexos tiene un trigger explicito y un responsable definido. No hay transiciones automaticas ni implicitas. El embajador es el hilo conductor que atraviesa todos los anexos post-sesion (G a J). El facilitador solo participa activamente en G (memorias) y es liberado formalmente en H (cierre).

---

## Historial de versiones

| Version | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-03-29 | JM + Claude | Creacion inicial. 6 secciones: mecanismo de evaluacion (9 campos CRM), dashboard de metricas (5 principales + 5 diagnostico), acciones por resultado (6 categorias), revision trimestral (6 temas + minimos estadisticos), cierre de ciclo de vida (dormant + reactivacion), integracion con otros anexos. Transversal a los 17 servicios. |
