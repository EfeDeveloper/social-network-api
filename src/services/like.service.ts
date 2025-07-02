import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const toggleLikePost = async (postId: string, userId: string) => {
  const exists = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId } },
  });

  let liked: boolean;

  if (exists) {
    await prisma.like.delete({
      where: { userId_postId: { userId, postId } },
    });
    liked = false;
  } else {
    await prisma.like.create({
      data: { userId, postId },
    });
    liked = true;
  }

  const likesCount = await prisma.like.count({ where: { postId } });

  return { id: postId, liked, likesCount };
};
