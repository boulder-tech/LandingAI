import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import WhyN8n from './components/WhyN8n';
import Security from './components/Security';
import Results from './components/Results';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <UseCases />
        <HowItWorks />
        <WhyN8n />
        <Security />
        <Results />
        <Plans />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;