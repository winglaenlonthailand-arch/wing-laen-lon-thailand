import { notFound } from "next/navigation";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const dynamic = "force-dynamic";

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

type Props = {
  params: Promise<{
    athleteId: string;
  }>;
};

export default async function PublicAthletePassport({
  params,
}: Props) {
  const { athleteId } = await params;

  const athlete = await prisma.athlete.findUnique({
    where: {
      athleteId,
    },
    include: {
      runningActivities: {
        orderBy: {
          activityDate: "desc",
        },
        take: 10,
      },
      achievements: {
        orderBy: {
          earnedAt: "desc",
        },
        take: 10,
      },
      recognitions: {
        orderBy: {
          awardedAt: "desc",
        },
        take: 10,
        include: {
          contribution: {
            include: {
              community: true,
            },
          },
        },
      },
      contributions: {
        orderBy: {
          activityDate: "desc",
        },
        take: 10,
        include: {
          community: true,
          verifications: true,
          recognitions: true,
        },
      },
    },
  });

  if (!athlete) {
    notFound();
  }

  const totalDistance = athlete.runningActivities.reduce(
    (total, activity) => total + activity.distance,
    0
  );

  const verifiedContributions = athlete.contributions.filter(
    (contribution) => contribution.status === "VERIFIED"
  );

  const fullName =
    `${athlete.firstName} ${athlete.lastName}`.trim();

  const memberSince = new Date(
    athlete.createdAt
  ).getFullYear();

  return (
    <main className="min-h-screen overflow-hidden bg-[#07130f] text-white">
      {/* National Header */}
      <header className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-emerald-300">
              WING LAEN LON THAILAND
            </p>

            <p className="mt-1 text-xs text-white/40">
              NATIONAL ATHLETE IDENTITY
            </p>
          </div>

          <div className="text-right">
            <div className="text-2xl">🇹🇭</div>
            <p className="text-[10px] font-bold tracking-widest text-white/40">
              THAILAND
            </p>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 py-8 md:py-12">
        {/* Hero Passport */}
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-[#102d23] via-[#0b211a] to-[#07130f] shadow-2xl">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-amber-300/5 blur-3xl" />

          <div className="relative p-6 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              {/* Athlete Photo Area */}
              <div className="relative shrink-0">
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-emerald-900 to-slate-900 shadow-xl md:h-52 md:w-52">
                  <div className="text-7xl opacity-80">
                    🏃
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-300/30 bg-emerald-950 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-300">
                  ATHLETE
                </div>
              </div>

              {/* Identity */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    ● ACTIVE MEMBER
                  </span>

                  <span className="text-xs text-white/40">
                    MEMBER SINCE {memberSince}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold tracking-[0.35em] text-emerald-300">
                  THAILAND ATHLETE PASSPORT
                </p>

                <h1 className="mt-2 break-words text-4xl font-black tracking-tight md:text-6xl">
                  {fullName}
                </h1>

                <p className="mt-3 font-mono text-sm tracking-wider text-white/45">
                  NATIONAL RUNNER ID · {athlete.athleteId}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <IdentityBadge
                    label="LEVEL"
                    value={athlete.level}
                  />

                  <IdentityBadge
                    label="XP"
                    value={athlete.xp.toLocaleString()}
                  />

                  <IdentityBadge
                    label="STATUS"
                    value={athlete.status.toUpperCase()}
                  />
                </div>
              </div>
            </div>

            {/* Passport Motto */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                นักกีฬาไม่ได้มีคุณค่าเพียงจากระยะทางที่วิ่ง
                แต่คุณค่าของเขายังเกิดจากสิ่งดี ๆ
                ที่เขาสร้างให้กับผู้คน ชุมชน และประเทศไทย
              </p>
            </div>
          </div>
        </div>

        {/* Impact Numbers */}
        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ImpactCard
            icon="🏃"
            label="TOTAL DISTANCE"
            value={`${totalDistance.toFixed(2)} km`}
          />

          <ImpactCard
            icon="⚡"
            label="EXPERIENCE"
            value={`${athlete.xp.toLocaleString()} XP`}
          />

          <ImpactCard
            icon="❤️"
            label="COMMUNITY IMPACT"
            value={verifiedContributions.length.toString()}
          />

          <ImpactCard
            icon="🏆"
            label="RECOGNITION"
            value={athlete.recognitions.length.toString()}
          />
        </section>

        {/* Community Story */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="COMMUNITY IMPACT"
            title="สิ่งดี ๆ ที่เกิดขึ้นระหว่างทาง"
            subtitle="บันทึกคุณค่าที่นักกีฬาสร้างร่วมกับชุมชน"
          />

          {verifiedContributions.length === 0 ? (
            <EmptyState
              icon="🌱"
              title="เรื่องราวกำลังเริ่มต้น"
              text="เมื่อมี Contribution ที่ผ่านการรับรอง เรื่องราวของนักกีฬาจะปรากฏที่นี่"
            />
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {verifiedContributions.map((contribution) => (
                <article
                  key={contribution.id}
                  className="group overflow-hidden rounded-3xl border border-emerald-300/10 bg-white/[0.04] transition hover:border-emerald-300/30"
                >
                  <div className="bg-gradient-to-r from-emerald-400/10 to-transparent p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-3xl">
                          🌱
                        </div>

                        <h3 className="mt-4 text-xl font-black">
                          {contribution.title}
                        </h3>

                        <p className="mt-2 text-sm font-semibold text-emerald-300">
                          {contribution.community.name}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-black tracking-wider text-emerald-300">
                        ✓ VERIFIED
                      </span>
                    </div>

                    {contribution.description && (
                      <p className="mt-5 text-sm leading-7 text-white/55">
                        {contribution.description}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/35">
                      <span>
                        📅{" "}
                        {new Date(
                          contribution.activityDate
                        ).toLocaleDateString("th-TH")}
                      </span>

                      {contribution.location && (
                        <span>
                          📍 {contribution.location}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Recognition */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="RECOGNITION"
            title="ความดีที่ได้รับการมองเห็น"
            subtitle="การยกย่องที่เกิดจากผลงานและการมีส่วนร่วม"
          />

          {athlete.recognitions.length === 0 ? (
            <EmptyState
              icon="🏆"
              title="ยังไม่มีการยกย่อง"
              text="เมื่อชุมชนหรือองค์กรรับรองผลงาน จะถูกบันทึกไว้ใน Passport นี้"
            />
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {athlete.recognitions.map((recognition) => (
                <article
                  key={recognition.id}
                  className="rounded-3xl border border-amber-300/15 bg-gradient-to-br from-amber-300/10 to-transparent p-6"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 text-3xl">
                      🏆
                    </div>

                    <div>
                      <h3 className="text-lg font-black">
                        {recognition.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {recognition.description ||
                          "ได้รับการยกย่องจากชุมชน"}
                      </p>

                      {recognition.awardedBy && (
                        <p className="mt-4 text-xs font-bold text-amber-300">
                          AWARDED BY · {recognition.awardedBy}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Running Journey */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="ATHLETE JOURNEY"
            title="เส้นทางการวิ่ง"
            subtitle="กิจกรรมที่บันทึกไว้ในประวัติของนักกีฬา"
          />

          {athlete.runningActivities.length === 0 ? (
            <EmptyState
              icon="🏃"
              title="เส้นทางกำลังเริ่มต้น"
              text="เมื่อมีการบันทึกกิจกรรมการวิ่ง ข้อมูลจะปรากฏที่นี่"
            />
          ) : (
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              {athlete.runningActivities.map(
                (activity, index) => (
                  <div
                    key={activity.id}
                    className={`flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between ${
                      index !==
                      athlete.runningActivities.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl">
                        🏃
                      </div>

                      <div>
                        <div className="font-bold">
                          {activity.sport}
                        </div>

                        <div className="mt-1 text-xs text-white/35">
                          {new Date(
                            activity.activityDate
                          ).toLocaleDateString("th-TH")}
                        </div>
                      </div>
                    </div>

                    <div className="text-2xl font-black text-emerald-300">
                      {activity.distance.toFixed(2)} km
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        {/* Future QR Area */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black tracking-[0.3em] text-emerald-300">
                PASSPORT ACCESS
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Digital Athlete Identity
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                Passport นี้สามารถเชื่อมต่อกับ QR Code
                เพื่อให้ผู้คนเข้าถึงประวัติและคุณค่าของนักกีฬาได้จากทุกที่
              </p>
            </div>

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/20 text-center">
              <div>
                <div className="text-3xl">▦</div>
                <div className="mt-1 text-[9px] font-bold tracking-widest text-white/35">
                  QR READY
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 py-8 text-center">
          <div className="text-2xl">🇹🇭</div>

          <p className="mt-3 text-sm font-black tracking-[0.25em]">
            THAILAND ATHLETE PASSPORT
          </p>

          <p className="mt-2 text-xs leading-6 text-white/30">
            Sport · Community · Contribution · Recognition
          </p>

          <p className="mt-4 text-[10px] text-white/20">
            WING LAEN LON THAILAND
          </p>
        </footer>
      </section>
    </main>
  );
}

function IdentityBadge({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <div className="text-[9px] font-bold tracking-widest text-white/35">
        {label}
      </div>

      <div className="mt-1 text-sm font-black text-white">
        {value}
      </div>
    </div>
  );
}

function ImpactCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-2xl">{icon}</div>

      <div className="mt-5 text-[10px] font-bold tracking-[0.2em] text-white/30">
        {label}
      </div>

      <div className="mt-2 text-2xl font-black">
        {value}
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-black tracking-[0.3em] text-emerald-300">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-black">
        {title}
      </h2>

      <p className="mt-2 text-sm text-white/40">
        {subtitle}
      </p>
    </div>
  );
}

function EmptyState({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mt-6 rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 font-black">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/35">
        {text}
      </p>
    </div>
  );
}