import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

/* this is not secure need to make "privateProcedure" */

export const boardRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      ownerId:z.string(),
      name: z.string().min(1),
      backgroundImage: z.string().nullable(),
    }))
    .mutation(async ({ ctx, input }) => {
      const {name, backgroundImage, ownerId} = input;
      return ctx.db.board.create({
        data: {
          ownerId: ownerId,
          name: name,
          backgroundImage: backgroundImage,
        },
      });
    }),

  getAll: publicProcedure.input(z.object({
    ownerId: z.string()
  })).query(async ({ ctx, input }) => {
    const { ownerId } = input;
    return await ctx.db.board.findMany({
      where:{
        ownerId
      },
      orderBy: { createdAt: "desc" },
    });
  }),
  getBoardById: publicProcedure.input(z.object({
    ownerId: z.string(),
    id: z.number(),
  })).query(async ({ ctx, input }) => {
    const { ownerId, id } = input;
    const board =  await ctx.db.board.findFirst({
      where:{
        id:id
      },
      include:{
        task_lists: true,
      }
    });
    if (board && board.ownerId == ownerId){
      return board
    }
    return null;
  }),
});
