import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, Instagram, Youtube, ExternalLink } from "lucide-react";
import { bandInfo } from "@/data/mockData";
import tejaAnjaliSession from "@/assets/photos/teja-anjali-session.jpeg";
import guitarSteps from "@/assets/photos/guitar-steps.jpeg";
import { Link } from "react-router-dom";
import { Images } from "lucide-react";

const InfoPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Text */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div>
          <span className="label-uppercase tracking-[0.25em] text-foreground/50 text-xs block mb-2">
            Artist & Collaboration
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Tejanjali Valavala
          </h1>
        </div>

        <p className="text-foreground/80 leading-relaxed text-lg">{bandInfo.bio}</p>

        <div>
          <h3 className="label-uppercase mb-4">Members & Collaboration</h3>
          <div className="space-y-2">
            {bandInfo.members.map((m) => (
              <div key={m.name}>
                <span className="text-foreground font-medium">{m.name}</span>
                <span className="text-foreground/60 text-sm ml-2">— {m.role}</span>
              </div>
            ))}
            <div>
              <span className="text-foreground font-medium">Teja</span>
              <span className="text-foreground/60 text-sm ml-2">— Direction & Creative Producer</span>
            </div>
          </div>
        </div>

        {/* Verified Contact Card */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="label-uppercase">Verified Contact</h3>
          
          <div className="space-y-3">
            {/* WhatsApp Direct Chat */}
            <a
              href="https://wa.me/918296769057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/15 transition-all text-foreground group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                    WhatsApp Chat
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    +91 82967 69057
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email Direct */}
            <a
              href="mailto:tejanjali24colb@gmail.com"
              className="flex items-center justify-between p-3.5 rounded-lg border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 transition-all text-foreground group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-foreground/10 text-foreground">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                    Official Email
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    tejanjali24colb@gmail.com
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Social Presence */}
        <div>
          <h3 className="label-uppercase mb-4">Official Channels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tejanjali_24"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center justify-between hover:bg-[hsl(var(--glass-hover))] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-400" />
                <div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider">Instagram</div>
                  <div className="text-sm font-medium text-foreground">@tejanjali_24</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@tejanjalismckeyclub6077"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center justify-between hover:bg-[hsl(var(--glass-hover))] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Youtube className="w-5 h-5 text-red-500" />
                <div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider">YouTube</div>
                  <div className="text-sm font-medium text-foreground">@tejanjalismckeyclub6077</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <Link
            to="/photos"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-foreground font-medium border border-foreground/20 rounded-full px-5 py-2.5 hover:border-foreground/50 transition-colors"
          >
            <Images className="w-4 h-4" />
            Explore Full Photo Archives (13 Photos)
          </Link>
        </div>
      </motion.div>

      {/* Photos Stack */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-6 lg:sticky lg:top-24">
        <div className="rounded-xl overflow-hidden aspect-[4/3] border border-foreground/15 shadow-xl relative group">
          <img src={tejaAnjaliSession} alt="Teja and Anjali Studio Session" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
            Studio Creative Session — Teja & Anjali
          </div>
        </div>
        <div className="rounded-xl overflow-hidden aspect-[4/3] border border-foreground/15 shadow-xl relative group">
          <img src={guitarSteps} alt="Anjali with acoustic guitar" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
            Acoustic Rehearsals
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default InfoPage;
