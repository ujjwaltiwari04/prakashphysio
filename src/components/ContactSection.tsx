import React, { useState } from 'react';
import { Language, AppointmentFormData } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  initialCondition?: string;
  onFormSubmitted?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialCondition = '',
  onFormSubmitted
}) => {
  const t = translations[lang];

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
    
    // Construct WhatsApp message with patient details
    const textMessage = `*New Appointment Request - Prakash Physiotherapy Clinic*%0A` +
      `👤 *Patient Name:* ${formData.patientName}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📍 *Location/Village:* ${formData.villageLocation}%0A` +
      `🩺 *Problem:* ${formData.condition}%0A` +
      `📅 *Preferred Date:* ${formData.preferredDate}%0A` +
      `⏰ *Slot:* ${formData.preferredTimeSlot}%0A` +
      `🗣️ *Language:* ${formData.preferredLanguage === 'hi' ? 'Hindi' : 'English'}`;

    const whatsappUrl = `https://wa.me/919711700817?text=${textMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    if (onFormSubmitted) onFormSubmitted();
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सम्पर्क व स्थान' : 'Location & Booking'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.contactTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Address, Map & Helpline Numbers */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="bg-sky-50/80 p-6 rounded-2xl border border-sky-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#0F4C81] text-white rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-poppins">
                    {t.clinicAddressLabel}
                  </h3>
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed font-medium">
                    {t.clinicAddressText}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-sky-200/60 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-[#0F4C81]">{t.landmarksLabel}</p>
                <p>{t.landmarksText}</p>
              </div>
            </div>

            {/* Helpline Numbers Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-base font-poppins flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span>{t.phoneNumbersLabel}</span>
              </h3>

              <div className="space-y-3">
                {/* India Line */}
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">{t.indiaHelpline}</span>
                    <span className="font-extrabold text-slate-900 text-base font-mono">+91 9711700817</span>
                  </div>
                  <a
                    href="tel:+919711700817"
                    className="bg-[#0F4C81] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-2xs hover:bg-[#0c3e6a]"
                  >
                    {t.callNow}
                  </a>
                </div>

                {/* Additional India Line */}
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Alternate Helpline:</span>
                    <span className="font-extrabold text-slate-900 text-base font-mono">+91 9654874675</span>
                  </div>
                  <a
                    href="tel:+919654874675"
                    className="bg-sky-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-2xs hover:bg-sky-700"
                  >
                    {t.callNow}
                  </a>
                </div>

                {/* Nepal Line */}
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-200">
                  <div>
                    <span className="text-xs text-red-800 font-bold block">{t.nepalHelpline}</span>
                    <span className="font-extrabold text-slate-900 text-base font-mono">+977 9819053588</span>
                  </div>
                  <a
                    href="tel:+9779819053588"
                    className="bg-red-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-2xs hover:bg-red-700"
                  >
                    {t.callNow}
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Box */}
            <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200 flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#0F4C81] flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900 text-sm block">{t.timingLabel}</span>
                <span className="text-xs text-slate-700 font-medium">{t.opdTimings}</span>
                <span className="text-xs font-extrabold text-red-600 block mt-0.5">{t.emergencyService}</span>
              </div>
            </div>

            {/* Fees & Charges Box */}
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 p-5 rounded-2xl border border-sky-200 space-y-3">
              <h4 className="font-extrabold text-slate-900 text-sm font-poppins flex items-center justify-between">
                <span>{t.feeStructureTitle}</span>
                <span className="text-xs font-bold bg-[#0F4C81] text-white px-2.5 py-0.5 rounded-md">
                  {lang === 'hi' ? 'पारदर्शी शुल्क' : 'Transparent'}
                </span>
              </h4>

              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">{lang === 'hi' ? 'ओपीडी प्रथम परामर्श' : 'OPD First Consultation'}</span>
                    <span className="text-slate-500 text-[11px]">{t.feeOpdFirstVisitDesc}</span>
                  </div>
                  <span className="font-extrabold text-[#0F4C81] text-base">{t.feeOpdFirstVisit}</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">{lang === 'hi' ? 'ओपीडी आगे के सत्र' : 'OPD Follow-up Sessions'}</span>
                    <span className="text-slate-500 text-[11px]">{t.feeOpdFollowupDesc}</span>
                  </div>
                  <span className="font-extrabold text-slate-800 text-sm">{t.feeOpdFollowup}</span>
                </div>

                <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#0F4C81] block">{lang === 'hi' ? 'होम विजिट (घर पर इलाज)' : 'Home Visit Service'}</span>
                    <span className="text-slate-600 text-[11px]">{t.feeHomeVisitDesc}</span>
                  </div>
                  <span className="font-extrabold text-[#0F4C81] text-sm">{t.feeHomeVisit}</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100">
                <iframe
                  title="Prakash Physiotherapy Clinic Location Map"
                  src="https://maps.google.com/maps?q=26.516236,86.959298&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/9hx54wRLTqdXex5fA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xs transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>{lang === 'hi' ? 'गूगल प्रोफाइल व रास्ता देखें (Open Google Profile)' : 'Open Profile & Directions on Google Maps'}</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Appointment Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-slate-900 font-poppins">
                {t.formTitle}
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                {t.formSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 bg-[#0F4C81] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#0F4C81] font-poppins">
                  {lang === 'hi' ? 'अपॉइंटमेंट अनुरोध भेजा गया!' : 'Booking Request Sent!'}
                </h4>
                <p className="text-sm text-slate-700">
                  {lang === 'hi'
                    ? 'आपका विवरण व्हाट्सएप पर डॉक्टर तिवारी को भेज दिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
                    : 'Your details have been prefilled and directed to Dr. Tiwari via WhatsApp for instant confirmation.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl text-xs font-bold mt-2"
                >
                  {lang === 'hi' ? 'दूसरा फॉर्म भरें' : 'Fill Another Form'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Patient Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.fieldName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder={lang === 'hi' ? 'जैसे: रमेश कुमार' : 'e.g., Ramesh Kumar'}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
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
                      placeholder={lang === 'hi' ? 'जैसे: 9812345678' : 'e.g., 9812345678'}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                    />
                  </div>
                </div>

                {/* Village/Town & Condition */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.fieldLocation} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.villageLocation}
                      onChange={(e) => setFormData({ ...formData, villageLocation: e.target.value })}
                      placeholder={lang === 'hi' ? 'जैसे: भीमनगर / बीरपुर / राजविराज' : 'e.g., Bhimnagar / Birpur / Nepal'}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.fieldCondition} *
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                    >
                      <option value="">{lang === 'hi' ? '-- समस्या चुनें --' : '-- Select Problem --'}</option>
                      <option value="कमर दर्द (Back Pain)">कमर दर्द (Back Pain)</option>
                      <option value="साइटिका (Sciatica)">साइटिका (Sciatica)</option>
                      <option value="स्लिप डिस्क (Slip Disc)">स्लिप डिस्क (Slip Disc)</option>
                      <option value="लकवा / स्ट्रोक (Paralysis)">लकवा / स्ट्रोक (Paralysis)</option>
                      <option value="गर्दन दर्द (Neck Pain)">गर्दन दर्द (Neck Pain)</option>
                      <option value="फ्रोजन शोल्डर (Frozen Shoulder)">फ्रोजन शोल्डर (Frozen Shoulder)</option>
                      <option value="घुटने का दर्द (Knee Joint Pain)">घुटने का दर्द (Knee Joint Pain)</option>
                      <option value="ऑपरेशन के बाद रीहैब (Post Surgery)">ऑपरेशन के बाद रीहैब (Post Surgery)</option>
                      <option value="अन्य समस्या (Other)">अन्य समस्या (Other Problem)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.fieldDate} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t.fieldTimeSlot} *
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                    >
                      <option value="Morning (8:00 AM - 12:00 PM)">{t.slotMorning}</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">{t.slotAfternoon}</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">{t.slotEvening}</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.fieldNotes}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={lang === 'hi' ? 'दर्द कितने समय से है या अन्य विवरण...' : 'How long have you had this pain or details...'}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white font-bold rounded-xl text-base shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>{t.submitFormBtn}</span>
                  </button>

                  <a
                    href="tel:+919711700817"
                    className="w-full sm:w-auto px-6 py-4 bg-[#0F4C81] hover:bg-[#0c3e6a] text-white font-bold rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>{t.directCallBtn}</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
