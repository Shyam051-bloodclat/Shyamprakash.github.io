import React from 'react';
import { Download, ArrowDown, Linkedin, Mail, Github, Sparkles, Brain, Cpu, Bot } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { AiBackground } from './AiBackground.tsx';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-slate-800/40"
    >
      {/* AI canvas background */}
      <AiBackground />

      {/* Subtle radial gradients behind text */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-600/5 blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Status Pill */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs font-mono text-cyan-300 mb-6 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="tracking-wide">AI & ML Developer • Practical Systems</span>
        </div>

        {/* Greeting */}
        <p className="text-sm sm:text-base md:text-lg font-medium text-slate-400 mb-2 tracking-wide">
          Hi, I&apos;m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
        </p>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            {PERSONAL_INFO.headline}
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-400/90 mb-6 max-w-2xl">
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </p>

        {/* Short Introduction based strictly on professional objective */}
        <p
          id="hero-intro"
          className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-8 text-center"
        >
          {PERSONAL_INFO.objective}
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
          <a
            id="hero-cta-projects"
            href="#projects"
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            id="hero-cta-resume"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all duration-200 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social / Direct Connect Links */}
        <div id="hero-social-links" className="flex items-center justify-center gap-3">
          <a
            id="hero-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-medium transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            id="hero-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-medium transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Email Me</span>
          </a>

          <a
            id="hero-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-medium transition-colors"
            title="GitHub (Placeholder)"
          >
            <Github className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Key Real Focus Cards (Derived strictly from resume objective & projects) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-12 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white">Agentic Travel Assistant</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">VoyagrBot multi-agent system, RAG & live APIs</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white">Interactive AI Tutor</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">R programming execution, Ollama & Qwen2.5-Coder</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 shrink-0">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white">AI/ML Engineering</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Python, Flask, SQL, LLMs & internship exposure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
