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
    { id: 'home', label: t.navHome },
    { id: 'doctor', label: t.navAboutDoctor },
    { id: 'treatments', label: t.navTreatments },
    { id: 'reviews', label: t.navReviews },
    { id: 'contact', label: t.navContact }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] rounded-lg p-1"
          >
            <LogoSVG className="h-10 sm:h-12" showTagline={true} />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#0F4C81] bg-sky-50 font-bold'
                    : 'text-slate-700 hover:text-[#0F4C81] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="bg-[#0F4C81] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
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
          <div className="p-2 bg-sky-50 rounded-lg mb-3 text-xs text-[#0F4C81] font-semibold flex items-center justify-between">
            <span>Dr. Abhay Prakash Tiwari (M.P.T Ortho)</span>
            <a href="tel:+919711700817" className="text-red-600 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 9711700817
            </a>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-[#0F4C81] bg-sky-50 font-bold border-l-4 border-[#0F4C81]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 bg-[#0F4C81] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-base shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.bookAppointment}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
