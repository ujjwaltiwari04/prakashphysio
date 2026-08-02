import React from 'react';
import { Language } from '../types';
import { recoveryStoriesData } from '../data/clinicData';
import { translations } from '../data/translations';
import { CheckCircle2, Star, ShieldCheck, MapPin, Clock, Award } from 'lucide-react';

interface RecoveryStoriesProps {
  lang: Language;
}

export const RecoveryStories: React.FC<RecoveryStoriesProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="stories" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'वास्तविक केस स्टडीज' : 'Verified Case Studies'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.recoveryTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.recoverySubtitle}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recoveryStoriesData.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-6 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Patient Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-sky-100 text-[#0F4C81] font-extrabold text-lg rounded-full flex items-center justify-center border border-sky-200">
                      {story.patientInitials.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg font-poppins">
                        {story.patientInitials} ({story.age} Yrs)
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{lang === 'hi' ? story.locationHi : story.locationEn}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-200 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Problem & Treatment Pill */}
                <div className="space-y-2">
                  <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-xs sm:text-sm">
                    <span className="font-bold text-amber-900 block mb-0.5">
                      {lang === 'hi' ? 'स्वास्थ्य समस्या:' : 'Medical Problem:'}
                    </span>
                    <span className="text-slate-800 font-medium">
                      {lang === 'hi' ? story.conditionHi : story.conditionEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <Clock className="w-4 h-4 text-[#0F4C81]" />
                    <span className="font-semibold text-slate-900">{t.recoveryTime}</span>
                    <span className="font-bold text-[#0F4C81]">
                      {lang === 'hi' ? story.treatmentDurationHi : story.treatmentDurationEn}
                    </span>
                  </div>
                </div>

                {/* Patient Journey Narrative */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic bg-slate-50/60 p-3.5 rounded-xl border border-slate-100">
                  "{lang === 'hi' ? story.storyHi : story.storyEn}"
                </p>

              </div>

              {/* Outcome Box */}
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-1">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.afterText}</span>
                </div>
                <p className="text-slate-900 text-xs sm:text-sm font-semibold">
                  {lang === 'hi' ? story.outcomeHi : story.outcomeEn}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Notice */}
        <div className="text-center text-xs text-slate-500 max-w-2xl mx-auto italic">
          {lang === 'hi'
            ? '* नोट: परिणाम प्रत्येक मरीज की शारीरिक स्थिति, बीमारी के समय और नियमित व्यायाम पर निर्भर करते हैं। कोई झूठा वादा नहीं किया जाता।'
            : '* Note: Clinical recovery outcomes depend on individual condition severity, onset time, and compliance with exercises.'}
        </div>

      </div>
    </section>
  );
};
