import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";
import { Check, Copy, ArrowUpRight, Mail } from "lucide-react";
import Footer from "../components/Footer";

type Social = { name: string; handle: string; icon: React.ReactNode; url: string; color: string; note: string };

const socialLinks: Social[] = [
  { name: "LinkedIn", handle: "Fabrizio Gamboa", icon: <FaLinkedin />, url: "https://linkedin.com/in/fabrizio-gamboa-a606b4161", color: "#0a66c2", note: "Professional" },
  { name: "GitHub", handle: "PixlGalaxy", icon: <FaGithub />, url: "https://github.com/PixlGalaxy", color: "#f0f6fc", note: "Code & projects" },
  { name: "YouTube", handle: "@fabriziogamboap", icon: <FaYoutube />, url: "https://www.youtube.com/@fabriziogamboap", color: "#ff0033", note: "Videos" },
  { name: "Instagram", handle: "@gamboafabrizio", icon: <FaInstagram />, url: "https://www.instagram.com/gamboafabrizio/", color: "#e1306c", note: "Photos" },
  { name: "Twitter", handle: "@Fabriziogp00", icon: <FaTwitter />, url: "https://x.com/Fabriziogp00", color: "#1d9bf0", note: "Posts" },
  { name: "Telegram", handle: "@fabriziogamboa", icon: <FaTelegram />, url: "https://t.me/fabriziogamboa", color: "#26a5e4", note: "Chat" },
  { name: "Facebook", handle: "fabrizio.gamboa.p", icon: <FaFacebook />, url: "https://www.facebook.com/fabrizio.gamboa.p", color: "#1877f2", note: "Friends & family" },
];

const discordID = "pixwolf";

/** Shared card: the brand color drives the icon tile, hover border and glow */
const SocialCard: React.FC<{
  s: Pick<Social, "name" | "handle" | "icon" | "color" | "note">;
  trailing: React.ReactNode;
  featured?: boolean;
}> = ({ s, trailing, featured }) => (
  <span className="social-card" style={{ "--brand": s.color } as React.CSSProperties}>
    <span className={`social-icon ${featured ? "h-14 w-14 text-3xl" : "h-12 w-12 text-2xl"}`}>{s.icon}</span>
    <span className="flex-1 min-w-0 text-left">
      <span className="flex items-center gap-2">
        <span className={`font-semibold ${featured ? "text-lg" : ""}`}>{s.name}</span>
        <span className="hidden sm:inline rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-gray-400">{s.note}</span>
      </span>
      <span className="block truncate text-sm text-gray-400">{s.handle}</span>
    </span>
    {trailing}
  </span>
);

const Social: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyDiscordID = () => {
    navigator.clipboard.writeText(discordID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const arrow = <ArrowUpRight size={18} className="social-arrow" />;

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <title>Fabrizio Gamboa - Social</title>

      {/* Animated Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50">
        <div className="bubbles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-green/10 blur-[120px]" />

      <main className="relative z-10 flex-1 w-full max-w-3xl mx-auto px-4 pt-28 sm:pt-32 pb-8">
        {/* Profile header, link-in-bio style */}
        <section className="flex flex-col items-center text-center mb-10">
          <img src="/Galaxy_PFP.png" alt="Pixl, Fabrizio's avatar" className="h-24 w-24 rounded-2xl border border-white/10 shadow-xl shadow-black/50 mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-gradient">Connect With Me</h1>
          <p className="mt-3 text-gray-400">
            Fabrizio Gamboa · <span className="text-gray-300">Pixl</span>
          </p>
        </section>

        {/* Featured: Discord + LinkedIn */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <button onClick={copyDiscordID} aria-label="Copy Discord username" className="text-left">
            <SocialCard
              featured
              s={{ name: "Discord", handle: copied ? "Username copied!" : discordID, icon: <FaDiscord />, color: "#5865f2", note: "Copy ID" }}
              trailing={copied ? <Check size={18} className="text-brand-green" /> : <Copy size={18} className="social-arrow" />}
            />
          </button>
          <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer">
            <SocialCard featured s={socialLinks[0]} trailing={arrow} />
          </a>
        </div>

        {/* The rest */}
        <div className="grid sm:grid-cols-2 gap-4">
          {socialLinks.slice(1).map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <SocialCard s={link} trailing={arrow} />
            </a>
          ))}
        </div>

        {/* Email */}
        <a
          href="mailto:contact@fabriziogamboa.com"
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-2xl border border-dashed border-white/15 px-4 py-4 text-center text-gray-300 transition hover:border-brand-green/60 hover:text-white"
        >
          <span className="inline-flex items-center gap-2">
            <Mail size={18} /> Prefer email?
          </span>
          <span className="font-semibold text-brand-green break-all">contact@fabriziogamboa.com</span>
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Social;
