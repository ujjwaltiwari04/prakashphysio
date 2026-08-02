import React from 'react';
import { Language, BlogPost } from '../types';
import { translations } from '../data/translations';
import { X, ArrowLeft, Calendar, Clock, User, Phone, Calendar as CalendarIcon } from 'lucide-react';

interface BlogDetailModalProps {
  post: BlogPost | null;
  lang: Language;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  lang,
  onClose,
  onBookAppointment
}) => {
  if (!post) return null;

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full my-auto shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#0F4C81] text-white p-4 sm:p-5 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'hi' ? 'ब्लॉग सूची' : 'Back to Blog'}</span>
          </button>

          <span className="font-bold text-xs bg-sky-600 px-2.5 py-1 rounded-md">
            {lang === 'hi' ? post.categoryHi : post.categoryEn}
          </span>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Article Title & Metadata */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins leading-tight">
              {lang === 'hi' ? post.titleHi : post.titleEn}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-200">
              <span className="flex items-center gap-1 font-semibold text-[#0F4C81]">
                <User className="w-4 h-4" />
                {t.authorTag}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden h-56 sm:h-72 bg-slate-100">
            <img
              src={post.image}
              alt={lang === 'hi' ? post.titleHi : post.titleEn}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
            {lang === 'hi' ? post.contentHi : post.contentEn}
          </div>

          {/* Keywords / SEO Tags */}
          <div className="pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              {lang === 'hi' ? 'संबंधित टैग्स:' : 'Related Keywords:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw, idx) => (
                <span key={idx} className="bg-sky-50 text-[#0F4C81] text-xs font-semibold px-2.5 py-1 rounded-md border border-sky-200">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation CTA Card */}
          <div className="bg-gradient-to-br from-sky-50 to-emerald-50 p-6 rounded-2xl border border-sky-200 text-center space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-poppins">
              {lang === 'hi' ? 'क्या आप भी इस समस्या से परेशान हैं?' : 'Are you suffering from this condition?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto">
              {lang === 'hi'
                ? 'डॉ. अभय प्रकाश तिवारी (M.P.T Ortho New Delhi) से भीमनगर क्लिनिक पर सीधा परामर्श लें।'
                : 'Get expert physical therapy evaluation at Prakash Physiotherapy Clinic, Bhimnagar.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookAppointment();
                }}
                className="w-full sm:w-auto bg-[#0F4C81] hover:bg-[#0c3e6a] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <CalendarIcon className="w-4 h-4 text-amber-300" />
                <span>{t.bookAppointment}</span>
              </button>

              <a
                href="tel:+919711700817"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>📞 +91 9711700817</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
