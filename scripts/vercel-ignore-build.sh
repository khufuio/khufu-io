#!/usr/bin/env bash
# Vercel "Ignored Build Step" for the khufu-showcase project (called from vercel.json, which
# cannot hold comments). Contract: exit 0 = skip the deployment, anything else = build.
# Rule cmw2hq69: a push that touches only scripts, tests, docs or CI config deploys nothing.
#
# Adapted from clokizi's scripts/vercel-ignore-build.sh, for an app at the repo root (no apps/).
# Why not turbo-ignore / `git diff HEAD^`: Vercel clones shallow and HEAD^1 only sees the LAST
# commit, so a push whose last commit is outside the site would be skipped silently. We fetch
# VERCEL_GIT_PREVIOUS_SHA (last successful deployment of this project + branch) and diff it
# against HEAD.
#
# FAIL-OPEN: empty or unfetchable previous SHA, any git error → build.
# A useless build costs a minute; a skipped one leaves prod silently stale.

# dev pushes never deploy (preview builds on dev are not wanted).
[ "${VERCEL_GIT_COMMIT_REF:-}" = dev ] && { echo "skip: dev branch"; exit 0; }

prev="${VERCEL_GIT_PREVIOUS_SHA:-}"
[ -n "$prev" ] || { echo "build: no previous deployment SHA"; exit 1; }

root="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "build: not a git checkout"; exit 1; }
cd "$root" || exit 1

if ! git cat-file -e "$prev^{commit}" 2>/dev/null; then
  git fetch --quiet --depth=1 origin "$prev" 2>/dev/null || { echo "build: cannot fetch $prev"; exit 1; }
  git cat-file -e "$prev^{commit}" 2>/dev/null || { echo "build: $prev still missing"; exit 1; }
fi

# Everything `next build` reads. The sitemap's source hashing (src/lib/sitemapPages.ts) and the
# icon font (src/assets/fonts) stay under src/. Excluded by omission — nothing in the build
# imports them: docs/ marketing/ ads/ assets/ scripts/ (except this one) TODO.md README.md
# .github/ eslint.config.mjs. This script and vercel.json are listed so a change to them redeploys.
paths=(
  src
  public
  package.json
  package-lock.json
  next.config.ts
  postcss.config.mjs
  tsconfig.json
  .nvmrc
  vercel.json
  scripts/vercel-ignore-build.sh
)

git diff --quiet "$prev" HEAD -- "${paths[@]}"
case $? in
  0) echo "skip: nothing under ${paths[*]} changed since $prev"; exit 0 ;;
  1) echo "build: changes since $prev"; git diff --stat "$prev" HEAD -- "${paths[@]}" | tail -1; exit 1 ;;
  *) echo "build: git diff failed"; exit 1 ;;
esac
