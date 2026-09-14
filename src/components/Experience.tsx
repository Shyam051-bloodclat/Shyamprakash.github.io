import React from 'react';
import { EXPERIENCES } from '../data/portfolioData.ts';
import { Briefcase, Calendar, MapPin, Sparkles, Building, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 id="experience-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on internships delivering Python software, data science pipelines, Generative AI workflows, and API architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical central/left line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                id={`experience-item-${exp.id}`}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline node icon */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-md shadow-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-cyan-300 mt-0.5">
                        <Building className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2 mt-4 text-sm text-slate-300 leading-relaxed">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0 mt-0.5" />
                        <p>{point}</p>
                      </div>
                    ))}
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
