#!/bin/bash
# install-skill.sh — Instala el skill metodologia-catalogo-ops en Claude Code, Claude Desktop o Cowork
# Uso: bash install-skill.sh [destino]
# Destino: "code" (Claude Code), "desktop" (Claude Desktop), "cowork" (Cowork), "all" (todos)

set -e

SKILL_NAME="metodologia-catalogo-ops"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_SOURCE="$SCRIPT_DIR"

# Destinos
CLAUDE_CODE_DIR="$HOME/.claude/skills/$SKILL_NAME"
CLAUDE_DESKTOP_DIR="$HOME/.claude/skills/$SKILL_NAME"  # Shared location
PROJECT_DIR=".claude/skills/$SKILL_NAME"  # Per-project

DEST="${1:-all}"

install_skill() {
    local target_dir="$1"
    local label="$2"
    
    echo "→ Installing $SKILL_NAME to $label ($target_dir)..."
    
    mkdir -p "$target_dir/references"
    mkdir -p "$target_dir/scripts"
    
    # Copy SKILL.md
    cp "$SKILL_SOURCE/SKILL.md" "$target_dir/SKILL.md"
    
    # Copy references
    for ref in "$SKILL_SOURCE/references/"*.md; do
        if [ -f "$ref" ]; then
            cp "$ref" "$target_dir/references/"
            echo "  ✓ $(basename "$ref")"
        fi
    done
    
    # Copy scripts
    for script in "$SKILL_SOURCE/scripts/"*; do
        if [ -f "$script" ]; then
            cp "$script" "$target_dir/scripts/"
            chmod +x "$target_dir/scripts/$(basename "$script")"
            echo "  ✓ $(basename "$script")"
        fi
    done
    
    echo "  ✓ Skill installed at $target_dir"
}

install_claude_md() {
    local target_dir="$1"
    local label="$2"
    local claude_md_target
    
    if [ "$label" = "project" ]; then
        claude_md_target="./CLAUDE.md"
    else
        claude_md_target="$HOME/.claude/CLAUDE.md"
    fi
    
    if [ -f "$claude_md_target" ]; then
        echo ""
        echo "⚠ CLAUDE.md already exists at $claude_md_target"
        echo "  The MetodologIA CLAUDE.md has been saved as CLAUDE-metodologia.md"
        echo "  Merge manually or append content."
        cp "$SKILL_SOURCE/CLAUDE.md" "$(dirname "$claude_md_target")/CLAUDE-metodologia.md"
    else
        cp "$SKILL_SOURCE/CLAUDE.md" "$claude_md_target"
        echo "  ✓ CLAUDE.md installed at $claude_md_target"
    fi
}

echo "=========================================="
echo " MetodologIA Catalogo Ops — Skill Installer"
echo "=========================================="
echo ""

case "$DEST" in
    code|desktop)
        install_skill "$CLAUDE_CODE_DIR" "Claude Code / Desktop (global)"
        install_claude_md "$CLAUDE_CODE_DIR" "global"
        ;;
    project)
        install_skill "$PROJECT_DIR" "project-level"
        install_claude_md "$PROJECT_DIR" "project"
        ;;
    all)
        install_skill "$CLAUDE_CODE_DIR" "Claude Code / Desktop (global)"
        install_claude_md "$CLAUDE_CODE_DIR" "global"
        if [ -d ".git" ] || [ -d "catalogo-servicios" ]; then
            install_skill "$PROJECT_DIR" "project-level"
            install_claude_md "$PROJECT_DIR" "project"
        fi
        ;;
    *)
        echo "Uso: bash install-skill.sh [code|desktop|project|all]"
        exit 1
        ;;
esac

echo ""
echo "=========================================="
echo " Installation complete"
echo "=========================================="
echo ""
echo "Quick start commands for Claude Code:"
echo ""
echo '  claude "catalogo full-verification"'
echo '  claude "catalogo derive-all workshop-de-ocupado-a-productivo"'
echo '  claude "catalogo audit comercial-cliente-b2b.md"'
echo '  claude "catalogo propose: empresa de logistica, 50 personas, quieren estandarizar uso de IA en operaciones"'
echo '  claude "catalogo innovate: bootcamp especializado en IA para equipos de ventas B2B del sector farmaceutico"'
echo ""
echo "For unattended operation:"
echo '  claude -p "Lee el catalogo completo, ejecuta full-verification, y produce el reporte de calidad en catalogo-servicios/reportes/"'
echo ""
