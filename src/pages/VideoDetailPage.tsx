import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Youtube, Instagram, ExternalLink, ArrowRight } from "lucide-react";
import { videos } from "@/data/mockData";

const VideoDetailPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6 flex items-center justify-center">
        <p className="text-foreground/60">Video not found.</p>
      </div>
    );
  }

  const relatedVideos = videos.filter((v) => v.id !== video.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Videos
          </Link>

          {video.platform === "youtube" ? (
            <a
              href={video.youtubeUrl || "https://youtube.com/@tejanjalismckeyclub6077"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors font-medium"
            >
              <Youtube className="w-4 h-4" />
              Watch on YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <a
              href={video.instagramUrl || "https://www.instagram.com/tejanjali_24"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-pink-400 hover:text-pink-300 transition-colors font-medium"
            >
              <Instagram className="w-4 h-4" />
              Watch on Instagram
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Video Player Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-border shadow-2xl relative"
        >
          {isPlaying && video.platform === "youtube" && video.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : video.platform === "instagram" ? (
            <div className="w-full h-full relative flex items-center justify-center bg-zinc-950">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4">
                <Instagram className="w-14 h-14 text-pink-400" />
                <div className="max-w-md">
                  <h3 className="text-xl font-semibold text-white">
                    Instagram Reel Preview
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {video.description}
                  </p>
                </div>
                <a
                  href={video.instagramUrl || "https://www.instagram.com/tejanjali_24"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:opacity-95 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Open Reel on Instagram (@tejanjali_24)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="w-full h-full relative cursor-pointer group"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  <Youtube className="w-3.5 h-3.5" />
                  Click to Play YouTube Video
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Video Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-8 rounded-2xl space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-foreground/50 mb-2">
                <span>{video.type}</span>
                <span>•</span>
                <span>{video.duration}</span>
                {video.date && (
                  <>
                    <span>•</span>
                    <span>{video.date}</span>
                  </>
                )}
                {video.views && (
                  <>
                    <span>•</span>
                    <span>{video.views}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {video.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {video.platform === "youtube" ? (
                <a
                  href={video.youtubeUrl || "https://youtube.com/@tejanjalismckeyclub6077"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube Channel
                </a>
              ) : (
                <a
                  href={video.instagramUrl || "https://www.instagram.com/tejanjali_24"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram Profile
                </a>
              )}
            </div>
          </div>

          {video.description && (
            <p className="text-foreground/80 leading-relaxed text-base pt-4 border-t border-border">
              {video.description}
            </p>
          )}
        </motion.div>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-bold text-foreground">More Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVideos.map((r) => (
                <Link
                  key={r.id}
                  to={`/videos/${r.id}`}
                  onClick={() => setIsPlaying(false)}
                  className="group block glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      {r.platform === "youtube" ? (
                        <span className="bg-red-600/90 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase">
                          YouTube
                        </span>
                      ) : (
                        <span className="bg-pink-600/90 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase">
                          Instagram
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <span className="text-[11px] text-foreground/50 block">
                      {r.duration} • {r.type}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetailPage;
