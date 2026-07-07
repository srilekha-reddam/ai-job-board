import Link from "next/link";
import Navbar from "@/components/Navbar";
import jobs from "@/data/jobs";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({ params }: Props) {
  const { id } = await params;

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900">
              {job.title}
            </h1>

            <p className="text-2xl text-blue-600 font-semibold mt-2">
              {job.company}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-2">
                📍 Location
              </h3>

              <p>{job.location}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-2">
                💰 Salary
              </h3>

              <p>{job.salary}</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h3 className="text-lg font-bold mb-2">
                💼 Job Type
              </h3>

              <p>{job.type}</p>
            </div>

          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Job Description
            </h2>

            <p className="text-gray-700 leading-8">
              {job.description}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">

            <Link href="/apply">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </Link>

            <Link href="/jobs">
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition">
                Back to Jobs
              </button>
            </Link>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}