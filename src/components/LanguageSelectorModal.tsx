import React from 'react';
import { Language } from '../types';
import { Check, Globe } from 'lucide-react';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onClose: () => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  currentLanguage,
  onSelectLanguage,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center">
        <div className="w-16 h-16 bg-sky-100 text-[#0F4C81] rounded-full flex items-center justify-center mx-auto mb-4">
          <Globe className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2 font-poppins">
          अपनी भाषा चुनें / Choose Your Language
        </h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          भीमनगर, सुपौल, बीरपुर और नेपाल सीमा क्षेत्र के मरीजों के लिए विशेष रूप से डिज़ाइन की गई वेबसाइट
        </p>

        <div className="space-y-4 mb-8">
          {/* English Option */}
          <button
            type="button"
            onClick={() => onSelectLanguage('en')}
            className={`w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all ${
              currentLanguage === 'en'
                ? 'border-[#0F4C81] bg-sky-50/70 ring-2 ring-[#0F4C81]/20'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold text-slate-900 text-lg">English</div>
                <div className="text-xs text-[#0F4C81] font-semibold">Default (English Version)</div>
              </div>
            </div>
            {currentLanguage === 'en' && (
              <div className="w-7 h-7 bg-[#0F4C81] text-white rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
            )}
          </button>

          {/* Hindi Option */}
          <button
            type="button"
            onClick={() => onSelectLanguage('hi')}
            className={`w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all ${
              currentLanguage === 'hi'
                ? 'border-[#0F4C81] bg-sky-50/70 ring-2 ring-[#0F4C81]/20'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold text-slate-900 text-lg">हिन्दी (Hindi)</div>
                <div className="text-xs text-slate-500">हिन्दी भाषा संस्करण</div>
              </div>
            </div>
            {currentLanguage === 'hi' && (
              <div className="w-7 h-7 bg-[#0F4C81] text-white rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 px-6 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white font-semibold rounded-xl transition-colors shadow-md text-base"
        >
          {currentLanguage === 'hi' ? 'वेबसाइट देखें (Continue to Website)' : 'Continue to Website'}
        </button>
      </div>
    </div>
  );
};
