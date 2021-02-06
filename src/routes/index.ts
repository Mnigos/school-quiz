import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res) => {
  const postsNum = await prisma.post.count();

  console.log(`There is ${postsNum} posts`);

  res.json({ data: 'Hello, World!' });
});

export default router;
