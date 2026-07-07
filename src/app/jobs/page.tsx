"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import jobs from "@/data/jobs";
import Footer from "@/components/Footer";

export default function JobsPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(keyword.toLowerCase());

    const matchesLocation =
      location === "" ||
      job.location.toLowerCase().includes(location.toLowerCase());

    const matchesType =
      jobType === "" || job.type === jobType;

    return matchesKeyword && matchesLocation && matchesType;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-3">
            Browse Jobs
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Search and filter jobs from top companies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <input
              type="text"
              placeholder="Job title / Company"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">All Types</option>
              <option>Full Time</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>

            <button
              onClick={() => {
                setKeyword("");
                setLocation("");
                setJobType("");
              }}
              className="bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Clear Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
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
        </div>
      </main>
      <Footer />
    </>
  );
}