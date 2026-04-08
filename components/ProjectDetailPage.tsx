import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import Project6 from './Project6';
import Project5 from './Project5';

// 耀眼的霓虹荧光黄
const NEON_YELLOW = '#E5FF00';

// 尖锐的几何星芒
const SharpStar = ({ className = "", outlined = false }) => (
  <svg viewBox="0 0 100 100" className={className} fill={outlined ? "none" : "currentColor"} stroke={outlined ? "currentColor" : "none"} strokeWidth={outlined ? "2" : "0"}>
    <polygon points="50,0 58,35 93,15 65,46 100,50 65,54 93,85 58,65 50,100 42,65 7,85 35,54 0,50 35,46 7,15 42,35" />
  </svg>
);

// 相机取景器十字准星
const Crosshair = ({ className = "" }) => (
  <div className={`absolute w-4 h-4 flex items-center justify-center opacity-50 ${className}`}>
    <div className="absolute w-full h-[1px] bg-current"></div>
    <div className="absolute h-full w-[1px] bg-current"></div>
  </div>
);

// 幻灯片布局包裹组件
const Slide = ({ pageNum, title = "ARCHIVE // 2026", children, className = "", dark = true, onHomeClick }: any) => (
  <section className={`snap-start h-[100dvh] w-full flex flex-col relative overflow-hidden shrink-0 ${dark ? 'bg-[#0a0a0a] text-white' : 'bg-[#E5FF00] text-black'} ${className}`}>
    
    {/* 四角十字准星 */}
    <Crosshair className="top-8 left-8" />
    <Crosshair className="top-8 right-8" />
    <Crosshair className="bottom-8 left-8" />
    <Crosshair className="bottom-8 right-8" />

    {/* 统一的顶部标识与导航栏 */}
    <div className="flex justify-between items-start w-full p-6 md:p-12 font-mono uppercase text-[10px] md:text-xs tracking-[0.3em] z-30 mix-blend-difference text-white">
      <div className="flex gap-4 items-center">
        <span className="w-2 h-2 rounded-full bg-[#E5FF00] animate-pulse"></span>
        {title}
      </div>
      <div className="flex gap-6 md:gap-16">
        <span onClick={onHomeClick} className="hover:text-[#E5FF00] cursor-pointer transition-colors">INDEX</span>
      </div>
    </div>

    {/* 主体内容 */}
    <div className="flex-1 w-full h-full relative z-10 flex flex-col justify-center">
      {children}
    </div>

    {/* 统一的底部页码 */}
    <div className="absolute bottom-8 left-12 md:bottom-12 md:left-16 font-mono text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase z-30 flex items-center gap-4">
      <span className="text-zinc-500">NO.</span>
      <span className={dark ? 'text-[#E5FF00]' : 'text-black'}>00{pageNum}</span>
    </div>
    
    {/* 底部箭头 */}
    <div className="absolute bottom-6 right-10 md:bottom-12 md:right-16 text-xl md:text-3xl font-light z-30 mix-blend-difference text-white animate-bounce pointer-events-none">
      ↓
    </div>
  </section>
);

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (id === '6') {
      return <Project6 />;
  }
  if (id === '5') {
      return <Project5 />;
  }

  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const project = PROJECTS.find(p => p.id === Number(id));

  // 强制接管外层容器的滚动，使其能够贴合 snap-scrolling
  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = 'auto'; // 离开页面时恢复
      };
  }, []);

  if (!project) return null;

  const handleHomeClick = () => {
      navigate('/');
  };

  const title = language === 'zh' ? project.titleZh : project.titleEn;
  const description = language === 'zh' ? project.descriptionZh : project.descriptionEn;
  const cats = project.category.map(cat => t.portfolio.categories[cat]).join(" /// ");

  // 为了制作激进排版，将标题一分为二
  const titleHalfLength = Math.ceil(title.length / 2);
  const title1 = title.slice(0, titleHalfLength);
  const title2 = title.slice(titleHalfLength);

  return (
    <div className="h-[100dvh] w-full bg-[#0a0a0a] text-white font-sans selection:bg-[#E5FF00] selection:text-black overflow-y-scroll snap-y snap-mandatory custom-scrollbar relative" ref={containerRef}>
      
      {/* 全局胶片噪点遮罩 */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      {/* PAGE 1: 巨型封面 */}
      <Slide pageNum="1" title={`PRJ_${project.id} // 2026`} onHomeClick={handleHomeClick}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <SharpStar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] text-[#E5FF00] opacity-10 animate-[spin_40s_linear_infinite]" outlined={true} />
          
          <h1 className="text-[18vw] md:text-[14vw] font-black tracking-tighter uppercase leading-[0.8] z-10 flex flex-col items-center whitespace-nowrap">
            <span className="text-transparent relative w-full text-left ml-[5vw]" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
              {title1 || 'PRO'}
            </span>
            <span className="text-[#E5FF00] relative w-full text-right mr-[5vw]">
              {title2 || 'JECT'}
            </span>
          </h1>
          <p className="mt-12 font-mono text-xs md:text-sm tracking-[0.5em] text-zinc-400 uppercase mix-blend-difference">
             Interior Design // Brutalism
          </p>
        </div>

        {/* 底部跑马灯 */}
        <div className="absolute bottom-24 w-full overflow-hidden border-y border-zinc-800 py-2 bg-[#E5FF00]/10 flex z-20">
           <div className="animate-marquee whitespace-nowrap font-mono text-xs tracking-widest text-[#E5FF00]">
             [ DESIGN FOCUS ] /// [ {cats} ] /// [ EXCLUSIVE ARCHIVE ] /// [ DESIGN FOCUS ] /// [ {cats} ] /// [ EXCLUSIVE ARCHIVE ] /// [ DESIGN FOCUS ] /// [ {cats} ] /// 
           </div>
        </div>
      </Slide>

      {/* PAGE 2: 项目介绍 (画廊风格) */}
      <Slide pageNum="2" onHomeClick={handleHomeClick}>
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 px-6 md:px-20 items-center">
          <div className="md:col-span-5 relative h-[45vh] md:h-[70vh] group overflow-hidden">
            <div className="absolute inset-0 bg-[#E5FF00] mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
            <img 
              src={project.image} 
              alt={title} 
              className="w-full h-full object-cover contrast-150 group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] bg-black text-white px-2 py-1 z-20">FIG 01.</div>
          </div>
          
          <div className="md:col-span-1"></div>

          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-0 relative">
            <div className="absolute -left-10 top-0 h-full w-[1px] bg-zinc-800 hidden md:block"></div>
            <p className="font-mono text-xs tracking-[0.4em] text-[#E5FF00] mb-4">IDENTIFICATION</p>
            <h2 className="text-5xl md:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] mb-8 break-words text-wrap">
              {language === 'zh' ? '项目' : 'About'}<br/>
              {language === 'zh' ? '背景' : 'Project'}
            </h2>
            <div className="w-16 h-[2px] bg-white mb-8"></div>
            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-widest">
                {language === 'zh' ? '设计理念' : 'Core Concept'}
            </h3>
            <p className="text-zinc-400 font-mono text-[10px] md:text-xs tracking-widest uppercase mb-8 border border-zinc-800 inline-block px-3 py-1">2024 / Q3 // High-End Design</p>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-medium max-w-lg tracking-wide">
              {description}
            </p>
          </div>
        </div>
      </Slide>

      {/* PAGE 3: 核心数据/理念 (巨型数字版式) */}
      <Slide pageNum="3" onHomeClick={handleHomeClick}>
        <div className="absolute inset-0 flex flex-col md:flex-row px-6 md:px-20 pt-24 pb-20 items-center justify-center gap-12 md:gap-24">
          <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
             <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85]">
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #E5FF00' }}>{language === 'zh' ? '空间' : 'SPACE'}</span><br/>
                {language === 'zh' ? '定义' : 'DEF'}
             </h2>
             <SharpStar className="w-24 h-24 text-[#E5FF00] absolute -right-4 bottom-0 animate-[spin_10s_linear_infinite]" />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 border-l border-zinc-800 pl-8 md:pl-16 relative order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -left-[33px] md:-left-[65px] top-2 w-2 h-2 bg-[#E5FF00] rounded-full opacity-100"></div>
              <div className="font-mono text-xs tracking-[0.3em] text-[#E5FF00] mb-2 uppercase border-b border-zinc-800 inline-block pb-1">
                 {language === 'zh' ? '概念核心' : 'Concept Focus'}
              </div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide text-justify mt-4">
                 {language === 'zh'
                     ? "通过重塑内部建筑结构，我们不仅创造了一个居住空间，更是在繁忙的城市中构建了一片静谧的领地。每一个转角都经过深思熟虑，旨在引发情感的共鸣。"
                     : "By reimagining internal architectural structures, we don't just create a living space; we construct a sanctuary within the urban bustle."}
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -left-[33px] md:-left-[65px] top-2 w-2 h-2 bg-[#E5FF00] rounded-full opacity-100"></div>
              <div className="font-mono text-xs tracking-[0.3em] text-[#E5FF00] mb-2 uppercase border-b border-zinc-800 inline-block pb-1">
                 {language === 'zh' ? '风格与细节' : 'Style & Vibe'}
              </div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide text-justify mt-4">
                 {language === 'zh' 
                     ? '整体采用了极简粗野主义风格，剥离多余修饰，强调几何线条与光影的切割，产生戏剧性的视觉冲突。' 
                     : 'Adopting a brutalist minimalist style, stripping away excess ornament to emphasize raw geometric lines and dramatic lighting.'}
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* PAGE 4: Gallery Grids */}
      {project.gallery && project.gallery.length > 2 && (
      <Slide pageNum="4" onHomeClick={handleHomeClick}>
        <div className="absolute inset-0 pt-24 pb-20 px-6 md:px-20">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4">
            
            <div className="col-span-2 row-span-2 bg-zinc-900 overflow-hidden relative group">
              <img src={project.gallery[1]} className="w-full h-full object-cover contrast-125 transition-all duration-700" alt="img" />
              <div className="absolute top-4 left-4 font-mono text-[10px] bg-white text-black px-2 uppercase mix-blend-screen">01 / Vibe</div>
            </div>
            
            <div className="col-span-1 row-span-1 bg-zinc-900 overflow-hidden relative group border border-zinc-800 hidden md:block">
               <img src={project.gallery[2]} className="w-full h-full object-cover contrast-150 transition-all duration-700" alt="img" />
            </div>

            <div className="col-span-1 row-span-2 bg-[#E5FF00] overflow-hidden relative flex flex-col items-center justify-center text-black p-6 text-center">
               <SharpStar className="w-16 h-16 mb-6" />
               <h3 className="font-black uppercase tracking-tighter text-2xl mb-2">Vis<br/>Archive</h3>
               <p className="font-mono text-[10px] tracking-widest uppercase">Details 2026</p>
            </div>

            {project.gallery.length > 3 && (
            <div className="col-span-1 row-span-1 bg-zinc-900 overflow-hidden relative group border border-zinc-800 hidden md:block">
               <img src={project.gallery[3]} className="w-full h-full object-cover contrast-150 transition-all duration-700" alt="img" />
            </div>
            )}
            
          </div>
        </div>
      </Slide>
      )}

      {/* PAGE 5: 底部 Next Chapter */}
      <Slide pageNum={project.gallery && project.gallery.length > 2 ? "5" : "4"} onHomeClick={handleHomeClick}>
        <div className="absolute inset-0 flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-[#0a0a0a]">
          
          <div className="flex-1 flex flex-col justify-center">
            <h2 onClick={handleHomeClick} className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 mix-blend-difference cursor-pointer transition-transform hover:translate-x-4">
              BACK TO<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #E5FF00' }}>INDEX</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-y border-zinc-800 py-8">
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">PROJECT</span>
                 <span className="group-hover:text-[#E5FF00] transition-colors text-white text-sm">
                    {language === 'zh' ? "室内设计" : "Interior Design"}
                 </span>
              </div>
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">ACTION</span>
                 <span className="group-hover:text-[#E5FF00] transition-colors cursor-pointer text-white text-sm" onClick={handleHomeClick}>
                    {language === 'zh' ? "探索更多" : "Explore More"}
                 </span>
              </div>
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">CONTACT</span>
                 <span className="group-hover:text-[#E5FF00] transition-colors cursor-pointer text-white text-sm">
                    HELLO@HUI.COM
                 </span>
              </div>
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">STUDIO</span>
                 <span className="group-hover:text-[#E5FF00] transition-colors text-white text-sm">DESIGN LAB, ASIA</span>
              </div>
            </div>
          </div>

          <div className="w-full text-center overflow-hidden h-24 relative">
             <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-none text-zinc-900 absolute -bottom-4 w-full text-center left-0 right-0 pointer-events-none">
               THANK YOU
             </h1>
          </div>
        </div>
      </Slide>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          display: none;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default ProjectDetailPage;
