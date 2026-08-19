-- CreateTable
CREATE TABLE "Community" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "province" TEXT,
    "district" TEXT,
    "subdistrict" TEXT,
    "description" TEXT,
    "imageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityMember" (
    "id" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "activityDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "evidence" JSONB,
    "status" TEXT NOT NULL DEFAULT 'SELF_REPORTED',
    "impactScore" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContributionVerification" (
    "id" TEXT NOT NULL,
    "contributionId" TEXT NOT NULL,
    "communityId" TEXT NOT NULL,
    "verifierId" TEXT,
    "verificationType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "note" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContributionVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recognition" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "contributionId" TEXT NOT NULL,
    "recognitionType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "awardedBy" TEXT,
    "awardedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "Recognition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Community_province_idx" ON "Community"("province");

-- CreateIndex
CREATE INDEX "Community_status_idx" ON "Community"("status");

-- CreateIndex
CREATE INDEX "CommunityMember_athleteId_idx" ON "CommunityMember"("athleteId");

-- CreateIndex
CREATE UNIQUE INDEX "CommunityMember_communityId_athleteId_key" ON "CommunityMember"("communityId", "athleteId");

-- CreateIndex
CREATE INDEX "Contribution_athleteId_idx" ON "Contribution"("athleteId");

-- CreateIndex
CREATE INDEX "Contribution_communityId_idx" ON "Contribution"("communityId");

-- CreateIndex
CREATE INDEX "Contribution_activityDate_idx" ON "Contribution"("activityDate");

-- CreateIndex
CREATE INDEX "Contribution_status_idx" ON "Contribution"("status");

-- CreateIndex
CREATE INDEX "Contribution_activityType_idx" ON "Contribution"("activityType");

-- CreateIndex
CREATE INDEX "ContributionVerification_contributionId_idx" ON "ContributionVerification"("contributionId");

-- CreateIndex
CREATE INDEX "ContributionVerification_communityId_idx" ON "ContributionVerification"("communityId");

-- CreateIndex
CREATE INDEX "ContributionVerification_verifierId_idx" ON "ContributionVerification"("verifierId");

-- CreateIndex
CREATE INDEX "ContributionVerification_status_idx" ON "ContributionVerification"("status");

-- CreateIndex
CREATE INDEX "Recognition_athleteId_idx" ON "Recognition"("athleteId");

-- CreateIndex
CREATE INDEX "Recognition_contributionId_idx" ON "Recognition"("contributionId");

-- CreateIndex
CREATE INDEX "Recognition_recognitionType_idx" ON "Recognition"("recognitionType");

-- AddForeignKey
ALTER TABLE "CommunityMember" ADD CONSTRAINT "CommunityMember_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMember" ADD CONSTRAINT "CommunityMember_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContributionVerification" ADD CONSTRAINT "ContributionVerification_contributionId_fkey" FOREIGN KEY ("contributionId") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContributionVerification" ADD CONSTRAINT "ContributionVerification_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContributionVerification" ADD CONSTRAINT "ContributionVerification_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "Athlete"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recognition" ADD CONSTRAINT "Recognition_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recognition" ADD CONSTRAINT "Recognition_contributionId_fkey" FOREIGN KEY ("contributionId") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
