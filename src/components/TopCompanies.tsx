const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Infosys",
  "TCS",
  "Accenture",
  "Wipro",
  "IBM",
];

export default function TopCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Top Hiring Companies
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by leading companies around the world.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 text-center shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {company}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}