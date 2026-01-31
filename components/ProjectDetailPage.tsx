import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import Contact from './Contact';


import Project6 from './Project6';

const ProjectDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (id === '6') {
        return <Project6 />;
    }

    const { language, t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const project = PROJECTS.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="text-center">
                    <h1 className="text-2xl font-serif text-stone-900 mb-4">Project Not Found</h1>
                    <Link to="/" className="text-stone-600 hover:text-stone-900 underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    const title = language === 'zh' ? project.titleZh : project.titleEn;
    const description = language === 'zh' ? project.descriptionZh : project.descriptionEn;

    return (
        <div className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 overflow-x-hidden transition-colors duration-300" ref={containerRef}>
            <Navbar />

            {/* Immersive Hero Section */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover scale-110 animate-subtle-zoom"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <div className="overflow-hidden mb-6">
                        <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight animate-slide-up-reveal">
                            {title}
                        </h1>
                    </div>
                    <div className="w-16 h-[2px] bg-white/60 mx-auto mb-10 animate-grow-width"></div>
                    <p className="text-white/80 text-xs uppercase tracking-[0.5em] animate-fade-in-long">
                        {project.category.map(cat => t.portfolio.categories[cat]).join(" // ")}
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce-subtle">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 vertical-text">Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
                </div>
            </section>

            {/* Intro Narrative Section */}
            <section className="py-20 md:py-32 px-6 bg-white dark:bg-stone-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
                    <div className="lg:col-span-1 hidden lg:block">
                        <span className="text-stone-200 dark:text-stone-800 text-9xl font-serif select-none vertical-text rotate-180 transform -translate-x-12 opacity-50 transition-colors duration-300">
                            01
                        </span>
                    </div>
                    <div className="lg:col-span-7 reveal reveal-slide-up">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-12">Narrative</h2>
                        <p className="text-3xl md:text-5xl font-light text-stone-900 dark:text-stone-100 leading-[1.3] font-serif transition-colors duration-300">
                            {description}
                        </p>
                    </div>
                    <div className="lg:col-span-4 border-l border-stone-100 dark:border-stone-800 pl-12 reveal reveal-fade-in delay-300 transition-colors duration-300">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-4 font-bold">Concept</h3>
                                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed transition-colors duration-300">
                                    {language === 'zh'
                                        ? "通过重塑内部建筑结构，我们不仅创造了一个居住空间，更是在繁忙的城市中构建了一片静谧的领地。每一个转角都经过深思熟虑，旨在引发情感的共鸣。"
                                        : "By reimagining internal architectural structures, we don't just create a living space; we construct a sanctuary within the urban bustle. Every corner is meticulously crafted to evoke emotional resonance."}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2 font-bold">Year</h3>
                                    <p className="text-stone-900 dark:text-stone-100 text-xs font-medium uppercase tracking-wider transition-colors duration-300">2024 / Q3</p>
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2 font-bold">Style</h3>
                                    <p className="text-stone-900 dark:text-stone-100 text-xs font-medium uppercase tracking-wider transition-colors duration-300">European</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artistic Gallery - Asymmetric Layout */}
            <section className="pb-20 bg-white dark:bg-stone-950 transition-colors duration-300">
                <div className="max-w-screen-2xl mx-auto px-4 md:px-12 flex flex-col gap-20 md:gap-32">

                    {/* Gallery Item 1 - Wide Staggered */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center reveal reveal-parallax group">
                        <div className="md:col-span-8 overflow-hidden rounded-sm aspect-[16/9]">
                            <img src={project.gallery?.[1]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
                        </div>
                        <div className="md:col-span-4 reveal reveal-slide-left delay-400">
                            <h3 className="text-2xl font-serif mb-4 italic text-stone-400 dark:text-stone-500">
                                {language === 'zh'
                                    ? "氛围"
                                    : "Atmosphere"}
                            </h3>
                            <div className="w-12 h-[1px] bg-stone-200 dark:bg-stone-800 mb-6 transition-colors duration-300"></div>
                            <p className="text-stone-500 dark:text-stone-400 text-sm italic font-light transition-colors duration-300">
                                {language === 'zh'
                                    ? "自然光线与触感表面的微妙互动。"
                                    : "The subtle interplay of natural light and tactile surfaces."}
                            </p>
                        </div>
                    </div>

                    {/* Gallery Item 2 - Central Focus */}
                    <div className="max-w-5xl mx-auto reveal reveal-fade-in">
                        <div className="bg-white dark:bg-stone-900 p-4 md:p-12 shadow-2xl relative transition-colors duration-300">
                            <div className="absolute -top-12 -left-12 text-stone-100 dark:text-stone-800 text-[20vw] font-serif leading-none select-none z-0 transition-colors duration-300">02</div>
                            <img src={project.gallery?.[2]} className="w-full h-auto relative z-10" alt="" />
                        </div>
                    </div>

                    {/* Gallery Item 3 & 4 - Staggered Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                        <div className="reveal reveal-slide-up pt-24">
                            <img src={project.gallery?.[3]} className="w-full h-auto shadow-xl" alt="" />
                            <p className="mt-8 text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 text-right font-bold">
                                {language === 'zh'
                                    ? "空间流动性"
                                    : "Spatial Fluidity"}
                            </p>
                        </div>
                        <div className="reveal reveal-slide-up delay-300">
                            <img src={project.gallery?.[4]} className="w-full h-auto shadow-xl" alt="" />
                            <p className="mt-8 text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-bold">
                                {language === 'zh'
                                    ? "触感细节"
                                    : "Tactile Detail"}
                            </p>
                        </div>
                    </div>

                    {/* New Artistic Multi-Image Row (5 & 6) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                        <div className="md:col-span-5 reveal reveal-slide-up">
                            <img src={project.gallery?.[5]} className="w-full h-auto" alt="" />
                        </div>
                        <div className="md:col-span-7 reveal reveal-slide-up delay-400">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img src={project.gallery?.[6]} className="w-full h-full object-cover" alt="" />
                            </div>
                            <p className="mt-6 text-[10px] uppercase tracking-widest text-stone-300 dark:text-stone-600">
                                {language === 'zh'
                                    ? "构图平衡"
                                    : "Compositional Balance"}
                            </p>
                        </div>
                    </div>

                    {/* Gallery Item 7 - Final Impact */}
                    <div className="w-full h-[90vh] relative reveal reveal-fade-in group">
                        <img
                            src={project.gallery?.[0]}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            alt=""
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="border border-white/20 backdrop-blur-md bg-white/10 p-12 max-w-2xl text-center text-white reveal reveal-blur-in">
                                <h4 className="text-3xl font-serif mb-6">
                                    {language === 'zh'
                                        ? "结语"
                                        : "Ending Note"}
                                </h4>
                                <p className="text-sm font-light leading-relaxed text-white/80">
                                    {language === 'zh'
                                        ? "设计不仅仅是感觉。设计是关于如何运作，以及如何在空间的寂静中让你感到共鸣。"
                                        : "Design is not just what it looks like and feels like. Design is how it works and how it makes you feel within the silence of a space."}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* High-End Conclusion */}
            <section className="py-32 bg-stone-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-white/30 text-[10px] uppercase tracking-[1em] mb-12 block">
                        {language === 'zh'
                            ? "Next Chapter"
                            : "Next Chapter"}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-20 leading-tight">
                        {language === 'zh'
                            ? "提升您的生活体验。"
                            : "Elevate your living experience."}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <Link
                            to="/"
                            className="text-white group relative pb-2 overflow-hidden block"
                        >
                            <span className="uppercase tracking-[0.4em] text-xs font-bold inline-block transform group-hover:-translate-y-full transition-transform duration-500">
                                {language === 'zh'
                                    ? "返回首页"
                                    : "Back to Index"}
                            </span>
                            <span className="uppercase tracking-[0.4em] text-xs font-bold absolute bottom-2 left-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-stone-400">
                                {language === 'zh'
                                    ? "返回首页"
                                    : "Back to Index"}
                            </span>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </Link>

                        <a
                            href="#contact"
                            className="px-10 py-5 border border-white/20 text-white rounded-full hover:bg-white hover:text-stone-900 transition-all duration-500 uppercase tracking-widest text-[10px] font-bold"
                        >
                            {language === 'zh'
                                ? "开始合作"
                                : "Start Collaboration"}
                        </a>
                    </div>
                </div>
            </section>

            <Contact />


            <style dangerouslySetInnerHTML={{
                __html: `
        .vertical-text {
          writing-mode: vertical-rl;
        }
        
        /* Reveal Base Classes */
        .reveal {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .reveal-slide-up { transform: translateY(60px); }
        .reveal-slide-left { transform: translateX(60px); }
        .reveal-fade-in { transform: scale(0.95); }
        .reveal-blur-in { filter: blur(20px); }
        
        .reveal.reveal-active {
          opacity: 1;
          transform: translate(0) scale(1);
          filter: blur(0);
        }

        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        
        /* Keyframes */
        @keyframes sublte-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: sublte-zoom 20s infinite alternate ease-in-out;
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }

        @keyframes slide-up-reveal {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up-reveal {
          animation: slide-up-reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        @keyframes grow-width {
          from { width: 0; }
          to { width: 4rem; }
        }
        .animate-grow-width {
          animation: grow-width 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes fade-in-long {
          from { opacity: 0; }
          to { opacity: 0.8; }
        }
        .animate-fade-in-long {
          animation: fade-in-long 3s ease-out forwards;
        }

        ::selection {
          background-color: #1c1917;
          color: #fafaf9;
        }
      `}} />
        </div>
    );
};

export default ProjectDetailPage;
