## Redesign Plan — GlobalPulseWorld.xyz v2

The uploaded HTML reframes the brand from a soft white/teal minimal site into a **dark editorial intelligence product**: deep navy background, amber accent, serif (Playfair Display) + mono (IBM Plex Mono) typography, an animated canvas world map behind everything, and new commercial sections (live stats ticker, daily PulseReport preview, intel tiers).

### 1. Design system overhaul
- **Colors** (index.css): replace light theme with dark — `--background` deep navy `#060c17`, `--foreground` warm gray `#d4cfc4`, `--primary` amber `#c8903a` / `--primary-bright` `#e8a835`, `--accent` red `#e05050`, plus tokens for teal `#2dd4a8`, blue `#4a90d4`, muted `#5a6070`, hairline borders.
- **Typography** (tailwind.config + index.html): swap Inter/Lato for **Playfair Display** (serif, headings with italic accents) + **IBM Plex Mono** (labels/UI) + **IBM Plex Sans** (body). Add `font-serif`, `font-mono`, `font-sans` mappings.
- **Utilities**: hairline `0.5px` borders, `fadeUp` keyframe, blinking colon, ticker scroll keyframe.

### 2. New components
- `WorldMapCanvas.tsx` — fixed full-viewport `<canvas>` rendering land-dot world map + animated pulse rings on ~15 country points (port the JS verbatim into a `useEffect`).
- `LiveTicker.tsx` — infinite horizontal scroll of country sentiment items.
- `LiveStatsStrip.tsx` — animated counters (195 countries, messages today, active regions, pulse score).
- `PulseReportCard.tsx` — daily report preview: date, global score 6.4, regional bars, theme pills.
- `IntelTiers.tsx` — 3-card grid (Public Pulse / PulseIntel / PulseEnterprise) with featured middle card.
- Restyle existing `CountdownTimer` to mono numerals with blinking colons and amber glow.

### 3. Page rewrites
- **Home** (`src/pages/Home.tsx`): replace fully — hero (eyebrow line, italicized "Heartbeat" headline, timer, dual CTAs), live stats strip, ticker, "Why the reset is the product" 3-card section, PulseReport section, intel tiers strip, closing CTA.
- **Header** (`Header.tsx`): mono `GLOBAL PULSE` logo, simplified nav (How it works / Intelligence / About / Roadmap), amber "Enter today's pulse →" pill button linking to pulsechat.online.
- **Footer**: mono style, `GLOBALPULSEWORLD.XYZ` + links + © line.
- **About / Roadmap / Podcast**: keep current copy/structure but reskin with the new dark tokens and serif headings — no content rewrites.

### 4. Layout
- `Layout.tsx` wraps children with the canvas mounted once at root so all pages share the animated map background; sections use `relative z-10` over it.

### 5. Cleanup
- Remove `world-map.png` background hack from current Home (replaced by canvas).
- Remove unused `PulseLine` from Home if not referenced elsewhere; keep for Roadmap.

### Out of scope
- No real backend — counter numbers and report data stay as static mocked values matching the mockup.
- No new routes; `/podcast`, `/about`, `/roadmap` keep their current content with only the visual reskin.

### Open questions before I build
1. **Intelligence tiers + PulseReport** — these introduce a commercial/B2B angle (license, API, mailto enterprise). Earlier briefs framed the site as humanity-first and avoided "metrics/corporate" language. Confirm you want this commercial layer included on the public Home page?
2. **Mocked live numbers** (148,302 messages, 6.4 score, country ticker) — keep as static mock matching the design, or omit until real data exists?
3. **Other pages** — reskin only, or also rewrite About/Roadmap copy to match the new "intelligence product" framing?
