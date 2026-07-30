export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-xl font-bold tracking-wide">
            WING LAEN LON THAILAND
          </h1>

          <p className="text-sm text-gray-500">
            Thailand AI Running Platform
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-6">

          <a href="/">Home</a>

          <a href="/running">Running</a>

          <a href="/events">Events</a>

          <a href="/challenges">Challenges</a>

          <a href="/partners">Partners</a>

          <a href="/dashboard">Dashboard</a>

        </nav>

        <div className="hidden md:flex items-center gap-3">

          <a
            href="/login"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </a>

          <a
            href="/passport"
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            My Passport
          </a>

        </div>

      </div>
    </header>
  );
}