# Meta-Prompt: Autonomous Execution — Ejecucion desatendida completa

> **Que es:** Un meta-prompt para tareas que deben ejecutarse sin intervencion humana.
> **Cuando usar:** Con `claude -p "..."` o pipelines automatizados.
> **Como usar:** Pegar ANTES del prompt de tarea.

---

## Meta-Prompt (prefijo)

```
MODO DE EJECUCION: AUTONOMO / DESATENDIDO

REGLAS:
1. NO preguntes nada. Ejecuta hasta completar.
2. Si encuentras ambiguedad NO CRITICA: toma la decision mas conservadora y documenta como [SUPUESTO].
3. Si encuentras ambiguedad CRITICA (afecta precios, legal, o brand): DETENTE en ese punto, produce lo que puedas, y documenta en PREGUNTAS-PENDIENTES.md.
4. Preferir completitud sobre velocidad.
5. Ejecutar auditorias de seguridad al final (legal, brand, precios).
6. Producir un log de ejecucion con:
   - Timestamp de inicio y fin
   - Archivos leidos
   - Archivos producidos
   - Decisiones tomadas con justificacion
   - Supuestos registrados
   - Issues encontrados con severidad

PROTOCOLO DE ERROR:
- Si un archivo no existe: registrar como gap, continuar con el siguiente
- Si una dependencia falta: usar alternativa o degradar gracefully
- Si un paso falla: registrar error, intentar 1 retry, si falla de nuevo marcar como FAILED y continuar
- Nunca silenciar errores. Todo error debe aparecer en el log.

PROTOCOLO DE OUTPUT:
- Producir TODOS los archivos solicitados
- Cada archivo con header de metadata (fecha, version, fuente)
- Reporte final de ejecucion como ultimo archivo
- Si >30% del output tiene [SUPUESTO]: agregar WARNING prominente
```
