import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData.ts';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-b border-slate-800/40 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 id="education-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Academic progression in Artificial Intelligence, Machine Learning, and foundational sciences.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={edu.id}
                id={`education-item-${edu.id}`}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Node */}
                <div className="absolute left-2 sm:left-6 top-2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-md shadow-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.year}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-300 mb-3">
                    <School className="w-4 h-4 text-slate-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">
                      Academic Score:
                    </span>
                    <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                      {edu.gradeType}: {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
