import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
} from "react-icons/fa";

import FavoriteButton from "@/components/FavoriteButton";

type JobProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
};

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  type,
}: JobProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl transition-all">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <FavoriteButton id={id} />

      </div>

      <p className="text-blue-600 font-semibold mb-4">
        {company}
      </p>

      <p className="flex items-center gap-2 mb-2">
        <FaMapMarkerAlt />
        {location}
      </p>

      <p className="flex items-center gap-2 mb-2">
        <FaMoneyBillWave />
        {salary}
      </p>

      <p className="flex items-center gap-2 mb-5">
        <FaBriefcase />
        {type}
      </p>

      <Link href={`/jobs/${id}`}>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </Link>

    </div>
  );
}