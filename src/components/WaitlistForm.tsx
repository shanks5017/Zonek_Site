import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  inputRef?: React.RefObject<HTMLInputElement | null>;
  onSuccessSubmitted?: (email: string) => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ inputRef, onSuccessSubmitted }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const stored = localStorage.getItem('zonek_waitlist_emails');
      const list: string[] = stored ? JSON.parse(stored) : [];
      if (list.includes(cleanEmail.toLowerCase())) {
        setStatus('error');
        setErrorMessage("You're already on our waitlist with this email address.");
        return;
      }

      setStatus('loading');
      setErrorMessage('');

      setTimeout(() => {
        list.push(cleanEmail.toLowerCase());
        localStorage.setItem('zonek_waitlist_emails', JSON.stringify(list));
        setStatus('success');
        if (onSuccessSubmitted) {
          onSuccessSubmitted(cleanEmail);
        }
      }, 600);
    } catch {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
      }, 500);
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-lg mt-6 p-5 bg-white border border-[#D9D5CD] rounded-xl shadow-sm transition-all animate-fadeIn">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#27845D] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-semibold text-[#226192] text-base sm:text-lg leading-tight">
              You're on the list.
            </h4>
            <p className="text-sm text-[#202832]/80 mt-1 leading-relaxed">
              Thanks for your interest in ZONEK. We'll share updates about the launch and early access when available.
            </p>
            <p className="text-xs text-[#707782] mt-3 font-mono">
              Registered: {email}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="w-full" noValidate>
        {/* Input and CTA Controls (Equal in height, properly aligned) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
          <div className="relative flex-1">
            <label htmlFor="hero-email-input" className="sr-only">
              Email address
            </label>
            <input
              ref={inputRef}
              id="hero-email-input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="Enter your email address"
              disabled={status === 'loading'}
              autoComplete="email"
              className={`w-full h-12 px-4 rounded-lg bg-white border text-[#202832] placeholder:text-[#707782] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#226192]/20 focus:border-[#226192] transition-colors ${
                status === 'error' ? 'border-[#C74646]' : 'border-[#D9D5CD] hover:border-[#b8b3a8]'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="h-12 px-6 rounded-lg bg-[#EF8557] hover:bg-[#e27647] active:bg-[#d46637] text-white font-medium text-sm md:text-base inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shrink-0 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#EF8557]/30 shadow-xs hover:shadow-sm"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>Join the Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {status === 'error' && errorMessage && (
          <p className="mt-2 text-xs text-[#C74646] font-medium" role="alert">
            {errorMessage}
          </p>
        )}

        <div className="flex items-center gap-1.5 mt-3 text-xs text-[#707782]">
          <Lock className="w-3.5 h-3.5 text-[#707782] shrink-0" />
          <span>No spam. Just important updates about ZONEK.</span>
        </div>
      </form>
    </div>
  );
};
