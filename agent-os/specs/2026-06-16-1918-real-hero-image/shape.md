# Shape

## What We Are Building

Replace the generated placeholder hero image with the real Trio Luminesse photo provided by the client.

## Goals

- Use actual band imagery in the first viewport.
- Preserve strong text readability on the left side of the hero.
- Keep the photo most visible on the right side of the composition.

## Decision

Use `public/images/trio-luminesse-live-hero.jpeg` as the primary hero and Open Graph image. Since the photo is 4:3, anchor it toward the right and fade it into a dark overlay on the left.
