import React, { useEffect, useState } from "react";
import { Star, GitFork, AlertTriangle, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

const EXCLUDED_REPOS = ["PixlGalaxy.github.io", "PixlGalaxy"];
const CACHE_KEY = "gh-projects-v1";
const CACHE_TTL = 30 * 60 * 1000; // GitHub allows 60 anonymous requests per hour per visitor

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: { avatar_url: string };
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  languages_url: string;
  open_issues_count: number;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
}

type Languages = { [repoId: number]: { [lang: string]: number } };

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

const timeAgo = (iso: string) => {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
};

const readCache = (): { repos: Repo[]; languages: Languages } | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Date.now() - parsed.at < CACHE_TTL ? parsed.data : null;
  } catch {
    return null;
  }
};

const SkeletonCard = () => (
  <div className="glass-card p-6 animate-pulse">
    <div className="h-6 w-1/2 rounded bg-white/10 mb-3" />
    <div className="h-4 w-full rounded bg-white/5 mb-2" />
    <div className="h-4 w-3/4 rounded bg-white/5 mb-6" />
    <div className="h-2 w-full rounded-full bg-white/10" />
  </div>
);

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<Languages>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setRepos(cached.repos);
      setLanguages(cached.languages);
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/PixlGalaxy/repos?per_page=100&sort=pushed");
        if (!response.ok) throw new Error(`GitHub API ${response.status}`);
        const data: Repo[] = await response.json();
        const filteredRepos = data.filter((repo) => !EXCLUDED_REPOS.includes(repo.name));
        setRepos(filteredRepos);
        setLoading(false);

        // Language breakdowns load afterwards, so the cards appear right away
        const languageData: Languages = {};
        await Promise.all(
          filteredRepos.map(async (repo) => {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) languageData[repo.id] = await langResponse.json();
          })
        );
        setLanguages(languageData);
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: { repos: filteredRepos, languages: languageData } }));
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <title>Fabrizio Gamboa - Projects</title>

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="fixed inset-0 z-0 bg-gray-950/70" />

      <div className="relative z-10 pt-28 sm:pt-36 px-4 md:px-10 lg:px-16">
        <section className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-3">Open source</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-brand-gradient">My GitHub Projects</h1>
        </section>

        {error && (
          <div className="glass-card mx-auto max-w-xl p-6 text-center">
            <AlertTriangle className="mx-auto mb-2 text-yellow-400" />
            <p className="mb-3">GitHub isn&apos;t responding right now (it may be rate limited).</p>
            <a
              href="https://github.com/PixlGalaxy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-green hover:underline"
            >
              See my repositories on GitHub <ExternalLink size={16} />
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
          {loading && Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

          {repos.map((repo) => {
            const repoLanguages = languages[repo.id] || {};
            const totalBytes = Object.values(repoLanguages).reduce((sum, bytes) => sum + bytes, 0);
            const langEntries = Object.entries(repoLanguages).sort((a, b) => b[1] - a[1]);

            return (
              <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card glass-card glass-card-hover group flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-xl font-semibold break-all">{repo.name}</h2>
                    <ExternalLink size={18} className="mt-1 flex-shrink-0 text-gray-500 transition group-hover:text-brand-green" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{repo.description || "No description provided"}</p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {repo.topics.slice(0, 5).map((t) => (
                        <span key={t} className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs text-brand-green">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Language bar, like GitHub's */}
                  <div className="mt-5">
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/10">
                      {langEntries.map(([lang, bytes]) => (
                        <div
                          key={lang}
                          title={`${lang} ${((bytes / totalBytes) * 100).toFixed(1)}%`}
                          style={{ width: `${(bytes / totalBytes) * 100}%`, backgroundColor: languageColors[lang] || languageColors.Other }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                      {langEntries.slice(0, 4).map(([lang, bytes]) => (
                        <span key={lang} className="inline-flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: languageColors[lang] || languageColors.Other }} />
                          {lang} {((bytes / totalBytes) * 100).toFixed(1)}%
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4 text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={14} className="text-blue-400" /> {repo.forks_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <AlertTriangle size={14} className="text-red-400" /> {repo.open_issues_count}
                    </span>
                    <span className="ml-auto">Updated {timeAgo(repo.pushed_at)}</span>
                  </div>
                </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
