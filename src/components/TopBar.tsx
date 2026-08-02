import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, MessageSquare, Clock, MapPin, Globe } from 'lucide-react';

interface TopBarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenLanguageModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ lang, onLanguageChange, onOpenLanguageModal }) => {
  const t = translations[lang];

  return (
    <div className="bg-[#0F4C81] text-white text-xs py-2 px-3 sm:px-6 border-b border-sky-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Location & Timings */}
        <div className="flex flex-wrap items-center gap-3 text-sky-100">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            <span className="font-medium truncate max-w-[220px] sm:max-w-xs">{t.locationText}</span>
          </div>
          <div className="hidden md:flex items-center gap-1 border-l border-sky-700 pl-3">
            <Clock className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
            <span>{t.opdTimings}</span>
          </div>
        </div>

        {/* Right: Phone, WhatsApp & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {/* Emergency Badge */}
          <span className="hidden lg:inline-block bg-red-600/90 text-white font-bold px-2 py-0.5 rounded-sm border border-red-400/40 text-[11px]">
            {t.emergencyService}
          </span>

          {/* Direct Call Button */}
          <a
            href="tel:+919711700817"
            className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white px-2.5 py-1 rounded-md font-bold transition-all shadow-xs text-xs"
            title={t.callNow}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>{t.callNow}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919711700817?text=Hello%20Dr.%20Abhay%20Prakash%20Tiwari,%20I%20want%20to%20book%20a%20physiotherapy%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white px-2.5 py-1 rounded-md font-bold transition-all shadow-xs text-xs"
            title={t.whatsappChat}
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={onOpenLanguageModal}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-md text-xs font-semibold border border-white/20 transition-colors"
            title="Change Language / भाषा बदलें"
          >
            <Globe className="w-3.5 h-3.5 text-sky-200" />
            <span>{lang === 'hi' ? 'हिन्दी' : 'EN'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

