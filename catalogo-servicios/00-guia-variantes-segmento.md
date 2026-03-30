# Guia de Variantes por Segmento

**Fecha:** 2026-03-29 | **Version:** 1.1 | **Propietario:** Javier Montano

**Regla madre:** el canonico es agnostico de segmento. Las variantes se aplican **solo** a las versiones derivadas (ejecutiva, comercial, compras, inexperto) y **solo** cuando hay diferencias materiales entre segmentos.

---

## Principios de segmentacion

### Por que estos 4 segmentos

| Segmento | Razon de existencia | Diferencia material que lo justifica |
|----------|--------------------|------------------------------------|
| B2B | Venta directa a empresa | Facturacion a NIT, precios por grupo, procurement, SLA corporativo |
| B2C | Venta directa a individuo | Facturacion a persona natural, precio unitario, decision individual, pasarela de pago |
| B2B2B co-brand | Empresa que revende con marca compartida | Branding dual, contrato marco, precio negociado, aprobacion de materiales |
| B2B2B white-label | Empresa que revende bajo su marca | MetodologIA invisible, licencia de contenido, QA de rebrandeo, margen de revendedor |

[DECISION: 2026-03-29, JM, se descartaron las siguientes alternativas de segmentacion:]
- **Segmento "Gobierno/Sector publico":** descartado porque el proceso de contratacion publica se maneja como variante operativa de B2B (licitacion), no como segmento de contenido distinto. Si los volumenes crecen, se re-evaluara.
- **Segmento "Academico/Universidad":** descartado porque se canaliza via B2B2B co-brand (universidad como partner). No justifica segmento propio.
- **Segmento "Freemium/Trial":** descartado porque no existe modelo gratuito actual. Si se introduce contenido gratuito, se evaluara como segmento.

### Criterios de decision: cuando crear vs. no crear una variante

Crear variante de segmento **solo cuando** se cumple al menos 1 de estas condiciones:

1. **Precio diferente:** el precio cambia entre segmentos (ej: tarifa individual vs. tarifa corporativa).
2. **Branding diferente:** los materiales llevan marca distinta (ej: co-brand vs. MetodologIA pura).
3. **Proceso de compra diferente:** el flujo de adquisicion cambia (ej: pasarela individual vs. PO corporativa).
4. **Audiencia del documento diferente:** el lector del documento es una persona distinta (ej: el individuo vs. el CHRO).

**Si no hay diferencia material:** no crear archivo de variante. Usar la version B2B como default y anotar "Aplica igual para B2B2B co-brand" donde corresponda. [DECISION: 2026-03-29, JM, se descarto crear variantes preventivas "por si acaso" — genera mantenimiento sin valor]

---

## 4 Segmentos — Detalle

| Segmento | Codigo | Comprador tipico | Canal de venta | Ciclo de decision |
|----------|--------|------------------|---------------|-------------------|
| **B2B** | `b2b` | CHRO, CTO, Director de formacion, Gerente de area | Venta directa, referido corporativo | 2-8 semanas (aprobacion interna + procurement) |
| **B2C** | `b2c` | Profesional autonomo, emprendedor, lider en crecimiento | Web, redes sociales, referido individual | 1-7 dias (decision personal) |
| **B2B2B co-branding** | `b2b2b-cobrand` | Partner, academia, universidad, consultora aliada | Alianza estrategica, propuesta de partner | 4-12 semanas (negociacion de contrato marco) |
| **B2B2B white-label** | `b2b2b-wl` | Empresa con academia interna, partner de canal, reseller | Alianza estrategica, licitacion de partner | 6-16 semanas (negociacion + setup de plataforma) |

---

## Filosofia de pricing por segmento

| Segmento | Modelo de precio | Justificacion |
|----------|-----------------|---------------|
| **B2B** | Por ciclo/grupo (ej: 3.000.000 por 20 pax) | El costo operativo es por ejecucion (facilitador + materiales + campus), no por cabeza. Escalar de 15 a 20 participantes tiene costo marginal minimo. Cobrar por persona penalizaria al cliente y reduciria el tamano de cohorte. [DECISION: 2026-03-29, JM, se descarto precio por persona en B2B — desincentiva llenar cohortes] |
| **B2C** | Por persona individual | Cada persona contrata y consume el servicio independientemente. No hay economia de escala. El precio refleja el valor individual de la transformacion personal. |
| **B2B2B co-brand** | Negociado en contrato marco | Cada partner tiene volumen, frecuencia y audiencia distinta. El precio fijo no permite capturar el valor diferencial. Se negocia por volumen anual o por ciclo con descuento por compromiso. [SUPUESTO: el margen minimo aceptable es 40% sobre costo operativo | validar con modelo financiero] |
| **B2B2B white-label** | Negociado + margen del revendedor | Similar a co-brand pero con componente adicional: el partner revende a precio propio. MetodologIA cobra precio base; el partner agrega su margen. [SUPUESTO: MetodologIA no fija ni limita el margen del partner | validar implicaciones de reputacion si el partner cobra excesivamente] |

---

## Matriz de diferencias por campo

| Campo | B2B | B2C | B2B2B co-brand | B2B2B white-label |
|-------|-----|-----|----------------|-------------------|
| **Precio** | Tarifa corporativa/grupo | Tarifa individual | Negociada (contrato marco) | Negociada + margen revendedor |
| **Condiciones de pago** | 3 cuotas / PO corporativa | 3 cuotas o pago unico (pasarela) | PO NET 30/60 | PO NET 30/60 |
| **Facturacion** | A empresa (NIT, IVA discriminado) | A persona natural (IVA incluido en pasarela) | A empresa partner (NIT) | A empresa partner (NIT) |
| **Branding materiales** | MetodologIA completo | MetodologIA completo | Logo partner + Logo MetodologIA | Solo logo del partner |
| **Branding certificados** | Emitido por MetodologIA | Emitido por MetodologIA | Co-emitido (ambos logos) | Emitido por el partner |
| **Branding campus** | MetodologIA | MetodologIA | Co-branded | White-label del partner |
| **Nombre del programa** | Nombre canonico (sin modificar) | Nombre canonico (sin modificar) | Nombre canonico o adaptado (requiere aprobacion) | Definido por el partner |
| **Facilitador** | MetodologIA (visible) | MetodologIA (visible) | MetodologIA (visible, mension en materiales) | MetodologIA (invisible) o facilitador del partner (con certificacion) |
| **SLA de soporte** | Corporativo (respuesta 24h habiles) | Estandar (respuesta 48h habiles) | Custom (definido en contrato marco) | Custom (definido en contrato marco) |
| **Campus / LMS** | Incluido (plataforma MetodologIA) | Incluido (plataforma MetodologIA) | Plataforma MetodologIA o del partner (segun acuerdo) | Plataforma del partner (obligatorio) |
| **Repositorio** | Google Drive MetodologIA | Google Drive MetodologIA | Google Drive o plataforma partner | Plataforma del partner exclusivamente |
| **Participantes** | Empleados de la empresa cliente | El individuo contratante | Empleados/clientes del partner | Empleados/clientes del partner |
| **Contextualizacion** | Al sector/empresa del cliente | Al perfil individual del participante | Al sector del partner y su audiencia final | Al sector del partner y su audiencia final |
| **Posicionamiento** | ROI, productividad organizacional, capacidad de equipo | Crecimiento personal, carrera, empoderamiento individual | Credibilidad institucional, alianza estrategica, valor para el ecosistema | "Nuestro propio programa" (posicionamiento como capacidad interna del partner) |
| **Garantia** | Operativa (entrega completa del pack segun SLA) | Devolucion 100% si entrega retroalimentacion estructurada | Segun contrato marco | Segun contrato marco |
| **Credito educativo** | Aplica (descuento en siguiente servicio) | Aplica (descuento en siguiente servicio) | Segun acuerdo en contrato marco | Segun acuerdo en contrato marco |
| **Escalamiento** | Cofacilitacion o multiples ejecuciones (>20 pax) | N/A (individual o cohort abierto) | Volumen acordado en contrato marco | Volumen acordado en contrato marco |

---

## Diferencias legales y contractuales por segmento

| Aspecto | B2B | B2C | B2B2B co-brand | B2B2B white-label |
|---------|-----|-----|----------------|-------------------|
| **Tipo de contrato** | Propuesta comercial + orden de compra | Terminos y condiciones web + pasarela de pago | Contrato marco de alianza + adendas por servicio | Contrato marco + licencia de contenido + adendas |
| **NDA requerido** | Recomendado (si hay contextualizacion con datos del cliente) | No aplica | Obligatorio (protege marca y contenido compartido) | Obligatorio (protege propiedad intelectual y secreto de autoria) |
| **Propiedad intelectual** | MetodologIA retiene PI de contenido; cliente retiene PI de sus datos | MetodologIA retiene PI; participante puede usar entregables libremente | PI compartida en materiales co-branded; contenido base sigue siendo de MetodologIA | PI de MetodologIA licenciada al partner; partner no adquiere propiedad sobre el contenido |
| **Clausula de no competencia** | No aplica | No aplica | Opcional (sector/geografia) | Recomendada (evitar que el partner replique el programa independientemente) |
| **Responsabilidad por resultados** | Obligacion de medios, no de resultados | Obligacion de medios + garantia de devolucion condicionada | Segun contrato marco; tipicamente obligacion de medios | Obligacion de medios; resultados dependen tambien de la ejecucion del partner |
| **Proteccion de datos (habeas data)** | MetodologIA como responsable del tratamiento | MetodologIA como responsable del tratamiento | Definir responsable vs. encargado en contrato marco [POR CONFIRMAR: JM, 2026-04-15] | Partner como responsable; MetodologIA como encargado [SUPUESTO: esquema tipico | validar con abogado] |

---

## Matriz de escalamiento B2B2B

**Aplica a:** B2B2B co-brand y B2B2B white-label.

| Decision | Aprueba (co-brand) | Aprueba (white-label) | Relacion con cliente final |
|----------|-------------------|----------------------|---------------------------|
| Precio del servicio al partner | JM (MetodologIA) | JM (MetodologIA) | El partner define precio al cliente final |
| Adaptacion de nombre del programa | JM (aprobacion) + Partner (propuesta) | Partner (autonomo) | -- |
| Modificacion de contenido/modulos | JM (exclusivo) | JM (exclusivo) | -- |
| Aprobacion de materiales co-branded | JM + Partner (ambos firman) | Partner (autonomo, con QA de MetodologIA) | -- |
| Seleccion de facilitador | JM (MetodologIA asigna) | Partner (puede ser propio con certificacion de MetodologIA) | -- |
| Atencion de quejas del participante | MetodologIA (primer nivel) | Partner (primer nivel); MetodologIA (escalamiento) | Co-brand: cliente final sabe que MetodologIA participa. White-label: cliente final NO sabe. |
| Renovacion/cancelacion del contrato marco | JM + Partner (bilateral) | JM + Partner (bilateral) | -- |
| Propiedad de la relacion comercial con el cliente final | Compartida (ambos tienen contacto) | Partner (exclusiva; MetodologIA no contacta al cliente final) | En white-label, MetodologIA nunca contacta al participante directamente. |

[SUPUESTO: JM es el unico aprobador del lado MetodologIA en todas las decisiones | validar si se necesita delegacion cuando haya mas de 3 partners activos]

---

## Reglas de aplicacion

### Cuando crear variante de segmento

1. **Siempre crear variante B2B y B2C separadas** para: ejecutiva, comercial-cliente, usuario-inexperto (si el servicio aplica a ambos segmentos segun la matriz de cobertura del inventario maestro).
2. **Comercial compras:** solo B2B. B2C no usa procurement. B2B2B usa la version B2B con addendum adjunto.
3. **B2B2B co-branding:** crear addendum (`b2b2b-cobranding.md`) que describe diferencias sobre la version B2B. No duplicar el documento completo.
4. **B2B2B white-label:** crear addendum (`b2b2b-whitelabel.md`) que describe diferencias sobre la version B2B. No duplicar el documento completo.
5. **Usuario inexperto:** version unificada (B2B/B2C comparten audiencia sin background tecnico). Si hay diferencia de precio significativa entre segmentos, incluir ambas tarifas.

### Archivos resultantes por servicio (maximo 9)

```
{slug}/
  canonico.md                    # SSOT (agnostico de segmento)
  ejecutiva-b2b.md               # C-suite corporativo
  ejecutiva-b2c.md               # Decision individual
  comercial-cliente-b2b.md       # Comprador corporativo
  comercial-cliente-b2c.md       # Comprador individual
  comercial-compras.md           # Procurement (solo B2B/B2B2B)
  usuario-inexperto.md           # Sin jerga (unificado B2B/B2C)
  b2b2b-cobranding.md            # Addendum co-brand sobre version B2B
  b2b2b-whitelabel.md            # Addendum white-label sobre version B2B
```

### Servicios que NO necesitan todas las variantes

| Servicio | B2B | B2C | B2B2B co-brand | B2B2B white-label | Justificacion de exclusiones |
|----------|:---:|:---:|:--------------:|:-----------------:|------------------------------|
| Workshop De Ocupado a Productivo (#1) | Si | Si | Si | Si | Sin exclusiones |
| Bootcamp Trabajar Amplificado (#2) | Si | Si | Si | Si | Sin exclusiones |
| EstrategIA Empresarial (#3) | Si | -- | Si | Si | SKU empresarial; B2C tiene SKU Personal separado |
| EstrategIA Personal (#3) | -- | Si | -- | -- | SKU individual; B2B2B no ofrece servicio personal |
| Programa Digital Champions (#4) | Si | Si* | Si | Si | *B2C solo en modelo multi-company (cohort abierto) |
| Programa Empoderamiento (#5) | -- | Si | -- | -- | Servicio exclusivamente individual por diseno |
| Bootcamps MetodologIA (#6-9) | Si | Evaluar | Si | Si | B2C requiere analisis de demanda individual por bootcamp |
| Bootcamps/Programas IAC (#10-17) | Si | -- | Si | Si | IAC es linea exclusivamente B2B [POR CONFIRMAR: JM, 2026-04-15] |

---

## Addendum B2B2B: templates con reglas de transformacion

### b2b2b-cobranding.md — Reglas campo por campo

```markdown
# {{Nombre del servicio}} — Addendum Co-Branding

**Derivado de:** {{slug}}/comercial-cliente-b2b.md v{{X.Y}} ({{YYYY-MM-DD}})
**Base:** este addendum modifica la version B2B del servicio.
Para condiciones generales, ver `comercial-cliente-b2b.md`.

## Diferencias sobre version B2B

### Branding
- Materiales: reemplazar toda instancia de "MetodologIA" por "{{Nombre Partner}} + MetodologIA".
- Certificados: agregar logo del partner a la izquierda; MetodologIA a la derecha. Texto: "Certificado co-emitido por {{Partner}} y MetodologIA".
- Campus: aplicar esquema de colores del partner como tema principal; mantener logo MetodologIA en footer.
- Nombre del programa: usar "{{Nombre adaptado}}" aprobado por ambas partes. Si no hay aprobacion, usar nombre canonico.

### Condiciones comerciales
- Precio: {{precio negociado}} COP por ciclo (segun contrato marco ref. {{numero de contrato}}).
- Facturacion: al partner (NIT: {{NIT del partner}}).
- Condiciones de pago: PO NET {{30/60}} dias.
- Credito educativo: {{aplica / no aplica / condiciones especiales}}.

### Operacion
- Contextualizacion: al sector {{sector del partner}} y su audiencia ({{descripcion audiencia}}).
- SLA: {{descripcion SLA custom}} segun contrato marco.
- Repositorio: {{Google Drive MetodologIA / plataforma del partner}}.
- Facilitador: asignado por MetodologIA, visible en materiales con perfil compartido.

### Requisitos adicionales
- [ ] Guia de marca del partner recibida (logos vectoriales, colores hex, tipografia).
- [ ] Materiales co-branded aprobados por ambas partes (plazo: 5 dias habiles antes de ejecucion).
- [ ] Acuerdo de uso de marca firmado.
- [ ] NDA firmado.
```

### b2b2b-whitelabel.md — Reglas campo por campo

```markdown
# {{Nombre del servicio}} — Addendum White-Label

**Derivado de:** {{slug}}/comercial-cliente-b2b.md v{{X.Y}} ({{YYYY-MM-DD}})
**Base:** este addendum modifica la version B2B del servicio.
Para condiciones generales, ver `comercial-cliente-b2b.md`.

## Diferencias sobre version B2B

### Branding
- Materiales: eliminar toda referencia a MetodologIA. Reemplazar por marca del partner en todas las instancias.
- Certificados: emitidos exclusivamente bajo marca del partner. Texto: "Certificado emitido por {{Partner}}".
- Campus: plataforma del partner. MetodologIA no debe ser visible en ningun elemento de interfaz.
- Nombre del programa: "{{Nombre definido por el partner}}". El nombre canonico de MetodologIA no aparece.
- Facilitador: si es de MetodologIA, presentarse como "consultor de {{Partner}}" o nombre neutro acordado. Si es del partner, debe tener certificacion de MetodologIA vigente.

### Condiciones comerciales
- Precio base MetodologIA: {{precio negociado}} COP por ciclo (segun contrato marco ref. {{numero}}).
- Facturacion: al partner (NIT: {{NIT del partner}}).
- Condiciones de pago: PO NET {{30/60}} dias.
- Margen del partner: libre (MetodologIA no fija ni conoce el precio al cliente final).
- Credito educativo: {{no aplica / condiciones especiales}}.

### Operacion
- Facilitador: {{MetodologIA invisible / facilitador del partner certificado}}.
- Contextualizacion: completa al entorno del partner y su audiencia final.
- SLA: {{descripcion SLA custom}} segun contrato marco.
- Repositorio: plataforma del partner exclusivamente. Ningun material en infraestructura MetodologIA.
- Soporte participantes: partner como primer nivel; MetodologIA como escalamiento (invisible para el participante).

### Requisitos adicionales
- [ ] Kit de marca completo del partner recibido.
- [ ] Licencia de contenido firmada (define alcance de uso, territorio, vigencia).
- [ ] Proceso de QA para materiales rebrandeados definido y ejecutado.
- [ ] Clausula de confidencialidad de autoria firmada: el partner no revela que MetodologIA es el autor.
- [ ] Si facilitador del partner: certificacion completada y vigente.
- [ ] NDA firmado.
```

---

## Checklist de calidad para variantes de segmento

### Universal (aplica a toda variante)

- [ ] La variante referencia correctamente la version derivada base (no el canonico directamente).
- [ ] Los precios corresponden al segmento correcto (B2B: grupo; B2C: individual; B2B2B: "negociado en contrato marco").
- [ ] El branding mencionado es el correcto para el segmento (MetodologIA / co-brand / solo partner).
- [ ] El nombre del servicio sigue la regla del segmento (canonico en B2B/B2C; adaptable en co-brand; libre en white-label).
- [ ] No hay informacion de un segmento filtrada a otro (ej: precio B2B visible en version B2C).

### Especifica B2B2B

- [ ] El addendum no duplica contenido de la version B2B base; solo documenta diferencias.
- [ ] Todos los campos {{placeholder}} estan identificados para llenado por servicio/partner.
- [ ] Los requisitos adicionales incluyen todos los documentos legales necesarios.
- [ ] La propiedad de la relacion con el cliente final esta claramente definida.

---

## Reglas de consistencia

1. **Precios:** variantes B2B y B2C usan los precios exactos del canonico. Variantes B2B2B nunca muestran precios fijos; siempre dicen "negociado en contrato marco".
2. **Nombres:** el nombre canonico se mantiene intacto en B2B y B2C. En B2B2B co-brand puede adaptarse con aprobacion bilateral. En B2B2B white-label lo define el partner de forma autonoma.
3. **Garantia:** B2B y B2C usan la garantia del canonico. B2B2B siempre dice "segun contrato marco".
4. **Credito educativo:** aplica por defecto en B2B y B2C. En B2B2B se negocia caso a caso.
5. **Principio de no duplicacion:** si no hay diferencia material entre segmentos para un campo, no crear variante. Documentar "sin diferencia respecto a B2B" en lugar de repetir contenido.
