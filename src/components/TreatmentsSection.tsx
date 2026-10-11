import React, { useState } from 'react';
import { Language, Treatment } from '../types';
import { treatmentsData } from '../data/clinicData';
import { translations } from '../data/translations';
import { Search, ChevronRight, Activity, Zap, ShieldAlert, HeartPulse, Sparkles } from 'lucide-react';

interface TreatmentsSectionProps {
  lang: Language;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  lang,
  onSelectTreatment
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[lang];

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'spine', label: t.spineCategory },
    { id: 'neuro', label: t.neuroCategory },
    { id: 'joint', label: t.jointCategory },
    { id: 'rehab', label: t.rehabCategory },
    { id: 'specialized', label: t.specializedCategory }
  ];

  const filteredTreatments = treatmentsData.filter((treatment) => {
    const matchesCategory = selectedCategory === 'all' || treatment.category === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    if (!query) return matchesCategory;

    const titleHi = treatment.titleHi.toLowerCase();
    const titleEn = treatment.titleEn.toLowerCase();
    const descHi = treatment.shortDescHi.toLowerCase();
    const descEn = treatment.shortDescEn.toLowerCase();

    return matchesCategory && (
      titleHi.includes(query) ||
      titleEn.includes(query) ||
      descHi.includes(query) ||
      descEn.includes(query)
    );
  });

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider">
            {lang === 'hi' ? 'चिकित्सा सेवाएं' : 'Specialized Services'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.treatmentsTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.treatmentsSubtitle}
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchTreatmentPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] focus:bg-white transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F4C81] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={lang === 'hi' ? treatment.titleHi : treatment.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-sky-200 text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {lang === 'hi' ? treatment.titleHi.split('(')[0] : treatment.titleEn.split('&')[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg font-poppins leading-snug group-hover:text-[#0F4C81] transition-colors">
                    {lang === 'hi' ? treatment.titleHi : treatment.titleEn}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {lang === 'hi' ? treatment.shortDescHi : treatment.shortDescEn}
                  </p>
                </div>

                {/* Learn More Button */}
                <button
                  type="button"
                  onClick={() => onSelectTreatment(treatment)}
                  className="w-full mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-[#0F4C81] font-bold text-xs sm:text-sm hover:text-[#0c3e6a] transition-colors group/btn"
                >
                  <span>{t.learnMoreBtn}</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-base font-semibold">
              {lang === 'hi' ? 'कोई परिणाम नहीं मिला। कृपया दूसरा शब्द खोजें।' : 'No matching conditions found. Try searching another term.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
