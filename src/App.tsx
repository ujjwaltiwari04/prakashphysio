/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Treatment } from './types';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutDoctor } from './components/AboutDoctor';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { NearbyLocationsSection } from './components/NearbyLocationsSection';
import { GoogleReviews } from './components/GoogleReviews';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AppointmentModal } from './components/AppointmentModal';
import { SeoSchema } from './components/SeoSchema';
import { treatmentsData } from './data/clinicData';

export default function App() {
  // Language State: Default to 'en'
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('prakash_physio_lang');
    return (saved === 'hi' ? 'hi' : 'en') as Language;
  });

  // Language Modal State: Show full screen language selection on first load unless already selected
  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(() => {
    const hasSelected = localStorage.getItem('prakash_physio_lang_selected');
    return !hasSelected;
  });

  // Page Navigation State & Active Section Highlighting
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [appointmentCondition, setAppointmentCondition] = useState<string>('');

  // Scroll position listener for dynamic Navbar highlighting on home page
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(currentPage);
      return;
    }

    const handleScroll = () => {
      const doctorElem = document.getElementById('doctor');
      if (doctorElem) {
        const rect = doctorElem.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.15) {
          setActiveSection('doctor');
        } else if (window.scrollY < 300) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleLanguageSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('prakash_physio_lang', selectedLang);
    localStorage.setItem('prakash_physio_lang_selected', 'true');
  };

  const handleNavigate = (pageId: string) => {
    if (pageId === 'doctor') {
      setCurrentPage('home');
      setActiveSection('doctor');
      setTimeout(() => {
        const elem = document.getElementById('doctor');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (pageId === 'home') {
      setCurrentPage('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(pageId);
    setActiveSection(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectConditionFromHero = (conditionId: string) => {
    const found = treatmentsData.find((t) => t.id === conditionId);
    if (found) {
      setSelectedTreatment(found);
    } else {
      handleNavigate('treatments');
    }
  };

  const handleOpenAppointmentWithCondition = (conditionName: string = '') => {
    setAppointmentCondition(conditionName);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-sky-100 selection:text-[#0F4C81]">
      
      {/* Inject SEO Structured JSON-LD Schema & Dynamic Meta Manager */}
      <SeoSchema lang={lang} currentPage={currentPage} />

      {/* Top Bar with Helpline, Location & Language Toggle */}
      <TopBar
        lang={lang}
        onLanguageChange={handleLanguageSelect}
        onOpenLanguageModal={() => setIsLangModalOpen(true)}
      />

      {/* Sticky Main Navigation */}
      <Navbar
        lang={lang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAppointment={() => handleOpenAppointmentWithCondition()}
      />

      {/* MAIN CONTENT AREA BY CURRENT PAGE */}
      <main className="flex-grow">
        {/* PAGE 1: HOME PAGE (Hero + About Doctor) */}
        {currentPage === 'home' && (
          <div>
            <HeroSection
              lang={lang}
              onOpenAppointment={() => handleOpenAppointmentWithCondition()}
              onSelectCondition={handleSelectConditionFromHero}
            />

            <AboutDoctor
              lang={lang}
              onOpenAppointment={() => handleOpenAppointmentWithCondition()}
            />

            {/* Simple Clean CTA Strip on Home Page */}
            <section className="bg-[#0F4C81] text-white py-12 px-4 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-poppins">
                  {lang === 'hi'
                    ? 'बिना ऑपरेशन दर्द से राहत पाएं — परामर्श हेतु आज ही संपर्क करें'
                    : 'Get Non-Surgical Pain Relief — Contact Us For Consultation Today'}
                </h3>
                <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                  {lang === 'hi'
                    ? 'भीमनगर, बीरपुर, सुपौल व नेपाल बॉर्डर के मरीजों के लिए ओपीडी परामर्श एवं घर पर इलाज (Home Visit) की सुविधा उपलब्ध।'
                    : 'Expert OPD consultation and Home Visit physiotherapy for patients across Bhimnagar, Birpur, Supaul & Nepal border.'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigate('treatments')}
                    className="bg-white text-[#0F4C81] hover:bg-sky-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    {lang === 'hi' ? 'सभी इलाज व सेवाएं देखें →' : 'View All Treatments →'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenAppointmentWithCondition()}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    {lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: TREATMENTS PAGE */}
        {currentPage === 'treatments' && (
          <div>
            <div className="bg-gradient-to-r from-[#0F4C81] to-[#125996] text-white py-10 px-4">
              <div className="max-w-7xl mx-auto text-center space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                  {lang === 'hi' ? 'विशेषज्ञ फिजियोथेरेपी सेवाएं' : 'Specialized Physiotherapy'}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                  {lang === 'hi' ? 'मुख्य इलाज एवं सेवाएं' : 'Treatments & Services'}
                </h1>
                <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                  {lang === 'hi'
                    ? 'कमर दर्द, साइटिका, सर्वाइकल, घुटने का दर्द, लकवा (पैरालिसिस) व एडवांस थेरेपी'
                    : 'Advanced non-surgical therapies for spine, joint pain, paralysis and sports injuries'}
                </p>
              </div>
            </div>

            <TreatmentsSection
              lang={lang}
              onSelectTreatment={(t) => setSelectedTreatment(t)}
            />
          </div>
        )}

        {/* PAGE 3: REVIEWS PAGE */}
        {currentPage === 'reviews' && (
          <div>
            <div className="bg-gradient-to-r from-slate-900 to-[#0F4C81] text-white py-10 px-4">
              <div className="max-w-7xl mx-auto text-center space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                  {lang === 'hi' ? 'मरीजों के अनुभव एवं सवाल' : 'Patient Reviews & FAQ'}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                  {lang === 'hi' ? 'मरीजों की राय व अक्सर पूछे जाने वाले प्रश्न' : 'Patient Reviews & FAQs'}
                </h1>
                <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                  {lang === 'hi'
                    ? 'संतुष्ट मरीजों के अनुभव एवं इलाज से जुड़े आम प्रश्नों के उत्तर'
                    : 'Real feedback from patients and answers to common treatment questions'}
                </p>
              </div>
            </div>

            <GoogleReviews lang={lang} />
            <FAQSection lang={lang} />
          </div>
        )}

        {/* PAGE 4: CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div>
            <div className="bg-gradient-to-r from-[#0F4C81] to-slate-900 text-white py-10 px-4">
              <div className="max-w-7xl mx-auto text-center space-y-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                  {lang === 'hi' ? 'क्लिनिक पता व संपर्क' : 'Clinic Location & Contact'}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                  {lang === 'hi' ? 'हमसे संपर्क करें एवं अपॉइंटमेंट लें' : 'Contact Us & Appointment'}
                </h1>
                <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                  {lang === 'hi'
                    ? 'भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, सुपौल - पारदर्शी फीस एवं फोन/व्हाट्सएप संपर्क'
                    : 'Bhantabari Road, Bhimnagar (Shaileshpur), Birpur, Supaul - Direct Phone & WhatsApp'}
                </p>
              </div>
            </div>

            <ContactSection
              lang={lang}
              initialCondition={appointmentCondition}
              onFormSubmitted={() => {}}
            />
          </div>
        )}

        {/* PAGE 5: HIDDEN LOCAL SEO PAGE (60+ Serving Locations) */}
        {currentPage === 'seo-locations' && (
          <div>
            <div className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
              <div className="max-w-7xl mx-auto space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
                  <button type="button" onClick={() => handleNavigate('home')} className="hover:underline">
                    {lang === 'hi' ? 'गृह पृष्ठ' : 'Home'}
                  </button>
                  <span>/</span>
                  <span className="text-slate-300">
                    {lang === 'hi' ? 'स्थानीय सेवारत 60+ गांव व स्थान' : 'Local SEO Location Directory'}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
                  {lang === 'hi' ? '60+ सेवारत गांव, शहर व स्थानीय एसईओ क्षेत्र' : 'Service Areas & Local SEO Directory (60+ Towns)'}
                </h1>
                <p className="text-slate-400 text-sm max-w-3xl">
                  {lang === 'hi'
                    ? 'सुपौल, अररिया, बीरपुर, भीमनगर तथा नेपाल सीमा क्षेत्र (सप्तरी/राजविराज) के सभी 60+ गांवों हेतु ओपीडी एवं होम विजिट (Home Visit) सेवा जानकारी।'
                    : 'OPD and Home Visit physiotherapy service directory covering 60+ villages across Supaul, Araria and Nepal border area.'}
                </p>
              </div>
            </div>

            <NearbyLocationsSection
              lang={lang}
              onSelectLocationForBooking={(locName) =>
                handleOpenAppointmentWithCondition(
                  lang === 'hi'
                    ? `${locName} के मरीज हेतु परामर्श बुकिंग`
                    : `Appointment Booking for Patient from ${locName}`
                )
              }
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
      />

      {/* Sticky Bottom Bar for Mobile Android Users */}
      <StickyMobileBar
        lang={lang}
        onOpenAppointment={() => handleOpenAppointmentWithCondition()}
      />

      {/* Language Selector Modal on First Load / Toggle */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        currentLanguage={lang}
        onSelectLanguage={handleLanguageSelect}
        onClose={() => {
          localStorage.setItem('prakash_physio_lang_selected', 'true');
          setIsLangModalOpen(false);
        }}
      />

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        lang={lang}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(condName) => handleOpenAppointmentWithCondition(condName)}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        lang={lang}
        initialCondition={appointmentCondition}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}
