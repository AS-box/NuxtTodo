import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';

const tasks_delete = defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const body = await readBody(event);
  const deleteTask = await prisma.task.delete({
    where: {
      id: parseInt(body.id)
    }
  });
  return deleteTask;
});

export { tasks_delete as default };
//# sourceMappingURL=tasks.delete.mjs.map
