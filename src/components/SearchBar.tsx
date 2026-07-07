export default function SearchBar() {
  return (
    <section className="bg-white py-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="border rounded-lg px-4 py-3">
            <option>Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>

          <button className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700">
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
}