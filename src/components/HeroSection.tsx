import React from 'react';
import { WaitlistForm } from './WaitlistForm.tsx';
import heroMockup from '../public/hero.png';

interface HeroSectionProps {
  emailInputRef: React.RefObject<HTMLInputElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ emailInputRef }) => {
  return (
    <section className="relative w-full pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 bg-[#ECE7DD] border-b border-[#D9D5CD] overflow-hidden">
      
      {/* Centered Maximum Content Width (~1440px) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative">
        
        {/* Two-Column Grid (~44% text and ~56% dashboard, 40-56px gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-start lg:items-center">
          
          {/* Left Column (approx 44%): lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            
            {/* Eyebrow with Orange Accent Line */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[2px] bg-[#EF8557] shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#226192] font-heading">
                BUSINESS DECISIONS, BACKED BY EVIDENCE
              </span>
            </div>

            {/* Headline: Manrope Semibold, Controlled Line Breaks, Line Height ~1.08-1.12 */}
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] lg:text-[45px] xl:text-[50px] leading-[1.10] tracking-tight text-[#202832]">
              <span className="text-[#226192] block">
                Don't just start a business.
              </span>
              <span className="text-[#EF8557] block mt-1">
                Understand the opportunity first.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] text-[#202832]/85 leading-relaxed max-w-lg font-normal">
              Explore business opportunities, compare locations and competition, and organise the research you need before making your next business decision.
            </p>

            {/* Waitlist Form with Proper Alignment */}
            <div className="mt-6 sm:mt-7">
              <WaitlistForm inputRef={emailInputRef} />
            </div>
          </div>

          {/* Right Column (approx 56%): lg:col-span-7 with Product Mockup */}
          <div className="lg:col-span-7 relative w-full pt-2 lg:pt-0 flex items-center justify-center">
            <div className="relative w-full transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={heroMockup}
                alt="ZONEK Business Launch Intelligence Mockup"
                className="w-full h-auto object-contain select-none block"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
