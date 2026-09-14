import React, { useEffect } from 'react';
import { Project } from '../types.ts';
import {
  X,
  Github,
  ExternalLink,
  Bot,
  Terminal,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Cpu,
  UserCheck
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2.5">
            {project.isFeatured ? <Bot className="w-3.5 h-3.5" /> : <Terminal className="w-3.5 h-3.5" />}
            <span>{project.category}</span>
          </div>
          <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-slate-800">
          <a
            id="modal-github-button"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white transition-colors"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub Repository</span>
            <span className="text-[10px] text-cyan-300 font-mono">({project.githubUrl})</span>
          </a>

          <a
            id="modal-demo-button"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs font-semibold text-slate-950 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
            <span className="text-[10px] text-slate-900 font-mono">({project.liveDemoUrl})</span>
          </a>
        </div>

        {/* Breakdown Sections */}
        <div className="space-y-6 pt-6">
          {/* Problem */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.details.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.details.solution}
            </p>
          </div>

          {/* Features */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features</span>
            </div>
            <ul className="space-y-2">
              {project.details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4" />
              <span>Technologies Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.details.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-300 font-mono text-xs border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/30 to-blue-950/20 border border-cyan-500/20">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>My Contribution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.details.myContribution}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
