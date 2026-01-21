
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ali Ahmed',
      role: 'Tech Reviewer • 50k Subs',
      text: '"This platform changed how I work. I used to chase brands for payments for months, now everything is automated through escrow."',
      image: 'https://i.pravatar.cc/150?u=ali',
    },
    {
      name: 'Sara Malik',
      role: 'Fashion Blogger • 120k Followers',
      text: '"The audience auditing tool helped me prove my value to a major fashion brand. It\'s the most professional tool for MENA creators."',
      image: 'https://i.pravatar.cc/150?u=sara',
    },
    {
      name: 'Omar Farooq',
      role: 'Travel Creator • 85k Followers',
      text: '"I love the AI caption tool! It saves me so much time every day. Finally, a platform that actually understands the regional market."',
      image: 'https://i.pravatar.cc/150?u=omar',
    },
  ];

  return (
    <section className="w-full bg-background-light py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-black text-center text-indigo-deep mb-16">Loved by MENA Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined fill-1 text-xl">star</span>
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">{rev.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={rev.image} alt={rev.name} className="size-12 rounded-full border-2 border-primary/20" />
                <div>
                  <p className="font-bold text-indigo-deep text-sm">{rev.name}</p>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
