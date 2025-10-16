import React from 'react';

const Results = () => {
  const results = [
    {
      metric: "40–70%",
      description: "less time spent on repetitive tasks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-green-600"
    },
    {
      metric: "Sharp drop",
      description: "in operational errors",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "text-blue-600"
    },
    {
      metric: "Faster",
      description: "internal response times",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-purple-600"
    },
    {
      metric: "Real-time",
      description: "visibility with dashboards",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "text-orange-600"
    }
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Results You Can Expect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Measurable improvements that impact your bottom line from day one.
          </p>
          <p className="text-sm text-gray-500 italic">
            (Indicative results — vary by process and data quality.)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="card text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className={`${result.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {result.icon}
              </div>
              <div className={`text-3xl font-bold ${result.color} mb-2`}>
                {result.metric}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Real-time Dashboard
            </h3>
            <p className="text-gray-600">
              Monitor your agents' performance with comprehensive metrics and insights.
            </p>
          </div>
          
          {/* Mock dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Tasks Completed</h4>
                <span className="text-green-600 text-sm font-medium">+24%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">This month</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Time Saved</h4>
                <span className="text-blue-600 text-sm font-medium">+67%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">342h</div>
              <div className="text-sm text-gray-600">This month</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Error Rate</h4>
                <span className="text-red-600 text-sm font-medium">-89%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">0.3%</div>
              <div className="text-sm text-gray-600">This month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;