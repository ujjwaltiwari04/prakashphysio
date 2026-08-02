import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { doctorData } from '../data/clinicData';
import { translations } from '../data/translations';
import { Award, CheckCircle, ShieldCheck, HeartPulse, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

interface AboutDoctorProps {
  lang: Language;
  onOpenAppointment: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ lang, onOpenAppointment }) => {
  const t = translations[lang];

  // Doctor Official Portrait followed by Awards & Official Certificates
  const doctorPhotos = [
    {
      url: "/img/Abhay Prakash.webp",
      captionHi: "डॉ. अभय प्रकाश तिवारी (M.P.T. Orthopedics New Delhi) - वरिष्ठ फिजियोथेरेपिस्ट",
      captionEn: "Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi) - Senior Physiotherapist"
    },
    {
      url: "/img/awards.webp",
      captionHi: "डॉ. अभय प्रकाश तिवारी - चिकित्सा उत्कृष्ट सम्मान एवं पुरस्कार प्रमाणपत्र",
      captionEn: "Dr. Abhay Prakash Tiwari - Excellence Award & Certificate of Honor"
    },
    {
      url: "/img/GAPT certificate.webp",
      captionHi: "जी.ए.पी.टी. पंजीकृत फिजियोथेरेपिस्ट प्रमाणपत्र (Reg: G.A.P.T./22/G00562)",
      captionEn: "G.A.P.T. Registered Physiotherapist Certificate (Reg: G.A.P.T./22/G00562)"
    },
    {
      url: "/img/association certificate.webp",
      captionHi: "इंडियन एसोसिएशन ऑफ फिजियोथेरेपिस्ट्स आजीवन सदस्यता (M.I.A.P. 42989)",
      captionEn: "Indian Association of Physiotherapists Life Membership (M.I.A.P. 42989)"
    }
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  // Auto-slide every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % doctorPhotos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [doctorPhotos.length]);

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev + 1) % doctorPhotos.length);
  };

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev - 1 + doctorPhotos.length) % doctorPhotos.length);
  };

  return (
    <section id="doctor" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Doctor Image & Clinical Photo Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0F4C81] to-[#2E8BC0] rounded-3xl transform rotate-2 opacity-20 blur-xs" />
              
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/5 group">
                {/* Slides */}
                {doctorPhotos.map((photo, idx) => (
                  <div
                    key={photo.url}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      idx === activePhotoIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={lang === 'hi' ? photo.captionHi : photo.captionEn}
                      className="w-full h-full object-contain bg-slate-950 p-2"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="750"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20" />
                    
                    {/* Photo Caption Badge */}
                    <div className="absolute bottom-20 left-3 right-3 z-20 text-white">
                      <p className="bg-slate-900/80 backdrop-blur-xs text-[11px] sm:text-xs p-2 rounded-lg border border-white/10 text-center font-medium font-poppins">
                        {lang === 'hi' ? photo.captionHi : photo.captionEn}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Slider Controls */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                  aria-label="Previous Doctor Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                  aria-label="Next Doctor Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating Experience Badge */}
                <div className="absolute bottom-3 left-3 right-3 z-30 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 text-white font-extrabold rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    12+
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm font-poppins truncate">
                      {lang === 'hi' ? 'वर्षों का चिकित्सीय अनुभव' : 'Years Clinical Experience'}
                    </div>
                    <div className="text-[11px] text-sky-200 truncate">
                      {lang === 'hi' ? 'दिल्ली के शीर्ष अस्पतालों में कार्य अनुभव' : 'Ex-Physiotherapist in Top Delhi Hospitals'}
                    </div>
                  </div>
                </div>

                {/* Dots indicator */}
                <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                  {doctorPhotos.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActivePhotoIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === activePhotoIdx ? 'bg-amber-400 w-3' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-[#0F4C81] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#0F4C81]" />
              <span>{t.aboutDoctorSubtitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
              {lang === 'hi' ? doctorData.nameHi : doctorData.nameEn}
            </h2>

            <p className="text-lg font-semibold text-[#0F4C81]">
              {lang === 'hi' ? doctorData.titleHi : doctorData.titleEn}
            </p>

            {/* Qualifications Card */}
            <div className="bg-sky-50/80 p-5 rounded-2xl border border-sky-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#0F4C81]" />
                <span>{t.qualificationHeading}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                {(lang === 'hi' ? doctorData.qualificationsHi : doctorData.qualificationsEn).map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-[#0F4C81] flex-shrink-0 mt-0.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? doctorData.aboutHi : doctorData.aboutEn}
            </p>

            {/* Quote / Mission */}
            <blockquote className="border-l-4 border-[#0F4C81] pl-4 py-2 italic text-slate-800 bg-slate-50 rounded-r-xl font-medium text-sm sm:text-base">
              "{lang === 'hi' ? doctorData.missionHi : doctorData.missionEn}"
            </blockquote>

            {/* Specialization Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                {lang === 'hi' ? 'विशेष विशेषज्ञता (Areas of Expertise):' : 'Key Areas of Expertise:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {(lang === 'hi' ? doctorData.specializationsHi : doctorData.specializationsEn).map((spec, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold border border-slate-200">
                    • {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="bg-[#0F4C81] hover:bg-[#0c3e6a] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <HeartPulse className="w-4 h-4 text-white" />
                <span>{lang === 'hi' ? 'डॉक्टर तिवारी से अपॉइंटमेंट लें' : 'Consult Dr. Tiwari'}</span>
              </button>

              <a
                href="tel:+919711700817"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>+91 9711700817</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
