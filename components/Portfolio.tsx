import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ProjectCategory.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.category.includes(activeCategory));
  }, [activeCategory]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    // Slight delay to allow DOM update
    setTimeout(() => {
      document.querySelectorAll('#portfolio .reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [filteredProjects, activeCategory]);

  return (
    <section id="portfolio" className="py-24 bg-stone-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">{t.portfolio.title}</h2>
          <div className="w-24 h-1 bg-stone-300 mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.values(ProjectCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm uppercase tracking-widest px-4 py-2 transition-colors ${activeCategory === category
                ? 'text-stone-900 border-b border-stone-900'
                : 'text-stone-400 hover:text-stone-600'
                }`}
            >
              {t.portfolio.categories[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => {
            const isInternal = project.behanceUrl?.startsWith('project/');
            const delayClass = `delay-${(index % 3 + 1) * 100}`; // Stagger effect based on column position

            if (isInternal) {
              return (
                <Link
                  key={project.id}
                  to={`/${project.behanceUrl}`}
                  className={`group relative cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white block reveal reveal-slide-up ${delayClass}`}
                >
                  <PortfolioItemContent project={project} language={language} t={t} />
                </Link>
              );
            }

            return (
              <a
                key={project.id}
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white block reveal reveal-slide-up ${delayClass}`}
              >
                <PortfolioItemContent project={project} language={language} t={t} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PortfolioItemContent: React.FC<{ project: Project; language: string; t: any }> = ({ project, language, t }) => (
  <>
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={language === 'zh' ? project.titleZh : project.titleEn}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-colors duration-300 flex items-center justify-center">
      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
        <h3 className="text-white text-xl font-serif mb-2">
          {language === 'zh' ? project.titleZh : project.titleEn}
        </h3>
        <p className="text-stone-200 text-sm font-light">
          {language === 'zh' ? project.descriptionZh : project.descriptionEn}
        </p>
      </div>
    </div>
    <div className="p-4 bg-white md:hidden">
      <h3 className="text-stone-900 text-lg font-serif">
        {language === 'zh' ? project.titleZh : project.titleEn}
      </h3>
      <p className="text-stone-500 text-xs mt-1">
        {project.category.map(cat => t.portfolio.categories[cat]).join(" | ")}
      </p>
    </div>
  </>
);

export default Portfolio;