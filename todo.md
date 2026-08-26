# Sparsh Mishra Portfolio Enhancement Tasks

## Recruiter-Ready Portfolio Upgrade

## Theme, Contact, and Interaction Upgrade

## Portfolio Design Library Upgrade

## Interactive Starter Kit Upgrade

## Beginner Guide and Personalized Download Upgrade

## GitHub and Publishing Preparation

## Accessibility and Design Voting Upgrade

## GitHub Deployment Path

## Vercel Deployment Path

- [x] Obtain the MongoDB connection URI required for portable Vercel-hosted shared voting.
- [x] Migrate the shared vote API from the managed project database to MongoDB.
- [x] Add a Vercel serverless entry point, deployment configuration, and external-hosting documentation.
- [x] Verify the Vercel serverless entry, configuration, documentation, and local build/test compatibility.
- [x] Correct Vercel SPA fallback routing so /api/trpc is served by the serverless vote API rather than index.html.
- [x] Bundle the Vercel vote handler without unresolved local server imports.
- [x] Correct the Atlas driver hostname in both Vercel MongoDB secret scopes and redeploy Production.
- [x] Verify the final Vercel `votes.set` mutation and follow-up summary through a temporary isolated test record, then remove that record from Atlas.
- [x] Remove the temporary Atlas vote-verification record before final delivery.
- [x] Verify the production vote UI reflects the confirmed MongoDB-backed summary without leaving a fabricated public signal.

- [x] Determine that portable Vercel voting requires MongoDB rather than the prior managed database path.
- [x] Add Vercel deployment configuration and environment-variable documentation for the GitHub repository.
- [x] Verify Vercel project readiness and add the resulting stable URL to GitHub metadata.

- [x] Choose Vercel as the GitHub-connected deployment target that supports the shared voting backend.
- [x] Add the selected host’s deployment configuration and environment documentation.
- [x] Verify the deployment configuration and complete the GitHub website metadata with the live URL.

- [x] Audit keyboard paths, focus states, motion, contrast, image descriptions, and vote behavior.
- [x] Add accessible focus, skip navigation, reduced-motion, contrast, and descriptive image improvements.
- [x] Add one-vote-per-browser design voting with persistent local preference and popularity labels.
- [x] Verify keyboard operation, reduced-motion fallbacks, visual contrast, and vote persistence.
- [x] Exercise keyboard navigation through skip link, filters, previews, vote controls, and contact fields.
- [x] Validate the reduced-motion experience suppresses the loader, route transition, cursor, and card tilt.
- [x] Audit contrast in utility, voting, and focused-control states.
- [x] Submit a controlled vote through the API and confirm its shared count and selected-design state persist.

- [x] Run final build and visual checks for the current project state.
- [x] Create a private GitHub repository and push the validated source.
- [x] Set the repository description, topics, and website URL metadata after a stable public URL is available.
- [x] Deploy the site on Vercel and add the resulting stable URL to GitHub metadata.
- [x] Provide the project publishing step and report the final repository state.

- [x] Define the beginner setup steps, preview-edit data flow, and personalized ZIP manifest behavior.
- [x] Add editable personal-detail controls and a beginner integration guide to the preview experience.
- [x] Generate a customized source ZIP in the browser with the edited JSON profile embedded.
- [x] Verify guide clarity, edited preview values, JSON output, customized archive content, and mobile behavior.

- [x] Define the configuration schema, preview surface, and reusable snippet catalog.
- [x] Add a centralized editable JSON profile configuration for every template.
- [x] Build a live preview modal for each portfolio design with source-download access.
- [x] Add a copyable component-code panel for hero, gallery, and contact sections.
- [x] Verify modal, JSON, copy-to-clipboard, and responsive behavior.
- [x] Package the updated interactive starter-kit library ZIP.

- [x] Define accurate “best for” guidance, feature summaries, customization starting points, and the main-hub-plus-eight-design export architecture.
- [x] Add a custom constellation loading screen before the main hub appears.
- [x] Add clear design-selection details and a source-download action for every individual portfolio world.
- [x] Generate a junior-friendly library ZIP with eight independent design folders and usage documentation.
- [x] Verify all library navigation, download links, loading behavior, and visual differentiation.

- [x] Define the unified light/dark constellation palette, form validation states, and 3D tilt interaction rules.
- [x] Add a global light/dark theme toggle that carries across hub, worlds, and case studies.
- [x] Replace the contact links with a validated recruiter-facing contact form.
- [x] Add 3D tilt hover behavior to all project cards in the eight portfolio worlds.
- [x] Verify theming, form validation, tilt interactions, and responsive behavior.
- [x] Package the final project as a ZIP for download.

- [x] Define student-focused recruiter, founder, skills, experience, project, and contact demo data.
- [x] Add a dynamic main-hub filter system for skills and project types.
- [x] Implement a custom cursor that adapts to the active portfolio world and interactive targets.
- [x] Add résumé download, social links, and a recruiter-facing contact section.
- [x] Verify filtering, cursor behavior, contact links, and responsive presentation.

- [x] Define the demo identity, project narratives, and case-study content schema.
- [x] Prepare visual assets for the detailed project stories.
- [x] Add smooth route transitions between the constellation, worlds, and case studies.
- [x] Connect every project card to its detailed case-study route.
- [x] Verify navigation, visual hierarchy, and responsive behavior.
- [x] Replace demo contact details with Sparsh Mishra’s supplied email and LinkedIn/GitHub profiles; remove unsupported demo phone, location, and social placeholders.
- [x] Deferred at user request: add a secure Vercel-compatible contact-form delivery flow that sends inquiries to its8samay@gmail.com without exposing credentials. This is intentionally not implemented.
- [x] Deferred at user request: create the Formspree form endpoint for its8samay@gmail.com and wire it into the public contact form. This is intentionally not implemented.
- [x] Verify the latest GitHub commit and Vercel production response after the contact-profile update.
- [x] Audit repository and Vercel secret handling to confirm production credentials remain uncommitted and secret-scoped.
- [x] Reattribute agent-authored Git commits to Sparsh Mishra <SparshM8@users.noreply.github.com> and verify the corrected GitHub history.
- [x] Confirm that the reattributed commit email maps to the existing SparshM8 GitHub account and explain it clearly.
- [x] Visually audit the live Vercel deployment for image loading, animation, route navigation, and interactive controls; fix any verified defect.
- [x] Fix the verified production brand-image failure and investigate the blank viewport observed after the Explore anchor transition; the anchor crosses the dark hero/candidate transition during smooth scrolling but settles on the populated worlds section.
- [x] Replace every Vercel-incompatible `/manus-storage` public asset reference with direct public CDN URLs that return the expected image, PDF, or ZIP content type.
- [x] Verify every intended live portfolio-world route; the valid direct route is `/portfolios/kinetic` rather than `/kinetic`, which is intentionally not a route.
- [x] Add regression coverage for the migrated production asset paths and pass type checks, 12 tests, and a production build.
- [x] Push the production media fix and verify Vercel’s Git-triggered deployment plus live interactive behavior.
- [x] Confirm every `/portfolios/:slug` route responds from the production alias and visually inspect representative image-led worlds.
- [x] Exercise core production controls after deployment: filters, preview modal open/close, theme, mailto/social links, downloads, vote summary, and route transitions.
- [x] Connect Sparsh Mishra’s actual Formspree endpoint to the validated public contact form and verify a non-sensitive end-to-end submission flow.
- [x] Audit and restore the intended constellation loader, route transitions, adaptive cursor, hover states, and 3D card-tilt motion across hub and world pages.
- [x] Live-verify the production loader and route transition between the hub, a world, and a case-study page.
- [x] Live-verify `TiltLink` depth behavior on production world case cards and document the interaction audit results.
- [x] Add Formspree-compatible anti-spam safeguards to the public contact form without introducing exposed credentials or inaccessible CAPTCHA friction.
- [x] Add and live-verify a subtle, accessible success animation and toast after a successful contact-form submission.
- [x] Defer the Formspree automatic acknowledgement email at the owner’s request; the provider feature requires a paid upgrade and no alternate provider will be added.
- [x] Add a visible in-button loading spinner and disabled processing state for contact submissions.
- [x] Add opt-in local storage for a visitor’s name and email with clear disclosure and an easy way to remove saved details.
- [x] Fix the unintended overlap between the hero recruitment-copy block and the Portfolio Constellation creator seal/orbit artwork at affected responsive sizes.
- [x] Defer Formspree automatic acknowledgements at the owner’s request because the provider feature requires a paid upgrade; do not upgrade or add another email provider.
- [x] Extend Light Field and Dark Field styling beyond the home hub so it consistently changes all portfolio-world and case-study routes.
- [x] Fix Light Field contrast on case-study hero copy and controls so the title and metadata remain readable over the brightened image wash.
