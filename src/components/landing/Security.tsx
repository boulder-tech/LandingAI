const bullets = [
  "Permission control per integration and action.",
  "Optional human review for sensitive steps (e.g. payments).",
  "Full traceability: logs, versioning, audit trails.",
  "Environment isolation: dev/staging/prod with encrypted secrets.",
];

export default function Security() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="security">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Security & Compliance</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {bullets.map((b) => (
            <li key={b} className="card muted">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


