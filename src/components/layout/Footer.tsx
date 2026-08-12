export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold">
          WING LAEN LON THAILAND
        </h2>

        <p className="mt-2 text-gray-300">
          Thailand AI Running Platform
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div>
            <h3 className="font-semibold mb-2">
              Platform
            </h3>

            <p>Running</p>
            <p>Runner Passport</p>
            <p>Dashboard</p>
            <p>AI Platform</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Community
            </h3>

            <p>Organizations</p>
            <p>Projects</p>
            <p>Coffee</p>
            <p>Environment</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Vision
            </h3>

            <p>
              AI assists people.
            </p>

            <p>
              Humans remain the decision makers.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
          @ 2026 WING LAEN LON THAILAND
        </div>

      </div>
    </footer>
  );
}
