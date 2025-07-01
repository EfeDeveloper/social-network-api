import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  const userData = [
    {
      firstName: 'Ana',
      lastName: 'García',
      alias: 'ana_garcia',
      birthDate: new Date('1995-05-15'),
      password: passwordHash,
    },
    {
      firstName: 'Luis',
      lastName: 'Pérez',
      alias: 'luisp',
      birthDate: new Date('1990-10-20'),
      password: passwordHash,
    },
    {
      firstName: 'Camila',
      lastName: 'Ramírez',
      alias: 'camir',
      birthDate: new Date('2000-07-01'),
      password: passwordHash,
    },
  ];

  for (const data of userData) {
    const user = await prisma.user.create({ data });
    await prisma.post.create({
      data: {
        message: `¡Hola! Soy ${user.firstName}`,
        userId: user.id,
      },
    });
  }

  console.log('Seed ejecutado con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
