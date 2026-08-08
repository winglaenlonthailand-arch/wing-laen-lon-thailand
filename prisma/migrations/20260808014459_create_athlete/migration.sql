-- CreateTable
CREATE TABLE "Athlete" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "sports" JSONB,
    "level" TEXT NOT NULL DEFAULT 'Beginner',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Athlete_athleteId_key" ON "Athlete"("athleteId");

-- CreateIndex
CREATE UNIQUE INDEX "Athlete_email_key" ON "Athlete"("email");
