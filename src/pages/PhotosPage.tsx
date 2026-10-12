import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPhotos, GalleryPhoto } from "@/data/photosData";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const categories = ["All", "Stage & Concerts", "Studio", "Acoustic & Riyaz", "Sessions"] as const;

const PhotosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === selectedCategory);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, filteredPhotos.length]);

  const activePhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[1700px] mx-auto space-y-10">
        {/* Title and Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-foreground/10 pb-6">
          <div>
            <span className="label-uppercase tracking-[0.25em] text-foreground/50 text-xs block mb-2">
              Visual Archives
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground tracking-tight">
              Photo Gallery & Riyaz
            </h1>
            <p className="text-foreground/60 text-sm md:text-base mt-2 max-w-xl">
              Glimpses of musical journeys — live stage concerts across South India, acoustic riyaz sessions, and studio collaborations with Director Teja.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActivePhotoIndex(null);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-foreground text-background shadow-md"
                      : "border border-foreground/15 text-foreground/60 hover:text-foreground hover:border-foreground/30 bg-background/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-foreground/5 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/40">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Floating zoom indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption / Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left space-y-1">
                  <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-foreground/60">
                    <span>{photo.category}</span>
                    <span>{photo.year}</span>
                  </div>
                  <h3 className="text-white font-medium text-base leading-tight group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-white/70 text-xs line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state safeguard */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20 text-foreground/50 text-sm">
            No photos found in this category.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next controls */}
            {filteredPhotos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex(
                      (prev) =>
                        (prev! - 1 + filteredPhotos.length) %
                        filteredPhotos.length
                    );
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex(
                      (prev) => (prev! + 1) % filteredPhotos.length
                    );
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] flex flex-col items-center select-none"
            >
              <div className="relative max-h-[75vh] overflow-hidden rounded-xl shadow-2xl bg-black">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption text */}
              <div className="text-center mt-4 max-w-2xl px-4 space-y-1">
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {activePhoto.category} • Photo {(activePhotoIndex ?? 0) + 1} of{" "}
                  {filteredPhotos.length}
                </div>
                <h2 className="text-xl md:text-2xl font-display text-white font-semibold">
                  {activePhoto.title}
                </h2>
                <p className="text-white/70 text-xs md:text-sm">
                  {activePhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotosPage;
