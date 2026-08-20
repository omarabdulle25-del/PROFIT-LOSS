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
