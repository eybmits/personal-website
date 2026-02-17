#!/usr/bin/env bash
set -euo pipefail

REPO_SLUG="${GH_PAGES_REPO:-eybmits/eybmits.github.io}"
BRANCH="${GH_PAGES_BRANCH:-main}"
TMP_DIR="$(mktemp -d /tmp/gh-pages.XXXXXX)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

if [[ ! -d "dist" ]]; then
  echo "dist/ not found. Run: npm run build"
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this script from inside the repository."
  exit 1
fi

echo "Deploying dist/ to https://github.com/${REPO_SLUG}.git (${BRANCH})"
git clone "https://github.com/${REPO_SLUG}.git" "$TMP_DIR" >/dev/null

rsync -a --delete --exclude='.git' dist/ "$TMP_DIR/"
touch "$TMP_DIR/.nojekyll"

pushd "$TMP_DIR" >/dev/null
git add -A

if git diff --cached --quiet; then
  echo "No changes to deploy."
  popd >/dev/null
  exit 0
fi

git commit -m "Deploy site from personal-website"
git push origin "$BRANCH"
popd >/dev/null

echo "Deployment completed: https://${REPO_SLUG#*/}/"
