#!/usr/bin/env bash
set -euo pipefail

# Creates portable artifacts when outbound git push is blocked by a network/proxy.
# Usage: ./scripts/export-for-github.sh [branch] [output-dir]
BRANCH="${1:-$(git branch --show-current)}"
OUT_DIR="${2:-dist/github-export}"
REMOTE_URL="https://github.com/lucenthomelystay-creator/Opwise.git"

mkdir -p "$OUT_DIR"
BUNDLE="$OUT_DIR/opwise-${BRANCH}.bundle"
PATCH_DIR="$OUT_DIR/patches"
mkdir -p "$PATCH_DIR"

git bundle create "$BUNDLE" "$BRANCH"
git format-patch --output-directory "$PATCH_DIR" --root "$BRANCH" >/dev/null
cat > "$OUT_DIR/README.md" <<README
# Opwise GitHub export

This export was created because the execution environment blocks direct GitHub pushes.

## Preferred import

\`\`\`bash
git clone "$REMOTE_URL"
cd Opwise
git pull ../opwise-${BRANCH}.bundle "$BRANCH"
git push origin "$BRANCH:main"
\`\`\`

## Patch-only import

\`\`\`bash
git clone "$REMOTE_URL"
cd Opwise
git am ../patches/*.patch
git push origin HEAD:main
\`\`\`
README

echo "Created $BUNDLE and patch files in $PATCH_DIR"
