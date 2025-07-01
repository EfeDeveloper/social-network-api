import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const loginUser = async (alias: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { alias },
  });

  if (!user) throw new Error('Invalid email or password');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid email or password');

  const token = jwt.sign({ userId: user.id, alias: user.alias }, process.env.JWT_SECRET || '', {
    expiresIn: '4h',
  });

  return {
    token,
    user: {
      id: user.id,
      alias: user.alias,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };
};
