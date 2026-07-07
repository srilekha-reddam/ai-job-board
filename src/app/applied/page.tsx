"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type AppliedJob = {
  jobId: number;
  title: string;
  company: string;
  appliedDate: string;
};

export default function AppliedJobsPage() {
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  useEffect(() => {
    const storedJobs = JSON.parse(
      localStorage.getItem("appliedJobs") || "[]"
    );

    setAppliedJobs(storedJobs);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-4">
            Applied Jobs
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Track all the jobs you've applied for.
          </p>

          {appliedJobs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">

              <h2 className="text-3xl font-bold mb-3">
                No Applications Yet
              </h2>

              <p className="text-gray-600 mb-6">
                You haven't applied for any jobs yet.
              </p>

              <Link href="/jobs">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Browse Jobs
                </button>
              </Link>

            </div>
          ) : (
            <div className="grid gap-6">

              {appliedJobs.map((job) => (
                <div
                  key={job.jobId}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-center">

                    <div>
                      <h2 className="text-2xl font-bold">
                        {job.title}
                      </h2>

                      <p className="text-blue-600 font-semibold mt-1">
                        {job.company}
                      </p>

                      <p className="text-gray-600 mt-2">
                        Applied On: {job.appliedDate}
                      </p>

                      <p className="text-green-600 font-semibold mt-2">
                        Status: Application Submitted
                      </p>
                    </div>

                    <Link href={`/jobs/${job.jobId}`}>
                      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
                        View Job
                      </button>
                    </Link>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}