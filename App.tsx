
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import FeaturesTrust from './components/FeaturesTrust';
import CreatorTools from './components/CreatorTools';
import SecuritySection from './components/SecuritySection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AICaptionTool from './components/AICaptionTool';

const App: React.FC = () => {
  const [showAITool, setShowAITool] = useState(false);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <FeaturesTrust />
        
        {/* Creator Tools with internal AI Caption Logic */}
        <div id="tools">
           <CreatorTools onOpenAICaptions={() => setShowAITool(true)} />
        </div>

        <SecuritySection />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />

      {/* Modal for AI Caption Tool */}
      {showAITool && (
        <AICaptionTool onClose={() => setShowAITool(false)} />
      )}
    </div>
  );
};

export default App;
