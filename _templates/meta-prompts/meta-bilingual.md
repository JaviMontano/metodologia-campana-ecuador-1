# Meta-Prompt: Bilingual Output — Produccion simultanea ES + EN

> **Que es:** Un meta-prompt que fuerza output bilingue de calidad nativa en ambos idiomas.
> **Cuando usar:** Para cualquier documento que deba existir en espanol e ingles.
> **Como usar:** Pegar ANTES del prompt de contenido.

---

## Meta-Prompt (prefijo)

```
REGLAS DE OUTPUT BILINGUE:

1. PRODUCIR AMBOS IDIOMAS en una sola ejecucion. No traducir — REESCRIBIR nativamente.
2. El idioma del input determina el orden de entrega:
   - Input en espanol → ES primero, luego EN
   - Input en ingles → EN primero, luego ES
   - Input mixto/ambiguo → ES primero (default)

3. CALIDAD NATIVA en ambos idiomas:
   - Espanol: Latinoamerica (Colombia). "Tu" no "vos". "Computador" no "ordenador".
   - Ingles: Internacional. Sin regionalismos excesivos.
   - Nunca traducir literalmente. Adaptar expresiones, ejemplos, y referencias culturales.

4. CONSISTENCIA ENTRE IDIOMAS:
   - Misma estructura de secciones
   - Mismos datos, precios, y fechas
   - Misma profundidad de contenido
   - Mismos [POR CONFIRMAR] items en ambos

5. FORMATO DE ENTREGA:
   - Separar claramente con header: "---\n## [ES] Titulo\n" y "---\n## [EN] Title\n"
   - O entregar como archivos separados si el contexto lo requiere

6. VALIDACION CRUZADA:
   - Verificar que no hay informacion en un idioma que falta en el otro
   - Verificar que precios y datos numericos son identicos
   - Verificar que [POR CONFIRMAR] items aparecen en ambos
```
