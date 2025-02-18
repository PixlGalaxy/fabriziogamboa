import React, { useEffect, useState } from "react";

// Lista de repositorios a excluir
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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/PixlGalaxy/repos");
        const data = await response.json();

        // Filtrar repositorios excluidos
        const filteredRepos = data.filter((repo: Repo) => !EXCLUDED_REPOS.includes(repo.name));
        setRepos(filteredRepos);

        // Obtener lenguajes para cada repo
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
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Sliding Diagonals */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* Content */}
      <div className="relative z-10 text-center pt-24 px-4 md:px-10 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">My GitHub Projects</h1>

        {/* Loading State */}
        {loading && <p className="text-lg">Loading projects...</p>}

        {/* Projects Grid (UNA COLUMNA MÁS ANCHA) */}
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
                {/* Image */}
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

                {/* Repo Info */}
                <h2 className="text-lg sm:text-2xl font-semibold text-center">{repo.name}</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1 text-center">
                  {repo.description || "No description provided"}
                </p>

                {/* Repo Stats */}
                <div className="flex justify-around text-xs sm:text-sm text-gray-300 mt-3">
                  <div className="flex items-center">
                    ⭐ <span className="ml-1">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center">
                    🔀 <span className="ml-1">{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center">
                    ❗ <span className="ml-1">{repo.open_issues_count} Issues</span>
                  </div>
                </div>

                {/* Languages Bar */}
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

        {/* Language Legend */}
        <div className="mt-6 w-full max-w-4xl mx-auto p-3 sm:p-5">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-left">Languages:</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {Object.entries(languageColors).map(([lang, color]) => (
              <div key={lang} className="flex items-center space-x-1 sm:space-x-2">
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: color }}></span>
                <span className="text-xs sm:text-sm text-gray-300">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
