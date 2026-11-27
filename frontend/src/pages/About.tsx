import React from "react";
import { ExternalLink, FileText, Award, Users, Building2, Code2, Briefcase, GraduationCap, Scale } from "lucide-react";
import FadeInSection from "../components/FadeInSection";
import Footer from "../components/Footer";

const CV = "https://webincloud.itzgalaxy.com/backend/api/public/fabriziogamboa/FabrizioGamboaP/CV%20DOCUMENTS/";
const cvFile = (name: string) => `${CV}${encodeURIComponent(name)}/download?inline=1&path=`;
const RESUME_URL = cvFile("FabrizioGamboa Resume.pdf");

const CERTIFICATIONS: { org: string; name: string; year: string; url: string }[] = [
  { org: "Codecademy", name: "Working with Containers: Docker", year: "2025", url: cvFile("Introduction to Docker Course Codecademy.pdf") },
  { org: "Codecademy", name: "Python 3", year: "2025", url: cvFile("Learn Python 3 Course Codecademy.pdf") },
  { org: "Codecademy", name: "Implementing Google Compute Engine Course", year: "2025", url: cvFile("Google Associate Cloud Engineer Codecademy.pdf") },
  { org: "Codecademy", name: "BI Dashboards with Power BI", year: "2025", url: cvFile("BI Dashboards with Power BI Course Codecademy.pdf") },
  { org: "Codecademy", name: "Intro to AI Transformers", year: "2025", url: cvFile("Intro to AI Transformers Codecademy.pdf") },
  { org: "University of Maryland", name: "Cybersecurity for Everyone", year: "2023", url: "https://www.coursera.org/account/accomplishments/certificate/CU3U8R8HNXYY" },
  { org: "The University of Edinburgh", name: "An Introduction to Programming", year: "2023", url: "https://www.coursera.org/account/accomplishments/certificate/FBBPTTW9EG85" },
  { org: "University of Minnesota", name: "Cloud Security Basics", year: "2023", url: "https://www.coursera.org/account/accomplishments/certificate/WN5FJN46R6HT" },
  { org: "MIT", name: "3D Modeling & Design with Maya", year: "2018", url: cvFile("MIT ID TECH CAMP DIPLOMA.pdf") },
  { org: "PUCP", name: "Build Your Own 3D Printer", year: "2015", url: cvFile("PUCP 3D PRINTER.pdf") },
  { org: "Anglo Continental", name: "English Language & Activity Program", year: "2015", url: cvFile("Certificate of studies anglo continental.pdf") },
];

const EDUCATION: [string, string, string][] = [
  ["Florida Gulf Coast University (FGCU)", "Bachelor of Computer Science", "2024 - Present"],
  ["Universidad Peruana de Ciencias Aplicadas (UPC)", "Bachelor of Mechatronic Engineering", "2021 - 2023"],
  ["Universidad de Ingeniería y Tecnología (UTEC)", "Bachelor of Mechatronic Engineering", "2019 - 2020"],
  ["Colegio José Quiñones", "Secondary Education", "2018"],
  ["Colegio Santa María Marianistas", "Secondary Education", "2012 - 2017"],
];

const EXPERIENCE: [string, string, string][] = [
  ["Unilene Laboratory", "2022 - Present", "Member of the board of directors, contributing to the company’s strategic planning and overall management."],
  ["Unilene Laboratory", "2019 - 2023", "Worked in the development and innovation area, improving sterilization machines and participating in process optimization."],
  ["FGR Electronics", "2015 - 2018", "Founded my own company, where I designed and fabricated electric bicycles and electric karts for recreational use."],
];

const LEADERSHIP: [string, string, string][] = [
  ["Leader of 'Mechatronics Club'", "2018", "Restructured the organization of the club and recruited new members, on Canterburry School."],
  ["Founder of 'Off-Road Hyenas'", "2020 - Present", "An Off-Road club to organize journeys and off-road tracks, bringing together Peruvian enthusiasts to learn and practice the sport."],
  ["Founder of 'Durazzno'", "2020 - Present", "A community for Latin American technology and video games enthusiasts."],
  ["Founder of 'Bombastic Club'", "2023 - Present", "A club focused on car enthusiasts."],
];

const SKILLS: [string, string][] = [
  ["Programming Languages", "Python, C#, C++, C, JavaScript, TypeScript, Arduino"],
  ["Frameworks & Libraries", ".NET, React, Node.js, Bootstrap, Tailwind CSS, Qt, PyTorch, TensorFlow, HTML, CSS"],
  ["Operating Systems", "Linux, UnRaid, VMWare, Ubuntu, RedHat, Windows, Kali Linux, Raspberry Pi"],
  ["DevOps & Tools", "Docker, Nginx, Git, SQLite, Cloudflare, PowerShell, VS Code, Visual Studio, UnRaid, Hyper-V, EXSi"],
];

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold mb-6">
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-yellow/20 to-brand-green/20 text-brand-green ring-1 ring-white/10">
      {icon}
    </span>
    {title}
  </h2>
);

/** Vertical timeline used by Education, Experience and Leadership */
const Timeline: React.FC<{ items: [string, string, string][] }> = ({ items }) => (
  <ol className="relative border-l border-white/10 ml-2 space-y-6">
    {items.map(([title, date, text], i) => (
      <li key={i} className="pl-6 relative">
        <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-brand-green ring-4 ring-brand-green/15" />
        <p className="text-xs uppercase tracking-wider text-gray-500">{date}</p>
        <p className="font-semibold text-white">{title}</p>
        {text && <p className="text-gray-400 leading-relaxed">{text}</p>}
      </li>
    ))}
  </ol>
);

const About: React.FC = () => {
  return (
    <>
      <title>Fabrizio Gamboa - About</title>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-60">
          <ul className="circles absolute top-0 left-0 w-full h-full">
            <li className="bg-yellow-500/40"></li>
            <li className="bg-blue-500/40"></li>
            <li className="bg-red-500/40"></li>
            <li className="bg-green-500/40"></li>
            <li className="bg-indigo-500/40"></li>
            <li className="bg-pink-500/40"></li>
            <li className="bg-purple-500/40"></li>
            <li className="bg-teal-500/40"></li>
            <li className="bg-orange-500/40"></li>
            <li className="bg-cyan-500/40"></li>
          </ul>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 sm:px-12 pt-28 sm:pt-36 relative z-10 text-white">
          {/* Hero Section */}
          <section className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Get to know me</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-brand-gradient">About</h1>
          </section>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Professional Profile Section */}
            <FadeInSection>
              <section className="glass-card p-6 md:p-10">
                <SectionHeader icon={<Users size={20} />} title="Professional Profile" />
                <p className="text-lg leading-relaxed text-gray-300">
                  I am a passionate <strong className="text-white">Computer Scientist</strong> and{" "}
                  <strong className="text-white">Mechatronic Engineer</strong> with a strong focus on{" "}
                  <strong className="text-white">Technological Innovation</strong>, <strong className="text-white">Software Development</strong>, and{" "}
                  <strong className="text-white">Hardware Design</strong>. My experience includes{" "}
                  <strong className="text-white">Server Building and Administration</strong>, the creation of{" "}
                  <strong className="text-white">Electronic Products</strong>, and deep involvement in{" "}
                  <strong className="text-white">Artificial Intelligence (AI)</strong> model development. I am currently working on a project called{" "}
                  <strong className="text-white">EagleDocs</strong>, which aims to assist FGCU students by providing a personalized AI to help them study.
                </p>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-green px-5 py-2.5 font-semibold text-gray-950 transition hover:brightness-110"
                >
                  <FileText size={18} /> View My Resume
                </a>
              </section>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Section */}
              <FadeInSection>
                <section className="glass-card p-6 md:p-8 h-full">
                  <SectionHeader icon={<GraduationCap size={20} />} title="Education" />
                  <Timeline items={EDUCATION.map(([school, degree, years]) => [school, years, degree])} />
                </section>
              </FadeInSection>

              {/* Professional Experience Section */}
              <FadeInSection delay={80}>
                <section className="glass-card p-6 md:p-8 h-full">
                  <SectionHeader icon={<Briefcase size={20} />} title="Professional Experience" />
                  <Timeline items={EXPERIENCE} />
                </section>
              </FadeInSection>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Leadership Section */}
              <FadeInSection>
                <section className="glass-card p-6 md:p-8 h-full">
                  <SectionHeader icon={<Users size={20} />} title="Leadership" />
                  <Timeline items={LEADERSHIP} />
                </section>
              </FadeInSection>

              <div className="space-y-8">
                {/* Organizations Section */}
                <FadeInSection delay={80}>
                  <section className="glass-card p-6 md:p-8">
                    <SectionHeader icon={<Building2 size={20} />} title="Organizations" />
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">Member of </strong>
                      <a href="https://stegripe.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-green hover:underline">
                        'Stegripe Development'
                      </a>{" "}
                      (2025–Present) – Developer on{" "}
                      <a href="https://github.com/stegripe/rawon" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-green hover:underline">
                        Rawon
                      </a>{" "}
                      (Discord Music and Management bot).
                    </p>
                  </section>
                </FadeInSection>

                {/* Technical Skills Section */}
                <FadeInSection delay={120}>
                  <section className="glass-card p-6 md:p-8">
                    <SectionHeader icon={<Code2 size={20} />} title="Technical Skills" />
                    <div className="space-y-4">
                      {SKILLS.map(([group, list]) => (
                        <div key={group}>
                          <p className="text-sm font-semibold text-white mb-2">{group}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {list.split(", ").map((s) => (
                              <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-gray-300">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </FadeInSection>
              </div>
            </div>

            {/* Certifications Section */}
            <FadeInSection>
              <section className="glass-card p-6 md:p-10">
                <SectionHeader icon={<Award size={20} />} title="Certifications" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {CERTIFICATIONS.map((c) => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-brand-green/40 hover:bg-white/[0.06]"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          {c.org} · {c.year}
                        </p>
                        <p className="font-semibold text-white">{c.name}</p>
                      </div>
                      <span className="flex flex-shrink-0 items-center gap-1 text-sm font-semibold text-brand-green">
                        Certificate <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </FadeInSection>

            {/* Credits and License Section */}
            <FadeInSection>
              <section className="glass-card p-6 md:p-10">
                <SectionHeader icon={<Scale size={20} />} title="Credits & License" />
                <p className="text-gray-300 leading-relaxed">
                  This website was created by <strong className="text-white">PixlGalaxy</strong> and is open-source. You are free to use, modify, and
                  distribute it, as long as you provide credit to the original creator <strong className="text-white">PixlGalaxy</strong> somewhere on
                  your page.
                </p>
                <p className="mt-3 text-gray-300">
                  View the full source code:
                  <a
                    href="https://github.com/PixlGalaxy/fabriziogamboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green hover:underline ml-1"
                  >
                    Here
                  </a>
                </p>
                <p className="mt-3 text-gray-300">
                  This project is licensed under the
                  <strong className="text-white"> Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>. This means you can share and adapt
                  this work as long as you provide proper credit.
                </p>
                <p className="text-sm mt-4 text-gray-500">© {new Date().getFullYear()} PixlGalaxy. All rights reserved.</p>
              </section>
            </FadeInSection>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
