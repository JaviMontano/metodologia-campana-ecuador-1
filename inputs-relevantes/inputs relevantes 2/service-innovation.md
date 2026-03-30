# Marco de Innovación de Servicios
# Referencia para MODO INNOVACIÓN del Proposal Engine

## Cuándo usar este archivo
Leer cuando el cliente pide algo que no existe exactamente en el catálogo
y el agente entra en MODO INNOVACIÓN.

---

## 1) Tipos de innovación permitidos

### Tipo A — Contextualización alta (más común)
El servicio existe. Solo cambia el enfoque, los casos de uso o el sector.
- Ejemplo: "Bootcamp Trabajar Amplificado para equipo de ventas de una aseguradora"
- Acción: usar canónico estándar + brief de contextualización profundo
- Nivel de riesgo: BAJO — todo está en el canónico

### Tipo B — Variante de servicio
Mismo tipo (Workshop/Bootcamp/etc.) pero con módulos ajustados, duración diferente
o combinación de servicios existentes.
- Ejemplo: "Workshop de 2h solo para prompting + sesión de seguimiento 2 semanas después"
- Acción: derivar desde el canónico + marcar desviaciones explícitamente
- Nivel de riesgo: MEDIO — algunos elementos fuera del canónico

### Tipo C — Servicio nuevo
Problema sin precedente en el catálogo. Requiere diseñar desde los principios.
- Ejemplo: "Programa de alfabetización IA para docentes de colegio público, 8 semanas"
- Acción: usar framework de diseño completo + [POR CONFIRMAR] en todo precio/alcance
- Nivel de riesgo: ALTO — requiere confirmación antes de SOW

---

## 2) Framework de diseño de servicio nuevo (Tipo C)

### Paso 1: Anclar en un tipo canónico

Elegir el tipo base más cercano al requerimiento:

| Tipo | Duración | Cuándo usarlo |
|------|----------|---------------|
| Workshop | 2–4h | Instalación de capacidad básica; evento único |
| Bootcamp | 12–24h distribuidas | Sistema completo; requiere práctica guiada + proyecto |
| Consultive Workshop | 6–12 sesiones × 2h | Co-diseño de estrategia; entregables por sesión |
| Programa | 8–20 semanas | Transformación profunda; mentoría + talleres + capstone |

**Regla:** no inventar tipos nuevos. Si el requerimiento no cabe en ninguno → preguntar si puede adaptarse a uno de estos.

### Paso 2: Mapear la brecha

```markdown
## Brecha: [Nombre del servicio canónico] vs. Requerimiento del cliente

| Dimensión | Canónico | Requerimiento | Brecha |
|-----------|---------|---------------|--------|
| Duración | [X horas] | [Y horas] | [delta] |
| Audiencia | [perfil estándar] | [perfil específico] | [ajuste] |
| Entregables | [lista canónica] | [lista requerida] | [faltantes/sobrantes] |
| Módulos | [lista canónica] | [solicitud] | [agregar/quitar/modificar] |
| Precio base | [canónico] | [presupuesto cliente] | [delta] |
| Modalidad | Virtual/Presencial | [requerido] | [ajuste] |
```

### Paso 3: Diseñar el servicio adaptado

```markdown
## [NOMBRE DEL SERVICIO PROPUESTO]
*Servicio de diseño personalizado — MetodologIA*

### Identificación
- **Nombre tentativo:** [describir el valor, ej: "Bootcamp IA para Docentes"]
- **Tipo base:** [Workshop / Bootcamp / Consultive Workshop / Programa]
- **Servicio de referencia:** [slug del canónico más cercano]
- **Versión:** PROPUESTA — sujeta a acuerdo previo al SOW

### Problema que resuelve
[1 párrafo específico del cliente — no genérico]

### Resultado central (no garantizado)
[Lo que el participante podrá hacer al final — sin %ni cifras si no hay evidencia]

### Arquitectura propuesta

| Sesión/Módulo | Duración | Entregable | Estado |
|---------------|----------|-----------|--------|
| [nombre] | [horas] | [entregable] | Estándar del canónico |
| [nombre] | [horas] | [entregable] | Adaptado — sujeto a confirmación |
| [nombre] | [horas] | [entregable] | Nuevo — requiere diseño |

### Entregables propuestos

**Estándar (del canónico de referencia):**
- [lista]

**Adaptados (desviación del canónico):**
- [entregable]: [descripción de la adaptación]

**Nuevos (sin precedente):**
- [entregable]*: [descripción] — *sujeto a confirmación de alcance

### Inversión indicativa

| Concepto | Rango | Base |
|----------|-------|------|
| Servicio base | COP [X–Y] | Precio canónico de referencia |
| Delta por personalización | COP [+X] | [justificación] |
| **Total indicativo** | **COP [Z]** | **[POR CONFIRMAR antes de SOW]** |

> Los precios son indicativos. Se confirman con un alcance detallado
> antes de la firma del contrato.

### Condiciones específicas de este diseño

**Incluye:**
- [lista cerrada y específica]

**No incluye:**
- [lista cerrada — crítica para evitar scope creep]

**Requiere del cliente:**
- [obligaciones del cliente]

### Items [POR CONFIRMAR] antes del SOW

| # | Item | Responsable | Fecha límite |
|---|------|-------------|-------------|
| PC-XX | [descripción] | JM / Comercial | [fecha] |

---
*Este documento es una propuesta de diseño personalizado.
Los precios, alcances y condiciones marcadas como [POR CONFIRMAR] se
definen en el proceso de acuerdo previo al SOW.*
*Vigencia: [X] días calendario desde [fecha].*
```

---

## 3) Propuesta de valor para servicios de innovación

### Cómo posicionar un servicio nuevo sin sobre-prometer

**Estructura de presentación:**
1. Problema específico del cliente (citarlo con sus palabras)
2. Por qué el catálogo estándar no alcanza exactamente
3. Qué se adapta y por qué eso importa (no que es diferente — que resuelve mejor)
4. Los límites de lo que se puede garantizar (honestidad = confianza)
5. Cómo se confirma el diseño antes del compromiso total

**Frases ancla para servicios de innovación:**
```
"Diseñamos este servicio desde los principios de [tipo canónico],
adaptando [X] para resolver específicamente [problema del cliente]."

"El estándar de calidad es el mismo; el foco es diferente."

"Los entregables marcados con * son propuesta de diseño;
se acuerdan en la sesión de alineación antes del inicio."

"El precio es indicativo; se confirma con el alcance detallado
antes de la firma. Sin compromiso hasta entonces."
```

---

## 4) Decisiones de diseño comunes y cómo manejarlas

### ¿Qué pasa si el cliente pide una duración fuera del rango canónico?

| Solicitud | Respuesta |
|-----------|-----------|
| "Workshop de 1 hora" | "El mínimo para producir artefactos verificables es 2–3h. ¿Podemos diseñar un formato de 2h con alcance reducido?" |
| "Bootcamp de 8 horas" | "8h permite cubrir los módulos core (1–5). Los módulos 6–9 quedan como autoguiados con repositorio. ¿Funciona ese formato?" |
| "Programa de 4 semanas" | "4 semanas permite fases 1–2 con mentoría básica. No alcanza para capstone completo. ¿O es preferible un Consultive Workshop intensivo?" |

### ¿Qué pasa si el presupuesto no alcanza para el servicio correcto?

**No bajar la calidad del servicio — ofrecer un servicio diferente del catálogo:**
1. Si no alcanza para Bootcamp → ofrecer Workshop (y mentionar crédito educativo)
2. Si no alcanza para Programa → ofrecer Consultive Workshop
3. Si no alcanza para ninguno → ser honesto: "El servicio que resuelve tu problema tiene un costo mínimo de X. Podemos trabajar en fases o explorar otras opciones."

**Nunca:** "hacemos el Bootcamp pero en 10 horas para que quepa en el presupuesto."

### ¿Qué pasa si hay un servicio IAC que encaja mejor?

- Presentar el servicio IAC con claridad de que es una línea de MetodologIA
- Marcar precios B2C como [POR CONFIRMAR] si no están definidos
- Indicar que el proceso de contratación puede ser diferente al directo MetodologIA

---

## 5) Validación del diseño antes de entregar

Una propuesta de servicio nuevo está lista para entregar cuando:

- [ ] Tipo base elegido y justificado
- [ ] Brecha documentada (qué es estándar vs. qué es nuevo)
- [ ] Entregables clasificados (estándar / adaptado / nuevo*)
- [ ] Precio marcado como "indicativo" si hay desviaciones del canónico
- [ ] Items [POR CONFIRMAR] listados explícitamente
- [ ] Disclaimer de propuesta de diseño incluido
- [ ] Verificación legal completa (references/legal-guardrails.md)
- [ ] Sin promesas de resultado sin respaldo en evidencia
