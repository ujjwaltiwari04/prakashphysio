import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  lang: Language;
  onOpenAppointment: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ lang, onOpenAppointment }) => {
  const t = translations[lang];

  return (
    <>
      {/* Mobile Bottom Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:p-2.5 shadow-2xl">
        <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
          
          {/* Direct Call Button */}
          <a
            href="tel:+919711700817"
            className="bg-red-600 active:bg-red-700 text-white py-2.5 px-2 rounded-xl text-center font-extrabold text-xs flex flex-col items-center justify-center gap-0.5 shadow-md active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-white fill-current" />
            <span>{lang === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
          </a>

          {/* Direct WhatsApp Button */}
          <a
            href="https://wa.me/919711700817?text=नमस्ते%20डॉ.%20अभय%20प्रकाश%20तिवारी,%20मुझे%20फिजियोथेरेपी%20परामर्श%20चाहिए।%20(Hello%20Dr.%20Tiwari,%20I%20want%20to%20book%20a%20physiotherapy%20consultation.)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] active:bg-[#1ebe5d] text-white py-2.5 px-2 rounded-xl text-center font-extrabold text-xs flex flex-col items-center justify-center gap-0.5 shadow-md active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Book Appointment Modal Button */}
          <button
            type="button"
            onClick={onOpenAppointment}
            className="bg-amber-400 active:bg-amber-500 text-slate-950 py-2.5 px-2 rounded-xl text-center font-extrabold text-xs flex flex-col items-center justify-center gap-0.5 shadow-md active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'hi' ? 'अपॉइंटमेंट' : 'Book Visit'}</span>
          </button>

        </div>
      </div>

      {/* Desktop Floating WhatsApp & Call Lead Widget */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <a
          href="tel:+919711700817"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full font-extrabold text-xs shadow-xl transition-all hover:scale-105"
          title="Call Dr. Abhay Prakash Tiwari"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>{lang === 'hi' ? 'कॉल: +91 9711700817' : 'Call: +91 9711700817'}</span>
        </a>
        <a
          href="https://wa.me/919711700817?text=नमस्ते%20डॉ.%20अभय%20प्रकाश%20तिवारी,%20मुझे%20फिजियोथेरेपी%20परामर्श%20चाहिए।%20(Hello%20Dr.%20Tiwari,%20I%20want%20to%20book%20a%20physiotherapy%20consultation.)"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3.5 rounded-full font-extrabold text-sm shadow-2xl transition-all hover:scale-105 ring-4 ring-[#25D366]/30"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>{lang === 'hi' ? 'व्हाट्सएप परामर्श' : 'Chat on WhatsApp'}</span>
        </a>
      </div>
    </>
  );
};
