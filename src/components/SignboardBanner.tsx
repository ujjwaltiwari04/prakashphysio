import React from 'react';
import { Language } from '../types';
import { Phone, ShieldCheck, MapPin, Award } from 'lucide-react';

interface SignboardBannerProps {
  lang: Language;
}

export const SignboardBanner: React.FC<SignboardBannerProps> = ({ lang }) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-[#0F4C81] to-slate-900 text-white py-6 px-4 sm:px-6 shadow-inner border-y border-sky-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-200 px-3 py-1 rounded-full text-xs font-semibold border border-sky-400/30">
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              <span>{lang === 'hi' ? 'सत्यापित क्लिनिक विवरण (Signboard verified)' : 'Official Clinic Board Registration'}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins tracking-wide text-white">
              {lang === 'hi' ? 'प्रकाश फिजियोथेरेपी क्लिनिक' : 'Prakash Physiotherapy Clinic'}
            </h3>

            <p className="text-lg font-bold text-white flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>{lang === 'hi' ? 'डॉ. अभय प्रकाश तिवारी' : 'Dr. Abhay Prakash Tiwari'}</span>
              <span className="text-xs bg-sky-600/80 text-sky-100 px-2.5 py-0.5 rounded-md font-mono">
                M.P.T Ortho (New Delhi)
              </span>
            </p>

            <div className="text-xs text-sky-200 font-mono space-y-1 break-words">
              <p className="leading-relaxed">M.I.A.P. 42989 | Reg. G.A.P.T./22/G00562 | B.P.T. (Magadh University)</p>
              <p className="text-sky-200 font-semibold flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-300" />
                {lang === 'hi' ? 'भीमनगर चौक, बीरपुर रोड, जिला सुपौल (नेपाल बॉर्डर)' : 'Bhimnagar Chowk, Birpur Road, Supaul (Near Nepal Border)'}
              </p>
            </div>
          </div>

          {/* Direct Phone Numbers as shown on the Signboard */}
          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/20 w-full md:w-auto text-center md:text-right space-y-2">
            <div className="text-xs text-red-300 font-bold uppercase tracking-wider flex items-center justify-center md:justify-end gap-1">
              <Award className="w-4 h-4 text-red-400" />
              <span>{lang === 'hi' ? '24 घंटा सेवा उपलब्ध (Emergency Helpline)' : '24 Hours Emergency Helpline'}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              <a
                href="tel:+919711700817"
                className="inline-flex items-center gap-1.5 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-transform active:scale-95 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 9711700817
              </a>
              <a
                href="tel:+919654874675"
                className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-transform active:scale-95 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 9654874675
              </a>
              <a
                href="tel:+9779819053588"
                className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-transform active:scale-95 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                +977 9819053588
              </a>
            </div>

            <p className="text-[11px] text-sky-200 italic">
              {lang === 'hi' ? 'नेपाल से कॉल करने वाले मरीज +977 9819053588 पर सीधे संपर्क करें' : 'Direct Nepal helpline for border patients: +977 9819053588'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
