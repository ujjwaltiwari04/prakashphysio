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

  const [quickPhone, setQuickPhone] = useState('');
  const [quickProblem, setQuickProblem] = useState('कमर दर्द / साइटिका (Back Pain / Sciatica)');
  const [quickSent, setQuickSent] = useState(false);

  const handleQuickLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) return;

    const msg = `*तुरंत परामर्श अनुरोध (Instant Callback Lead) - Prakash Physiotherapy Clinic*\n` +
      `📞 *मरीज मोबाइल (Phone):* ${quickPhone.trim()}\n` +
      `🩺 *समस्या (Problem):* ${quickProblem}\n` +
      `📍 *Source:* Website Hero Quick-Callback`;

    // Backup lead in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('prakash_physio_leads') || '[]');
      localStorage.setItem(
        'prakash_physio_leads',
        JSON.stringify([{ phone: quickPhone.trim(), problem: quickProblem, time: new Date().toISOString() }, ...existing])
      );
    } catch (_) {}

    window.open(`https://wa.me/919711700817?text=${encodeURIComponent(msg)}`, '_blank');
    setQuickSent(true);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-sky-50/90 via-white to-slate-50 py-8 lg:py-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Copy, Headings, Condition Pills & Buttons */}
          <div className="lg:col-span-7 space-y-5 text-slate-800">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-sky-100 text-[#0F4C81] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-sky-200">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>
                {lang === 'hi' 
                  ? 'भंटाबारी रोड, भीमनगर • बीरपुर • सुपौल • नेपाल बॉर्डर (कोशी बैराज)'
                  : 'Bhantabari Road, Bhimnagar • Birpur • Supaul • Near Nepal Border'}
              </span>
            </div>

            {/* Main Heading (SEO-Optimized Bilingual H1) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins tracking-tight leading-tight">
                {lang === 'hi'
                  ? 'प्रकाश फिजियोथेरेपी क्लिनिक — भीमनगर, बीरपुर, सुपौल'
                  : 'Prakash Physiotherapy Clinic — Bhimnagar, Birpur, Supaul'}
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#0F4C81]">
                {lang === 'hi'
                  ? 'बिना ऑपरेशन कमर दर्द, साइटिका, स्लिप डिस्क, लकवा व जोड़ों के दर्द का पक्का इलाज'
                  : 'Best Non-Surgical Care for Back Pain, Sciatica, Slip Disc, Paralysis & Joint Pain'}
              </p>
            </div>

            {/* Doctor Credentials Sub-banner */}
            <div className="bg-white p-3.5 rounded-xl border border-sky-200 shadow-xs flex items-center gap-3">
              <img
                src="/img/Abhay Prakash.webp"
                alt="Dr. Abhay Prakash Tiwari - Best Physiotherapist in Bhimnagar Supaul"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0F4C81] flex-shrink-0"
                width="56"
                height="56"
              />
              <div className="text-xs sm:text-sm">
                <div className="font-extrabold text-slate-900 text-base">
                  {lang === 'hi' ? 'डॉ. अभय प्रकाश तिवारी (Dr. Abhay Prakash Tiwari)' : 'Dr. Abhay Prakash Tiwari (डॉ. अभय प्रकाश तिवारी)'}
                </div>
                <div className="text-[#0F4C81] font-bold">
                  M.P.T. Orthopedics (New Delhi) • B.P.T. (M.U.)
                </div>
                <div className="text-slate-600 text-[11px] font-medium">
                  {lang === 'hi' ? '12+ वर्षों का दिल्ली व बिहार में अनुभव | Reg: M.I.A.P 42989 | 4.9★ गूगल रेटिंग' : '12+ Yrs Delhi & Bihar Exp | Reg: M.I.A.P 42989 | 4.9★ Google Rated'}
                </div>
              </div>
            </div>

            {/* Primary High-Contrast Call & WhatsApp CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Direct Call Button */}
              <a
                href="tel:+919711700817"
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white py-4 px-5 rounded-xl font-extrabold text-base transition-all shadow-lg active:scale-95 text-center ring-2 ring-red-600/20"
              >
                <Phone className="w-5 h-5 fill-current text-white flex-shrink-0 animate-bounce" />
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-semibold text-red-100 uppercase tracking-wider">
                    {lang === 'hi' ? 'अभी डॉक्टर से बात करें' : 'Speak to Doctor Now'}
                  </span>
                  <span>+91 9711700817</span>
                </div>
              </a>

              {/* Recognizable WhatsApp Green Button */}
              <a
                href="https://wa.me/919711700817?text=नमस्ते%20डॉ.%20अभय%20प्रकाश%20तिवारी,%20मुझे%20फिजियोथेरेपी%20इलाज%20के%20लिए%20सलाह%20चाहिए।%20(Hello%20Dr.%20Tiwari,%20I%20want%20to%20consult%20for%20physiotherapy%20treatment.)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 px-5 rounded-xl font-extrabold text-base transition-all shadow-lg active:scale-95 text-center ring-2 ring-[#25D366]/30"
              >
                <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-semibold text-emerald-50 uppercase tracking-wider">
                    {lang === 'hi' ? 'व्हाट्सएप पर रिपोर्ट/मैसेज भेजें' : 'Instant WhatsApp Booking'}
                  </span>
                  <span>{t.whatsappChat}</span>
                </div>
              </a>
            </div>

            {/* Instant 2-Field Lead Capture / Callback Strip */}
            <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  {lang === 'hi'
                    ? 'तुरंत कॉल-बैक या अपॉइंटमेंट पाएं (10 सेकंड में):'
                    : 'Get Instant Doctor Callback / Appointment (10 Seconds):'}
                </span>
                <span className="text-[11px] font-bold text-[#0F4C81] bg-white px-2 py-0.5 rounded-md border border-amber-200">
                  {lang === 'hi' ? 'ओपीडी ₹500 | होम विजिट ₹700' : 'OPD ₹500 | Home Visit ₹700'}
                </span>
              </div>

              {quickSent ? (
                <div className="bg-emerald-100 border border-emerald-300 text-emerald-950 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>
                    {lang === 'hi'
                      ? '✓ धन्यवाद! व्हाट्सएप पर मैसेज भेजें या सीधे +91 9711700817 पर कॉल करें।'
                      : '✓ Request ready! Press Send on WhatsApp or call +91 9711700817 directly.'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuickSent(false)}
                    className="underline text-xs ml-2"
                  >
                    {lang === 'hi' ? 'बदलें' : 'Reset'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickLeadSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <input
                    type="tel"
                    required
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    placeholder={lang === 'hi' ? 'अपना मोबाइल नंबर लिखें *' : 'Enter Mobile Number *'}
                    className="sm:col-span-4 px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                  />
                  <select
                    value={quickProblem}
                    onChange={(e) => setQuickProblem(e.target.value)}
                    aria-label="Select condition"
                    className="sm:col-span-5 px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                  >
                    <option value="कमर दर्द / साइटिका (Back Pain / Sciatica)">
                      {lang === 'hi' ? 'कमर दर्द / साइटिका (Back Pain)' : 'Back Pain / Sciatica'}
                    </option>
                    <option value="स्लिप डिस्क (Slip Disc)">
                      {lang === 'hi' ? 'स्लिप डिस्क (Slip Disc)' : 'Slip Disc Rehab'}
                    </option>
                    <option value="लकवा / पैरालिसिस (Paralysis / Stroke)">
                      {lang === 'hi' ? 'लकवा / पैरालिसिस (Paralysis)' : 'Paralysis / Stroke'}
                    </option>
                    <option value="घुटने व जोड़ों का दर्द (Knee / Joint Pain)">
                      {lang === 'hi' ? 'घुटने का दर्द (Knee Pain)' : 'Knee / Joint Pain'}
                    </option>
                    <option value="गर्दन दर्द / सर्वाइकल (Neck / Cervical Pain)">
                      {lang === 'hi' ? 'गर्दन दर्द / सर्वाइकल (Cervical)' : 'Cervical / Neck Pain'}
                    </option>
                    <option value="फ्रोजन शोल्डर / कंधा जाम (Frozen Shoulder)">
                      {lang === 'hi' ? 'फ्रोजन शोल्डर (Frozen Shoulder)' : 'Frozen Shoulder'}
                    </option>
                    <option value="होम विजिट सुविधा (Home Visit Physiotherapy)">
                      {lang === 'hi' ? 'घर पर इलाज (Home Visit)' : 'Home Visit Service'}
                    </option>
                  </select>
                  <button
                    type="submit"
                    className="sm:col-span-3 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-sm transition-all active:scale-95"
                  >
                    {lang === 'hi' ? 'तुरंत बुक करें →' : 'Book Now →'}
                  </button>
                </form>
              )}
            </div>

            {/* Mobile Photo Carousel (Appears immediately below CTAs on Mobile) */}
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

            {/* Condition Pills */}
            <div className="space-y-2">
              <p className="text-slate-700 text-xs sm:text-sm font-semibold">
                {lang === 'hi'
                  ? 'अपनी बीमारी पर क्लिक कर इलाज की पूरी जानकारी देखें:'
                  : 'Tap any condition below to view treatment details:'}
              </p>
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
            </div>

            {/* Emergency & Nepal Note */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {t.emergencyService}
              </span>
              <a href="tel:+9779819053588" className="text-red-700 font-bold font-mono hover:underline">
                {lang === 'hi' ? '🇳🇵 नेपाल हेल्पलाइन: +977 9819053588' : '🇳🇵 Nepal Line: +977 9819053588'}
              </a>
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
