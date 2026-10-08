'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { referenceData } from '@/data/reference';
import { BookOpen, ChevronRight } from 'lucide-react';

export function ReferenceSidebar() {
  const pathname = usePathname();

  // Group by category
  const categories = Array.from(
    new Set(referenceData.map((item) => item.category))
  );

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm mb-4 pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>C++ Spravochnik Menyu</span>
        </div>

        <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-1">
          {categories.map((cat) => {
            const items = referenceData.filter((i) => i.category === cat);
            return (
              <div key={cat} className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block px-2 mb-1">
                  {cat}
                </span>
                <div className="space-y-0.5">
                  {items.map((item) => {
                    const isActive = pathname === `/reference/${item.slug}`;
                    return (
                      <Link
                        key={item.slug}
                        href={`/reference/${item.slug}`}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          isActive
                            ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold border-l-2 border-teal-500'
                            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                        {isActive && (
                          <ChevronRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
