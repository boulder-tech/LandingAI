import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Express diagnostic (60–90 min)",
      description: "We map automation opportunities and outline a quarterly roadmap.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "MVP in 7–10 days",
      description: "Your first agent in production — complete with metrics, logs, and dashboard.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Scale & governance",
      description: "Build your internal agent catalog with versioning, alerts, and playbooks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to full-scale deployment, we guide you through every step of the process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  {/* Step number circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary-200 rounded-full -z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  {/* Icon */}
                  <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Start with a free diagnostic →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;