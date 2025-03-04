import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const tasks_post = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  const newTask = await prisma.task.create({
    data: {
      title: body.title,
      status: body.status
    }
  });
  return newTask;
});

export { tasks_post as default };
//# sourceMappingURL=tasks.post.mjs.map
