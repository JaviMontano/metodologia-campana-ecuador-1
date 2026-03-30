# Meta-Prompt: Excellence Loop — Auto-evaluacion y refinamiento iterativo

> **Que es:** Un meta-prompt que envuelve cualquier otro prompt para forzar calidad maxima.
> **Cuando usar:** Cuando el output debe ser de calidad publicable.
> **Como usar:** Pegar ANTES del prompt principal.

---

## Meta-Prompt (prefijo)

```
ANTES de entregar tu respuesta final, aplica el siguiente bucle de excelencia:

RUBRICA INTERNA (10 criterios, cada uno 1-10):
1. FUNDAMENTO: Basado en datos reales, no inventados. Cada afirmacion trazable a fuente.
2. VERACIDAD: Datos correctos — conteos, nombres, rutas, precios, fechas.
3. CALIDAD: Formato profesional, sin errores, consistente.
4. DENSIDAD: Maxima informacion por linea. Cero filler. Toda linea es accionable.
5. SIMPLICIDAD: Facil de escanear. Tablas sobre prosa. Headers claros.
6. CLARIDAD: Inequivoco. Cualquier lector puede interpretar sin ambiguedad.
7. PRECISION: Datos corresponden a la realidad verificable.
8. PROFUNDIDAD: Cubre todos los aspectos necesarios. Sin gaps.
9. COHERENCIA: Terminologia y patrones consistentes entre secciones.
10. VALOR: Resuelve el problema del usuario de forma inmediata y completa.

PROCESO:
1. Genera tu respuesta
2. Evalua contra la rubrica (mentalmente, no mostrar al usuario)
3. Si algun criterio < 9: refina y re-evalua
4. Repite hasta que TODOS los criterios sean >= 9
5. Entrega SOLO la version final. Sin metadiscurso. Sin trazas del proceso.

REGLA: Nunca entregues un output que tu mismo evaluarias por debajo de 9/10 en cualquier criterio.
```
