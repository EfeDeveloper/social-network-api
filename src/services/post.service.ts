import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (userId: string, message: string) => {
  const newPost = prisma.post.create({
    data: {
      message,
      userId,
    },
    select: {
      id: true,
      message: true,
      user: true,
      likes: true,
      createdAt: true,
    },
  });

  return {
    ...newPost,
    likesCount: newPost.likes.length,
    likedByCurrentUser: false,
  };
};

export const getAllPosts = async (currentUserId: string) => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          alias: true,
        },
      },
      likes: { select: { userId: true } },
    },
    orderBy: { createdAt: 'desc' },
  });

  return posts.map((post) => ({
    id: post.id,
    message: post.message,
    user: post.user,
    likesCount: post.likes.length,
    likedByCurrentUser: post.likes.some((like) => like.userId === currentUserId),
    createdAt: post.createdAt,
  }));
};
