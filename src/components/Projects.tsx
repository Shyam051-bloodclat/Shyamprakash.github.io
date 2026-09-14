import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import {
  Sparkles,
  Bot,
  Terminal,
  Github,
  ExternalLink,
  ChevronRight,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative border-b border-slate-800/40 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 id="projects-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Hands-On AI Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Engineered software systems translating Large Language Models, agentic reasoning, RAG architectures, and runtime compilers into practical utilities.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {PROJECTS.map((project) => {
            const isFeatured = project.isFeatured;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20 border-cyan-500/40 shadow-xl shadow-cyan-950/30 hover:border-cyan-400/70'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-lg hover:bg-slate-900'
                }`}
              >
                {/* Subtle top indicator bar */}
                {isFeatured && (
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                    <div>
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold font-mono tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            FEATURED PROJECT
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
                          {isFeatured ? <Bot className="w-3.5 h-3.5 text-cyan-400" /> : <Terminal className="w-3.5 h-3.5 text-blue-400" />}
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap lg:flex-col sm:flex-row gap-2.5 shrink-0">
                      <button
                        id={`btn-view-details-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors cursor-pointer shadow-sm shadow-cyan-500/20"
                      >
                        <span>View Full Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <a
                        id={`btn-github-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        <span className="text-[10px] text-slate-400 font-mono">({project.githubUrl})</span>
                      </a>

                      <a
                        id={`btn-demo-${project.id}`}
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                        <span className="text-[10px] text-slate-400 font-mono">({project.liveDemoUrl})</span>
                      </a>
                    </div>
                  </div>

                  {/* Architecture / Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/70">
                    {/* Key features */}
                    <div>
                      <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack & architecture */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-slate-400" />
                        Technologies &amp; Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.architectureHighlights && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-800/50">
                          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                            Architecture Highlights:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.architectureHighlights.map((hl) => (
                              <span
                                key={hl}
                                className="px-2 py-0.5 rounded bg-slate-950/70 text-slate-300 text-[11px] border border-slate-800"
                              >
                                {hl}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Interactive card footer click to expand modal */}
                  <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span>Explore problem, solution &amp; technical contribution</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Click to inspect modal
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
