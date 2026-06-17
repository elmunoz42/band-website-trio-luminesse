# Shape

## What We Are Building

A new Next.js frontend theme for Trio Luminesse, designed to pair with a headless WordPress backend hosted on SiteGround and deploy later on Vercel.

## Goals

- Present Trio Luminesse as a soulful Santa Barbara jazz-pop-soul trio.
- Make booking feel immediate and natural.
- Support WordPress-managed content without blocking local development.
- Start the repository with persistent Agent OS product docs, standards, and spec history.

## Current Decisions

- Use Next.js App Router for the frontend.
- Keep WordPress REST integration in `lib/site-content.ts`.
- Use local fallback content until `WORDPRESS_API_URL` is available.
- Use the real Trio Luminesse photo in `public/images/trio-luminesse-live-hero.jpeg` as the hero image.
- Track specs using the Agent OS project structure under `agent-os/`.

## Out of Scope For This Spec

- SiteGround WordPress setup.
- Vercel project connection.
- Real booking form submission.
- Final band photography, audio embeds, and event CMS modeling.
