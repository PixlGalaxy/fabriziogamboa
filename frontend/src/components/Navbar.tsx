import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Icon.svg";
import { Menu, X, ArrowUpRight } from "lucide-react";

type NavItem = { label: string; to: string; external?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Social", to: "/social" },
  { label: "Contact", to: "/contact" },
  { label: "ItzGalaxy", to: "https://itzgalaxy.com", external: true },
  { label: "GitHub", to: "https://github.com/PixlGalaxy", external: true },
];

const linkBase = "relative px-1 py-1 text-sm font-semibold transition-colors";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solid background once the page is scrolled, transparent glass at the top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const renderLink = (item: NavItem, mobile = false) => {
    const cls = mobile ? "navbar-link block text-base font-semibold" : linkBase;
    if (item.external) {
      return (
        <a
          key={item.label}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className={`${cls} inline-flex items-center justify-center gap-0.5 text-gray-400 hover:text-white`}
        >
          {item.label}
          <ArrowUpRight size={14} className="opacity-60" />
        </a>
      );
    }
    return (
      <NavLink
        key={item.label}
        to={item.to}
        end={item.to === "/"}
        onClick={closeMenu}
        className={({ isActive }) =>
          `${cls} ${isActive ? "text-white" : "text-gray-400 hover:text-white"} ${
            !mobile && isActive
              ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-yellow after:to-brand-green"
              : ""
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        scrolled || isMenuOpen
          ? "bg-gray-950/80 border-white/10 backdrop-blur-xl"
          : "bg-transparent border-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Home" onClick={closeMenu}>
              <Logo className="logo w-10 h-10 flex-shrink-0" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">{NAV_ITEMS.map((item) => renderLink(item))}</div>
          </div>

          <div className="flex items-center gap-3">
            {/* Server Status Badge (Only Desktop) */}
            <a
              href="https://onlinestatus.itzgalaxy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
              aria-label="ItzGalaxy Server Status"
              title="ItzGalaxy Server Status"
            >
              <iframe
                src="https://onlinestatus.itzgalaxy.com/badge?theme=dark"
                width="220"
                height="28"
                frameBorder="0"
                scrolling="no"
                style={{ colorScheme: "none", border: "0" }}
                title="ItzGalaxy Server Status"
              />
            </a>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile md:hidden ${isMenuOpen ? "active" : ""}`}>
          <div className="flex flex-col text-center pt-2">
            {NAV_ITEMS.map((item) => renderLink(item, true))}
            {renderLink({ label: "Server Status", to: "https://onlinestatus.itzgalaxy.com", external: true }, true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
