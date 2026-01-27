import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [images, setImages] = React.useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Preload images
  React.useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const imageCount = 80;
      const promises = [];

      for (let i = 0; i < imageCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          // Format number with leading zeros (000, 001, ..., 079)
          const num = i.toString().padStart(3, '0');
          // Using the specific filename pattern found in the directory
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

  // Animation Loop
  React.useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let currentIndex = 0;
    let lastTime = 0;
    const fps = 24; // Target FPS
    const interval = 1000 / fps;

    const render = (time: number) => {
      if (time - lastTime > interval) {
        lastTime = time;
        const img = images[currentIndex];

        // Draw image effectively "object-cover" style
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

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded, images]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
        <div className="absolute inset-0 bg-black/30"></div>
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