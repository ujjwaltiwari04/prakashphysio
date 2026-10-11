import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { LogoSVG } from './LogoSVG';
import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main 4-column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Clinic Brand & Info */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <LogoSVG className="h-10" showTagline={false} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerDesc}
            </p>

            <div className="text-xs text-sky-200 font-mono space-y-1 pt-1 border-t border-slate-800">
              <p>Dr. Abhay Prakash Tiwari (M.P.T Ortho New Delhi)</p>
              <p>Reg: M.I.A.P. 42989 | G.A.P.T./22/G00562</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-sky-300 transition-colors">
                  • {t.navHome}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('doctor')} className="hover:text-sky-300 transition-colors">
                  • {t.navAboutDoctor}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('treatments')} className="hover:text-sky-300 transition-colors">
                  • {t.navTreatments}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('reviews')} className="hover:text-sky-300 transition-colors">
                  • {t.navReviews}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className="hover:text-sky-300 transition-colors">
                  • {t.navContact}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('seo-locations')} className="hover:text-sky-300 transition-colors text-sky-300 font-bold">
                  • {lang === 'hi' ? '60+ सेवारत गांव व स्थान निर्देशिका' : '60+ Locations Directory'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Treatments */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              {t.ourTreatments}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>• {lang === 'hi' ? 'कमर दर्द व साइटिका इलाज' : 'Back Pain & Sciatica Care'}</li>
              <li>• {lang === 'hi' ? 'स्लिप डिस्क बिना ऑपरेशन इलाज' : 'Non-Surgical Slip Disc Rehab'}</li>
              <li>• {lang === 'hi' ? 'लकवा (Paralysis) व स्ट्रोक न्यूरो रीहैब' : 'Stroke & Paralysis Rehabilitation'}</li>
              <li>• {lang === 'hi' ? 'गर्दन दर्द व सर्वाइकल' : 'Cervical Neck Pain Therapy'}</li>
              <li>• {lang === 'hi' ? 'घुटने का दर्द व आर्थराइटिस' : 'Knee Arthritis & Joint Therapy'}</li>
              <li>• {lang === 'hi' ? 'फ्रोजन शोल्डर (कंधा जाम)' : 'Frozen Shoulder Release'}</li>
              <li>• {lang === 'hi' ? 'ड्राई नीडलिंग व कपिंग थेरेपी' : 'Dry Needling & Cupping Therapy'}</li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              {t.servingLocations}
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{t.clinicAddressText}</span>
              </p>

              <p className="flex items-center gap-1.5 text-white font-bold flex-wrap text-xs sm:text-sm">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:+919711700817" className="hover:text-sky-300 transition-colors">+91 9711700817</a>
                <span className="text-slate-400 font-normal">,</span>
                <a href="tel:+9779819053588" className="hover:text-sky-300 transition-colors">+977 9819053588 (Nepal)</a>
              </p>

              <p className="flex items-center gap-2 text-sky-300">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>{t.opdTimings}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>{t.copyrightText}</p>
        </div>

      </div>
    </footer>
  );
};
