import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
  onOpenFaq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onOpenFaq }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#EAE6DE]/90 backdrop-blur-xs border-b border-[#D9D5CD]/70 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-18 flex items-center justify-between">
        {/* Left: ZONEK Wordmark */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="font-heading font-bold text-xl tracking-tight text-[#226192] select-none hover:opacity-90 transition-opacity"
          >
            ZONEK
          </a>
        </div>

        {/* Centre Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#226192]/80">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-[#226192] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-[#226192] transition-colors cursor-pointer py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('discover')}
            className="hover:text-[#226192] transition-colors cursor-pointer py-1"
          >
            Discover
          </button>
          <button
            onClick={onOpenFaq}
            className="hover:text-[#226192] transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
        </nav>

        {/* Right: Join the Waitlist Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onJoinClick}
            className="h-9 px-4 rounded-md bg-[#EF8557] hover:bg-[#e27647] active:bg-[#d46637] text-white text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#226192] hover:text-[#184d78] rounded transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#D9D5CD] px-6 py-4 space-y-3 animate-fadeIn">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left py-1.5 text-sm font-medium text-[#226192]"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left py-1.5 text-sm font-medium text-[#202832] hover:text-[#226192]"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('discover')}
            className="block w-full text-left py-1.5 text-sm font-medium text-[#202832] hover:text-[#226192]"
          >
            Discover
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFaq();
            }}
            className="block w-full text-left py-1.5 text-sm font-medium text-[#202832] hover:text-[#226192]"
          >
            FAQ
          </button>
        </div>
      )}
    </header>
  );
};
