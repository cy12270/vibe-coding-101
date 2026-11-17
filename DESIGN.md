---
name: Vibe Coding 101
description: Swiss typographic museum placard and exhibition wall guide for a 4-lesson secondary school Vibe Coding presentation deck.
world: swiss-typographic-museum-placard
colors:
  signal-red: "#d92b2b"
  signal-red-deep: "#b91c1c"
  signal-red-tint: "#fef2f2"
  cobalt-blue: "#1d4ed8"
  cobalt-tint: "#eff6ff"
  forest-green: "#15803d"
  forest-green-tint: "#f0fdf4"
  gallery-white: "#ffffff"
  stone-paper: "#f4f4f1"
  carbon-ink: "#141414"
  charcoal-slate: "#404040"
  graphite-ash: "#525252"
  stone-hairline: "#d4d4ce"
  signal-coral: "#fca5a5"
typography:
  display:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans TC\", ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "8.75rem"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "\"Noto Sans TC\", -apple-system, BlinkMacSystemFont, \"PingFang TC\", \"Microsoft JhengHei\", sans-serif"
    fontSize: "2.75rem"
    fontWeight: 900
    lineHeight: 1.22
    letterSpacing: "-0.025em"
  title:
    fontFamily: "\"Noto Sans TC\", -apple-system, BlinkMacSystemFont, \"PingFang TC\", \"Microsoft JhengHei\", sans-serif"
    fontSize: "1.5rem"
    fontWeight: 900
    lineHeight: 1.32
  body:
    fontFamily: "\"Noto Sans TC\", -apple-system, BlinkMacSystemFont, \"PingFang TC\", \"Microsoft JhengHei\", sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans TC\", ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  code:
    fontFamily: "\"JetBrains Mono\", \"Noto Sans TC\", ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.90625rem"
    fontWeight: 500
    lineHeight: 1.55
rounded:
  none: "0px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "36px"
  3xl: "48px"
components:
  lesson-tab:
    backgroundColor: "{colors.stone-paper}"
    textColor: "{colors.graphite-ash}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 18px"
  lesson-tab-active:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.gallery-white}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 18px"
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.gallery-white}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-deep}"
    textColor: "{colors.gallery-white}"
    rounded: "{rounded.none}"
    padding: "11px 18px"
  button-nav:
    backgroundColor: "{colors.gallery-white}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "7px 12px"
  button-nav-hover:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.gallery-white}"
    rounded: "{rounded.none}"
    padding: "7px 12px"
  card-concept:
    backgroundColor: "{colors.gallery-white}"
    textColor: "{colors.carbon-ink}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
  pill-badge:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.gallery-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  prompt-bar:
    backgroundColor: "{colors.carbon-ink}"
    textColor: "{colors.stone-paper}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "18px 22px"
  note-bar:
    backgroundColor: "{colors.stone-paper}"
    textColor: "{colors.carbon-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "16px 22px"
---

# Design System: Vibe Coding 101

## Overview

**Creative North Star: "The Swiss Exhibition Wall Guide"**

This design system treats a 4-lesson introductory coding curriculum like a Swiss architectural museum placard and exhibition wall guide. Instead of dark-mode developer templates or dense syntax slides, it pairs a calm Warm Stone Paper structural frame with crisp Gallery White reading plates so instructors can project clearly to the back row of a classroom while students copy Cursor prompts from narrower screens.

Every slide sits inside a disciplined `2px` Carbon Ink grid: a persistent 4-lesson track rail at the top, a numbered exhibition placard on the left tracking time-boxed lesson pacing, a focused single-concept reading column on the right, and a keyboard-first control bar at the bottom. High-contrast color is rationed for active orientation, semantic conceptual coding (HTML, CSS, JS), and primary actions.

**Key Characteristics:**
- **Projection-scale legibility:** Heavyweight `Noto Sans TC` headings (`900`) and oversized `JetBrains Mono` lesson numerals (`00`–`04`) engineered for classroom readability at distance.
- **Architectural linework over shadows:** Zero drop shadows; spatial separation relies exclusively on `2px` Carbon Ink (`#141414`) structural borders and tonal contrast between Warm Stone Paper (`#f4f4f1`) and Gallery White (`#ffffff`).
- **Rationed semantic color:** Signal Red (`#d92b2b`) marks active navigation, primary actions, and JS/alert concepts, while Cobalt Blue (`#1d4ed8`) and Forest Green (`#15803d`) anchor CSS concepts and verified prompt outcomes.
- **Dual-audience utility:** Fixed `100dvh` stage on wide classroom displays (`> 1080px`) that reflows gracefully into a stacked, single-column reading scroll with a sticky footer on student laptops and mobile viewports (`<= 1080px` and `<= 560px`).

## Colors

A strictly high-contrast museum palette built on pure white reading surfaces, warm stone structural placards, and deep carbon ink, punctuated by three functional accents.

### Primary
- **Signal Red** (`#d92b2b`): Active lesson tab fill in the top rail, active overview card background, placard unit tag, step indices (`01`–`04`), primary CTA buttons (`.copy-btn`, `.demo-btn`), text selection highlight, keyboard focus ring, and `JS` / warning semantic pills.
- **Signal Red Deep** (`#b91c1c`): Hover state for Signal Red buttons, active step highlight inside the placard timeline, and the label inside classroom `.note-box` callouts.
- **Signal Red Tint** (`#fef2f2`): Soft background fill for `.bad-cell` columns in prompt-comparison tables (paired with `#7f1d1d` text for legible negative examples).

### Secondary
- **Cobalt Blue** (`#1d4ed8`): `CSS` concept pills, Step 02 preview pills, and the padding-layer border in the CSS Box-Model schematic.
- **Cobalt Tint** (`#eff6ff`): Translucent-feeling cool wash inside the CSS Box-Model padding layer.

### Tertiary
- **Forest Green** (`#15803d`): Copied-confirmation state on `.copy-btn.copied` and positive-outcome `.pill.green` badges.
- **Forest Green Tint** (`#f0fdf4`): Soft background fill for `.good-cell` columns in prompt-comparison tables (paired with `#14532d` text).

### Neutral
- **Gallery White** (`#ffffff`): Primary reading column background, concept cards (`.cell-box`), navigation buttons at rest, and inverted text on ink/red fills.
- **Warm Stone Paper** (`#f4f4f1`): Structural framing surfaces—top rail, left museum placard, bottom footer, muted cards, table header rows, inline `.mono-code` chips, `.note-box` bars, and light prompt copy text on dark code bars.
- **Carbon Ink** (`#141414`): Primary body/heading ink, outer shell and card `2px` borders (`--line`), brand block background, active layer toggles, dark Prompt Bar background (`--bg-code`), and interactive game canvas backdrop.
- **Charcoal Slate** (`#404040`): Secondary descriptive copy (`.lead`, `.placard-desc`, card paragraphs, and overview subtitles).
- **Graphite Ash** (`#525252`): Inactive rail tab labels, timeline timestamps, keyboard shortcut hints, and dashed margin boundaries in the CSS Box-Model schematic.
- **Stone Hairline** (`#d4d4ce`): Subtle `1px` internal dividers between inactive rail tabs, specification table rows, and inline `.mono-code` edges.
- **Signal Coral** (`#fca5a5`): High-contrast monospace label color used strictly inside dark Carbon Ink `.prompt-bar` containers.

### Named Rules
**The Rationed Signal Rule.** Signal Red (`#d92b2b`) is reserved for the active lesson indicator, active step indices, primary copy/play buttons, and focus rings; never flood reading plates with red backgrounds outside the active overview card.
**The Pure Plate Rule.** Keep the right reading column on Gallery White (`#ffffff`) and confine structural chrome (rail, placard, footer) to Warm Stone Paper (`#f4f4f1`) so slide content always reads with maximum projector contrast.

## Typography

**Display Font:** `JetBrains Mono` (with `"Noto Sans TC", ui-monospace, SFMono-Regular, Menlo, monospace`)
**Body Font:** `Noto Sans TC` (with `-apple-system, BlinkMacSystemFont, "PingFang TC", "Microsoft JhengHei", sans-serif`)
**Label/Mono Font:** `JetBrains Mono` (same stack as Display)

**Character:** Heavyweight `900`-weight Traditional Chinese headings establish instant visual authority from the back of a classroom, paired with crisp geometric `JetBrains Mono` numerals, lesson codes, and copyable Cursor commands using tabular lining figures.

### Hierarchy
- **Display** (`700`, `clamp(5.5rem, 9vw, 8.75rem)` desktop / `40px` at `<=1080px`, `line-height: 0.88`, `letter-spacing: -0.05em`, `tabular-nums`): Oversized exhibition lesson numeral (`00`–`04`) anchored in the left placard.
- **Headline** (`900`, `clamp(1.9rem, 3vw, 2.75rem)`, `line-height: 1.22`, `letter-spacing: -0.025em`, `max-width: 24ch`, `text-wrap: balance`): Single primary `<h1>` slide title at the top of the reading column.
- **Title** (`900`, `24px` placard / `22px` overview / `19px` card / `17px` step card, `line-height: 1.32–1.35`): Structural unit titles and card headings.
- **Body** (`400`, `clamp(1.05rem, 1.3vw, 1.22rem)` for `.lead` up to `68ch`; `15px` for placard description, cards, and notes; `14.5px` for table cells, `line-height: 1.5–1.65`): Primary instructional copy and comparison prose.
- **Label** (`700`, `12px` / `0.75rem`, `letter-spacing: 0.03em–0.08em`, `tabular-nums`): Monospace unit tags (`.unit-tag`), capsule badges (`.pill`), prompt/note labels, and overview metadata.
- **Code** (`500`, `14.5px` prompt text / `13.5px` inline `.mono-code`, `line-height: 1.55`): Copyable Cursor prompt text and inline HTML/shortcut tokens.

### Named Rules
**The Tabular Numerals Rule.** Every lesson index, timeline stamp, step counter, score readout, and `SLIDE XX / 17` indicator must set `JetBrains Mono` with `font-variant-numeric: tabular-nums` so numbers align vertically and never jitter when updating.
**The Balanced Headline Rule.** Slide `<h1>` headlines wrap with `text-wrap: balance` and cap at `24ch` (with `.lead` capped at `68ch`) to prevent awkward single-character orphans in Traditional Chinese projection.

## Layout

Desktop views (`> 1080px`) lock into a full-viewport `100dvh` (`overflow: hidden`) architectural grid framed by a `2px solid #141414` perimeter:
- **Top Rail (`64px` height):** Two-column grid (`280px` dark Carbon Ink `.brand` + `1fr` equal 4-column `.lesson-tabs`).
- **Split Stage (`1fr` height, `min-height: 0`):** Two-column grid pairing the `340px` Warm Stone Paper `.placard` on the left with the `1fr` Gallery White `.reading-column` on the right (`padding: 36px 48px`, vertically distributing `.slide-body` and the bottom `.prompt-box` / `.note-box` via `justify-content: space-between`). *(Note: the surface brief originally projected a `360px` placard; the shipped stylesheet settled on `340px` to preserve horizontal room for 3-column triads and comparison tables.)*
- **Bottom Footer (`52px` height):** Flex bar with bordered navigation buttons (`上一頁`, `下一頁`, `課程總覽`, `全螢幕`) on the left and keyboard hints plus `SLIDE XX / 17` on the right.

**Content Grids & Rhythm:**
- Spacing follows a `4px`/`8px` geometric rhythm: `8px` control gaps, `12px` compact card rhythm, `16px`–`20px` grid gaps (`triad`, `two-col`, `step-grid`, `dissector`), `24px` stage/cover spacing, and `36px 48px` reading-column inset.
- `.triad` renders 3 equal columns (`repeat(3, minmax(0, 1fr))`); `.two-col` and `.step-grid` render 2 equal columns; `.cover-layout` splits `1.1fr 0.9fr`; `.dissector` pairs a `260px` toggle stack with a `1fr` live preview stage.

**Responsive Breakpoints:**
- **`<= 1080px` (Tablet & Narrow Student Laptops):** `.shell` releases its fixed height (`height: auto; min-height: 100dvh; overflow: visible`). The top rail stacks `.brand` over a `2x2` `.lesson-tabs` grid; `.stage` collapses to `1fr`; `.placard` compresses (`padding: 16px 18px`, `.big-num` drops to `40px`, `.timeline` hides) so slide content appears immediately; `.cover-layout`, `.triad`, `.two-col`, `.dissector`, and `.step-grid` all collapse to `1fr`; `.prompt-box` stacks vertically with a full-width copy button; `.desktop-only` controls hide; and `.footer` locks as `position: sticky; bottom: 0`.
- **`<= 560px` (Mobile):** `.lesson-tabs` stacks into a single column (`1fr`); `.spec-table` cells tighten to `10px` padding (`13.5px` font); `.arc-item` shifts to `44px 1fr` and hides `.arc-time`; and `.footer` compacts to `10px 12px` padding with `6px 9px` `.nav-btn` controls.

## Elevation & Depth

This system uses **no box shadows** (`box-shadow: none` everywhere). Depth, hierarchy, and separation are conveyed strictly through three structural mechanisms:
1. **Tonal Zoning:** Warm Stone Paper (`#f4f4f1`) frames the structural navigation and placard zones, separating them from the pure Gallery White (`#ffffff`) reading column and Carbon Ink (`#141414`) action/code modules.
2. **Border Weight Hierarchy:** Primary frames, split panes, cards, and interactive modules use `2px solid #141414`; compact footer buttons use `1.5px solid #141414`; secondary internal dividers (tab separators, table rows, inline code tokens) drop to `1px solid #d4d4ce`.
3. **Modal Scrim:** The 4-lesson overview drawer uses a flat `rgba(20, 20, 20, 0.72)` full-screen backdrop behind a sharp `2px`-bordered Gallery White `.overview-sheet`.

### Named Rules
**The Zero-Shadow Rule.** Never add drop shadows, ambient blurs, or floating glass panels; if a container needs separation, give it a `2px solid #141414` border or shift its surface between `#ffffff` and `#f4f4f1`.

## Shapes

Sharp rectangular museum geometry defines every architectural surface, paired with a single intentional capsule exception for taxonomy pills:
- **Architectural Rectangles (`0px` radius):** The outer shell, rail tabs, placard, cards, specification tables, prompt/note bars, buttons, checkboxes, overview modal cards, and game canvas all terminate in crisp `90°` corners (`border-radius: 0px`).
- **Taxonomy Capsule (`999px` radius):** Only `.pill` concept tags (HTML / CSS / JS / IDEA / THEME / KEY) use full pill rounding (`border-radius: 999px`) so conceptual categories read immediately apart from structural boxes and code chips.
- **Linework & Focus:** Keyboard focus indicators use a crisp `3px solid #d92b2b` outline with `2px` offset (`outline-offset: 2px`) so focus rings remain unmistakable on both stone and white surfaces. Inline SVG icons use `stroke-linecap="square"` to match the rectilinear geometry.

### Named Rules
**The Sharp-Frame, Pill-Tag Rule.** Keep all structural containers, buttons, and code bars strictly `0px` corner radius; reserve `999px` capsule geometry exclusively for `.pill` metadata tags.

## Components

### Top Lesson Rail & Tabs
Persistent 4-lesson horizontal track at the top of the shell (`64px` height on desktop).
- **Shape:** Sharp rectangular cells (`0px` radius) separated by `1px solid #d4d4ce` dividers below a `2px solid #141414` bottom rail border.
- **States:** Default uses `#f4f4f1` fill with `#525252` text; hover shifts to `#e9e9e3` with `#141414` text; completed prior lessons darken text to `#141414`; active lesson fills with Signal Red (`#d92b2b`), `#ffffff` text, and `#141414` right border.

### Museum Placard Sidebar
Left `340px` structural summary column (`padding: 36px 30px`) anchored to `#f4f4f1` with a `2px solid #141414` right divider.
- **Structure:** `.unit-tag` monospace badge (`#d92b2b` for lessons, `#141414` for cover), oversized `JetBrains Mono` `.big-num`, `.placard-title`, `.placard-desc`, and bottom `.timeline` bounded by a `2px solid #141414` top rule.
- **Active Step:** Current slide's timeline row switches to `font-weight: 700` and `#b91c1c` text.

### Buttons
- **Shape:** Sharp `0px` radius across all buttons; `140ms ease` (`120ms ease` for `.nav-btn`) color transitions.
- **Primary (`.copy-btn`, `.demo-btn`):** Signal Red (`#d92b2b`) fill, `#ffffff` bold text (`14px` / `13.5px`), `11px 18px` padding (`.copy-btn`) or `8px 16px` (`.demo-btn`). Hover shifts to `#b91c1c`; `.copy-btn.copied` shifts to Forest Green (`#15803d`) for `1800ms`.
- **Footer Nav (`.nav-btn`):** Gallery White (`#ffffff`) fill, `1.5px solid #141414` border, `7px 12px` padding, `13.5px` bold text. Hover inverts to `#141414` fill with `#ffffff` text; disabled drops to `0.4` opacity.
- **Modal Close (`.close-btn`):** Carbon Ink (`#141414`) fill, `#ffffff` text, `10px 18px` padding; hover shifts to `#d92b2b`.

### Concept Pills (`.pill`)
- **Style:** `999px` capsule radius, `JetBrains Mono` `12px` bold, `3px 10px` padding, `#ffffff` text.
- **Variants:** `.ink` (`#141414`), `.blue` (`#1d4ed8`), `.red` (`#d92b2b`), `.green` (`#15803d`).

### Concept Cards & Step Cards
- **Corner Style:** `0px` radius with `2px solid #141414` border.
- **Background:** `#ffffff` default (`.cell-box.muted` uses `#f4f4f1` for secondary variants).
- **Padding:** `16px 20px` (`.cell-box`) or `18px 20px` with a `44px 1fr` grid (`.step-card`) led by a `20px` Signal Red monospace `.step-idx`.

### Copyable Cursor Prompt Bar & Classroom Note Bar
- **Prompt Bar (`.prompt-box`):** Carbon Ink (`#141414`) background, `2px solid #141414` border, `18px 22px` padding, `#fca5a5` monospace label, `#f4f4f1` `14.5px` monospace prompt text, paired with `.copy-btn`. Stacks vertically on `<= 1080px`.
- **Note Bar (`.note-box`):** Non-copyable instructor callout on `#f4f4f1` with `2px solid #141414` border, `16px 22px` padding, `#d92b2b` `18px` info icon, `#b91c1c` `12px` monospace label, and `15px` sans-serif note text.

### Specification & Comparison Tables (`.spec-table`)
- **Structure:** Full-width table bounded only at top and bottom by `2px solid #141414` rules (no vertical cell borders); `#f4f4f1` header row with `2px solid #141414` bottom rule; `1px solid #d4d4ce` row dividers; `11px 14px` cell padding (`10px` on `<= 560px`).
- **Comparison Semantic Cells:** `.bad-cell` uses `#fef2f2` with `#7f1d1d` text; `.good-cell` uses `#f0fdf4` with `#14532d` text.

### Interactive HTML/CSS/JS Layer Dissector
- **Structure:** `260px 1fr` grid (`1fr` on `<= 1080px`) pairing three `.layer-toggle` buttons (`2px solid #141414`, `14px 16px` padding) with a `.preview-stage` live mini-game mockup.
- **States:** OFF toggles sit on `#f4f4f1` with `#e5e5df` state chips; ON toggles invert to `#141414` background with `#ffffff` text and translucent `rgba(255, 255, 255, 0.16)` state chips.

### 4-Lesson Overview Drawer
- **Structure:** Modal backdrop (`rgba(20, 20, 20, 0.72)`) centering a `max-width: 1280px` `.overview-sheet` (`2px solid #141414`), `#f4f4f1` header bar, and responsive `repeat(auto-fill, minmax(260px, 1fr))` grid of `.ov-card` slide buttons. Active slide highlights in `#d92b2b` with `#ffffff` text.

## Do's and Don'ts

### Do:
- **Do** frame primary structural zones, cards, and prompt bars with sharp `0px` corners and `2px solid #141414` borders.
- **Do** pair `Noto Sans TC` (`900` weight) headlines with `JetBrains Mono` (`tabular-nums`) for all lesson numerals, timers, counters, and Cursor prompts.
- **Do** restrict Signal Red (`#d92b2b`) to active orientation markers, primary action buttons, and focus outlines so back-row contrast remains unmistakable.
- **Do** support full keyboard slide navigation (`ArrowLeft`, `ArrowRight`, `Space`, `1`–`4`, `G`, `F`, `Escape`) and preserve `3px solid #d92b2b` `:focus-visible` outlines.
- **Do** collapse the `100dvh` desktop stage cleanly into a single-column vertical flow with a sticky bottom footer at `<= 1080px`.

### Don't:
- **Don't** add `box-shadow`, blur filters, or glassmorphism to cards, buttons, or modal sheets; follow The Zero-Shadow Rule.
- **Don't** place decorative eyebrow kickers above the primary slide `<h1>` in the reading column; lesson context belongs exclusively in the top rail and left placard.
- **Don't** apply rounded corners (`border-radius > 0`) to cards, buttons, or tables; capsule rounding (`999px`) belongs strictly to `.pill` taxonomy tags.
- **Don't** introduce dark backgrounds onto the main `.reading-column` reading plates; reserve `#141414` surfaces for `.brand`, `.prompt-box`, active `.layer-toggle`, and the playable game canvas.
- **Don't** replace inline square-cap SVGs with emoji glyphs or external icon-font packages.
