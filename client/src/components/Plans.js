import React from 'react';

const Plans = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      features: [
        "1 agent",
        "up to 3 integrations",
        "basic dashboard",
        "Email support",
        "Standard security"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      description: "Ideal for growing businesses",
      features: [
        "3–5 agents",
        "10+ integrations",
        "dashboards & alerts",
        "Priority support",
        "Advanced security",
        "Custom integrations"
      ],
      cta: "Start Growth Plan",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      features: [
        "unlimited agents",
        "SSO",
        "compliance",
        "24/7 support",
        "Dedicated success manager",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="plans" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team's needs. All plans include our core agent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative card group hover:-translate-y-1 transition-transform duration-300 ${
                plan.popular ? 'ring-2 ring-primary-600 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom proposal note */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6">
              (Custom proposal depending on systems and volume.)
            </p>
            <button className="btn-secondary">
              Contact Us for Custom Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;