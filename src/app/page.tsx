import HeroCarousel from "@/components/HeroCarousel";

import Statistics from "@/components/home/Statistics";
import PassportPreview from "@/components/home/PassportPreview";
import DashboardPreview from "@/components/home/DashboardPreview";
import ProvinceRanking from "@/components/home/ProvinceRanking";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import ChallengeSection from "@/components/home/ChallengeSection";
import PartnerSection from "@/components/home/PartnerSection";
import CoffeeSection from "@/components/home/CoffeeSection";
import EnvironmentSection from "@/components/home/EnvironmentSection";
import AIPlatformSection from "@/components/home/AIPlatformSection";
import MarketplaceSection from "@/components/home/MarketplaceSection";
import RecommendationSection from "@/components/home/RecommendationSection";
import RunningActivitySection from "@/components/home/RunningActivitySection";
import NewsSection from "@/components/home/NewsSection";


export default function Home() {
  return (
    <main>

      <HeroCarousel />

      <Statistics />

      <PassportPreview />

      <DashboardPreview />

      <ProvinceRanking />

      <UpcomingEvents />

      <ChallengeSection />

      <PartnerSection />

      <MarketplaceSection />

      <RecommendationSection />

      <RunningActivitySection />

      <CoffeeSection />

      <EnvironmentSection />

      <AIPlatformSection />

      <NewsSection />

    </main>
  );
}
