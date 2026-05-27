# Roadmap

## Phase 1: Launchable Frontend

- Build a responsive Next.js homepage for Trio Luminesse.
- Include hero, sound description, event packages, availability, and booking contact surface.
- Add a replaceable hero image placeholder until official band photography is available.
- Provide local fallback content so the frontend works before WordPress is connected.
- Prepare WordPress REST/ACF integration points.

## Phase 2: WordPress Backend Connection

- Configure SiteGround WordPress as the headless CMS.
- Create the `home` page and matching ACF fields for homepage content.
- Replace fallback content with live WordPress data via `WORDPRESS_API_URL`.
- Decide whether booking submits through WordPress, a form plugin endpoint, or a transactional email service.

## Phase 3: Vercel Deployment

- Connect the GitHub repository to Vercel.
- Add environment variables for `WORDPRESS_API_URL` and `NEXT_PUBLIC_SITE_URL`.
- Configure production domain and preview deployments.
- Validate metadata, Open Graph images, and cache revalidation behavior.

## Later Enhancements

- Add music/audio embeds when final tracks are ready.
- Add an events archive powered by WordPress posts or a custom post type.
- Add gallery/video sections from real performances.
- Add structured data for local music group/event visibility.
