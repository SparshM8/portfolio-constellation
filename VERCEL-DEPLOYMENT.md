# Vercel Deployment Guide

This repository is prepared for **GitHub-connected Vercel deployment**. Vercel serves the Vite output from `dist/public` and routes `/api/*` requests through `api/[...path].ts`, which uses the same tRPC application as local development.

## Required environment variables

| Variable | Purpose | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB Atlas URI for shared portfolio-design voting. | Yes |
| `JWT_SECRET` | Session signing for optional OAuth routes. | Yes |
| `VITE_APP_ID` | Manus OAuth application ID; only needed if OAuth features are enabled. | Optional |
| `OAUTH_SERVER_URL` | Manus OAuth service URL; only needed if OAuth features are enabled. | Optional |
| `VITE_OAUTH_PORTAL_URL` | OAuth portal URL; only needed if OAuth features are enabled. | Optional |

> Keep secrets in Vercel Project Settings → Environment Variables. Do not commit `.env` files or paste database credentials into GitHub.

## Deployment steps

1. In Vercel, create a project from `SparshM8/portfolio-constellation` and select the `main` branch.
2. Add the required `MONGODB_URI` and `JWT_SECRET` values in Project Settings → Environment Variables for **Production** and **Preview**.
3. Confirm the build command is `pnpm build` and output directory is `dist/public`.
4. Deploy. A push to `main` then creates the next production deployment automatically.
5. Open the published URL and vote for a design. The vote should persist after refresh and be visible from another browser.

## Notes

The deployed project uses MongoDB only for anonymous design votes. The browser-personalized ZIP workflow remains local to each visitor. The design images currently use their existing remote asset URLs; copy those assets to your preferred permanent storage before a long-term production launch.
