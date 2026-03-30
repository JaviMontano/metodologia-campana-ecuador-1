# Definition of Done Maestro — Catalogo de Servicios

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Propietario:** Javier Montano
**Proposito:** unificar los criterios de aceptacion dispersos en canonicos (Sec 6.2), Anexo E, Anexo G y Anexo H en un solo flujo verificable. Este documento es la referencia final para determinar si un servicio, un documento o una fase operativa esta "completo y aceptado".

---

## 1) DoD por tipo de servicio

Cada tipo de servicio tiene umbrales distintos porque la complejidad, duracion y naturaleza de la transformacion son diferentes.

### Workshop (3h)
El Workshop se considera **completo y aceptado** cuando:

| # | Criterio | Como se verifica | Responsable | Umbral |
|---|----------|-----------------|-------------|--------|
| 1 | Participante puede explicar el metodo en menos de 2 minutos | Pregunta de cierre del facilitador | Facilitador | 100% de participantes activos |
| 2 | Evidencias minimas producidas (5 artefactos: agenda etiquetada, fuga critica, bloques de foco, meta-prompt, rutina minima) | Checklist de evidencias por participante | Facilitador | >=80% de participantes con >=4 de 5 artefactos |
| 3 | Ciclo pedagogico completo (demo → practica → verificacion) ejecutado en todos los modulos | Observacion del facilitador; confirmable via grabacion | Facilitador | 100% de modulos |
| 4 | Reglas de datos explicadas y respetadas (sin incidentes de datos sensibles) | Registro de incidentes (0 = OK) | Facilitador | 0 incidentes |
| 5 | Repositorio entregado y acceso confirmado por participante | Confirmacion escrita (email/WhatsApp) | Embajador | 100% de participantes con acceso |
| 6 | Certificado de asistencia emitido | Registro de emision | Embajador | D+2 habiles |

**Criterio de NO-aceptacion (activa garantia):**
- Menos de 3 artefactos producidos por causa atribuible a MetodologIA (falla del facilitador, materiales no disponibles, plataforma caida).
- Facilitador no ejecuto ciclo pedagogico (solo hizo demo/charla sin practica).
- Repositorio no entregado en D+2.

### Bootcamp (18-20h)
| # | Criterio | Verificacion | Responsable | Umbral |
|---|----------|-------------|-------------|--------|
| 1 | Entregables por modulo verificados segun rubrica | Checklist por modulo firmado por facilitador | Facilitador | >=80% de modulos core (excluyendo Mod 0 opcional) con entregable aprobado |
| 2 | Proyecto final presentado y evaluado | Rubrica de proyecto final aplicada | Facilitador | >=70% de participantes con proyecto aprobado (para certificado de competencia) |
| 3 | Ciclo pedagogico completo en todos los modulos | Observacion + grabacion | Facilitador | 100% |
| 4 | Biblioteca de prompts + playbooks entregados | Verificacion de repositorio | Embajador | 100% de materiales listados en Sec 7 |
| 5 | Campus/LMS accesible | Confirmacion de login por participante | Embajador | 100% de participantes |
| 6 | Certificados emitidos (asistencia D+2, competencia D+5) | Registro de emision | Embajador | Segun rubrica |
| 7 | Reglas de datos respetadas | Registro de incidentes | Facilitador | 0 incidentes |

**Criterio de NO-aceptacion:**
- Menos del 60% de modulos core con entregable aprobado, por causa atribuible a MetodologIA.
- Proyecto final no fue posible por falta de tiempo asignado por el facilitador.
- Campus inaccesible por mas de 48h durante la formacion.

### Consultive Workshop (9 sesiones / 18h)
| # | Criterio | Verificacion | Responsable | Umbral |
|---|----------|-------------|-------------|--------|
| 1 | Pack de artefactos estrategicos entregado (segun variante Empresarial/Personal) | Checklist de pack | Facilitador | 100% de artefactos del pack minimo |
| 2 | Decisiones explicitas registradas: prioridades, trade-offs, supuestos, "no haremos" | Revisable en memorias | Facilitador | Todas las sesiones con registro |
| 3 | Cadencia definida: owners, metricas, fechas de revision | Documento de cadencia entregado | Facilitador | 1 documento verificable |
| 4 | Transferencia de metodo: cliente puede replicar 1 modulo usando playbook + prompts | Validacion en sesion 9 | Facilitador | Demostrado en vivo o confirmado |

**Criterio de NO-aceptacion:**
- Pack incompleto (falta >=2 artefactos del minimo) por causa de MetodologIA.
- No hay registro de decisiones en las memorias.

### Programa (16 semanas / 48h)
| # | Criterio | Verificacion | Responsable | Umbral |
|---|----------|-------------|-------------|--------|
| 1 | 4 fases ejecutadas segun plan | Registro de sesiones | Embajador | 100% de fases |
| 2 | Mentoria 1:1 completada (>=80% de sesiones programadas) | Log de sesiones | Mentor | >=80% |
| 3 | Talleres tematicos completados | Registro de asistencia | Facilitador | >=80% de talleres |
| 4 | Capstone presentado y evaluado (Rubrica Anexo C del canonico) | Rubrica aplicada | Facilitador + Mentor | Capstone aprobado segun rubrica |
| 5 | Portafolio de evidencias completo | Verificacion contra lista de entregables por fase | Embajador | >=80% de evidencias |
| 6 | Certificado de competencia emitido (si aplica) | Registro | Embajador | D+5 post-capstone |

**Criterio de NO-aceptacion:**
- Capstone no fue posible por falta de acompanamiento de MetodologIA.
- Menos del 60% de talleres ejecutados por cancelaciones de MetodologIA.

---

## 2) DoD por fase operativa

Cada fase del ciclo operativo (Anexos D-J) tiene su propio criterio de completitud.

| Fase | Anexo | Criterio de "fase completa" | Responsable |
|------|-------|---------------------------|-------------|
| **Op-1: Orden de servicio** | D | Todos los campos obligatorios completados + estado = EN PREPARACION | Embajador |
| **Op-2: Planificacion** | E | Brief completado + intelligence brief entregado al facilitador + timeline confirmado | Embajador |
| **Op-3: Preparacion** | F | Checklist de preparacion 100% completo + validacion cruzada D-1 = OK | Facilitador + Embajador |
| **Op-4: Ejecucion + Memorias** | G | Todas las sesiones ejecutadas + memorias entregadas con confirmacion del cliente | Facilitador + Embajador |
| **Op-5: Cierre** | H | Checklist de cierre 100% + CRM actualizado + estado = CERRADO | Embajador |
| **Op-6: Post-venta** | I | 7 touchpoints ejecutados segun cadencia + encuesta NPS recibida | Embajador |
| **Op-7: Recompra** | J | Evaluacion a 180 dias completada + campo recompra_180d registrado en CRM | Embajador |

---

## 3) DoD por tipo de documento del catalogo

### Canonico
Un canonico esta "listo para publicar" cuando:
- [ ] Todas las secciones requeridas presentes (0, 1, 2, 4, 5, 6, 7, 12, 14)
- [ ] Secciones contractuales completas (3, 8, 9, 11) si el documento se usara en SOW
- [ ] Precios en Sec 0 y Sec 12 coinciden exactamente
- [ ] Todos los [POR CONFIRMAR] tienen responsable y fecha limite
- [ ] Rubrica de excelencia: >=8/10 en todos los 10 criterios (para v1: 10/10)
- [ ] Primera mencion de cada termino del glosario contextualizada
- [ ] Trazabilidad: >=15 etiquetas ([EVIDENCIA], [SUPUESTO], [DECISION]) en claims criticos
- [ ] Revisado contra guia editorial (tono, longitud de oraciones, formato)

### Derivada
Una derivada esta "lista" cuando:
- [ ] Producida desde el canonico vigente (referencia de version en footer)
- [ ] Secciones incluidas/excluidas segun guia de derivacion
- [ ] Precios coinciden con canonico
- [ ] Tono consistente con la audiencia (verificar contra guia editorial)
- [ ] Sin informacion que contradiga el canonico
- [ ] Primera mencion de conceptos contextualizada segun audiencia
- [ ] CTA o siguiente paso claro (excepto compras)

### Anexo operativo
Un anexo esta "listo" cuando:
- [ ] Trigger definido (que lo activa)
- [ ] Responsable asignado
- [ ] Checklist o template presente y utilizable (copiar-pegar)
- [ ] SLA definidos donde aplique
- [ ] Referencias cruzadas a otros anexos verificadas (no rotas)
- [ ] Casos borde cubiertos

### Guia transversal
Una guia esta "lista" cuando:
- [ ] Aplica a todos los servicios sin excepcion o tiene excepciones documentadas
- [ ] No duplica contenido de otro documento (referencia en su lugar)
- [ ] Instrucciones suficientes para que alguien nuevo la aplique sin preguntar
- [ ] Ejemplos incluidos para reglas ambiguas

---

## 4) DoD del catalogo v1 (criterio de release para socios)

El catalogo v1 esta **listo para presentar a socios** cuando:

| # | Criterio | Verificacion | Estado |
|---|----------|-------------|--------|
| 1 | 17 canonicos presentes, completos y con rubrica >=10/10 | Reporte de calidad por canonico | Pendiente |
| 2 | Derivadas producidas para todos los servicios aplicables | Inventario maestro actualizado | Pendiente |
| 3 | 7 anexos operativos presentes y verificados | Checklist de completitud | Pendiente |
| 4 | 5 documentos transversales presentes (glosario, editorial, DoD, mapa, POR CONFIRMAR) | Verificacion de existencia | En progreso |
| 5 | 0 discrepancias de precios entre canonico y derivadas | Cross-check automatizado | Pendiente |
| 6 | 0 conceptos sin definir (verificado contra glosario) | Busqueda de terminos en todos los archivos | Pendiente |
| 7 | 0 [POR CONFIRMAR] sin responsable ni fecha | Scan de todos los archivos | Pendiente |
| 8 | Mapa de interdependencias completo, sin referencias rotas | Verificacion manual | Pendiente |
| 9 | Indice navegable del catalogo presente | Existencia del archivo indice | Pendiente |
| 10 | Snapshot congelado en directorio de release | Copia verificada | Pendiente |

---

## 5) Proceso de verificacion (como aplicar este DoD)

### Para un canonico individual
1. Leer el canonico completo.
2. Verificar contra la rubrica de 10 criterios (puntuar cada uno).
3. Identificar gaps y corregir.
4. Re-puntuar hasta alcanzar 10/10.
5. Verificar coherencia con derivadas existentes.
6. Marcar como "listo" en inventario maestro.

### Para el catalogo completo (release v1)
1. Completar Ola 1 (documentos transversales).
2. Aplicar rubrica a cada canonico (Ola 2).
3. Cascadear correcciones a derivadas (Ola 3).
4. Verificar anexos operativos (Ola 4).
5. Cross-check inter-documental (Ola 5).
6. Generar reporte de calidad.
7. Crear snapshot congelado.
8. Verificar los 10 criterios de release (tabla anterior).
9. Solo si 10/10: declarar v1 lista.
