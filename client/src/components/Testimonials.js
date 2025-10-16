import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "In two weeks we moved from manual updates to an agent that feeds our CRM and alerts us on Slack. We cut 60% of our data-entry time.",
      author: "Sarah Chen",
      role: "Operations Manager",
      company: "TechFlow Inc.",
      avatar: "SC"
    },
    {
      quote: "The price monitoring agent has been a game-changer. We now catch pricing opportunities instantly and our revenue increased by 23%.",
      author: "Marcus Rodriguez",
      role: "E-commerce Director",
      company: "RetailMax",
      avatar: "MR"
    },
    {
      quote: "Our customer support team is now 3x more efficient. The AI agent handles routine inquiries while our team focuses on complex issues.",
      author: "Emily Johnson",
      role: "Head of Customer Success",
      company: "SaaS Solutions",
      avatar: "EJ"
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses using our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card group hover:-translate-y-1 transition-transform duration-300">
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-gray-600">Agents Deployed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">7-10</div>
            <div className="text-gray-600">Days to MVP</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;