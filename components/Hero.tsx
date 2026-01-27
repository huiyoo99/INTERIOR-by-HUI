import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/201/1920/1080?grayscale"
          alt="Interior Design Studio"
          className="w-full h-full object-cover object-center opacity-90 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="overflow-hidden mb-4">
          <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-stone-200 animate-slide-up-reveal">
            {t.hero.subtitle}
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight animate-slide-up-reveal delay-200" style={{ animationFillMode: 'both' }}>
          {t.hero.title1} <br /> <span className="italic">{t.hero.title2}</span>
        </h1>

        <div className="w-16 h-[2px] bg-white/60 mx-auto mb-10 animate-grow-width"></div>

        <p className="text-lg md:text-xl text-stone-100 font-light mb-10 max-w-2xl mx-auto animate-fade-in-long delay-300">
          {t.hero.description}
        </p>
        <a
          href="#portfolio"
          className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300 animate-fade-in-up delay-500 opacity-0 bg-white/10 backdrop-blur-sm"
          style={{ animationFillMode: 'forwards' }}
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-subtle">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </section>
  );
};

export default Hero;