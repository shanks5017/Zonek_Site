import React from 'react';
import { Lightbulb, MapPin, ClipboardList } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const items = [
    {
      number: '01',
      heading: 'What should I start?',
      description: 'Explore business ideas that fit your budget, interests and goals.',
      icon: Lightbulb,
    },
    {
      number: '02',
      heading: 'Where should I start?',
      description: 'Compare locations using available evidence about demand, competition and local conditions.',
      icon: MapPin,
    },
    {
      number: '03',
      heading: 'What should I do next?',
      description: 'Turn your research into a practical plan with clear next steps and important risks to consider.',
      icon: ClipboardList,
    },
  ];

  return (
    <section id="how-it-works" className="w-full relative">
      {/* Delicate Horizontal Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="border-t border-[#D9D5CD]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div id="discover" className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9D5CD]/80">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`group flex flex-col justify-between transition-colors duration-200 ${
                  index === 0
                    ? 'pb-10 md:pb-0 md:pr-10 lg:pr-12'
                    : index === 1
                    ? 'py-10 md:py-0 md:px-10 lg:px-12'
                    : 'pt-10 md:pt-0 md:pl-10 lg:pl-12'
                }`}
              >
                <div>
                  {/* Top Line: Small Orange Number + Restrained Blue Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-heading font-semibold text-xs tracking-wider text-[#EF8557]">
                      {item.number}
                    </span>
                    <div className="w-7 h-7 rounded-md bg-white/70 border border-[#D9D5CD] flex items-center justify-center text-[#226192] transition-colors group-hover:border-[#226192]/30 shadow-2xs">
                      <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#226192] tracking-tight leading-snug">
                    {item.heading}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#202832]/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
