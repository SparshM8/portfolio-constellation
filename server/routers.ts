import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getDesignVoteSummary, setDesignVote } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  votes: router({
    summary: publicProcedure.input(z.object({ visitorKey: z.string().min(12).max(80).optional() }).optional()).query(({ input }) => getDesignVoteSummary(input?.visitorKey)),
    set: publicProcedure.input(z.object({ visitorKey: z.string().min(12).max(80), designSlug: z.enum(["kinetic", "architect", "void", "artifact", "mono", "neon", "editorial", "chrome"]) })).mutation(({ input }) => setDesignVote(input.visitorKey, input.designSlug)),
  }),
});

export type AppRouter = typeof appRouter;
