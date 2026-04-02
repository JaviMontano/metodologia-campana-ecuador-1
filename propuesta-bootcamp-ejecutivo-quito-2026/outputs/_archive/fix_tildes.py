#!/usr/bin/env python3
"""Smart tilde fixer for Spanish HTML files.
Uses context-aware regex to avoid false positives in EN text and brand names."""

import re
import sys

# Files to fix
FILES = [
    'dossier-cao-v1.1-excellence.html',
    'invitation-mobile-v1.1.html',
    'metodologia-desktop-v1.1.html',
]

# === SAFE REPLACEMENTS (no context needed) ===
SAFE = [
    # Names
    (r'Javier Montano', 'Javier Montaño'),
    (r'Cristhian Jarrin', 'Cristhian Jarrín'),
    # Proper nouns
    (r'\bSabado\b', 'Sábado'),
    (r'\bEdicion\b', 'Edición'),
    (r'\bIntencion\b', 'Intención'),
    # Verbs - unambiguous conjugations
    (r'\baccederan\b', 'accederán'),
    (r'\bcerrara\b', 'cerrará'),
    (r'\bhabra\b', 'habrá'),
    (r'\btendra\b', 'tendrá'),
    (r'\bpodra\b', 'podrá'),
    (r'\bestara\b', 'estará'),
    (r'\bsera\b', 'será'),
    (r'\bdebera\b', 'deberá'),
    (r'\brecibira\b', 'recibirá'),
    (r'\bpermitira\b', 'permitirá'),
    (r'\bincluira\b', 'incluirá'),
    (r'\boperara\b', 'operará'),
    (r'\biniciara\b', 'iniciará'),
    (r'\barrancara\b', 'arrancará'),
    # Nouns ending in -cion (unambiguous)
    (r'\bdecision\b', 'decisión'),
    (r'\bfuncion\b', 'función'),
    (r'\bcondicion\b', 'condición'),
    (r'\bconfirmacion\b', 'confirmación'),
    (r'\bpresentacion\b', 'presentación'),
    (r'\bcolaboracion\b', 'colaboración'),
    (r'\bimplementacion\b', 'implementación'),
    (r'\bautomatizacion\b', 'automatización'),
    (r'\bevaluacion\b', 'evaluación'),
    (r'\borganizacion\b', 'organización'),
    (r'\bintegracion\b', 'integración'),
    (r'\bconfiguracion\b', 'configuración'),
    (r'\bsuscripcion\b', 'suscripción'),
    (r'\bproduccion\b', 'producción'),
    (r'\bdescripcion\b', 'descripción'),
    (r'\bnavegacion\b', 'navegación'),
    (r'\bmotivacion\b', 'motivación'),
    (r'\bpoblacion\b', 'población'),
    # Other accented words
    (r'\bmas\b(?!\s+info)', 'más'),  # "mas" but not "mas info" (link text)
    (r'\btambien\b', 'también'),
    (r'\bdespues\b', 'después'),
    (r'\basí\b', 'así'),  # already correct but just in case
    (r'\brapido\b', 'rápido'),
    (r'\bunico\b', 'único'),
    (r'\bunica\b', 'única'),
    (r'\bpublico\b(?!\s*abierto)', 'público'),  # but keep "publico abierto" → "público abierto"
    (r'\bpublico abierto\b', 'público abierto'),
    (r'\bbasico\b', 'básico'),
    (r'\bbasica\b', 'básica'),
    (r'\bacademico\b', 'académico'),
    (r'\boperativa\b', 'operativa'),  # no accent needed
    (r'\bcronologico\b', 'cronológico'),
    (r'\bdinamico\b', 'dinámico'),
]

# === CONTEXT-AWARE: "esta" → "está" ===
# Only replace when followed by specific patterns that indicate verb usage
ESTA_VERB_PATTERNS = [
    r'esta por ',      # está por empezar
    r'esta llena',     # está llena
    r'esta lleno',
    r'esta disenado',  # está diseñado (already fixed but just in case)
    r'esta diseñado',
    r'esta dedicado',
    r'esta disponible',
    r'esta pensando',
    r'esta en ',       # está en convocatoria
    r'esta incluido',
    r'esta sujeto',
    r'esta libre',
    r'esta abierta',
    r'esta abierto',
    r' que esta ',     # "que está"
    r' ya esta ',      # "ya está"
    r' no esta ',      # "no está"
    r'esta co-creando',
]


def fix_esta(text):
    """Context-aware fix for esta→está"""
    for pattern in ESTA_VERB_PATTERNS:
        accented = pattern.replace('esta', 'está')
        text = text.replace(pattern, accented)
        # Also capitalize
        cap_pattern = pattern[0].upper() + pattern[1:]
        cap_accented = accented[0].upper() + accented[1:]
        text = text.replace(cap_pattern, cap_accented)
    return text


def protect_brands(text):
    """Protect brand names from tilde changes"""
    # Temporarily replace protected strings
    protections = {
        'MetodologIA': '§§METODOLOGIA§§',
        'metodologia.info': '§§METODOINFO§§',
        'contacto@metodologia': '§§CONTACTOMET§§',
    }
    for original, placeholder in protections.items():
        text = text.replace(original, placeholder)
    return text, protections


def restore_brands(text, protections):
    """Restore protected brand names"""
    for original, placeholder in protections.items():
        text = text.replace(placeholder, original)
    return text


def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Protect brands
    content, protections = protect_brands(content)

    # Apply safe replacements
    for pattern, replacement in SAFE:
        content = re.sub(pattern, replacement, content)

    # Apply context-aware esta→está
    content = fix_esta(content)

    # Restore brands
    content = restore_brands(content, protections)

    # Count changes
    changes = sum(1 for a, b in zip(original, content) if a != b)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return changes


if __name__ == '__main__':
    total = 0
    for f in FILES:
        changes = process_file(f)
        print(f'{f}: {changes} character changes')
        total += changes
    print(f'\nTotal: {total} character changes across {len(FILES)} files')
