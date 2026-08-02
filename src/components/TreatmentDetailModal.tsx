import React from 'react';
import { Language, Treatment } from '../types';
import { translations } from '../data/translations';
import { X, CheckCircle2, ShieldAlert, Stethoscope, Calendar, Phone, ArrowLeft } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  lang: Language;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  lang,
  onClose,
  onBookTreatment
}) => {
  if (!treatment) return null;

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 bg-[#0F4C81] text-white p-4 sm:p-5 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'hi' ? 'वापस जाएं' : 'Back'}</span>
          </button>

          <h3 className="font-bold text-sm sm:text-base font-poppins truncate max-w-xs sm:max-w-md">
            {lang === 'hi' ? treatment.titleHi : treatment.titleEn}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
          {/* Top Hero Banner inside modal */}
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-64 bg-slate-100">
            <img
              src={treatment.image}
              alt={lang === 'hi' ? treatment.titleHi : treatment.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-red-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider mb-1 inline-block">
                SEO Condition Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                {lang === 'hi' ? treatment.titleHi : treatment.titleEn}
              </h2>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base font-poppins flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#0F4C81]" />
              <span>{lang === 'hi' ? 'बीमारी एवं फिजियोथेरेपी समाधान' : 'Condition Overview & Therapy Solution'}</span>
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? treatment.fullDescHi : treatment.fullDescEn}
            </p>
          </div>

          {/* Grid of Symptoms & Causes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Symptoms */}
            <div className="bg-red-50/70 p-4 rounded-xl border border-red-200/80 space-y-3">
              <h5 className="font-bold text-red-900 text-sm flex items-center gap-2 font-poppins">
                <ShieldAlert className="w-4 h-4 text-red-700" />
                <span>{lang === 'hi' ? 'प्रमुख लक्षण (Symptoms):' : 'Key Symptoms:'}</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {(lang === 'hi' ? treatment.symptomsHi : treatment.symptomsEn).map((symp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{symp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes */}
            <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200/80 space-y-3">
              <h5 className="font-bold text-[#0F4C81] text-sm flex items-center gap-2 font-poppins">
                <ShieldAlert className="w-4 h-4 text-[#0F4C81]" />
                <span>{lang === 'hi' ? 'मुख्य कारण (Causes):' : 'Possible Causes:'}</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {(lang === 'hi' ? treatment.causesHi : treatment.causesEn).map((cause, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full mt-1.5 flex-shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment Techniques Applied */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
            <h5 className="font-bold text-slate-900 text-sm font-poppins uppercase tracking-wider">
              {lang === 'hi' ? 'डॉ. तिवारी द्वारा उपलब्ध कराई जाने वाली थेरेपी तकनीकें:' : 'Treatment Modalities & Exercises Applied:'}
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(lang === 'hi' ? treatment.techniquesHi : treatment.techniquesEn).map((tech, i) => (
                <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C81] flex-shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Footer in Modal */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookTreatment(lang === 'hi' ? treatment.titleHi : treatment.titleEn);
              }}
              className="flex-1 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{t.bookForThis}</span>
            </button>

            <a
              href="tel:+919711700817"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9711700817</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
