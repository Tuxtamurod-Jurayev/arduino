'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectMaterial } from '@/types';
import { Layers, CheckSquare, Square, ExternalLink } from 'lucide-react';

interface ProjectBomChecklistProps {
  materials: ProjectMaterial[];
}

export function ProjectBomChecklist({ materials }: ProjectBomChecklistProps) {
  const [checkedMaterials, setCheckedMaterials] = useState<Record<number, boolean>>({});

  const toggleMaterial = (index: number) => {
    setCheckedMaterials((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const totalMaterials = materials.length;
  const gatheredMaterials = Object.values(checkedMaterials).filter(Boolean).length;

  return (
    <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            Kerakli Qismlar Ro&apos;yxati (BOM)
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          {gatheredMaterials} / {totalMaterials} tayyor
        </span>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
        Qismlarni yig&apos;ayotganda belgilab boring. Datchik nomini bosib, uning pinout sxemasiga o&apos;tishingiz mumkin:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {materials.map((mat, idx) => {
          const isChecked = !!checkedMaterials[idx];
          return (
            <div
              key={idx}
              onClick={() => toggleMaterial(idx)}
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer select-none transition-all ${
                isChecked
                  ? 'bg-teal-50/50 dark:bg-teal-950/30 border-teal-300 dark:border-teal-800/80 text-zinc-400 line-through'
                  : 'bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                )}
                <span className="text-xs font-medium truncate">{mat.name}</span>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="text-[11px] font-mono text-zinc-400">{mat.quantity}</span>
                {mat.componentSlug && (
                  <Link
                    href={`/components/${mat.componentSlug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors"
                    title="Komponent sahifasini ochish"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
