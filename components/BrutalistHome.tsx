import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileImage from '../assets/profile.jpeg';
import Portfolio from './Portfolio';

const NEON_YELLOW = '#E5FF00';

const SharpStar = ({ className = "", outlined = false }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill={outlined ? "none" : "currentColor"} stroke={outlined ? "currentColor" : "none"} strokeWidth={outlined ? "2" : "0"}>
    <polygon points="50,0 58,35 93,15 65,46 100,50 65,54 93,85 58,65 50,100 42,65 7,85 35,54 0,50 35,46 7,15 42,35" />
  </svg>
);

const Crosshair = ({ className = "" }: any) => (
  <div className={`absolute w-4 h-4 flex items-center justify-center opacity-50 ${className}`}>
    <div className="absolute w-full h-[1px] bg-current"></div>
    <div className="absolute h-full w-[1px] bg-current"></div>
  </div>
);

const Slide = ({ pageNum, title = "ARCHIVE // 2026", children, className = "", dark = true }: any) => (
  <section className={`h-[100dvh] w-full flex flex-col relative overflow-hidden ${dark ? 'bg-[#0a0a0a] text-white' : 'bg-[#E5FF00] text-black'} ${className}`}>
    <Crosshair className="top-8 left-8" />
    <Crosshair className="top-8 right-8" />
    <Crosshair className="bottom-8 left-8" />
    <Crosshair className="bottom-8 right-8" />

    <div className="absolute top-0 left-0 flex justify-between items-start w-full p-8 md:p-12 font-mono uppercase text-[10px] md:text-xs tracking-[0.3em] z-30 mix-blend-difference text-white pointer-events-none">
      <div className="flex gap-4 items-center pl-2">
        <span className="w-2 h-2 rounded-full bg-[#E5FF00] animate-pulse"></span>
        {title}
      </div>
      <div className="flex gap-8 md:gap-16 pointer-events-auto pr-2">
        <a href="#about" className="hover:text-[#E5FF00] cursor-pointer transition-colors">ABOUT</a>
        <a href="#portfolio" className="hover:text-[#E5FF00] cursor-pointer transition-colors">WORKS</a>
      </div>
    </div>

    <div className="flex-1 w-full h-full relative z-10 flex flex-col justify-center">
      {children}
    </div>

    <div className="absolute bottom-8 left-12 md:bottom-12 md:left-16 font-mono text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase z-30 flex items-center gap-4 pointer-events-none">
      <span className="text-zinc-500">NO.</span>
      <span className={dark ? 'text-[#E5FF00]' : 'text-black'}>00{pageNum}</span>
    </div>

    <div className="absolute bottom-8 right-12 md:bottom-12 md:right-16 text-xl md:text-3xl font-light z-30 mix-blend-difference text-white animate-bounce pointer-events-none">
      ↓
    </div>
  </section>
);

export default function BrutalistHome() {
  const { t, language } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images from assets/main
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const imageCount = 80;
      const promises = [];

      for (let i = 0; i < imageCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          const num = i.toString().padStart(3, '0');
          img.src = new URL(`../assets/main/kling_20260128_VIDEO_Image1Stat_2_0_${num}.jpg`, import.meta.url).href;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Animation Loop for Canvas Background
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentIndex = 0;
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const render = (time: number) => {
      if (time - lastTime > interval) {
        lastTime = time;
        const img = images[currentIndex];
        if (img) {
          const canvasAspect = canvas.width / canvas.height;
          const imgAspect = img.width / img.height;
          let drawWidth, drawHeight, offsetX, offsetY;

          if (canvasAspect > imgAspect) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgAspect;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
        currentIndex = (currentIndex + 1) % images.length;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 150); // 防抖处理，避免 resize 时卡顿
    };
    window.addEventListener('resize', handleResize);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, images]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const img = entry.target.querySelector('img');
        if (img) {
          if (entry.isIntersecting) {
            // No-op for grayscale
          } else {
            // No-op for grayscale
          }
        }
      });
    }, { threshold: 0.5 });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#0a0a0a] text-white font-sans selection:bg-[#E5FF00] selection:text-black relative">
      {/* 噪音背景设定为 fixed，穿透全屏 */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* PAGE 1: HERO */}
      <Slide pageNum="1" title={`${t.about.name as string} // 2026`}>
        {/* Dynamic Background Canvas */}
        <div className="absolute inset-0 z-0 opacity-40 contrast-125 pointer-events-none overflow-hidden" style={{ transform: 'translateY(calc(var(--scroll-y, 0px) * 0.3))' }}>
          <canvas ref={canvasRef} className="w-full h-full block" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <SharpStar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] text-[#E5FF00] opacity-10 animate-[spin_40s_linear_infinite]" outlined={true} />

          <h1 className={`font-black tracking-tighter uppercase leading-[0.8] z-10 w-full px-4 text-center ${language === 'zh' ? 'text-[18vw] md:text-[14vw]' : 'text-[16vw] md:text-[11vw] lg:text-[10vw]'}`}>
            <span className="text-transparent relative w-full block whitespace-normal break-words text-left" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
              {t.hero.title1 as string}
            </span>
            <span className="text-[#E5FF00] relative w-full block whitespace-normal break-words text-right mt-2">
              {t.hero.title2 as string}
            </span>
          </h1>
          <p className="mt-12 font-mono text-xs md:text-sm tracking-[0.5em] text-zinc-400 uppercase mix-blend-difference max-w-xl text-center px-4 leading-relaxed">
            {t.hero.subtitle as string}
          </p>
        </div>

        <div className="absolute bottom-24 w-full overflow-hidden border-y border-zinc-800 py-2 bg-[#E5FF00]/10 flex z-20">
          <div className="animate-marquee whitespace-nowrap font-mono text-xs tracking-widest text-[#E5FF00]">
            [ {t.hero.subtitle as string} ] /// [ {t.about.name as string} ] /// [ 2026 EXCLUSIVE ARCHIVE ] /// [ {t.hero.subtitle as string} ] /// [ {t.about.name as string} ] /// [ 2026 EXCLUSIVE ARCHIVE ] ///
          </div>
        </div>
      </Slide>

      {/* PAGE 2: ABOUT ME */}
      <Slide pageNum="2">
        <div id="about" className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 px-6 md:px-20 items-center">
          <div ref={imageRef} className="md:col-span-5 relative h-[45vh] md:h-[70vh] group overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover contrast-150 group-hover:scale-105 transition-all duration-[2000ms] ease-out object-top"
            />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] bg-black text-white px-2 py-1 z-20 uppercase">
              {t.about.name as string}
            </div>
          </div>

          <div className="md:col-span-1"></div>

          <div className="md:col-span-6 flex flex-col justify-center py-10 md:py-0 relative">
            <div className="absolute -left-10 top-0 h-full w-[1px] bg-zinc-800 hidden md:block"></div>
            <p className="font-mono text-xs tracking-[0.4em] text-[#E5FF00] mb-4 uppercase">{t.about.title as string}</p>
            <h2 className="text-5xl md:text-[6vw] font-black uppercase tracking-tighter leading-[0.85] mb-8 break-words text-wrap">
              {t.about.name as string}
            </h2>
            <div className="w-16 h-[2px] bg-white mb-8"></div>

            <div className="flex gap-4 mb-8">
              <p className="text-zinc-400 font-mono text-[10px] md:text-xs tracking-widest uppercase border border-zinc-800 inline-block px-3 py-1">3+ YEARS EXP.</p>
              <p className="text-zinc-400 font-mono text-[10px] md:text-xs tracking-widest uppercase border border-zinc-800 inline-block px-3 py-1">40+ PROJECTS</p>
            </div>

            <div className="text-zinc-400 leading-relaxed text-sm md:text-base font-medium max-w-xl tracking-wide space-y-4">
              <p>{t.about.p1 as string}</p>
              <p>{t.about.p2 as string}</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* 嵌入原版作品集组件 */}
      <Portfolio />

      {/* PAGE 3: Contact & Thank You */}
      <Slide pageNum="3">
        <div id="contact-footer" className="absolute inset-0 flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 mix-blend-difference cursor-pointer" onClick={() => window.location.href = 'mailto:hello@hui.com'}>
              LET'S WORK<br />
              <span className="text-transparent hover:text-[#E5FF00] transition-colors" style={{ WebkitTextStroke: '2px #E5FF00' }}>TOGETHER</span>
            </h2>

            <div className="flex gap-8 md:gap-16 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border-y border-zinc-800 py-6 md:py-8 flex-wrap">
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">WHATSAPP (MY)</span>
                 <a href="https://wa.me/60128856791" target="_blank" rel="noopener noreferrer" className="group-hover:text-[#E5FF00] transition-colors cursor-pointer text-white text-[14px] md:text-sm lg:text-lg lg:mt-1 truncate font-bold">
                   +60 12-885 6791
                 </a>
              </div>
              <div className="flex flex-col gap-2 group">
                 <span className="text-zinc-600">WHATSAPP (SG)</span>
                 <a href="https://wa.me/6583496303" target="_blank" rel="noopener noreferrer" className="group-hover:text-[#E5FF00] transition-colors cursor-pointer text-white text-[14px] md:text-sm lg:text-lg lg:mt-1 truncate font-bold">
                   +65 8349 6303
                 </a>
              </div>
            </div>
          </div>

          <div className="w-full text-center overflow-hidden h-24 relative pointer-events-none">
            <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-none text-zinc-900 absolute -bottom-4 w-full text-center left-0 right-0">
              THANK YOU
            </h1>
          </div>
        </div>
      </Slide>

      <style dangerouslySetInnerHTML={{
        __html: `
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
}
