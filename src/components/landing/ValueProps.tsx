const valueProps = [
  {
    icon: "⚡",
    title: "From idea to impact in days",
    desc: "MVP live in 7–10 days, with logs, metrics, and a control panel.",
  },
  {
    icon: "🔗",
    title: "Instant integrations",
    desc: "400+ native connectors (Google, Slack, Notion, Postgres, Webhooks, AWS, etc.).",
  },
  {
    icon: "🔒",
    title: "Security & governance",
    desc: "Roles, optional human review, audit trail, and risk limits.",
  },
  {
    icon: "🚀",
    title: "End-to-end operations",
    desc: "We handle alerting, maintenance, and continuous improvement.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-white" id="value-props">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose AI Boulder Tech?</h2>
          <p className="section-subtitle">
            We deliver autonomous agents that actually work in production
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((item) => (
            <div key={item.title} className="card text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


