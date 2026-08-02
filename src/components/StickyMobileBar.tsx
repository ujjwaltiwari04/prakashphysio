import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  lang: Language;
  onOpenAppointment: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ lang, onOpenAppointment }) => {
  const t = translations[lang];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 sm:p-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Direct Call Button */}
        <a
          href="tel:+919711700817"
          className="bg-[#0F4C81] active:bg-[#0c3e6a] text-white py-3 px-2 rounded-xl text-center font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-white fill-current" />
          <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href="https://wa.me/919711700817?text=Hello%20Dr.%20Abhay%20Prakash%20Tiwari,%20I%20want%20to%20book%20a%20physiotherapy%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0F4C81] active:bg-[#0c3e6a] text-white py-3 px-2 rounded-xl text-center font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment Modal Button */}
        <button
          type="button"
          onClick={onOpenAppointment}
          className="bg-white active:bg-slate-100 text-[#0F4C81] py-3 px-2 rounded-xl text-center font-extrabold text-xs flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-5 h-5" />
          <span>{lang === 'hi' ? 'बुक करें' : 'Book'}</span>
        </button>

      </div>
    </div>
  );
};
