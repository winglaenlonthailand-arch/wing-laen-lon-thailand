-- CreateTable
CREATE TABLE "RunningActivity" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "activityDate" TIMESTAMP(3) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "pace" DOUBLE PRECISION,
    "averageSpeed" DOUBLE PRECISION,
    "elevationGain" DOUBLE PRECISION,
    "gpsRoute" JSONB,
    "source" TEXT NOT NULL DEFAULT 'MANUAL',
    "verificationStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "externalProvider" TEXT,
    "externalActivityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RunningActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "XPLedger" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "referenceId" TEXT,
    "ruleId" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "XPLedger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "achievementType" TEXT NOT NULL,
    "ruleId" TEXT,
    "referenceId" TEXT,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChallengeProgress" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "target" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengeProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RunningActivity_athleteId_idx" ON "RunningActivity"("athleteId");

-- CreateIndex
CREATE INDEX "RunningActivity_activityDate_idx" ON "RunningActivity"("activityDate");

-- CreateIndex
CREATE INDEX "RunningActivity_verificationStatus_idx" ON "RunningActivity"("verificationStatus");

-- CreateIndex
CREATE INDEX "RunningActivity_externalProvider_idx" ON "RunningActivity"("externalProvider");

-- CreateIndex
CREATE UNIQUE INDEX "RunningActivity_externalProvider_externalActivityId_key" ON "RunningActivity"("externalProvider", "externalActivityId");

-- CreateIndex
CREATE INDEX "XPLedger_athleteId_idx" ON "XPLedger"("athleteId");

-- CreateIndex
CREATE INDEX "XPLedger_source_idx" ON "XPLedger"("source");

-- CreateIndex
CREATE INDEX "XPLedger_referenceId_idx" ON "XPLedger"("referenceId");

-- CreateIndex
CREATE INDEX "Achievement_athleteId_idx" ON "Achievement"("athleteId");

-- CreateIndex
CREATE INDEX "Achievement_achievementType_idx" ON "Achievement"("achievementType");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_athleteId_achievementType_key" ON "Achievement"("athleteId", "achievementType");

-- CreateIndex
CREATE INDEX "ChallengeProgress_athleteId_idx" ON "ChallengeProgress"("athleteId");

-- CreateIndex
CREATE INDEX "ChallengeProgress_challengeId_idx" ON "ChallengeProgress"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "ChallengeProgress_athleteId_challengeId_key" ON "ChallengeProgress"("athleteId", "challengeId");

-- AddForeignKey
ALTER TABLE "RunningActivity" ADD CONSTRAINT "RunningActivity_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "XPLedger" ADD CONSTRAINT "XPLedger_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChallengeProgress" ADD CONSTRAINT "ChallengeProgress_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;
