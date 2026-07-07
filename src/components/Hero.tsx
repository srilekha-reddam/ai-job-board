export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Dream Job Today
        </h1>

        <p className="text-xl text-blue-100 mb-10">
          Discover thousands of opportunities from top companies around the world.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Search Jobs
          </button>

          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700">
            Browse Companies
          </button>
        </div>
      </div>
    </section>
  );
}