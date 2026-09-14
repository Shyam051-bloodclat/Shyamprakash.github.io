import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Linkedin, Github, Mail, ArrowUp, Terminal, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#060910] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs font-mono text-cyan-400">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="GitHub (Placeholder)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-medium transition-colors cursor-pointer"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Back to top button */}
          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="font-mono text-slate-300">
            &copy; 2026 {PERSONAL_INFO.name}
          </p>
          <p className="text-slate-400">
            AI &amp; Machine Learning Developer &bull; {PERSONAL_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
