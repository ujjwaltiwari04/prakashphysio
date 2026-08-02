import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UserCheck, Stethoscope, Sparkles, IndianRupee, Cpu, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = translations[lang];

  const features = [
    {
      icon: UserCheck,
      title: t.why1Title,
      desc: t.why1Desc,
      bgColor: 'bg-blue-50 text-[#0F4C81]'
    },
    {
      icon: Stethoscope,
      title: t.why2Title,
      desc: t.why2Desc,
      bgColor: 'bg-emerald-50 text-emerald-700'
    },
    {
      icon: Sparkles,
      title: t.why3Title,
      desc: t.why3Desc,
      bgColor: 'bg-amber-50 text-amber-700'
    },
    {
      icon: IndianRupee,
      title: t.why4Title,
      desc: t.why4Desc,
      bgColor: 'bg-sky-50 text-sky-700'
    },
    {
      icon: Cpu,
      title: t.why5Title,
      desc: t.why5Desc,
      bgColor: 'bg-purple-50 text-purple-700'
    },
    {
      icon: HeartHandshake,
      title: t.why6Title,
      desc: t.why6Desc,
      bgColor: 'bg-rose-50 text-rose-700'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.whyChooseTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.whyChooseSubtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${feat.bgColor} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-poppins">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
