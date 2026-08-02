import React from 'react';
import { Language } from '../types';
import { googleReviewsData } from '../data/clinicData';
import { translations } from '../data/translations';
import { Star, CheckCircle, ExternalLink, MapPin } from 'lucide-react';

interface GoogleReviewsProps {
  lang: Language;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-red-600 fill-current" />
              <span>{lang === 'hi' ? 'गूगल रेटिंग 4.9/5' : 'Google Verified Rating'}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
              {t.reviewsTitle}
            </h2>
            <p className="text-slate-600 text-base">
              {t.reviewsSubtitle}
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/9hx54wRLTqdXex5fA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0F4C81] border border-slate-300 hover:border-[#0F4C81] px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-2xs hover:shadow-md"
          >
            <span>{t.writeReviewBtn}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleReviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-[#0F4C81] text-white font-bold rounded-full flex items-center justify-center text-sm">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm font-poppins">
                        {rev.authorName}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-red-600" />
                        <span>{lang === 'hi' ? rev.locationHi : rev.locationEn}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] bg-sky-50 text-[#0F4C81] px-2 py-0.5 rounded-md font-semibold border border-sky-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-[#0F4C81]" />
                    <span>{t.verifiedPatient}</span>
                  </span>
                </div>

                {/* Stars & Time */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <div className="flex text-red-600">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span>{lang === 'hi' ? rev.timeAgoHi : rev.timeAgoEn}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  "{lang === 'hi' ? rev.textHi : rev.textEn}"
                </p>

              </div>

              {/* Tag */}
              <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-[#0F4C81]">
                ✓ {lang === 'hi' ? rev.treatmentTagHi : rev.treatmentTagEn}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
