import React, { useState } from "react";
import { CheckCircle, AlertTriangle, Loader2, Mail, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const inputClass =
  "w-full mt-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 transition focus:outline-none focus:border-brand-green/60 focus:ring-4 focus:ring-brand-green/15";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: string; message: string }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/backend/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else if (response.status === 429) {
        setStatus({ type: "warning", message: "Your message has already been registered. Try again later." });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again later." });
      }
    } catch {
      setStatus({ type: "error", message: "An unexpected error occurred. Please try again." });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
      <title>Fabrizio Gamboa - Contact</title>

      {/* Background Effect */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="fixed inset-0 z-0 bg-gray-950/70" />

      <div className="relative z-10 flex-1 container mx-auto px-4 pt-24 sm:pt-28 pb-10">
        <section className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-2">Let&apos;s talk</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-gradient">Contact Me</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">
            Have questions or feedback? Fill out the form below, and I&apos;ll get back to you as soon as possible.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8 lg:col-span-2">
            {/* Status Message with Icons */}
            {status.message && (
              <div
                role="status"
                className={`flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl mb-6 border ${
                  status.type === "success"
                    ? "bg-green-500/15 border-green-500/40 text-green-300"
                    : status.type === "warning"
                    ? "bg-yellow-500/15 border-yellow-500/40 text-yellow-200"
                    : "bg-red-500/15 border-red-500/40 text-red-300"
                }`}
              >
                {status.type === "success" ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block text-sm font-semibold text-gray-300">
                  Name
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" autoComplete="name" className={inputClass} />
                </label>
                <label className="block text-sm font-semibold text-gray-300">
                  Email
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" autoComplete="email" className={inputClass} />
                </label>
              </div>

              <label className="block text-sm font-semibold text-gray-300">
                Message
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="What would you like to talk about?" className={`${inputClass} resize-y`} />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-gray-950 bg-gradient-to-r from-brand-yellow to-brand-green shadow-lg shadow-brand-green/20 transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <Mail className="text-brand-green mb-3" />
              <h2 className="text-xl font-semibold mb-1">Email</h2>
              <a href="mailto:contact@fabriziogamboa.com" className="text-gray-300 hover:text-white break-all">
                contact@fabriziogamboa.com
              </a>
            </div>
            <div className="glass-card p-6">
              <MessageSquare className="text-brand-yellow mb-3" />
              <h2 className="text-xl font-semibold mb-1">Social</h2>
              <p className="text-gray-400 mb-3">Prefer Discord, LinkedIn or Telegram?</p>
              <Link to="/social" className="font-semibold text-brand-green hover:underline">
                See all my networks →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-0" />
    </div>
  );
};

export default Contact;
