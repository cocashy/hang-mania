import { Context } from 'hono';
import { Bindings } from 'hono/types';
import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

export const contextPrisma = (c: Context<{
  Bindings: Bindings;
}>) => {
  const adapter = new PrismaD1(c.env.DB);
  const prisma = new PrismaClient({ adapter });
  return prisma;
};
