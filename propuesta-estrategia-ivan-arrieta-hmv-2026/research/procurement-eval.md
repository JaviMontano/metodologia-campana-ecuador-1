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

## Consideraciones Especificas para HMV Ingenieros

### Ecosistema de Productividad

| Escenario | Implicacion para el Stack | Recomendacion | Fuente |
|-----------|--------------------------|---------------|--------|
| **HMV usa Google Workspace** | Gemini se integra nativamente (Gmail, Docs, Sheets, Meet). NotebookLM funciona sin friccion. Flujo optimo para el bootcamp. | Stack Recomendado ($40) es ideal. | [POR CONFIRMAR: Camilo — HMV usa Google Workspace o Microsoft 365?] |
| **HMV usa Microsoft 365** | Gemini no se integra con Outlook/Teams. NotebookLM sigue funcionando pero requiere cuenta personal Gmail separada. Copilot de Microsoft seria la alternativa nativa pero no cubre el segundo cerebro. | Stack Recomendado ($40) + cuenta personal Gmail. Ivan opera con 2 ecosistemas: corporativo (M365) + personal (Google para IA). | [POR CONFIRMAR: Camilo] |
| **HMV usa suite hibrida** | Mezcla de herramientas. Evaluar caso por caso. | Auditar con Camilo que herramientas usa Ivan en su dia a dia antes de sesion 1. | [POR CONFIRMAR: Camilo] |

**Accion requerida**: Camilo debe confirmar el ecosistema de productividad de HMV ANTES de arrancar. Esto define si el setup es plug-and-play (Google) o requiere configuracion adicional (M365).

### Restricciones de TI Corporativo

| Consideracion | Riesgo | Mitigacion | Fuente |
|---------------|--------|------------|--------|
| **Firewall / VPN corporativo** | Algunas herramientas de IA pueden estar bloqueadas en la red corporativa de HMV | Ivan usa cuenta personal + red personal (celular/casa) para las herramientas IA. Separa flujo corporativo de flujo agentico. | [SUPUESTO: firmas de ingenieria grandes tipicamente tienen politicas de red restrictivas | validar con Camilo] |
| **Politicas de instalacion de software** | TI puede restringir instalacion de extensiones de navegador o apps de escritorio | Stack del bootcamp es 100% web-based (ChatGPT, Gemini, NotebookLM). No requiere instalacion local. IDE es opcional. | [INFERENCIA] |
| **MDM (Mobile Device Management)** | Si Ivan usa dispositivo corporativo, MDM puede restringir apps | Recomendar usar dispositivo personal para herramientas IA si hay restricciones | [SUPUESTO | validar] |

---

## Seguridad de Datos — Sector Energia

### Contexto Regulatorio Colombiano

HMV opera en el sector energetico colombiano, regulado por multiples entidades. Existen consideraciones de seguridad de datos que Ivan debe conocer:

| Regulador / Marco | Relevancia para uso de IA | Implicacion practica | Fuente |
|--------------------|--------------------------|-----------------------|--------|
| **CREG** (Comision de Regulacion de Energia y Gas) | Regula mercado energetico. No regula directamente uso de IA, pero datos de proyectos regulados pueden tener restricciones de confidencialidad. | Ivan NO debe subir datos de proyectos regulados a herramientas de IA sin validar con legal de HMV. | [SUPUESTO: interpretacion conservadora de regulacion del sector | validar con legal HMV si es necesario] |
| **MinMinas** (Ministerio de Minas y Energia) | Supervision sectorial. Proyectos con participacion estatal pueden tener clausulas de confidencialidad especificas. | Mismo principio: datos de proyectos con gobierno -> NO subir a IA sin validar. | [SUPUESTO | validar] |
| **Ley 1581/2012** (Proteccion de Datos Personales) | Datos personales de empleados o clientes de HMV tienen proteccion legal. | No subir datos personales de terceros a herramientas de IA. El segundo cerebro debe contener datos propios de Ivan, no datos personales de otros. | [EVIDENCIA: ley colombiana vigente] |
| **Ley 2213/2022** (Soberania de Datos) | Datos del sector publico deben residir en territorio colombiano o en jurisdicciones aprobadas. | Google (US), OpenAI (US), Anthropic (US) — datos residen fuera de Colombia. Para datos no-publicos y no-regulados, esto no es problema. Para datos de proyectos con el Estado, validar. | [SUPUESTO: interpretacion del marco legal | validar con legal si HMV tiene proyectos publicos activos] |

### Recomendacion Practica de Seguridad

**Regla de oro para Ivan**: usar las herramientas de IA con datos propios (ideas, analisis, borradores, framework personal). NUNCA subir: (1) datos confidenciales de proyectos HMV, (2) informacion de licitaciones activas, (3) datos personales de terceros, (4) documentos con clausula de confidencialidad.

**El segundo cerebro es personal, no corporativo.** Contiene: libros, articulos, frameworks, notas personales, borradores propios. No contiene: documentos internos de HMV, contratos, datos de proyectos. [DECISION: 2026-03, alineado con la recomendacion de cuenta personal en seccion de Ownership]

---

## Mapeo Asistente -> Herramienta

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

## TCO — Costo Total de Propiedad (6 Meses)

### Inversion Total: Bootcamp + Licencias + Tiempo

| Concepto | Monto | Tipo | Fuente |
|----------|-------|------|--------|
| **EstrategIA Personal (bootcamp)** | COP 3,400,000 | Unico | [EVIDENCIA: catalogo canonico] |
| **Licencias IA — 6 meses (stack recomendado, $40/mes)** | ~COP 960,000 | Recurrente (COP 160,000/mes @ TRM ~4,000) | [SUPUESTO: TRM COP 4,000/USD promedio 2026 | sujeto a variacion] |
| **Tiempo de Ivan (2h/semana × 9 semanas bootcamp)** | COP 2,700,000 - 4,500,000 | Costo de oportunidad | [SUPUESTO: valor hora Ivan COP 150,000-250,000 | validar] |
| **Tiempo de Ivan (mantenimiento post-bootcamp, 1h/semana × 17 semanas)** | COP 2,550,000 - 4,250,000 | Costo de oportunidad | [SUPUESTO: mismo rango de valor hora] |
| **TOTAL TCO 6 MESES** | **COP 9,610,000 - 13,110,000** | — | [INFERENCIA: suma de componentes] |

### Retorno Esperado (6 Meses)

| Concepto | Monto | Calculo | Fuente |
|----------|-------|---------|--------|
| **Horas recuperadas (bootcamp, semanas 1-9)** | 45-72 horas | 5-8 h/semana × 9 semanas | [SUPUESTO: meta de >=5h/semana del brief] |
| **Horas recuperadas (post-bootcamp, semanas 10-26)** | 85-136 horas | 5-8 h/semana × 17 semanas | [SUPUESTO: sistema sigue operando post-bootcamp] |
| **Total horas recuperadas en 6 meses** | **130-208 horas** | — | [INFERENCIA] |
| **Valor de horas recuperadas** | **COP 19,500,000 - 52,000,000** | 130-208h × COP 150,000-250,000/h | [INFERENCIA] |
| **ROI neto 6 meses** | **COP 6,390,000 - 42,890,000** | Retorno - TCO | [INFERENCIA] |
| **ROI %** | **49% - 427%** | (Retorno - TCO) / TCO × 100 | [INFERENCIA] |

> **Nota conservadora**: incluso en el escenario mas pesimista (5h/semana recuperadas, valor hora bajo), el ROI a 6 meses es positivo. La inversion se paga sola en las primeras 8-10 semanas.

### Comparacion: Costo de NO Tener el Sistema (6 Meses)

| Concepto | Monto | Calculo | Fuente |
|----------|-------|---------|--------|
| **Horas desperdiciadas en 6 meses** | 130-208 horas | 5-8 h/semana × 26 semanas | [SUPUESTO] |
| **Costo del desperdicio** | COP 19,500,000 - 52,000,000 | Horas × valor hora | [INFERENCIA] |
| **Costo de oportunidad competitivo** | Incuantificable | Propuestas perdidas, decisiones suboptimas, desgaste acumulado | [SUPUESTO] |

**El costo de no actuar en 6 meses (COP 19.5M-52M) supera la inversion total (COP 9.6M-13.1M) por un factor de 2x a 5x.** [INFERENCIA]

> **ATENCION**: los calculos de TCO y ROI dependen de supuestos sobre el valor hora de Ivan y las horas recuperables. Validar ambos datos en el icebreaker.

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
| 4 | Auditar ecosistema HMV antes de arrancar? | Tiempo adicional de preparacion | **Si, obligatorio.** Camilo confirma Google vs M365 antes de propuesta. Afecta la experiencia del bootcamp. |

---

## Notas de Precios

> Todos los precios son indicativos (indicative rate, subject to variation) y corresponden a tarifas publicas a marzo 2026. Pueden variar segun region, promociones vigentes o cambios de los proveedores.
