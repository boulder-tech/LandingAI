const plans = [
  {
    name: "Starter",
    desc: "1 agent, up to 3 integrations, basic dashboard",
  },
  {
    name: "Growth",
    desc: "3–5 agents, 10+ integrations, dashboards & alerts",
  },
  {
    name: "Enterprise",
    desc: "unlimited agents, SSO, compliance, 24/7 support",
  },
];

export default function Plans() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="plans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Plans</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card">
              <div className="text-lg font-medium">{p.name}</div>
              <p className="mt-2 text-sm muted">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-foreground/70">(Custom proposal depending on systems and volume.)</p>
      </div>
    </section>
  );
}


