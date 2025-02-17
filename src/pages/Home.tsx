import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <title>Fabrizio Gamboa | Home</title>
      <meta name="description" content="Computer Scientist & Mechatronic Engineer | Virtualization, AI, and Programming" />

      {/* Main Container */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center px-6">
        
        {/* Header */}
        <header className="mb-12">
            <link rel="icon" type="image/png" href="/favicon.ico" />
          <h1 className="text-6xl font-extrabold mb-4">Fabrizio Gamboa</h1>
          <h3 className="text-2xl font-medium max-w-2xl">
            Computer Scientist & Mechatronic Engineer | AI, Virtualization, and Software Development.
          </h3>
        </header>

        {/* About Section */}
        <section className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm a passionate **computer scientist** and **mechatronic engineer** with experience in **virtualization, cloud computing, AI, and software development**.
          </p>
          <p className="text-lg">
            I have a strong technical background in **server administration, network configuration, hardware design, and AI model training**.
          </p>
        </section>

        {/* Skills */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="https://skillicons.dev/icons?i=python,cs,cpp,c,arduino" alt="Programming Languages" />
            <img src="https://skillicons.dev/icons?i=dotnet,react,nodejs,tensorflow,pytorch" alt="Frameworks & Libraries" />
            <img src="https://skillicons.dev/icons?i=linux,windows,ubuntu,redhat" alt="Operating Systems" />
            <img src="https://skillicons.dev/icons?i=docker,nginx,git,sqlite,cloudflare" alt="DevOps & Tools" />
          </div>
        </section>

        {/* Work Experience */}
        <section className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
          <ul className="text-lg text-left list-disc space-y-3">
            <li>Designed and built **NAS, SMB, FTPS, HTTPS servers** for businesses and individuals.</li>
            <li>Deep experience in **hardware, server administration, and network infrastructure**.</li>
            <li>Trained **large-scale AI models (LLMs)** for chatbot applications.</li>
            <li>Implemented **virtualization technologies, cloud computing, and web servers (Apache, Flask)**.</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <ul className="text-lg text-left list-disc space-y-3">
            <li><strong>PUCP:</strong> Built Your Own 3D Printer (2015)</li>
            <li><strong>MIT:</strong> 3D Modeling & Design with Maya (2018)</li>
            <li><strong>Anglo Continental:</strong> English Language & Activity Program (2015)</li>
          </ul>
        </section>

        {/* Education */}
        <section className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <ul className="text-lg text-left list-disc space-y-3">
            <li><strong>FGCU (USA)</strong> – B.Sc. in Computer Science (2024 - Present)</li>
            <li><strong>UPC (Peru)</strong> – Mechatronic Engineering (2021 - 2023)</li>
            <li><strong>UTEC (Peru)</strong> – Mechatronic Engineering (2019 - 2020)</li>
          </ul>
        </section>

        {/* Contact & Social Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact & Socials</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="https://fabriziogamboa.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox&logoColor=white" alt="Website" />
            </a>
            <a href="https://linkedin.com/in/fabrizio-gamboa-a606b4161" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/gamboafabrizio/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fabrizio Gamboa | All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
