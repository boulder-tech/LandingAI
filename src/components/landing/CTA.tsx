export default function CTA() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready for your first agent?</h2>
        <p className="mt-3 text-foreground/70">
          Book a free diagnostic and get a working MVP in 7–10 days.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            href="mailto:hello@yourstartup.com?subject=Book%20a%20diagnostic"
            className="inline-flex items-center justify-center btn-primary text-sm sm:text-base"
          >
            Book a diagnostic
          </a>
          <a
            href="#use-cases"
            className="inline-flex items-center justify-center btn-secondary text-sm sm:text-base"
          >
            See use cases
          </a>
        </div>
      </div>
    </section>
  );
}


