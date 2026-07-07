export default function Stats() {
  const stats = [
    { number: "500+", title: "Jobs Available" },
    { number: "120+", title: "Companies" },
    { number: "25K+", title: "Candidates" },
    { number: "98%", title: "Success Rate" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="text-gray-600 mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}