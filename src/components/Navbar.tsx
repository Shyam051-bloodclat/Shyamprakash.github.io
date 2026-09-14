import React, { useEffect, useState } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -70; // offset for sticky navbar
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#090d16]/50 backdrop-blur-sm border-b border-slate-800/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="navbar-brand-link"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Shyamprakash K
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/80">
              AI & ML Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                id={`nav-link-${sectionId}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 relative ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="navbar-resume-button"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-sm shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-resume-quick-button"
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium flex items-center gap-1"
            title="Resume"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-[#090d16]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 font-semibold border-l-2 border-cyan-400 pl-4'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-800/80">
            <button
              id="mobile-menu-resume-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
