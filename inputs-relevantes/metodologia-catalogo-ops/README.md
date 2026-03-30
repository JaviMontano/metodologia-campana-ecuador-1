# MetodologIA Catalogo Ops — Skill + Prompt

## Que es

Un skill para Claude Code (compatible con Claude Desktop y Cowork) que orquesta todas las operaciones del catalogo de servicios MetodologIA:

- **Derivar** documentos por segmento desde canonicos (SSOT → 8 versiones)
- **Verificar** coherencia de precios, estilo, referencias, glosario, DoD
- **Proponer** servicios a medida partiendo del ADN del catalogo
- **Innovar** nuevos servicios manteniendo coherencia de marca y valor
- **Auditar** textos para seguridad legal, comercial y de marca
- **Proteger** al equipo de sobre-compromisos y exposicion legal

## Instalacion

```bash
# Desde el directorio del skill:
bash scripts/install-skill.sh all

# Solo Claude Code global:
bash scripts/install-skill.sh code

# Solo nivel de proyecto:
bash scripts/install-skill.sh project
```

## Estructura del Skill

```
metodologia-catalogo-ops/
├── SKILL.md                              # Orchestrator principal (<500 lineas)
├── CLAUDE.md                             # Prompt maestro para Claude Code
├── README.md                             # Este archivo
├── references/
│   ├── derivation-matrix.md              # Que secciones van en cada version
│   ├── legal-safety-checklist.md         # 40+ checkpoints legales/comerciales
│   ├── brand-voice-rules.md              # Reglas de marca y voz
│   ├── innovation-framework.md           # Metodologia para propuestas a medida
│   └── verification-workflows.md         # Procedimientos de cross-check
└── scripts/
    └── install-skill.sh                  # Instalador multi-plataforma
```

## Prompts para Trabajo Desatendido (Claude Code)

### Verificacion completa del catalogo

```bash
claude -p "Ejecuta catalogo full-verification. Lee todos los documentos transversales en 00-transversales/, luego verifica cada servicio del inventario: DoD del canonico, cross-check de precios en todas las derivadas, compliance editorial, integridad de referencias, cobertura del glosario, y tracking de POR CONFIRMAR. Produce el reporte completo en catalogo-servicios/reportes/quality-report-$(date +%Y-%m-%d).md"
```

### Derivar todas las versiones de un servicio

```bash
claude -p "Ejecuta catalogo derive-all bootcamp-trabajar-amplificado. Lee el canonico como SSOT, aplica la derivation-matrix para cada version (ejecutiva-b2b, ejecutiva-b2c, comercial-cliente-b2b, comercial-cliente-b2c, comercial-compras, usuario-inexperto, b2b2b-cobranding, b2b2b-whitelabel). Verifica precios, estilo editorial, seguridad legal y brand safety en cada una. Guarda los archivos en el directorio del servicio. Produce reporte de derivacion."
```

### Auditar un documento especifico

```bash
claude -p "Ejecuta catalogo audit sobre catalogo-servicios/bootcamp-trabajar-amplificado/comercial-cliente-b2b.md. Aplica los 40+ checkpoints del legal-safety-checklist, las reglas de brand-voice-rules, y las 10 reglas de self-care del equipo. Produce un reporte RED/YELLOW/GREEN y una version corregida si hay items RED."
```

### Proponer servicio a medida

```bash
claude -p "Ejecuta catalogo propose con este brief: 'Empresa de logistica con 200 empleados. Quieren estandarizar el uso de IA en sus equipos de operaciones y servicio al cliente. Tienen ChatGPT Enterprise. Presupuesto de COP 40.000.000. Necesitan resultados en 3 meses. Ya hicieron un workshop basico con otro proveedor.' Lee todos los canonicos para mapear overlap/gap. Propone configuracion, combinacion o innovacion. Incluye auditoria de seguridad."
```

### Innovar un nuevo servicio

```bash
claude -p "Ejecuta catalogo innovate: 'Bootcamp especializado en IA para equipos comerciales del sector farmaceutico, enfocado en: generacion de propuestas tecnicas, analisis de territorio, y seguimiento de KOLs. Debe incluir compliance de datos de salud.' Diseña el servicio desde el ADN de MetodologIA. Produce draft de canonico, ficha rapida, y reporte de riesgo. Marca todo como POR CONFIRMAR."
```

### Sincronizar precios despues de un cambio

```bash
claude -p "Ejecuta catalogo sync-precios --report. Extrae todos los precios de cada canonico y compara contra todas las derivadas. Produce reporte de discrepancias. Si hay discrepancias, lista exactamente que archivos necesitan correccion y cual es el valor correcto segun el canonico."
```

### Resolver items POR CONFIRMAR

```bash
claude -p "Ejecuta catalogo por-confirmar --listar --priorizar. Lee 00-resolucion-por-confirmar.md y escanea todos los archivos del catalogo. Produce: (1) lista actualizada de todos los POR CONFIRMAR con estado, (2) items no registrados en el tracker, (3) items vencidos, (4) priorizacion por impacto."
```

## Prompts Interactivos (Claude Code / Desktop / Cowork)

### Sesion de trabajo completa

```
Vamos a trabajar en el catalogo MetodologIA. Primero carga el skill metodologia-catalogo-ops y lee los documentos transversales. Luego dame el estado actual: cuantos servicios tienen canonico completo, cuantos tienen derivadas, cuantos POR CONFIRMAR hay, y cuales son los blockers para release v1.
```

### Atencion a requerimiento de cliente

```
Un cliente me pide lo siguiente: [pegar requerimiento del cliente]. Usa el innovation framework para: (1) mapear contra servicios existentes, (2) proponer la mejor configuracion, (3) generar la propuesta en formato brand-ready, y (4) auditar que no me sobre-comprometa en nada.
```

### Review de texto antes de enviar

```
Antes de enviar esto al cliente, audita este texto: [pegar texto]. Verifica: (1) que no prometo nada que no pueda cumplir, (2) que los precios coinciden con el canonico, (3) que el tono es apropiado para la audiencia, (4) que no me expongo legalmente. Dame el resultado RED/YELLOW/GREEN.
```

## Capacidades Especiales

### Atencion de requerimientos totalmente a medida

El skill puede tomar CUALQUIER requerimiento de un cliente o prospect y:

1. **Mapear** contra los 17 servicios existentes del catalogo
2. **Identificar** el overlap (que ya cubre el catalogo) vs el gap (que falta)
3. **Proponer** la mejor ruta: configurar existente, combinar servicios, o disenar nuevo
4. **Generar** la propuesta completa en formato brand-ready
5. **Auditar** que no haya sobre-compromisos ni exposicion legal
6. **Presupuestar** dentro de las bandas de pricing del catalogo
7. **Marcar** todo lo nuevo como [POR CONFIRMAR] para validacion de JM

### Verificacion de autocuidado del equipo comercial

Cada documento pasa por 10 reglas de self-care:

| Regla | Que protege |
|-------|------------|
| SC-01 | No comprometer personalizaciones sin scope definido |
| SC-02 | No prometer tiempos de respuesta insostenibles |
| SC-03 | No aceptar entregables indefinidos |
| SC-04 | Proteger tiempo de preparacion del facilitador |
| SC-05 | Respetar limite de participantes por facilitador |
| SC-06 | Acotar soporte post-servicio |
| SC-07 | Separar "incluido" de "extra" siempre |
| SC-08 | No dejar que la urgencia anule la calidad |
| SC-09 | Documentar lo que NO se hace |
| SC-10 | Proteger propiedad intelectual siempre |

## Compatibilidad

| Plataforma | Instalacion | Modo desatendido | Modo interactivo |
|------------|:-----------:|:----------------:|:----------------:|
| Claude Code | `install-skill.sh code` | `claude -p "..."` | `claude` interactivo |
| Claude Desktop | `install-skill.sh desktop` | N/A | Chat interactivo |
| Cowork | `install-skill.sh project` | Task automation | Chat interactivo |

## Mantenimiento

- **Cuando agregar un servicio:** Actualizar `00-inventario-maestro.md`, crear canonical, ejecutar `derive-all`
- **Cuando cambiar un precio:** Actualizar canonical, ejecutar `sync-precios --fix`
- **Cuando resolver un POR CONFIRMAR:** Actualizar `00-resolucion-por-confirmar.md` Y el documento origen, ejecutar `por-confirmar --listar` para verificar
- **Cuando agregar un termino al glosario:** Actualizar `00-glosario-catalogo.md`, ejecutar verification de glossary coverage
- **Trimestralmente:** Ejecutar `full-verification` y producir quality report

---
**Autor:** Javier Montano | **Version:** 1.0 | **Fecha:** 2026-03-29
