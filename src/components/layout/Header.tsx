export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">

        {/* Brand */}
        <div className="min-w-0">
          <h1 className="truncate text-sm font-bold tracking-wide md:text-xl">
            WING LAEN LON THAILAND
          </h1>

          <p className="hidden text-sm text-gray-500 sm:block">
            Thailand AI Running Platform
          </p>
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          <a href="/">Home</a>

          <a href="/running">Running</a>

          <a href="/events">Events</a>

          <a href="/challenges">Challenges</a>

          <a href="/partners">Partners</a>

          <a href="/dashboard">Dashboard</a>

        </nav>


        {/* Action Buttons */}
        <div className="flex items-center gap-2">

          <a
            href="/login"
            className="rounded-lg border px-2 py-1 text-xs hover:bg-gray-100 md:px-4 md:py-2 md:text-base"
          >
            Login
          </a>


          <a
            href="/passport"
            className="rounded-lg bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700 md:px-4 md:py-2 md:text-base"
          >
            Create Passport
          </a>


          <a
            href="/passport"
            className="hidden rounded-lg border px-4 py-2 hover:bg-gray-100 lg:block"
          >
            My Passport
          </a>

        </div>

      </div>
    </header>
  );
}
