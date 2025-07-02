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

export const getAllPosts = async () => {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      message: true,
      createdAt: true,
      user: {
        select: {
          id: true,
          alias: true,
          firstName: true,
          lastName: true,
        },
      },
      likes: {
        select: {
          id: true,
          userId: true,
        },
      },
    },
  });
};
