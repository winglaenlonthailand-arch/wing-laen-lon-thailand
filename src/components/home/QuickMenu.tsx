import Card from "@/components/ui/Card";

const menus = [
  {
    icon: "๐",
    title: "Running",
    description: "Running Events & Activities",
  },
  {
    icon: "๐ชช",
    title: "Runner Passport",
    description: "National Runner Identity",
  },
  {
    icon: "๐“",
    title: "Dashboard",
    description: "National Running Dashboard",
  },
  {
    icon: "๐ค–",
    title: "AI Platform",
    description: "AI Assistant Platform",
  },
  {
    icon: "๐ฑ",
    title: "Environment",
    description: "Carbon & Environment",
  },
  {
    icon: "โ•",
    title: "Coffee",
    description: "Coffee Community",
  },
  {
    icon: "๐๏ธ",
    title: "Community",
    description: "Community Network",
  },
  {
    icon: "๐“",
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
