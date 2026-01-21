
import React from 'react';

interface CreatorToolsProps {
  onOpenAICaptions: () => void;
}

const CreatorTools: React.FC<CreatorToolsProps> = ({ onOpenAICaptions }) => {
  const tools = [
    {
      icon: 'auto_awesome',
      title: 'AI Captions',
      desc: 'Generate viral-ready captions for Instagram, TikTok, and YouTube in seconds.',
      action: onOpenAICaptions,
      primary: true,
    },
    {
      icon: 'contact_page',
      title: 'Dynamic Media Kits',
      desc: 'Live-updating media kits that sync with your social stats to impress brands.',
    },
    {
      icon: 'calculate',
      title: 'Rate Calculators',
      desc: 'Know exactly what to charge based on your niche, reach, and regional benchmarks.',
    },
  ];

  return (
    <section className="w-full bg-indigo-deep text-white py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary text-xs font-bold w-fit mb-6">
            CREATOR TOOLS
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Tools for Growth</h2>
          <p className="text-gray-400 text-lg max-w-[700px]">
            We empower creators with professional business tools to turn their passion into a sustainable career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              onClick={tool.action}
              className={`flex flex-col gap-4 p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group ${tool.primary ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}
            >
              <span className={`material-symbols-outlined text-4xl group-hover:scale-110 transition-transform ${tool.primary ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                {tool.icon}
              </span>
              <h3 className="text-xl font-bold">{tool.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{tool.desc}</p>
              {tool.primary && (
                <span className="text-primary text-xs font-bold mt-2 uppercase tracking-widest flex items-center gap-1">
                  Try Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorTools;
