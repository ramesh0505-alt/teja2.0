import concertRed from "@/assets/photos/concert-live-red.jpeg";
import studioDiscussion2 from "@/assets/photos/studio-discussion-2.jpeg";
import tejaAnjaliSession from "@/assets/photos/teja-anjali-session.jpeg";
import concertStageBlack from "@/assets/photos/concert-stage-black.jpeg";
import songwritingBlue from "@/assets/photos/songwriting-blue.jpeg";
import guitarSteps from "@/assets/photos/guitar-steps.jpeg";
import guitarStanding from "@/assets/photos/guitar-standing.jpeg";
import keyboardRecording from "@/assets/photos/keyboard-recording.jpeg";
import keyboardBlueSaree from "@/assets/photos/keyboard-blue-saree.jpeg";
import studioDiscussion1 from "@/assets/photos/studio-discussion-1.jpeg";
import concertPurple from "@/assets/photos/concert-live-purple.jpeg";
import tanpuraClassical from "@/assets/photos/tanpura-classical.jpeg";
import songwritingDesk from "@/assets/photos/songwriting-desk.jpeg";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Stage & Concerts" | "Studio" | "Acoustic & Riyaz" | "Sessions";
  description: string;
  year?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "keyboard-blue-saree",
    src: keyboardBlueSaree,
    title: "Swara Arrangements at the Keyboard",
    category: "Studio",
    description: "Composing melodic arrangements, swaras, and vocal harmonies in the recording studio.",
    year: "2026",
  },
  {
    id: "guitar-steps",
    src: guitarSteps,
    title: "Acoustic Riyaz on Marble Steps",
    category: "Acoustic & Riyaz",
    description: "Peaceful acoustic guitar riyaz and chord practice on the veranda steps.",
    year: "2026",
  },
  {
    id: "teja-anjali-session",
    src: tejaAnjaliSession,
    title: "Music Discussion with Director Teja",
    category: "Sessions",
    description: "In-depth song composition and soundtrack brainstorming session with filmmaker Teja.",
    year: "2026",
  },
  {
    id: "tanpura-classical",
    src: tanpuraClassical,
    title: "Classical Riyaz & Tanpura Bhava",
    category: "Acoustic & Riyaz",
    description: "Traditional Carnatic & Hindustani vocal practice with the resonant tanpura.",
    year: "2026",
  },
  {
    id: "concert-live-red",
    src: concertRed,
    title: "Musical Night Live Performance",
    category: "Stage & Concerts",
    description: "Power-packed playback vocal performance under stage spotlights with full orchestra.",
    year: "2026",
  },
  {
    id: "guitar-standing",
    src: guitarStanding,
    title: "Acoustic Resonance & Phrasing",
    category: "Acoustic & Riyaz",
    description: "Exploring acoustic chord progressions and folk melodies with the six-string guitar.",
    year: "2026",
  },
  {
    id: "songwriting-blue",
    src: songwritingBlue,
    title: "Lyricist & Songwriting Flow",
    category: "Sessions",
    description: "Penning heartfelt Telugu and English lyrics against the vibrant studio backdrop.",
    year: "2026",
  },
  {
    id: "concert-purple",
    src: concertPurple,
    title: "Stage Duet & Vocal Harmonies",
    category: "Stage & Concerts",
    description: "Soulful duet rendition and crowd harmonies before an enthralled audience.",
    year: "2026",
  },
  {
    id: "keyboard-recording",
    src: keyboardRecording,
    title: "Studio Vocal & Synthesizer Tracking",
    category: "Studio",
    description: "Fine-tuning audio tracks and vocal intonation through high-fidelity studio monitors.",
    year: "2026",
  },
  {
    id: "concert-stage-black",
    src: concertStageBlack,
    title: "Unplugged Concert Glow",
    category: "Stage & Concerts",
    description: "Atmospheric unplugged musical night accompanied by live acoustic percussion.",
    year: "2026",
  },
  {
    id: "songwriting-desk",
    src: songwritingDesk,
    title: "Desk Drafting & Musical Notations",
    category: "Sessions",
    description: "Writing song lyrics, notation charts, and vocal meters at the creative desk.",
    year: "2026",
  },
  {
    id: "studio-discussion-1",
    src: studioDiscussion1,
    title: "Song Arrangement Brainstorming",
    category: "Sessions",
    description: "Discussing track arrangements, rhythm programming, and background score cues.",
    year: "2026",
  },
  {
    id: "studio-discussion-2",
    src: studioDiscussion2,
    title: "Sound Direction & Mixing Notes",
    category: "Sessions",
    description: "Finalizing vocal textures and song dynamics for upcoming single release.",
    year: "2026",
  },
];
