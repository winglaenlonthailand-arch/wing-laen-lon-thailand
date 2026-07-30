import Card from "@/components/ui/Card";

const menus = [
  {
    icon: "🏃",
    title: "Running",
    description: "Running Events & Activities",
  },
  {
    icon: "🪪",
    title: "Runner Passport",
    description: "National Runner Identity",
  },
  {
    icon: "📊",
    title: "Dashboard",
    description: "National Running Dashboard",
  },
  {
    icon: "🤖",
    title: "AI Platform",
    description: "AI Assistant Platform",
  },
  {
    icon: "🌱",
    title: "Environment",
    description: "Carbon & Environment",
  },
  {
    icon: "☕",
    title: "Coffee",
    description: "Coffee Community",
  },
  {
    icon: "🏘️",
    title: "Community",
    description: "Community Network",
  },
  {
    icon: "📁",
    title: "Projects",
    description: "Project Management",
  },
];

export default function QuickMenu() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-8 text-3xl font-bold">
        Quick Access
      </h2>

      <div className="grid gap-6 md:grid-cols-4">

        {menus.map((menu) => (
          <Card key={menu.title}>

            <div className="text-4xl">
              {menu.icon}
            </div>

            <h3 className="mt-4 text-xl font-bold">
              {menu.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {menu.description}
            </p>

          </Card>
        ))}

      </div>

    </section>
  );
}