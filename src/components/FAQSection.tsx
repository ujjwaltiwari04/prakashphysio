import React, { useState } from 'react';
import { Language } from '../types';
import { faqData } from '../data/clinicData';
import { translations } from '../data/translations';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const t = translations[lang];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सवाल और जवाब' : 'Questions & Answers'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.faqTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-hidden hover:bg-sky-50/50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg font-poppins">
                    {lang === 'hi' ? faq.questionHi : faq.questionEn}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#0F4C81] border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 bg-white">
                    {lang === 'hi' ? faq.answerHi : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
