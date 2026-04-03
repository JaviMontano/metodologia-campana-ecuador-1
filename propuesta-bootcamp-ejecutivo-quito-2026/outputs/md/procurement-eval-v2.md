# Procurement Evaluation -- Bootcamp Ejecutivo Quito 2026

| Campo | Valor |
|-------|-------|
| Versión | 2.0 |
| Fecha | 2026-04-01 |
| Fuente | content.json v2.0 |
| Autor | MetodologIA -- Red Agentica |
| Estado | Borrador v2 |

---

## 1. Stack tecnologico por tier

### Tier 1 -- Entrada (recomendado mínimo)

| Herramienta | Costo mensual (USD) | Uso principal | Evidencia |
|-------------|---------------------|---------------|-----------|
| Google One AI Premium | $19.99/mes | Gemini Advanced, acceso a modelos de ultima generacion, integración con Workspace | [DOC] |

### Tier 2 -- Intermedio (recomendado para aprovechamiento completo)

| Herramienta | Costo mensual (USD) | Uso principal | Evidencia |
|-------------|---------------------|---------------|-----------|
| ChatGPT Plus (OpenAI) | $20/mes | GPT-4o, GPTs personalizados, análisis de datos | [DOC] |
| Claude Pro (Anthropic) | $20/mes | Razonamiento extendido, análisis de documentos largos, Projects | [DOC] |
| Total Tier 2 | $40/mes | Cobertura multi-modelo para casos avanzados | [DOC] |

### Tier 3 -- Herramientas complementarias (gratuitas)

| Herramienta | Costo | Uso principal | Evidencia |
|-------------|-------|---------------|-----------|
| Cursor / Windsurf | Free tier disponible | IDE con IA integrada para casos técnicos | [DOC] |
| Replit | Free tier disponible | Prototipado rápido, entorno cloud | [INFERENCIA] |
| Google Colab | Gratuito | Notebooks para demostraciones de datos | [INFERENCIA] |

---

## 2. Politica de licencias -- Responsabilidad del participante

Las licencias de software NO estan incluidas en el precio del bootcamp. [DOC]

| Concepto | Detalle | Evidencia |
|----------|---------|-----------|
| Costo estimado mensual por participante | $20 -- $60 USD/mes segun tier elegido | [DOC] |
| Responsabilidad | Cada participante gestiona y paga sus propias licencias | [DOC] |
| Recomendacion minima | Tier 1 (Google One AI Premium, $19.99/mes) | [DOC] |
| Recomendacion optima | Tier 1 + Tier 2 ($59.99/mes) | [INFERENCIA] |
| Comúnicacion requerida | Indicar claramente en materiales de venta que las licencias son costo adicional | [DOC] |
| Soporte de onboarding | Guia de configuración incluida en el programa; no soporte técnico de licencias | [INFERENCIA] |

---

## 3. Infraestructura agéntica -- Pristino + 13 Asistentes

| Componente | Descripcion | Requisito técnico | Evidencia |
|------------|-------------|-------------------|-----------|
| Agente Pristino | Agente orquestador central de MetodologIA; coordina los 13 asistentes del CAO | Acceso a API de modelos (Gemini, GPT-4o, Claude); runtime agéntico propio | [DOC] |
| 13 Asistentes personalizados | Un asistente por cada caso del CAO, entrenado con contexto específico del caso | Configuracion en plataforma de GPTs o equivalente; prompts y knowledge base por caso | [DOC] |
| Plataforma de entrega | Entorno donde los participantes interactuan con Pristino y los asistentes | Web app o integración con Workspace; SSO opcional | [SUPUESTO] |
| Persistencia de contexto | Cada asistente mantiene memoria del progreso del participante en su caso | Storage de sesiones; integración con sistema de tracking de progreso | [INFERENCIA] |
| Escalabilidad | Soporte para multiples participantes concurrentes en la misma cohorte | Rate limits de APIs; cola de solicitudes si es necesario | [INFERENCIA] |

### Requisitos de infraestructura para Asistentes Personalizados ($347 add-on)

| Requisito | Detalle | Evidencia |
|-----------|---------|-----------|
| Configuracion por participante | Asistente fine-tuned al contexto de negocio específico del participante | [DOC] |
| Tiempo de setup estimado | 2-4 horas por asistente personalizado | [SUPUESTO] |
| Entrega | Asistente operativo en la plataforma elegida (GPTs, Claude Projects, o equivalente) | [INFERENCIA] |
| Soporte post-entrega | 30 dias de ajustes incluidos | [SUPUESTO] |
| Costo de API subyacente | Absorbido por MetodologIA durante el periodo de soporte; luego responsabilidad del participante | [SUPUESTO] |

---

## 4. Resumen de costos para el participante

| Concepto | Costo (USD) | Frecuencia | Incluido en bootcamp | Evidencia |
|----------|-------------|-----------|---------------------|-----------|
| CAO Believers Edition | $1,490 | Unico | Si -- es el programa | [DOC] |
| CAO Académico | $1,990 | Unico | Si -- es el programa | [DOC] |
| Programa de Empoderamiento | $1,490 | Unico | Si -- es el programa | [DOC] |
| Asistentes Personalizados | $347 | Unico (add-on) | No -- opcional | [DOC] |
| Licencias Tier 1 | $19.99/mes | Mensual | No -- responsabilidad del participante | [DOC] |
| Licencias Tier 2 | $40/mes | Mensual | No -- responsabilidad del participante | [DOC] |
| IVA (15%) | Aplica sobre precio del programa | Unico | Segun estructura fiscal local | [DOC] |

---

## 5. Evaluacion de proveedores de plataforma

| Plataforma | Fortaleza | Debilidad | Recomendacion | Evidencia |
|-----------|-----------|-----------|---------------|-----------|
| Google Workspace + Gemini | Ecosistema integrado; familiaridad en mercado ecuatoriano | Limitaciones en agentes custom avanzados | Tier 1 obligatorio | [INFERENCIA] |
| OpenAI (ChatGPT + API) | GPTs custom potentes; ecosistema maduro | Costo acumulativo de API; dependencia de vendor unico | Tier 2 complementario | [INFERENCIA] |
| Anthropic (Claude + API) | Razonamiento superior en documentos largos; Projects | Menor ecosistema de plugins vs OpenAI | Tier 2 complementario | [INFERENCIA] |
| Cursor / Windsurf | IDE con IA nativo; ideal para casos técnicos | Solo aplica a participantes con perfil técnico | Tier 3 opcional | [INFERENCIA] |

---

## 6. Criterios de seleccion de stack por participante

| Perfil del participante | Stack recomendado | Costo mensual adicional | Evidencia |
|-------------------------|-------------------|------------------------|-----------|
| CEO / CFO (no técnico) | Tier 1 únicamente | $19.99/mes | [INFERENCIA] |
| CTO / CIO (perfil técnico) | Tier 1 + Tier 2 + Tier 3 | $59.99/mes | [INFERENCIA] |
| Gerente de operaciónes | Tier 1 + ChatGPT Plus | $39.99/mes | [INFERENCIA] |
| Gerente de marketing | Tier 1 + Claude Pro | $39.99/mes | [INFERENCIA] |

---

## 7. Riesgos de procurement

| Riesgo | Probabilidad | Impacto | Mitigacion | Evidencia |
|--------|-------------|---------|------------|-----------|
| Participante no contrata licencia minima (Tier 1) | Media | Alto | Requisito explicito en terminos de inscripcion; verificacion en onboarding | [INFERENCIA] |
| Cambio de precios de proveedores de IA durante el programa | Baja | Medio | Comúnicar que precios de terceros son variables; anclar solo precio del bootcamp | [INFERENCIA] |
| Caida de servicio de proveedor critico (OpenAI, Google, Anthropic) | Baja | Alto | Stack multi-proveedor por diseño; ningun caso depende de un solo modelo | [INFERENCIA] |
| Limitaciones de API rate limits con multiples participantes | Media | Medio | Arquitectura de cola en Pristino; sesiones asincronas como fallback | [SUPUESTO] |
| Participante confunde costo de licencias con costo del bootcamp | Alta | Medio | Comúnicacion clara en landing page, email de bienvenida y sesión de onboarding | [INFERENCIA] |

---

## 8. Switching Costs y Vendor Lock-in

| Herramienta | Lock-in risk | Costo de cambio | Alternativa viable | Evidencia |
|-------------|-------------|-----------------|-------------------|-----------|
| Google Workspace | Medio | Alto (migrar Drive, Calendar, Gmail) | Microsoft 365 (~$12/mes) | [INFERENCIA] |
| ChatGPT Plus | Bajo | Bajo (historial exportable) | Claude Pro, Gemini | [INFERENCIA] |
| Claude Pro | Bajo | Bajo | ChatGPT Plus, Gemini | [INFERENCIA] |
| NotebookLM | Medio | Medio (contenido exportable, workflow no) | Notion AI, Obsidian | [INFERENCIA] |
| Pristino (Open Source) | **Cero** | Cero (suyo, local, sin dependencia) | N/A — es suyo | [DOC] |

**Decisión de diseño:** Pristino como orquestador es la pieza cero-lock-in. Si un participante cambia de ChatGPT a Claude, Pristino sigue operando. [DOC]

---

## 9. Free Tier Limits (riesgos de degradacion)

| Herramienta | Free tier incluye | Limite critico | Que pasa al exceder | Evidencia |
|-------------|------------------|----------------|---------------------|-----------|
| Google Gemini (sin Premium) | 15 msgs/dia modelo básico | Sin Gemini Advanced | Calidad de respuestas cae 60%+ | [INFERENCIA] |
| ChatGPT Free | GPT-4o limitado a 10 msgs/3h | Sin GPTs custom | No puede usar asistentes configurados | [DOC] |
| Claude Free | 10-15 msgs/dia | Sin Projects | No puede subir documentos largos | [INFERENCIA] |
| NotebookLM Free | 5 notebooks, 50 fuentes | Sin podcast/audio | Funcionalidad base intacta | [INFERENCIA] |

**Riesgo:** Participante que no contrata Tier 1 no puede seguir el programa. Solucion: hacer Tier 1 requisito de inscripcion, verificar en onboarding día 1. [INFERENCIA]

---

## 10. Compliance de licencias

| Aspecto | Riesgo | Mitigacion | Evidencia |
|---------|--------|-----------|-----------|
| Uso corporativo de cuenta personal | Medio | Recomendar cuenta profesional separada | [SUPUESTO] |
| Compartir credenciales entre equipo | Alto | 1 licencia por participante, no compartida | [DOC] |
| Datos sensibles en plataformas cloud | Medio | Pristino local para datos criticos; cloud para lo demas | [INFERENCIA] |
| TOS de OpenAI/Google/Anthropic | Bajo | Uso dentro de terminos standard; sin fine-tuning de modelos base | [INFERENCIA] |

---

> **Innovation Mode**: Datos con [INFERENCIA] o [SUPUESTO] requieren validación con proveedores antes de decisiones de procurement.

*Construido por profesionales, potenciado por la red agéntica de MetodologIA.*
