import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createuser = async (username, email, password) => {

    const user = await prisma.user1.create({
        data: {
            username,
            email,
            password
        }
    });

    return user;


}