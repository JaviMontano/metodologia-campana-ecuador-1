# Inventario Maestro de Servicios

**Fecha:** 2026-03-29 | **Version:** 1.1 | **Total servicios:** 17 | **Estado:** Fase 0 (cimientos)
**Propietario:** Javier Montano | **Proxima revision:** 2026-04-15

---

## Decisiones de catalogo

| ID | Decision | Alternativa descartada | Justificacion |
|----|----------|------------------------|---------------|
| DC-01 | 17 canonicos separados (no consolidados por tipo) | Agrupar bootcamps en un solo canonico parametrizado | Cada servicio tiene alcance, precio, modulos y prerequisitos distintos. Un canonico parametrizado generaria condicionales excesivos y errores en derivadas. El costo de mantener 17 archivos es menor que el costo de errores por consolidacion. [DECISION: 2026-03-29, JM, canonico parametrizado descartado] |
| DC-02 | Linea IAC como white-label de MetodologIA (Tier 3 separado) | Integrar IAC como variantes de segmento de los servicios existentes | IAC tiene curriculo propio, precios diferenciados y marca independiente. No es una variante de segmento sino un producto distinto con origen distinto. Mantenerlo en Tier separado preserva trazabilidad de fuente y facilita negociacion independiente con IAC. [DECISION: 2026-03-29, JM, integracion como variante descartada] |
| DC-03 | Orden de prioridad: Tier 1 > Tier 2 > Tier 3 | Priorizar por margen o por volumen de ventas | Tier 1 ya tiene canonico .md (menor esfuerzo de normalizacion). Tier 2 requiere extraccion desde HTML. Tier 3 requiere alineacion con tercero (IAC). La priorizacion sigue el principio de menor friccion primero para validar el template antes de escalar. [DECISION: 2026-03-29, JM, priorizacion por margen descartada] |
| DC-04 | Servicio piloto: Workshop De Ocupado a Productivo (#1) | Bootcamp Trabajar Amplificado (#2) | El workshop es el servicio de menor duracion (3h), menor complejidad operativa y mayor volumen de ejecuciones. Permite validar template V2 con riesgo minimo. [DECISION: 2026-03-29, JM, piloto con bootcamp descartado] |

---

## Catalogo completo

### Tier 1 — Canonico .md existente (normalizar a Template V2)

**Fuente de contenido:** archivos .md raiz en `ESTRATEGIA/`. Confiabilidad: SSOT (maxima).

| # | Slug | Nombre canonico | Tipo | Cat. comercial | Duracion | Precio B2C (COP) | Precio B2B (COP) | Marca | Archivo fuente | Canonico | Derivadas | HTML |
|---|------|----------------|------|----------------|----------|-------------------|-------------------|-------|----------------|----------|-----------|------|
| 1 | `workshop-de-ocupado-a-productivo` | De Ocupado a Productivo | Workshop | Entrada | 3h | 200.000 | 3.000.000 (20 pax) | MetodologIA | `workshop-de-ocupado-a-productivo-canonico.md` | PILOTO | Pendiente | Pendiente |
| 2 | `bootcamp-trabajar-amplificado` | Bootcamp Trabajar Amplificado | Bootcamp | Profundizacion | 20h (18+2) | 800.000/persona | 12.000.000 (20 pax) | MetodologIA | `bootcamp-trabajar-amplificado-canonico.md` | Pendiente | Pendiente | Pendiente |
| 3 | `consultive-workshop-estrategia` | EstrategIA (Empresarial + Personal) | Consultive Workshop | Premium | 18h (9x2h) | 3.400.000 (1-3 pers) | 18.000.000 (10 pax) | MetodologIA | `consultive-workshop-estrategia-canonico.md` | Pendiente | Pendiente | Pendiente |
| 4 | `programa-digital-champions` | Programa Digital Champions | Programa | Transformacion | 16 sem / 48h | 18.000.000/persona | 35.000.000 (5-10 cohort) | MetodologIA | `programa-digital-champions-canonico.md` | Pendiente | Pendiente | Pendiente |
| 5 | `programa-empoderamiento` | Programa Empoderamiento | Programa | Transformacion | 16 sem / 48h | 18.000.000 | N/A (individual) | MetodologIA | `programa-empoderamiento-canonico.md` | Pendiente | Pendiente | Pendiente |

### Tier 2 — Solo HTML MetodologIA (extraer a canonico)

**Fuente de contenido:** archivos HTML en `MetodologIA-B2B/Outputs/b2b copy/`. Confiabilidad: media (requiere validacion cruzada con `bootcamps_data_reference.md`).

| # | Slug | Nombre canonico | Tipo | Cat. comercial | Duracion | Precio B2B (COP) | Marca | Fuente HTML | Canonico | Derivadas | HTML |
|---|------|----------------|------|----------------|----------|-------------------|-------|-------------|----------|-----------|------|
| 6 | `bootcamp-gerencia-proyectos` | Bootcamp Gerencia de Proyectos | Bootcamp | Profundizacion | 18h | 12.000.000 (20 pax) | MetodologIA | `MetodologIA-B2B/Outputs/b2b copy/bootcamp-gerencia-proyectos.html` | Pendiente | Pendiente | Existente |
| 7 | `bootcamp-ofimatica-google` | Bootcamp Ofimatica Google | Bootcamp | Profundizacion | 18h | 12.000.000 (20 pax) | MetodologIA | `MetodologIA-B2B/Outputs/b2b copy/bootcamp-ofimatica-google.html` | Pendiente | Pendiente | Existente |
| 8 | `bootcamp-ofimatica-microsoft` | Bootcamp Ofimatica Microsoft | Bootcamp | Profundizacion | 18h | 12.000.000 (20 pax) | MetodologIA | `MetodologIA-B2B/Outputs/b2b copy/bootcamp-ofimatica-microsoft.html` | Pendiente | Pendiente | Existente |
| 9 | `bootcamp-ventas-amplificadas` | Bootcamp Ventas Amplificadas | Bootcamp | Profundizacion | 18h | 12.000.000 (20 pax) | MetodologIA | `MetodologIA-B2B/Outputs/b2b copy/bootcamp-ventas-amplificadas.html` | Pendiente | Pendiente | Existente |

### Tier 3 — Linea IAC (white-label de MetodologIA)

**Fuente de contenido:** carpetas de curriculo en `IAC/`. Confiabilidad: alta para estructura; precios en `PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md`. Sin precio B2C definido para ningun servicio IAC. [POR CONFIRMAR: JM, 2026-04-15 — definir si IAC tendra modelo B2C]

| # | Slug | Nombre canonico | Tipo | Cat. comercial | Fuente IAC | Curriculo MetodologIA base | Canonico | Derivadas | HTML |
|---|------|----------------|------|----------------|------------|---------------------------|----------|-----------|------|
| 10 | `iac/bootcamp-ia-comercial` | Bootcamp IA Comercial | Bootcamp | Profundizacion | `IAC/1_bootcamp-ia-comercial-metodologia/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 11 | `iac/bootcamp-introduccion-ia-generativa` | Bootcamp Introduccion IA Generativa | Bootcamp | Entrada | `IAC/2_bootcamp-introduccion-ia-generativa/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 12 | `iac/programa-competencias-digitales-universales` | Programa Competencias Digitales Universales | Programa | Transformacion | `IAC/3_*competencias-digitales*/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 13 | `iac/programa-liderazgo-digital` | Programa Liderazgo Digital | Programa | Transformacion | `IAC/4_*liderazgo-digital*/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 14 | `iac/programa-transformacion-digital` | Programa Transformacion Digital | Programa | Transformacion | `IAC/5_*transformacion-digital*/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 15 | `iac/bootcamp-amplificacion-ia` | Bootcamp Amplificacion IA | Bootcamp | Profundizacion | `IAC/6_bootcamp-amplificacion-ia/` | Original IAC | Pendiente | Pendiente | Pendiente |
| 16 | `iac/bootcamp-ofimatica-ia-google` | Bootcamp Ofimatica IA Google | Bootcamp | Profundizacion | `IAC/7_*ofimatica-ia*google*/` | Bootcamp Ofimatica Google (#7) | Pendiente | Pendiente | Pendiente |
| 17 | `iac/bootcamp-ofimatica-ia-microsoft` | Bootcamp Ofimatica IA Microsoft | Bootcamp | Profundizacion | `IAC/7_*ofimatica-ia*microsoft*/` | Bootcamp Ofimatica Microsoft (#8) | Pendiente | Pendiente | Pendiente |

---

## Dependencias entre servicios

### Cadena de credito educativo

```
Workshop #1 (3h, 200K)
  └─ credito 100% ──> Bootcamp #2 (20h, 800K → 600K neto)
                        └─ credito parcial ──> EstrategIA #3 (18h)
                                                 └─ ──> Programa #4 o #5 (16 sem)
```

**Reglas de credito:**
- El credito aplica exclusivamente al siguiente nivel inmediato de la escalera de valor. [SUPUESTO: que no se permite saltar niveles | validar con politica comercial definitiva]
- El credito es sobre el valor pagado por el participante, no sobre el valor nominal del servicio.
- En B2B2B el credito se negocia en contrato marco (no aplica automaticamente). [POR CONFIRMAR: JM, 2026-04-15]

### Prerequisitos funcionales (no comerciales)

| Servicio destino | Prerequisito obligatorio | Prerequisito recomendado |
|-----------------|------------------------|-------------------------|
| Bootcamp Trabajar Amplificado (#2) | Ninguno | Workshop #1 |
| EstrategIA (#3) | Ninguno formal | Bootcamp #2 (para aprovechar frameworks) |
| Digital Champions (#4) | Entrevista de admision | EstrategIA #3 o experiencia equivalente |
| Empoderamiento (#5) | Entrevista de admision | Cualquier servicio previo |
| Bootcamps MetodologIA (#6-9) | Ninguno | Workshop #1 |
| Bootcamps IAC (#10-17) | Ninguno | Alineacion con la empresa contratante |

### Dependencias de contenido (Tier 3 sobre Tier 1/2)

| Servicio IAC | Depende de curriculo de | Impacto si el base cambia |
|-------------|------------------------|--------------------------|
| #16 Ofimatica IA Google | #7 Ofimatica Google | Requiere re-derivacion de modulos compartidos |
| #17 Ofimatica IA Microsoft | #8 Ofimatica Microsoft | Requiere re-derivacion de modulos compartidos |
| #10-15 | Curriculo original IAC | Sin dependencia sobre Tier 1/2 |

---

## Cobertura de segmentos

| # | Servicio | B2B | B2C | B2B2B co-brand | B2B2B white-label | Justificacion de exclusiones |
|---|----------|:---:|:---:|:--------------:|:-----------------:|------------------------------|
| 1 | De Ocupado a Productivo | Si | Si | Si | Si | Servicio universal, sin restricciones |
| 2 | Bootcamp Trabajar Amplificado | Si | Si | Si | Si | Servicio universal, sin restricciones |
| 3 | EstrategIA Empresarial | Si | -- | Si | Si | SKU empresarial; B2C usa SKU Personal |
| 3 | EstrategIA Personal | -- | Si | -- | -- | SKU individual exclusivo |
| 4 | Digital Champions | Si | Si* | Si | Si | *B2C solo en modelo multi-company (cohort abierto) |
| 5 | Empoderamiento | -- | Si | -- | -- | Servicio exclusivamente individual |
| 6-9 | Bootcamps MetodologIA | Si | Caso a caso | Si | Si | B2C requiere evaluacion de demanda individual por bootcamp |
| 10-17 | Bootcamps/Programas IAC | Si | -- | Si | Si | IAC es linea B2B; sin modelo B2C definido [POR CONFIRMAR: JM, 2026-04-15] |

---

## Riesgos del inventario

| ID | Riesgo | Probabilidad | Impacto | Mitigacion |
|----|--------|:------------:|:-------:|------------|
| RI-01 | Inconsistencia de precios entre fuentes (canonico .md vs HTML vs propuesta IAC vs extracto de precios) | Alta | Alto | Regla: el canonico .md de este catalogo prevalece. Toda discrepancia detectada se escala y resuelve antes de publicar derivadas. [EVIDENCIA: ya existen 4 fuentes de precios distintas en el repositorio] |
| RI-02 | Overlap funcional entre bootcamps (Trabajar Amplificado vs Ofimatica Google/MS vs Amplificacion IA) | Media | Medio | Cada canonico debe incluir seccion "1.3 Que NO es" con diferenciacion explicita respecto a servicios solapados. |
| RI-03 | Datos faltantes en Tier 3 (precios B2C, duraciones exactas, prerequisitos) | Alta | Alto | No publicar derivadas de Tier 3 hasta completar datos. Marcar todo como [POR CONFIRMAR] en canonicos IAC. |
| RI-04 | Desactualizacion de HTML Tier 2 respecto a operacion real | Media | Medio | Validar contenido HTML con facilitadores antes de extraer a canonico. Los HTML existentes son referencia, no SSOT. |
| RI-05 | Servicio piloto (#1) invalida el template V2, requiriendo re-trabajo en servicios ya migrados | Baja | Alto | Completar piloto (#1) integralmente antes de iniciar migracion de #2-#5. No paralelizar hasta validacion. |

---

## Ruta de servicios (escalera de valor)

```
ENTRADA              PROFUNDIZACION           PREMIUM              TRANSFORMACION
Workshop (3h)  ───>  Bootcamp (18-20h)  ───>  EstrategIA (18h)  ───>  Programa (16 sem)
#1 De Ocupado        #2 Trabajar Amplificado   #3 Empresarial        #4 Digital Champions
                     #6 Gerencia Proyectos     #3 Personal           #5 Empoderamiento
                     #7 Ofimatica Google
                     #8 Ofimatica Microsoft
                     #9 Ventas Amplificadas
                     #10-11,15-17 IAC Bootcamps
                                                                      #12-14 IAC Programas
```

---

## Matriz de versiones por servicio

Cada servicio produce hasta **9 archivos** (canonico + derivadas por segmento). Ver `00-guia-derivacion-versiones.md` para reglas de produccion y `00-guia-variantes-segmento.md` para reglas de segmentacion.

| Archivo | Descripcion | Segmentos | Guia de referencia |
|---------|-------------|-----------|-------------------|
| `canonico.md` | SSOT exhaustivo, agnostico de segmento | Todos | `00-template-canonico-servicio-v2.md` |
| `ejecutiva-b2b.md` | Resumen C-suite corporativo | B2B | Derivacion: Version 2 |
| `ejecutiva-b2c.md` | Resumen decision individual | B2C | Derivacion: Version 2 |
| `comercial-cliente-b2b.md` | Brochure comprador corporativo | B2B, B2B2B | Derivacion: Version 3 |
| `comercial-cliente-b2c.md` | Brochure comprador individual | B2C | Derivacion: Version 3 |
| `comercial-compras.md` | Ficha tecnica para procurement | B2B, B2B2B | Derivacion: Version 4 |
| `usuario-inexperto.md` | Explicacion sin jerga (unificado) | Todos | Derivacion: Version 5 |
| `b2b2b-cobranding.md` | Addendum co-branding sobre B2B | B2B2B co-brand | Variantes: Addendum |
| `b2b2b-whitelabel.md` | Addendum white-label sobre B2B | B2B2B white-label | Variantes: Addendum |

---

## Estados posibles

| Estado | Significado | Criterio de transicion |
|--------|-------------|----------------------|
| `Pendiente` | No iniciado | -- |
| `PILOTO` | En proceso como servicio piloto | Seleccionado para validar template |
| `En progreso` | Canonico en construccion | Archivo creado, trabajo activo |
| `Canonico OK` | Canonico completo y revisado | Pasa checklist del template V2 |
| `Derivadas OK` | Todas las versiones .md completas | Pasa checklist de derivacion por version |
| `HTML OK` | Migrado a HTML branded | HTML generado y revisado visualmente |
| `Publicado` | Disponible en web/oferta | Aprobado para uso comercial |

---

## Fuentes de contenido por tier

| Fuente | Ubicacion | Tier | Confiabilidad | Uso |
|--------|-----------|------|---------------|-----|
| Canonicos raiz (.md) | `ESTRATEGIA/*.md` | 1 | SSOT (maxima) | Base para normalizacion a Template V2 |
| HTML B2B MetodologIA | `MetodologIA-B2B/Outputs/b2b copy/*.html` | 2 | Media | Extraccion de contenido; requiere validacion cruzada |
| `bootcamps_data_reference.md` | `MetodologIA-B2B/Outputs/b2b copy/` | 2 | Media | Cross-reference de datos de bootcamps |
| `EXTRACTO_PRECIOS_SERVICIOS.md` | `MetodologIA-B2B/Outputs/` | 1,2 | Media | Cross-reference de precios; no es SSOT |
| Propuesta IAC Premium | `IAC/PROPUESTA_COMERCIAL_AGRUPADORA_IAC_PREMIUM.md` | 3 | Alta (precios IAC) | Fuente primaria de precios y estructura IAC |
| Carpetas curriculo IAC | `IAC/1_* a IAC/7_*` | 3 | Alta (contenido) | Fuente de modulos y estructura pedagogica IAC |

> **Regla de prevalencia:** en caso de discrepancia entre fuentes, el canonico .md de este catalogo prevalece. Si el canonico aun no existe, la fuente de mayor confiabilidad para ese tier prevalece. Toda discrepancia debe documentarse como [POR CONFIRMAR] en el canonico resultante.
