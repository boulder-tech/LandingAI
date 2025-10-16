const bullets = [
  { title: "Transparency", desc: "every step in the flow is auditable." },
  { title: "Flexibility", desc: "deterministic logic plus LLM reasoning where it adds value." },
  { title: "Cost efficiency", desc: "no vendor lock-in, full control of your stack." },
  { title: "Scalability", desc: "queues, workers, and orchestration for any workload." },
];

export default function WhyN8n() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="why-n8n">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">Why n8n (+ LLMs)</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {bullets.map((b) => (
            <li key={b.title} className="card">
              <span className="font-medium">{b.title}:</span> <span className="muted">{b.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


