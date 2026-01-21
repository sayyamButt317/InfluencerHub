
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-20 py-8 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-indigo-deep text-xs font-bold w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-sm">stars</span>
              #1 Creator Platform in MENA
            </div>
            <h1 className="text-indigo-deep text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
              Bridge the Gap Between <span className="text-primary">Brands</span> & Authentic Creators
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium max-w-[540px] mx-auto lg:mx-0">
              The first all-in-one marketplace for the MENA creator economy. Join thousands of brands and creators scaling their presence today.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="flex-1 sm:flex-none min-w-[160px] items-center justify-center rounded-full h-14 px-8 bg-primary text-indigo-deep text-lg font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all active:scale-95">
              I am a Brand
            </button>
            <button className="flex-1 sm:flex-none min-w-[160px] items-center justify-center rounded-full h-14 px-8 bg-indigo-deep text-white text-lg font-bold hover:-translate-y-1 transition-all active:scale-95">
              I am a Creator
            </button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" 
                  style={{ backgroundImage: `url('https://picsum.photos/100/100?random=${i}')` }}
                />
              ))}
            </div>
            <span>Joined by 10k+ local micro-influencers</span>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 px-4 sm:px-0">
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl sm:rounded-3xl bg-gray-100 overflow-hidden shadow-2xl group mx-auto max-w-md lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Creators working" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-between border border-primary/20 shadow-lg">
              <div>
                <p className="text-indigo-deep font-bold text-sm sm:text-base">Zoya Khan</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Beauty & Lifestyle • 250k Followers</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-primary font-black text-lg sm:text-xl leading-none">98%</span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-gray-400">Authenticity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
