import React, { useEffect, useState } from "react";
import { Star, GitFork, AlertTriangle, Loader2 } from "lucide-react";

const EXCLUDED_REPOS = ["PixlGalaxy.github.io", "PixlGalaxy"];

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: { avatar_url: string };
  open_graph_image_url: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string;
  languages_url: string;
  open_issues_count: number;
}

const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Kotlin: "#F18E33",
  Swift: "#ffac45",
  Ruby: "#701516",
  Dockerfile: "#384d54",
  Other: "#ccc",
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<{ [key: number]: { [lang: string]: number } }>({});
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/PixlGalaxy/repos");
        const data = await response.json();
        const filteredRepos = data.filter((repo: Repo) => !EXCLUDED_REPOS.includes(repo.name));
        setRepos(filteredRepos);

        const languageData: { [key: number]: { [lang: string]: number } } = {};
        await Promise.all(
          filteredRepos.map(async (repo: Repo) => {
            const langResponse = await fetch(repo.languages_url);
            const langData = await langResponse.json();
            languageData[repo.id] = langData;
          })
        );

        setLanguages(languageData);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();

    // Simulates Fetching Data For 3 Seconds
    const delay = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  if (!showContent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loader2 size={50} className="animate-spin text-blue-500 mb-4" />
        <p className="text-lg font-semibold">Fetching Data...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <title>Fabrizio Gamboa - Projects</title>

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="relative z-10 text-center pt-24 px-4 md:px-10 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">My GitHub Projects</h1>

        {loading && (
          <div className="flex flex-col items-center justify-center text-gray-300 text-lg mt-4">
            <Loader2 size={24} className="animate-spin mr-2 text-blue-500" />
            <span>Loading projects...</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl mx-auto p-2 sm:p-5">
          {repos.map((repo) => {
            const repoLanguages = languages[repo.id] || {};
            const totalBytes = Object.values(repoLanguages).reduce((sum, bytes) => sum + bytes, 0);

            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-4 sm:p-6 transition transform hover:scale-105 hover:shadow-lg flex flex-col"
              >
                {repo.open_graph_image_url ? (
                  <img
                    src={repo.open_graph_image_url}
                    alt={repo.name}
                    className="w-full h-40 sm:h-56 object-cover rounded-md mb-3"
                  />
                ) : (
                  <img
                    src={repo.owner.avatar_url}
                    alt={repo.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 mx-auto"
                  />
                )}

                <h2 className="text-lg sm:text-2xl font-semibold text-center">{repo.name}</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1 text-center">
                  {repo.description || "No description provided"}
                </p>

                <div className="flex justify-around text-xs sm:text-sm text-gray-300 mt-3">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork size={16} className="text-blue-400" />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertTriangle size={16} className="text-red-400" />
                    <span>{repo.open_issues_count} Issues</span>
                  </div>
                </div>

                <div className="mt-3">
                  {Object.entries(repoLanguages).map(([lang, bytes]) => {
                    const percentage = ((bytes / totalBytes) * 100).toFixed(2);
                    return (
                      <div key={lang} className="flex items-center mb-1">
                        <span className="text-xs sm:text-sm text-gray-300 w-16 sm:w-20">{lang}</span>
                        <div className="w-full h-3 sm:h-5 bg-gray-700 rounded-md overflow-hidden">
                          <div
                            className="h-full"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: languageColors[lang] || languageColors["Other"],
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>

        <footer className="mt-12 text-white-400 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Fabrizio Gamboa | ItzGalaxy.com | All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
