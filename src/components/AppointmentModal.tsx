import React, { useState } from 'react';
import { Language, AppointmentFormData } from '../types';
import { translations } from '../data/translations';
import { X, Calendar, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  lang: Language;
  initialCondition?: string;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  lang,
  initialCondition = '',
  onClose
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const [consultType, setConsultType] = useState<'opd' | 'home_visit'>('opd');
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phone: '',
    villageLocation: '',
    condition: initialCondition || '',
    preferredDate: '',
    preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
    preferredLanguage: lang,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const visitTypeStr = consultType === 'home_visit'
      ? 'Home Visit Service (Charges: ₹700/session)'
      : 'Clinic OPD Visit (Charges: 1st Visit ₹500, Later ₹300/session)';

    const textMessage = `*New Appointment Booking - Prakash Physiotherapy Clinic*%0A` +
      `*Visit Type:* ${visitTypeStr}%0A` +
      `*Patient Name:* ${formData.patientName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Village/Location:* ${formData.villageLocation}%0A` +
      `*Problem:* ${formData.condition}%0A` +
      `*Date:* ${formData.preferredDate}%0A` +
      `*Time Slot:* ${formData.preferredTimeSlot}`;

    const whatsappUrl = `https://wa.me/919711700817?text=${textMessage}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full my-auto shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0F4C81] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-white" />
            <h3 className="font-bold text-base font-poppins">{t.formTitle}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-sky-100 text-[#0F4C81] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-poppins">
                {lang === 'hi' ? 'व्हाट्सएप खुल रहा है...' : 'WhatsApp Opening...'}
              </h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                {lang === 'hi'
                  ? 'आपका अपॉइंटमेंट मैसेज तैयार कर दिया गया है। व्हाट्सएप पर भेजें पर क्लिक करें।'
                  : 'Your details have been prefilled. Click send on WhatsApp.'}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#0F4C81] text-white font-bold rounded-xl text-sm"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'सेवा का प्रकार चुनें (Consultation Type):' : 'Select Service Type:'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultType('opd')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      consultType === 'opd'
                        ? 'bg-sky-50 border-[#0F4C81] ring-2 ring-[#0F4C81]/20'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-xs flex items-center gap-1">
                      {lang === 'hi' ? 'क्लिनिक ओपीडी' : 'Clinic OPD'}
                    </span>
                    <span className="text-[11px] text-slate-600 font-semibold mt-1">
                      {lang === 'hi' ? 'प्रथम: ₹500 | आगे: ₹300' : '1st: ₹500 | Later: ₹300'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('home_visit')}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      consultType === 'home_visit'
                        ? 'bg-sky-50 border-[#0F4C81] ring-2 ring-[#0F4C81]/20'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-xs flex items-center gap-1">
                      {lang === 'hi' ? 'होम विजिट (घर पर)' : 'Home Visit'}
                    </span>
                    <span className="text-[11px] text-[#0F4C81] font-bold mt-1">
                      ₹700 / {lang === 'hi' ? 'सेशन' : 'Session'}
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.fieldName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  placeholder={lang === 'hi' ? 'जैसे: रामप्रसाद यादव' : 'e.g., Ramprasad Yadav'}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.fieldPhone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={lang === 'hi' ? 'मोबाइल नंबर' : 'Phone Number'}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.fieldLocation} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.villageLocation}
                  onChange={(e) => setFormData({ ...formData, villageLocation: e.target.value })}
                  placeholder={lang === 'hi' ? 'गांव / शहर (जैसे: भीमनगर)' : 'Village / Town (e.g. Bhimnagar)'}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.fieldCondition} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  placeholder={lang === 'hi' ? 'कमर दर्द / साइटिका / लकवा...' : 'Back pain / Sciatica / Paralysis...'}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.fieldDate} *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.fieldTimeSlot}
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-2 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:bg-white focus:ring-2 focus:ring-[#0F4C81]"
                  >
                    <option value="Morning">{t.slotMorning}</option>
                    <option value="Afternoon">{t.slotAfternoon}</option>
                    <option value="Evening">{t.slotEvening}</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{t.submitFormBtn}</span>
                </button>

                <a
                  href="tel:+919711700817"
                  className="w-full py-3 bg-[#0F4C81] text-white font-bold rounded-xl text-xs text-center block"
                >
                  {t.directCallBtn} (+91 9711700817)
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
