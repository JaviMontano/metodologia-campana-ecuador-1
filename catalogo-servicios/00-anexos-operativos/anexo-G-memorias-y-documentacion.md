# Anexo G -- Memorias y Documentacion de Sesion

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Autor:** JM + Claude
**Aplica a:** Todos los 17 servicios del catalogo (transversal).
**Trigger:** Cada sesion ejecutada, sin excepcion.
**Responsable primario:** Facilitador (captura durante sesion) + Embajador (entrega y registro post-sesion).
**Clasificacion:** Interno-operativo. No se entrega al cliente tal cual; el cliente recibe el paquete resultante.

> **Regla de autoridad:** Este anexo es operativo. No modifica alcance ni politicas definidas en el canonico de cada servicio. Si hay conflicto, el canonico del servicio manda.

### Convenciones de trazabilidad
- `[EVIDENCIA: fuente]` -- dato verificado.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- bloquea publicacion.
- `[DECISION: fecha, quien, alternativa descartada]` -- trade-off resuelto.

---

## G1) Definicion: que son las memorias

Las memorias constituyen el paquete documental completo que registra todo lo ocurrido en una sesion de servicio. No son un acta resumida; son la evidencia exhaustiva de que la sesion se ejecuto, que se decidio, que se produjo y que queda pendiente. Su proposito es triple: proteger al cliente (tiene registro de lo que pago), proteger a MetodologIA (tiene evidencia de lo que entrego) y alimentar la mejora continua (los patrones de sesion informan ajustes futuros). [DECISION: 2026-03-29, JM, acta resumida descartada -- un paquete completo reduce disputas y mejora auditorias]

### G1.1 Componentes obligatorios del paquete

| # | Componente | Descripcion | Responsable de produccion | Formato esperado |
|---|-----------|-------------|---------------------------|------------------|
| 1 | Grabacion de video | Registro completo de la sesion via plataforma nativa (Zoom, Meet, Teams). Incluye pantalla compartida y audio de todos los participantes. | Facilitador (inicia grabacion) | MP4 / formato nativo de plataforma |
| 2 | Transcripcion automatica | Texto generado por la plataforma de videoconferencia o herramienta complementaria (Otter, Whisper, nativa de Zoom/Meet). No requiere edicion manual salvo nombres propios criticos. | Automatico (plataforma) | TXT / VTT / SRT |
| 3 | Notas del facilitador | Documento estructurado que captura: decisiones tomadas, supuestos declarados, trade-offs explicitos, compromisos con responsable y fecha, y acciones siguientes. Este es el componente de mayor valor intelectual del paquete. | Facilitador | Google Docs / Markdown |
| 4 | Artefactos producidos por participantes | Todo output generado durante la sesion dentro del motor de IA o herramienta de trabajo: prompts construidos, documentos co-creados, frameworks completados, matrices rellenadas. Se exportan al cierre de la sesion. | Facilitador (exporta) + Participantes (generan) | PDF / DOCX / formato nativo exportado |
| 5 | Material complementario referenciado | Links, papers, herramientas, lecturas recomendadas o recursos mencionados durante la sesion que no forman parte del material pre-sesion. | Facilitador | Lista con URLs en notas |
| 6 | Checklist de evidencia por modulo | Tabla que registra, modulo por modulo, si se completo la actividad de verificacion, si se genero el artefacto esperado y si se alcanzo el criterio de exito. | Facilitador | Tabla en notas del facilitador |

**Criterio de completitud:** Un paquete de memorias se considera completo cuando los 6 componentes estan presentes, enlazados y accesibles desde el repositorio del servicio. Si falta alguno, el paquete queda en estado INCOMPLETO y el embajador no puede proceder al cierre operativo (Anexo H). [EVIDENCIA: flujo operativo definido en este catalogo]

### G1.2 Componentes opcionales (cuando aplique)

| Componente | Condicion de inclusion | Responsable |
|-----------|----------------------|-------------|
| Fotos de pizarra/post-its (sesiones presenciales) | Solo si la sesion fue presencial y se uso material fisico | Facilitador |
| Encuesta rapida post-sesion (pulso) | Cuando el servicio define evaluacion intermedia por sesion | Facilitador |
| Log de chat de la plataforma | Cuando el chat contiene preguntas relevantes no capturadas en notas | Facilitador |

---

## G2) Formato estandar del documento de memorias

El documento de notas del facilitador (componente #3) sigue esta estructura canonica. No se permite improvisacion de formato porque la consistencia entre sesiones de distintos servicios habilita comparacion, auditoria y busqueda.

### G2.1 Encabezado obligatorio

```
MEMORIAS DE SESION
==================
Servicio:        [Nombre canonico del servicio]
Slug:            [slug del servicio]
Sesion:          [#N de M] (ej: 3 de 9)
Fecha:           [YYYY-MM-DD]
Hora inicio:     [HH:MM COT]
Hora fin:        [HH:MM COT]
Duracion real:   [Xh XXmin]
Facilitador:     [Nombre completo]
Co-facilitador:  [Nombre completo o "N/A"]
Embajador:       [Nombre completo]

PARTICIPANTES PRESENTES:
1. [Nombre] — [Rol/Cargo]
2. [Nombre] — [Rol/Cargo]
...

PARTICIPANTES AUSENTES:
1. [Nombre] — [Justificacion: notificada/no notificada] — [Impacto en asistencia acumulada: X de Y]

ESTADO DEL PAQUETE: [COMPLETO / INCOMPLETO — listar faltantes]
```

**Justificacion del detalle:** El encabezado permite a cualquier persona (auditor, director, embajador sustituto) entender el contexto de la sesion sin leer el cuerpo. La hora real de inicio/fin detecta desviaciones sistematicas de puntualidad. La justificacion de ausencia alimenta el calculo de asistencia para certificacion. [EVIDENCIA: requisitos de certificacion en Sec 8 de cada canonico]

### G2.2 Resumen ejecutivo

Cinco (5) bullets maximo. Cada bullet responde una de estas preguntas:
1. Que se logro en esta sesion que no existia antes?
2. Que decision critica se tomo?
3. Que compromiso quedo con nombre y fecha?
4. Que riesgo o bloqueo se identifico?
5. Que cambio respecto al plan original?

El resumen ejecutivo es lo unico que un gerente de cuenta o director deberia necesitar leer para entender el estado del servicio. Si requiere leer mas, el resumen fallo.

### G2.3 Cuerpo: documentacion por modulo

Para cada modulo ejecutado en la sesion:

```
MODULO [N]: [Nombre del modulo]
---
Objetivo del modulo:    [Tal como aparece en el canonico, Sec 5]
Estado:                 [Completado / Parcial / No ejecutado]

DECISIONES TOMADAS:
- [Decision 1]: [Descripcion]. Responsable: [Nombre]. Fecha compromiso: [YYYY-MM-DD].
  Alternativa descartada: [Cual y por que].
- [Decision 2]: ...

SUPUESTOS DECLARADOS:
- [Supuesto 1]: [Enunciado]. Riesgo si es incorrecto: [Impacto]. Plan de validacion: [Accion + fecha].
- [Supuesto 2]: ...

TRADE-OFFS EXPLICITOS:
- [Trade-off]: Elegimos [X] en lugar de [Y] porque [justificacion].

COMPROMISOS Y ACCIONES:
| # | Accion | Responsable | Fecha limite | Criterio de exito |
|---|--------|-------------|-------------|-------------------|
| 1 | ...    | ...         | YYYY-MM-DD  | ...               |

ARTEFACTOS GENERADOS:
| # | Artefacto | Formato | Link en repositorio | Verificacion |
|---|-----------|---------|---------------------|-------------|
| 1 | ...       | ...     | [URL]               | OK / Pendiente |

OBSERVACIONES DEL FACILITADOR:
[Texto libre — insights, senales de riesgo, oportunidades detectadas, dinamica del grupo]
```

### G2.4 Seccion de cierre

```
PREPARACION PARA PROXIMA SESION:
- Pre-work para participantes: [Describir tarea + fecha limite]
- Material que facilitador debe preparar: [Describir]
- Configuracion tecnica requerida: [Describir o "Ninguna adicional"]

INCIDENTES (si aplica):
- [Incidente]: [Descripcion]. Impacto: [Que se perdio/retraso]. Mitigacion: [Que se hizo].

CHECKLIST DE EVIDENCIA:
| Modulo | Actividad de verificacion | Completada | Artefacto generado | Criterio de exito alcanzado |
|--------|--------------------------|------------|--------------------|-----------------------------|
| M1     | ...                      | Si/No      | Si/No [link]       | Si/No/Parcial               |
| M2     | ...                      | ...        | ...                | ...                         |
```

---

## G3) SLA de entrega

Cada componente del paquete tiene un plazo maximo de entrega contado desde el dia de la sesion (D+0). Estos plazos son en dias habiles (lunes a viernes, horario Colombia COT).

| # | Componente | Plazo maximo | Responsable de entrega | Canal de entrega | Justificacion del plazo |
|---|-----------|-------------|----------------------|-----------------|------------------------|
| 1 | Grabacion de video | D+1 | Facilitador sube a repositorio | Repositorio Google Drive del servicio | Las plataformas procesan la grabacion en horas; D+1 da margen para verificar que el archivo no esta corrupto. |
| 2 | Transcripcion automatica | D+1 | Facilitador sube a repositorio | Repositorio Google Drive del servicio | La transcripcion se genera automaticamente junto con la grabacion. Se entrega en el mismo ciclo. |
| 3 | Notas del facilitador | D+2 | Facilitador redacta y sube | Repositorio Google Drive del servicio | D+2 permite al facilitador estructurar las notas con calma sin sacrificar frescura del recuerdo. Mas de D+2 degrada la calidad de las notas significativamente. [SUPUESTO: que la calidad de notas degrada despues de 48h | validar con facilitadores en piloto] |
| 4 | Artefactos de participantes | D+1 | Facilitador exporta al cierre de sesion | Repositorio Google Drive del servicio | Los artefactos deben exportarse al final de la sesion. D+1 es tolerancia para casos donde la exportacion falla en vivo. |
| 5 | Material complementario | D+2 | Facilitador incluye en notas | Incorporado en documento de notas | Se recopila junto con las notas. |
| 6 | Paquete completo verificado | D+3 | Embajador verifica y notifica al cliente | Email + CRM | El embajador necesita D+3 para recibir los componentes del facilitador (D+2), verificar completitud y notificar. |

### Certificados (entregables separados del paquete de memorias)

| Certificado | Plazo | Condicion | Responsable |
|------------|-------|-----------|-------------|
| Asistencia | D+2 post-ultima sesion | Asistencia >= umbral definido en canonico del servicio | Embajador genera, Facilitador valida datos |
| Competencia | D+5 post-ultima sesion | Asistencia + evaluacion aprobada segun rubrica del canonico | Embajador genera, Facilitador valida rubrica |

**Penalizacion por incumplimiento de SLA:** Si el paquete completo no se entrega en D+3, el embajador escala al Director de Operaciones con motivo del retraso. No se requiere accion punitiva inmediata, pero el incidente se registra para evaluacion de desempeno del facilitador. [POR CONFIRMAR: JM, 2026-04-15 -- definir si hay penalizacion contractual al facilitador externo]

---

## G4) Registro de entrega

La entrega del paquete de memorias al cliente no esta completa hasta que hay confirmacion explicita registrada. Esto protege contra disputas de tipo "nunca me entregaron nada".

### G4.1 Flujo de registro

1. **Embajador prepara notificacion:** Verifica que el paquete esta completo (checklist G6). Redacta email de entrega con links directos a cada componente en el repositorio.
2. **Embajador envia notificacion:** Email al contacto principal del cliente. Copia al contacto secundario si existe. Template: "Entrega de memorias - Sesion N de M - [Servicio]".
3. **Embajador registra en CRM:**

| Campo CRM | Valor | Tipo |
|-----------|-------|------|
| `memorias_sesion_N_entrega_fecha` | YYYY-MM-DD HH:MM | Timestamp |
| `memorias_sesion_N_entrega_canal` | email / whatsapp / presencial | Enum |
| `memorias_sesion_N_confirmacion_cliente` | pendiente / confirmada / sin_respuesta | Enum |
| `memorias_sesion_N_confirmacion_fecha` | YYYY-MM-DD HH:MM (o null) | Timestamp |

4. **Cliente confirma recepcion:** El embajador solicita explicitamente confirmacion de recepcion (no de conformidad -- solo de recepcion). Basta un "recibido" por email o WhatsApp.
5. **Si no hay confirmacion en 48 horas habiles:** Embajador envia recordatorio por WhatsApp. Template: "Seguimiento entrega memorias - Sesion N". Registra el intento de seguimiento en CRM.
6. **Si no hay confirmacion en 96 horas habiles (segundo vencimiento):** Embajador escala al contacto secundario del cliente y registra como `sin_respuesta` en CRM. El servicio puede continuar, pero el cierre operativo (Anexo H) queda condicionado a resolver las entregas pendientes.

**Justificacion del protocolo:** La confirmacion de recepcion es la unica evidencia defensible ante una reclamacion de no-entrega. Sin confirmacion registrada, MetodologIA no puede demostrar cumplimiento. [EVIDENCIA: mejores practicas de gestion de servicios profesionales]

---

## G5) Politica de retencion

La retencion de memorias balancea dos necesidades: el derecho del cliente a acceder a lo que pago, y la obligacion de MetodologIA de no acumular datos indefinidamente.

| Repositorio | Periodo de retencion | Conteo desde | Accion al vencer | Justificacion |
|------------|---------------------|-------------|------------------|---------------|
| Repositorio del cliente (Google Drive compartido) | 30 dias calendario post-cierre del servicio | Fecha de cierre operativo (Anexo H) | MetodologIA retira acceso de escritura. Cliente debe hacer backup antes del vencimiento. Se notifica al cliente en D+1 post-cierre, D+15 y D+25. | 30 dias es suficiente para que el cliente descargue todo. Mantener acceso indefinido genera costos de almacenamiento y riesgo de modificacion no autorizada. [DECISION: 2026-03-29, JM, retencion indefinida descartada] |
| Repositorio interno MetodologIA | 90 dias calendario post-cierre | Fecha de cierre operativo | Eliminacion permanente de grabaciones. Notas del facilitador se anonimizan y se conservan como base de conocimiento (sin datos de cliente). | 90 dias cubren el periodo de garantia (max 48h) + margen amplio para auditorias de calidad. Mas de 90 dias no aporta valor y aumenta riesgo de datos. |
| Grabaciones de video | No se usan para marketing, capacitacion publica ni demostraciones sin consentimiento explicito por escrito del cliente | N/A | Consentimiento debe ser granular: por grabacion, no generico. Template de consentimiento en repositorio de templates operativos. | Proteccion legal y de reputacion. Un uso no autorizado de grabacion puede destruir la relacion comercial. [EVIDENCIA: regulacion habeas data Colombia, Ley 1581 de 2012] |

### Notificaciones de vencimiento al cliente

| Dia | Accion | Canal | Template |
|-----|--------|-------|----------|
| D+1 post-cierre | Notificacion de ventana de retencion (30 dias) | Email | "Informacion de repositorio - Ventana de acceso" |
| D+15 post-cierre | Recordatorio de mitad de ventana | Email | "Recordatorio: 15 dias restantes de acceso a repositorio" |
| D+25 post-cierre | Recordatorio urgente (5 dias restantes) | Email + WhatsApp | "Ultimo recordatorio: 5 dias para descargar materiales" |
| D+31 post-cierre | Confirmacion de retiro de acceso | Email | "Su repositorio ha sido archivado" |

---

## G6) Checklist de calidad para memorias

Esta checklist la ejecuta el embajador antes de enviar el paquete al cliente. Si algun item falla, el paquete regresa al facilitador para correccion.

### G6.1 Checklist de completitud

- [ ] Grabacion de video presente y reproducible (verificar que no esta corrupto abriendo los primeros 30 segundos)
- [ ] Transcripcion presente y legible (verificar que no es un archivo vacio o incoherente)
- [ ] Notas del facilitador siguen el formato estandar G2 completo (encabezado, resumen, cuerpo por modulo, cierre)
- [ ] Todos los modulos ejecutados estan documentados en las notas (no faltan modulos)
- [ ] Cada decision registrada tiene responsable y fecha de compromiso
- [ ] Cada compromiso/accion tiene responsable, fecha limite y criterio de exito
- [ ] Artefactos de participantes estan enlazados con URL funcional (no solo mencionados por nombre)
- [ ] Material complementario referenciado tiene URLs funcionales (verificar que no son links rotos)
- [ ] No hay datos sensibles en texto plano (contrasenas, tokens de API, datos financieros personales del participante)
- [ ] La numeracion de secciones es consistente con la numeracion canonica del servicio (Sec 5 del canonico)
- [ ] El checklist de evidencia por modulo esta completado (no hay celdas vacias)
- [ ] Los nombres de archivos siguen la convencion: `[slug-servicio]_sesion-[N]_[componente]_[YYYY-MM-DD].[ext]`

### G6.2 Checklist de calidad de contenido

- [ ] El resumen ejecutivo tiene maximo 5 bullets y es autosuficiente (no requiere leer el cuerpo para entender el estado)
- [ ] Las decisiones incluyen la alternativa descartada (no solo lo que se decidio, sino lo que no)
- [ ] Los supuestos incluyen riesgo y plan de validacion (no son afirmaciones sin contexto)
- [ ] Los trade-offs son explicitos (no implican que "todo fue perfecto")
- [ ] Las observaciones del facilitador aportan insight (no son genericas como "buena sesion")
- [ ] La preparacion para proxima sesion es accionable (el participante sabe exactamente que hacer)

---

## G7) Casos borde y contingencias

### G7.1 Sesion interrumpida por problemas de conectividad

| Situacion | Protocolo | Registro |
|-----------|-----------|---------|
| Interrupcion < 10 minutos | Facilitador pausa, espera reconexion, retoma. Grabacion puede tener corte. | Registrar en "Incidentes" de las notas: hora de corte, duracion, modulo afectado. |
| Interrupcion 10-30 minutos | Facilitador intenta reconectar. Si no es posible, cierra la sesion y programa sesion de recuperacion. | Memorias parciales con estado INCOMPLETO. Plan de recuperacion en seccion de cierre. Embajador notifica al cliente en <= 2 horas. |
| Interrupcion > 30 minutos o sesion no puede continuar | Sesion declarada FALLIDA. No se cobra. Se reprograma completamente. | Memorias con estado FALLIDA. Registrar motivo, evidencia de intento de solucion. CRM: `sesion_N_estado = FALLIDA`. Embajador notifica al cliente con nueva fecha propuesta en <= 4 horas. |

### G7.2 Grabacion fallida

Cuando la grabacion no se inicia, se corrompe o se pierde:

1. Las notas del facilitador se convierten en el registro primario de la sesion. Deben ser mas detalladas de lo habitual para compensar la ausencia de video.
2. El facilitador debe documentar el fallo de grabacion en la seccion de Incidentes con: motivo probable, momento de deteccion, accion tomada.
3. El embajador notifica al cliente que la grabacion no esta disponible para esta sesion y que las notas del facilitador constituyen el registro oficial.
4. Se registra en CRM: `sesion_N_grabacion = FALLIDA`. Este dato alimenta metricas de confiabilidad operativa.
5. No se reprograma la sesion por fallo de grabacion (el valor de la sesion fue entregado). La grabacion es un complemento, no el servicio en si. [DECISION: 2026-03-29, JM, reprogramacion por fallo de grabacion descartada -- generaria retrasos desproporcionados]

### G7.3 Participante solicita eliminacion de sus datos de la grabacion

Obligacion legal bajo Ley 1581 de 2012 (Habeas Data, Colombia) y principios de proteccion de datos personales:

1. El participante puede solicitar la eliminacion de su imagen/voz de la grabacion en cualquier momento.
2. Plazo de cumplimiento: 48 horas habiles desde la solicitud.
3. Opciones de cumplimiento:
   - Si es posible editar la grabacion (eliminar segmentos del participante): hacerlo.
   - Si no es posible editar sin destruir el contenido: eliminar la grabacion completa y documentar el motivo.
4. Registrar en CRM: `solicitud_eliminacion_datos = SI`, `fecha_solicitud`, `fecha_cumplimiento`, `accion_tomada`.
5. Notificar al participante por escrito que la solicitud fue cumplida.
6. Las notas del facilitador que mencionan al participante por nombre se anonimizan (reemplazar nombre por "Participante X"). Los aportes de contenido (ideas, decisiones) se mantienen anonimizados.

### G7.4 Sesion con multiples facilitadores

Cuando hay facilitador y co-facilitador:
- Ambos producen notas independientes. El facilitador principal consolida un solo documento final.
- La grabacion es unica (la inicia el facilitador principal).
- El checklist de evidencia lo completa el facilitador principal con input del co-facilitador.

### G7.5 Sesion presencial (no virtual)

Ademas de los componentes estandar:
- La grabacion puede requerir equipo dedicado (camara + microfono). Verificar en checklist de preparacion (Sec 10 del canonico).
- Fotos de material fisico (pizarras, post-its, papelografos) se digitalizan y se agregan al paquete.
- La transcripcion automatica puede no estar disponible; en ese caso, las notas del facilitador son el registro primario (igual que G7.2).

---

## G8) Convencion de nomenclatura de archivos

Todos los archivos del paquete de memorias siguen esta convencion para permitir busqueda y ordenamiento automatizado:

```
[slug-servicio]_sesion-[NN]_[componente]_[YYYY-MM-DD].[ext]
```

| Componente | Codigo en nombre de archivo | Ejemplo |
|-----------|---------------------------|---------|
| Grabacion | `grabacion` | `workshop-de-ocupado-a-productivo_sesion-01_grabacion_2026-04-10.mp4` |
| Transcripcion | `transcripcion` | `workshop-de-ocupado-a-productivo_sesion-01_transcripcion_2026-04-10.txt` |
| Notas del facilitador | `notas` | `workshop-de-ocupado-a-productivo_sesion-01_notas_2026-04-10.md` |
| Artefactos | `artefacto-[NN]` | `workshop-de-ocupado-a-productivo_sesion-01_artefacto-01_2026-04-10.pdf` |
| Material complementario | `material-complementario` | `workshop-de-ocupado-a-productivo_sesion-01_material-complementario_2026-04-10.md` |

**Justificacion:** La nomenclatura permite ordenar por servicio, luego por sesion, luego por componente. Elimina ambiguedades como "notas finales v2 DEFINITIVA.docx". [DECISION: 2026-03-29, JM, nomenclatura libre descartada]

---

## Historial de versiones

| Version | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 2026-03-29 | JM + Claude | Creacion inicial. 8 secciones: definicion, formato estandar, SLA, registro de entrega, retencion, checklist de calidad, casos borde, nomenclatura. Transversal a los 17 servicios. |
