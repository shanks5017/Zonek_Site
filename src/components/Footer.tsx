import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
}) => {
  return (
    <footer className="w-full bg-[#EAE6DE]">
      {/* Thin Horizontal Top Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="border-t border-[#D9D5CD]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left Side */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-[#707782]">
            <span className="font-heading font-bold text-[#226192] tracking-tight text-base sm:text-lg">
              ZONEK
            </span>
            <span className="w-px h-3.5 bg-[#D9D5CD]" aria-hidden="true" />
            <span className="text-[#202832]/75 font-normal">
              Business intelligence for entrepreneurs.
            </span>
          </div>

          {/* Right Side Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm text-[#707782]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#226192] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#226192] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-[#226192] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
