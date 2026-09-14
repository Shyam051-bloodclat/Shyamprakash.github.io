import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import {
  Code,
  Brain,
  BarChart3,
  Bot,
  Globe,
  Database,
  Layers,
  Cpu,
  Search,
  CheckCircle,
  Filter
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  programming: Code,
  'ai-ml': Brain,
  'data-analysis': BarChart3,
  'ai-tools': Bot,
  'web-apis': Globe,
  databases: Database,
  tools: Layers,
  other: Cpu,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return {
      ...cat,
      matchingSkills,
    };
  }).filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      return cat.matchingSkills.length > 0;
    }
    return true;
  });

  const totalSkillsCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 relative border-b border-slate-800/40 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 id="skills-heading" className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Organized across 8 specialized domains covering machine learning, deep neural architectures, data analysis, LLM tooling, and software engineering.
          </p>
        </div>

        {/* Filter and Search Bar for Recruiters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none text-xs">
            <button
              id="skill-filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All ({totalSkillsCount})
            </button>
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || Code;
              return (
                <button
                  key={cat.id}
                  id={`skill-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium flex items-center gap-1.5 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Code;
            const displayedSkills = searchQuery ? cat.matchingSkills : cat.skills;

            return (
              <div
                key={cat.id}
                id={`skill-card-${cat.id}`}
                className="group p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                      {cat.skills.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/50">
                  {displayedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/90 hover:bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-200 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-3 py-1.5 text-xs rounded-lg bg-cyan-500 text-slate-950 font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
