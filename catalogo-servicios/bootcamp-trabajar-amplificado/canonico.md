# Bootcamp -- Trabajar Amplificado

**Documento canonico de servicio** -- v2.0 (2026-03-29)

> **Uso previsto (fuente unica):** web / oferta comercial / contrato-SOW / operacion / onboarding de facilitacion.
> **Regla de autoridad:** lo contractual vive en este documento. Anexos son operativos y **no modifican** alcance ni politicas salvo cita explicita. Si hay conflicto entre una derivada (ejecutiva, comercial, compras) y este canonico, **este canonico manda**.
> **Ruta oficial:** Ruta de **(R)Evolucion Personal** y **(R)Evolucion Empresarial** (concepto tematico: **Amplificacion Sistematica**)
> **Marca:** MetodologIA
> **Clasificacion:** Publico (precios incluidos)

### Convenciones de trazabilidad
Toda afirmacion critica lleva una de estas etiquetas al final de la linea:
- `[EVIDENCIA: fuente]` -- dato verificado con localizador.
- `[SUPUESTO: riesgo | plan de validacion]` -- propuesta no verificada.
- `[POR CONFIRMAR: responsable, fecha limite]` -- informacion faltante que bloquea publicacion.
- `[DECISION: fecha, quien decidio, alternativa descartada]` -- trade-off resuelto.

---

## 0) Ficha rapida (decision en 60s)

| Atributo | Especificacion |
|---|---|
| **Nombre canonico** | **Bootcamp Trabajar Amplificado** |
| **Slug (ID unico)** | `bootcamp-trabajar-amplificado` |
| **SKUs** | Bootcamp Empresas (ciclo privado) / Bootcamp Personas (cohorte abierta) |
| **Tipo de servicio** | Bootcamp (entrenamiento aplicado + laboratorio + proyecto final) |
| **Categoria comercial** | Profundizacion -- segundo nivel despues del Workshop de entrada |
| **Ruta oficial** | (R)Evolucion Personal + Empresarial (ambas) |
| **Duracion total** | **20 horas** (18h nucleo + 2h contexto/nivelacion) |
| **Modalidad** | Virtual sincronico en vivo (default). Presencial a solicitud (logistica y viaticos aparte). |
| **Mecanismo didactico** | Demostracion breve -> Practica guiada (dominante) -> Verificacion por evidencia |
| **Proporcion didactica** | 15% demo / 70% practica guiada / 15% verificacion `[SUPUESTO: proporcion estimada del diseno actual | validar con medicion en proximas 3 cohortes]` |
| **Motor IA** | Agnostico. Default: ChatGPT web (cuenta gratuita suficiente). Alternativas: Gemini / Copilot / motor permitido por TI del cliente. |
| **Entregables core** | Biblioteca de +100 prompts (HTML + JSON) + playbook interactivo HTML por nivel + plantillas por modulo + memorias/artefactos + proyecto final aplicado |
| **Certificacion** | **Asistencia** (todos). **Competencia** (proyecto final + rubrica: claridad, aplicabilidad, seguridad de datos, reproducibilidad). |
| **Soporte / SLA** | Email D+1 habil / WhatsApp <=2h (9-16h COT) / Embajador asignado |
| **Repositorio** | Google Drive + Campus, 30 dias post-cierre. Backup es responsabilidad del cliente. |
| **Campus / LMS** | Incluido **durante la formacion + 1 mes**; continuidad opcional **COP 20.000/mes** (~USD 5.7/mes). `[DECISION: 2025-12, JM, descartada: acceso ilimitado sin costo -- no es sostenible operativamente; 1 mes permite consolidar y descargar]` |
| **Participantes** | Recomendado: **10-20** (practica alta). Maximo con 1 facilitador: **20**. >20: cofacilitacion o doble ejecucion. |
| **Precio canonico B2C** | **COP 800.000** por persona |
| **Precio canonico B2B** | **COP 12.000.000 + IVA** por ciclo (hasta 20 participantes) |
| **Costo por participante efectivo** | B2B: COP 600.000/persona en grupo de 20. B2C: COP 800.000 fijo. |
| **Credito desde** | **Workshop "De Ocupado a Productivo"**: 100% del valor efectivamente pagado, ventana 6 meses, acumulable, intransferible. |
| **Credito hacia** | Aplicable a **EstrategIA Personal/Empresarial** o **Programas** (condiciones definidas en el canonico del servicio destino). `[POR CONFIRMAR: JM, 2026-04-15]` |
| **Impuestos** | Online: incluidos (pasarela). Corporativo: discriminados (factura). |
| **Vigencia de precios** | Hasta nueva version del canonico |

**Trade-off de diseno del servicio:** priorizamos profundidad aplicada (construir activos reutilizables + proyecto final) sobre cobertura tematica amplia. El objetivo es que el participante salga con un **sistema operativo de trabajo amplificado**, no con un catalogo de tecnicas de IA. Quien necesita solo instalar un habito empieza por el Workshop; quien necesita estrategia va a EstrategIA. `[DECISION: 2025-11, JM, descartada: version de 30h con modulos de estrategia -- diluia el enfoque practico y subia el precio a un rango que frenaba conversion]`

---

## 1) Definicion sin confusiones

### 1.1 Oferta en una frase (canonica -- usar textual en web/contrato)
> Entrenamiento intensivo de 20 horas para pasar de "usar IA" a **trabajar amplificado**: construir sistemas repetibles (prompts avanzados, asistentes cuando aplique y flujos) que elevan velocidad, calidad y consistencia en entregables reales, verificados por proyecto final.

### 1.2 Que es (y por que funciona)
- Un **laboratorio para producir activos reutilizables** (no solo consumir informacion): cada modulo cierra con un entregable verificable. `[EVIDENCIA: diseno de modulos v1.4, cada modulo tiene entregable asociado]`
- Un proceso con **entregables por modulo + proyecto final** aplicado y verificable que integra todo lo construido.
- Un marco de adopcion (personal o de equipo) con reglas explicitas de etica, seguridad y transferencia que garantiza que lo aprendido se usa despues de la sesion.

**Diferenciador clave:** a diferencia de cursos de IA que muestran features, este Bootcamp instala un sistema operativo de trabajo amplificado: el participante construye su biblioteca de prompts, sus playbooks, sus especificaciones de asistentes y su plan de adopcion. No consume contenido generico; produce activos propios.

### 1.3 Que NO es (expectativas frecuentes que deben cortarse)
| Expectativa erronea | Realidad | Como se descubre temprano |
|---|---|---|
| "Es un curso teorico de IA" | No. El 70% del tiempo es practica guiada con herramienta en mano. La teoria se limita a lo minimo para operar. | Pregunta: "que esperas hacer en las sesiones?" |
| "Me van a desarrollar automatizaciones productivas" | No. Se construyen prototipos y especificaciones (blueprints), no soluciones listas para produccion. | Pregunta: "tu necesidad es aprender a construir o que lo construyan?" |
| "Reemplaza consultoria estrategica" | No. Para estrategia: EstrategIA. Esto resuelve sistematizacion de trabajo operativo. | Pregunta: "tu problema es operativo o estrategico?" |
| "No necesito cambiar habitos, solo aprender herramientas" | El Bootcamp requiere practica entre sesiones y entrega de proyecto final. Sin compromiso, el certificado de competencia no se emite. | Cualificacion: "puedes dedicar tiempo entre sesiones?" |
| "Garantizan ahorro de X horas" | Instalamos capacidad y medimos adopcion. Los resultados dependen de aplicacion consistente. | Limites eticos explicados en kickoff |

### 1.4 Ubicacion en la ruta (continuidad + creditos)
```
[Workshop De Ocupado a Productivo, 3h] --100% credito, 6 meses-->
  [BOOTCAMP TRABAJAR AMPLIFICADO, 20h] -->
    [EstrategIA Personal/Empresarial, 18h] -->
      [Programa, 16 sem]
```
1. **Prerequisito sugerido:** Workshop "De Ocupado a Productivo" (punto de entrada de la ruta, no obligatorio)
2. **Este servicio:** Bootcamp Trabajar Amplificado (20h)
3. **Siguiente paso natural:** EstrategIA Personal o EstrategIA Empresarial (segun necesidad)
4. **Ruta completa:** Workshop -> Bootcamp -> EstrategIA -> Programa

**Logica de credito:** el 100% de credito desde el Workshop elimina la barrera de "ya pague por algo similar" y convierte el Workshop en mobilization fee natural del Bootcamp. La ventana de 6 meses da tiempo suficiente para decidir sin presion pero mantiene urgencia razonable. `[DECISION: 2025-10, JM, descartada: credito parcial 50% -- no movia la conversion suficientemente]`

---

## 2) Fit y anti-fit

### 2.1 Cliente ideal (senales observables)
| Senal | Como se verifica | Fuente |
|---|---|---|
| Necesita estandarizar calidad + velocidad de entregables (menos retrabajo, mas consistencia) | "Que entregables de tu equipo tienen mas retrabajo?" | Brief / conversacion |
| Quiere construir un repositorio vivo de prompts/plantillas/playbooks (y agentes/flows cuando aplique) | "Tienes prompts guardados o empiezas de cero cada vez?" | Brief |
| Puede practicar en vivo y dedicar tiempo a un proyecto final aplicable | "Puedes comprometer X horas semanales al bootcamp + proyecto?" | Confirmacion explicita |
| En equipos: busca lenguaje comun y criterios compartidos de entregable excelente | "Tu equipo tiene estandares claros de calidad para entregables?" | Brief B2B |
| Ya hizo el Workshop o tiene nociones basicas de IA generativa | "Has usado ChatGPT/Gemini para algo real de tu trabajo?" | Conversacion |

### 2.2 Anti-fit (no-fit -- rechazar con tacto)
| Condicion de rechazo | Por que no funciona | Alternativa sugerida |
|---|---|---|
| Busca resultados "sin practica" o sin cambiar habitos | El Bootcamp exige entregables por modulo + proyecto final. Sin compromiso, pierde >80% del valor. | Recurso gratuito (prompts estrella) o Workshop como punto de entrada |
| Habilidad digital insuficiente (computador, archivos, navegador, copiar/pegar, compartir pantalla) | No puede ejecutar practica guiada, que es el 70% del Bootcamp | Sesion de nivelacion previa (ofrecida por embajador, 1h) + re-evaluacion |
| Su problema es "necesito que lo implementen", no aprender un sistema | El Bootcamp instala capacidad; no ejecuta por el cliente | Consultoria done-for-you / Sofka Technologies |
| No puede operar con datos anonimizados/sinteticos y pretende usar datos sensibles sin controles | Riesgo legal y etico irreconciliable | Explicar reglas de datos. Si insiste: no proceder |
| No puede comprometer tiempo minimo entre sesiones para entregables y proyecto | Proyecto final queda incompleto; certificado de competencia no se emite | Bootcamp en otra ventana de tiempo o Workshop |
| Motor IA completamente bloqueado por TI sin alternativa viable | Modulos 2-7 pierden su nucleo practico | Validar alternativa. Si no hay ninguna: no vender |

### 2.3 Preguntas de cualificacion (script de venta)
Orden deliberado: la pregunta 1 detecta urgencia, la 2 detecta capacidad de decision, la 3 detecta viabilidad tecnica.
1. **Detecta dolor real:** "Que entregables quieres amplificar (docs, analisis, ventas, docencia, ops, contenido, investigacion, reportes)? Cuanto retrabajo generan hoy?" -- Si no identifica entregables concretos, la probabilidad de completar el proyecto final cae significativamente. Ofrecer Workshop primero. `[SUPUESTO: sin entregable concreto, abandono de proyecto final >50% | validar con datos de primeras 5 cohortes]`
2. **Detecta intencion de sistema:** "Que sistema quieres tener al final (biblioteca de prompts, playbook, asistente/especificacion, workflow, prototipo, plan de adopcion)?"
3. **Detecta viabilidad tecnica:** "Que restricciones TI/datos existen (herramientas permitidas, bloqueos, tipos de informacion prohibida)?" -- Si TI bloquea todo, explorar alternativa antes de cerrar.

**Regla de corte:** si la respuesta a la pregunta 1 es vaga y no identifica entregables reales, recomendar Workshop primero como validacion de interes.

---

## 3) Problema que resuelve y limites eticos

### 3.1 Sintomas (lo que el cliente siente -- lenguaje del cliente, no tecnico)
- "Uso ChatGPT pero siempre empiezo de cero; no tengo nada guardado ni sistematizado."
- "Mis prompts dan resultados inconsistentes; a veces sirve, a veces no."
- "Se que la IA puede hacer mas pero no se como estructurar lo que quiero."
- "Mi equipo usa IA cada uno a su manera; no hay estandar ni calidad predecible."
- "Necesito escalar la calidad de mis entregables sin multiplicar mi tiempo."

### 3.2 Causas raiz (lo que realmente pasa -- analisis del consultor)
| Causa | Efecto directo | Impacto en negocio/persona |
|---|---|---|
| Falta de estructuras (meta-prompts, rubricas, checks de calidad) para controlar outputs | Outputs inconsistentes, retrabajo por resultados impredecibles | Desconfianza en IA; reversion a metodos manuales |
| Ausencia de sistema operativo para capturar, versionar y reutilizar activos de IA | Cada interaccion empieza de cero; conocimiento se pierde | Costo de oportunidad: horas invertidas que no se acumulan |
| Uso reactivo de IA (preguntar) en lugar de uso intencional (disenar procesos repetibles) | IA como "oraculo" en vez de como herramienta de produccion | Adopcion estancada en nivel basico; brecha con competidores que si sistematizan |

### 3.3 Consecuencias de segundo orden (si no se atiende)
| Horizonte | Consecuencia | Impacto cuantificable estimado |
|---|---|---|
| 30 dias | Retrabajo acumulado: cada entregable toma 2-3 iteraciones en vez de 1 | ~8-12h/mes desperdiciadas en iteraciones evitables `[SUPUESTO: basado en experiencia de facilitadores | validar con data post-bootcamp]` |
| 90 dias | Frustacion con IA: equipo o persona abandona adopcion por falta de resultados consistentes | Inversion en herramientas de IA sin retorno; desmoralizacion |
| 12 meses | Brecha competitiva: pares que sistematizaron producen 2-3x mas rapido con calidad estandarizada | Perdida de contratos/oportunidades; obsolescencia de metodos de trabajo |

### 3.4 Limites eticos (no negociables -- aplican a todas las marcas)
- **Human-in-the-loop:** la IA propone; el humano valida y decide. Sin excepciones.
- No se garantizan resultados financieros ni ahorros de tiempo especificos; se garantiza **metodo + artefactos + claridad**.
- No se interviene en decisiones legales/financieras/medicas criticas.
- No se generan contenidos que suplanten identidad, violen copyright o manipulen audiencias.
- No se reemplaza criterio humano en decisiones criticas; la IA es herramienta, no decision-maker.

### 3.5 Reglas de datos (no negociables)
| Categoria | Prohibido | Permitido | Ejemplo |
|---|---|---|---|
| Datos personales (PII) | Nombres reales, cedulas, telefono, email de terceros | Anonimizados: "Cliente A", "Proyecto X" | "Juan Perez" -> "Participante 1" |
| Datos financieros | Cifras reales de ingresos, costos, margenes | Ordenes de magnitud o ficticios | "$500M" -> "rango alto" |
| Secretos industriales | Formulas, algoritmos, planes no publicos | Abstraccion del problema sin detalle propietario | "Nuestro algoritmo de..." -> "un proceso de optimizacion" |
| Credenciales | Passwords, API keys, tokens | Nunca. Sin alternativa. | N/A |

**Escalamiento:** si un participante insiste en usar datos sensibles, el facilitador pausa la actividad y escala al embajador. No se negocia.

---

## 4) Alcance y fuera de alcance

### 4.1 Dentro del alcance (In-scope)
| # | Actividad/Entregable | Criterio de completitud | Quien lo produce |
|---|---|---|---|
| 1 | Entrenamiento aplicado con practica guiada "herramienta en mano" (20h) | Carga horaria ejecutada, evidencias por modulo | Facilitador (guia) + Participante (ejecuta) |
| 2 | Diseno y construccion de activos: prompts, plantillas, playbooks, especificaciones de asistentes/flows | Activos verificados por facilitador segun rubrica | Participante (co-creacion guiada) |
| 3 | Biblioteca de +100 prompts (HTML + JSON) | Entregada y accesible en repositorio | Facilitador/Embajador |
| 4 | Playbook interactivo HTML por nivel | Entregado y accesible | Facilitador/Embajador |
| 5 | Verificacion por evidencias (por modulo + proyecto final) | Rubrica completada por facilitador | Facilitador |
| 6 | Guia de adopcion y estandarizacion (personal/equipo) con metricas | Plan de adopcion producido por participante | Participante (guiado) |
| 7 | Proyecto final aplicado a caso real del participante | Entregado + evaluado "apto" por rubrica | Participante (guiado) |
| 8 | Certificado de asistencia y/o competencia | Emitido segun criterios (Sec 7.4) | MetodologIA |
| 9 | Acceso a Campus durante formacion + 1 mes | Acceso verificado | Embajador |

### 4.2 Fuera del alcance (Out-of-scope)
| Exclusion | Por que se excluye | Donde se consigue |
|---|---|---|
| Integraciones por API, desarrollo de software, automatizaciones productivas dentro del stack del cliente | Fuera de expertise; cambia naturaleza del servicio a desarrollo | Sofka Technologies u otro proveedor tech |
| Auditorias de seguridad/compliance | Requiere expertise legal/tecnico especializado; riesgo regulatorio | Consultora de seguridad / area legal del cliente |
| Ejecucion operativa de tareas del cliente | Crea dependencia; contradice modelo de instalacion de capacidad | Consultoria done-for-you (fuera de portafolio) |
| Soporte tecnico avanzado de plataformas de terceros (motor IA, calendario, gestor del cliente) | Fuera de control de MetodologIA | Proveedor de la herramienta |
| Decisiones legales/contractuales | Requiere abogado; riesgo regulatorio | Asesor legal del cliente |
| Diagnostico organizacional profundo | Requiere data, entrevistas, analisis multi-stakeholder | EstrategIA Empresarial o discovery SDF |

### 4.3 Zona gris (se evalua caso a caso)
| Solicitud frecuente | Decision default | Condicion para incluir |
|---|---|---|
| "Nos ayudan a implementar despues del bootcamp?" | Fuera de alcance | Si se contrata EstrategIA como siguiente paso, incluye acompanamiento de implementacion |
| "Pueden adaptar los prompts a nuestro ERP/CRM/herramienta interna?" | Fuera de alcance | Si el ajuste es cosmetico (nombres, terminos del sector): incluido en contextualizacion. Si requiere integracion tecnica: fuera |
| "Queremos sesiones de seguimiento post-bootcamp" | Fuera de alcance | Soporte estandar (30 dias) incluido. Seguimiento estructurado: se cotiza como add-on o se contrata EstrategIA |
| "Podemos agregar participantes despues de iniciado?" | Evaluacion caso a caso | Si hay cupos y el participante se nivela autonomamente con materiales del modulo 0 |
| "Necesitamos que el proyecto final sea sobre un caso confidencial" | Dentro del alcance con restriccion | Solo con datos anonimizados o caso sintetico. Sin excepcion. |
| "Podemos repetir el Bootcamp con otro grupo?" | Nuevo ciclo | Segundo ciclo con -20% si se contrata simultaneamente (ver Sec 12) |

---

## 5) Arquitectura del servicio (modulos / sesiones / fases)

### 5.1 Principio rector
**Cada modulo produce un entregable verificable** y registra: decisiones tomadas, supuestos explicitos, trade-offs ("que NO haremos"), metrica de seguimiento y fecha de revision.

**Regla de prioridad temporal:** si el tiempo aprieta, se recorta exposicion, **nunca practica ni documentacion**. El participante debe irse con artefactos, no con apuntes.

### 5.2 Diseno pedagogico / consultivo
- **Proporcion objetivo:** 15% demo / 70% practica guiada / 15% verificacion. `[SUPUESTO: proporcion estimada | validar con medicion en proximas cohortes]`
- **Gestion de niveles:** plantillas copiables + paso a paso (basico); retos de adaptacion con restricciones y variantes avanzadas (avanzado).
- **Criterio de avance:** no se avanza al siguiente modulo sin verificar el entregable del anterior. `[DECISION: 2025-12, JM, alternativa descartada: avance libre sin gate -- generaba deuda de entregables al final y proyecto final incompleto]`
- **Gestion de asistentes (GPTs):** si la cohorte no puede usar GPTs/asistentes por restricciones del motor o TI, se entrega una **especificacion operable** (prompt maestro + estructura + checklist) que reproduce el comportamiento del asistente. `[DECISION: 2025-12, JM, descartada: omitir modulo -- perdia demasiado valor; la especificacion es transferible a cualquier motor futuro]`

### 5.3 Mapa de modulos

| # | Modulo | Tiempo | Objetivo operativo | Entregable verificable | Criterio de "listo" | Dependencias |
|---|--------|--------|-------------------|----------------------|--------------------|----|
| 0 | Contexto / nivelacion | 2h (120 min) | Lenguaje comun + setup minimo + alineacion de expectativas | Glosario compartido + entorno de trabajo listo + objetivo personal del bootcamp | Participante tiene motor IA funcional, entiende reglas de datos y puede articular su objetivo | Ninguna |
| 1 | Fundamentos de amplificacion | ~2h | De "usar IA" a "sistematizar": marco conceptual de trabajo amplificado | Mapa de casos de uso propios + criterios de exito para cada caso | Participante identifica >=3 casos de uso reales con criterio de exito asociado | Mod 0 |
| 2 | Prompting estructurado | ~2h | Controlar formato, calidad y consistencia de outputs | Biblioteca inicial de prompts propios (>=10 prompts estructurados) | Prompts probados con resultado verificable; formato consistente | Mod 1 |
| 3 | Meta-prompts y evaluacion | ~2h | Prompts testeables, comparables y mejorables sistematicamente | Rubrica de evaluacion + pruebas antes/despues documentadas | Participante puede evaluar y mejorar un prompt con criterios explicitos | Mod 2 |
| 4 | Plantillas y playbooks | ~2h | Reutilizacion por niveles: basico, intermedio, avanzado | Playbook personalizado por nivel (HTML) aplicado a caso propio | Playbook navegable con al menos 3 niveles de uso para un caso real | Mod 3 |
| 5 | Inteligencia agentiva | ~2h | Entender, disenar y especificar agentes de IA | Agente funcional (o blueprint/especificacion equivalente) de investigacion/tarea | Agente/spec ejecutado con resultado demostrable o walkthrough de la especificacion | Mod 4 |
| 6 | Automatizacion agentiva | ~2h | Orquestar flujos end-to-end con multiples pasos | Workflow funcional (o blueprint) con >=3 pasos conectados | Workflow ejecutado o blueprint con pasos, inputs, outputs y condiciones claros | Mod 5 |
| 7 | Prototipado y mini-apps | ~2h | Crear prototipos funcionales por lenguaje natural | Mini-app o prototipo funcional + demo | Prototipo accesible via enlace/captura; participante puede explicar y modificar | Mod 6 |
| 8 | Adopcion de IA | ~1h | Disenar cambio + estandarizacion personal/equipo | Plan de adopcion (personal/equipo) con rituales, metricas y compromisos | Plan con fechas, responsables y metricas especificas; no generico | Mod 7 |
| 9 | Proyecto final | ~3h | Integrar todo en un sistema real aplicado | Sistema de amplificacion completo + presentacion + evaluacion | Proyecto evaluado "apto" por rubrica (claridad, aplicabilidad, seguridad, reproducibilidad) | Mod 0-8 |
| **Total** | | **~20h** | | **10 entregables** (1 por modulo) | | |

**Nota sobre tiempos:** los tiempos son orientativos y se ajustan segun ritmo de la cohorte. La regla de prioridad temporal (recortar exposicion, nunca practica) aplica siempre. `[POR CONFIRMAR: JM, 2026-04-15 -- calibrar tiempos exactos con data de primeras 3 cohortes]`

**Nota sobre herramientas (referencia por modulo):**
- Mod 0-3: Motor IA elegido + Docs/Notas
- Mod 4: HTML/Notion/Docs
- Mod 5: GPTs / equivalente segun motor
- Mod 6: n8n / equivalente
- Mod 7: v0 / Replit / equivalentes
- Mod 8-9: Frameworks + todas las herramientas del bootcamp

### 5.4 Decisiones condicionales (protocolos en vivo)
| Condicion | Senal | Protocolo | Responsable |
|---|---|---|---|
| TI bloquea motor IA | Checklist 48h indica restriccion | Adaptar al motor permitido; "asistentes" -> especificacion equivalente | Embajador (pre) + Facilitador (vivo) |
| Grupo >20 sin cofacilitador | Mas de 20 confirmados sin arreglo previo | Rechazar ejecucion hasta resolver: cofacilitacion o dividir grupo | Embajador |
| Participante desde movil | Se conecta sin computador | Entra como observador; no se cuentan sus evidencias para DoD | Facilitador |
| Tiempo aprieta (modulo se extiende) | >10 min de retraso acumulado | Recortar demo del siguiente modulo, proteger practica y verificacion | Facilitador |
| Participante insiste con datos sensibles | Pega informacion real en IA | Pausa inmediata, anonimizar o sustituir por caso sintetico | Facilitador (escala a Embajador si resiste) |
| Nivel muy heterogeneo | Avanzados terminan rapido, basicos atascados | Retos extra para avanzados; plantillas paso-a-paso para basicos; peer mentoring | Facilitador |
| Proyecto final incompleto al cierre | Participante no entrega o entrega parcial | Ventana de entrega extendida (definida al inicio); sin entrega = solo certificado de asistencia | Facilitador + Embajador |
| Herramienta de prototipado no disponible | Motor/plataforma caida o bloqueada | Prototipo en papel/spec + plan de ejecucion posterior | Facilitador |

---

## 6) Resultados verificables (capacidades + DoD)

### 6.1 Capacidades instaladas
Al finalizar, el participante puede:
| # | Capacidad | Como se verifica en sesion | Como se verifica post-sesion (3 semanas) |
|---|---|---|---|
| 1 | Prompting avanzado "testeable" | Prompts optimizados + criterios de evaluacion documentados | >=5 prompts reutilizados/semana; biblioteca en uso activo |
| 2 | Construir activos reutilizables (playbooks + plantillas) | Playbook(s) aplicados a caso real, verificados por facilitador | Playbook consultado y actualizado >=1 vez/semana |
| 3 | Especificar/desplegar asistentes o equivalentes | Asistente funcional o especificacion equivalente demostrada | Asistente/spec usado en >=1 tarea real/semana |
| 4 | Disenar y ejecutar workflows/automatizaciones agentivas | Workflow demostrado o blueprint con pasos claros | >=1 workflow activo ejecutandose |
| 5 | Prototipar por lenguaje natural | Prototipo/mini-app funcional presentado | Prototipo iterado o nuevo prototipo creado |
| 6 | Disenar plan de adopcion sostenida | Plan con rituales, metricas y compromisos escritos | % cumplimiento de rituales >=60% a semana 3 |

### 6.2 Definition of Done (criterios de aceptacion)
El servicio se considera **completo y aceptado** si se cumplen **todos** los criterios:
| # | Criterio | Verificacion | Responsable de validar |
|---|---|---|---|
| 1 | Carga horaria: se ejecutaron las 20h acordadas (18h nucleo + 2h contexto) | Registro de sesiones | Embajador |
| 2 | Entregables por modulo: verificados segun rubrica (>=8 de 10 modulos con entregable aceptado) | Checklist del facilitador | Facilitador |
| 3 | Proyecto final: entregado y evaluado por rubrica | Rubrica completada | Facilitador |
| 4 | Materiales comprometidos: biblioteca, playbooks, plantillas, grabaciones entregados | Participante confirma acceso al repositorio | Embajador |
| 5 | Etica respetada: reglas de datos explicadas y cumplidas | Sin incidentes de datos sensibles registrados | Facilitador |
| 6 | Certificados: emitidos segun corresponda (asistencia y/o competencia) | Certificados enviados en plazo | Embajador |

### 6.3 Criterios de NO-aceptacion (cuando el servicio fallo)
- Menos de 80% de la carga horaria ejecutada por causa atribuible a MetodologIA (falla del facilitador, cancelaciones no comunicadas).
- Materiales comprometidos no entregados en 48h post-cierre (repositorio, biblioteca, playbooks).
- El facilitador no ejecuto el ciclo Demo->Practica->Verificacion (hizo solo demo/charla en la mayoria de modulos).
- Proyecto final no evaluado (facilitador no proporciono rubrica ni retroalimentacion).

> **Nota:** si los entregables no se produjeron por causa del participante (no asistio, no participo, no entrego proyecto), el Bootcamp se considera entregado. La garantia no aplica por inaccion del participante.

---

## 7) Entregables y accesos (lista cerrada)

### 7.1 Entregables core (incluidos en el precio)
| # | Entregable | Formato | Momento de entrega | Vigencia | Propiedad intelectual |
|---|---|---|---|---|---|
| 1 | Playbook interactivo HTML por nivel | HTML interactivo | Al cierre de Mod 4 + version final al cierre | Permanente (descargable) | Licencia MetodologIA; uso interno del cliente |
| 2 | Biblioteca de +100 prompts (incluye set base historico) | HTML (navegacion) + JSON (reutilizacion/integracion) | Al cierre | Permanente (descargable) | Licencia MetodologIA; uso interno del cliente |
| 3 | Plantillas por modulo (>=1 por entregable clave) | Docs editables | Progresivo (al cierre de cada modulo) | Permanente (descargable) | Licencia MetodologIA; uso interno del cliente |
| 4 | Memorias del proceso: artefactos generados + materiales de sesion | Docs/archivos en Drive | D+1 | 30 dias (descargar antes) | MetodologIA (licencia de uso) |
| 5 | Grabaciones + transcripciones (cuando aplique) | Video en Drive | D+1 | **30 dias** | MetodologIA; no redistribuible |
| 6 | Material generado por el participante en sesion | Propio del participante | En sesion | Permanente | Participante |
| 7 | Proyecto final aplicado + feedback estructurado del facilitador | Formato del participante + rubrica | Al cierre del Mod 9 | Permanente | Participante (proyecto); MetodologIA (rubrica) |
| 8 | Certificado de asistencia | PDF nominal | D+2 | Permanente | MetodologIA |
| 9 | Certificado de competencia (si aplica) | PDF nominal + validacion online | D+5 | Permanente | MetodologIA |
| 10 | Acceso a Campus | Plataforma online | Durante formacion + 1 mes | 1 mes post-cierre; continuidad COP 20.000/mes | MetodologIA |

### 7.2 Repositorio + vigencia + backup
- **Google Drive + Campus:** acceso por **30 dias** post-cierre.
- **Responsabilidad de backup:** el cliente/participante debe descargar antes de vencimiento. MetodologIA no garantiza recuperacion post-vencimiento.
- **Campus/LMS:** incluido durante formacion + 1 mes. Continuidad opcional: **COP 20.000/mes** (~USD 5.7/mes). `[DECISION: 2025-12, JM, descartada: campus gratuito ilimitado -- costo operativo no sostenible]`

### 7.3 Grabacion y consentimiento
- Grabacion oficial: Google Meet (o plataforma definida). Incluye video + transcripcion si esta habilitada.
- Expira a los **30 dias** post-cierre. No se extiende.
- Grabacion individual por participantes: solo con **autorizacion explicita de todos los asistentes**. Sin autorizacion = facilitador solicita detener.
- **Uso de la grabacion por MetodologIA:** no se usa para marketing ni se comparte con terceros sin consentimiento explicito por escrito.

### 7.4 Certificados
| Tipo | Condiciones | Formato | Emision |
|---|---|---|---|
| Asistencia | Asistir al Bootcamp + cumplimiento minimo de actividad | PDF nominal | D+2 |
| Competencia | Entrega del proyecto final + cumplimiento de evidencias minimas + evaluacion "apto" por rubrica (claridad, aplicabilidad, seguridad de datos, reproducibilidad) | PDF nominal + validacion online | D+5 |

### 7.5 Propiedad intelectual
| Elemento | Propiedad | Uso permitido |
|---|---|---|
| Materiales del servicio (playbook, prompts, plantillas, biblioteca) | MetodologIA (licencia de uso otorgada al cliente) | Uso interno; no revender, no publicar, no redistribuir sin autorizacion escrita |
| Artefactos producidos por el participante en sesion | Participante | Sin restriccion |
| Grabacion de las sesiones | MetodologIA | Acceso temporal al participante (30 dias); no redistribuible |
| Proyecto final y entregables construidos por el participante | Participante | Sin restriccion (construidos sobre templates de MetodologIA) |
| Especificaciones de asistentes/agentes construidas por el participante | Participante (estructura base: MetodologIA) | Uso libre del participante; estructura base bajo licencia MetodologIA |
| **Modificacion/redistribucion general:** | El cliente puede usar internamente todo lo entregado. No puede revender, publicar ni redistribuir materiales de MetodologIA sin autorizacion escrita. | |

---

## 8) Metodo de entrega (como se garantiza transferencia)

| # | Principio | Mecanismo concreto | Evidencia de cumplimiento |
|---|---|---|---|
| 1 | Instalacion, no teoria | Cada modulo produce un entregable verificable; la teoria se limita al minimo operativo | Checklist de cierre: >=8/10 entregables por modulo |
| 2 | Practica guiada dominante (~70%) | Herramienta en mano durante ~14 de 20 horas | Observacion del facilitador; grabaciones |
| 3 | Verificacion por evidencia (gate por modulo) | No se avanza sin verificar entregable del modulo anterior | Facilitador confirma antes de avanzar |
| 4 | Proyecto final integrador | Participante construye sistema de amplificacion completo usando todos los activos del bootcamp | Proyecto evaluado por rubrica; presentacion ante grupo |
| 5 | Transferencia sostenida | Plan de adopcion + rituales + metricas diseñados en Mod 8 | Participante tiene plan con fechas y compromisos |
| 6 | Contextualizacion | Ejemplos y casos adaptados al sector/nicho del participante | Brief de contextualizacion completado pre-sesion |
| 7 | Activos reutilizables | Biblioteca, playbooks, plantillas y specs entregados en formatos editables/integrables | Participante tiene acceso verificado a repositorio |

**Regla de calidad:** si el tiempo aprieta, se recorta exposicion, nunca practica ni documentacion.

**Regla de facilitacion:** el facilitador co-crea; no dicta. Si el participante no participa activamente, el facilitador pausa y reencuadra ("que necesitas para avanzar?") antes de continuar. No se fuerza participacion.

---

## 9) Prerrequisitos y verificacion 48h

### 9.1 Prerrequisitos tecnicos (minimos)
| Requisito | Especificacion minima | Alternativa si no cumple | Consecuencia si no se resuelve |
|---|---|---|---|
| Computador | Portatil/escritorio con navegador moderno | No hay alternativa funcional | No puede participar en practica (observador) |
| Internet | Estable, suficiente para video con camara | Solo audio + memorias post-sesion | Pierde ~30% de la experiencia interactiva |
| Camara/microfono | Funcionales | Solo audio | Menor interaccion pero viable |
| Motor IA | Cuenta activa verificada en motor definido para la cohorte | Motor alternativo permitido por TI | Sin motor: caso de ejemplo + guia para replicar |
| Herramientas complementarias (Mod 5-7) | Acceso a plataformas de agentes/workflow/prototipado segun modulo | Motor alternativo o blueprint/spec en papel | Entregable es especificacion en vez de implementacion funcional |
| Calendario/tareas | Acceso en sesion | Google Docs como alternativa minima | Modulo 8 (adopcion) pierde efectividad |

### 9.2 Prerrequisitos de habilidad (minimos)
- Copiar/pegar, abrir pestanas, compartir pantalla, manejar archivos basicos.
- Formular preguntas simples y ejecutar instrucciones paso a paso en un motor IA.
- **Prueba de verificacion (48h antes):** ejecutar prompt simple (Anexo A, seccion A8).
- **Si no pasa la prueba:** embajador ofrece sesion de nivelacion de 30-60 min (sin costo) o recomendacion de reprogramar a una cohorte posterior.

### 9.3 Protocolos de contingencia
| Situacion | Accion inmediata | Prevencion |
|---|---|---|
| Sin acceso a IA | Practica con caso de ejemplo + guia post-sesion para replicar | Checklist 48h con verificacion de login |
| Brecha de habilidad severa | Observador activo con tarea de documentacion; o reprogramacion + nivelacion previa | Pre-screening en brief |
| Conexion inestable | Priorizar audio + entregar memorias + marcar tareas para replicar | Recomendacion de red estable en checklist |
| Movil en vez de computador | No puede hacer practica; entra como observador o reprograma | Convocatoria exige computador |
| Motor alternativo limitado (sin agentes, sin workflows) | Adaptar modulos afectados: entregar especificacion operable en vez de implementacion | Validar capacidades del motor en brief |
| Participante ausente (sesion individual) | Acceso a memorias + ruta de recuperacion con materiales | Asistencia recomendada; plan de catch-up pre-definido |

---

## 10) Contextualizacion y brief estandar

### 10.1 Regla
La contextualizacion esta **incluida sin recargo** y es altamente recomendada. Ajusta ejemplos, casos, ejercicios y artefactos al sector/nicho/entorno del cliente.

**Trade-off:** la contextualizacion consume 4-8h de preparacion del facilitador (proporcional a la duracion del bootcamp). Se incluye sin recargo porque mejora satisfaccion, calidad de entregables y conversion a servicios posteriores. `[SUPUESTO: mejora conversion a EstrategIA en ~15% | validar con data 2026]`

### 10.2 Lead time
| Tipo | Lead time minimo | Consecuencia de no cumplir |
|---|---|---|
| Sin contextualizacion | 3 dias habiles desde confirmacion de pago | Se ejecuta con casos genericos (tech/productividad) |
| Con contextualizacion | >=3 dias habiles entre brief completo y primera sesion | Brief tarde = primera(s) sesion(es) generica(s) + ajustes progresivos |

### 10.3 Brief estandar (Anexo B)
El brief se levanta en la primera conversacion y se confirma por escrito. Un brief incompleto no bloquea la ejecucion pero degrada la calidad de contextualizacion. Campos criticos: motor IA permitido, restricciones TI/datos, entregables a amplificar, reto(s) del participante.

---

## 11) Operacion: logistica, soporte y repositorios

### 11.1 Roles y responsabilidades (RACI)
| Actividad | Embajador | Facilitador | Cliente | Participante |
|---|---|---|---|---|
| Agenda, logistica, confirmaciones | **R/A** | C | I | I |
| Brief de contextualizacion | **R** | C | **A** (provee info) | -- |
| Entrega de contenido en sesion | I | **R/A** | -- | C |
| Verificacion de evidencias por modulo | -- | **R** | -- | **A** |
| Evaluacion de proyecto final | -- | **R/A** | -- | C |
| Entrega de repositorio/materiales | **R/A** | C | -- | I |
| Soporte post-sesion | **R/A** | C | -- | I |
| Permisos TI / motor IA | I | I | **R/A** | I |
| Gestion de Campus (accesos, continuidad) | **R/A** | -- | -- | I |
| Credito educativo (activacion) | **R/A** | -- | -- | I |

### 11.2 Tamano maximo + escalamiento
| Escenario | Participantes | Facilitadores | Costo | Efectividad |
|---|---|---|---|---|
| Recomendado (practica alta) | 10-20 | 1 | Precio base | Maxima |
| Cofacilitacion | 21-40 | 2 | +50% sobre precio base | Alta (requiere coordinacion entre facilitadores) |
| 2 ejecuciones | 21+ (dividido) | 1 por ejecucion | -20% en segunda ejecucion | Alta (grupos mas pequenos) |
| Intimo (recomendado) | 3-10 | 1 | Precio base | Maxima (atencion individual) |

### 11.3 SLA de soporte
| Canal | Tiempo de respuesta | Horario | Alcance |
|---|---|---|---|
| Email | **D+1 habil** | Dias habiles | Accesos, material, guia de aplicacion, dudas de entregables |
| WhatsApp | **<=2h habiles** | L-V 9:00-16:00 COT | Dudas urgentes, coordinacion, bloqueos tecnicos basicos |
| Embajador | Canal dedicado | Segun disponibilidad | Coordinacion integral, creditos, escalamientos |

### 11.4 Fuera de alcance del soporte
Consultoria personalizada, ejecucion de tareas del cliente, soporte tecnico de herramientas de terceros (motor IA, calendario, gestor de tareas del cliente), debugging de integraciones/APIs.

---

## 12) Politicas comerciales

### 12.1 Precios (canonicos)
| Segmento | Precio | Condicion | Costo por participante efectivo |
|---|---|---|---|
| **B2C** | **COP 800.000** | Por persona | COP 800.000 |
| **B2B** | **COP 12.000.000 + IVA** | Por ciclo (hasta 20 pax) | COP 600.000 |
| **B2B cofacilitacion** | **COP 18.000.000 + IVA** | Hasta 40 pax | COP 450.000 |
| **B2B 2 ejecuciones** | **COP 21.600.000 + IVA** | 2 ciclos de hasta 20 (-20% en segunda) | COP 540.000 |
| **B2B2B** | Negociado | Contrato marco | Segun volumen |
| **USD referencial** | COP 3.500 = USD 1 | Politica comercial, no tasa de mercado | -- |

**Vigencia:** hasta nueva version del canonico.

**Justificacion del diferencial B2B/B2C:** el precio B2B incluye contextualizacion (4-8h prep), gestion de grupo (logistica, confirmaciones, follow-up de 20h), soporte de embajador dedicado, Campus y evaluacion de proyecto final individual. El B2C en cohorte abierta tiene contextualizacion generica y soporte estandar. `[DECISION: 2025-11, JM, descartada: precio unico per-capita -- no cubria costos de gestion corporativa ni contextualizacion]`

### 12.2 Pago en 3 cuotas (regla completa)
| Cuota | % del total | Vencimiento | Consecuencia de no pagar |
|---|---|---|---|
| Cuota 1 (mobilization fee) | 33.3% | Antes del inicio | No se bloquea agenda ni se preparan materiales |
| Cuota 2 | 33.3% | Ultimo dia del mes siguiente al inicio | Notificacion + ventana 5 dias habiles |
| Cuota 3 | 33.4% | Ultimo dia del segundo mes siguiente | Notificacion + suspension de accesos si persiste |

**Mora:** notificacion formal -> ventana de regularizacion (5 dias habiles) -> suspension de accesos (repositorio, grabaciones, Campus, soporte, creditos). Recargos conforme a legislacion vigente y facturacion.

**Acuerdos a medida:** posibles por escrito (SOW via embajador) antes del inicio. No se aceptan acuerdos verbales.

### 12.3 Impuestos
| Tipo de compra | Tratamiento |
|---|---|
| Persona natural / pasarela en linea | Incluidos |
| Facturacion corporativa | Discriminados segun normativa vigente |

El precio canonico se entiende **antes de impuestos** para empresas.

### 12.4 Reprogramacion / cancelacion / no-show / fuerza mayor

**Cohortes abiertas (personas):**

| Situacion | Costo | Condicion |
|---|---|---|
| 1a reprogramacion con justa causa | Sin costo | Aviso >=72h habiles antes |
| 2a reprogramacion en adelante o no-show | **COP 200.000** (fee de retoma) | Cualquier causa |
| Cancelacion antes de iniciar | Devolucion menos Cuota 1 (mobilization fee) | -- |
| Cancelacion post-inicio | No aplica devolucion standard (ver garantia) | -- |

**Empresas (ciclos privados):**

| Situacion | Costo | Condicion |
|---|---|---|
| Reprogramacion con >=10 dias habiles | Sin costo | -- |
| Reprogramacion <10 dias habiles o cancelacion tardia | 100% del ciclo (fee de agenda/preparacion) | -- |
| Quorum empresarial >=2 asistentes activos | Se ejecuta normalmente | -- |
| Sin quorum por causa del cliente | Fee de no-show | -- |
| Fuerza mayor (cualquier parte) | Sin costo; nueva fecha en 3 dias habiles | Evento irresistible e imprevisible |

### 12.5 Garantia (Try & Align)
- **Ventana:** hasta completar el **primer bloque de 4 horas** del Bootcamp.
- **Condicion:** solicitud explicita de no continuar + **1 hora de retroalimentacion estructurada**.
- **Devolucion:** 100% de lo efectivamente pagado.
- **Proceso:** solicitud al embajador -> sesion de retroalimentacion (1h) -> devolucion en **10 dias habiles**.
- **Exclusion:** no aplica si la insatisfaccion es por causa del participante (no asistio, no participo). Se aplica si MetodologIA no cumplio el DoD (ver Sec 6.3).
- **Limite etico:** no se garantizan resultados financieros, de productividad automatica ni de carrera.

### 12.6 Credito educativo (puente a siguiente servicio)
| Campo | Especificacion |
|---|---|
| Origen | Workshop "De Ocupado a Productivo" |
| Destino | Este Bootcamp (Bootcamp Trabajar Amplificado) |
| Ventana | **6 meses** desde la compra del Workshop |
| Monto | **100%** de lo efectivamente pagado por el Workshop |
| Acumulable | Si, con promociones y otros creditos |
| Descuento maximo | = gratis (no hay saldos negativos ni devolucion de diferencia) |
| Aplicacion | Se descuenta de la primera cuota (mobilization fee) del Bootcamp |
| Activacion | Contactar canales oficiales + solicitar cotizacion con referencia del Workshop |
| Transferibilidad | Intransferible (solo aplica para quien pago el Workshop) |

**Credito desde este Bootcamp hacia servicios posteriores:** `[POR CONFIRMAR: JM, 2026-04-15 -- definir % de credito, ventana y servicios destino para EstrategIA y Programas]`

---

## 13) Metricas de exito

### 13.1 North Star (metrica unica de impacto)
- **Metrica:** calidad y consistencia de entregables amplificados (menos retrabajo, mas reutilizacion de activos, velocidad de produccion).
- **Horizonte de medicion:** semana 3-4 post-cierre del Bootcamp.
- **Nota etica:** es meta de adopcion; logro depende del contexto, consistencia y aplicacion del participante. MetodologIA no se compromete a valores especificos.

### 13.2 Leading indicators (comportamiento -- medibles en semanas 1-3)
| Indicador | Unidad | Frecuencia de medicion | Fuente | Meta orientativa |
|---|---|---|---|---|
| Prompts reutilizados de la biblioteca | #/semana | Semanal | Auto-reporte | >=5 |
| Activos nuevos creados (plantillas, playbooks, specs) | #/semana | Semanal | Auto-reporte | >=1 |
| Cumplimiento del plan de adopcion (rituales) | % | Semanal | Auto-reporte/calendario | >=60% |
| Uso de asistente/workflow creado en bootcamp | #/semana | Semanal | Auto-reporte | >=2 |

### 13.3 Lagging indicators (resultado -- medibles en semanas 3-12)
| Indicador | Unidad | Frecuencia | Fuente | Meta orientativa |
|---|---|---|---|---|
| Reduccion de retrabajo en entregables clave | % reduccion | Mensual | Auto-reporte | >=30% `[SUPUESTO: basado en experiencia piloto | validar con encuesta sistematica]` |
| Mejora de tiempos de borrador (primer draft) | % reduccion | Mensual | Auto-reporte/medicion | >=25% |
| Satisfaccion del equipo/usuario interno con entregables | Escala 1-5 | Mensual | Encuesta | >=4 |
| Activos en la biblioteca activamente usados | # | Mensual | Revision de biblioteca | >=20 |

### 13.4 Responsabilidad de medicion
Los indicadores son orientativos. La medicion corresponde al participante o al area contratante. MetodologIA entrega plantillas de seguimiento dentro de los materiales del Bootcamp. MetodologIA no mide ni reporta indicadores salvo acuerdo especifico en contrato.

---

## 14) Casos borde (adversarial -- decisiones sin improvisacion)

| # | Caso borde | Senal temprana | Decision en vivo | Mitigacion previa | Trade-off aceptado |
|---|---|---|---|---|---|
| 1 | Restricciones TI bloquean motor | Checklist 48h indica bloqueo | Adaptar al motor permitido; "asistentes" -> especificacion equivalente | Validar politicas TI en brief (Anexo B) | Fluidez menor si motor es limitado |
| 2 | Datos sensibles | Participante pega info real en IA | Pausa inmediata -> anonimizar o caso sintetico | Reglas de datos en checklist + advertencia al inicio de cada sesion | Pierde realismo del ejercicio |
| 3 | Sin cuenta IA | No puede iniciar sesion | Caso de ejemplo sin IA + guia para replicar post-sesion | Checklist 48h con prueba funcional | Pierde practica en vivo |
| 4 | Desde movil | Se conecta sin computador | Observador; sugerir reprogramacion | Convocatoria exige computador | Pierde practica |
| 5 | Conexion inestable | Caidas frecuentes | Audio + memorias + tareas para replicar | Recomendacion red estable en checklist | Pierde interaccion visual y grupal |
| 6 | Grupo heterogeneo | Avanzados terminan, basicos atascados | Plantillas copiables + retos extra + peer mentoring | Pre-screening en brief; modulo 0 de nivelacion | Avanzados pueden esperar brevemente |
| 7 | >20 sin cofacilitador | Mas de 20 confirmados sin arreglo | Rechazar ejecucion hasta resolver | Definir tamano antes de cotizar | Retrasa ejecucion |
| 8 | Proyecto final incompleto | Participante no entrega al cierre | Ventana de entrega extendida (definida al inicio); sin entrega = solo certificado asistencia | Criterios claros desde Mod 0; recordatorios en Mod 7-8 | Participante no obtiene certificado de competencia |
| 9 | Participante ausente (varias sesiones) | Falta a >=2 sesiones consecutivas | Acceso a memorias + ruta de recuperacion; si ausencia >40% = solo asistencia parcial | Confirmacion de disponibilidad en brief + recordatorios | Pierde continuidad y proyecto puede quedar incompleto |
| 10 | Mora de cuotas | Pago vencido sin regularizar | Suspender accesos (repositorio, Campus, soporte) hasta regularizacion | Confirmar plan de pagos por escrito antes de iniciar | Friccion con cliente |
| 11 | Grabacion no consentida | Participante graba sin permiso | Detener grabacion no autorizada; recordar reglas; referir a memorias oficiales | Consentimiento explicito + recomendacion de memorias al inicio | Puede molestar al participante |
| 12 | Cohorte pide extension de Campus sin pago | Solicitan acceso gratuito extendido | Plazo es firme: 1 mes post-cierre. Continuidad: COP 20.000/mes | Politica explicita desde Sec 0 y 7 | Puede generar friccion |
| 13 | Herramienta de prototipado/workflow caida | Plataforma no disponible en sesion | Prototipo en spec/papel + plan de ejecucion posterior con materiales de apoyo | Tener alternativa identificada pre-sesion | Entregable es especificacion, no implementacion funcional |

---

## 15) Continuidad en la ruta (que sigue)

| Si necesita... | Siguiente servicio | Tipo | Duracion | Credito aplicable | Conexion tematica |
|---|---|---|---|---|---|
| Estrategia ejecutable para negocio/equipo | **EstrategIA Empresarial** | Consultive Workshop | 18h (9 sesiones) | `[POR CONFIRMAR: JM, 2026-04-15]` | De sistematizacion individual a estrategia organizacional con IA |
| Estrategia personal y de carrera | **EstrategIA Personal** | Consultive Workshop | 18h (9 sesiones) | `[POR CONFIRMAR: JM, 2026-04-15]` | De productividad amplificada a proposito, marca personal y carrera |
| Transformacion organizacional profunda | **Programa Digital Champions** | Programa | 16 sem / 48h | No aplica | De adopcion individual a transformacion cultural a escala |
| Empoderamiento personal integral | **Programa Empoderamiento** | Programa | 16 sem / 48h | No aplica | De productividad a soberania digital y liderazgo personal |
| Repetir con otro grupo de la empresa | **Segundo ciclo Bootcamp** | Bootcamp | 20h | -20% si se contrata simultaneamente | Mismo contenido, otro grupo |

---

## Anexo A -- Checklist 48h (por participante)

> **Objetivo:** cero friccion tecnica, insumos minimos listos, expectativas alineadas.
> **Envio:** embajador envia 48h antes de la primera sesion. Confirmacion requerida por cada participante.
> **Consecuencia de no completar:** ver protocolos de contingencia (Sec 9.3).

### A1. Confirmacion de modalidad
- [ ] Confirmo fecha/hora y disponibilidad completa para las sesiones del Bootcamp (20h distribuidas).
- [ ] Confirmo participacion desde **computador** (no movil ni tablet).
- [ ] Confirmo zona horaria (si aplica).

### A2. Motor de IA
- [ ] Motor elegido: ( ) ChatGPT  ( ) Gemini  ( ) Copilot  ( ) Otro: __________
- [ ] Tengo cuenta activa y **puedo iniciar sesion ahora**.
- [ ] Puedo crear conversacion nueva y escribir instruccion simple.
- [ ] Puedo copiar/pegar texto y subir/descargar archivos si se requiere.
- [ ] Mi empresa/TI **no bloquea** este motor. Si lo bloquea, avisar al embajador para alternativa.

### A3. Conectividad y hardware
- [ ] Internet estable (prueba: videollamada de 5 min sin cortes).
- [ ] Camara y microfono funcionales.
- [ ] Navegador actualizado (Chrome, Edge, Firefox o Safari version vigente).
- [ ] Audifonos recomendados.

### A4. Herramientas de trabajo
- [ ] Acceso a mi calendario digital (Google Calendar / Outlook / otro).
- [ ] Acceso a mi sistema de tareas/notas (Notion / Todoist / Google Docs / otro).

### A5. Habilidad minima (auto-verificacion)
- [ ] Se copiar/pegar texto.
- [ ] Se abrir varias pestanas del navegador.
- [ ] Se compartir pantalla si me lo piden.
- [ ] Se nombrar y guardar conversaciones en mi motor de IA.
- [ ] Se manejar archivos basicos (subir, descargar, renombrar).

### A6. Insumos preparados (sin datos sensibles)
- [ ] Traigo un caso/entregable real de mi trabajo para usar como base durante el Bootcamp (anonimizado si contiene datos reales).
- [ ] Identifico al menos 3 entregables que quiero "amplificar" (docs, analisis, presentaciones, reportes, etc.).
- [ ] Si no tengo insumo propio, usare el caso de ejemplo que provee el facilitador.

### A7. Reglas de datos (leido y aceptado)
- [ ] Entiendo que **no debo** ingresar datos personales sensibles, secretos industriales ni credenciales.
- [ ] Si necesito trabajar un caso real, lo traere **anonimizado** o usare caso sintetico.

### A8. Mini-prueba (verificacion funcional)
- [ ] Abri mi motor de IA.
- [ ] Escribi: *"Inicia una conversacion llamada 'Practica MetodologIA' y dime 3 usos seguros de IA para productividad."*
- [ ] Obtuve respuesta funcional.

### A9. Si algo falla
- Si no tengo cuenta o permisos: aviso al embajador **antes** de la primera sesion.
- Si me conectare desde movil: solicito reprogramacion.
- Si mi internet es inestable: preparo alternativa de audio + solicito memorias.
- Si mi nivel es muy basico: acepto nivelacion y uso de plantillas copiables.

---

## Anexo B -- Brief estandar (contextualizacion)

> Se levanta en primera conversacion (o formulario) y se confirma por escrito. Brief incompleto no bloquea ejecucion; degrada contextualizacion.

### B1. Identidad del cliente
- Organizacion / iniciativa:
- Segmento: ( ) Personas/small business  ( ) Empresa  ( ) Partner/B2B2B
- Industria/nicho/entorno:
- Objetivo del Bootcamp (1 frase):

### B2. Participantes
- # participantes estimado:
- Roles (lista):
- Nivel de madurez IA (auto-estimado): ( ) Basico  ( ) Intermedio  ( ) Avanzado
- Zonas horarias (si aplica):
- Idioma preferido (si no es espanol):

### B3. Restricciones y politicas
- Motores IA permitidos por TI:
- Herramientas bloqueadas (detalle):
- Plataformas de agentes/workflow permitidas (GPTs, n8n, Make, etc.):
- Reglas de datos/confidencialidad del cliente:
- Restricciones de grabacion:

### B4. Entregables a amplificar (prioridad 1-3)
- Entregable #1 (tipo, audiencia, frecuencia, dolores de calidad):
- Entregable #2:
- Entregable #3:

### B5. Herramientas actuales del participante
- Calendario:
- Tareas/proyectos:
- Notas/Docs:
- Comunicacion (Slack/Teams/otro):
- Herramientas de IA actuales (si las hay):

### B6. Criterios de exito (medibles)
- Que tiene que pasar en 4 semanas para decir "valio la pena":
- Senal de adopcion minima (1 habito verificable):
- Entregable clave que quieren "amplificar" como caso de exito:

### B7. Logistica
- Modalidad: ( ) Virtual  ( ) Presencial (requiere cotizacion de logistica separada)
- Ventana de fechas preferidas:
- Distribucion de sesiones preferida (ej: 2h/dia x 10 dias, 4h x 5 dias, etc.):
- Plataforma de videoconferencia preferida:
- Contacto embajador (nombre/WhatsApp/email):
- Contacto TI (si aplica, para validar motores y plataformas):

---

## Anexo C -- Registro de versiones

| Version | Fecha | Autor | Cambios clave | Aprobado por |
|---------|-------|-------|---------------|-------------|
| v2.0 | 2026-03-29 | JM (asistido por Claude) | Normalizacion completa a Template Canonico V2 (15 secciones + 3 anexos). Desde v1.4: se agregan secciones 3.3 (consecuencias 2do orden), 4.3 (zona gris), 6.3 (criterios de NO-aceptacion), 7.5 (PI detallada), tabla de modulos con columnas "criterio de listo" y "dependencias", trade-offs justificados con [DECISION], protocolos condicionales expandidos, precios con cofacilitacion y doble ejecucion, RACI enriquecido, brief adaptado a Bootcamp, metricas con metas orientativas. | JM |
| v1.4 | 2026-01-23 | JM | Conformidad Template V2 + cierre de huecos: precio vigente, campus, cuotas, anti-fit, casos borde, checklist 48h. | JM |
| v1.3 | -- | JM | Base historica consolidada desde HTML + anexos. Reemplazada por v1.4. | JM |
