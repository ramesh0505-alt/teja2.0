import albumTanpura from "@/assets/photos/tanpura-classical.jpeg";
import albumKeyboard from "@/assets/photos/keyboard-blue-saree.jpeg";
import albumGuitarSteps from "@/assets/photos/guitar-steps.jpeg";
import albumGuitarStanding from "@/assets/photos/guitar-standing.jpeg";
import albumConcertRed from "@/assets/photos/concert-live-red.jpeg";
import albumSongwritingBlue from "@/assets/photos/songwriting-blue.jpeg";
import videoConcertPurple from "@/assets/photos/concert-live-purple.jpeg";
import videoTejaSession from "@/assets/photos/teja-anjali-session.jpeg";
import videoKeyboardRec from "@/assets/photos/keyboard-recording.jpeg";
import videoConcertBlack from "@/assets/photos/concert-stage-black.jpeg";
import merchVinyl from "@/assets/merch-vinyl.jpg";
import merchTshirt from "@/assets/merch-tshirt.jpg";

export interface Release {
  id: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  date?: string;
  status?: string;
  platforms?: { name: string; url: string }[];
  merchOptions?: { name: string; price: string }[];
}

export interface MerchItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  purchaseLinks?: { platform: string; price: string; url: string }[];
  details?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  type: string;
  duration: string;
  image: string;
  date?: string;
  director?: string;
  description?: string;
  platform: "youtube" | "instagram";
  youtubeId?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  views?: string;
}

export interface TourDate {
  id: string;
  date: string;
  day: string;
  month: string;
  city: string;
  state: string;
  venue: string;
  eventName: string;
  status: "available" | "sold-out" | "presale";
  ticketUrl?: string;
  doors?: string;
  showTime?: string;
  prices?: { tier: string; price: string }[];
  description?: string;
}

export const releases: Release[] = [
  {
    id: "swara-manjari",
    title: "Swara Manjari",
    type: "Studio Album",
    year: 2024,
    description: "Soul-stirring melodies blending classical ragas, acoustic strings, and contemporary Indian orchestration.",
    image: albumTanpura,
    date: "March 1, 2024",
    status: "Streaming Now",
    platforms: [
      { name: "JioSaavn", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Apple Music", url: "#" },
      { name: "Wynk Music", url: "#" },
      { name: "YouTube Music", url: "https://youtube.com/@tejanjalismckeyclub6077" },
    ],
    merchOptions: [
      { name: "Collector's Gold Vinyl LP", price: "₹2,499" },
      { name: "Special Digipak Audio CD", price: "₹499" },
      { name: "Lossless Audio Pen Drive (FLAC)", price: "₹899" },
      { name: "Vinyl + Autographed Poster Combo", price: "₹2,999" },
    ],
  },
  {
    id: "madhura-geethalu",
    title: "Madhura Geethalu",
    type: "Original Soundtrack",
    year: 2023,
    description: "A poignant musical journey capturing romance, tender longing, and heart-touching lyrics under starry skies.",
    image: albumKeyboard,
    date: "September 15, 2023",
    status: "Streaming Now",
    platforms: [
      { name: "JioSaavn", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Apple Music", url: "#" },
      { name: "YouTube Music", url: "https://youtube.com/@tejanjalismckeyclub6077" },
    ],
  },
  {
    id: "chitapata-chinukulu",
    title: "Chitapata Chinukulu",
    type: "Acoustic Single",
    year: 2024,
    description: "A breezy acoustic ode to monsoon showers, first love, and sweet nostalgic memories.",
    image: albumGuitarSteps,
    date: "January 15, 2024",
    status: "Streaming Now",
    platforms: [
      { name: "Spotify", url: "#" },
      { name: "Wynk Music", url: "#" },
      { name: "JioSaavn", url: "#" },
      { name: "Apple Music", url: "#" },
    ],
  },
  {
    id: "vasantam-ep",
    title: "Vasantam Melodies",
    type: "EP",
    year: 2022,
    description: "Four acoustic compositions celebrating springtime hope, youthfulness, and the joy of blooming.",
    image: albumGuitarStanding,
    date: "June 1, 2022",
    status: "Streaming Now",
    platforms: [
      { name: "Spotify", url: "#" },
      { name: "JioSaavn", url: "#" },
      { name: "Apple Music", url: "#" },
    ],
  },
  {
    id: "naadha-tarangini",
    title: "Naadha Tarangini",
    type: "Classical Fusion",
    year: 2023,
    description: "Traditional Carnatic kirtana compositions arranged with soulful acoustic chords and rhythmic swaras.",
    image: albumConcertRed,
    date: "May 20, 2023",
    status: "Streaming Now",
    platforms: [
      { name: "JioSaavn", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "YouTube Music", url: "https://youtube.com/@tejanjalismckeyclub6077" },
    ],
  },
  {
    id: "janapada-dhwani",
    title: "Janapada Dhwani",
    type: "Folk & Acoustic Album",
    year: 2021,
    description: "Debut album featuring earthy folk rhythms and soulful small-town stories wrapped in acoustic warmth.",
    image: albumSongwritingBlue,
    date: "November 10, 2021",
    status: "Streaming Now",
    platforms: [
      { name: "JioSaavn", url: "#" },
      { name: "Spotify", url: "#" },
      { name: "Wynk Music", url: "#" },
    ],
  },
];

export const merchItems: MerchItem[] = [
  {
    id: "swara-manjari-vinyl",
    name: '"Swara Manjari" Collector\'s Vinyl',
    category: "Vinyl LP",
    description: "180g honey-gold heavy vinyl with exclusive art insert and lyric booklet. Limited to 500 copies.",
    price: "₹2,499",
    image: merchVinyl,
    purchaseLinks: [
      { platform: "Official Store", price: "₹2,499", url: "https://wa.me/918296769057" },
    ],
    details: "180g gold vinyl audiophile pressing. Includes exclusive 18x24 signed art print and high-res digital audio card.",
  },
  {
    id: "madhura-geethalu-cd",
    name: '"Madhura Geethalu" Digipak CD',
    category: "Audio CD",
    description: "Deluxe packaging with 12-page photo booklet and bonus acoustic unplugged track.",
    price: "₹499",
    image: albumKeyboard,
  },
  {
    id: "tour-2024-tshirt",
    name: "Tejanjali Concert Tour Cotton T-Shirt",
    category: "Apparel",
    description: "100% premium combed cotton tee with South India tour dates on back and artistic logo design.",
    price: "₹799",
    image: merchTshirt,
  },
  {
    id: "band-logo-hoodie",
    name: "Tejanjali Valavala Signature Hoodie",
    category: "Apparel",
    description: "Heavyweight fleece winter hoodie with embroidered musical notes emblem.",
    price: "₹1,899",
    image: merchTshirt,
  },
  {
    id: "signed-concert-poster",
    name: '"Swara Manjari" Signed Art Poster',
    category: "Art Print",
    description: "18x24 premium matte art print, individually hand-signed by Tejanjali Valavala.",
    price: "₹349",
    image: albumGuitarStanding,
  },
  {
    id: "pendrive-audiophile-album",
    name: "Lossless Master USB Pen Drive",
    category: "Digital USB",
    description: "High-speed metal pen drive containing 24-bit 96kHz lossless FLAC masters, behind-the-scenes videos, and photo gallery.",
    price: "₹899",
    image: albumSongwritingBlue,
  },
];

export const videos: VideoItem[] = [
  {
    id: "butterflies-mv",
    title: "Chitapata Chinukulu - Official Lyrical Video",
    type: "Music Video",
    duration: "3:45",
    image: albumGuitarSteps,
    date: "2024",
    director: "Director Teja",
    description: "Soulful acoustic melodies and expressive playback singing by Tejanjali Valavala.",
    platform: "youtube",
    youtubeId: "M7lc1UVf-VE",
    youtubeUrl: "https://youtube.com/@tejanjalismckeyclub6077",
    views: "48K views",
  },
  {
    id: "teja-studio-session",
    title: "Teja & Tejanjali - Studio Composition Session",
    type: "Studio Riyaz",
    duration: "6:20",
    image: videoTejaSession,
    date: "2024",
    description: "Exclusive behind-the-scenes composition and music planning session with noted filmmaker Teja.",
    platform: "youtube",
    youtubeId: "L_LUpnjgPso",
    youtubeUrl: "https://youtube.com/@tejanjalismckeyclub6077",
    views: "62K views",
  },
  {
    id: "slow-burn-live",
    title: "Madhura Geethalu - Live Stage Harmonies",
    type: "Live Concert",
    duration: "4:12",
    image: videoConcertPurple,
    date: "2024",
    description: "Live stage performance featuring duet vocal harmonies and grand live orchestra.",
    platform: "youtube",
    youtubeId: "kJQP7kiw5Fk",
    youtubeUrl: "https://youtube.com/@tejanjalismckeyclub6077",
    views: "35K views",
  },
  {
    id: "classical-tanpura-rendition",
    title: "Classical Tanpura & Raga Alapana",
    type: "Classical Rendition",
    duration: "5:30",
    image: albumTanpura,
    date: "2024",
    description: "Traditional Indian classical vocal riyaz with tanpura, showcasing microtonal swaras and pure classical bhava.",
    platform: "youtube",
    youtubeId: "fJ9rUzIMcZQ",
    youtubeUrl: "https://youtube.com/@tejanjalismckeyclub6077",
    views: "89K views",
  },
  {
    id: "instagram-acoustic-steps",
    title: "Acoustic Guitar Riyaz on Marble Steps",
    type: "Instagram Reel",
    duration: "0:58",
    image: albumGuitarStanding,
    date: "Recent",
    description: "Unplugged acoustic guitar rehearsal snippet shared on Instagram Reels @tejanjali_24.",
    platform: "instagram",
    instagramUrl: "https://www.instagram.com/tejanjali_24",
    views: "24.5K plays",
  },
  {
    id: "instagram-studio-keyboard",
    title: "Synthesizer & Swara Layering in Studio",
    type: "Instagram Reel",
    duration: "1:15",
    image: videoKeyboardRec,
    date: "Recent",
    description: "Tracking keyboard chords and improvising melody runs in the recording booth.",
    platform: "instagram",
    instagramUrl: "https://www.instagram.com/tejanjali_24",
    views: "31.2K plays",
  },
  {
    id: "instagram-lyrics-desk",
    title: "Songwriting & Lyricist Flow at the Desk",
    type: "Instagram Reel",
    duration: "0:45",
    image: albumSongwritingBlue,
    date: "Recent",
    description: "Penning lyrics and matching melodic cadence at the studio desk.",
    platform: "instagram",
    instagramUrl: "https://www.instagram.com/tejanjali_24",
    views: "18.4K plays",
  },
  {
    id: "live-concert-spotlight",
    title: "Grand Musical Night - Hyderabad Live Set",
    type: "Live Show",
    duration: "8:45",
    image: albumConcertRed,
    date: "2024",
    description: "High-energy live stage performance under spotlight with full live band and audience cheers.",
    platform: "youtube",
    youtubeId: "9bZkp7q19f0",
    youtubeUrl: "https://youtube.com/@tejanjalismckeyclub6077",
    views: "94K views",
  },
];

export const tourDates: TourDate[] = [
  {
    id: "hyderabad-mar-15",
    date: "2024-03-15",
    day: "15",
    month: "MAR",
    city: "Hyderabad",
    state: "Telangana",
    venue: "Shilpakala Vedika, Hitec City",
    eventName: "Swararanjani — Musical Night",
    status: "available",
    ticketUrl: "https://wa.me/918296769057?text=Hi%2C+I+would+like+to+book+passes+for+the+Hyderabad+Concert",
    doors: "6:00 PM",
    showTime: "7:00 PM",
    prices: [
      { tier: "General Entry Pass", price: "₹499" },
      { tier: "Balcony Premium", price: "₹999" },
      { tier: "VIP Front Row Pass", price: "₹1,999" },
    ],
    description: "Grand live musical concert featuring hit film melodies, classical fusion, and acoustic sets. Special guest: Director Teja.",
  },
  {
    id: "bengaluru-mar-22",
    date: "2024-03-22",
    day: "22",
    month: "MAR",
    city: "Bengaluru",
    state: "Karnataka",
    venue: "Chowdiah Memorial Hall, Malleshwaram",
    eventName: "Naada Bindu — Live in Concert",
    status: "available",
    ticketUrl: "https://wa.me/918296769057?text=Hi%2C+I+would+like+to+book+passes+for+the+Bengaluru+Concert",
    doors: "6:00 PM",
    showTime: "7:00 PM",
    prices: [
      { tier: "Silver Pass", price: "₹499" },
      { tier: "Gold Pass", price: "₹999" },
      { tier: "Platinum Pass", price: "₹1,999" },
    ],
    description: "Acoustic and classical musical evening celebrating timeless ragas and contemporary melodies.",
  },
  {
    id: "chennai-apr-05",
    date: "2024-04-05",
    day: "05",
    month: "APR",
    city: "Chennai",
    state: "Tamil Nadu",
    venue: "The Music Academy, TTK Road",
    eventName: "Raaga Sandhya — Classical & Contemporary Fusion",
    status: "available",
    ticketUrl: "https://wa.me/918296769057?text=Hi%2C+I+would+like+to+book+passes+for+the+Chennai+Concert",
    doors: "5:30 PM",
    showTime: "6:30 PM",
    prices: [
      { tier: "General Pass", price: "₹399" },
      { tier: "Premium Pass", price: "₹799" },
      { tier: "Donor Pass", price: "₹1,499" },
    ],
    description: "A prestigious classical performance blending Carnatic keerthanas with acoustic harmonies.",
  },
  {
    id: "visakhapatnam-apr-12",
    date: "2024-04-12",
    day: "12",
    month: "APR",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    venue: "AU Convention Centre, Beach Road",
    eventName: "Sagara Theeram — Beachside Musical Fest",
    status: "sold-out",
    doors: "6:00 PM",
    showTime: "7:00 PM",
    description: "Beachfront open-air musical night packed with hit tracks and acoustic melodies. Housefull show!",
  },
  {
    id: "vijayawada-apr-20",
    date: "2024-04-20",
    day: "20",
    month: "APR",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    venue: "Tummalapalli Kshetrayya Kalakshetram",
    eventName: "Amaravati Sangeetha Vibhavari",
    status: "presale",
    ticketUrl: "https://wa.me/918296769057?text=Hi%2C+I+would+like+to+pre-book+passes+for+the+Vijayawada+Concert",
    doors: "6:00 PM",
    showTime: "7:00 PM",
    prices: [
      { tier: "Early Bird General Pass", price: "₹399" },
      { tier: "Early Bird VIP Pass", price: "₹999" },
    ],
    description: "Traditional music festival honoring classical roots and modern Telugu film melodies. Early bird booking open.",
  },
  {
    id: "mumbai-may-03",
    date: "2024-05-03",
    day: "03",
    month: "MAY",
    city: "Mumbai",
    state: "Maharashtra",
    venue: "Shanmukhananda Hall, Sion",
    eventName: "Sur Sangam — Grand Live Concert",
    status: "available",
    ticketUrl: "https://wa.me/918296769057?text=Hi%2C+I+would+like+to+book+passes+for+the+Mumbai+Concert",
    doors: "6:30 PM",
    showTime: "7:30 PM",
    prices: [
      { tier: "Standard Pass", price: "₹599" },
      { tier: "Deluxe Pass", price: "₹1,299" },
      { tier: "VIP Box", price: "₹2,499" },
    ],
    description: "Mega musical celebration featuring full grand orchestra, classical recitals, and film songs.",
  },
];

export const bandInfo = {
  name: "Tejanjali Valavala",
  bio: "Tejanjali Valavala is an Indian playback singer, songwriter, and multi-instrumentalist from South India. Known for her expressive vocal timbre, classical riyaz, and soul-stirring melodies, she works closely with visionary filmmaker and director Teja. Her musical repertoire spans film soundtracks, classical keerthanas, and contemporary acoustic fusion.",
  members: [
    { name: "Tejanjali Valavala", role: "Lead Vocals, Composition & Multi-instrumentalist" },
  ],
  contact: {
    email: "tejanjali24colb@gmail.com",
    whatsappNumber: "+91 82967 69057",
    whatsappUrl: "https://wa.me/918296769057",
    management: "tejanjali24colb@gmail.com",
    press: "tejanjali24colb@gmail.com",
  },
  socials: [
    {
      name: "WhatsApp",
      handle: "+91 82967 69057",
      url: "https://wa.me/918296769057",
      action: "Message",
    },
    {
      name: "Email",
      handle: "tejanjali24colb@gmail.com",
      url: "mailto:tejanjali24colb@gmail.com",
      action: "Send Email",
    },
    {
      name: "Instagram",
      handle: "@tejanjali_24",
      url: "https://www.instagram.com/tejanjali_24",
      action: "Follow",
    },
    {
      name: "YouTube",
      handle: "@tejanjalismckeyclub6077",
      url: "https://youtube.com/@tejanjalismckeyclub6077",
      action: "Subscribe",
    },
  ],
};
