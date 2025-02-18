import React, { useRef, useEffect, useState } from "react";

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const elementRef = domRef.current;
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <title>Fabrizio Gamboa | Home</title>
      <meta
        name="description"
        content="Computer Scientist & Mechatronic Engineer | Virtualization, AI, and Programming"
      />

      {/* Main Container */}
      <div className="min-h-screen hero text-white pt-20 overflow-x-hidden relative">

        {/* Cubes Container */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ height: "100%" }}>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>

        {/* HERO Section */}
        <section className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">

          {/* Main Text */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-left">
              Hi, I&apos;m
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-left">
              Fabrizio Gamboa
            </h1>
            <h3 className="text-xl md:text-2xl text-left max-w-lg leading-relaxed">
              Computer Scientist &amp; Mechatronic Engineer <br />
              AI, Virtualization, and Software Development.
            </h3>
          </div>

          {/* PFP */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/Galaxy_PFP.png"
              alt="Profile or Hero"
              className="w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Fade In Content */}
        <div className="container mx-auto px-6 md:px-12 mt-16 space-y-16 relative z-10">

          {/* About Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-lg mb-4">
                I&apos;m a passionate <strong>Computer Scientist</strong> and{" "}
                <strong>Mechatronic Engineer</strong> with experience in{" "}
                <strong>Virtualization, Cloud Computing, AI, and Software Development</strong>.
              </p>
              <p className="text-lg">
                I have a strong technical background in{" "}
                <strong>Server Administration, Coding, Network Configuration, and Hardware Design</strong>.
              </p>
            </section>
          </FadeInSection>

          {/* Skills & Technologies Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-6">Skills & Technologies</h2>
              <div className="space-y-12">

                {/* Block 1: Programming Languages */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 text-left">
                    <h3 className="text-2xl font-semibold mb-2">Programming Languages</h3>
                    <p className="text-lg text-gray-200">
                      I typically work with these languages for{" "}
                      <strong>backend, embedded, and system programming</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap gap-4">
                    <img
                      src="https://skillicons.dev/icons?i=python,cs,cpp,c,js,ts,arduino"
                      alt="Programming Languages"
                    />
                  </div>
                </div>

                {/* Block 2: Frameworks & Libraries */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 text-left order-2 md:order-1">
                    <h3 className="text-2xl font-semibold mb-2">Frameworks &amp; Libraries</h3>
                    <p className="text-lg text-gray-200">
                      I use these technologies to build{" "}
                      <strong>Modern Web Applications</strong> and work with{" "}
                      <strong>AI models</strong> efficiently.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap gap-4 order-1 md:order-2">
                    <img
                      src="https://skillicons.dev/icons?i=dotnet,react,nodejs,bootstrap,tailwind,qt,pytorch,tensorflow,html,css"
                      alt="Frameworks & Libraries"
                    />
                  </div>
                </div>

                {/* Block 3: Operating Systems */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 text-left">
                    <h3 className="text-2xl font-semibold mb-2">Operating Systems</h3>
                    <p className="text-lg text-gray-200">
                      I&apos;ve deployed and managed applications on these systems for{" "}
                      <strong>Servers, Virtualization, and Development Environments</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap gap-4">
                    <img
                      src="https://skillicons.dev/icons?i=linux,ubuntu,redhat,windows,kali,raspberrypi"
                      alt="Operating Systems"
                    />
                  </div>
                </div>

                {/* Block 4: DevOps & Tools */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 text-left order-2 md:order-1">
                    <h3 className="text-2xl font-semibold mb-2">DevOps &amp; Tools</h3>
                    <p className="text-lg text-gray-200">
                      These are my go-to tools for{" "}
                      <strong>Continuous Integration, Containerization, and Deployment</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap gap-4 order-1 md:order-2">
                    <img
                      src="https://skillicons.dev/icons?i=docker,nginx,git,sqlite,cloudflare,powershell,vscode,visualstudio"
                      alt="DevOps & Tools"
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Work Experience Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
              <ul className="text-lg text-left list-disc space-y-3 pl-5">
                <li>
                  Designed and built <strong>NAS, SMB, FTPS, HTTPS servers</strong> for businesses and individuals.
                </li>
                <li>
                  Deep experience in <strong>hardware, server administration, and network infrastructure</strong>.
                </li>
                <li>
                  Trained <strong>large-scale AI models (LLMs)</strong> for chatbot applications.
                </li>
                <li>
                  Implemented <strong>virtualization technologies, cloud computing, and web servers (Apache, Flask)</strong>.
                </li>
              </ul>
            </section>
          </FadeInSection>

          {/* Certifications Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
              <ul className="text-lg text-left list-disc space-y-3 pl-5">
                <li><strong>PUCP:</strong> Built Your Own 3D Printer (2015)</li>
                <li><strong>MIT:</strong> 3D Modeling &amp; Design with Maya (2018)</li>
                <li><strong>Anglo Continental:</strong> English Language &amp; Activity Program (2015)</li>
              </ul>
            </section>
          </FadeInSection>

          {/* Education Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              <ul className="text-lg text-left list-disc space-y-3 pl-5">
                <li><strong>FGCU (USA)</strong> – B.Sc. in Computer Science (2024 - Present)</li>
                <li><strong>UPC (Peru)</strong> – Mechatronic Engineering (2021 - 2023)</li>
                <li><strong>UTEC (Peru)</strong> – Mechatronic Engineering (2019 - 2020)</li>
              </ul>
            </section>
          </FadeInSection>

          {/* Contact & Socials Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Contact &amp; Socials</h2>
              <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                <a href="https://fabriziogamboa.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox&logoColor=white"
                    alt="Website"
                  />
                </a>
                <a href="https://linkedin.com/in/fabrizio-gamboa-a606b4161" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://www.instagram.com/gamboafabrizio/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=Instagram&logoColor=white"
                    alt="Instagram"
                  />
                </a>
              </div>
            </section>
          </FadeInSection>

          {/* Footer */}
          <footer className="mt-12 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fabrizio Gamboa | ItzGalaxy.com | All Rights Reserved.</p>
          </footer>

        </div>
      </div>
    </>
  );
};

export default Home;
