# Project Report: Soul Pulse Talk

Audit date: 2026-05-15

## Executive Summary

Soul Pulse Talk is a Vite, React, TypeScript, Tailwind CSS, and shadcn-ui style single-page marketing site for Global Pulse. The application combines static editorial content with live Pulse Chat telemetry, client-side routing, animated visual elements, and outbound calls to `pulsechat.online` and email.

The project builds successfully for production, but it is not yet in a clean release posture. The main blockers are a failing lint command, production dependency security advisories, disabled TypeScript strictness, and no automated test coverage.

## Current Project Shape

- Framework: Vite 5 with React 18 and React Router.
- Styling: Tailwind CSS with custom Global Pulse design tokens in `src/index.css`.
- UI system: shadcn/Radix-derived components under `src/components/ui`.
- Routes: `/`, `/about`, `/roadmap`, `/podcast`, and a catch-all 404 route.
- Runtime behavior: client-only countdown timer, canvas world map animation, ticker animation, and telemetry-backed report/stat displays.
- Data layer: `@tanstack/react-query` fetches Pulse Chat edge functions for globe stats, live feed, and generated highlights.

## Verification Results

| Check | Result | Notes |
| --- | --- | --- |
| `npm install` | Pass | Installed from existing lockfile. Reported 16 total vulnerabilities including dev dependencies. |
| `npm run build` | Pass | Built successfully after telemetry integration. Output JS is about 358.07 kB raw / 113.28 kB gzip. |
| `npm run lint` | Fail | 3 errors and 7 warnings. Errors are in `command.tsx`, `textarea.tsx`, and `tailwind.config.ts`. |
| `npm audit --omit=dev` | Fail | 10 production dependency advisories: 7 high and 3 moderate. |
| Automated tests | Not available | No test config or `*.test.*` / `*.spec.*` files were found. |

## Key Findings

### 1. Release Blocker: Lint Fails

`npm run lint` fails with three errors:

- `src/components/ui/command.tsx:24` declares an empty interface equivalent to `DialogProps`.
- `src/components/ui/textarea.tsx:5` declares an empty interface equivalent to `React.TextareaHTMLAttributes<HTMLTextAreaElement>`.
- `tailwind.config.ts:90` uses `require("tailwindcss-animate")`, which violates the configured TypeScript ESLint rule.

There are also seven Fast Refresh warnings in shadcn-derived UI files where files export both components and constants/helpers. These warnings do not block the current lint run, but they make the output noisy.

Recommended fix:

- Replace empty interfaces with type aliases.
- Convert the Tailwind plugin import to an ESM import.
- Decide whether to accept the shadcn Fast Refresh warnings or split variant exports into separate files.

### 2. Security: Production Dependency Advisories

`npm audit --omit=dev` reports 10 production advisories:

- High: `@remix-run/router` / `react-router` / `react-router-dom` XSS via open redirects.
- High: `lodash` prototype pollution and template code injection advisories.
- High: `glob`, `minimatch`, and `picomatch` advisories.
- Moderate: `brace-expansion`, `postcss`, and `yaml` advisories.

The most relevant app-facing issue is `react-router-dom` because the app depends directly on version `^6.30.1`. Run `npm audit fix` and review the lockfile diff. If React Router remains below the patched range, upgrade it intentionally.

### 3. Type Safety Is Weakened

`tsconfig.app.json` has strict checks disabled:

- `strict: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`
- `noImplicitAny: false`
- `noFallthroughCasesInSwitch: false`

This is acceptable for a prototype, but it reduces the value of TypeScript as the app grows. The current codebase is small enough that enabling stricter settings can be done incrementally without a large migration.

Recommended path:

1. Add a dedicated `typecheck` script: `tsc --noEmit`.
2. Turn on `strict` in a branch and fix surfaced issues.
3. Re-enable unused checks after the shadcn scaffold noise is handled.

### 4. No Automated Regression Coverage

No test files or test runner config were found. For the current static site, this is not catastrophic, but it means routing, rendering, and key CTAs can regress silently.

Recommended minimum coverage:

- Smoke test that all primary routes render without crashing.
- Link/CTA test for outbound Pulsechat and mailto targets.
- Basic visual or DOM smoke coverage for the home page hero, countdown, and report card.

### 5. Performance Risks Are Moderate And Mostly Visual

The app has an always-on full-screen canvas animation in `src/components/WorldMapCanvas.tsx`. It redraws every animation frame while mounted. The current number of points is small, so the desktop impact should be modest, but it still consumes battery and CPU continuously, including on mobile and background-like reading sessions.

Recommended improvements:

- Respect `prefers-reduced-motion`.
- Pause animation when `document.visibilityState !== "visible"`.
- Consider reducing frame rate or disabling the canvas on low-power/mobile contexts.

The production JS bundle is about 113.28 kB gzip. That is reasonable, but the dependency list includes many Radix/shadcn components that are not used in the app. Because Vite tree-shaking should remove most unused code, this is more of a maintenance concern than an immediate runtime issue.

### 6. Product Accuracy And Trust

The live-looking surfaces now read from the deployed Pulse Chat telemetry functions in `PrinceKeldon/pulse-chat`:

- `LiveTicker` aggregates the current `get-live-feed` response by country or region and dominant emotion.
- `LiveStatsStrip` reads today’s post totals, active region count, and emotion distribution from `get-globe-stats`.
- `PulseReportCard` reads regional distribution from `get-globe-stats` and AI-backed trends from `generate-highlights`.

The production data source defaults to `https://lrucwoqorqeywnjtdeif.supabase.co/functions/v1` and can be overridden with `VITE_PULSECHAT_FUNCTIONS_URL`. The global pulse score is still a local derived metric because Pulse Chat telemetry does not currently expose a dedicated score field.

### 7. Documentation Is Still Generic

`README.md` is the default Lovable project guide. It does not describe the actual product, routes, environment, verification commands, deployment expectations, or known limitations.

Recommended README additions:

- Product overview and route map.
- Local setup with npm.
- Verification commands: `npm run lint`, `npm run build`, and future `npm run typecheck`.
- Deployment notes.
- Telemetry source and `VITE_PULSECHAT_FUNCTIONS_URL` override.

## Maintainability Notes

- The home page is cohesive but contains large inline arrays and repeated CTA/link styling. Extracting repeated marketing section data and CTA classes would reduce future editing risk.
- `src/pages/Index.tsx` appears unused and still contains default placeholder content. Remove it if it is not part of routing.
- `NotFound` uses a different visual system than the rest of the site and logs every missing route to the console. Consider bringing it into `Layout` and removing or gating the console error.
- `QueryClientProvider` is now used by the Pulse Chat telemetry hooks.

## Prioritized Next Steps

1. Fix lint errors and add lint to CI.
2. Run `npm audit fix`, review dependency upgrades, and verify `react-router-dom` is patched.
3. Add a `typecheck` script and start tightening TypeScript settings.
4. Add route smoke tests with a lightweight React test setup or Playwright.
5. Update README to describe this actual project.
6. Add reduced-motion and visibility handling to the canvas animation.
7. Consider moving the derived global pulse score into Pulse Chat telemetry if it becomes a product metric.

## Overall Assessment

The app is a polished telemetry-backed prototype with a working production build. The highest-value work before broader release is hardening: clean lint, patched dependencies, basic tests, stricter TypeScript, and clearer documentation around the Pulse Chat telemetry contract.
