import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Phone, Clock, MapPin, Globe } from 'lucide-react';

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
          <div className="flex items-center gap-1 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            <span className="font-medium text-xs">
              <span className="sm:hidden">{lang === 'hi' ? 'भंटाबारी रोड, भीमनगर, बीरपुर' : 'Bhantabari Road, Bhimnagar, Birpur'}</span>
              <span className="hidden sm:inline">{t.locationText}</span>
            </span>
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
            className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-2.5 py-1 rounded-md font-extrabold transition-all shadow-xs text-xs"
            title={t.callNow}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+91 9711700817</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919711700817?text=नमस्ते%20डॉ.%20अभय%20प्रकाश%20तिवारी,%20मुझे%20फिजियोथेरेपी%20परामर्श%20लेना%20है।%20(Hello%20Dr.%20Tiwari,%20I%20need%20physiotherapy%20consultation)"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-2.5 py-1 rounded-md font-extrabold transition-all shadow-xs text-xs"
            title={t.whatsappChat}
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Direct 1-Tap Bilingual Language Switcher (No Popup Friction) */}
          <div className="flex items-center bg-slate-900/60 p-0.5 rounded-lg border border-white/20">
            <button
              type="button"
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                lang === 'hi'
                  ? 'bg-white text-[#0F4C81] shadow-2xs'
                  : 'text-sky-100 hover:text-white'
              }`}
              title="हिन्दी में देखें"
            >
              हिन्दी
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all ${
                lang === 'en'
                  ? 'bg-white text-[#0F4C81] shadow-2xs'
                  : 'text-sky-100 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

