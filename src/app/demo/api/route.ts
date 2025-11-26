import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "node:crypto";

export async function GET(request: NextRequest) {

    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: `${randomInt(1, 1e9)}@prisma.io`,
            posts: {
                create: {
                    title: 'Hello World',
                    content: 'This is my first post!',
                    published: true,
                },
            },
        },
        include: { posts: true },
    })

    const allUsers = await prisma.user.findMany({
        include: { posts: true },
    });

    return NextResponse.json({ "status": "ok", "created_user": user, "all_users": allUsers });
}