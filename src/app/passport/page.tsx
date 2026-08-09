import PassportCard from "@/components/passport/PassportCard";
import { runners } from "@/data/mock/runners";

export default function PassportPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      <PassportCard runner={runners[0]} />
    </main>
  );
}
