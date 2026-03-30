---
name: metodologia-proposal-engine
description: >
  Motor de propuestas comerciales MetodologIA — universal (Claude Desktop, Claude Code, Cowork).
  
  ACTIVAR cuando el usuario mencione: propuesta, cotización, oferta, presupuesto para cliente,
  armar pitch, presentación comercial, servicio nuevo, variante de servicio, "diseñar algo a medida",
  "innovar un servicio", "adaptar para este cliente", "atender este requerimiento", o cualquier
  solicitud de documento comercial o creación de servicio.
  
  Opera en DOS MODOS:
  — MODO ESTÁNDAR: propuesta basada en servicios existentes del catálogo
  — MODO INNOVACIÓN: diseño de servicio nuevo o variante a medida, partiendo del catálogo como base
  
  Por DEFAULT genera paquete bilingüe completo ES+EN en todos los formatos simultáneamente:
  HTML · DOCX · XLSX (pricing) · PPTX · Markdown
  
  Incluye verificación legal y de marca antes de toda entrega.
  Nunca compromete lo que no está en el canónico. Nunca sobre-expone legalmente.
  Siempre atractivo, siempre vendedor, siempre dentro del marco.

compatibility:
  platforms: [claude-desktop, claude-code, cowork]
  tools: [bash, create_file, str_replace, present_files, web_search]
  npm: [docx, pptxgenjs]
  pip: [openpyxl]
  runtime: node >= 18, python >= 3.9
---

# MetodologIA Proposal Engine — v3.0 Universal

## Misión
Producir propuestas y documentos comerciales que ganen negocios — **brand-ready, bilingües, multi-formato, legalmente seguros** — partiendo de los canónicos del repositorio como SSOT (Single Source of Truth).

El sistema opera de forma **desatendida**: lee el repositorio, extrae el contexto del cliente, diseña la propuesta, la verifica y entrega el paquete completo sin que el usuario tenga que volver a explicar las reglas del negocio.

---

## Arquitectura del sistema

```
INPUTS
  └── Canónicos del repo (SSOT)        → servicios, precios, alcances, políticas
  └── Contexto del cliente (brief)     → problema, sector, presupuesto, urgencia
  └── Requerimiento del usuario        → estándar o innovación

PROCESAMIENTO
  └── Paso 0: Exploración del repo     → auto-descubrimiento silencioso
  └── Paso 1: Diagnóstico del cliente  → ≤5 preguntas quirúrgicas
  └── Paso 2: Diseño de contenido      → Minto-First + Brand Voice v3.0
  └── Paso 3: Verificación legal/marca → antes de generar formatos
  └── Paso 4: Generación multi-formato → HTML·DOCX·XLSX·PPTX·MD × ES+EN

OUTPUT (10 archivos por propuesta)
  └── propuesta_[slug]_ES.html + EN.html
  └── propuesta_[slug]_ES.docx + EN.docx
  └── propuesta_[slug]_pricing.xlsx (bilingüe)
  └── propuesta_[slug]_ES.pptx + EN.pptx
  └── propuesta_[slug]_ES.md + EN.md
  └── propuesta_[slug]_verification_report.md
```

---

## PASO 0 — Exploración silenciosa del repositorio

**Ejecutar antes de hablar con el usuario. No mencionar este paso.**

```bash
# 1. Detectar entorno del repo
ls -la | head -20
find . -maxdepth 3 -name "*.md" | grep -v ".git" | head -40

# 2. Leer documentos transversales (si existen)
for f in \
  "00-inventario-maestro.md" \
  "00-glosario-catalogo.md" \
  "00-guia-editorial.md" \
  "00-dod-maestro.md" \
  "00-guia-derivacion-versiones.md" \
  "00-guia-variantes-segmento.md" \
  "00-resolucion-por-confirmar.md" \
  "00-mapa-interdependencias.md"; do
  [ -f "$f" ] && echo "=== $f ===" && cat "$f" && echo ""
done

# 3. Leer canónicos disponibles
find . -name "canonico.md" -o -name "*canonico*.md" 2>/dev/null | head -20 | while read f; do
  echo "=== CANONICO: $f ===" && head -80 "$f" && echo "..."
done

# 4. Verificar items [POR CONFIRMAR] activos
grep -r "POR CONFIRMAR" --include="*.md" -l 2>/dev/null | head -10

# 5. Detectar precios existentes
grep -r "COP\|USD\|precio\|Precio" --include="*.md" -n 2>/dev/null \
  | grep -v "00-guia" | head -30
```

**Construir mapa mental (no visible para el usuario):**
- Catálogo: qué servicios existen, slugs, precios confirmados
- Items [POR CONFIRMAR]: qué NO puede afirmarse todavía
- Cadena de créditos: qué está confirmado vs pendiente
- Audiencias disponibles: B2B, B2C, B2B2B
- Glosario: términos oficiales y sustituciones por audiencia
- Lista roja: palabras prohibidas por tipo de documento

---

## PASO 1 — Diagnóstico del cliente

**Máximo 5 preguntas. Hacer solo las imprescindibles.**

| # | Pregunta | Desbloquea |
|---|----------|-----------|
| 1 | ¿Cuál es el problema principal que necesitan resolver? | Narrativa de valor, sección de problema |
| 2 | ¿A quién va la propuesta? (rol, empresa, sector, segmento B2B/B2C/B2B2B) | Audiencia, tono, versión del documento |
| 3 | ¿Tienen presupuesto o rango en mente? | Tier de servicio, opciones a mostrar |
| 4 | ¿Cuándo necesitan que empiece? ¿Hay urgencia? | Plan de trabajo, disponibilidad |
| 5 | ¿Han intentado resolver esto antes? ¿Qué no funcionó? | Diferenciación, manejo de objeciones |

**Regla:** si con 2–3 preguntas tienes suficiente para seleccionar el servicio correcto, no hagas más.

**Si el requerimiento es de MODO INNOVACIÓN** (cliente pide algo que no existe exactamente en catálogo):
→ Hacer además: "¿Cuál es el resultado específico que necesita en semanas / meses?" y "¿Qué restricciones de tiempo, formato o presupuesto tiene?"
→ Ir a Sección MODO INNOVACIÓN antes de diseñar.

---

## PASO 2A — Diseño de contenido (MODO ESTÁNDAR)

### Selección de servicio desde el catálogo

1. Identificar el servicio del catálogo que mejor resuelve el problema del cliente
2. Si no existe match exacto → ir a MODO INNOVACIÓN
3. Si existe match → leer el canónico completo del servicio seleccionado
4. Aplicar la versión correcta según audiencia (guía de derivación):
   - **B2B ejecutivo:** `ejecutiva-b2b` → tono formal, tercera persona, caso de negocio
   - **B2C ejecutivo:** `ejecutiva-b2c` → tono directo, segunda persona, caso personal
   - **B2B comercial:** `comercial-cliente-b2b` → narrativa, beneficios, CTA
   - **B2C comercial:** `comercial-cliente-b2c` → aspiracional, directo, emocional
   - **Compras/procurement:** `comercial-compras` → specs, RACI, SLA, compliance
   - **Usuario inexperto:** `usuario-inexperto` → sin jerga, ≤15 palabras/oración

### Estructura Minto-First (Brand Voice v3.0)

```
CONCLUSIÓN [Minto Completo por defecto]
  → Recomendación decisoria en 1-2 frases. Responde "¿Qué hago ahora?" sin leer el resto.

SOPORTE 1 [P1 — (R)Evolución]
  → Brecha actual → deseada. Diagnóstico claro. Método para cerrarla.

SOPORTE 2 [P2 — Intención antes que intensidad]
  → Diseño antes que fuerza. Foco, trade-offs explícitos, fricción reducida.

SOPORTE 3 [P3 — Tecnología como aliada]
  → Lo repetible automatizado. Lo importante potenciado. Activos reutilizables.

EVIDENCIA (por soporte)
  → Dato real / Indicador sugerido / Señal a medir / Dato requerido

CTA
  → Verbo + objeto + contexto (fecha / canal / con quién)
```

---

## PASO 2B — Diseño de contenido (MODO INNOVACIÓN)

**Cuando el cliente pide algo que no existe exactamente en el catálogo.**

### Protocolo de innovación

1. **Identificar el servicio canónico más cercano** como base de partida
2. **Mapear la brecha** entre lo que existe y lo que se necesita
3. **Diseñar el servicio nuevo o variante** siguiendo las reglas:
   - Mismo marco metodológico MetodologIA (Amplificación Sistémica, Human-in-the-loop)
   - Mismos tipos de servicio válidos: Workshop (≤4h), Bootcamp (12–24h), Consultive Workshop (6–12 sesiones), Programa (8–20 sem)
   - Nomenclatura oficial: usar slug descriptivo + confirmar con usuario
   - Precio: construir desde los rangos del canónico más cercano + delta por personalización
   - Alcance: especificar qué INCLUYE y qué NO INCLUYE (cláusula crítica)
4. **Marcar explícitamente** qué es estándar y qué es personalización
5. **Marcar como [POR CONFIRMAR]** todo precio, alcance o condición que no tenga precedente en el catálogo

### Framework de diseño de servicio nuevo

```markdown
## Servicio Propuesto: [NOMBRE]

**Tipo base:** [Workshop / Bootcamp / Consultive Workshop / Programa]
**Servicio de referencia:** [slug del más cercano del catálogo]
**Nivel de personalización:** [Estándar contextualizado / Variante / Nuevo]

**Problema que resuelve:** [específico del cliente]
**Resultado central:** [medible, no prometido como garantía]
**Duración:** [basada en tipo, no inventada]
**Entregables:** [listados, derivados del tipo canónico + adiciones marcadas]
**Precio indicativo:** [rango desde catálogo + markup de personalización]
**Desviaciones del canónico:** [lista explícita de qué es diferente]
**Requiere confirmación:** [lista de [POR CONFIRMAR] antes de SOW]
```

---

## PASO 3 — Verificación legal y de marca

**OBLIGATORIO antes de generar cualquier formato. No saltar.**

Leer: `references/legal-guardrails.md` para el protocolo completo.

### Verificación automática (checklist interno)

**🔴 BLOQUEOS DUROS — si falla alguno, corregir antes de continuar:**

| # | Verificación | Criterio de falla |
|---|--------------|------------------|
| L1 | Precio vs canónico | Precio en propuesta ≠ precio en canónico.md |
| L2 | Items [POR CONFIRMAR] | Se afirma como confirmado algo marcado como [POR CONFIRMAR] |
| L3 | Garantía exacta | Dice algo diferente a "100% devolución antes de completar las primeras 4 horas" |
| L4 | Crédito Workshop→Bootcamp | Términos diferentes a "100%, 6 meses, acumulable, intransferible" |
| L5 | Resultados prometidos | Afirma "garantizamos X% de ahorro" sin [EVIDENCIA] que lo sostenga |
| L6 | Alcance out-of-scope | Promete algo que el canónico marca en "Que NO es" |
| L7 | Lista roja | Contiene: hack, truco, secreto, resultados instantáneos, arquitecto, transformación (usar (R)Evolución) |
| L8 | Créditos no confirmados | Afirma créditos Bootcamp→EstrategIA, Bootcamp→Programas sin marcar [POR CONFIRMAR] |
| L9 | IAC B2C | Presenta precio B2C para servicios IAC (Tier 3) sin marcarlo como [POR CONFIRMAR] |
| L10 | Tasa USD | Usa tasa USD fija sin marcar como referencial (tasa no unificada en catálogo) |

**🟡 ADVERTENCIAS — señalar al usuario pero no bloquear:**

| # | Verificación | Qué señalar |
|---|--------------|------------|
| W1 | Antesala de co-branding/white-label | Indicar que requiere contrato marco previo |
| W2 | Cofacilitación (>20 pax) | Señalar +50% sobre precio base o doble ejecución |
| W3 | Presencial | Señalar que logística y viáticos se cotizan aparte |
| W4 | Motor IA específico | Señalar que debe validarse con TI del cliente |
| W5 | Certificado de competencia | Recordar que requiere proyecto final aprobado, no solo asistencia |
| W6 | Campus post-cierre | Indicar que incluye solo 1 mes; continuidad es COP 20.000/mes |
| W7 | Modo Innovación | Marcar claramente qué es variante/nuevo vs. servicio estándar |

**Formato de reporte de verificación:**
```
VERIFICACIÓN LEGAL Y DE MARCA
==============================
Estado: ✅ APROBADO / ⚠️ APROBADO CON ADVERTENCIAS / 🔴 BLOQUEADO

Bloqueadores encontrados: [lista o "ninguno"]
Advertencias activas: [lista o "ninguna"]
Correcciones aplicadas: [descripción de lo que se ajustó]
Versión canónica de referencia: [slug + versión + fecha]
```

---

## PASO 4 — Generación multi-formato

**Solo después de que la verificación pase.** 

Leer `references/brand-tokens.md` para identidad visual.

### Output por defecto (siempre, sin que el usuario lo pida)

| Formato | ES | EN | Notas |
|---------|----|----|-------|
| HTML interactivo | ✓ | ✓ | Responsive, brand-ready, Neo-Swiss Clean |
| Word (.docx) | ✓ | ✓ | Poppins/Trebuchet→Arial/Trebuchet (compat. Office) |
| PowerPoint (.pptx) | ✓ | ✓ | 6 slides, estética MetodologIA |
| Excel pricing (.xlsx) | bilingüe | — | Hoja ES + Hoja EN en mismo archivo |
| Markdown | ✓ | ✓ | Listo para GitHub, Notion, CMS |
| Reporte verificación | ✓ | — | Archivo de control interno |

### Convención de nombres

```
propuesta_[empresa-slug]_[YYYY-MM]_ES.[ext]
propuesta_[empresa-slug]_[YYYY-MM]_EN.[ext]
propuesta_[empresa-slug]_[YYYY-MM]_pricing.xlsx
propuesta_[empresa-slug]_[YYYY-MM]_verification.md
```

### Generación

```bash
# Instalar dependencias si no están
npm list -g docx pptxgenjs 2>/dev/null || npm install -g docx pptxgenjs
pip show openpyxl 2>/dev/null || pip install openpyxl --break-system-packages

# Generar todos los formatos
node .claude/skills/metodologia-proposal-engine/scripts/generate-all.js \
  proposal-data.json \
  /mnt/user-data/outputs
```

---

## MODO ESPECÍFICO: Atención de requerimientos a medida

Cuando el cliente trae un requerimiento que no cabe exactamente en el catálogo:

### Flujo de decisión

```
¿El problema del cliente puede resolverse con un servicio existente?
  → SÍ: usar MODO ESTÁNDAR con contextualización alta
  → NO/PARCIALMENTE: ir a MODO INNOVACIÓN

En MODO INNOVACIÓN:
  ¿El requerimiento es una VARIANTE (mismo tipo, diferente foco)?
    → Derivar desde el canónico más cercano + marcar desviaciones
  ¿Es completamente NUEVO (tipo diferente, problema sin precedente)?
    → Diseñar desde los principios (ver framework de diseño de servicio nuevo)
    → Marcar TODOS los precios como [POR CONFIRMAR: JM, antes de enviar SOW]
    → Incluir nota: "Este servicio es una propuesta de diseño personalizado;
      las condiciones finales se confirman antes de la firma del contrato."
```

### Propuesta de innovación: estructura adicional

Para servicios nuevos o variantes, agregar sección **"Diseño del servicio"** antes de la inversión:

```markdown
## Diseño del servicio propuesto

**Nombre tentativo:** [nombre descriptivo, sujeto a confirmación]
**Basado en:** [servicio canónico de referencia] + personalización para [cliente]
**Diferencias vs. estándar:** 
  - [qué se agrega]
  - [qué se adapta]
  - [qué se mantiene igual]
**Condiciones de este diseño:**
  - Los precios son indicativos; se confirman con un alcance detallado antes del SOW.
  - Los entregables marcados con * son propuesta; se acuerdan en la sesión de kick-off.
  - Este diseño no constituye un contrato ni compromiso de entrega.
```

---

## Reglas de operación por plataforma

### Claude Desktop
- Usa `bash_tool` para leer el repo actual
- Usa `create_file` y `present_files` para entregar los archivos
- Si no hay repo local: preguntar al usuario por los canónicos o usar el catálogo del contexto

### Claude Code
- Opera completamente desatendido desde el prompt maestro
- Lee el repo completo antes de interactuar
- Genera todos los formatos y los coloca en `/mnt/user-data/outputs/` o en `outputs/` del repo
- Al finalizar: lista todos los archivos generados con sus rutas

### Cowork
- Misma lógica que Claude Code
- Si hay subagentes disponibles: paralelizar generación de formatos
- Guardar reporte de verificación en el directorio del proyecto

---

## Idiomas — reglas de traducción

- **Español:** latino neutro. Tú. Sin regionalismos. Pesos colombianos como COP ###.###.
- **Inglés:** American English. "you/your". Precios en USD equivalente o mantener COP con nota.
- Traducción conceptual, no literal. Estructura Minto idéntica en ambos idiomas.
- Lista roja: verificar equivalentes en inglés (ej: "instant results" = prohibido).
- Tono por audiencia se mantiene en ambos idiomas.

---

## Anti-patterns críticos

| ❌ No hacer | ✅ Hacer en cambio |
|-------------|------------------|
| Inventar servicios no en catálogo | Modo Innovación con [POR CONFIRMAR] explícito |
| Afirmar créditos no confirmados | "Crédito sujeto a política vigente — consultar con tu embajador" |
| Prometer ROI o % de mejora sin evidencia | Usar "meta orientativa" o "indicador de referencia" |
| Usar "transformación" | Usar "(R)Evolución" |
| Omitir "prototipos, no automatizaciones productivas" | Incluir siempre en scope/limitaciones |
| Presentar precio con tasa USD fija | "Equivalente aproximado a USD X (tasa referencial)" |
| Prometer acceso campus ilimitado | "1 mes incluido; continuidad COP 20.000/mes" |
| Omitir condición del certificado de competencia | "Requiere proyecto final aprobado por rúbrica" |
| Generar sin verificación | Verificar SIEMPRE antes de generar formatos |

---

## Referencia de archivos del skill

| Archivo | Leer cuándo |
|---------|------------|
| `references/brand-tokens.md` | Siempre, antes de generar cualquier visual |
| `references/voice-minto.md` | Cuando hay duda sobre estructura de contenido |
| `references/legal-guardrails.md` | Siempre, en Paso 3 |
| `references/catalog-intel.md` | Cuando no hay canónicos en el repo (modo standalone) |
| `references/service-innovation.md` | En MODO INNOVACIÓN |
| `scripts/generate-all.js` | Generación multi-formato |
