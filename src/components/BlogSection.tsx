import React, { useState } from 'react';
import { Language, BlogPost } from '../types';
import { blogPostsData } from '../data/clinicData';
import { translations } from '../data/translations';
import { BookOpen, Calendar, Clock, ChevronRight, User } from 'lucide-react';

interface BlogSectionProps {
  lang: Language;
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ lang, onSelectArticle }) => {
  const t = translations[lang];

  return (
    <section id="blog" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'स्वास्थ्य जागरूकता' : 'Medical Blog'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.blogTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.blogSubtitle}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={lang === 'hi' ? post.titleHi : post.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F4C81] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {lang === 'hi' ? post.categoryHi : post.categoryEn}
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base sm:text-lg font-poppins line-clamp-2 group-hover:text-[#0F4C81] transition-colors">
                    {lang === 'hi' ? post.titleHi : post.titleEn}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {lang === 'hi' ? post.summaryHi : post.summaryEn}
                  </p>
                </div>
              </div>

              {/* Read Action Footer */}
              <div className="p-5 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectArticle(post)}
                  className="w-full py-2.5 bg-sky-50 hover:bg-[#0F4C81] text-[#0F4C81] hover:text-white rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.readArticleBtn}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
