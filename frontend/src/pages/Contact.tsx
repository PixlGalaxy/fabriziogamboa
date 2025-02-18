import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
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
      } else {
        setStatus({ type: "error", message: "Failed to send message. Try again later." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Effect */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* Contact Form Container */}
      <div className="relative z-10 w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6 md:p-10 mt-24 mx-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 text-center mb-6">
          Have questions or feedback? Fill out the form below, and I'll get back to you as soon as possible.
        </p>

        {/* Status Message */}
        {status.message && (
          <div
            className={`text-center text-lg font-semibold p-3 rounded-lg mb-4 ${
              status.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-lg font-semibold transition ${
              isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Additional Contact Info */}
      <div className="relative z-10 max-w-4xl bg-gray-800 shadow-lg rounded-lg p-6 mt-6 mx-4 w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Other Ways To Reach Me</h2>
        <p className="text-lg text-gray-300 text-center mb-4">
            Email:{" "}
          <a href="mailto:business.fabrizio.gamboa.p@gmail.com" className="text-blue-400 hover:underline">
            business.fabrizio.gamboa.p@gmail.com
          </a>
        </p>
        </div>
      </div>
  );
};

export default Contact;
