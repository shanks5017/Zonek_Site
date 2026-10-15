import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface EditorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  children: React.ReactNode;
}

export const EditorialModal: React.FC<EditorialModalProps> = ({
  isOpen,
  onClose,
  title,
  category = 'ZONEK Informational',
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202832]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D9D5CD] rounded-lg shadow-xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D9D5CD] pb-4 mb-5">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#EF8557] font-mono">
              {category}
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#226192] mt-1">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#707782] hover:text-[#202832] rounded hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-sm text-[#202832]/85 leading-relaxed space-y-4">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#D9D5CD] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#EAE6DE] hover:bg-[#dedad0] text-[#226192] font-medium text-xs rounded border border-[#D9D5CD] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
