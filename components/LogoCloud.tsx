
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = [
    { name: 'Tech', url: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
    { name: 'Fashion', url: 'https://cdn.worldvectorlogo.com/logos/nike-11.svg' },
    { name: 'Food', url: 'https://cdn.worldvectorlogo.com/logos/starbucks-coffee-logo.svg' },
    { name: 'Fintech', url: 'https://cdn.worldvectorlogo.com/logos/visa-10.svg' },
    { name: 'Travel', url: 'https://cdn.worldvectorlogo.com/logos/airbnb-2-1.svg' },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <h4 className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em] text-center mb-10">
          Trusted by leading brands in Pakistan & MENA
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.url} alt={logo.name} className="h-8 md:h-10 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
