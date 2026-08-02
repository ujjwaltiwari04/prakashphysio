import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Star, MapPin, Users, Award, ShieldCheck } from 'lucide-react';

interface TrustStripProps {
  lang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="bg-[#0F4C81] text-white py-6 px-4 shadow-md border-y border-sky-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          
          {/* Rating Badge */}
          <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl border border-white/15">
            <div className="p-2.5 bg-red-600 text-white rounded-lg flex-shrink-0">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-red-300">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-white text-sm ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-sky-100 font-medium">
                {lang === 'hi' ? 'गूगल मैप्स पर 100+ सत्यापित मरीजों की समीक्षा' : 'Google Reviews Verified Ratings'}
              </p>
            </div>
          </div>

          {/* Serving Locations Strip */}
          <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl border border-white/15">
            <div className="p-2.5 bg-red-600 text-white rounded-lg flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-red-200 font-bold block">
                {t.trustServingAreasTitle}
              </span>
              <p className="text-sm font-semibold text-white leading-tight">
                Bhimnagar • Birpur • Supaul • Nirmali • Nepal Border
              </p>
            </div>
          </div>

          {/* Experience & Patient Count */}
          <div className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-xl border border-white/15">
            <div className="p-2.5 bg-sky-500 text-white rounded-lg flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                {t.trustPatientsCount}
              </div>
              <p className="text-xs text-sky-100">
                {lang === 'hi' ? '12+ वर्षों का दिल्ली व बिहार में चिकित्सीय अनुभव' : '12+ Years Clinical Rehabilitation Experience'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
