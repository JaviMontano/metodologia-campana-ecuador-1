#!/bin/bash
# ============================================================
# MetodologIA — Proposal Build Pipeline v2
# Bootcamp Ejecutivo Agentico — Quito 2026
# ============================================================
# Usage: bash outputs/scripts/build-all-v2.sh
# Prereqs: node >= 18, npm packages: docx, pptxgenjs, exceljs
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/outputs"
EXPORT_DIR="$OUTPUT_DIR/export"
MD_DIR="$OUTPUT_DIR/md"

echo "=========================================="
echo " MetodologIA Proposal Build Pipeline v2"
echo "=========================================="
echo ""

# Step 1: Check dependencies
echo "[1/5] Checking dependencies..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is required. Install from https://nodejs.org"
    exit 1
fi
echo "  -> Node $(node -v) found."

# Step 2: Install npm dependencies if needed
echo "[2/5] Installing npm dependencies..."
cd "$SCRIPT_DIR"
npm install docx pptxgenjs exceljs --save 2>/dev/null
echo "  -> Dependencies ready."

# Step 3: Ensure export directory
mkdir -p "$EXPORT_DIR"

# Step 4: Generate DOCX files
echo "[3/5] Generating DOCX files..."
node "$SCRIPT_DIR/md-to-docx-v2.js"
echo "  -> DOCX files generated."

# Step 5: Generate PPTX files
echo "[4/5] Generating PPTX files..."
node "$SCRIPT_DIR/md-to-pptx-v2.js"
echo "  -> PPTX files generated."

# Step 6: Generate XLSX files
echo "[5/5] Generating XLSX files..."
node "$SCRIPT_DIR/content-to-xlsx.js"
echo "  -> XLSX files generated."

echo ""
echo "=========================================="
echo " Build v2 complete!"
echo "=========================================="
echo ""
echo "Generated files in $EXPORT_DIR:"
ls -la "$EXPORT_DIR" 2>/dev/null || echo "  (no files yet)"
echo ""
echo "Source MDs in $MD_DIR:"
ls "$MD_DIR"/*.md 2>/dev/null | xargs -I {} basename {}
echo ""
echo "HTMLs in $OUTPUT_DIR/html:"
ls "$OUTPUT_DIR"/html/*.html 2>/dev/null | xargs -I {} basename {}
