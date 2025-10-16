const bullets = [
  "40–70% less time spent on repetitive tasks",
  "Sharp drop in operational errors",
  "Faster internal response times",
  "Real-time visibility with dashboards",
  "(Indicative results — vary by process and data quality.)",
];

export default function Results() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="results">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Results You Can Expect</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {bullets.map((b) => (
            <li key={b} className="card muted">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


