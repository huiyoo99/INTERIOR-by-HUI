import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImage from '../assets/profile.jpeg';

const About: React.FC = () => {
  const { t } = useLanguage();
  // Helper for type safety accessing nested stats object
  const stats = t.about.stats as { [key: string]: string };

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('#about .reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-stone-100 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 relative reveal reveal-fade-in">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-stone-300 z-0"></div>
            <img
              src={profileImage}
              alt="Designer Portrait"
              className="w-full h-auto relative z-10 shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="reveal reveal-slide-up delay-100">
              <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">{t.about.title as string}</h2>
              <h3 className="text-4xl font-serif text-stone-900 mb-8">{t.about.name as string}</h3>
            </div>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light reveal reveal-slide-up delay-200">
              <p>{t.about.p1 as string}</p>
              <p>{t.about.p2 as string}</p>
            </div>

            <div className="mt-10 flex gap-8 reveal reveal-slide-up delay-300">
              <div>
                <span className="block text-3xl font-serif text-stone-900">3+</span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">{stats.experience}</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-stone-900">40+</span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">{stats.delivered}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;