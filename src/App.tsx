/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Treatment, BlogPost } from './types';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { TreatmentsSection } from './components/TreatmentsSection';
import { AboutDoctor } from './components/AboutDoctor';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RecoveryStories } from './components/RecoveryStories';
import { GoogleReviews } from './components/GoogleReviews';
import { PhotoGallery } from './components/PhotoGallery';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { BlogDetailModal } from './components/BlogDetailModal';
import { ContactSection } from './components/ContactSection';
import { NearbyLocationsSection } from './components/NearbyLocationsSection';
import { SignboardBanner } from './components/SignboardBanner';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { SeoSchema } from './components/SeoSchema';
import { treatmentsData, blogPostsData } from './data/clinicData';

export default function App() {
  // Language State: Support ?lang=hi|en query param or saved preference, default to 'hi' for local Bihar/Nepal patients
  const [lang, setLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'hi') return urlLang;
    const saved = localStorage.getItem('prakash_physio_lang');
    if (saved === 'en' || saved === 'hi') return saved;
    return 'hi';
  });

  // Never block first load with an intrusive popup (critical for Google Mobile SEO & Lead Conversion)
  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(false);

  // Active Section Highlighting for Smooth-Scroll Navigation
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [appointmentCondition, setAppointmentCondition] = useState<string>('');

  // URL Hash & Query Parameter Listener for Direct SEO Links & QR Codes
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const treatmentParam = params.get('treatment');
    const blogParam = params.get('blog');
    const bookParam = params.get('book');

    if (treatmentParam) {
      const found = treatmentsData.find(
        (t) => t.id === treatmentParam || t.slug === treatmentParam
      );
      if (found) setSelectedTreatment(found);
    }

    if (blogParam) {
      const foundPost = blogPostsData.find(
        (b) => b.id === blogParam || b.slug === blogParam
      );
      if (foundPost) setSelectedBlogPost(foundPost);
    }

    if (bookParam) {
      setAppointmentCondition(bookParam === 'true' ? '' : bookParam);
      setIsAppointmentOpen(true);
    }

    if (hash) {
      const targetId =
        hash === 'seo-locations'
          ? 'locations'
          : hash.includes('review')
          ? 'reviews'
          : hash;
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }
      }, 200);
    }
  }, []);

  // Scroll spy for Navbar active state
  useEffect(() => {
    const sectionIds = ['home', 'treatments', 'doctor', 'stories', 'reviews', 'faq', 'locations', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    localStorage.setItem('prakash_physio_lang', selectedLang);
    localStorage.setItem('prakash_physio_lang_selected', 'true');
  };

  const handleNavigate = (sectionId: string) => {
    const targetId = sectionId === 'seo-locations' ? 'locations' : sectionId;
    setActiveSection(targetId);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${targetId}`);
    }
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
      
      {/* Dynamic SEO Schema & Meta Synchronization */}
      <SeoSchema lang={lang} currentPage={activeSection} />

      {/* Top Bar with Helpline, Location & Direct 1-Tap Language Toggle */}
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

      {/* COMPLETE SINGLE-SCROLL CONTENT FOR MAXIMUM SEO INDEXING & MOBILE LEAD CONVERSION */}
      <main className="flex-grow">
        {/* 1. Hero Section + Instant 10-Second Callback Lead Capture */}
        <HeroSection
          lang={lang}
          onOpenAppointment={() => handleOpenAppointmentWithCondition()}
          onSelectCondition={handleSelectConditionFromHero}
        />

        {/* 2. Verified Google Rating & Serving Area Trust Strip */}
        <TrustStrip lang={lang} />

        {/* 3. Specialized Physiotherapy Treatments & Services (All 10 Conditions Crawlable) */}
        <TreatmentsSection
          lang={lang}
          onSelectTreatment={(t) => setSelectedTreatment(t)}
        />

        {/* 4. About Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi) & Certificates */}
        <AboutDoctor
          lang={lang}
          onOpenAppointment={() => handleOpenAppointmentWithCondition()}
        />

        {/* 5. Why Choose Us Features */}
        <WhyChooseUs lang={lang} />

        {/* 6. Real Verified Patient Case Studies (Before & After Outcomes) */}
        <RecoveryStories lang={lang} />

        {/* 7. Google Maps & Patient Reviews Section */}
        <GoogleReviews lang={lang} />

        {/* 8. Real Clinic & Modality Photo Gallery */}
        <PhotoGallery lang={lang} />

        {/* 9. Frequently Asked Questions (All Answers in DOM for Google Rich Snippets) */}
        <FAQSection lang={lang} />

        {/* 10. Health & Physiotherapy Educational Blog */}
        <BlogSection
          lang={lang}
          onSelectArticle={(post) => setSelectedBlogPost(post)}
        />

        {/* 11. Clinic Location Map, Transparent Fees & Fast WhatsApp Booking Form */}
        <ContactSection
          lang={lang}
          initialCondition={appointmentCondition}
          onFormSubmitted={() => {}}
        />

        {/* 12. 60+ Local Villages & Towns Coverage Directory (Supaul, Birpur, Araria, Nepal Border) */}
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

        {/* 13. Official Clinic Signboard & 24/7 Helpline Banner */}
        <SignboardBanner lang={lang} />
      </main>

      {/* Footer with Crawlable Internal Links to Dedicated SEO Pages */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
      />

      {/* Sticky Bottom Bar for Mobile + Floating WhatsApp/Call Widget for Desktop */}
      <StickyMobileBar
        lang={lang}
        onOpenAppointment={() => handleOpenAppointmentWithCondition()}
      />

      {/* Optional Language Modal (Only if manually opened) */}
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

      {/* Blog Detail Modal */}
      <BlogDetailModal
        post={selectedBlogPost}
        lang={lang}
        onClose={() => setSelectedBlogPost(null)}
        onBookAppointment={() => handleOpenAppointmentWithCondition()}
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
