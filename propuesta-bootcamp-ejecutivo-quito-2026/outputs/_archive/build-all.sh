#!/bin/bash
# ============================================================
# MetodologIA — Proposal Build Pipeline
# Bootcamp Ejecutivo Ag\u00e9ntico — Quito 2026
# ============================================================
# Usage: bash outputs/scripts/build-all.sh
# Prereqs: node >= 18, npm packages: docx, pptxgenjs
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/outputs"

echo "=========================================="
echo " MetodologIA Proposal Build Pipeline"
echo "=========================================="
echo ""

# Step 1: Check dependencies
echo "[1/4] Checking dependencies..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is required. Install from https://nodejs.org"
    exit 1
fi

# Step 2: Install npm dependencies if needed
echo "[2/4] Installing npm dependencies..."
cd "$SCRIPT_DIR"
if [ ! -d "node_modules" ]; then
    npm init -y > /dev/null 2>&1
    npm install docx pptxgenjs > /dev/null 2>&1
    echo "  -> Dependencies installed."
else
    echo "  -> Dependencies already installed."
fi

# Step 3: Generate DOCX files
echo "[3/4] Generating DOCX files..."
node "$SCRIPT_DIR/md-to-docx.js"
echo "  -> DOCX files generated."

# Step 4: Generate PPTX files
echo "[4/4] Generating PPTX files..."
node "$SCRIPT_DIR/md-to-pptx.js"
echo "  -> PPTX files generated."

echo ""
echo "=========================================="
echo " Build complete!"
echo "=========================================="
echo ""
echo "Generated files:"
echo "  HTML:  $OUTPUT_DIR/dossier-bootcamp-ejecutivo-quito-2026.html"
echo "  ES MD: $OUTPUT_DIR/es/propuesta-ejecutiva-es.md"
echo "         $OUTPUT_DIR/es/propuesta-detallada-es.md"
echo "  EN MD: $OUTPUT_DIR/en/propuesta-ejecutiva-en.md"
echo "         $OUTPUT_DIR/en/propuesta-detallada-en.md"
echo "  DOCX:  $OUTPUT_DIR/es/*.docx, $OUTPUT_DIR/en/*.docx"
echo "  PPTX:  $OUTPUT_DIR/es/pitch-deck-es.pptx"
echo "         $OUTPUT_DIR/en/pitch-deck-en.pptx"
echo ""
echo "Verification: verification/verification-report.md"
