'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  FolderGit2,
  Clock,
  Gauge,
  ArrowRight,
  Layers,
  Sparkles,
  Terminal,
  Bookmark,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { useFavorites } from '@/context/FavoritesContext';

export default function ProjectsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Barchasi');
  const { isFavorite, toggleFavorite } = useFavorites();

  const difficulties = ['Barchasi', 'Boshlang\'ich', 'O\'rta', 'Murakkab'];

  const filteredProjects = useMemo(() => {
    if (selectedDifficulty === 'Barchasi') return projectsData;
    return projectsData.filter((p) => p.difficulty === selectedDifficulty);
  }, [selectedDifficulty]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Bosqichma-bosqich Amaliy Loyihalar' }]} />

      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <FolderGit2 className="w-4 h-4" />
          <span>Modul 4: Practical Projects</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Bosqichma-bosqich Amaliy Loyihalar (Instructables Uslubida)
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Sxemani yig&apos;ishdan tortib dasturlashgacha bo&apos;lgan to&apos;liq yo&apos;riqnomalar. Har bir loyiha BOM qismlar ro&apos;yxati va brauzerda ishlovchi Wokwi simulyatori bilan ta&apos;minlangan.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <span className="text-xs text-zinc-400 mr-2">Qiyinlik darajasi:</span>
        {difficulties.map((diff) => (
          <button
            key={diff}
            onClick={() => setSelectedDifficulty(diff)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedDifficulty === diff
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            {diff}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const fav = isFavorite(project.id);
          return (
            <div
              key={project.slug}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta badges: difficulty, time, favorite */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                        project.difficulty === 'Boshlang\'ich'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      {project.difficulty}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-teal-600 dark:text-teal-400" />
                      {project.estimatedTime}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      toggleFavorite({
                        id: project.id,
                        type: 'project',
                        title: project.title,
                        slug: project.slug,
                        category: project.category,
                      })
                    }
                    className={`p-1 rounded-md transition-colors ${
                      fav
                        ? 'text-teal-600 dark:text-teal-400'
                        : 'text-zinc-300 dark:text-zinc-600 hover:text-zinc-500'
                    }`}
                    title="Sevimlilarga saqlash"
                  >
                    <Bookmark className={`w-4 h-4 ${fav ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Project Title */}
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h2>
                </Link>

                {/* Summary */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* BOM Materials preview chips */}
                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                    Kerakli Komponentlar (BOM):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.slice(0, 4).map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-300"
                      >
                        {mat.name}
                      </span>
                    ))}
                    {project.materials.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-[11px] text-zinc-500 font-mono">
                        +{project.materials.length - 4} yana
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-teal-600 dark:text-teal-400 font-mono flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Wokwi Simulyatori bor
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  <span>Qadam-baqadam yo&apos;riqnoma</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
