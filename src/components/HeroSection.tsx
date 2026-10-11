import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Phone, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenAppointment: () => void;
  onSelectCondition: (conditionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenAppointment,
  onSelectCondition
}) => {
  const t = translations[lang];

  // Real clinic carousel slides in user specified sequence
  const slides = [
    {
      url: "/img/Prakash Physio Hero.webp",
      captionHi: "1. प्रकाश फिजियोथेरेपी क्लिनिक - आधुनिक ट्रीटमेंट रूम एवं उपकरण व्यवस्था",
      captionEn: "1. Prakash Physiotherapy Clinic - Treatment Beds & Facility, Bhimnagar"
    },
    {
      url: "/img/Therapy Session 1.webp",
      captionHi: "2. डॉ. अभय प्रकाश तिवारी द्वारा मैनुअल थेरेपी व नसों का उपचार सत्र",
      captionEn: "2. Manual Therapy & Joint Decompression Session by Dr. Abhay Prakash Tiwari"
    },
    {
      url: "/img/injury showcase.webp",
      captionHi: "3. विशेषज्ञ स्किन बर्न व इंजरी रीहैब - हाथ व टिश्यू पुनर्वास जांच",
      captionEn: "3. Specialized Post-Burn Injury & Tissue Recovery Examination"
    },
    {
      url: "/img/child therapy.webp",
      captionHi: "4. बाल रोग फिजियोथेरेपी उपचार - डॉ. अभय प्रकाश तिवारी मरीजों के साथ",
      captionEn: "4. Pediatric Rehabilitation Care & Consultation by Dr. Tiwari"
    },
    {
      url: "/img/electrotherapy.webp",
      captionHi: "5. एडवांस्ड इलेक्ट्रोथेरेपी एवं नसों की उत्तेजना उपचार (Electrotherapy)",
      captionEn: "5. Advanced Electrotherapy & Electrical Muscle/Nerve Stimulation"
    },
    {
      url: "/img/clinic photo.webp",
      captionHi: "6. प्रकाश फिजियोथेरेपी क्लिनिक - बाहरी दृश्य एवं साइनबोर्ड (भीमनगर चौक)",
      captionEn: "6. Prakash Physiotherapy Clinic - Exterior Entrance & Signboard, Bhimnagar"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 2 seconds (2000ms gap)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const conditionsList = [
    { id: 'back-pain', hi: 'कमर दर्द (Back Pain)', en: 'Back Pain' },
    { id: 'sciatica', hi: 'साइटिका (Sciatica)', en: 'Sciatica' },
    { id: 'slip-disc', hi: 'स्लिप डिस्क (Slip Disc)', en: 'Slip Disc' },
    { id: 'paralysis-stroke', hi: 'लकवा / पैरालिसिस (Paralysis)', en: 'Paralysis' },
    { id: 'frozen-shoulder', hi: 'फ्रोजन शोल्डर (Frozen Shoulder)', en: 'Frozen Shoulder' },
    { id: 'cervical-neck-pain', hi: 'गर्दन दर्द (Neck Pain)', en: 'Neck Pain' },
    { id: 'sports-injury', hi: 'स्पोर्ट्स चोट (Sports Injury)', en: 'Sports Injury' },
    { id: 'joint-knee-pain', hi: 'जोड़ों व घुटने का दर्द (Joint Pain)', en: 'Joint Pain' },
    { id: 'post-knee-replacement', hi: 'ऑपरेशन के बाद रीहैब (Post Surgery)', en: 'Post Surgery Rehab' }
  ];

  const renderCarousel = () => (
    <div>
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 sm:aspect-16/11 group">
        {/* Slides */}
        {slides.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.url}
              alt={lang === 'hi' ? slide.captionHi : slide.captionEn}
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
              width="800"
              height="600"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
            
            {/* Slide Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs sm:text-sm font-medium z-20">
              <p className="bg-slate-900/90 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-center font-poppins">
                {lang === 'hi' ? slide.captionHi : slide.captionEn}
              </p>
            </div>
          </div>
        ))}

        {/* Prev / Next Arrows */}
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded-full">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide ? 'bg-amber-400 w-4' : 'bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Caption below Carousel */}
      <p className="text-center text-xs text-slate-500 mt-2 font-medium italic">
        {lang === 'hi'
          ? 'प्रकाश फिजियोथेरेपी क्लिनिक - भीमनगर (सुपौल)'
          : 'Prakash Physiotherapy Clinic - Real Treatment Facilities'}
      </p>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-sky-50/80 via-white to-slate-50 py-8 lg:py-14 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Copy, Headings, Condition Pills & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-slate-800">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-sky-100 text-[#0F4C81] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-sky-200">
              <MapPin className="w-4 h-4 text-[#0F4C81]" />
              <span>
                {lang === 'hi' 
                  ? 'भीमनगर • बीरपुर • सुपौल • नेपाल बॉर्डर'
                  : 'Bhimnagar • Birpur • Supaul • Near Nepal Border'}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins tracking-tight leading-tight">
                {lang === 'hi' ? 'प्रकाश फिजियोथेरेपी क्लिनिक' : 'Prakash Physiotherapy Clinic'}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0F4C81]">
                {lang === 'hi'
                  ? 'भीमनगर, सुपौल, बीरपुर व नेपाल सीमा क्षेत्र का सबसे विश्वसनीय फिजियोथेरेपी केंद्र'
                  : 'Expert Physiotherapy Care in Bhimnagar, Supaul & Near Birpur'}
              </p>
            </div>

            {/* Doctor Credentials Sub-banner */}
            <div className="bg-white p-3.5 rounded-xl border border-sky-200 shadow-xs flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                Dr
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-slate-900 text-base">
                  {lang === 'hi' ? 'डॉ. अभय प्रकाश तिवारी' : 'Dr. Abhay Prakash Tiwari'}
                </div>
                <div className="text-[#0F4C81] font-semibold">
                  M.P.T. Orthopedics (New Delhi) • B.P.T. (M.U.)
                </div>
                <div className="text-slate-500 text-[11px]">
                  {lang === 'hi' ? '12+ वर्षों का अनुभव | M.I.A.P 42989 | G.A.P.T Registered' : '12+ Yrs Exp | M.I.A.P 42989 | G.A.P.T Registered'}
                </div>
              </div>
            </div>

            {/* Mobile Photo Carousel (Appears immediately after Dr. Abhay Prakash Tiwari on Mobile) */}
            <div className="lg:hidden my-4">
              {renderCarousel()}
            </div>

            {/* Transparent Fees & Home Visit Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-sky-50 border border-sky-200 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0F4C81] uppercase tracking-wider block">
                    {lang === 'hi' ? 'क्लिनिक ओपीडी परामर्श' : 'Clinic OPD Visit'}
                  </span>
                  <span className="text-xs text-slate-700 font-semibold">
                    {lang === 'hi' ? 'प्रथम विजिट: ' : 'First Visit: '}
                    <strong className="text-[#0F4C81] font-extrabold text-sm">₹500</strong>
                    {lang === 'hi' ? ' | आगे: ' : ' | Later: '}
                    <strong className="text-[#0F4C81] font-extrabold text-sm">₹300/सेशन</strong>
                  </span>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0F4C81] uppercase tracking-wider block">
                    {lang === 'hi' ? 'होम विजिट सुविधा (घर पर)' : 'Home Visit Service'}
                  </span>
                  <span className="text-xs text-slate-700 font-semibold">
                    {lang === 'hi' ? 'शुल्क: ' : 'Charge: '}
                    <strong className="text-[#0F4C81] font-extrabold text-sm">₹700 / सेशन</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Paragraph describing conditions */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? (
                <>
                  हम बिना किसी भारी ऑपरेशन या हानिकारक गोलियों के निम्नलिखित समस्याओं का वैज्ञानिक व स्थायी इलाज करते हैं:
                </>
              ) : (
                <>
                  Specialized non-surgical physical therapy for chronic spinal, muscular, and neurological conditions:
                </>
              )}
            </p>

            {/* Condition Pills */}
            <div className="flex flex-wrap gap-2">
              {conditionsList.map((cond) => (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => onSelectCondition(cond.id)}
                  className="bg-white hover:bg-sky-50 text-slate-800 hover:text-[#0F4C81] border border-slate-200 hover:border-sky-300 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F4C81]" />
                  <span>{lang === 'hi' ? cond.hi : cond.en}</span>
                </button>
              ))}
            </div>

            {/* Large Call & WhatsApp Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Call Now Button */}
              <a
                href="tel:+919711700817"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white py-3.5 px-4 sm:px-6 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-lg active:scale-95 text-center"
              >
                <Phone className="w-5 h-5 fill-current text-white flex-shrink-0" />
                <span>{t.callNow} (+91 9711700817)</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919711700817?text=Hello%20Dr.%20Abhay%20Prakash%20Tiwari,%20I%20want%20to%20consult%20for%20physiotherapy%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white py-3.5 px-4 sm:px-6 rounded-xl font-extrabold text-sm sm:text-base transition-all shadow-lg active:scale-95 text-center"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{t.whatsappChat}</span>
              </a>
            </div>

            {/* Emergency & Nepal Note */}
            <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-200">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t.emergencyService}
              </span>
              <span className="text-slate-500 font-mono">
                {lang === 'hi' ? 'नेपाल हेल्पलाइन: +977 9819053588' : 'Nepal Line: +977 9819053588'}
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: Desktop Photo Carousel */}
          <div className="hidden lg:block lg:col-span-5">
            {renderCarousel()}
          </div>

        </div>
      </div>
    </section>
  );
};
