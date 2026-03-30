# Anexo I -- Post-Venta y Seguimiento

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Autor:** JM + Claude
**Aplica a:** Todos los 17 servicios del catalogo (transversal).
**Trigger:** Servicio declarado CERRADO (Anexo H completado).
**Responsable primario:** Embajador asignado al servicio.
**Duracion del ciclo:** 180 dias calendario post-cierre.
**Clasificacion:** Interno-operativo.

> **Regla de autoridad:** Este anexo es operativo. No modifica alcance ni politicas definidas en el canonico de cada servicio. Si hay conflicto, el canonico del servicio manda.

### Convenciones de trazabilidad
- `[EVIDENCIA: fuente]` -- dato verificado.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- bloquea publicacion.
- `[DECISION: fecha, quien, alternativa descartada]` -- trade-off resuelto.

---

## I1) Cadencia de seguimiento post-venta

El seguimiento post-venta no es opcional ni improvisado. Es un protocolo estructurado con 7 touchpoints distribuidos a lo largo de 180 dias. Cada touchpoint tiene un objetivo especifico, un canal definido y un criterio de exito medible. La cadencia esta disenada para mantener presencia sin generar fatiga: los intervalos se amplian progresivamente porque el valor de la interaccion cambia con el tiempo. [DECISION: 2026-03-29, JM, cadencia fija descartada sobre cadencia adaptativa -- la cadencia fija es mas facil de auditar y escalar, la adaptativa introduce subjetividad que no se puede controlar con multiples embajadores]

### T1: Touchpoint +1 dia post-cierre

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+1 (primer dia habil despues del cierre) |
| **Accion** | Enviar encuesta de satisfaccion + email de agradecimiento personalizado |
| **Canal** | Email (encuesta) + WhatsApp (mensaje breve de agradecimiento) |
| **Objetivo** | Capturar percepcion en caliente, mientras la experiencia esta fresca. Reforzar que el cierre no es abandono. |
| **Template de referencia** | Email: "Encuesta de satisfaccion - [Servicio]". WhatsApp: "Agradecimiento post-cierre". |
| **Criterio de exito** | Encuesta enviada con confirmacion de entrega (no bounce). WhatsApp entregado (doble check). |
| **CRM** | `touchpoint_T1_fecha`, `touchpoint_T1_completado = SI/NO` |

### T2: Touchpoint +7 dias

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+7 |
| **Accion** | Llamada o WhatsApp de seguimiento: como van aplicando lo aprendido? Algun bloqueo? Si la encuesta no fue respondida, recordar. |
| **Canal** | WhatsApp (preferido) o llamada telefonica |
| **Objetivo** | Detectar friccion temprana en la aplicacion. Si hay bloqueo, es momento de intervenir antes de que el cliente concluya que "no sirvio". |
| **Template de referencia** | WhatsApp: "Seguimiento semana 1 - Aplicacion de aprendizajes" |
| **Criterio de exito** | Respuesta del cliente obtenida. Si reporta bloqueo: accion de soporte registrada. Si encuesta pendiente: respuesta obtenida o segundo recordatorio enviado. |
| **CRM** | `touchpoint_T2_fecha`, `touchpoint_T2_completado`, `touchpoint_T2_bloqueo_reportado = SI/NO`, `touchpoint_T2_notas` |

### T3: Touchpoint +21 dias

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+21 |
| **Accion** | Compartir recurso de valor (articulo, caso de exito, herramienta) relacionado con el servicio que completo. Preguntar si necesita soporte adicional. |
| **Canal** | Email |
| **Objetivo** | Mantener presencia sin ser invasivo. Aportar valor sin pedir nada. Posicionar a MetodologIA como aliado permanente, no como proveedor transaccional. |
| **Template de referencia** | Email: "Recurso complementario - [Tema relacionado con el servicio]" |
| **Criterio de exito** | Email enviado con contenido relevante (no generico). Tasa de apertura ideal: >= 40%. |
| **CRM** | `touchpoint_T3_fecha`, `touchpoint_T3_completado`, `touchpoint_T3_recurso_compartido` |

### T4: Touchpoint +45 dias

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+45 |
| **Accion** | Consulta de impacto: que resultados concretos han observado desde el servicio? Capturar testimonial si el cliente reporta resultados positivos. Si tiene credito educativo activo, recordar vigencia y opciones. |
| **Canal** | WhatsApp (apertura) + llamada (si el cliente acepta conversar) |
| **Objetivo** | Recopilar evidencia de impacto para mejorar el servicio y para uso comercial (con autorizacion). Activar credito si esta disponible. |
| **Template de referencia** | WhatsApp: "Seguimiento de impacto - 45 dias". Si hay credito: "Recordatorio de credito educativo". |
| **Criterio de exito** | Respuesta del cliente obtenida. Si reporta impacto positivo: testimonial capturado (texto o audio). Si tiene credito: cliente informado de opciones. |
| **CRM** | `touchpoint_T4_fecha`, `touchpoint_T4_completado`, `touchpoint_T4_impacto_reportado`, `touchpoint_T4_testimonial_capturado = SI/NO`, `touchpoint_T4_credito_recordado = SI/NO` |

### T5: Touchpoint +90 dias

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+90 |
| **Accion** | Evaluacion de medio ciclo. Revisar internamente: el cliente esta en trayectoria de recompra? Si no hay senales de interes, intensificar valor entregado. Si hay credito proximo a vencer, notificar urgencia. |
| **Canal** | Email (al cliente) + revision interna (embajador evalua CRM) |
| **Objetivo** | Punto de inflexion del ciclo de 180 dias. Si a los 90 dias no hay senal de recompra, la probabilidad baja significativamente. Este es el momento para ajustar estrategia. [SUPUESTO: que la probabilidad de recompra disminuye significativamente despues de 90 dias sin senal | validar con datos historicos cuando existan] |
| **Template de referencia** | Email: "Novedades y recursos - [Tema]". Interno: "Evaluacion medio ciclo - [Cliente]". |
| **Criterio de exito** | Evaluacion interna completada. Si hay senales de recompra: pipeline actualizado. Si no: estrategia de reactivacion definida. |
| **CRM** | `touchpoint_T5_fecha`, `touchpoint_T5_completado`, `touchpoint_T5_evaluacion_interna`, `touchpoint_T5_senal_recompra = SI/NO` |

### T6: Touchpoint +150 dias

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+150 |
| **Accion** | Pre-cierre de ciclo. Si hay credito activo, ultimo recordatorio antes de vencimiento (tipicamente ventana de 180 dias). Si no hay credito, compartir invitacion a evento, webinar o contenido exclusivo. |
| **Canal** | Email + WhatsApp |
| **Objetivo** | Ultima oportunidad activa de conversion antes del cierre de ciclo. Si el cliente no ha recomprado, este touchpoint debe ser la oferta mas relevante posible. |
| **Template de referencia** | Si hay credito: "Ultimo recordatorio - Su credito educativo vence en 30 dias". Si no: "Invitacion exclusiva - [Evento/Recurso]". |
| **Criterio de exito** | Comunicacion enviada y entregada. Si hay credito: cliente informado con fecha de vencimiento explicita. |
| **CRM** | `touchpoint_T6_fecha`, `touchpoint_T6_completado`, `touchpoint_T6_credito_ultimo_recordatorio = SI/NO` |

### T7: Touchpoint +180 dias (cierre de ciclo)

| Atributo | Especificacion |
|----------|---------------|
| **Dia** | D+180 |
| **Accion** | Evaluacion final de ciclo. Registrar resultado de recompra (Anexo J). Si recompro: celebrar y solicitar referido. Si no recompro: registrar razon, clasificar, y transicionar a estado dormant. |
| **Canal** | Interno (evaluacion) + WhatsApp o email al cliente (si aplica) |
| **Objetivo** | Cerrar formalmente el ciclo de post-venta. Alimentar metricas de recompra (Anexo J). Decidir siguiente accion de largo plazo. |
| **Template de referencia** | Si recompro: "Gracias por confiar nuevamente - [Nuevo servicio]". Si no: solo registro interno. |
| **Criterio de exito** | Evaluacion de recompra completada (Anexo J). CRM actualizado con resultado final. |
| **CRM** | `touchpoint_T7_fecha`, `touchpoint_T7_completado`, `recompra_180d` (ver Anexo J) |

---

## I2) Protocolos especificos por situacion

### I2.1 Activacion de garantia

La garantia es un compromiso contractual definido en el canonico de cada servicio (Sec 9). El embajador gestiona la activacion, no el facilitador.

| Paso | Accion | Responsable | Plazo | Registro CRM |
|------|--------|-------------|-------|-------------|
| 1 | Cliente comunica insatisfaccion al embajador (cualquier canal) | Cliente | Dentro de ventana de garantia | `garantia_solicitud_fecha`, `garantia_solicitud_canal` |
| 2 | Embajador valida que la solicitud esta dentro de la ventana y que la causal es valida segun condiciones del canonico | Embajador | <= 4 horas habiles | `garantia_validacion = VALIDA / INVALIDA`, `garantia_causal` |
| 3 | Si valida: embajador solicita aprobacion al Director de Operaciones (Anexo H, H3) | Embajador | <= 8 horas habiles | `garantia_aprobacion_fecha`, `garantia_aprobador` |
| 4 | Director aprueba y define accion correctiva: sesion de refuerzo / reembolso parcial / otro | Director de Operaciones | <= 24 horas habiles | `garantia_accion_correctiva`, `garantia_tipo = SESION / REEMBOLSO / OTRO` |
| 5 | Embajador comunica al cliente la accion correctiva con fechas concretas | Embajador | <= 4 horas post-aprobacion | `garantia_comunicacion_cliente_fecha` |
| 6 | Se ejecuta la accion correctiva | Facilitador (si sesion) o Administracion (si reembolso) | Segun tipo de accion | `garantia_ejecucion_fecha` |
| 7 | Embajador registra aprendizaje: que fallo, por que, como prevenirlo en futuros servicios | Embajador | <= 48 horas post-ejecucion | `garantia_aprendizaje` |
| 8 | Servicio regresa a estado CERRADO (nueva checklist H1) | Embajador | Tras completar accion correctiva | `service_status = CERRADO` (nuevo cierre) |

**Regla critica:** La garantia nunca se resuelve por canales informales (WhatsApp entre facilitador y participante, por ejemplo). Todo pasa por el embajador y se registra en CRM. [DECISION: 2026-03-29, JM, resolucion informal descartada -- no genera registro y no permite aprendizaje organizacional]

### I2.2 Problema tecnico reportado post-cierre

| Situacion | Protocolo | Escalamiento |
|-----------|-----------|-------------|
| Participante no puede acceder al repositorio | Embajador verifica acceso y resuelve en <= 4 horas habiles. Si es problema de permisos, corrige. Si es vencimiento de plazo, aplica politica de retencion (Anexo G, G5). | Solo escala si el problema persiste despues de dos intentos de solucion. |
| Certificado tiene error (nombre, fecha, servicio) | Embajador corrige y reemite en <= 24 horas habiles. Registra el error para auditoria de calidad del proceso de certificacion. | No requiere escalamiento salvo que sea un error sistematico (multiples certificados erroneos). |
| Participante reporta que el motor de IA "ya no funciona" | Embajador aclara que el motor de IA no es propiedad de MetodologIA y que el soporte post-servicio no incluye soporte tecnico de herramientas de terceros. Redirige a documentacion publica del motor. | No escala. Registra como "consulta fuera de alcance" para calibrar expectativas en futuros servicios. |

### I2.3 Cliente pregunta por otro servicio

Cuando un cliente activo en post-venta expresa interes en otro servicio:

1. Embajador NO cotiza en el momento. Registra el interes en CRM: `interes_servicio = [slug]`, `interes_fecha`, `interes_contexto`.
2. Embajador valida si hay credito educativo activo que aplique al servicio de interes.
3. Embajador programa conversacion de venta formal (no resuelve por WhatsApp). La conversacion sigue el script de cualificacion del servicio de interes (Sec 2.3 del canonico correspondiente).
4. Si procede, embajador genera cotizacion formal con credito aplicado (si corresponde).
5. Si el servicio de interes no es el destino del credito, el embajador explica las opciones validas.

### I2.4 Cliente no responde (ghosting)

El ghosting es la senal mas peligrosa en post-venta porque es invisible: no hay queja, no hay feedback, no hay nada. Requiere escalamiento proactivo.

| Hito de no-respuesta | Accion | Canal | Registro |
|---------------------|--------|-------|---------|
| +14 dias sin respuesta a ningun touchpoint | Embajador intenta contacto por canal alternativo (si usaba email, intentar WhatsApp y viceversa). Mensaje directo: "Queria asegurarme de que todo esta bien con [servicio]. Algun comentario?" | Canal alternativo | CRM: `ghosting_nivel_1 = SI`, `ghosting_nivel_1_fecha` |
| +30 dias sin respuesta | Embajador escala internamente. Revisa con Director Comercial si hay alguna senal de contexto (el cliente cambio de cargo, la empresa esta en reestructuracion, etc.). Si se identifica causa, ajustar estrategia. Si no, registrar como "sin contacto" y reducir frecuencia a un touchpoint mas antes de cierre de ciclo. | Interno | CRM: `ghosting_nivel_2 = SI`, `ghosting_nivel_2_fecha`, `ghosting_causa_probable` |
| +60 dias sin respuesta | Se considera "perdida de contacto". No se insiste mas hasta el touchpoint de cierre de ciclo (T7, D+180). En T7 se registra como "no contacto" en evaluacion de recompra (Anexo J). | N/A | CRM: `ghosting_nivel_3 = SI` |

### I2.5 Solicitud de activacion de credito educativo

Cuando un cliente contacta al embajador (o responde a un recordatorio de credito) para activar su credito:

1. **Embajador valida elegibilidad:**
   - Servicio original completado y cerrado (estado CERRADO en CRM).
   - Credito activo: `credit_active = true`.
   - Ventana vigente: fecha actual <= `credit_expiry`.
   - Servicio destino correcto: el servicio solicitado coincide con `credit_destination` (o es "any" si el credito es flexible).

2. **Embajador calcula monto neto:**
   - Credito disponible: `credit_amount` (registrado en CRM al cierre).
   - Precio del servicio destino: segun canonico del servicio destino (Sec 0, Ficha rapida).
   - Monto neto = Precio del servicio destino - Credito.
   - Si el credito es mayor que el precio del servicio destino: el excedente NO se devuelve ni se transfiere. [DECISION: 2026-03-29, JM, transferencia de excedente descartada -- complejidad contable desproporcionada al beneficio]

3. **Embajador genera cotizacion formal:**
   - La cotizacion muestra: precio nominal del servicio destino, credito aplicado (concepto y monto), monto neto a pagar, condiciones de pago.
   - El credito se aplica a la Cuota 1 del servicio destino.
   - Si el servicio destino tiene multiples cuotas, el credito reduce la primera cuota. Si el credito supera la Cuota 1, el excedente reduce la Cuota 2, y asi sucesivamente.

4. **CRM actualizado:**
   - `credit_status = ACTIVADO`
   - `credit_applied_to = [slug del servicio destino]`
   - `credit_applied_date = YYYY-MM-DD`
   - `credit_applied_amount = [monto efectivamente aplicado]`

---

## I3) Encuesta de satisfaccion

La encuesta es el instrumento principal de medicion de percepcion del cliente. Se envia en T1 (D+1 post-cierre) y se persigue hasta T2 (D+7) si no hay respuesta.

### I3.1 Contenido de la encuesta

| # | Pregunta | Tipo | Obligatoria | Justificacion |
|---|---------|------|-------------|---------------|
| 1 | "En una escala de 0 a 10, que tan probable es que recomiende este servicio a un colega o conocido?" | NPS (0-10) | Si | Estandar internacional de medicion de lealtad. Permite benchmarking. |
| 2 | "Que fue lo que mejor funciono del servicio?" | Texto abierto | Si | Identifica fortalezas percibidas. Alimenta material comercial (con autorizacion). |
| 3 | "Que mejoraria del servicio?" | Texto abierto | Si | Identifica oportunidades de mejora concretas. Alimenta iteraciones del canonico. |
| 4 | "Recomendaria este servicio a un colega? Si la respuesta es si, puede compartirnos su nombre y empresa?" | Si/No + texto opcional | No | Activa pipeline de referidos (I5). La pregunta directa con nombre concreto genera mas referidos que una pregunta generica. |
| 5 | "Hay algun otro tema o habilidad que le gustaria desarrollar con nuestra ayuda?" | Texto abierto | No | Detecta demanda para otros servicios del catalogo. Alimenta T4 (touchpoint de impacto). |

### I3.2 Logistica de envio

| Atributo | Especificacion |
|----------|---------------|
| **Herramienta** | Google Forms (default) o herramienta de encuestas aprobada por MetodologIA |
| **Envio** | Email al contacto principal + copia al contacto secundario |
| **Momento** | D+1 post-cierre (touchpoint T1) |
| **Recordatorio** | Si no responde en D+7: WhatsApp con link directo a la encuesta (touchpoint T2) |
| **Segundo recordatorio** | No se envian mas de 2 recordatorios. Si no responde, registrar `nps_estado = NO_RESPONDIDO`. |
| **Anonimato** | La encuesta NO es anonima (el embajador necesita saber quien respondio para actuar). Se informa al cliente que sus respuestas seran utilizadas para mejorar el servicio y que su nombre no sera publicado sin autorizacion. |

### I3.3 Clasificacion NPS

| Rango | Clasificacion | Accion inmediata del embajador |
|-------|--------------|-------------------------------|
| 9-10 | Promotor | Agradecer efusivamente. Solicitar referido (I5). Solicitar testimonial (texto o video). Registrar como candidato a caso de exito. |
| 7-8 | Pasivo | Agradecer. Indagar que haria falta para llegar a 9-10. Registrar comentarios. No solicitar referido activamente (no forzar). |
| 0-6 | Detractor | Agradecer la honestidad. Escalar a Director de Operaciones en <= 4 horas. No intentar resolver solo. Registrar comentarios verbatim. Evaluar si procede garantia. |

---

## I4) Workflow de activacion de credito (diagrama de decision)

```
INICIO: Cliente solicita activar credito
  |
  v
[1] Servicio original CERRADO en CRM?
  |-- NO --> Informar al cliente que el servicio debe estar cerrado. FIN.
  |-- SI --> Continuar
  |
  v
[2] credit_active = true?
  |-- NO --> Informar que este servicio no genera credito educativo. FIN.
  |-- SI --> Continuar
  |
  v
[3] Fecha actual <= credit_expiry?
  |-- NO --> Informar que el credito ha vencido. Ofrecer cotizacion sin credito. FIN.
  |-- SI --> Continuar
  |
  v
[4] Servicio solicitado = credit_destination (o credit_destination = "any")?
  |-- NO --> Informar opciones validas de destino. Redirigir si es posible. FIN.
  |-- SI --> Continuar
  |
  v
[5] Calcular monto neto. Generar cotizacion formal.
  |
  v
[6] Cliente acepta cotizacion?
  |-- NO --> Registrar como "credito no activado por decision del cliente". FIN.
  |-- SI --> Actualizar CRM. Iniciar nuevo servicio con credito aplicado a Cuota 1. FIN.
```

---

## I5) Protocolo de referidos

Los referidos son el canal de adquisicion mas rentable y con mayor tasa de conversion. El protocolo se activa solo cuando el cliente demuestra satisfaccion genuina (NPS >= 9), no como practica generica. Pedir referidos a un cliente insatisfecho destruye la relacion. [DECISION: 2026-03-29, JM, referidos automaticos a todos los clientes descartados -- riesgo reputacional con detractores]

### I5.1 Condiciones de activacion

- NPS >= 9 (promotor confirmado).
- Cliente respondio positivamente a pregunta 4 de la encuesta (I3.1).
- O bien: cliente expresa satisfaccion espontanea durante cualquier touchpoint.

### I5.2 Flujo de referido

1. Embajador agradece la retroalimentacion positiva.
2. Embajador pregunta: "Conoce a alguien que pueda beneficiarse de este tipo de servicio? Si me comparte su nombre y un dato de contacto, con gusto le hago llegar informacion."
3. Si el cliente proporciona un referido:
   - Registrar en CRM del nuevo lead: `lead_source = REFERIDO`, `referido_por = [nombre del cliente]`, `referido_servicio_origen = [slug]`, `referido_fecha`.
   - Contactar al referido en <= 48 horas habiles mencionando quien lo refirio (con autorizacion del cliente que refirio).
4. Si el referido se convierte en cliente: registrar conversion y activar incentivo de referido.

### I5.3 Incentivo de referido

[POR CONFIRMAR: JM, 2026-04-15 -- definir incentivo de referido. Opciones evaluadas:]

| Opcion | Descripcion | Pros | Contras |
|--------|-------------|------|---------|
| A | Descuento % en proximo servicio del cliente que refirio | Simple, alineado con recompra | Requiere que el cliente tenga interes en otro servicio |
| B | Credito monetario fijo (ej: COP 100.000) | Universal, facil de comunicar | Impacto en margen si los referidos son frecuentes |
| C | Acceso a contenido exclusivo (masterclass, recurso premium) | No impacta margen, genera engagement | Menor percepcion de valor si el cliente prefiere descuento |
| D | Doble credito educativo en el siguiente servicio | Refuerza la escalera de valor | Solo util si el cliente planea continuar en la ruta |

### I5.4 Tracking de referidos

| Campo CRM (en lead del referido) | Tipo | Descripcion |
|----------------------------------|------|-------------|
| `lead_source` | Enum | `REFERIDO` |
| `referido_por_cliente` | Text | Nombre del cliente que refirio |
| `referido_por_servicio` | Slug | Servicio que origino la satisfaccion |
| `referido_fecha` | Date | Fecha en que se recibio el referido |
| `referido_contacto_fecha` | Date | Fecha en que se contacto al referido |
| `referido_conversion` | Boolean | Si el referido se convirtio en cliente |
| `referido_conversion_servicio` | Slug | Servicio que contrato el referido |
| `referido_incentivo_otorgado` | Boolean | Si se otorgo incentivo al cliente que refirio |

---

## I6) Metricas de post-venta

El embajador y el Director Comercial monitorean estas metricas mensualmente para evaluar la efectividad del ciclo de post-venta.

| Metrica | Formula | Target | Frecuencia de medicion | Accion si no se cumple |
|---------|---------|--------|----------------------|----------------------|
| Tasa de respuesta a encuesta NPS | Encuestas respondidas / Encuestas enviadas | >= 60% | Mensual | Revisar canal de envio, timing, y redaccion del template. Si < 40%, evaluar incentivo por responder. |
| NPS promedio | Promedio de scores 0-10 de encuestas respondidas | >= 8.0 | Mensual | Si < 7.0: auditoria de calidad de los servicios con NPS bajo. Correlacionar con facilitador, servicio, segmento. |
| Tasa de completitud de cadencia | Touchpoints completados / Touchpoints planificados (por embajador) | >= 90% | Mensual | Si < 80%: embajador tiene sobrecarga o esta desatendiendo post-venta. Redistribuir carga o reforzar disciplina. |
| Tasa de ghosting | Clientes sin respuesta a D+30 / Total clientes en post-venta | <= 15% | Mensual | Si > 25%: problema sistematico. Revisar propuesta de valor del seguimiento, canal, timing. |
| Tasa de activacion de credito | Creditos activados / Creditos disponibles activos | >= 40% | Trimestral | Si < 30%: el credito no esta siendo comunicado efectivamente. Revisar T4 y T6. [SUPUESTO: que >= 40% es alcanzable | validar con datos historicos del primer semestre] |

---

## Historial de versiones

| Version | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-03-29 | JM + Claude | Creacion inicial. 6 secciones: cadencia de 7 touchpoints, protocolos por situacion (5 escenarios), encuesta de satisfaccion, workflow de credito, protocolo de referidos, metricas de post-venta. Transversal a los 17 servicios. |
