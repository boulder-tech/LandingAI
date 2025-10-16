const valueProps = [
  {
    title: "From idea to impact in days",
    desc: "MVP live in 7–10 days, with logs, metrics, and a control panel.",
  },
  {
    title: "Instant integrations",
    desc: "400+ native connectors (Google, Slack, Notion, Postgres, Webhooks, AWS, etc.).",
  },
  {
    title: "Security & governance",
    desc: "Roles, optional human review, audit trail, and risk limits.",
  },
  {
    title: "End-to-end operations",
    desc: "We handle alerting, maintenance, and continuous improvement.",
  },
];

export default function ValueProps() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="value-props">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Value Props</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-medium text-base sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


