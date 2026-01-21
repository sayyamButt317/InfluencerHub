
import React from 'react';

const FeaturesTrust: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="size-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">verified_user</span>
          </div>
          <h2 className="text-indigo-deep text-4xl font-black leading-tight">Marketplace with Trust</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Don't waste your budget on bots. Our advanced auditing tools ensure you only work with authentic influencers who have real impact.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-3xl">analytics</span>
              <h3 className="font-bold text-indigo-deep">Audience Auditing</h3>
              <p className="text-sm text-gray-500">Deep dive into follower demographics, location, and real engagement rates.</p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-3xl">security</span>
              <h3 className="font-bold text-indigo-deep">Fraud Detection</h3>
              <p className="text-sm text-gray-500">AI-powered tools to identify fake engagement, bot accounts, and pod activity.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
             <img src="https://picsum.photos/seed/influencer1/600/800" alt="Influencer Analytics" className="w-full h-full object-cover" />
          </div>
          <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-xl mt-8">
             <img src="https://picsum.photos/seed/influencer2/600/800" alt="Engagement Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTrust;
