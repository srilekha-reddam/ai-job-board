"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import jobs from "@/data/jobs";

export default function FavoritesPage() {
  const [favoriteJobs, setFavoriteJobs] = useState<typeof jobs>([]);

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const filteredJobs = jobs.filter((job) =>
      favorites.includes(job.id)
    );

    setFavoriteJobs(filteredJobs);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-4">
            ❤️ Favorite Jobs
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Jobs you&apos;ve saved for later.
          </p>

          {favoriteJobs.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold">
                No Favorite Jobs
              </h2>

              <p className="text-gray-500 mt-4">
                Save jobs by clicking the heart icon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  type={job.type}
                />
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}