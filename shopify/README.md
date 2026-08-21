# Shopify snippets

## `hero-offer-custom-liquid.liquid`

Product hero / offer block: urgency badge, headline, star rating, price +
compare-at + discount pill, benefit checklist, flash-sale footer.

**Install**

1. Shopify admin → **Online Store → Themes → Customize**.
2. On the target page, **Add section** (or **Add block**) → **Custom Liquid**.
3. Paste the whole file into the Custom Liquid field and **Save**.

Everything is self-contained (markup + scoped CSS, no JS, no external assets).
Styles live under the `.plh` namespace so they can't collide with the theme.

**Customising**

- Copy edits: the `assign` list at the top, plus the `capture heading` block.
- Benefits: one string, lines separated by `|` — add or remove as many as needed.
- Colours, fonts, spacing, column width: the CSS variables at the top of `<style>`.
- Live product pricing: uncomment the `if product` lines in the settings block
  (delete the leading `# `) when the section sits on a product page.

Sizing is fluid (`clamp()`), so it scales from ~320px phones up to wide desktop
without extra breakpoints.

## `proof-stats-custom-liquid.liquid`

Social-proof section: image on one side, survey stats on the other, footnote
underneath. Same install path as above (Custom Liquid section).

**Customising**

- Copy: the `capture` blocks at the top. Stats are one block, fields split on
  `~~` and rows split on `||` — add or remove rows freely.
- Image: paste a Shopify Files URL into `image_url`. Left empty it falls back
  to the product's featured image; with neither, the stats run full width.
- `--plx-ratio` sets the image shape (`1 / 1` default, `4 / 5` for tall).
- Colours and widths: the CSS variables at the top of `<style>`.

The columns sit side by side once the section is at least 760px wide and stack
below that, measured on the section itself rather than the viewport.

## `book-story-custom-liquid.liquid`

Story section: eyebrow pill, headline with a highlighted phrase, intro line,
four icon feature rows and a review card. Same install path as above.

**Customising**

- Copy: the `capture` blocks at the top. The headline is three parts — lead,
  highlighted phrase, tail.
- Features: one block, fields split on `~~` and rows on `||`. The icon is an
  emoji, so swap it for any character.
- Image: `image_url` is empty by default and the copy runs full width; paste a
  Files URL to put a photo beside it (columns split above a 760px container).

## `results-stats-custom-liquid.liquid`

Results section: eyebrow pill, headline with a coloured figure, sub-line,
stacked stat cards whose numbers count up on scroll, and a source footnote.

**Customising**

- Copy: the `capture` blocks. Cards are one block, fields split on `~~` and
  cards on `||` (number ~~ description ~~ chip).
- `count_ms` sets the count-up length; `0` shows the final numbers at once.
  Reduced-motion users and browsers without IntersectionObserver also get the
  final numbers, never a zero.
- Drop the `%` by deleting the `.prc__pct` span in the card markup.

## `subjects-grid-custom-liquid.liquid`

Dark band: eyebrow pill, centred headline with a highlighted phrase, sub-line
and a grid of subject cards.

**Customising**

- Copy: the `capture` blocks. Cards are one block, fields split on `~~` and
  cards on `||` (icon ~~ title ~~ description).
- The grid is 4 columns above a 900px container, 2 above 520px, 1 below —
  twelve cards divide evenly into all three, so no orphan rows.
- Colours: the CSS variables at the top of `<style>`. The band paints its own
  dark background, so set the section to full width with no padding in the
  theme editor if you want it edge to edge.
