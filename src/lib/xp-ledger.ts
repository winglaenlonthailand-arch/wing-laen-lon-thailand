import { PrismaClient } from "@/generated/prisma/client";

type CreateXPLedgerInput = {
  athleteId: string;
  amount: number;
  source: string;
  referenceId?: string;
  ruleId?: string;
  description?: string;
};

export async function createXPLedgerEntry(
  prisma: PrismaClient,
  input: CreateXPLedgerInput
) {
  if (!input.athleteId) {
    throw new Error("athleteId is required");
  }

  if (!Number.isInteger(input.amount) || input.amount <= 0) {
    throw new Error("XP amount must be a positive integer");
  }

  return prisma.xPLedger.create({
    data: {
      athleteId: input.athleteId,
      amount: input.amount,
      source: input.source,
      referenceId: input.referenceId,
      ruleId: input.ruleId,
      description: input.description,
    },
  });
}