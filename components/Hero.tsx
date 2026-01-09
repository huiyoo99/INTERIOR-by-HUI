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
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 text-stone-200">
          {t.hero.subtitle}
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
          {t.hero.title1} <br /> <span className="italic">{t.hero.title2}</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-100 font-light mb-10 max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        <a
          href="#portfolio"
          className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;