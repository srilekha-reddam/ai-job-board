"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jobs from "@/data/jobs";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ApplyPage({ params }: Props) {
  const { id } = use(params);

  const router = useRouter();

  const foundJob = jobs.find((j) => j.id === Number(id));

  if (!foundJob) {
    return notFound();
  }

  // TypeScript now knows this is never undefined
  const job = foundJob;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const appliedJobs = JSON.parse(
      localStorage.getItem("appliedJobs") || "[]"
    );

    const alreadyApplied = appliedJobs.some(
      (item: any) => item.jobId === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    appliedJobs.push({
      jobId: job.id,
      title: job.title,
      company: job.company,
      appliedDate: new Date().toLocaleDateString(),
      applicant: {
        name,
        email,
        phone,
        resume,
        coverLetter,
      },
    });

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(appliedJobs)
    );

    alert("Application submitted successfully!");

    router.push("/applied");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-4xl font-bold mb-2">
            Apply for {job.title}
          </h1>

          <p className="text-xl text-blue-600 mb-8">
            {job.company}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="url"
              placeholder="Resume Link"
              className="w-full border rounded-lg p-3"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            />

            <textarea
              placeholder="Cover Letter"
              className="w-full border rounded-lg p-3 h-40"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit Application
            </button>

          </form>

        </div>
      </main>

      <Footer />
    </>
  );
}