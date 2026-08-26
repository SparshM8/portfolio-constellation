import { createApp } from "../server/createApp";

/** Vercel serverless entry point; Vercel dispatches /api/* requests to this Express application. */
const app = createApp();
export default app;
