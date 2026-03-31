# Procurement — Stack Tecnologico, Budget y Decisiones de Licencias

> **IMPORTANTE**: Los costes de licencias de IA NO estan incluidos en la inversion del bootcamp. Son responsabilidad del ejecutivo participante.

---

## Budget Consolidado

| Herramienta | Minimo | Recomendado | Completo | Notas |
|-------------|--------|-------------|----------|-------|
| Google One AI Premium | $19.99 | $19.99 | $19.99 | Imprescindible (Gemini Advanced + NotebookLM Plus) |
| ChatGPT Plus | — | $20.00 | $20.00 | Recomendado para GPTs personalizados |
| Claude Pro | — | — | $20.00 | Opcional: segundo motor de analisis profundo |
| IDE (Antigravity/Codex/VS Code) | $0 | $0 | $0 | Capas gratuitas disponibles |
| **Total USD/mes** | **$19.99** | **$39.99** | **$59.99** | — |

[EVIDENCIA: precios publicos a marzo 2026. Sujetos a variacion por region o promociones.]

---

## Mapeo Asistente → Herramienta

| Asistente | Herramienta Primaria | Alternativa | Nota |
|-----------|---------------------|-------------|------|
| Meeting Analyst | Gemini (transcripcion nativa en Meet) | Otter.ai + ChatGPT | [EVIDENCIA: Gemini integrado en Google Meet con AI Premium] |
| Task Tracker | ChatGPT (GPT personalizado) | Gemini | Requiere ChatGPT Plus para GPTs custom |
| Document Analyzer | NotebookLM | Claude | NotebookLM es nucleo del segundo cerebro |
| Report Generator | ChatGPT + Google Sheets | Gemini | Sheets con Gemini como alternativa viable |
| Knowledge Curator | NotebookLM (segundo cerebro) | — | Sin alternativa directa equivalente [DECISION: NotebookLM es insustituible para este rol] |
| Remaining 8 asistentes | ChatGPT o Gemini (intercambiables) | — | Flexibilidad total entre motores |

[SUPUESTO: los 13 asistentes del framework Pristino operan con las herramientas listadas. Configuracion especifica se define durante el bootcamp.]

---

## Riesgo de Vendor Lock-in

| Herramienta | Riesgo de Sunset | Mitigacion |
|-------------|-----------------|------------|
| NotebookLM | Medio (producto Google en evolucion activa) | Exportar datos periodicamente a Drive. El segundo cerebro tiene respaldo nativo en Google Drive. [SUPUESTO: Google mantiene NotebookLM al menos 12 meses mas] |
| ChatGPT Plus | Bajo (producto flagship OpenAI) | Prompts y GPTs son portables conceptualmente. Migrar a Gemini si necesario. [EVIDENCIA: OpenAI revenue >$5B ARR, producto core] |
| Gemini Advanced | Bajo (Google AI core product) | Integrado en ecosistema Google. Sin riesgo material a corto plazo. |
| Antigravity IDE | Medio (startup, producto nuevo) | VS Code como fallback gratuito inmediato. Codex como segunda alternativa. [DECISION: no depender de Antigravity para flujos criticos] |

---

## Costos Post-Bootcamp (Sostenimiento Real)

| Concepto | Costo Mensual | Obligatorio? | Justificacion |
|----------|--------------|-------------|---------------|
| Gemini Advanced (Google One AI Premium) | ~$20 USD/mes | Si | Mantiene NotebookLM activo + Gemini en Docs/Sheets/Gmail. Sin esto, el segundo cerebro deja de funcionar. |
| ChatGPT Plus | ~$20 USD/mes | Recomendado, no obligatorio | Version gratuita funciona con limitaciones (sin GPTs custom, limites de uso). Asistentes basicos siguen operando. |
| IDE | $0 | — | Antigravity/Codex/VS Code tienen capas gratuitas permanentes. |
| **Total sostenimiento** | **$20-40 USD/mes** | — | Marginal vs. valor generado por el sistema de asistentes activo. |

[DECISION: 2026-03, JM — comunicar a Ivan que el costo minimo post-bootcamp es $20 USD/mes, no $0. Transparencia evita frustracion posterior.]

---

## Decision de Ownership: Cuenta Personal vs Corporativa

| Opcion | Pro | Contra | Recomendacion |
|--------|-----|--------|---------------|
| **Cuenta personal Gmail** | Ownership total del ejecutivo. Sin restricciones corporativas. Segundo cerebro portable si cambia de empresa. | No deducible como gasto HMV. Invisible para TI corporativo. | **Default para B2C** |
| **Cuenta corporativa HMV** | Deducible fiscalmente. Visible y auditable por TI. Alineado con politicas corporativas. | Datos pertenecen a HMV. Restricciones de admin posibles. Si Ivan sale de HMV, pierde acceso al segundo cerebro. | Solo si B2B y TI aprueba explicitamente |

[DECISION: 2026-03, JM — recomendar cuenta personal. Razon: el segundo cerebro debe pertenecer al ejecutivo, no a la empresa. Si HMV reclama ownership, el ejecutivo pierde su activo mas valioso. Esto aplica incluso en modalidad B2B — la cuenta de herramientas es personal, la factura es corporativa.]

---

## Recomendaciones Especificas (con Trade-offs)

| # | Decision | Trade-off | Recomendacion |
|---|----------|-----------|---------------|
| 1 | Empezar con Minimo ($20) o Recomendado ($40)? | $20 adicionales/mes vs. GPTs personalizados desde dia 1 | **Recomendado ($40)** — ChatGPT Plus habilita los asistentes custom que son core del bootcamp. [SUPUESTO: Ivan puede absorber $40/mes sin friccion] |
| 2 | Activar licencias antes o durante sesion 1? | Riesgo de pagar sin usar vs. llegar preparado | **Antes** — Camilo guia activacion 48h antes de sesion 1. Maximo 10 min de setup. |
| 3 | Claude Pro ($60 total) vale la pena? | +$20/mes por segundo motor de analisis | **No en fase inicial.** Agregar en semana 3+ solo si Ivan muestra patron de uso avanzado. |

---

## Notas de Precios

> Todos los precios son indicativos (indicative rate, subject to variation) y corresponden a tarifas publicas a marzo 2026. Pueden variar segun region, promociones vigentes o cambios de los proveedores.
