import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { LogoSVG } from './LogoSVG';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  activeSection,
  onNavigate,
  onOpenAppointment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navItems = [
    { id: 'home', href: '#home', label: t.navHome },
    { id: 'treatments', href: '#treatments', label: t.navTreatments },
    { id: 'doctor', href: '#doctor', label: t.navAboutDoctor },
    { id: 'stories', href: '#stories', label: lang === 'hi' ? 'केस स्टडी' : 'Case Studies' },
    { id: 'reviews', href: '#reviews', label: t.navReviews },
    { id: 'faq', href: '#faq', label: t.navFAQ },
    { id: 'locations', href: '#locations', label: lang === 'hi' ? '60+ सेवा क्षेत्र' : '60+ Areas' },
    { id: 'contact', href: '#contact', label: t.navContact }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav aria-label="Main Navigation" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center text-left focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] rounded-lg p-1"
          >
            <LogoSVG className="h-10 sm:h-12" showTagline={true} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-2.5 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'text-[#0F4C81] bg-sky-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F4C81] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="tel:+919711700817"
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs xl:text-sm transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{t.callNow}</span>
            </a>
            <button
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white px-4 py-2.5 rounded-xl font-bold text-xs xl:text-sm transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919711700817"
              className="bg-red-600 text-white text-xs font-bold px-2.5 py-2 rounded-lg flex items-center gap-1 shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{lang === 'hi' ? 'कॉल' : 'Call'}</span>
            </a>

            <button
              type="button"
              onClick={onOpenAppointment}
              className="bg-[#0F4C81] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 shadow-2xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'बुक करें' : 'Book'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0F4C81] hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="p-2.5 bg-sky-50 rounded-lg mb-3 text-xs text-[#0F4C81] font-semibold flex items-center justify-between">
            <span>Dr. Abhay Prakash Tiwari (M.P.T Ortho)</span>
            <a href="tel:+919711700817" className="text-red-600 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 9711700817
            </a>
          </div>

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'text-[#0F4C81] bg-sky-50 font-bold border-l-4 border-[#0F4C81]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-2">
            <a
              href="tel:+919711700817"
              className="py-3 bg-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{t.callNow}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="py-3 bg-[#0F4C81] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
