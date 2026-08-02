import React, { useState } from 'react';
import { Language } from '../types';
import { servingLocationsData } from '../data/clinicData';
import { MapPin, Search, Navigation, Clock, Phone, Sparkles, Compass } from 'lucide-react';

interface NearbyLocationsSectionProps {
  lang: Language;
  onSelectLocationForBooking: (locationName: string) => void;
}

export const NearbyLocationsSection: React.FC<NearbyLocationsSectionProps> = ({
  lang,
  onSelectLocationForBooking
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'primary' | 'supaul' | 'araria' | 'nepal'>('all');

  const filteredLocations = servingLocationsData.filter((loc) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'primary' && (loc.category === 'primary' || loc.category === 'barrage')) ||
      loc.category === activeCategory;

    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !term ||
      loc.nameEn.toLowerCase().includes(term) ||
      loc.nameHi.includes(term) ||
      loc.districtEn.toLowerCase().includes(term) ||
      loc.districtHi.includes(term) ||
      loc.taglineHi.includes(term) ||
      loc.taglineEn.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="locations" className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? '60+ सेवारत निकटवर्ती स्थान (SEO Radius)' : '60+ Serving Locations Nearby'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {lang === 'hi'
              ? 'हमारे क्लिनिक के समीपस्थ गांव व क्षेत्र (सेवा दायरा)'
              : 'Villages & Townships Served Near Our Clinic'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'प्रकाश फिजियोथेरेपी क्लिनिक (भंटाबारी रोड, भीमनगर) द्वारा पूरे क्षेत्र में क्लिनिक ओपीडी के साथ-साथ आपके घर पर ही फिजियोथेरेपी (Home Visit) की सुविधा भी उपलब्ध कराई जाती है।'
              : 'Prakash Physiotherapy Clinic provides OPD treatment as well as Home Visit Physiotherapy care directly at your doorstep across all surrounding villages.'}
          </p>

          {/* Pricing Summary Strip */}
          <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-2xl max-w-2xl mx-auto text-xs sm:text-sm text-slate-800 font-medium flex flex-wrap items-center justify-center gap-3 sm:gap-6 shadow-2xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <span>{lang === 'hi' ? 'ओपीडी शुल्क:' : 'OPD Fee:'}</span>
              <strong className="text-[#0F4C81]">₹500</strong> ({lang === 'hi' ? 'प्रथम' : '1st'}) / <strong className="text-[#0F4C81]">₹300</strong> ({lang === 'hi' ? 'आगे' : 'later'})
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="font-bold text-[#0F4C81] flex items-center gap-1.5">
              <span>{lang === 'hi' ? 'होम विजिट दर:' : 'Home Visit Charge:'}</span>
              <strong className="text-[#0F4C81] text-base">₹700 / {lang === 'hi' ? 'सेशन' : 'Session'}</strong>
            </span>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 max-w-4xl mx-auto">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lang === 'hi'
                  ? 'अपना गांव या शहर खोजें (जैसे: रानीगंज, राजविराज, बसंतपुर, बीरपुर, फारबिसगंज, बोपटियाही...)'
                  : 'Search your village or town (e.g., Raniganj, Rajbiraj, Basantpur, Forbesganj, Birpur...)'
              }
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] focus:bg-white transition-all font-medium placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold pt-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#0F4C81] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'hi' ? `सभी स्थान (${servingLocationsData.length})` : `All Places (${servingLocationsData.length})`}
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('primary')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeCategory === 'primary'
                  ? 'bg-[#0F4C81] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'hi' ? 'भीमनगर व बीरपुर' : 'Bhimnagar & Birpur'}
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('supaul')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeCategory === 'supaul'
                  ? 'bg-[#0F4C81] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'hi' ? 'सुपौल जिला (गांव व ब्लॉक)' : 'Supaul District'}
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('nepal')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeCategory === 'nepal'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-red-50 text-red-900 border border-red-200 hover:bg-red-100'
              }`}
            >
              {lang === 'hi' ? 'नेपाल बॉर्डर व सप्तरी' : 'Nepal / Saptari'}
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory('araria')}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                activeCategory === 'araria'
                  ? 'bg-[#0F4C81] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'hi' ? 'अररिया (रानीगंज/फारबिसगंज)' : 'Araria Region'}
            </button>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-2">
          <span>
            {lang === 'hi'
              ? `कुल ${filteredLocations.length} सेवारत स्थान दिखाए जा रहे हैं`
              : `Showing ${filteredLocations.length} serving locations`}
          </span>
          <span className="text-[#0F4C81] font-bold">
            {lang === 'hi' ? 'मुख्य क्लिनिक: भीमनगर चौक' : 'HQ Clinic: Bhimnagar Chowk'}
          </span>
        </div>

        {/* Location Cards Grid */}
        {filteredLocations.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-slate-600 font-medium">
              {lang === 'hi'
                ? `"${searchTerm}" नाम से कोई स्थान सूची में नहीं मिला, परंतु हमारे क्लिनिक पर पूरे क्षेत्र से मरीज आ सकते हैं।`
                : `No exact location found for "${searchTerm}", but our clinic serves all patients across Bihar & Nepal.`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-[#0F4C81] text-white rounded-xl text-xs font-bold"
            >
              {lang === 'hi' ? 'सभी स्थान देखें' : 'View All Places'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredLocations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base font-poppins group-hover:text-[#0F4C81] transition-colors flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span>{lang === 'hi' ? loc.nameHi : loc.nameEn}</span>
                      </h3>
                      <span className="text-xs text-slate-500 font-medium block mt-0.5">
                        {lang === 'hi' ? loc.districtHi : loc.districtEn}
                      </span>
                    </div>

                    <span className="bg-sky-50 text-[#0F4C81] border border-sky-200 text-[11px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-sky-600" />
                      <span>{loc.distanceKm}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                    {lang === 'hi' ? loc.taglineHi : loc.taglineEn}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] gap-2">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{lang === 'hi' ? loc.estTravelTimeHi : loc.estTravelTimeEn}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectLocationForBooking(lang === 'hi' ? loc.nameHi : loc.nameEn)}
                    className="bg-[#0F4C81] hover:bg-[#0c3e6a] text-white px-3 py-1.5 rounded-lg font-bold text-[11px] transition-all shadow-2xs active:scale-95 whitespace-nowrap"
                  >
                    {lang === 'hi' ? 'बुकिंग करें' : 'Book Visit'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEO All-Location Index Tag Cloud */}
        <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
          <div className="flex items-center gap-2 text-sky-300 font-bold font-poppins uppercase tracking-wider text-xs">
            <Sparkles className="w-4 h-4" />
            <span>
              {lang === 'hi'
                ? 'गूगल इंडेक्स हेतु सभी 61 निकटवर्ती सेवारत स्थान लिस्ट:'
                : 'Complete Local SEO Area Coverage List (61 Target Towns):'}
            </span>
          </div>

          <p className="text-slate-400 leading-relaxed text-[11px] font-mono">
            {servingLocationsData.map((l) => `${l.nameEn} (${l.nameHi})`).join(' • ')}
          </p>
        </div>

      </div>
    </section>
  );
};
