import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import keyboardHero from "@/assets/photos/keyboard-blue-saree.jpeg";
import songwritingBlue from "@/assets/photos/songwriting-blue.jpeg";
import tejaHero from "@/assets/photos/teja-anjali-session.jpeg";
import keyboardRecording from "@/assets/photos/keyboard-recording.jpeg";
import guitarHero from "@/assets/photos/guitar-steps.jpeg";
import tanpuraHero from "@/assets/photos/tanpura-classical.jpeg";
import concertHero from "@/assets/photos/concert-live-red.jpeg";
import { Images, Maximize, Minimize } from "lucide-react";

interface HeroSlide {
  src: string;
  title: string;
  position: string; // precise focal point (e.g., "center 15%")
  type: "landscape" | "portrait" | "square";
}

const heroSlides: HeroSlide[] = [
  {
    src: keyboardHero,
    title: "Harmonium & Keyboard Riyaz",
    position: "center 24%",
    type: "landscape",
  },
  {
    src: songwritingBlue,
    title: "Sahityam & Lyric Composition",
    position: "center 25%",
    type: "landscape",
  },
  {
    src: tejaHero,
    title: "Music Discussion with Director Teja",
    position: "center 18%",
    type: "landscape",
  },
  {
    src: keyboardRecording,
    title: "Studio Recording & Swara Arrangements",
    position: "center 22%",
    type: "landscape",
  },
  {
    src: guitarHero,
    title: "Acoustic Melody & Riyaz",
    position: "center 16%",
    type: "portrait",
  },
  {
    src: tanpuraHero,
    title: "Classical Riyaz & Tanpura Bhava",
    position: "center 12%",
    type: "square",
  },
  {
    src: concertHero,
    title: "Live Musical Night & Stage Concert",
    position: "center 18%",
    type: "square",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fitMode, setFitMode] = useState<"fill" | "fit">("fill");
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imgX = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const imgY = useTransform(mouseY, [-0.5, 0.5], [4, -4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // Subtle auto-rotation every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-screen overflow-hidden bg-background flex items-center justify-center select-none"
    >
      {/* Layer 1: Ambient blurred background glow for rich matching tone */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`ambient-${slide.src}`}
          src={slide.src}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 pointer-events-none brightness-75"
        />
      </AnimatePresence>

      {/* Layer 2: Main hero image with tailored focal positioning */}
      <AnimatePresence mode="wait">
        {fitMode === "fill" ? (
          <motion.img
            key={`fill-${slide.src}`}
            src={slide.src}
            alt={`TEJAANJALI - ${slide.title}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              x: imgX,
              y: imgY,
              objectPosition: slide.position,
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <motion.div
            key={`fit-${slide.src}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-h-[82vh] max-w-[92vw] flex items-center justify-center pt-16 pb-20"
          >
            <img
              src={slide.src}
              alt={`TEJAANJALI - ${slide.title}`}
              className="max-h-[76vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      {/* Floating Controls: Fit Toggle, Slide Selectors & Photos Link */}
      <div className="absolute top-24 right-4 md:right-8 z-30 flex items-center gap-2.5">
        {/* Fit / Fill toggle button */}
        <button
          onClick={() => setFitMode((m) => (m === "fill" ? "fit" : "fill"))}
          className="inline-flex items-center gap-1.5 bg-background/60 hover:bg-background/80 text-foreground/80 hover:text-foreground text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border border-foreground/20 backdrop-blur-md transition-all cursor-pointer"
          title={fitMode === "fill" ? "Fit full photo without cropping" : "Fill widescreen"}
        >
          {fitMode === "fill" ? (
            <>
              <Minimize className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fit Photo</span>
            </>
          ) : (
            <>
              <Maximize className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fill Screen</span>
            </>
          )}
        </button>

        {/* Slide Indicator Dots */}
        <div className="hidden sm:flex items-center gap-1.5 bg-background/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-foreground/15">
          {heroSlides.map((s, idx) => (
            <button
              key={s.title}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "w-6 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              title={s.title}
            />
          ))}
        </div>

        {/* Link to Full Photos Archive */}
        <Link
          to="/photos"
          className="inline-flex items-center gap-2 bg-background/70 hover:bg-background/90 text-foreground text-xs uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full border border-foreground/20 backdrop-blur-md transition-colors"
        >
          <Images className="w-3.5 h-3.5" />
          <span>Photo Gallery (13)</span>
        </Link>
      </div>

      {/* Slide Title Tag (Top Left) */}
      <div className="absolute top-24 left-4 md:left-8 z-20 pointer-events-none">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 bg-background/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-foreground/15"
        >
          {slide.title}
        </motion.div>
      </div>

      {/* Giant band name — bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="font-display text-[22vw] md:text-[18vw] leading-[0.8] text-foreground/[0.20] text-center whitespace-nowrap pb-2 md:pb-4"
        >
          TEJAANJALI
        </motion.h1>
      </div>
    </div>
  );
};

export default Index;

