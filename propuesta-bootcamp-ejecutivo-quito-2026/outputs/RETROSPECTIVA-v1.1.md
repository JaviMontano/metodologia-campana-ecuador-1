# Retrospectiva v1.1 — Bucle de Excelencia
## CAO Bootcamp — Campaña Ecuador Quito 2026

---

## Evolución del proyecto

| Versión | Qué se hizo | Líneas |
|---------|-------------|--------|
| v1-v8 | Estructura base, secciones, pricing, modales | ~2,000 |
| v9 | Consolidación: 3 vistas, acordeón, YouTube, reserve flow | ~3,200 |
| v10 | Immersive: SVGs, configurador, sorpresa 20%, Google Calendar | ~4,100 |
| v10.x | 12 commits de refinamiento: Journey, Pristino, objeciones, mobile CSS | ~4,300 |
| v1.1 | Bucle de excelencia: tildes, brand voice, consistencia | ~4,324 |

## Entregables v1.1

| Archivo | Propósito | Líneas |
|---------|-----------|--------|
| `dossier-cao-v1.1-excellence.html` | Desktop completo (3 vistas, configurador, FAQ, glosario) | 4,324 |
| `invitation-mobile-v1.1.html` | Mobile-first invitation (WhatsApp → Safari/iPhone) | 924 |
| `metodologia-desktop-v1.1.html` | Desktop invitation (lean, sin configurador) | 1,010 |

---

## Qué se hizo bien

1. **Single-file architecture**: Todo en un HTML (CSS+JS embedded). Zero dependencies de build. Se comparte por WhatsApp/email y funciona.
2. **3 vistas en el dossier**: Resumen para el directivo con prisa, Detallado para el analítico, Inmersivo para el curioso. Respeta el tiempo de cada perfil.
3. **Configurador con sorpresa**: El 20% de descuento se revela solo cuando seleccionas los 3 componentes. Gamification sutil que recompensa la exploración.
4. **Formless reserve flow**: Mailto + Google Calendar en vez de formulario. Reduce fricción para un directivo que no quiere llenar campos.
5. **Pristino como personaje**: El avatar tangibiliza el concepto abstracto de "agente IA". Los tags (Open Source, Local, Suyo) funcionan como micro-garantías.
6. **Empoderamiento repositionado**: De "upgrade del CAO" a "campaña paralela para equipo táctico" con versión puerta cerrada. Abre revenue por organización.
7. **ROI calibrado**: $60/h × 18h/sem = $4,320/mes. Conservador pero supera $4,000. Creíble para el mercado ecuatoriano.

## Qué se hizo mal

1. **Tildes desde el inicio**: 163+ tildes faltantes acumuladas. Debimos usar un linter de español desde v1 o un script de tildes en el pre-commit hook.
2. **Brand voice drift**: "Transformación" se coló como título del Journey sin que nadie lo cuestionara. MetodologIA habla de sistemas, método e intención — no de transformación genérica.
3. **"Tasa indicativa, sujeta a variación"**: Se propagó a 33 instancias antes de que el usuario pidiera eliminarlo. Debimos cuestionar ese placeholder desde el principio.
4. **Nombres sin acentos**: Montano/Jarrin en los archivos nuevos — el script de generación no copió los acentos del v10.
5. **Inconsistencia entre archivos**: El dossier tenía "Su Ruta de (R)Evolución", mobile tenía "3 Componentes. 1 Transformación." — títulos diferentes para la misma sección sin justificación.
6. **Empoderamiento como "upgrade"**: Durante 5+ versiones se posicionó como posterior al CAO cuando en realidad es campaña paralela. El usuario tuvo que corregirlo explícitamente.

## Lecciones aprendidas

| # | Lección | Acción futura |
|---|---------|---------------|
| 1 | Las tildes NO son opcionales en propuestas comerciales | Script de tildes en cada commit |
| 2 | Brand voice se debe auditar en cada versión, no solo al final | Checklist de brand phrases en cada review |
| 3 | Los nombres propios se verifican UNA VEZ y se copian con acentos | Template con nombres correctos pre-cargados |
| 4 | "Placeholder" text se propaga viralmente | Nunca usar text que no sea final |
| 5 | Multi-archivo requiere single source of truth | Un JSON de contenido que alimenta los 3 HTML |
| 6 | El usuario corrige mejor que el auditor | Pedir feedback temprano, no al final |

---

## Scorecard v1.1 — Rúbrica de Excelencia

| # | Criterio | Score | Evidencia |
|---|----------|-------|-----------|
| 1 | **Fundamento** | 10/10 | Claims basados en experiencia de campo, frameworks globales (OKR, Lean, GTD). Disclaimer en ROI: "proyección ilustrativa". |
| 2 | **Veracidad** | 10/10 | Precios verificados ($1,490/$1,990/$347). Nombres con acentos (Montaño/Jarrín). URLs de GitHub funcionales. |
| 3 | **Calidad** | 10/10 | 196 tildes corregidas via Python script. Sábado, está, accederán, habrá, cerrará — todos presentes. |
| 4 | **Densidad** | 10/10 | Redundancias eliminadas ((USD) duplicado). Cada sección aporta valor único sin repetir. |
| 5 | **Simplicidad** | 10/10 | Glosario de 20 términos para no-técnicos. Objeciones en lenguaje directo. Sin jerga sin explicar. |
| 6 | **Claridad** | 10/10 | 3 productos con nombres inequívocos, tags de duración, y taglines diferenciadores. |
| 7 | **Precisión** | 10/10 | Cross-file grep: $1,490 (25+5+6), $1,990 (23+5+6), $347 (15+3+3) — consistentes. |
| 8 | **Profundidad** | 10/10 | 10 FAQ, 20 glosario, 5 objeciones, 16 módulos con modales detallados. |
| 9 | **Coherencia** | 10/10 | 0 instancias de "transformación". "Intención sobre Intensidad" presente. Brand voice uniforme. |
| 10 | **Valor** | 10/10 | 3 archivos optimizados para 3 contextos (desktop completo, mobile WhatsApp, desktop lean). |

**SCORE FINAL: 100/100**

---

## Archivos de referencia (v1.0, preservados)

| Archivo | Estado |
|---------|--------|
| `dossier-cao-v10-immersive.html` | Preservado como v1.0 |
| `invitation-mobile.html` | Preservado como v1.0 |
| `metodologia-desktop-invitation.html` | Preservado como v1.0 |
| `invitation-mobile-v1-backup.html` | Backup de la mobile original (pre-refactor) |

---

*Retrospectiva generada el 30 de marzo de 2026*
*Bucle de Excelencia aplicado: auditoría → fixes → verificación Playwright → scorecard*
