# Guia de Derivacion de Versiones

**Fecha:** 2026-03-29 | **Version:** 1.1 | **Propietario:** Javier Montano

---

## Principios de derivacion

1. **SSOT en cascada.** El canonico es la unica fuente de verdad. Toda version derivada se produce exclusivamente desde el canonico vigente. Si hay conflicto entre una derivada y el canonico, el canonico manda. [DECISION: 2026-03-29, JM, se descarto modelo bidireccional donde derivadas pudieran retroalimentar al canonico — riesgo de inconsistencia circular]
2. **Prohibicion de edicion aguas arriba.** Las derivadas nunca modifican, complementan ni contradicen al canonico. Si durante la derivacion se detecta un error o vacio en el canonico, se corrige primero el canonico y luego se re-deriva.
3. **Consistencia sobre creatividad.** La estructura de cada version es fija (matriz de secciones + estructura sugerida). El margen creativo existe solo dentro de la reescritura de cada seccion, no en la seleccion de secciones ni en la adicion de contenido no existente en el canonico.
4. **Derivacion completa o nula.** No se publica una derivada parcial. Si faltan datos en el canonico para completar una seccion obligatoria, la derivada queda en estado "Pendiente" hasta que el canonico se actualice.

---

## Trazabilidad

Toda derivada debe incluir en su encabezado:

```markdown
**Derivado de:** {slug}/canonico.md v{X.Y} ({YYYY-MM-DD})
**Fecha de derivacion:** {YYYY-MM-DD}
**Version derivada:** {tipo}-v{N} (ej: ejecutiva-b2b-v1)
```

**Regla:** si la version del canonico de referencia no coincide con la version vigente del canonico, la derivada esta desactualizada y debe re-derivarse.

---

## Regla de actualizacion (protocolo de cascada)

Cuando el canonico cambia:

1. Se incrementa la version del canonico (vX.Y → vX.Y+1 para cambios menores; vX+1.0 para cambios de estructura).
2. Se evalua el impacto del cambio sobre cada derivada existente:
   - **Cambio en secciones EXCLUIDAS de la derivada:** sin impacto, no requiere accion.
   - **Cambio en secciones INCLUIDAS sin transformacion:** actualizar contenido directamente.
   - **Cambio en secciones TRANSFORMADAS:** re-ejecutar la transformacion desde el nuevo contenido del canonico.
   - **Cambio en precios, duraciones o nombre canonico:** actualizar TODAS las derivadas sin excepcion.
3. Se actualiza la referencia de trazabilidad en el encabezado de cada derivada afectada.
4. Se registra el cambio en el inventario maestro (columna de estado de derivadas).

**Tiempo maximo de cascada:** 48 horas desde la actualizacion del canonico. [SUPUESTO: equipo de 1 persona puede cascadear en 48h para 1 servicio | validar cuando haya mas de 5 servicios activos]

---

## 5 Versiones por servicio

| # | Version | Archivo | Audiencia | Objetivo de palabras | Paginas objetivo |
|---|---------|---------|-----------|---------------------|-----------------|
| 1 | Canonico exhaustivo | `canonico.md` | Ops, legal, contratos, facilitadores | 5.000-12.000 | 20-40 |
| 2 | Ejecutiva | `ejecutiva-{segmento}.md` | C-suite, decision makers, sponsors | 600-900 | 2-3 |
| 3 | Comercial cliente final | `comercial-cliente-{segmento}.md` | Comprador / usuario final | 900-1.500 | 3-5 |
| 4 | Comercial area de compras | `comercial-compras.md` | Procurement, adquisiciones, legal corporativo | 1.200-1.800 | 3-5 |
| 5 | Usuario inexperto | `usuario-inexperto.md` | Sin background tecnico, primera vez con IA | 400-600 | 1-2 |

---

## Matriz de secciones: que incluir, excluir y transformar

### Version 2: Ejecutiva

**Objetivo:** que un C-suite o sponsor decida en 5 minutos si este servicio merece su atencion. Cada parrafo responde "por que esto importa para el negocio/la persona".

| Seccion del canonico | Accion | Instruccion de transformacion | Palabras objetivo |
|---------------------|--------|-------------------------------|------------------|
| 0) Ficha rapida | INCLUIR completa | Mantener formato tabla. Eliminar campos operativos (tamano min/max, campus). | 80-120 |
| 1) Definicion | INCLUIR parcial | Solo 1.1 (frase) y 1.3 (que no es, max 3 bullets). Eliminar 1.2 y 1.4. | 60-100 |
| 2) Fit y anti-fit | EXCLUIR | -- | -- |
| 3) Problema + etica | RESUMIR | Condensar en 2-3 bullets: sintomas observables + consecuencias de no actuar. Sin causas raiz ni reglas de datos. | 60-90 |
| 4) Alcance | RESUMIR | 3 bullets in-scope + 3 bullets out-scope. Sin detalles operativos. | 60-80 |
| 5) Arquitectura | TRANSFORMAR | Tabla de modulos: solo columnas Nombre + Output clave. Eliminar columnas de tiempo, herramientas, prerrequisitos por modulo. | 80-120 |
| 6) Resultados | INCLUIR parcial | Solo capacidades adquiridas. Excluir DoD (es operativo). Reescribir como "Al finalizar, su equipo podra..." | 60-100 |
| 7) Entregables | INCLUIR parcial | Lista corta (nombres + descripcion de 1 linea). Sin formato, vigencia ni repositorio. | 40-60 |
| 8) Metodo | EXCLUIR | -- | -- |
| 9) Prerrequisitos | EXCLUIR | -- | -- |
| 10) Contextualizacion | EXCLUIR | -- | -- |
| 11) Operacion | EXCLUIR | -- | -- |
| 12) Politicas comerciales | INCLUIR parcial | Solo: precio por segmento + esquema de cuotas + credito educativo. Sin mora, fuerza mayor, cancelacion. | 60-80 |
| 13) Metricas | INCLUIR parcial | North Star + 2 metricas lagging. Sin metricas leading ni instrumentacion. | 40-60 |
| 14) Casos borde | EXCLUIR | -- | -- |
| 15) Continuidad | INCLUIR completa | Tabla de siguiente paso con nombre del servicio + beneficio clave. Es el motor de upsell. | 40-60 |
| Anexos | EXCLUIR | -- | -- |

**Criterios de calidad:**
- [ ] Un ejecutivo sin contexto previo entiende el servicio en 5 minutos de lectura.
- [ ] No contiene jerga operativa (SLA, campus, repositorio, checklist, modulo por modulo).
- [ ] Precios coinciden exactamente con el canonico vigente.
- [ ] Incluye al menos 1 dato cuantitativo de impacto (duracion, participantes, metrica).
- [ ] Tiene CTA o referencia a continuidad.

**Errores frecuentes:**
- Copiar la ficha rapida completa incluyendo campos operativos.
- Incluir DoD (es lenguaje de verificacion, no de decision).
- Omitir la seccion de continuidad (pierde oportunidad de upsell).
- Usar segunda persona ("tu") cuando la audiencia es corporativa.

---

### Version 3: Comercial cliente final

**Objetivo:** que el comprador individual o corporativo desee inscribirse o solicitar propuesta. Tono aspiracional + concreto. Segunda persona ("tu", "vas a"). CTA claro al final.

| Seccion del canonico | Accion | Instruccion de transformacion | Palabras objetivo |
|---------------------|--------|-------------------------------|------------------|
| 0) Ficha rapida | TRANSFORMAR a "Resumen del servicio" | Convertir tabla en narrativa breve (3-4 frases). Tono aspiracional: que promete, para quien, en cuanto tiempo. | 60-80 |
| 1) Definicion | TRANSFORMAR a beneficios | Reescribir "que es" como propuesta de valor. Eliminar "que no es". Formato: "Un [tipo] de [duracion] que te permite [beneficio principal]." | 40-60 |
| 2) Fit y anti-fit | TRANSFORMAR a "Es para ti si..." | Solo fit (3-5 bullets). Sin anti-fit. Cada bullet inicia con "Eres / Tienes / Quieres". | 40-60 |
| 3) Problema | TRANSFORMAR a "El reto que resolvemos" | Reformular sintomas como dolor reconocible en primera persona del lector. Sin causas raiz tecnicas. Maximo 1 parrafo. | 60-80 |
| 4) Alcance | EXCLUIR | Se infiere de la seccion de modulos. | -- |
| 5) Arquitectura | TRANSFORMAR a "Tu recorrido" | Modulos como journey steps narrativos: "Primero... Luego... Finalmente...". Sin tiempos exactos por modulo. | 100-150 |
| 6) Resultados | TRANSFORMAR a "Lo que vas a lograr" | Capacidades reescritas como promesas verificables: "Vas a poder [accion concreta] en [contexto]." | 80-100 |
| 7) Entregables | TRANSFORMAR a "Lo que te llevas" | Lista simple sin formatos tecnicos. Cada entregable en 1 frase: nombre + para que sirve. | 60-80 |
| 8-11) Operacion | EXCLUIR | -- | -- |
| 12) Politicas | INCLUIR parcial | Precio + esquema de cuotas + garantia + credito. Lenguaje amigable: "Tu inversion" en lugar de "Condiciones comerciales". | 60-80 |
| 13) Metricas | TRANSFORMAR a "Asi medimos el exito" | 1 North Star + 2 resultados reescritos en lenguaje del participante. | 40-60 |
| 14) Casos borde | EXCLUIR | -- | -- |
| 15) Continuidad | TRANSFORMAR a "Tu siguiente paso" | Narrativa (no tabla): "Despues de este [servicio], puedes continuar con [siguiente], que te permite [beneficio]." | 40-60 |
| Anexos | EXCLUIR | -- | -- |

**Estructura obligatoria:**
1. Hook (1 frase que identifica el dolor) — 15-25 palabras
2. La solucion (que es el servicio) — 40-60 palabras
3. Es para ti si... (fit) — 40-60 palabras
4. Tu recorrido (modulos como journey) — 100-150 palabras
5. Lo que vas a lograr (resultados) — 80-100 palabras
6. Lo que te llevas (entregables) — 60-80 palabras
7. Tu inversion (precio + cuotas + garantia) — 60-80 palabras
8. Tu siguiente paso (continuidad + CTA) — 40-60 palabras

**Criterios de calidad:**
- [ ] El hook genera identificacion emocional en los primeros 15 segundos.
- [ ] No contiene ningun acronimo no explicado (ROI, KPI, OKR son aceptables en B2B; no en B2C).
- [ ] Cada seccion tiene al menos 1 beneficio concreto (no generico).
- [ ] Precios coinciden exactamente con el canonico vigente.
- [ ] CTA final es una accion especifica (no "contactanos").

**Errores frecuentes:**
- Incluir anti-fit (desmotiva al lector en un contexto de venta).
- Copiar tiempos exactos por modulo (genera rigidez innecesaria).
- Usar lenguaje de tercera persona ("el participante") en lugar de segunda ("tu").
- Omitir la garantia (reduce confianza en la compra).

---

### Version 4: Comercial area de compras

**Objetivo:** que procurement pueda evaluar, comparar y aprobar el servicio contra sus criterios internos. Formato compatible con procesos de adquisicion y compliance. Tercera persona. Sin marketing.

| Seccion del canonico | Accion | Instruccion de transformacion | Palabras objetivo |
|---------------------|--------|-------------------------------|------------------|
| 0) Ficha rapida | INCLUIR completa | Formato tabla de especificaciones. Agregar campos: NIT proveedor, regimen tributario, codigo UNSPSC si aplica. | 100-150 |
| 1) Definicion | INCLUIR parcial | Solo 1.1 (frase de identificacion). | 20-30 |
| 2) Fit | EXCLUIR | -- | -- |
| 3) Problema | EXCLUIR | Procurement no compra por dolor; compra por especificacion. | -- |
| 4) Alcance | INCLUIR completo | In-scope + out-scope como listas cerradas. Cada item con verbo infinitivo. Base para clausula contractual de alcance. | 100-150 |
| 5) Arquitectura | INCLUIR completa | Tabla con todas las columnas incluyendo tiempos. Son especificaciones verificables en ejecucion. | 120-180 |
| 6) Resultados | INCLUIR completo | DoD completo como "Criterios de aceptacion del servicio". Formato: condicion verificable + metodo de verificacion. | 100-150 |
| 7) Entregables | INCLUIR completo | Lista cerrada: nombre + formato + vigencia + medio de entrega. Base para acta de entrega. | 80-120 |
| 8) Metodo | EXCLUIR | -- | -- |
| 9) Prerrequisitos | TRANSFORMAR a "Obligaciones del cliente" | Reescribir cada prerequisito como obligacion contractual: "El cliente debera proveer [recurso] con [antelacion]." | 60-80 |
| 10) Contextualizacion | INCLUIR parcial | Solo lead time y proceso de personalizacion. Para planificacion de procurement. | 40-60 |
| 11) Operacion | INCLUIR parcial | SLA + roles + tamano de grupo como especificaciones operativas. | 60-80 |
| 12) Politicas | INCLUIR TODO | Precios, cuotas, impuestos, mora, cancelacion, garantia, credito, fuerza mayor. Sin omitir ningun campo. Cada condicion con unidad de medida y plazo. | 150-200 |
| 13) Metricas | TRANSFORMAR a "Indicadores de desempeno" | Formato KPI: nombre + formula + frecuencia + meta. | 60-80 |
| 14) Casos borde | EXCLUIR | Pero incluir cancelacion y fuerza mayor de seccion 12. | -- |
| 15) Continuidad | TRANSFORMAR a "Servicios complementarios" | Lista de servicios relacionados con precio indicativo. Cross-sell para compras. | 40-60 |
| Anexos | INCLUIR parcial | Checklist 48h como "Requisitos previos a la ejecucion". | 40-60 |

**Estructura obligatoria:**
1. Identificacion del servicio (ficha completa) — 100-150 palabras
2. Alcance y exclusiones — 100-150 palabras
3. Especificaciones tecnicas (modulos, tiempos) — 120-180 palabras
4. Entregables y criterios de aceptacion — 180-270 palabras
5. Obligaciones del cliente (requisitos previos) — 60-80 palabras
6. Niveles de servicio (SLA) — 60-80 palabras
7. Condiciones comerciales completas — 150-200 palabras
8. Indicadores de desempeno — 60-80 palabras
9. Servicios complementarios — 40-60 palabras

**Criterios de calidad:**
- [ ] Todo dato tiene unidad de medida (horas, COP, dias, personas).
- [ ] Toda condicion tiene plazo o vigencia explicita.
- [ ] No contiene lenguaje de marketing (adjetivos valorativos, promesas emocionales).
- [ ] Compatible con formato de evaluacion de proveedores estandar.
- [ ] Precios incluyen tratamiento tributario (IVA discriminado, retencion).

**Errores frecuentes:**
- Omitir condiciones de mora o cancelacion (genera vacio contractual).
- Usar rangos imprecisos ("aproximadamente 20 horas") en lugar de valores exactos.
- Incluir lenguaje aspiracional que no corresponde a la audiencia.
- No discriminar IVA en los precios.

---

### Version 5: Usuario inexperto

**Objetivo:** que una persona sin background tecnico entienda que es el servicio, si le sirve, y como empezar. Lenguaje cotidiano. Frases cortas. Preguntas retoricas.

**Terminos prohibidos:** ROI, OKR, KPI, human-in-the-loop, compliance, SLA, framework, metodologia agil, sprint, stakeholder, deliverable, pipeline.

| Seccion del canonico | Accion | Instruccion de transformacion | Palabras objetivo |
|---------------------|--------|-------------------------------|------------------|
| 0) Ficha rapida | TRANSFORMAR a "En resumen" | 5 bullets ultrasimplificados: que es, cuanto dura, para quien, que te llevas, cuanto cuesta. | 40-60 |
| 1) Definicion | TRANSFORMAR a "Que es esto?" | 2-3 frases como explicarias a un familiar: "Es un [tipo] donde vas a aprender a [beneficio principal] usando [herramienta simplificada]." | 30-50 |
| 2) Fit | TRANSFORMAR a "Es para ti si..." | 3 bullets simples. Cada uno describe una situacion cotidiana reconocible, no un perfil profesional. | 30-50 |
| 3) Problema | TRANSFORMAR a "Conoces esta situacion?" | 1 parrafo que describe el dolor en lenguaje de la vida diaria. Sin analisis causal. | 40-60 |
| 4) Alcance | EXCLUIR | -- | -- |
| 5) Arquitectura | TRANSFORMAR a "Como funciona?" | 3-5 pasos simples en narrativa: "Primero... Despues... Al final..." Sin tabla. Sin nombres tecnicos de modulos. | 60-80 |
| 6) Resultados | TRANSFORMAR a "Que vas a poder hacer despues?" | 3 capacidades en lenguaje llano. Cada una es una accion cotidiana: "Vas a poder [verbo simple] sin [frustacion actual]." | 40-60 |
| 7) Entregables | TRANSFORMAR a "Que te llevas?" | Lista simple: nombre comun + para que sirve en 1 frase. Sin formatos tecnicos. | 30-50 |
| 8-11) Operacion | EXCLUIR | -- | -- |
| 12) Politicas | INCLUIR minimo | Solo: precio + "puedes pagar en cuotas" + garantia en 1 frase. Sin mora, cancelacion, IVA. | 30-40 |
| 13) Metricas | EXCLUIR | -- | -- |
| 14) Casos borde | EXCLUIR | -- | -- |
| 15) Continuidad | TRANSFORMAR a "Y despues?" | 1 parrafo corto: "Si te gusto, el siguiente paso es [nombre simple del servicio], donde vas a [beneficio]." | 20-30 |
| Anexos | EXCLUIR | -- | -- |

**Estructura obligatoria:**
1. Que es esto? — 30-50 palabras
2. Conoces esta situacion? — 40-60 palabras
3. Es para ti si... — 30-50 palabras
4. Como funciona? — 60-80 palabras
5. Que vas a poder hacer? — 40-60 palabras
6. Que te llevas? — 30-50 palabras
7. Cuanto cuesta? — 30-40 palabras
8. Y despues? — 20-30 palabras
9. Como empiezo? (CTA) — 15-25 palabras

**Criterios de calidad:**
- [ ] Una persona de 16 anos sin experiencia laboral entiende todo el documento.
- [ ] Ninguna frase supera 20 palabras.
- [ ] No contiene ningun termino de la lista de terminos prohibidos.
- [ ] Precio esta expresado en formato simple (sin discriminacion tributaria).
- [ ] CTA es una accion concreta de 1 paso ("Escribe a [canal]" o "Inscribete en [link]").

**Errores frecuentes:**
- Usar "participante" en lugar de "tu".
- Incluir nombres tecnicos de modulos sin traducirlos a lenguaje comun.
- Explicar la metodologia pedagogica (al inexperto no le importa el como, solo el que).
- Poner precios con discriminacion de IVA o condiciones de pago complejas.

---

## Checklist de derivacion (aplicar a cada version)

### Checklist universal

- [ ] Derivada producida **desde** el canonico vigente (no inventada ni copiada de otra derivada).
- [ ] Encabezado de trazabilidad presente (version canonico, fecha de derivacion).
- [ ] Secciones incluidas/excluidas/transformadas segun la matriz de la version correspondiente.
- [ ] Transformaciones ejecutadas segun la instruccion especifica (no solo "resumido").
- [ ] Tono consistente con la audiencia de la version.
- [ ] Extension dentro del rango de palabras objetivo por seccion.
- [ ] Precios coinciden exactamente con el canonico vigente.
- [ ] Nombre canonico del servicio identico en todas las versiones.
- [ ] Sin informacion que contradiga el canonico.
- [ ] Sin informacion inventada que no exista en el canonico.
- [ ] CTA o siguiente paso presente (excepto en canonico y compras).

### Checklist de criterios de calidad especificos

- [ ] Criterios de calidad de la version correspondiente verificados (ver seccion de cada version).
- [ ] Errores frecuentes de la version correspondiente revisados y ausentes.
