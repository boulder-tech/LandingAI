import React from 'react';

const Hero = () => {
  return (
    <section className="gradient-bg pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI + n8n Agents that get{' '}
            <span className="text-primary-600">real work done</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Automate processes, connect your tools, and let your agents handle the busy work for your team.
          </p>

          {/* Detailed Subheadline */}
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            We design, deploy, and operate autonomous agents built on n8n (powered by LLMs) that read data, 
            make decisions, and take action across your stack — APIs, DBs, Sheets, Slack, CRMs, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              Get a quick diagnostic →
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              See use cases →
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-400">Company A</div>
              <div className="text-lg font-semibold text-gray-400">Company B</div>
              <div className="text-lg font-semibold text-gray-400">Company C</div>
              <div className="text-lg font-semibold text-gray-400">Company D</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Hero;