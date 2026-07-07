import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            AI Job Board
          </h2>

          <p className="text-gray-400">
            Helping job seekers find their dream career with top companies.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
            <li><Link href="/apply">Apply</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Companies
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Google</li>
            <li>Microsoft</li>
            <li>Amazon</li>
            <li>TCS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            support@aijobboard.com
          </p>

          <p className="text-gray-400 mt-2">
            Hyderabad, India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 AI Job Board. All rights reserved.
      </div>
    </footer>
  );
}