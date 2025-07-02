import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const likePost = async (postId: string, userId: string) => {
  const exists = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId } },
  });

  if (exists) {
    return { alreadyLiked: true };
  }

  const like = await prisma.like.create({
    data: { userId, postId },
  });

  return like;
};
