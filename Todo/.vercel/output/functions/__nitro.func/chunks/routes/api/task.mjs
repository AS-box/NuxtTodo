import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const task = defineEventHandler(async () => {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany();
  return tasks;
});

export { task as default };
//# sourceMappingURL=task.mjs.map
