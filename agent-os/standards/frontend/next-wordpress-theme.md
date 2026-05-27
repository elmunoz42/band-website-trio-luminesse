# Next WordPress Theme Standards

## Architecture

- Keep WordPress integration behind small data adapters in `lib/`.
- Provide sensible fallback content for local development when WordPress is unavailable.
- Keep page components focused on rendering and interaction; avoid placing fetch mapping logic directly in JSX-heavy sections.

## Content

- Use Trio Luminesse as the canonical public-facing band name.
- Maintain a warm, grounded, booking-oriented tone.
- Avoid generic music-template copy; emphasize Brazilian rhythms, jazz-pop movement, soul warmth, and intimate storytelling.

## Frontend Design

- The homepage should open on the actual experience, not a marketing placeholder.
- Use real or replaceable performance imagery as the primary visual signal.
- Keep navigation and calls to action clear on mobile and desktop.
- Avoid nested cards and oversized decorative UI that distracts from booking and musical identity.

## WordPress

- Read homepage content from the WordPress `home` page where possible.
- Prefer ACF field groups with names matching the local `SiteContent` shape.
- Do not require WordPress for local development or production builds.

## Deployment

- Keep environment variables documented in `README.md`.
- Validate `npm run lint` and `npm run build` before pushing deployment-ready changes.
