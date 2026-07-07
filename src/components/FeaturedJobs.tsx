import jobs from "@/data/jobs";
import JobCard from "@/components/JobCard";

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore the latest opportunities from top companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
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
    </section>
  );
}