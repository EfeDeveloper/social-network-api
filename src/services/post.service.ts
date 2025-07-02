import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (userId: string, message: string) => {
  return prisma.post.create({
    data: {
      message,
      userId,
    },
    select: {
      id: true,
      message: true,
      createdAt: true,
      userId: true,
      likes: true,
    },
  });
};
