
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

/* this is not secure need to make "privateProcedure" */

export const taskListRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      ownerId:z.string(),
      name: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      const {name, ownerId} = input;
      return ctx.db.taskLists.create({
        data: {
          ownerId: ownerId,
          name: name,
        },
      });
    }),

  getAll: publicProcedure.input(z.object({
    boardId: z.number()
  })).query(async ({ ctx, input }) => {
    const { boardId } = input;
    return await ctx.db.taskLists.findMany({
      where:{
        boardId
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
