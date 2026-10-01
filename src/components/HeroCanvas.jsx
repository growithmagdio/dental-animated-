import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Phone, ChevronDown } from 'lucide-react';
import { CLINIC_CONFIG } from '../config';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 52;

export default function HeroCanvas({ onLoadingComplete, setIsPastHero }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameObj = useRef({ currentFrame: 0 });
  const animFrameId = useRef(null);
  const lastRenderedFrame = useRef(-1);

  const [framesLoaded, setFramesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    const getFrameUrl = (index) => {
      const num = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${num}.jpg`;
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);

      img.onload = () => {
        loadedCount++;
        const pct = (loadedCount / TOTAL_FRAMES) * 100;
        setLoadProgress(pct);

        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setFramesLoaded(true);
          if (onLoadingComplete) onLoadingComplete();
        }
      };

      img.onerror = () => {
        // Fallback progress increment on error so application won't hang
        loadedCount++;
        const pct = (loadedCount / TOTAL_FRAMES) * 100;
        setLoadProgress(pct);
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setFramesLoaded(true);
          if (onLoadingComplete) onLoadingComplete();
        }
      };

      images.push(img);
    }
  }, [onLoadingComplete]);

  // Canvas render function
  const renderFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex] || imagesRef.current[0];
    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // Resize canvas canvas width & height if changed
    if (canvas.width !== canvasWidth * dpr || canvas.height !== canvasHeight * dpr) {
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // object-fit: cover math
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      offsetX = 0;
      // Top-align image (offsetY = 0) so the top-left baked-in logo is NEVER cut off at the top
      offsetY = 0;
    } else {
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgRatio;
      
      // On mobile (canvasWidth < 768px), crop slightly left (0.25 offset) so face is centered/visible
      const isMobile = canvasWidth < 768;
      const cropRatio = isMobile ? 0.25 : 0.5;
      
      offsetX = (canvasWidth - renderWidth) * cropRatio;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

    // Draw bottom dark gradient for readable bottom-left text overlay
    const gradient = ctx.createLinearGradient(0, canvasHeight * 0.4, 0, canvasHeight);
    gradient.addColorStop(0, 'rgba(15, 23, 42, 0)');
    gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.4)');
    gradient.addColorStop(1, 'rgba(15, 23, 42, 0.85)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, canvasHeight * 0.4, canvasWidth, canvasHeight * 0.6);

    ctx.restore();
    lastRenderedFrame.current = frameIndex;
  };

  // Schedule draw on rAF
  const requestFrameDraw = (frameIndex) => {
    if (frameIndex === lastRenderedFrame.current) return;
    if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    animFrameId.current = requestAnimationFrame(() => {
      renderFrame(frameIndex);
    });
  };

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (!framesLoaded || !containerRef.current) return;

    if (prefersReducedMotion) {
      // If reduced motion, show frame 52 static and set scroll progress to 1
      renderFrame(TOTAL_FRAMES - 1);
      setScrollProgress(1);
      return;
    }

    // Initial render frame 0
    renderFrame(0);

    const isMobile = window.innerWidth < 768;
    const pinDistance = isMobile ? '200vh' : '300vh';

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${pinDistance}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Map scroll 0 -> 1 to frame index 0 -> 51
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
        );

        frameObj.current.currentFrame = targetFrame;
        requestFrameDraw(targetFrame);

        // Notify Navbar when user scrolls past 85% of hero pin
        if (setIsPastHero) {
          setIsPastHero(progress > 0.85);
        }
      },
      onLeave: () => {
        if (setIsPastHero) setIsPastHero(true);
      },
      onEnterBack: () => {
        if (setIsPastHero) setIsPastHero(false);
      }
    });

    const handleResize = () => {
      renderFrame(frameObj.current.currentFrame);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [framesLoaded, prefersReducedMotion]);

  // 75 - 100%: Final hero CTA overlay
  const finalCTAOpacity = scrollProgress >= 0.65 
    ? Math.min(1, (scrollProgress - 0.65) / 0.25) 
    : (prefersReducedMotion ? 1 : 0);

  const finalCTASlide = (1 - finalCTAOpacity) * 20; // 20px slide up

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#1E3A5F]">
      
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover block"
      />

      {/* OVERLAY CONTENT timed to scroll (Bottom-Left positioned) */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 sm:p-10 lg:p-16 max-w-7xl mx-auto w-full z-10">
        
        {/* 75–100%: Headline, Sub-copy, and Buttons */}
        <div 
          className="max-w-2xl text-left pointer-events-auto transition-all duration-300"
          style={{ 
            opacity: finalCTAOpacity,
            transform: `translateY(${finalCTASlide}px)`,
            display: finalCTAOpacity > 0.01 ? 'block' : 'none'
          }}
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#4FB8C9]/20 border border-[#4FB8C9]/40 backdrop-blur-md text-[#4FB8C9] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4FB8C9] animate-ping" />
            <span>Modern & Gentle Dentistry</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 drop-shadow-md">
            Your confident smile starts here.
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-normal mb-8 max-w-xl leading-relaxed drop-shadow-sm">
            Gentle, modern dental care for the whole family. Experience painless treatments in a relaxing, state-of-the-art clinical space.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#appointment"
              className="btn-primary px-7 py-4 rounded-full font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="btn-secondary px-7 py-4 rounded-full font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 border border-white/20 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#4FB8C9]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
