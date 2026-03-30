# CLAUDE.md — MetodologIA Proposal Engine
# Copiar este bloque al CLAUDE.md del repositorio donde se desplegará Claude Code

---

## MetodologIA Proposal Engine v3.0

### Activación automática
Cuando el usuario mencione cualquiera de estas palabras o contextos:
propuesta · cotización · oferta · presupuesto para cliente · pitch · presentación comercial ·
"armar una propuesta" · "necesito cobrarle a un cliente" · "diseñar un servicio" ·
"atender este requerimiento" · "adaptar para este cliente" · "servicio a medida" ·
"innovar un servicio" · "variante de [servicio]" · o cualquier solicitud de documento
comercial para presentar a un cliente o prospect:

**ACTIVAR INMEDIATAMENTE** el skill `.claude/skills/metodologia-proposal-engine/SKILL.md`

---

### Comportamiento del agente (protocolo completo)

**FASE 0 — Leer el repo (silencioso, antes de responder)**
```bash
# Ejecutar siempre, sin decirle nada al usuario:
for f in 00-inventario-maestro.md 00-glosario-catalogo.md 00-guia-editorial.md \
          00-dod-maestro.md 00-guia-derivacion-versiones.md \
          00-resolucion-por-confirmar.md 00-mapa-interdependencias.md; do
  [ -f "$f" ] && cat "$f"
done
find . -name "canonico.md" | head -10 | while read f; do head -80 "$f"; done
```

**FASE 1 — Diagnóstico del cliente (máx. 5 preguntas en 1 mensaje)**
**FASE 2 — Diseño de contenido (Minto-First, Brand Voice v3.0)**
**FASE 3 — Verificación legal/marca (OBLIGATORIA — ver guardrails)**
**FASE 4 — Generación 10 archivos simultáneos (ES+EN × 5 formatos)**
**FASE 5 — Entrega con reporte de verificación**

---

### SSOT y fuentes de verdad (en este repo)

| Documento | Ubicación | Uso |
|-----------|-----------|-----|
| Inventario | `00-inventario-maestro.md` | Qué servicios existen |
| Canónico de cada servicio | `[slug]/canonico.md` | SSOT — manda sobre todo |
| Items pendientes | `00-resolucion-por-confirmar.md` | Qué NO afirmar |
| Glosario | `00-glosario-catalogo.md` | Vocabulario oficial |
| Editorial | `00-guia-editorial.md` | Tono y estilo |
| DoD | `00-dod-maestro.md` | Criterios de aceptación |
| Derivación | `00-guia-derivacion-versiones.md` | Cómo producir derivadas |
| Variantes | `00-guia-variantes-segmento.md` | B2B vs B2C vs B2B2B |
| Interdependencias | `00-mapa-interdependencias.md` | Créditos y dependencias |

**Regla de autoridad:** canónico.md > derivadas > cualquier otra fuente.
Si hay conflicto → el canónico manda.

---

### Modos de operación

**MODO ESTÁNDAR** — servicio existe en catálogo:
→ Leer canónico → aplicar versión por audiencia → Minto-First → verificar → generar

**MODO INNOVACIÓN** — requerimiento fuera del catálogo:
→ Identificar canónico más cercano → mapear brecha → diseñar variante/nuevo →
   marcar [POR CONFIRMAR] en todo precio/alcance sin precedente →
   incluir disclaimer de propuesta de diseño

---

### Output por defecto (siempre, sin que el usuario lo pida)

| Formato | ES | EN | Ruta |
|---------|----|----|------|
| HTML interactivo | ✓ | ✓ | `outputs/` |
| Word (.docx) | ✓ | ✓ | `outputs/` |
| PowerPoint (.pptx) | ✓ | ✓ | `outputs/` |
| Excel pricing (.xlsx) | bilingüe | — | `outputs/` |
| Markdown | ✓ | ✓ | `outputs/` |
| Reporte verificación | ✓ | — | `outputs/` |

---

### Guardrails — nunca negociables

| ❌ NUNCA | ✅ SIEMPRE |
|---------|-----------|
| Afirmar [POR CONFIRMAR] como confirmado | Incluir condicional explícito |
| Prometer % sin "meta orientativa" | Marcar como meta orientativa |
| Usar "transformación" | Usar "(R)Evolución" |
| Garantía diferente a "100% primeras 4h + 1h feedback" | Usar la cláusula exacta |
| Precio ≠ canónico vigente | Verificar contra canónico |
| Alcance fuera de "Que NO es" del canónico | Eliminar o ir a MODO INNOVACIÓN |
| Cotizar IAC B2C sin confirmar | Marcar [POR CONFIRMAR] |
| Generar formatos sin verificación | Verificar SIEMPRE primero |
| Prototipos como "automatizaciones listas para producción" | Aclarar la distinción |
| White-label/co-branding inmediato | Indicar requisito de contrato marco |

---

### Activación de verificación de contenido (auto-ejecutar)

Antes de generar cualquier formato, ejecutar mentalmente:
```
□ L1-L10: Bloqueadores duros (corregir si falla alguno)
□ W1-W7: Advertencias (señalar al usuario)
□ Lista roja = 0 ocurrencias
□ Minto completo: conclusión + 3 soportes MECE + evidencia + CTA
□ Bilingüe ES+EN confirmado
□ 10 archivos en output
```

---

### Datos de contacto para CTAs
```
WhatsApp: +57 [PENDIENTE — actualizar en producción]
Email: hola@metodologia.ai
Web: metodologia.ai
Calendly: [PENDIENTE — insertar link]
```

---

### Notas de mantenimiento
- Cuando cambie un canónico → re-derivar las derivadas afectadas (máx. 48h)
- Resolver PC-01 y PC-05 antes de publicar propuestas para socios
- Actualizar `00-resolucion-por-confirmar.md` cuando se resuelvan PCs
- Esta instalación: MetodologIA Proposal Engine v3.0 (2026-03-29)
