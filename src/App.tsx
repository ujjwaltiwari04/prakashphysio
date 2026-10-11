/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Treatment } from './types';
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
  // Strictly English for clean user experience and Google indexing
  const lang: Language = 'en';

  // Page Navigation State & Active Section Highlighting
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [appointmentCondition, setAppointmentCondition] = useState<string>('');

  // URL Hash & Query Parameter Listener for QR codes, Static SEO Pages & Direct Links
  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    const params = new URLSearchParams(window.location.search);

    const treatmentParam = params.get('treatment');
    if (treatmentParam) {
      const found = treatmentsData.find(
        (t) => t.slug === treatmentParam || t.id === treatmentParam
      );
      if (found) {
        setSelectedTreatment(found);
      }
    }

    const bookParam = params.get('book');
    if (bookParam) {
      setAppointmentCondition(bookParam === '1' ? '' : bookParam);
      setIsAppointmentOpen(true);
    }

    if (hash.includes('review') || params.has('review')) {
      setCurrentPage('reviews');
      setActiveSection('reviews');
    } else if (hash.includes('treatment')) {
      setCurrentPage('treatments');
      setActiveSection('treatments');
    } else if (hash.includes('contact')) {
      setCurrentPage('contact');
      setActiveSection('contact');
    } else if (hash.includes('location')) {
      setCurrentPage('seo-locations');
      setActiveSection('seo-locations');
    } else if (hash.includes('doctor')) {
      setCurrentPage('home');
      setActiveSection('doctor');
      setTimeout(() => {
        const elem = document.getElementById('doctor');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

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

  const handleNavigate = (pageId: string) => {
    if (pageId === 'doctor') {
      setCurrentPage('home');
      setActiveSection('doctor');
      window.history.replaceState(null, '', '#doctor');
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
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(pageId);
    setActiveSection(pageId);
    window.history.replaceState(null, '', `#${pageId}`);
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

      {/* Top Bar with Helpline & Location (English Only) */}
      <TopBar lang={lang} />

      {/* Sticky Main Navigation */}
      <Navbar
        lang={lang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAppointment={() => handleOpenAppointmentWithCondition()}
      />

      {/* MAIN CONTENT AREA: All sections stay mounted in the DOM for Googlebot indexing while preserving the exact tabbed visual layout */}
      <main className="flex-grow">
        {/* PAGE 1: HOME PAGE (Hero + About Doctor) */}
        <div className={currentPage === 'home' ? 'block' : 'hidden'}>
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
                Get Non-Surgical Pain Relief — Contact Us For Consultation Today
              </h3>
              <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                Expert OPD consultation and Home Visit physiotherapy for patients across Bhimnagar, Birpur, Supaul & Nepal border.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="#treatments"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('treatments');
                  }}
                  className="bg-white text-[#0F4C81] hover:bg-sky-50 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                  View All Treatments →
                </a>
                <button
                  type="button"
                  onClick={() => handleOpenAppointmentWithCondition()}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* PAGE 2: TREATMENTS PAGE */}
        <div className={currentPage === 'treatments' ? 'block' : 'hidden'}>
          <div className="bg-gradient-to-r from-[#0F4C81] to-[#125996] text-white py-10 px-4">
            <div className="max-w-7xl mx-auto text-center space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                Specialized Physiotherapy
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                Treatments & Services
              </h2>
              <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                Advanced non-surgical therapies for spine, joint pain, paralysis and sports injuries
              </p>
            </div>
          </div>

          <TreatmentsSection
            lang={lang}
            onSelectTreatment={(t) => setSelectedTreatment(t)}
          />
        </div>

        {/* PAGE 3: REVIEWS PAGE */}
        <div className={currentPage === 'reviews' ? 'block' : 'hidden'}>
          <div className="bg-gradient-to-r from-slate-900 to-[#0F4C81] text-white py-10 px-4">
            <div className="max-w-7xl mx-auto text-center space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                Patient Reviews & FAQ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                Patient Reviews & FAQs
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                Real feedback from patients and answers to common treatment questions
              </p>
            </div>
          </div>

          <GoogleReviews lang={lang} />
          <FAQSection lang={lang} />
        </div>

        {/* PAGE 4: CONTACT PAGE */}
        <div className={currentPage === 'contact' ? 'block' : 'hidden'}>
          <div className="bg-gradient-to-r from-[#0F4C81] to-slate-900 text-white py-10 px-4">
            <div className="max-w-7xl mx-auto text-center space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block">
                Clinic Location & Contact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins">
                Contact Us & Appointment
              </h2>
              <p className="text-sky-100 text-sm max-w-2xl mx-auto">
                Bhantabari Road, Bhimnagar (Shaileshpur), Birpur, Supaul - Direct Phone & WhatsApp
              </p>
            </div>
          </div>

          <ContactSection
            lang={lang}
            initialCondition={appointmentCondition}
            onFormSubmitted={() => {}}
          />
        </div>

        {/* PAGE 5: LOCAL SEO PAGE (60+ Serving Locations) */}
        <div className={currentPage === 'seo-locations' ? 'block' : 'hidden'}>
          <div className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
            <div className="max-w-7xl mx-auto space-y-2">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-bold">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('home');
                  }}
                  className="hover:underline"
                >
                  Home
                </a>
                <span>/</span>
                <span className="text-slate-300">
                  Local SEO Location Directory
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white">
                Service Areas & Local SEO Directory (60+ Towns)
              </h2>
              <p className="text-slate-400 text-sm max-w-3xl">
                OPD and Home Visit physiotherapy service directory covering 60+ villages across Supaul, Araria and Nepal border area.
              </p>
            </div>
          </div>

          <NearbyLocationsSection
            lang={lang}
            onSelectLocationForBooking={(locName) =>
              handleOpenAppointmentWithCondition(
                `Appointment Booking for Patient from ${locName}`
              )
            }
          />
        </div>
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
