# Ecom Daily P&L

Plug-and-play net margin calculator for an ecommerce business. Single HTML file — open `index.html` in any browser. No install, no server, no account.

## Use it

1. Open `index.html` in a browser (double-click, or `python3 -m http.server` then visit `localhost:8000`).
2. Fill the input panel on the left. KPIs and the P&L breakdown update live as you type.
3. Pick a date and click **Save Day** to log a daily snapshot.
4. Export CSV or JSON anytime. Import JSON to move data between machines.

All inputs and saved days are stored in your browser's `localStorage` — they persist across refreshes but are tied to that browser.

## What it calculates

**Revenue side**
- Gross revenue = units × price
- Less: discounts, refunds, chargebacks
- Plus: shipping income
- = **Net revenue**

**COGS**
- Product cost (per unit) + packaging (per unit) + outbound shipping (per order)
- Net revenue − COGS = **Gross profit**

**Operating costs**
- Ad spend (Meta / Google / TikTok / other)
- Payment processor (% + fixed per order)
- Platform fee % (Shopify / Amazon referral / etc.)
- Fixed daily overhead (software, salary, other)

**= Net profit before tax** → income tax % applied → **Net profit**

**Unit economics shown**
- AOV (avg order value)
- CAC (ad spend / order)
- ROAS (net revenue / ad spend)
- Break-even ROAS — the ROAS floor at which net profit = 0 given your current costs. If your ROAS is above this, you're profitable.

## Tips

- "Orders" is separate from "Units" because per-order costs (shipping, processor fixed fee) scale with orders, not units. Set orders = units if you ship one item per order.
- Set the income tax % to 0 if you want pre-tax profit.
- Click any date in the Saved Days table to reload that day's inputs.
