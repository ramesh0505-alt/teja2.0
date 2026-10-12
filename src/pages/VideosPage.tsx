import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Youtube, Instagram, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { videos, VideoItem } from "@/data/mockData";

const categories = ["All", "YouTube", "Instagram"] as const;

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : selectedCategory === "YouTube"
      ? videos.filter((v) => v.platform === "youtube")
      : videos.filter((v) => v.platform === "instagram");

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-[1700px] mx-auto space-y-12">
        {/* Header & Official Channels Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-foreground/10 pb-8">
          <div>
            <span className="label-uppercase tracking-[0.25em] text-foreground/50 text-xs block mb-2">
              Official Media Channels
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground tracking-tight">
              Videos & Reels
            </h1>
            <p className="text-foreground/60 text-sm md:text-base mt-2 max-w-xl">
              Watch official music videos, live performances on YouTube, and behind-the-scenes rehearsal reels on Instagram.
            </p>
          </div>

          {/* Quick Channel Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {/* YouTube Channel Button */}
            <a
              href="https://youtube.com/@tejanjalismckeyclub6077"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-foreground transition-all group"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-red-400 font-medium leading-none">
                  YouTube Channel
                </span>
                <span className="text-xs font-semibold text-foreground">
                  @tejanjalismckeyclub6077
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-red-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Instagram Reels Button */}
            <a
              href="https://www.instagram.com/tejanjali_24"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 hover:bg-pink-500/20 text-foreground transition-all group"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-pink-400 font-medium leading-none">
                  Instagram Reels
                </span>
                <span className="text-xs font-semibold text-foreground">
                  @tejanjali_24
                </span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-pink-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-foreground text-background shadow-md"
                    : "border border-foreground/15 text-foreground/60 hover:text-foreground hover:border-foreground/30 bg-background/50"
                }`}
              >
                {cat === "All"
                  ? "All Videos"
                  : cat === "YouTube"
                  ? "YouTube Videos"
                  : "Instagram Reels"}
              </button>
            );
          })}
        </div>

        {/* Videos Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative flex flex-col rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
              >
                {/* Video Thumbnail with Hover Overlay */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="aspect-video w-full overflow-hidden bg-black relative cursor-pointer"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Platform Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    {video.platform === "youtube" ? (
                      <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-md">
                        <Youtube className="w-3 h-3" />
                        YouTube
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-md">
                        <Instagram className="w-3 h-3" />
                        Instagram
                      </span>
                    )}
                  </div>

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-foreground/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-foreground/30 transition-all shadow-xl">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration and Views Tag */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white/90 text-[11px] font-medium bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    {video.views && <span>{video.views}</span>}
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-foreground/50 mb-1">
                      <span>{video.type}</span>
                      {video.date && <span>{video.date}</span>}
                    </div>
                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="text-base font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors cursor-pointer"
                    >
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-foreground/60 text-xs line-clamp-2 mt-1 leading-relaxed">
                        {video.description}
                      </p>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="pt-2 border-t border-foreground/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="text-xs uppercase tracking-wider text-foreground/80 hover:text-foreground font-medium transition-colors cursor-pointer flex items-center gap-1"
                    >
                      Watch Now
                    </button>

                    <Link
                      to={`/videos/${video.id}`}
                      className="text-[11px] uppercase tracking-wider text-foreground/40 hover:text-foreground/80 transition-colors flex items-center gap-1"
                    >
                      Details
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Close Player"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-2xl"
            >
              {/* Media Player Frame */}
              <div className="aspect-video w-full bg-black relative">
                {activeVideo.platform === "youtube" && activeVideo.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full relative flex items-center justify-center bg-zinc-950">
                    <img
                      src={activeVideo.image}
                      alt={activeVideo.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <Instagram className="w-12 h-12 text-pink-400" />
                      <div className="max-w-md">
                        <h4 className="text-lg font-semibold text-white">
                          Instagram Reel by @tejanjali_24
                        </h4>
                        <p className="text-white/70 text-xs mt-1">
                          {activeVideo.description}
                        </p>
                      </div>
                      <a
                        href={activeVideo.instagramUrl || "https://www.instagram.com/tejanjali_24"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:opacity-95 transition-opacity"
                      >
                        <Instagram className="w-4 h-4" />
                        Watch Reel on Instagram
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Video Info */}
              <div className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      <span>{activeVideo.type}</span>
                      <span>•</span>
                      <span>{activeVideo.duration}</span>
                      {activeVideo.views && (
                        <>
                          <span>•</span>
                          <span>{activeVideo.views}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {activeVideo.title}
                    </h2>
                  </div>

                  {/* Destination button */}
                  {activeVideo.platform === "youtube" ? (
                    <a
                      href={activeVideo.youtubeUrl || "https://youtube.com/@tejanjalismckeyclub6077"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-colors self-start sm:self-auto"
                    >
                      <Youtube className="w-4 h-4" />
                      Open on YouTube
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href={activeVideo.instagramUrl || "https://www.instagram.com/tejanjali_24"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-colors self-start sm:self-auto"
                    >
                      <Instagram className="w-4 h-4" />
                      View on Instagram
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {activeVideo.description && (
                  <p className="text-foreground/80 text-sm leading-relaxed border-t border-border pt-4">
                    {activeVideo.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideosPage;
