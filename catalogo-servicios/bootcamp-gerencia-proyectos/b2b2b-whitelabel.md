# Bootcamp GerencIA de Proyectos -- Addendum White-Label

**Derivado de:** bootcamp-gerencia-proyectos/comercial-cliente-b2b.md v1.0 (2026-03-29)
**Base:** este addendum modifica la version B2B del servicio.
Para condiciones generales, ver `comercial-cliente-b2b.md`.

---

## Diferencias sobre version B2B

### Branding

- **Materiales:** eliminar toda referencia a MetodologIA. Reemplazar por marca del partner en todas las instancias.
- **Certificados:** emitidos exclusivamente bajo marca del partner. Texto: "Certificado emitido por {{Partner}}".
- **Campus/LMS:** plataforma del partner. MetodologIA no debe ser visible en ningun elemento de interfaz.
- **Nombre del programa:** "{{Nombre definido por el partner}}". El nombre canonico "Bootcamp GerencIA de Proyectos" no aparece.
- **Facilitador:** si es de MetodologIA, presentarse como "consultor de {{Partner}}" o nombre neutro acordado. Si es del partner, debe tener certificacion de MetodologIA vigente.

---

### Condiciones comerciales

- **Precio base MetodologIA:** {{precio negociado}} COP por ciclo (segun contrato marco ref. {{numero}}).
- **Facturacion:** al partner (NIT: {{NIT del partner}}).
- **Condiciones de pago:** PO NET {{30/60}} dias.
- **Margen del partner:** libre. MetodologIA no fija ni conoce el precio al cliente final.
- **Credito educativo:** {{no aplica / condiciones especiales}}.

---

### Operacion

- **Facilitador:** {{MetodologIA invisible / facilitador del partner certificado}}.
- **Contextualizacion:** completa al entorno del partner y su audiencia final.
- **SLA:** {{descripcion SLA custom}} segun contrato marco.
- **Repositorio:** plataforma del partner exclusivamente. Ningun material en infraestructura MetodologIA.
- **Soporte participantes:** partner como primer nivel; MetodologIA como escalamiento (invisible para el participante).

---

## Licenciamiento

### Modelos de fee

| Modelo | Descripcion | Cuando aplica |
|---|---|---|
| Fee por ejecucion | Precio fijo por ciclo ejecutado | Partner con volumen bajo o inicial (<4 ciclos/ano) |
| Fee anual | Licencia anual con numero acordado de ejecuciones | Partner con compromiso de volumen (>=4 ciclos/ano) |
| Fee por volumen | Precio escalonado segun numero de ciclos/ano | Partner con alto volumen (>=8 ciclos/ano) |

La seleccion del modelo se define en el contrato marco. MetodologIA recomienda fee anual para partners con compromiso sostenido.

### Alcance de la licencia

- **Incluye:** contenido del bootcamp (playbooks, prompts, especificaciones de asistentes, plantillas, estructura modular), actualizaciones durante vigencia, soporte de segundo nivel.
- **No incluye:** facilitadores (si el partner usa propios), plataforma/LMS (responsabilidad del partner), logistica, convocatoria, relacion con el cliente final.
- **Territorio:** {{definir en contrato marco}}.
- **Vigencia:** 12 meses, renovable.

---

## QA Framework (aseguramiento de calidad)

### Para ejecuciones con facilitador MetodologIA (invisible)

| Control | Frecuencia | Responsable |
|---|---|---|
| Revision de materiales rebrandeados antes de cada ciclo | Por ciclo | MetodologIA |
| Evaluacion de satisfaccion post-ciclo | Por ciclo | Partner (recopila) + MetodologIA (analiza) |
| Auditoria de adherencia al contenido canonico | Semestral | MetodologIA |

### Para ejecuciones con facilitador del partner

| Control | Frecuencia | Responsable |
|---|---|---|
| Certificacion inicial del facilitador | Antes de primera ejecucion | MetodologIA |
| Observacion de primera ejecucion (shadow) | Primera vez | MetodologIA |
| Revision de grabaciones (muestra) | Trimestral | MetodologIA |
| Re-certificacion del facilitador | Anual | MetodologIA |
| Evaluacion de satisfaccion post-ciclo | Por ciclo | Partner (recopila) + MetodologIA (analiza) |

### Criterios de aprobacion QA

- NPS promedio >=40 en los ultimos 3 ciclos.
- >=80% de entregables modulares producidos por los participantes.
- Sin incidentes de datos sensibles reportados.
- Adherencia al contenido canonico >=90% (medida en auditoria).

---

## Entrenamiento de facilitadores del partner

| Fase | Duracion | Contenido | Resultado |
|---|---|---|---|
| 1. Inmersion en contenido | 8h | Recorrido completo de los 9 modulos + Mod 0 como participante | Facilitador completa el bootcamp |
| 2. Entrenamiento en facilitacion | 4h | Metodologia de facilitacion MetodologIA, protocolos de decision en vivo, gestion de niveles | Facilitador aprueba evaluacion |
| 3. Practica supervisada (shadow) | 1 ciclo completo | Observacion de ejecucion real con facilitador MetodologIA + retroalimentacion | Facilitador ejecuta >=3 modulos autonomamente |
| 4. Certificacion | 2h | Evaluacion practica: facilitador ejecuta 1 modulo completo con grupo piloto | Certificacion emitida por MetodologIA (valida 12 meses) |

**Costo de certificacion:** incluido en el fee del primer ciclo anual. Re-certificacion: incluida en fee anual.

---

## Protocolo de actualizacion de contenido

| Evento | Accion de MetodologIA | Accion del partner | Plazo |
|---|---|---|---|
| Actualizacion menor del canonico (contenido, prompts) | Notifica + entrega materiales actualizados (formato MetodologIA) | Rebrandea materiales actualizados | 15 dias habiles desde notificacion |
| Actualizacion mayor (estructura, modulos, precios) | Notifica + sesion de alineacion + entrega materiales | Rebrandea + revalida con facilitador | 30 dias habiles |
| Nuevo motor IA o herramienta integrada | Notifica + entrega guia de adaptacion | Valida con TI del partner + actualiza materiales | 30 dias habiles |
| Correccion de error en contenido | Notifica + parche inmediato | Aplica parche en proxima ejecucion | 5 dias habiles |

---

## Compliance

### Propiedad intelectual

- El contenido del bootcamp (playbooks, prompts, especificaciones de asistentes, estructura modular) es propiedad intelectual de MetodologIA, licenciada al partner.
- El partner no adquiere propiedad sobre el contenido.
- Los artefactos producidos por los participantes del partner son propiedad de los participantes.

### Confidencialidad

- El partner no revela que MetodologIA es el autor del contenido.
- Clausula de confidencialidad de autoria obligatoria en contrato marco.
- Si se descubre divulgacion no autorizada: notificacion + 15 dias para corregir + terminacion si persiste.

### Uso de datos

- El partner es responsable del tratamiento de datos de sus participantes.
- MetodologIA actua como encargado (si accede a datos) segun contrato de encargo.
- Se aplican las mismas reglas de datos del canonico (sin PII, sin datos financieros reales, sin credenciales).

---

## Metricas de la alianza

| Indicador | Frecuencia | Meta orientativa |
|---|---|---|
| Ciclos ejecutados por ano | Anual | Segun compromiso en contrato |
| NPS promedio de participantes | Trimestral | >=40 |
| Adherencia al contenido canonico | Semestral (auditoria) | >=90% |
| Facilitadores certificados activos | Anual | >=1 por partner |
| Incidentes de calidad | Por ciclo | 0 criticos |

---

## Protocolo de renovacion y salida

### Renovacion

- Notificacion de intencion de renovacion: 60 dias antes del vencimiento.
- Revision de metricas de alianza como base para negociacion.
- Actualizacion de precios segun version vigente del canonico.

### Salida

| Evento | Proceso | Plazo |
|---|---|---|
| No renovacion | Notificacion 60 dias antes; ejecuciones en curso se completan | 60 dias |
| Terminacion por incumplimiento | Notificacion formal + 15 dias habiles para corregir | 15 dias habiles |
| Post-terminacion: uso de contenido | Partner cesa uso de todo contenido MetodologIA en 30 dias | 30 dias |
| Post-terminacion: materiales | Partner elimina o devuelve todo material con contenido MetodologIA | 30 dias |
| Facilitadores certificados | Certificacion caduca automaticamente | Fecha de terminacion |
| Participantes activos | Ciclos en curso se completan | Hasta cierre |

---

### Requisitos adicionales

- [ ] Kit de marca completo del partner recibido.
- [ ] Licencia de contenido firmada (alcance de uso, territorio, vigencia).
- [ ] Proceso de QA para materiales rebrandeados definido y ejecutado.
- [ ] Clausula de confidencialidad de autoria firmada.
- [ ] Si facilitador del partner: certificacion completada y vigente.
- [ ] NDA firmado.
- [ ] Contrato marco firmado.

---

Derivado de: bootcamp-gerencia-proyectos/comercial-cliente-b2b.md v1.0 (2026-03-29) | Fecha de derivacion: 2026-03-29 | Version derivada: b2b2b-whitelabel-v1.
