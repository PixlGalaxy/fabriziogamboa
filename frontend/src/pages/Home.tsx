import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, Briefcase, Award, GraduationCap } from "lucide-react";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";

const RESUME_URL =
  "https://webincloud.itzgalaxy.com/backend/api/public/fabriziogamboa/FabrizioGamboaP/CV%20DOCUMENTS/FabrizioGamboa%20Resume.pdf/download?inline=1&path=";

type Skill = { icon: string; name: string };
type SkillGroup = { title: string; text: React.ReactNode; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Programming Languages",
    text: (
      <>
        I typically work with these languages for <strong>Backend, Embedded, and System Programming</strong>.
      </>
    ),
    skills: [
      { icon: "python", name: "Python" },
      { icon: "cs", name: "C#" },
      { icon: "cpp", name: "C++" },
      { icon: "c", name: "C" },
      { icon: "js", name: "JavaScript" },
      { icon: "ts", name: "TypeScript" },
      { icon: "arduino", name: "Arduino" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    text: (
      <>
        I use these technologies to build <strong>Modern Web Applications</strong> and work with{" "}
        <strong>AI Models</strong> efficiently.
      </>
    ),
    skills: [
      { icon: "dotnet", name: ".NET" },
      { icon: "react", name: "React" },
      { icon: "nodejs", name: "Node.js" },
      { icon: "bootstrap", name: "Bootstrap" },
      { icon: "tailwind", name: "Tailwind CSS" },
      { icon: "qt", name: "Qt" },
      { icon: "pytorch", name: "PyTorch" },
      { icon: "tensorflow", name: "TensorFlow" },
      { icon: "html", name: "HTML" },
      { icon: "css", name: "CSS" },
    ],
  },
  {
    title: "Operating Systems",
    text: (
      <>
        I&apos;ve deployed and managed applications on these systems for{" "}
        <strong>Servers, Virtualization, and Development Environments</strong>.
      </>
    ),
    skills: [
      { icon: "unraid", name: "Unraid" },
      { icon: "linux", name: "Linux" },
      { icon: "ubuntu", name: "Ubuntu" },
      { icon: "redhat", name: "Red Hat" },
      { icon: "windows", name: "Windows" },
      { icon: "kali", name: "Kali Linux" },
      { icon: "raspberrypi", name: "Raspberry Pi" },
    ],
  },
  {
    title: "DevOps & Tools",
    text: (
      <>
        These are my go-to tools for <strong>Continuous Integration, Containerization, and Deployment</strong>.
      </>
    ),
    skills: [
      { icon: "docker", name: "Docker" },
      { icon: "nginx", name: "Nginx" },
      { icon: "git", name: "Git" },
      { icon: "sqlite", name: "SQLite" },
      { icon: "cloudflare", name: "Cloudflare" },
      { icon: "powershell", name: "PowerShell" },
      { icon: "vscode", name: "VS Code" },
      { icon: "visualstudio", name: "Visual Studio" },
    ],
  },
];

const CERTIFICATIONS: [string, string][] = [
  ["Codecademy", "Working with Containers: Docker (2025)"],
  ["Codecademy", "Python 3 (2025)"],
  ["Codecademy", "Implementing Google Compute Engine Course (2025)"],
  ["Codecademy", "BI Dashboards with Power BI (2025)"],
  ["Codecademy", "Intro to AI Transformers (2025)"],
  ["University of Maryland", "Cybersecurity for Everyone (2023)"],
  ["The University of Edinburgh", "An Introduction to Programming (2023)"],
  ["University of Minnesota", "Cloud Security Basics (2023)"],
  ["MIT", "3D Modeling & Design with Maya (2018)"],
  ["PUCP", "Build Your Own 3D Printer (2015)"],
  ["Anglo Continental", "English Language & Activity Program (2015)"],
];

const EDUCATION: [string, string, string][] = [
  ["FGCU (USA)", "B.Sc. in Computer Science", "2024 - Present"],
  ["UPC (Peru)", "Mechatronic Engineering", "2021 - 2023"],
  ["UTEC (Peru)", "Mechatronic Engineering", "2019 - 2020"],
];

const Home: React.FC = () => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/Galaxy_PFP.gif";

    const timer = setTimeout(() => setShowGif(true), 5000);
    img.onload = () => {
      clearTimeout(timer);
      setShowGif(true);
    };

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <title>Fabrizio Gamboa - Home</title>
      <meta
        name="description"
        content="Computer Scientist & Mechatronic Engineer | Virtualization, AI, and Programming"
      />

      {/* Main Container */}
      <div className="min-h-screen hero text-white overflow-x-hidden relative">
        {/* Cubes Container */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ height: "100%" }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="cube"></div>
          ))}
        </div>

        {/* Soft brand glow behind the hero */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-green/10 blur-[120px] z-0" />

        {/* HERO Section */}
        <section className="container mx-auto px-4 md:px-12 min-h-[92vh] pt-28 pb-16 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 relative z-10">
          {/* Main Text */}
          <div className="md:w-3/5 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur mb-6">
              Also Known As <strong className="text-white">Pixl</strong>
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Hi, I&apos;m <br />
              <span className="text-brand-gradient">Fabrizio Gamboa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
              Computer Scientist &amp; Mechatronic Engineer focused on{" "}
              <span className="text-white font-medium">AI, Virtualization, and Software Development</span>.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-green px-6 py-3 font-semibold text-gray-950 shadow-lg shadow-brand-green/20 transition hover:brightness-110"
              >
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                <FileText size={18} />
                Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                <Mail size={18} />
                Contact
              </Link>
            </div>
          </div>

          {/* PFP */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <img
              src={showGif ? "/Galaxy_PFP.gif" : "/Galaxy_PFP.png"}
              alt="Pixl, Fabrizio's avatar"
              className="block w-52 md:w-[300px] h-auto object-cover rounded-3xl border border-white/10 shadow-2xl shadow-black/60"
            />
          </div>
        </section>

        {/* Fade In Content */}
        <div className="container mx-auto px-4 md:px-12 space-y-10 md:space-y-14 relative z-10">
          {/* About Section */}
          <FadeInSection>
            <section className="glass-card p-6 md:p-10">
              <h2 className="section-title text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-3">
                I&apos;m a passionate <strong className="text-white">Computer Scientist</strong> and{" "}
                <strong className="text-white">Mechatronic Engineer</strong> with experience in{" "}
                <strong className="text-white">Virtualization, Cloud Computing, AI, and Software Development</strong>.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I have a strong technical background in{" "}
                <strong className="text-white">Server Administration, Coding, Network Configuration, and Hardware Design</strong>.
              </p>
            </section>
          </FadeInSection>

          {/* Skills & Technologies Section */}
          <FadeInSection>
          <section className="glass-card p-6 md:p-10">
            <h2 className="section-title text-2xl md:text-3xl font-semibold mb-6">Skills &amp; Technologies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <div className="h-full rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-colors hover:border-brand-green/40">
                    <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-5">{group.text}</p>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="group relative" title={skill.name}>
                          <img
                            src={`/Skill_Icons/${skill.icon}.svg`}
                            alt={skill.name}
                            className="h-12 w-12 rounded-xl transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
                          />
                          <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-950 px-2 py-0.5 text-xs text-gray-200 opacity-0 transition-opacity group-hover:opacity-100 z-20">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          </FadeInSection>

          {/* Work Experience Section */}
          <FadeInSection>
            <section className="glass-card p-6 md:p-10">
              <h2 className="section-title text-2xl md:text-3xl font-semibold mb-6">Work Experience</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  <>Designed and built <strong className="text-white">NAS, SMB, FTPS, HTTPS servers</strong> for businesses and individuals.</>,
                  <>Deep experience in <strong className="text-white">Hardware, Server Administration, and Network Infrastructure</strong>.</>,
                  <>Trained <strong className="text-white">large-scale AI models (LLMs)</strong> for chatbot applications.</>,
                  <>Implemented <strong className="text-white">Virtualization Technologies, Cloud Computing, and Web Servers (Flask, Express.js)</strong>.</>,
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-4 text-gray-300">
                    <Briefcase size={20} className="mt-0.5 flex-shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInSection>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Certifications Section */}
            <FadeInSection className="lg:col-span-3">
              <section className="glass-card p-6 md:p-10 h-full">
                <h2 className="section-title text-2xl md:text-3xl font-semibold mb-6">Certifications</h2>
                <ul className="space-y-3">
                  {CERTIFICATIONS.map(([org, name]) => (
                    <li key={name} className="flex gap-3 text-gray-300">
                      <Award size={18} className="mt-1 flex-shrink-0 text-brand-yellow" />
                      <span>
                        <strong className="text-white">{org}:</strong> {name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:underline">
                  See certificates <ArrowRight size={16} />
                </Link>
              </section>
            </FadeInSection>

            {/* Education Section */}
            <FadeInSection className="lg:col-span-2">
              <section className="glass-card p-6 md:p-10 h-full">
                <h2 className="section-title text-2xl md:text-3xl font-semibold mb-6">Education</h2>
                <ol className="relative border-l border-white/10 ml-2 space-y-6">
                  {EDUCATION.map(([school, degree, years]) => (
                    <li key={school} className="pl-6 relative">
                      <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-950 ring-2 ring-brand-green" />
                      <p className="text-xs uppercase tracking-wider text-gray-500">{years}</p>
                      <p className="font-semibold text-white flex items-center gap-2">
                        <GraduationCap size={16} className="text-brand-cyan" /> {school}
                      </p>
                      <p className="text-gray-400">{degree}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </FadeInSection>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
