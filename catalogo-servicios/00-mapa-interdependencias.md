# Mapa de Interdependencias Documentales

**Version:** 1.0 | **Fecha:** 2026-03-29 | **Propietario:** Javier Montano

---

## 1) Diagrama de dependencias

```
DOCUMENTOS TRANSVERSALES (aplican a TODOS los servicios)
  00-template-canonico-servicio-v2.md ──► Define estructura de cada canonico
  00-glosario-catalogo.md ──► Define vocabulario de todos los documentos
  00-guia-editorial.md ──► Define tono/estilo de todos los documentos
  00-guia-derivacion-versiones.md ──► Define como producir derivadas desde canonicos
  00-guia-variantes-segmento.md ──► Define diferencias B2B/B2C/B2B2B
  00-dod-maestro.md ──► Define cuando algo esta "listo"
  00-inventario-maestro.md ──► Registra estado de cada servicio

FLUJO POR SERVICIO
  canonico.md (SSOT)
    ├── ejecutiva-b2b.md ──(derivada)
    ├── ejecutiva-b2c.md ──(derivada)
    ├── comercial-cliente-b2b.md ──(derivada)
    ├── comercial-cliente-b2c.md ──(derivada)
    ├── comercial-compras.md ──(derivada)
    ├── usuario-inexperto.md ──(derivada)
    ├── b2b2b-cobranding.md ──(addendum sobre B2B)
    └── b2b2b-whitelabel.md ──(addendum sobre B2B)

FLUJO OPERATIVO (aplica a TODOS los servicios)
  Anexo D (Orden) → Anexo E (Embajador) → Anexo F (Preparacion)
    → Anexo G (Memorias) → Anexo H (Cierre) → Anexo I (Post-venta)
    → Anexo J (Recompra 180d)
```

---

## 2) Tabla de sincronizacion (cuando un campo cambia)

Cuando un campo del canonico cambia, estas son las derivadas y documentos que se afectan:

| Campo que cambia en canonico | Documentos afectados | Accion requerida |
|------------------------------|---------------------|-----------------|
| **Nombre canonico** | TODOS (derivadas, inventario, anexos) | Renombrar en todos los documentos + directorio |
| **Precio B2B** | ejecutiva-b2b, comercial-cliente-b2b, comercial-compras, b2b2b-*, inventario | Actualizar cifra exacta en cada uno |
| **Precio B2C** | ejecutiva-b2c, comercial-cliente-b2c, usuario-inexperto, inventario | Actualizar cifra exacta |
| **Duracion** | TODAS las derivadas, inventario | Actualizar |
| **Modulos (agregar/eliminar)** | ejecutiva (tabla resumen), comercial-cliente (recorrido), compras (specs), usuario-inexperto (pasos) | Re-derivar seccion de arquitectura/recorrido |
| **SLA de soporte** | comercial-compras, canonico Sec 11, Anexo E | Sincronizar tiempos exactos |
| **Credito educativo (% o ventana)** | ejecutiva, comercial-cliente, inventario, Anexo I | Actualizar condiciones |
| **Garantia (condiciones)** | comercial-cliente, comercial-compras, Anexo H, Anexo I | Sincronizar |
| **Certificacion (tipo o condiciones)** | comercial-compras, usuario-inexperto, Anexo H | Actualizar |
| **Motor IA (default o restricciones)** | comercial-compras, usuario-inexperto, Anexo F | Actualizar |

**Regla:** cambio en canonico → cascada en max 48h (ver 00-guia-derivacion-versiones.md, Sec "Regla de actualizacion").

---

## 3) Cadena de creditos educativos

### Diagrama completo

```
Workshop DOAP (#1)
  └── 100% credito (6 meses, intransferible) ──► Bootcamp Trabajar Amplificado (#2)
        └── [POR CONFIRMAR] credito ──► EstrategIA Empresarial (#3-E) o Personal (#3-P)
        └── [POR CONFIRMAR] credito ──► Programas (#4, #5)

EstrategIA Personal (#3-P)
  └── [POR CONFIRMAR] credito ──► Programa Empoderamiento (#5)

Bootcamp Trabajar Amplificado (#2)
  └── Credito recibido desde: Workshop DOAP (#1) — 100%, 6 meses

Programa Empoderamiento (#5)
  └── Credito recibido desde: Bootcamp TA (#2), EstrategIA Personal (#3-P), u otros — 100%, 6 meses
```

### Reglas confirmadas vs pendientes

| Desde | Hacia | % | Ventana | Estado |
|-------|-------|---|---------|--------|
| Workshop DOAP (#1) | Bootcamp TA (#2) | 100% | 6 meses | **CONFIRMADO** [EVIDENCIA: canonico #1 Sec 12.6] |
| Bootcamp TA (#2) | EstrategIA (#3) | ? | ? | **POR CONFIRMAR** [JM, 2026-04-15] |
| Bootcamp TA (#2) | Programas (#4, #5) | ? | ? | **POR CONFIRMAR** [JM, 2026-04-15] |
| EstrategIA Personal (#3-P) | Empoderamiento (#5) | 100% | 6 meses | **CONFIRMADO** [EVIDENCIA: canonico #5 Sec 12.6] |
| Cualquier servicio | Bootcamp IAC (#10-17) | ? | ? | **POR CONFIRMAR** [JM, 2026-Q2] — IAC creditos se negocian por contrato marco |
| Bootcamps MetodologIA (#6-9) | Cualquier servicio | ? | ? | **POR CONFIRMAR** [JM, 2026-04-15] |

### Reglas transversales de creditos
- Acumulable con promociones: SI (confirmado en Workshop y Empoderamiento).
- Transferible entre personas: NO (intransferible — confirmado en Workshop).
- Descuento maximo: = gratis (no hay saldo a favor).
- Aplicacion: se descuenta de Cuota 1 del servicio destino.
- Activacion: contactar canales oficiales + solicitar cotizacion.

---

## 4) Inconsistencias de precios detectadas

| Servicio | Fuente 1 | Precio F1 | Fuente 2 | Precio F2 | Discrepancia | Resolucion |
|----------|----------|-----------|----------|-----------|-------------|-----------|
| EstrategIA Empresarial | canonico Sec 12.1 | COP 18.000.000 | bootcamps_data_reference.md | COP 15.000.000 | 3M diferencia | **Canonico prevalece** (COP 18M). Data reference era version anterior. |
| Bootcamp Gerencia Proyectos | canonico Sec 12.1 | COP 12.000.000 | HTML source | COP 12.000.000 | Ninguna | OK |
| Digital Champions | canonico #4 Sec 12 | COP 35M (cohort) / 18M (multi) | PROPUESTA IAC | COP 33M | 2M diferencia (cohort) | **Canonicos son servicios distintos:** #4 es MetodologIA (35M), #14 es IAC (33M). No es inconsistencia; son productos diferentes. Documentar en inventario. |
| Tasa USD | canonico Workshop #1 | COP 3.500 = USD 1 | canonico Gerencia #6 | COP 4.400 = USD 1 | Diferencia de tasa | **Pendiente unificacion.** [POR CONFIRMAR: JM — definir tasa unica de referencia para todo el catalogo] |

---

## 5) Referencias cruzadas requeridas (actualmente faltantes)

| Documento origen | Seccion | Referencia faltante | Documento destino | Accion |
|-----------------|---------|--------------------|--------------------|--------|
| Cada canonico, Sec 8 | Metodo de entrega | "Para flujo operativo completo" | Anexos D-G | Agregar referencia |
| Cada canonico, Sec 11 | Operacion | "Playbook del embajador" | Anexo E | Agregar referencia |
| Cada canonico, Sec 13 | Metricas | "KPI ultimo: recompra 180d" | Anexo J | Agregar como metrica lagging |
| Cada canonico, Sec 15 | Continuidad | "Protocolo de seguimiento post-venta" | Anexo I | Agregar referencia |
| Template V2 | Instrucciones | "Anexos operativos transversales" | 00-anexos-operativos/ | Agregar nota |
| Glosario | Todas las entradas | "Ver primera mencion contextualizada en" | Canonico donde se usa primero | Verificar en Ola 2 |

---

## 6) Dependencias entre servicios (prerequisitos funcionales)

| Servicio | Prerequisito obligatorio | Prerequisito recomendado | Siguiente paso natural |
|----------|------------------------|-------------------------|----------------------|
| #1 Workshop DOAP | Ninguno | Ninguno | #2 Bootcamp TA |
| #2 Bootcamp TA | Ninguno | #1 Workshop | #3 EstrategIA o #4/#5 Programas |
| #3 EstrategIA | Ninguno | #2 Bootcamp | #4 Digital Champions o #5 Empoderamiento |
| #4 Digital Champions | Ninguno | #2 o #3 | N/A (servicio terminal) |
| #5 Empoderamiento | Ninguno | #2 o #3-P | N/A (servicio terminal) |
| #6-9 Bootcamps MetodologIA | Ninguno | #1 Workshop | #3 EstrategIA |
| #10-17 Bootcamps/Programas IAC | Ninguno | Segun acuerdo con partner | Segun ruta IAC |

**Observacion:** ningun servicio tiene prerequisito obligatorio. Todos son "punto de entrada" con prerequisito recomendado. Esto es una decision de diseno para maximizar accesibilidad. `[DECISION: 2025, JM, descartada: hacer Workshop obligatorio antes de Bootcamp — limitaba conversion]`
