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
      <title>Fabrizio Gamboa - Home</title>
      <meta
        name="description"
        content="Computer Scientist & Mechatronic Engineer | Virtualization, AI, and Programming"
      />

      {/* Main Container */}
      <div className="min-h-screen hero text-white pt-20 sm:pt-20 md:pt-24 lg:pt-32 overflow-x-hidden relative">

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
        <section className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">

          {/* Main Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center md:text-left">
              Hi, I&apos;m
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center md:text-left">
              Fabrizio Gamboa
            </h1>
            <h2 className="text-4xl md:text-4xl font-extrabold mb-4 text-center md:text-left">Also Known As Pixl</h2>
            <h3 className="text-lg md:text-2xl text-center md:text-left max-w-lg leading-relaxed">
              Computer Scientist &amp; Mechatronic Engineer <br/>
              AI, Virtualization, and Software Development.
            </h3>
          </div>

          {/* PFP */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/Galaxy_PFP.png"
              alt="Profile"
              className="w-48 md:w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Fade In Content */}
        <div className="container mx-auto px-4 md:px-12 mt-12 md:mt-16 space-y-12 md:space-y-16 relative z-10">

          {/* About Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-base md:text-lg mb-4">
                I&apos;m a passionate <strong>Computer Scientist</strong> and{" "}
                <strong>Mechatronic Engineer</strong> with experience in{" "}
                <strong>Virtualization, Cloud Computing, AI, and Software Development</strong>.
              </p>
              <p className="text-base md:text-lg">
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
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Programming Languages</h3>
                    <p className="text-base md:text-lg text-gray-200">
                      I typically work with these languages for{" "}
                      <strong>Backend, Embedded, and System Programming</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap justify-center gap-2 md:gap-4 overflow-x-auto py-2">

                    <img
                      src="/Skill_Icons/python.svg"
                      alt="Python"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/cs.svg"
                      alt="C#"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/cpp.svg"
                      alt="C++"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/c.svg"
                      alt="C"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/js.svg"
                      alt="JavaScript"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/ts.svg"
                      alt="TypeScript"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/arduino.svg"
                      alt="Arduino"
                      className="max-w-[280px] md:max-w-none"
                    />

                  </div>
                </div>

                {/* Block 2: Frameworks & Libraries */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Frameworks & Libraries</h3>
                    <p className="text-base md:text-lg text-gray-200">
                      I use these technologies to build{" "}
                      <strong>Modern Web Applications</strong> and work with{" "}
                      <strong>AI Models</strong> efficiently.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap justify-center gap-2 md:gap-4">

                    <img
                      src="/Skill_Icons/dotnet.svg"
                      alt=".NET"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/react.svg"
                      alt="React"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/nodejs.svg"
                      alt="Node.js"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/bootstrap.svg"
                      alt="Bootstrap"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/tailwind.svg"
                      alt="Tailwind CSS"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/qt.svg"
                      alt="Qt"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/pytorch.svg"
                      alt="PyTorch"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/tensorflow.svg"
                      alt="TensorFlow"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/html.svg"
                      alt="HTML"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/css.svg"
                      alt="CSS"
                      className="max-w-[280px] md:max-w-none"
                    />

                  </div>
                </div>
                      
                {/* Block 3: Operating Systems */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Operating Systems</h3>
                    <p className="text-base md:text-lg text-gray-200">
                      I&apos;ve deployed and managed applications on these systems for{" "}
                      <strong>Servers, Virtualization, and Development Environments</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap justify-center gap-2 md:gap-4">
                  
                    <img
                      src="/Skill_Icons/unraid.svg"
                      alt="Linux"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/linux.svg"
                      alt="Linux"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/ubuntu.svg"
                      alt="Ubuntu"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/redhat.svg"
                      alt="Red Hat"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/windows.svg"
                      alt="Windows"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/kali.svg"
                      alt="Kali Linux"
                      className="max-w-[280px] md:max-w-none"
                    />
                    
                    <img
                      src="/Skill_Icons/raspberrypi.svg"
                      alt="Raspberry Pi"
                      className="max-w-[280px] md:max-w-none"
                    />

                  </div>
                </div>

                {/* Block 4: DevOps & Tools */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <div className="md:w-1/2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">DevOps & Tools</h3>
                    <p className="text-base md:text-lg text-gray-200">
                      These are my go-to tools for{" "}
                      <strong>Continuous Integration, Containerization, and Deployment</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-wrap justify-center gap-2 md:gap-4">

                    <img
                      src="/Skill_Icons/docker.svg"
                      alt="Docker"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/nginx.svg"
                      alt="Nginx"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/git.svg"
                      alt="Git"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/sqlite.svg"
                      alt="SQLite"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/cloudflare.svg"
                      alt="Cloudflare"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/powershell.svg"
                      alt="PowerShell"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/vscode.svg"
                      alt="VS Code"
                      className="max-w-[280px] md:max-w-none"
                    />

                    <img
                      src="/Skill_Icons/visualstudio.svg"
                      alt="Visual Studio"
                      className="max-w-[280px] md:max-w-none"
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
              <ul className="text-base md:text-lg text-left list-disc space-y-3 pl-4 md:pl-5">
                <li>
                  Designed and built <strong>NAS, SMB, FTPS, HTTPS servers</strong> for businesses and individuals.
                </li>
                <li>
                  Deep experience in <strong>Hardware, Server Administration, and Network Infrastructure</strong>.
                </li>
                <li>
                  Trained <strong>large-scale AI models (LLMs)</strong> for chatbot applications.
                </li>
                <li>
                  Implemented <strong>Virtualization Technologies, Cloud Computing, and Web Servers (Flask, Express.js)</strong>.
                </li>
              </ul>
            </section>
          </FadeInSection>

          {/* Certifications Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
              <ul className="text-base md:text-lg text-left list-disc space-y-3 pl-4 md:pl-5">
                <li><strong>University of Maryland:</strong> Cybersecurity for Everyone (2023)</li>
                <li><strong>The University of Edinburgh:</strong> An Introduction to Programming (2023)</li>
                <li><strong>University of Minnesota:</strong> Cloud Security Basics (2023)</li>
                <li><strong>MIT:</strong> 3D Modeling &amp; Design with Maya (2018)</li>
                <li><strong>PUCP:</strong> Built Your Own 3D Printer (2015)</li>
                <li><strong>Anglo Continental:</strong> English Language &amp; Activity Program (2015)</li>
              </ul>
            </section>
          </FadeInSection>

          {/* Education Section */}
          <FadeInSection>
            <section>
              <h2 className="text-3xl font-semibold mb-4">Education</h2>
              <ul className="text-base md:text-lg text-left list-disc space-y-3 pl-4 md:pl-5">
                <li><strong>FGCU (USA)</strong> – B.Sc. in Computer Science (2024 - Present)</li>
                <li><strong>UPC (Peru)</strong> – Mechatronic Engineering (2021 - 2023)</li>
                <li><strong>UTEC (Peru)</strong> – Mechatronic Engineering (2019 - 2020)</li>
              </ul>
            </section>
          </FadeInSection>

          {/* Footer */}
          <footer className="mt-12 text-gray-400 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Fabrizio Gamboa | ItzGalaxy.com | All Rights Reserved.</p>
          </footer>

        </div>
      </div>
    </>
  );
};

export default Home;