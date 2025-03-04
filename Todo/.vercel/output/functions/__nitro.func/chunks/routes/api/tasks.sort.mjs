import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const tasks_sort = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  let tasks;
  if (body.sort === "4") {
    tasks = await prisma.task.findMany();
  } else {
    tasks = await prisma.task.findMany({
      where: {
        status: body.sort
      }
    });
  }
  console.log(tasks);
  return tasks;
});

export { tasks_sort as default };
//# sourceMappingURL=tasks.sort.mjs.map
