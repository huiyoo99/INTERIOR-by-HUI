import React, { useState, useMemo, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxProjectCard: React.FC<{ project: Project; language: string; t: any; index: number }> = ({ project, language, t, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Intense parallax effect for the image inside its container
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  
  // Asymmetric alignment: push odd items down significantly
  const isEven = index % 2 === 0;
  const marginTop = isEven ? 'mt-0' : 'mt-12 md:mt-48';
  
  const isInternal = project.behanceUrl?.startsWith('project/');

  const content = (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full group cursor-pointer ${marginTop}`}
    >
      <div 
        ref={ref}
        className="relative overflow-hidden bg-stone-200 dark:bg-stone-800 aspect-[4/5] w-full"
      >
        <motion.img
          style={{ y, scale: 1.25 }}
          src={project.image}
          alt={language === 'zh' ? project.titleZh : project.titleEn}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.3] opacity-95 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-stone-100 tracking-wide block mb-3">
          {language === 'zh' ? project.titleZh : project.titleEn}
        </h3>
        <p className="text-stone-400 dark:text-stone-500 text-xs uppercase tracking-[0.2em] font-light mb-4">
          {project.category.map(cat => t.portfolio.categories[cat]).join(" / ")}
        </p>
        <p className="text-stone-500 dark:text-stone-400 font-light text-sm leading-relaxed max-w-sm">
          {language === 'zh' ? project.descriptionZh : project.descriptionEn}
        </p>
      </div>
    </motion.div>
  );

  if (isInternal) {
    return (
      <Link to={`/${project.behanceUrl}`} className="block w-full">
        {content}
      </Link>
    );
  }

  return (
    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
      {content}
    </a>
  );
};

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = useMemo(() => {
    if (activeCategory === ProjectCategory.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.category.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-[#F9F8F6] dark:bg-[#111] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        
        {/* High-End Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-40 gap-10">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-light text-stone-900 dark:text-stone-50 tracking-tight leading-[0.9] uppercase" 
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SELECTED<br/>WORKS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-stone-400 dark:text-stone-500 text-xs md:text-sm uppercase tracking-[0.25em] leading-relaxed max-w-xs md:text-right"
          >
            A CURATED COLLECTION OF RESIDENTIAL AND COMMERCIAL SPACES.
          </motion.div>
        </div>

        {/* Minimalist Filters */}
        <div className="flex flex-wrap gap-8 mb-24 border-b border-stone-200 dark:border-stone-800 pb-6 text-xs md:text-sm uppercase tracking-[0.15em] font-light">
          {Object.values(ProjectCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-500 pb-1 ${activeCategory === category
                ? 'text-stone-900 dark:text-stone-100 border-b border-stone-900 dark:border-stone-100'
                : 'text-stone-400 dark:text-stone-600 hover:text-stone-900 dark:hover:text-stone-300 border-b border-transparent'
                }`}
            >
              {t.portfolio.categories[category]}
            </button>
          ))}
        </div>

        {/* Masonry-like Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-24 gap-y-24 md:gap-y-0">
          {filteredProjects.map((project: Project, index: number) => (
            <ParallaxProjectCard key={project.id} project={project} language={language} t={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;