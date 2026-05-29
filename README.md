# PASHM

> Cashmere from the Ushu Valley. The Yousafzai family, since 1928.

Next.js 15 codebase for the PASHM brand site. Built on the strategy and design
foundation developed across the project; this is the production source of truth.

---

## Quick start

```bash
pnpm install            # or npm install / yarn
pnpm dev                # http://localhost:3000
```

Forms work in dev without any email setup — submissions log to the server
console. To send real emails, see "Forms & email" below.

---

## Stack

| Layer             | Choice                                                        |
| ----------------- | ------------------------------------------------------------- |
| Framework         | Next.js 15 (App Router)                                       |
| Language          | TypeScript (strict)                                           |
| Styling           | Tailwind CSS 3 with custom design tokens                      |
| Fonts             | Hanken Grotesk + Fraunces + Noto Naskh Arabic via `next/font` |
| Animation         | Framer Motion (page transitions)                              |
| Forms             | React Server Actions + Zod validation                         |
| Email             | Resend (transactional)                                        |
| Hosting (planned) | Vercel                                                        |

No CMS yet — content lives in `content/data.ts` as typed records. Add one when
a non-developer needs to edit copy.

---

## Project structure

```
app/
├── layout.tsx                # shared shell: nav, footer, fonts, transitions
├── globals.css               # tailwind directives + the few custom rules
├── fonts.ts                  # next/font setup
├── page.tsx                  # /
├── valley/page.tsx           # /valley
├── work/page.tsx             # /work
├── pieces/
│   ├── page.tsx              # /pieces (index)
│   └── [slug]/page.tsx       # /pieces/:slug (detail, statically generated)
├── harvest/
│   ├── page.tsx              # /harvest (archive)
│   └── [year]/page.tsx       # /harvest/:year (detail)
└── inquire/
    ├── page.tsx              # /inquire (chooser)
    ├── trade/page.tsx        # /inquire/trade
    └── private/page.tsx      # /inquire/private (reads ?piece= param)

components/
├── Nav.tsx                   # main navigation (client — needs usePathname)
├── UtilityBar.tsx            # top strip
├── Footer.tsx                # shared footer
├── PageHeader.tsx            # inner-page title block
├── PageTransition.tsx        # ink-wash transition wrapper
├── ReadingProgress.tsx       # left-edge scroll progress line
├── SignatureMark.tsx         # the line+ellipse brand mark
├── Fig.tsx                   # photo/brief placeholder system
├── Plate.tsx                 # framed mat treatment for photos
├── Caption.tsx               # caption under figs and plates
├── QuietButton.tsx           # the underlined arrow CTA
├── PieceCard.tsx             # piece tile (preview + tile variants)
└── forms/
    ├── TradeForm.tsx         # B2B inquiry form
    └── PrivateForm.tsx       # B2C inquiry form (reads ?piece= param)

content/
└── data.ts                   # PIECES, HARVEST, PEOPLE, CURRENT_VINTAGE — typed

lib/
├── actions.ts                # server actions for form submission
└── email.ts                  # Resend wrapper (no-ops without API key)
```

---

## Editing content

Almost everything you'll want to edit lives in `content/data.ts`.

**Adding a new piece.** Append a record to the `PIECES` array. The `slug`
becomes the URL (`/pieces/your-slug`); the page is statically generated on next
build. Required fields are typed — TypeScript will catch anything missing.

**Adding a new harvest year.** Append to the `HARVEST` array with `body` filled
in. The year automatically gets `/harvest/<year>` and shows up in the archive
list.

**Editing copy on rooms.** Each room (`app/<room>/page.tsx`) holds its own
prose. Currently this is JSX strings; if you want MDX, see "Roadmap" below.

---

## Forms & email

Forms POST to React Server Actions in `lib/actions.ts`, which validate with Zod
and dispatch via `lib/email.ts`.

**Local dev** — no API key needed. Submissions print to the server console with
the full email body. Useful for iterating on form copy.

**Production** — sign up at [resend.com](https://resend.com), verify a sending
domain, and set in `.env.local`:

```
RESEND_API_KEY=re_xxxxxxxxxx
PASHM_FROM_EMAIL=hello@your-verified-domain.com
TRADE_INBOX=trade@your-domain.com
PRIVATE_INBOX=private@your-domain.com
```

The Trade form sends to `TRADE_INBOX`; the Private form to `PRIVATE_INBOX`.
Both set `Reply-To` to the submitter's email so replying in your inbox goes
directly to them.

Validation is strict (Zod schemas in `lib/actions.ts`). Adjust the schemas if
you change form fields.

---

## Design tokens

Brand palette and typography live in `tailwind.config.ts`. The full list:

- **Colors**: `bone`, `bone-warm`, `bone-deep`, `bone-shadow`, `ink`, `ink-mid`,
  `ink-soft`, `stone`, `stone-light`
- **Fonts**: `font-sans` (Hanken Grotesk), `font-serif` (Fraunces),
  `font-arabic` (Noto Naskh Arabic)
- **Letter spacing**: `tracking-widest` (0.28em), `tracking-ultra-wide`
  (0.32em), `tracking-wordmark` (0.46em)

Change a token and it propagates everywhere. The background dot grid and the
grain texture live in `app/globals.css`.

---

## The Fig component (most-used)

`components/Fig.tsx` is the heart of the photography system. Two modes:

```tsx
// Brief mode — styled empty frame with shot list (current default)
<Fig
  figId="Fig. 05"
  figMeta="Process · The Comb"
  brief="Bakht Mir at the comb. Tight on hands and tool, fleece coming free."
  aspect="4/5"
/>

// Photo mode — when real photography arrives, just add `photo`
<Fig
  figId="Fig. 05"
  figMeta="Process · The Comb"
  brief="..."  // kept for accessibility / alt fallback
  photo="/photography/comb-bakht-mir-2026.jpg"
  alt="Bakht Mir combing a goat in the Ushu pastures, May 2026."
  aspect="4/5"
/>
```

Photos go through Next.js Image optimization automatically (`<Image fill>`).
Place commissioned shots in `public/photography/` and reference them as
`/photography/<filename>`.

---

## Roadmap (in roughly the order I'd tackle)

1. **Real photography.** Commission a textile/craft photographer for two days
   at the workshop and one day in the valley. The Fig briefs are the shot
   list. Drop files into `public/photography/`, swap brief mode for photo mode
   on each `<Fig>` instance.
2. **Real domain & email.** Buy a domain, set up Resend with the verified
   sending domain, set `TRADE_INBOX` / `PRIVATE_INBOX` to real addresses.
3. **Deploy to Vercel.** `vercel link` from this directory; preview deploys per
   PR; production deploys on `main`.
4. **Sitemap & robots.** Add `app/sitemap.ts` and `app/robots.ts` — both
   trivial files Next.js will serve at `/sitemap.xml` and `/robots.txt`.
5. **JSON-LD structured data.** Add an `Organization` schema in the layout and
   a `Product` schema on piece detail pages. Helps the named-source visibility
   the strategy doc targets.
6. **Analytics.** Plausible or Vercel Analytics — both privacy-friendly, no
   cookie banner required.
7. **i18n.** Wire the Arabic toggle. `next-intl` is the sensible choice.
8. **MDX for room copy.** When you're tired of editing JSX strings for body
   copy, install `@next/mdx` and move each room's prose into a `.mdx` file
   alongside the page.
9. **CMS (later).** When a non-developer family member wants to add a harvest
   note or a new piece without touching code, swap `content/data.ts` for a
   Sanity / Payload / Contentful fetch. The shapes don't change.

---

## What's not included (intentionally)

- **No shop.** The brand has no add-to-cart, no prices, no checkout.
- **No newsletter modal.** Communication is the annual harvest report, sent on
  request.
- **No cookie banner.** Use a privacy-friendly analytics provider and disclose
  in the footer Imprint/Privacy page (TODO).
- **No live chat.** Replies take five to seven days, on purpose.
- **No search.** Five rooms don't need it.

These are strategic refusals, not omissions. See the brand strategy doc.
