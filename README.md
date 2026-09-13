# BuzzBee marketing/docs site

Static HTML/CSS, no build step — deployed via GitHub Pages (Settings → Pages → Deploy from
branch → `/root`).

## Pages

- `index.html` — landing page
- `support.html` — FAQ + contact
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service
- `styles.css` — shared stylesheet (colors match the app's real theme)
- `assets/bee-logo.svg` — the real BuzzBee logo mark

## Preview locally

Any static file server works, e.g.:

```
npx serve .
```

## Still a placeholder

- **Download links** — every "Download on the App Store" button currently points to `href="#"`.
  Swap in the real App Store link once BuzzBee is live.

Everything else (support email, effective dates, governing law, FAQ answers, privacy practices
described) reflects real, filled-in values — see `../buzzbee-alarm/legal/` for the original
plain-text drafts this HTML was built from.
