/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ValueProps } from './components/ValueProps.tsx';
import { Footer } from './components/Footer.tsx';
import { EditorialModal } from './components/EditorialModal.tsx';

export default function App() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [modalType, setModalType] = useState<'faq' | 'privacy' | 'terms' | 'contact' | null>(null);

  const handleJoinClick = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 350);
    }
  };

  return (
    <div className="min-h-screen bg-[#EAE6DE] text-[#202832] flex flex-col font-sans selection:bg-[#EF8557]/20 selection:text-[#202832]">
      {/* Section A: Top Navigation */}
      <Navbar
        onJoinClick={handleJoinClick}
        onOpenFaq={() => setModalType('faq')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section B: Hero with Waitlist & Dashboard Mockup */}
        <HeroSection emailInputRef={emailInputRef} />

        {/* Section C: Three Value Propositions */}
        <ValueProps />
      </main>

      {/* Section D: Footer */}
      <Footer
        onOpenPrivacy={() => setModalType('privacy')}
        onOpenTerms={() => setModalType('terms')}
        onOpenContact={() => setModalType('contact')}
      />

      {/* Editorial Information Modals */}
      <EditorialModal
        isOpen={modalType === 'faq'}
        onClose={() => setModalType(null)}
        title="Frequently Asked Questions"
        category="ZONEK FAQ"
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-bold text-[#226192] text-base">
              What is ZONEK?
            </h4>
            <p className="mt-1 text-[#202832]/80 text-sm">
              ZONEK is an upcoming India-focused business launch intelligence platform. Its purpose is to help aspiring entrepreneurs research business ideas, explore local markets, evaluate competition, and organize actionable steps before committing capital.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#226192] text-base">
              Is the dashboard shown on this page real data?
            </h4>
            <p className="mt-1 text-[#202832]/80 text-sm">
              No. The dashboard on this landing page is an illustrative product preview created to demonstrate how research, location indicators, and next steps will be structured inside ZONEK. We do not represent illustrative samples as verified real-world findings.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#226192] text-base">
              When will ZONEK launch?
            </h4>
            <p className="mt-1 text-[#202832]/80 text-sm">
              The platform is actively in development. By joining our waitlist, you will receive honest progress updates and early invitations as initial testing cohorts open.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#226192] text-base">
              Who is ZONEK designed for?
            </h4>
            <p className="mt-1 text-[#202832]/80 text-sm">
              ZONEK is built for aspiring entrepreneurs, first-time business owners, franchise seekers, and independent operators looking to investigate market viability systematically before investing.
            </p>
          </div>
        </div>
      </EditorialModal>

      <EditorialModal
        isOpen={modalType === 'privacy'}
        onClose={() => setModalType(null)}
        title="Privacy Policy"
        category="Legal & Trust"
      >
        <div className="space-y-3">
          <p>
            At ZONEK, we value your privacy and believe in transparent data practices. During our pre-launch stage, we only collect the email address you voluntarily submit to join our early access waitlist.
          </p>
          <p>
            <strong>How We Use Your Email:</strong> We use your email strictly to communicate launch updates, invitations to early access, and relevant product milestones.
          </p>
          <p>
            <strong>No Third-Party Sharing:</strong> We do not sell, rent, or trade your contact information to advertisers, marketers, or data brokers.
          </p>
          <p>
            <strong>Unsubscribe Anytime:</strong> Every email we send includes an immediate opt-out link, or you can contact us at any time to remove your details from our list.
          </p>
        </div>
      </EditorialModal>

      <EditorialModal
        isOpen={modalType === 'terms'}
        onClose={() => setModalType(null)}
        title="Terms of Service"
        category="Legal & Trust"
      >
        <div className="space-y-3">
          <p>
            Welcome to the ZONEK pre-launch website. By browsing this page or joining the waitlist, you agree to these terms:
          </p>
          <p>
            <strong>Informational Purposes Only:</strong> The concepts, metrics, and visual demonstrations displayed on this website are illustrative previews of software under development. They do not constitute guaranteed investment, legal, financial, or commercial advice.
          </p>
          <p>
            <strong>No Performance Guarantees:</strong> Starting a business carries inherent risks. ZONEK provides research tools and analytical frameworks to assist your investigation, but does not guarantee business profitability or commercial outcomes.
          </p>
          <p>
            <strong>Intellectual Property:</strong> All content, designs, and trademarks displayed on this site belong to ZONEK.
          </p>
        </div>
      </EditorialModal>

      <EditorialModal
        isOpen={modalType === 'contact'}
        onClose={() => setModalType(null)}
        title="Contact ZONEK"
        category="Inquiries"
      >
        <div className="space-y-3">
          <p>
            Have questions about ZONEK or interested in partnering with us during our beta development phase?
          </p>
          <div className="p-4 bg-white border border-[#D9D5CD] rounded-md space-y-2">
            <div>
              <span className="text-xs text-[#707782] block">General & Early Access Inquiries</span>
              <a
                href="mailto:contact@zonek.in"
                className="font-mono font-medium text-[#226192] hover:underline text-sm"
              >
                contact@zonek.in
              </a>
            </div>
            <div>
              <span className="text-xs text-[#707782] block">Headquarters</span>
              <span className="text-sm text-[#202832]">Bengaluru / Mangaluru, India</span>
            </div>
          </div>
          <p className="text-xs text-[#707782]">
            We review every inquiry and respond to founder questions within 2–3 business days.
          </p>
        </div>
      </EditorialModal>
    </div>
  );
}
