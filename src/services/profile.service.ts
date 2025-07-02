import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserProfile = async (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      alias: true,
      birthDate: true,
    },
  });
};
