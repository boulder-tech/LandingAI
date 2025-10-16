const faqs = [
  {
    q: "Do I need technical skills?",
    a: "No. We deliver a clean UI, docs, and training. Your team can operate with zero code.",
  },
  {
    q: "Can agents make mistakes?",
    a: "We add validations and optional human review for critical actions. Everything is logged.",
  },
  {
    q: "What access do you need?",
    a: "Just the tools you already use, plus examples of your workflow and business logic. We orchestrate the rest.",
  },
  {
    q: "Where does it run?",
    a: "Either in your infrastructure or ours — we decide together based on compliance and privacy needs.",
  },
  {
    q: "How do we measure ROI?",
    a: "KPIs are defined from day one (time saved, tickets resolved, leads processed, etc.).",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16" id="faq">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl section-title">FAQ</h2>
        <dl className="mt-6 space-y-5">
          {faqs.map((f) => (
            <div key={f.q} className="card">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}


