const steps = [
  {
    num: "01",
    title: "Express diagnostic (60–90 min)",
    desc: "We map automation opportunities and outline a quarterly roadmap.",
  },
  {
    num: "02",
    title: "MVP in 7–10 days",
    desc: "Your first agent in production — complete with metrics, logs, and dashboard.",
  },
  {
    num: "03",
    title: "Scale & governance",
    desc: "Build your internal agent catalog with versioning, alerts, and playbooks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">How It Works</h2>
        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.title} className="card">
              <div className="text-xs tracking-widest text-foreground/60">{s.num}</div>
              <p className="mt-2 font-medium">{s.title}</p>
              <p className="mt-2 text-sm muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


