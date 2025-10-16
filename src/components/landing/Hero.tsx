export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI + n8n Agents that get{' '}
            <span className="text-primary">real work done</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) 
            that get real work done across your entire stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="btn-primary px-8 py-3 text-lg"
            >
              Get a quick diagnostic →
            </a>
            <a
              href="#use-cases"
              className="btn-secondary px-8 py-3 text-lg"
            >
              See use cases →
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Trusted by teams at fast-growing companies
          </p>
        </div>
      </div>
    </section>
  );
}


