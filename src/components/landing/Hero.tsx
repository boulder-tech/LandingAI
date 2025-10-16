export default function Hero() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-24 md:py-28">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          AI + n8n Agents that get real work done.
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl muted">
          Automate processes, connect your tools, and let your agents handle the busy work for your team.
        </p>

        <p className="mt-6 text-sm sm:text-base muted max-w-3xl mx-auto">
          We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) that read data, make decisions, and take action across your stack — APIs, DBs, Sheets, Slack, CRMs, and more.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center btn-primary text-sm sm:text-base"
          >
            Get a quick diagnostic →
          </a>
          <a
            href="#use-cases"
            className="inline-flex items-center justify-center btn-secondary text-sm sm:text-base"
          >
            See use cases →
          </a>
        </div>
      </div>
    </section>
  );
}


