---
name: DEV. CALDERON
description: Portfolio of Mark Calderon, Senior Frontend Developer. A plain, exact record of shipped work.
colors:
  cobalt: "oklch(0.52 0.2 262)"
  cobalt-bright: "oklch(0.72 0.15 262)"
  ink: "oklch(0.17 0.02 262)"
  night: "oklch(0.155 0.018 262)"
  slate: "oklch(0.5 0.02 262)"
  haze: "oklch(0.72 0.02 262)"
  hairline: "oklch(0.915 0.01 262)"
  mist: "oklch(0.965 0.008 262)"
  paper: "oklch(0.995 0.003 262)"
  hairline-dark: "oklch(0.97 0.01 262 / 11%)"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.01em"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  signature:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  pill: "1.625rem"
spacing:
  chip-y: "0.375rem"
  chip-x: "0.75rem"
  gutter-mobile: "1rem"
  gutter: "1.5rem"
  block: "2.5rem"
  section-mobile: "6rem"
  section: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "0 1rem"
    height: "2.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 1rem"
    height: "2.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
  badge-current:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.125rem 0.5rem"
    height: "1.25rem"
  tech-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "{spacing.chip-y} {spacing.chip-x}"
  project-frame:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.xl}"
---

# Design System: DEV. CALDERON

## Overview

**Creative North Star: "The Shipped Ledger"**

The site is a plain, exact record of work delivered. Every section reads like a ledger entry: what was built, for whom, when, and what it did. One cobalt accent marks what you can act on and how the story is structured; the atmosphere behind each scene borrows its colour from the work being shown, so the proof still leads.

Precise and confident, not cold. Precision comes from Geist, a neo-grotesk with exact tabular numerals; warmth comes from the typed-out name in the header and copy written in first-hand plain language. Confidence comes from scale and restraint: one large title, generous section spacing, and no decoration asking for attention. Density is moderate. Each block answers one question and stops.

Depth is flat. Structure comes from spacing first, then hairline rules and 1px rings. Cards are not the default container; content groups by proximity.

**Key Characteristics:**
- Cobalt accent on cobalt-tinted neutrals; scene atmosphere tinted from each project's own palette.
- Geist throughout; Geist Mono reserved for the typed signature.
- Flat surfaces, hairline dividers, 1px rings around imagery.
- Left-aligned, single 64rem column with large vertical rhythm.
- Light and dark follow the system setting, same hierarchy in both.

## Colors

Neutrals carry a faint cobalt tint (hue 262) so greys never read dead. One accent, cobalt, for interaction and structure.

### Accent
- **Cobalt** (`cobalt`): primary button, Current badge, active menu item, link underlines, focus ring, outline numerals, timeline thread. Light mode on Paper with white text.
- **Cobalt Bright** (`cobalt-bright`): the same roles in dark mode, on Night with near-black text.

### Neutral
- **Ink** / **Paper**: text and background in light mode; swap roles in dark (Night background).
- **Slate** (light) / **Haze** (dark): secondary text. Both pass 4.5:1 on their background.
- **Hairline** / **Hairline Dark**: borders, dividers, inputs.
- **Mist**: placeholders, ghost hover, muted surfaces.

### Atmosphere
Two soft radial glows behind the 3D world. Each scene sets two hues: brand cobalt for Intro and Contact, hues sampled from each project's screenshot for Work, warm amber for Experience, cool teal for Stack. The driver blends them as oklab directions while flying, so transitions fade through neutral rather than detouring through unrelated hues.

### Named Rules
**The One Accent Rule.** Cobalt is the only UI accent. It marks things you can act on and the structure of the story (timeline, numerals). Never use it as decoration on body text or backgrounds.

**The Quiet Sky Rule.** Atmosphere chroma stays at or below 0.1 and never sits behind copy without the scrim. If a glow makes text harder to read, the glow loses.

**The Icon Contrast Rule.** Tech brand icons keep their brand hue, but any hue at 600 or darker gets a 400-level `dark:` variant so it holds 3:1 on Night.

## Typography

**Display Font:** Geist (with system-ui, sans-serif)
**Body Font:** Geist (with system-ui, sans-serif)
**Label/Mono Font:** system monospace, signature only

**Character:** One humanist family at three weights does all the work. Hierarchy comes from size and colour step (Ink vs Graphite), not from mixing families.

Root size is 18px at widths above 1024px and 16px below, so every rem value scales with it.

### Hierarchy
- **Display** (500, 3.75rem desktop / 2.25rem mobile, line-height 1, tracking -0.025em, balanced): the hero title only. One per page.
- **Headline** (500, 1.875rem desktop / 1.5rem mobile, tracking -0.025em): section titles (Projects, Experience, Technical profile).
- **Title** (500, 1.125rem; 1.5rem for the featured project, tracking -0.025em): project names, role titles.
- **Lead** (400, 1.25rem desktop / 1.125rem mobile, line-height 1.625, Ink at 80%): the one-sentence hero summary.
- **Body** (400, 1rem or 0.875rem, line-height 1.625, max 65ch): descriptions and summaries, in Graphite.
- **Label** (400-500, 0.875rem): categories, dates, company lines, chip text, group headings. Sentence case, never uppercase-tracked.
- **Signature** (500, 0.875rem, monospace): the typed "Mark Calderon" in the header, revealed with a stepped typing animation and caret.

### Named Rules
**The No Eyebrow Rule.** No small uppercase tracked labels above headings. Headings stand alone; a short sentence-case description may sit under them.

**The One Family Rule.** Geist for everything except the header signature. Monospace never appears as "technical" decoration elsewhere.

## Layout

Single left-aligned column, max width 64rem, centred in the viewport, with side gutters of 1rem on mobile and 1.5rem from 640px. Header is a 4rem bar: signature left, contact icons right, always one line.

Vertical rhythm is deliberately uneven: 6rem between sections on mobile, 8rem from 768px; 2.5rem between a section heading and its content; 0.5rem between a heading and its description. Hero has 2.5rem top padding on mobile, 5rem from 768px.

Patterns by content:
- **Projects:** one featured row (image 3/5, text 2/5) above a 2-column grid of the rest. Collapses to one column under 640px (grid) and 768px (featured row).
- **Experience:** ledger rows, 11rem date column plus content column from 768px; stacked on mobile. Hairline top border between rows, none on the first.
- **Technical profile:** 2fr chips column plus 1fr leadership column from 768px; stacked on mobile.

**The Exact Cell Rule.** Grids hold exactly as many cells as there is content. Five projects means one featured plus four, never a lone orphan tile.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from tonal steps (Paper vs Mist, Ink vs Charcoal), 1px rings around imagery, and hairline borders on chips and ledger rows.

### Named Rules
**The No Shadow Rule.** No `box-shadow` at rest or on hover. If something needs separation, add space first, then a hairline. A shadow is never the answer.

## Shapes

Gently rounded throughout, from one base radius of 0.625rem. Imagery uses the larger 0.875rem corner; buttons and chips use 0.625rem; badges are full pills. Borders are always 1px. Project screenshots are cropped to their top edge (`object-position: top`) inside fixed 16:9 (featured) or 16:10 (grid) frames.

## Components

### Buttons
Refined and restrained; they look like controls, not banners.
- **Shape:** gently rounded (0.625rem), 2.25rem tall, 1rem side padding, icon on the left at 1rem.
- **Primary:** Ink Soft fill, Paper text ("Email me"). One primary per view.
- **Ghost:** transparent, Ink text, Mist fill on hover ("View projects", header icon buttons).
- **Hover / Focus:** colour change only, plus a 1px press-down on active. Focus shows a 3px ring in Ash at 50%.

### Chips (tech stack)
- **Style:** Paper fill, 1px Hairline border, 0.625rem radius, brand-coloured icon at 1rem plus visible name in Label type.
- **State:** static, no hover. They are a list, not controls.

### Badges
- **Style:** full pill, 1.25rem tall, 0.75rem text. Filled Ink Soft for "Current"; outline variant (Hairline border, Ink text) for leadership skills.

### Project tile (signature)
The whole tile is one link opening the live site in a new tab.
- **Frame:** Mist placeholder, 0.875rem radius, 1px ring of Ink at 10%, screenshot cropped to top.
- **Text:** category in Label/Graphite, name in Title/Ink with an up-right arrow, description in Body/Graphite.
- **Hover:** screenshot scales to 1.03 over 500ms ease-out; arrow nudges up-right and darkens. Both disabled under reduced motion.
- **Focus:** 3px Ash ring offset 4px from the tile.

### Experience ledger row
- **Structure:** date range (Label, tabular numerals) | title with optional "Current" badge, company (Ink 80%), location (Graphite), summary (Body, max 65ch).
- **Divider:** 1px Hairline top border, 2rem vertical padding.

### Navigation
- **Header:** signature left, ghost icon buttons (LinkedIn, email) right, 4rem tall, no background, no sticky behaviour.
- **Footer:** hairline top border, languages left, email as an underlined text link right (underline offset 4px, Hairline underline darkening to Ink on hover).

## Do's and Don'ts

### Do:
- **Do** keep cobalt for actions and structure; let the atmosphere and the work supply the rest of the colour.
- **Do** group by spacing first; reach for a hairline only when spacing is not enough.
- **Do** keep every grid at exact cell count (featured plus pairs).
- **Do** give every interactive tile one link target, a visible focus ring, and a reduced-motion fallback.
- **Do** check light and dark at 375px and 1440px before calling a change done.

### Don't:
- **Don't** wrap sections in cards or nest cards inside cards.
- **Don't** add shadows or gradient text; the scene atmosphere is the only glow.
- **Don't** use uppercase tracked eyebrows or section numbers.
- **Don't** use monospace outside the header signature.
- **Don't** use em-dashes in any visible copy; use commas or hyphens.
- **Don't** ship full-page screenshots; crop to the visible top area and serve webp.
