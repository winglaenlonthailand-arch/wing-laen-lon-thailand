import crypto from "crypto";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

const SESSION_COOKIE = "wing_auth_session";
const SESSION_DURATION_DAYS = 30;

export async function createAuthSession(athleteId: string) {
  const token = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date();
  expiresAt.setDate(
    expiresAt.getDate() + SESSION_DURATION_DAYS
  );

  await prisma.authSession.create({
    data: {
      token,
      athleteId,
      expiresAt,
    },
  });

  return {
    token,
    expiresAt,
  };
}

export async function getAuthSession(token: string) {
  const session = await prisma.authSession.findUnique({
    where: {
      token,
    },
    include: {
      athlete: true,
    },
  });

  if (!session) {
    return null;
  }

  if (session.expiresAt <= new Date()) {
    await prisma.authSession.delete({
      where: {
        id: session.id,
      },
    });

    return null;
  }

  return session;
}

export async function deleteAuthSession(token: string) {
  await prisma.authSession.deleteMany({
    where: {
      token,
    },
  });
}

export { SESSION_COOKIE };
