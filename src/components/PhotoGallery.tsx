import React, { useState, useEffect } from 'react';
import { Language, GalleryImage } from '../types';
import { galleryData } from '../data/clinicData';
import { translations } from '../data/translations';
import { Camera, X, Maximize2, ChevronLeft, ChevronRight, Play, Pause, Layers } from 'lucide-react';

interface PhotoGalleryProps {
  lang: Language;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentCarouselIdx, setCurrentCarouselIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const t = translations[lang];

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'clinic', label: t.filterClinic },
    { id: 'equipment', label: t.filterEquipment },
    { id: 'doctor', label: t.filterDoctor },
    { id: 'exercise', label: t.filterExercises }
  ];

  const filteredImages = galleryData.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  // Auto-play for the main gallery carousel (2 seconds gap)
  useEffect(() => {
    if (!isPlaying || galleryData.length === 0) return;
    const timer = setInterval(() => {
      setCurrentCarouselIdx((prev) => (prev + 1) % galleryData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPlaying, galleryData.length]);

  const handleNextSlide = () => {
    setCurrentCarouselIdx((prev) => (prev + 1) % galleryData.length);
  };

  const handlePrevSlide = () => {
    setCurrentCarouselIdx((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const handleLightboxNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handleLightboxPrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#0F4C81] bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'वास्तविक तस्वीरें' : 'Real Clinic Gallery'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-poppins">
            {t.galleryTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* FEATURED MAIN CAROUSEL */}
        <div className="bg-slate-950 rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between px-2 text-white text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2 text-sky-300">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>{lang === 'hi' ? 'क्लिनिक गैलरी कैरोसेल' : 'Interactive Clinic Showcase'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-sky-900/60 text-sky-200 px-2.5 py-0.5 rounded-full text-xs font-mono">
                {currentCarouselIdx + 1} / {galleryData.length}
              </span>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors"
                title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Main Slide Stage */}
          <div 
            className="relative bg-black rounded-2xl overflow-hidden aspect-16/10 sm:aspect-21/9 group shadow-inner"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {galleryData.map((img, idx) => (
              <div
                key={img.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === currentCarouselIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                
                {/* Slide Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white space-y-1 bg-gradient-to-t from-slate-950/90 to-transparent">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800/60 inline-block mb-1">
                    {lang === 'hi' ? `फोटो ${idx + 1}` : `Photo ${idx + 1}`}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold font-poppins text-white">
                    {lang === 'hi' ? img.titleHi : img.titleEn}
                  </h3>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white transition-all shadow-lg active:scale-90 border border-slate-700"
              aria-label="Previous Carousel Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white transition-all shadow-lg active:scale-90 border border-slate-700"
              aria-label="Next Carousel Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Filmstrip Thumbnails */}
          <div className="grid grid-cols-5 gap-2 pt-1">
            {galleryData.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setCurrentCarouselIdx(idx)}
                className={`relative rounded-xl overflow-hidden aspect-4/3 border-2 transition-all ${
                  idx === currentCarouselIdx
                    ? 'border-sky-400 ring-2 ring-sky-400/40 opacity-100 scale-102'
                    : 'border-slate-800 opacity-50 hover:opacity-90'
                }`}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 text-white font-mono px-1 rounded">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-xl font-extrabold text-slate-900 font-poppins">
              {lang === 'hi' ? 'श्रेणी अनुसार तस्वीरें' : 'Filter Photos by Category'}
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#0F4C81] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs cursor-pointer aspect-4/3"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <p className="text-xs sm:text-sm font-bold font-poppins drop-shadow-xs">
                    {lang === 'hi' ? img.titleHi : img.titleEn}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-sky-200">
                    <span>{lang === 'hi' ? 'बड़ा करके देखें' : 'Click to enlarge'}</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal with Carousel Navigation */}
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              {/* Top Controls */}
              <div className="flex items-center justify-between p-4 bg-slate-900/90 text-white border-b border-slate-800">
                <span className="text-xs font-mono text-sky-300">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  aria-label="Close image lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Main Stage */}
              <div className="relative p-2 sm:p-6 flex items-center justify-center min-h-[50vh]">
                <img
                  src={filteredImages[selectedImageIndex].url}
                  alt={filteredImages[selectedImageIndex].alt}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-xl shadow-lg"
                />

                {/* Lightbox Prev / Next Buttons */}
                <button
                  type="button"
                  onClick={handleLightboxPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all shadow-xl"
                  aria-label="Previous Lightbox Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleLightboxNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white transition-all shadow-xl"
                  aria-label="Next Lightbox Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
                <p className="text-white font-bold text-sm sm:text-base font-poppins">
                  {lang === 'hi'
                    ? filteredImages[selectedImageIndex].titleHi
                    : filteredImages[selectedImageIndex].titleEn}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
