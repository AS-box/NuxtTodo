import { PrismaClient } from "@prisma/client";

export const getTasks = async () => {
    const prisma = new PrismaClient();
    const tasks = await prisma.task.findMany();
    return tasks;
};
