# Tech Stack

## Frontend

- Next.js 16 App Router
- React 19
- TypeScript
- CSS modules via global stylesheet for the current small surface area

## Content Backend

- Headless WordPress on SiteGround
- WordPress REST API
- ACF-compatible homepage fields read from `/wp-json/wp/v2/pages?slug=home`

## Hosting

- Vercel for the frontend
- SiteGround for WordPress backend and content editing

## Assets

- Local project assets in `public/images/`
- Current hero image is generated placeholder art and should be replaced with real band photography when available.

## Quality Gates

- `npm run lint`
- `npm run build`
- Browser preview on local Next dev server before meaningful visual changes are considered done.
