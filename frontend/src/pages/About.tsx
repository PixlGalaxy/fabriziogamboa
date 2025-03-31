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

const About: React.FC = () => {
  return (
    <>
      <title>Fabrizio Gamboa - About</title>

      <div className="relative min-h-screen bg-gradient-to-l from-gray-900 to-gray-800">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <ul className="circles absolute top-0 left-0 w-full h-full">
            <li className="bg-yellow-500/50"></li>
            <li className="bg-blue-500/50"></li>
            <li className="bg-red-500/50"></li>
            <li className="bg-green-500/50"></li>
            <li className="bg-indigo-500/50"></li>
            <li className="bg-pink-500/50"></li>
            <li className="bg-purple-500/50"></li>
            <li className="bg-teal-500/50"></li>
            <li className="bg-orange-500/50"></li>
            <li className="bg-cyan-500/50"></li>
          </ul>
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 sm:px-12 pt-24 sm:pt-32 relative z-10 text-white">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">ABOUT</h1>
          </section>

          {/* Fade In Content */}
          <div className="space-y-12">
            {/* Professional Profile Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Professional Profile</h2>
                <p className="text-lg sm:text-xl leading-relaxed">
                  I am a passionate <strong>Computer Scientist</strong> and{" "}
                  <strong>Mechatronic Engineer</strong> with a strong focus on{" "}
                  <strong>Technological Innovation</strong>, <strong>Software Development</strong>, and{" "}
                  <strong>Hardware Design</strong>. My experience includes{" "}
                  <strong>Server Building and Administration</strong>, the creation of <strong>Electronic Products</strong>, and deep involvement in{" "}
                  <strong>Artificial Intelligence (AI)</strong> model development. I am currently working on a project called{" "}
                  <strong>EagleDocs</strong>, which aims to assist FGCU students by providing a personalized AI to help them study.
                </p>
              </section>
            </FadeInSection>

            {/* Education Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Education</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Florida Gulf Coast University (FGCU)</strong> - Bachelor of Computer Science (2024 - Present)
                  </li>
                  <li>
                    <strong>Universidad Peruana de Ciencias Aplicadas (UPC)</strong> - Bachelor of Mechatronic Engineering (2021 - 2023)
                  </li>
                  <li>
                    <strong>Universidad de Ingeniería y Tecnología (UTEC)</strong> - Bachelor of Mechatronic Engineering (2019 - 2020)
                  </li>
                  <li>
                    <strong>Colegio José Quiñones</strong> - Secondary Education (2018)
                  </li>
                  <li>
                    <strong>Colegio Santa María Marianistas</strong> - Secondary Education (2012 - 2017)
                  </li>
                </ul>
              </section>
            </FadeInSection>

            {/* Leadership Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Leadership</h2>
                <ul className="space-y-2">
                    <li>
                        <strong>Leader of 'Mechatronics Club'</strong> (2018) - Restructured the organization of the club and recruited new members, on Canterburry School.
                    </li>
                    <li>
                        <strong>Founder of 'Off-Road Hyenas'</strong> (2020 - Present) - An Off-Road club to organize journeys and off-road tracks, bringing together Peruvian enthusiasts to learn and practice the sport.
                    </li>
                    <li>
                        <strong>Founder of 'Durazzno'</strong> (2020 - Present) - A community for Latin American technology and video games enthusiasts.
                    </li>
                    <li>
                        <strong>Founder of 'Bombastic Club'</strong> (2023 - Present) - A club focused on car enthusiasts.
                    </li>
                </ul>
              </section>
            </FadeInSection>

            {/* Technical Skills Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
                <ul className="space-y-2">
                  <li><strong>Programming Languages</strong>: Python, C#, C++, C, JavaScript, TypeScript, Arduino</li>
                  <li><strong>Frameworks & Libraries</strong>: .NET, React, Node.js, Bootstrap, Tailwind CSS, Qt, PyTorch, TensorFlow, HTML, CSS</li>
                  <li><strong>Operating Systems</strong>: Linux, UnRaid, VMWare, Ubuntu, RedHat, Windows, Kali Linux, Raspberry Pi</li>
                  <li><strong>DevOps & Tools</strong>: Docker, Nginx, Git, SQLite, Cloudflare, PowerShell, VS Code, Visual Studio, UnRaid, Hyper-V, EXSi</li>
                </ul>
              </section>
            </FadeInSection>

            {/* Professional Experience Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Laboratorio Unilene (2019 - 2023)</strong>: Worked in the development and innovation area, improving sterilization machines and participating in process optimization.
                  </li>
                  <li>
                    <strong>FGR Electronics (2015 - 2018)</strong>: Founded my own company, where I designed and fabricated electric bicycles and electric karts for recreational use.
                  </li>
                </ul>
              </section>
            </FadeInSection>

            {/* Credits and License Section */}
            <FadeInSection>
              <section>
                <h2 className="text-3xl font-semibold mb-4">Credits & License</h2>
                <p className="text-lg">
                  This website was created by <strong>PixlGalaxy</strong> and is open-source. 
                  You are free to use, modify, and distribute it, as long as you provide credit 
                  to the original creator <strong>PixlGalaxy</strong> somewhere on your page.
                </p>

                <p className="text-md mt-2">
                  View the full source code: 
                  <a 
                    href="https://github.com/PixlGalaxy/fabriziogamboa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    Here
                  </a>
                </p>

                <p className="text-md mt-2">
                  This project is licensed under the 
                  <strong> Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>. 
                  This means you can share and adapt this work as long as you provide proper credit.
                </p>

                <p className="text-sm mt-4">
                  © {new Date().getFullYear()} PixlGalaxy. All rights reserved.
                </p>
              </section>
            </FadeInSection>

            {/* Footer */}
            <footer className="mt-12 text-gray-400 text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Fabrizio Gamboa | ItzGalaxy.com | All Rights Reserved.</p>
            </footer>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
