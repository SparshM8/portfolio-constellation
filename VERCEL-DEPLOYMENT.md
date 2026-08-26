# Vercel Deployment Guide

This repository is prepared for **GitHub-connected Vercel deployment**. Vercel serves the Vite output from `dist/public` and routes `/api/*` requests through `api/[...path].ts`. The deployed function is self-contained and implements the public, tRPC-compatible MongoDB voting endpoints without importing local OAuth or storage modules.

## Required environment variables

| Variable | Purpose | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB Atlas URI for shared portfolio-design voting. | Yes |
| `VITE_APP_ID` | Manus OAuth application ID; only needed if OAuth features are enabled. | Optional |
| `OAUTH_SERVER_URL` | Manus OAuth service URL; only needed if OAuth features are enabled. | Optional |
| `VITE_OAUTH_PORTAL_URL` | OAuth portal URL; only needed if OAuth features are enabled. | Optional |

> Keep secrets in Vercel Project Settings → Environment Variables. Do not commit `.env` files or paste database credentials into GitHub.

## Deployment steps

1. In Vercel, create a project from `SparshM8/portfolio-constellation` and select the `main` branch.
2. Add the required `MONGODB_URI` value in Project Settings → Environment Variables for **Production** and **Preview**. Use the complete Atlas URI beginning with `mongodb+srv://`, including the database user credentials, an explicit database name, and the exact cluster hostname copied from Atlas → Connect → Drivers.
3. Confirm the build command is `pnpm build` and output directory is `dist/public`.
4. Deploy. A push to `main` then creates the next production deployment automatically.
5. Open the published URL and vote for a design. The vote should persist after refresh and be visible from another browser.

To verify the production read path without creating an artificial visitor signal, request `GET /api/trpc/votes.summary?batch=1&input={"0":{"json":{}}}` from the published origin. A successful response returns a tRPC result containing `totals` and `selectedDesign`.

## Notes

The deployed project uses MongoDB only for anonymous design votes. The browser-personalized ZIP workflow remains local to each visitor. The design images currently use their existing remote asset URLs; copy those assets to your preferred permanent storage before a long-term production launch.

If the vote endpoint reports `bad auth: authentication failed`, confirm the Atlas database-user credentials in the URI and URL-encode special password characters. If it reports `querySrv ENOTFOUND`, copy the cluster hostname afresh from Atlas rather than typing it manually. Keep the full URI exclusively in Vercel’s Secret setting; never commit or share it in source control.

For production, prefer a dedicated Atlas database user with the minimum read/write permissions required for the vote collection and its visitor-key index. Do not reuse an Atlas administrator credential for the public vote service.
