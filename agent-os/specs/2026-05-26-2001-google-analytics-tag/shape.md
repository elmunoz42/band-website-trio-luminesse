# Shape

## What We Are Building

Add Google Analytics tracking to the Trio Luminesse frontend using the provided Google tag measurement ID.

## Goals

- Load the Google tag across the site.
- Keep the implementation idiomatic for Next.js.
- Avoid duplicating analytics scripts across individual pages.

## Decision

Use `next/script` in `app/layout.tsx` with `strategy="afterInteractive"` for both the external gtag loader and inline configuration.

## Measurement ID

`G-GWT6H6LM1B`
