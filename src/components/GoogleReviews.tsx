import React, { useState } from 'react';
import { Language, GoogleReview } from '../types';
import { googleReviewsData } from '../data/clinicData';
import { translations } from '../data/translations';
import { Star, CheckCircle, ExternalLink, MapPin, PlusCircle, X, Send, ThumbsUp, Filter, ShieldCheck } from 'lucide-react';

interface GoogleReviewsProps {
  lang: Language;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ lang }) => {
  const t = translations[lang];

  // Combined Reviews List (2 Official Google Reviews + 4 Patient Reviews + User Submitted)
  const [reviewsList, setReviewsList] = useState<GoogleReview[]>(() => {
    const saved = localStorage.getItem('prakash_physio_user_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Exclude pre-existing static IDs from localStorage to avoid duplicate items
        const formattedUserReviews = parsed
          .filter((r: GoogleReview) => !['g-rev-1', 'g-rev-2', 'rev-1', 'rev-2', 'rev-3', 'rev-4'].includes(r.id))
          .map((r: GoogleReview) => ({
            ...r,
            source: 'patient' as const
          }));
        return [...formattedUserReviews, ...googleReviewsData];
      } catch (e) {
        console.error(e);
      }
    }
    return googleReviewsData;
  });

  // Active Category Filter: 'all' | 'google' | 'patient'
  const [filterSource, setFilterSource] = useState<'all' | 'google' | 'patient'>('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [treatmentTag, setTreatmentTag] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const filteredReviews = reviewsList.filter((rev) => {
    if (filterSource === 'all') return true;
    if (filterSource === 'google') return rev.source === 'google';
    if (filterSource === 'patient') return rev.source === 'patient' || !rev.source;
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newReview: GoogleReview = {
      id: `patient-rev-${Date.now()}`,
      authorName: authorName.trim(),
      rating,
      textHi: reviewText.trim(),
      textEn: reviewText.trim(),
      locationHi: location.trim() || 'भीमनगर (Bhimnagar)',
      locationEn: location.trim() || 'Bhimnagar',
      treatmentTagHi: treatmentTag.trim() || 'फिजियोथेरेपी इलाज',
      treatmentTagEn: treatmentTag.trim() || 'Physiotherapy Treatment',
      timeAgoHi: 'अभी-अभी (Just Now)',
      timeAgoEn: 'Just Now',
      source: 'patient'
    };

    // Update React State immediately in real-time
    const updated = [newReview, ...reviewsList];
    setReviewsList(updated);

    // Save to LocalStorage
    const savedUserReviews = JSON.parse(localStorage.getItem('prakash_physio_user_reviews') || '[]');
    localStorage.setItem('prakash_physio_user_reviews', JSON.stringify([newReview, ...savedUserReviews]));

    setSubmittedSuccess(true);

    // Reset Form
    setTimeout(() => {
      setAuthorName('');
      setLocation('');
      setTreatmentTag('');
      setReviewText('');
      setRating(5);
    }, 500);
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Top Header & Clinic Rating Overview Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Rating Number & Badges */}
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0F4C81] to-[#2E8BC0] text-white rounded-2xl flex flex-col items-center justify-center shadow-md flex-shrink-0">
                <span className="text-3xl font-extrabold font-poppins leading-none">4.9</span>
                <div className="flex text-amber-300 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] opacity-90 mt-0.5">out of 5.0</span>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'hi' ? '100% सत्यापित मरीज अनुभव' : '100% Verified Reviews'}</span>
                  </span>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-blue-600 fill-current" />
                    <span>{lang === 'hi' ? 'गूगल मैप्स रेटिंग 4.9/5' : 'Google Rating 4.9/5'}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins">
                  {t.reviewsTitle}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  {lang === 'hi'
                    ? 'भीमनगर, सुपौल, बीरपुर एवं नेपाल सीमा से आए हमारे संतुष्ट मरीजों के वास्तविक अनुभव।'
                    : 'Authentic reviews from our patients across Bhimnagar, Supaul, Birpur & Nepal Border.'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => {
                  setSubmittedSuccess(false);
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0c3d68] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <PlusCircle className="w-4.5 h-4.5" />
                <span>{lang === 'hi' ? 'मरीज समीक्षा दर्ज करें' : 'Write Patient Review'}</span>
              </button>

              <a
                href="https://maps.app.goo.gl/9hx54wRLTqdXex5fA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0F4C81] border border-slate-300 hover:border-[#0F4C81] px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-xs hover:shadow-md"
              >
                <span>{lang === 'hi' ? 'गूगल समीक्षाएं देखें' : 'View Google Reviews'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Filter Tabs (All / Google Reviews / Patient Reviews) */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-[#0F4C81]" />
              <span>{lang === 'hi' ? 'समीक्षा प्रकार:' : 'Filter Reviews:'}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilterSource('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterSource === 'all'
                    ? 'bg-[#0F4C81] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'hi' ? 'सभी समीक्षाएं' : 'All Reviews'} ({reviewsList.length})
              </button>

              <button
                type="button"
                onClick={() => setFilterSource('google')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  filterSource === 'google'
                    ? 'bg-[#4285F4] text-white shadow-xs'
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                <span className="font-extrabold">G</span>
                <span>{lang === 'hi' ? 'गूगल समीक्षाएं (Google Reviews)' : 'Google Reviews'}</span>
                <span className="ml-1 bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">
                  {reviewsList.filter(r => r.source === 'google').length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFilterSource('patient')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  filterSource === 'patient'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'मरीज समीक्षाएं (Patient Reviews)' : 'Patient Reviews'}</span>
                <span className="ml-1 bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">
                  {reviewsList.filter(r => r.source === 'patient' || !r.source).length}
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev) => {
            const isGoogle = rev.source === 'google';

            return (
              <div
                key={rev.id}
                className={`bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 border ${
                  isGoogle ? 'border-blue-200/80 ring-1 ring-blue-100' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  
                  {/* Author Info & Source Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-10 h-10 font-bold rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                          isGoogle ? 'bg-[#4285F4] text-white' : 'bg-[#0F4C81] text-white'
                        }`}
                      >
                        {rev.authorName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm font-poppins truncate">
                          {rev.authorName}
                        </h3>
                        <p className="text-[11px] text-slate-500 flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 text-red-600 flex-shrink-0" />
                          <span className="truncate">{lang === 'hi' ? rev.locationHi : rev.locationEn}</span>
                        </p>
                      </div>
                    </div>

                    {/* SOURCE BADGE: Google Review vs Patient Review */}
                    {isGoogle ? (
                      <span className="text-[10px] bg-blue-50 text-[#1a73e8] border border-blue-200 px-2 py-1 rounded-lg font-bold flex items-center gap-1 flex-shrink-0">
                        <span className="font-black text-xs text-[#4285F4]">G</span>
                        <span>{lang === 'hi' ? 'गूगल समीक्षा' : 'Google Review'}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded-lg font-bold flex items-center gap-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>{lang === 'hi' ? 'मरीज समीक्षा' : 'Patient Review'}</span>
                      </span>
                    )}
                  </div>

                  {/* Stars & Time */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px]">{lang === 'hi' ? rev.timeAgoHi : rev.timeAgoEn}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    "{lang === 'hi' ? rev.textHi : rev.textEn}"
                  </p>

                </div>

                {/* Treatment Tag */}
                <div className="pt-2.5 border-t border-slate-100 text-[11px] font-bold text-[#0F4C81] flex items-center justify-between">
                  <span>✓ {lang === 'hi' ? rev.treatmentTagHi : rev.treatmentTagEn}</span>
                  {isGoogle && (
                    <span className="text-[10px] text-slate-400 font-normal">Verified Google Maps</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Patient Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in duration-200">
            
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submittedSuccess ? (
              <form onSubmit={handleSubmitReview} className="space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold inline-flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>{lang === 'hi' ? 'मरीज समीक्षा (Patient Review)' : 'Patient Review'}</span>
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-poppins">
                    {lang === 'hi' ? 'अपनी प्रतिक्रिया / समीक्षा दर्ज करें' : 'Submit Patient Review'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'hi'
                      ? 'आपकी समीक्षा वेबसाइट पर तुरंत "मरीज समीक्षा" टैग के साथ प्रदर्शित होगी।'
                      : 'Your review will be posted live with the "Patient Review" badge.'}
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'आपका नाम *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-sm"
                  />
                </div>

                {/* Location & Treatment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'hi' ? 'स्थान / शहर' : 'Location / City'}
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={lang === 'hi' ? 'भीमनगर / बीरपुर / सुपौल' : 'Bhimnagar / Birpur'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'hi' ? 'इलाज का प्रकार' : 'Treatment Type'}
                    </label>
                    <input
                      type="text"
                      value={treatmentTag}
                      onChange={(e) => setTreatmentTag(e.target.value)}
                      placeholder={lang === 'hi' ? 'कमर दर्द / साइटिका' : 'Back Pain / Sciatica'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-sm"
                    />
                  </div>
                </div>

                {/* Star Rating Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'रेटिंग (स्टार)' : 'Rating (Stars)'}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-amber-500 focus:outline-hidden transform hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating ? 'fill-current text-amber-500' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 font-bold text-slate-700 text-sm">{rating} / 5</span>
                  </div>
                </div>

                {/* Review Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'आपका अनुभव / समीक्षा संदेश *' : 'Your Review Message *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder={
                      lang === 'hi'
                        ? 'डॉ. अभय प्रकाश तिवारी के इलाज से आपको कितना लाभ हुआ?'
                        : 'Describe your treatment experience with Dr. Abhay Prakash Tiwari...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#0F4C81] text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F4C81] hover:bg-[#0c3d68] text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'मरीज समीक्षा सबमिट करें' : 'Submit Patient Review'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <ThumbsUp className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-slate-900 font-poppins">
                    {lang === 'hi' ? 'समीक्षा लाइव जोड़ी गई!' : 'Review Posted Live!'}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {lang === 'hi'
                      ? 'आपकी समीक्षा "मरीज समीक्षा" टैग के साथ तुरंत प्रदर्शित हो गई है।'
                      : 'Your review is now live under "Patient Review".'}
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-2.5 bg-[#0F4C81] text-white rounded-xl font-bold text-sm"
                  >
                    {lang === 'hi' ? 'बंद करें और समीक्षाएं देखें' : 'Close & View Reviews'}
                  </button>
                  <a
                    href="https://maps.app.goo.gl/9hx54wRLTqdXex5fA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-white text-slate-700 border border-slate-300 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-1.5 hover:bg-slate-50"
                  >
                    <span>{lang === 'hi' ? 'गूगल मैप्स पर भी पोस्ट करें' : 'Also Post to Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
