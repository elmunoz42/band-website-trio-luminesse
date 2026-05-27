# Trio Luminesse Frontend

Next.js frontend theme for a headless WordPress backend.

## Local Development

```bash
npm install
npm run dev -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:3000`.

## WordPress Connection

Set `WORDPRESS_API_URL` to the public WordPress origin:

```bash
WORDPRESS_API_URL=https://your-wordpress-site.com
```

The homepage fetches `/wp-json/wp/v2/pages?slug=home` and merges any `acf` fields into the local fallback content in `lib/site-content.ts`.

For production social URLs, set:

```bash
NEXT_PUBLIC_SITE_URL=https://trioluminesse.com
```

## Content Fields

The frontend currently expects these optional ACF-compatible keys on the WordPress `home` page:

- `eyebrow`
- `heroTitle`
- `heroLead`
- `heroActions`
- `aboutTitle`
- `aboutBody`
- `soundNotes`
- `packages`
- `events`

If WordPress is not connected yet, the site uses the built-in Trio Luminesse copy.

## Spec Tracking

This repo uses the Agent OS project structure for product docs, standards, and specs:

- `agent-os/product/mission.md`
- `agent-os/product/roadmap.md`
- `agent-os/product/tech-stack.md`
- `agent-os/standards/`
- `agent-os/specs/`

See the current frontend spec at `agent-os/specs/2026-05-26-1943-headless-wordpress-next-theme/`.
