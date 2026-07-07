import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          AI Job Board
        </Link>

        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/jobs">Jobs</Link>
          </li>

          <li>
            <Link href="/favorites">
              Favorites
            </Link>
          </li>

          <li>
            <Link href="/apply">
              Apply
            </Link>
          </li>

        </ul>

        <div className="flex gap-3">

          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
            Login
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}