
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 sm:py-16 px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-indigo-deep">
              <span className="material-symbols-outlined text-xl">hub</span>
            </div>
            <h2 className="text-indigo-deep text-xl font-bold">InfluencerPlatform</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Empowering the next generation of MENA's creator economy with trust, tools, and transparency.
          </p>
          <div className="flex gap-4">
            {['public', 'chat', 'alternate_email'].map((icon) => (
              <a key={icon} className="text-gray-400 hover:text-primary transition-colors cursor-pointer" href="#">
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="sm:pl-8">
          <h4 className="font-bold text-indigo-deep mb-6 uppercase text-xs tracking-widest">Platform</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
            {['Marketplace', 'Creator Tools', 'Auditing API', 'Pricing'].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="sm:pl-8">
          <h4 className="font-bold text-indigo-deep mb-6 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
            {['Blog', 'Success Stories', 'Help Center', 'Regional Data'].map((item) => (
              <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-indigo-deep mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
          <p className="text-sm text-gray-500 mb-6">Weekly insights into the MENA creator economy.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              className="bg-gray-50 border border-gray-100 rounded-full px-5 h-12 text-sm focus:ring-2 focus:ring-primary focus:border-transparent" 
              placeholder="Email address"
            />
            <button className="bg-primary text-indigo-deep font-bold px-6 h-12 rounded-full text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/10">
              Join Newsletter
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between text-[10px] uppercase font-bold tracking-widest text-gray-400 gap-6 text-center md:text-left">
        <p>© 2024 InfluencerPlatform MENA. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
            <a key={link} className="hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
