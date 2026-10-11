import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { treatmentsData } from '../data/clinicData';
import { LogoSVG } from './LogoSVG';
import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
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
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-sky-300 transition-colors">
                  • {t.navHome}
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleLinkClick(e, 'treatments')} className="hover:text-sky-300 transition-colors">
                  • {t.navTreatments}
                </a>
              </li>
              <li>
                <a href="#doctor" onClick={(e) => handleLinkClick(e, 'doctor')} className="hover:text-sky-300 transition-colors">
                  • {t.navAboutDoctor}
                </a>
              </li>
              <li>
                <a href="#stories" onClick={(e) => handleLinkClick(e, 'stories')} className="hover:text-sky-300 transition-colors">
                  • {t.navRecoveryStories}
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleLinkClick(e, 'reviews')} className="hover:text-sky-300 transition-colors">
                  • {t.navReviews}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-sky-300 transition-colors">
                  • {t.navFAQ}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-sky-300 transition-colors">
                  • {t.navContact}
                </a>
              </li>
              <li>
                <a href="#locations" onClick={(e) => handleLinkClick(e, 'locations')} className="hover:text-sky-300 transition-colors text-sky-300 font-bold">
                  • {lang === 'hi' ? '60+ सेवारत गांव व स्थान निर्देशिका' : '60+ Locations Directory'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Treatments (Direct Crawlable SEO Pages) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              {t.ourTreatments}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400 font-medium">
              {treatmentsData.map((tr) => (
                <li key={tr.id}>
                  <a
                    href={`/treatments/${tr.slug}.html`}
                    className="hover:text-sky-300 transition-colors block truncate"
                  >
                    • {lang === 'hi' ? tr.titleHi : tr.titleEn}
                  </a>
                </li>
              ))}
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

              <div className="pt-2 border-t border-slate-800 space-y-1 text-[11px] text-slate-400">
                <span className="text-sky-300 font-bold block">
                  {lang === 'hi' ? 'प्रमुख स्थानीय सेवा पेज:' : 'Regional Service Hubs:'}
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <a href="/locations/physiotherapy-in-bhimnagar.html" className="hover:text-white underline">Bhimnagar</a>
                  <a href="/locations/physiotherapy-in-birpur.html" className="hover:text-white underline">Birpur</a>
                  <a href="/locations/physiotherapy-in-supaul.html" className="hover:text-white underline">Supaul</a>
                  <a href="/locations/physiotherapy-near-nepal-border-rajbiraj-saptari.html" className="hover:text-white underline">Rajbiraj / Nepal</a>
                  <a href="/locations/physiotherapy-in-forbesganj-araria.html" className="hover:text-white underline">Forbesganj / Araria</a>
                  <a href="/locations/physiotherapy-in-triveniganj-raghopur-simrahi.html" className="hover:text-white underline">Triveniganj & Raghopur</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>{t.copyrightText || '© 2026 Prakash Physiotherapy Clinic, Bhimnagar, Supaul. All rights reserved.'}</p>
          <p className="text-[11px] text-slate-400">
            Dr. Abhay Prakash Tiwari • M.P.T. (Ortho) New Delhi • +91 9711700817
          </p>
        </div>

      </div>
    </footer>
  );
};
