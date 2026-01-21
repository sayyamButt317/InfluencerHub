
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-[1280px] mx-auto bg-primary rounded-xl p-12 md:p-20 flex flex-col items-center text-center gap-8 shadow-2xl shadow-primary/40 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-deep/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
        
        <h2 className="text-indigo-deep text-4xl md:text-6xl font-black max-w-[800px] relative z-10">
          Ready to grow your digital presence?
        </h2>
        <p className="text-indigo-deep/80 text-xl font-medium max-w-[600px] relative z-10">
          Join 5,000+ brands and 10k+ creators already using InfluencerPlatform.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <button className="bg-indigo-deep text-white h-14 px-10 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
            Create Account
          </button>
          <button className="bg-white text-indigo-deep h-14 px-10 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
