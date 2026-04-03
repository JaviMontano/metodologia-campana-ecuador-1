# Estrategia QA — Campana Ecuador Quito 2026
## MetodologIA Bootcamp Ejecutivo Agéntico

**Version:** 1.0 | **Fecha:** 2 de abril de 2026
**Alcance:** Ecosistema documental completo (34 archivos finales)

---

## TL;DR

Estrategia de aseguramiento de calidad para el ecosistema documental del Bootcamp Ejecutivo Quito 2026. Cubre consistencia de contenido, compliance de marca, integridad cross-formato y verificacion automatizada. 12 checks, 4 niveles de severidad, pipeline reproducible.

---

## 1. Alcance del QA

### Archivos bajo QA (34 totales)

| Tipo | Cantidad | Ubicacion |
|------|----------|-----------|
| SSOT | 1 | `content.json` |
| HTML | 9 | `html/` |
| MD | 10 | `md/` |
| DOCX | 4 | `export/` |
| PPTX | 2 | `export/` |
| XLSX | 2 | `export/` |
| Scripts | 4 | `scripts/` |
| Meta | 2 | `CHANGELOG.md`, `QA-STRATEGY.md` |

### Fuera de alcance
- Archivos en `_archive/` (legacy, no se comparten)
- `node_modules/`, `package-lock.json`

---

## 2. Checks de Calidad (12)

### CRITICOS (bloquean entrega)

| # | Check | Que valida | Como verificar |
|---|-------|-----------|----------------|
| QA-01 | **Pricing consistency** | $1,490 / $1,990 / $347 iguales en todos los archivos | `grep -rn '$1,490\|$1,990\|$347' md/ html/ content.json` |
| QA-02 | **Red-list zero** | 0 instancias de palabras prohibidas | `grep -rni 'transformacion\|revolucionario\|disruptivo\|hack\|truco\|secreto' md/ html/` |
| QA-03 | **Innovation Mode disclaimer** | Presente en todos los deliverables | `grep -rl 'Innovation Mode\|propuesta de diseno' md/ html/` |
| QA-04 | **Capacidad CAO correcta** | Solo/Dupla/Terna, no "grupo de 13" | `grep -rni 'grupo cerrado de hasta 13' md/ html/` (debe ser 0) |

### ALTOS (requieren correccion antes de enviar)

| # | Check | Que valida | Como verificar |
|---|-------|-----------|----------------|
| QA-05 | **Timeline consistente** | Lun 6 (masterclass) / Mar 7 (taller) / Sab opcion / May (abierto) / Jul (academico) | `grep -rn 'abril\|April\|Pascua\|Easter' md/ html/ content.json` |
| QA-06 | **Horas totales** | Hasta 25h (2+3+20) | Verificar en propuestas ejecutivas y detalladas |
| QA-07 | **Funnel correcto** | 13 → 5 Creyentes → 8 preferentes → grupo 10 → 2 publicas | Verificar en content.json y propuestas |
| QA-08 | **Deliverables completos** | 9 entregables con descripcion autoexplicativa | Verificar tablas en propuestas ES y EN |

### MEDIOS (deben corregirse, no bloquean)

| # | Check | Que valida | Como verificar |
|---|-------|-----------|----------------|
| QA-09 | **Acentos en nombres** | Montano/Jarrin consistentes | `grep -rn 'Montano\|Montaño\|Jarrin\|Jarrín' md/ html/ content.json` |
| QA-10 | **Bilingue paridad** | ES y EN tienen misma estructura y datos | Comparar secciones entre propuesta-*-es.md y propuesta-*-en.md |
| QA-11 | **(R)Evolucion** | Usado en vez de transformacion | `grep -rni 'Evolucion\|Evolution' md/ html/` |

### BAJOS (nice-to-have)

| # | Check | Que valida | Como verificar |
|---|-------|-----------|----------------|
| QA-12 | **Scripts funcionales** | Los 4 scripts generan output sin errores | `bash scripts/build-all-v2.sh` |

---

## 3. Niveles de Severidad

| Severidad | Definicion | Accion |
|-----------|-----------|--------|
| **CRITICO** | Dato incorrecto que causa confusion comercial o legal | Bloquea entrega. Corregir inmediatamente. |
| **ALTO** | Inconsistencia que un directivo notaria | Corregir antes de enviar. |
| **MEDIO** | Error menor, no afecta decisión del cliente | Corregir en siguiente iteracion. |
| **BAJO** | Mejora estetica o técnica | Backlog. |

---

## 4. Pipeline de Verificacion

### Automatizado (pre-commit)
```bash
# QA-01: Pricing
grep -rn '\$1,490\|\$1,990\|\$347' md/ html/ content.json | wc -l

# QA-02: Red-list
grep -rni 'transformacion\|revolucionario\|disruptivo\|hack\|truco\|secreto' md/ html/

# QA-03: Disclaimer
grep -rl 'propuesta de diseno\|Innovation Mode' md/ html/ | wc -l

# QA-04: Capacidad
grep -rni 'grupo cerrado de hasta 13' md/ html/
```

### Manual (pre-entrega)
1. Abrir cada HTML en Chrome (light + dark mode)
2. Verificar ES/EN toggle funciona
3. Verificar countdown apunta a fecha correcta
4. Print preview de investor-one-pager (A4)
5. Abrir DOCX en Word/Google Docs
6. Abrir XLSX y verificar formulas
7. Abrir PPTX y verificar slides

---

## 5. Gobernanza

### Responsables

| Rol | Persona | Responsabilidad |
|-----|---------|-----------------|
| QA Lead | Javier Montano | Ejecutar checks, aprobar/bloquear |
| Content Owner | Javier Montano | Validar contenido y pricing |
| Brand Guardian | MetodologIA | Red-list, voz, disclaimers |
| Operador Local | Cristian Jarrin | Validar datos Ecuador (IVA, pagos) |

### Frecuencia
- **Pre-entrega**: Todos los checks antes de compartir cualquier archivo
- **Post-cambio**: Checks criticos (QA-01 a QA-04) despues de cada edicion
- **Semanal**: Revision completa si hay multiples cambios

### Registro
- Resultados de QA se registran en commits con tag `[QA]`
- Issues encontrados se documentan en GitHub Issues
- Fixes se hacen en branch `qa/fix-*` con PR

---

## 6. Single Source of Truth

`content.json` es la fuente unica. Si un dato difiere entre archivos:
1. `content.json` tiene la razon
2. El archivo divergente se corrige
3. Se regeneran exports (DOCX/XLSX/PPTX)
4. Se verifica con QA-01 a QA-04

---

## 7. Definition of Done

Un archivo esta "listo para entregar" cuando:
- [ ] QA-01 a QA-04 pasan (0 criticos)
- [ ] QA-05 a QA-08 pasan (0 altos)
- [ ] Revisado visualmente en browser/viewer
- [ ] ES y EN verificados
- [ ] Commit con mensaje descriptivo
- [ ] Push a ambos repos (publico + privado)

---

*Construido por profesionales, potenciado por la red agéntica de MetodologIA.*
