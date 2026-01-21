
import React from 'react';

const SecuritySection: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-20 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200" alt="Secure Collaboration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-2xl flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl font-bold">lock</span>
                  <div>
                    <p className="font-bold text-indigo-deep">Bank-Grade Security</p>
                    <p className="text-xs text-gray-500">Encrypted payments & contracts</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 order-1 lg:order-2 flex flex-col gap-8">
          <h2 className="text-indigo-deep text-4xl font-black leading-tight">Secure Collaboration</h2>
          <p className="text-gray-600 text-lg">We take the stress out of payments and paperwork. Focus on creating while we handle the logistics.</p>
          
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary font-bold bg-primary/10 p-2 rounded-lg">check_circle</span>
              <div>
                <h4 className="font-bold text-indigo-deep text-lg">Escrow Payments</h4>
                <p className="text-gray-500">Funds are held securely and released only when deliverables are approved by both parties.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary font-bold bg-primary/10 p-2 rounded-lg">check_circle</span>
              <div>
                <h4 className="font-bold text-indigo-deep text-lg">Legal Contract Templates</h4>
                <p className="text-gray-500">Region-specific contracts to protect your rights, intellectual property, and usage terms.</p>
              </div>
            </li>
          </ul>
          
          <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-indigo-deep font-bold w-fit shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
            Learn More About Security
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
