'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { referenceData } from '@/data/reference';
import { ReferencePillar } from '@/types';
import { BookOpen, ChevronRight, Layers, Database, Code2 } from 'lucide-react';

export function ReferenceSidebar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<ReferencePillar | 'all'>('all');
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const pillars: { key: ReferencePillar; label: string; icon: React.ElementType }[] = [
    { key: 'operators', label: 'Операторы', icon: Code2 },
    { key: 'data', label: 'Данные', icon: Database },
    { key: 'functions', label: 'Функции', icon: Layers },
  ];

  const filteredItems =
    activeTab === 'all'
      ? referenceData
      : referenceData.filter((i) => i.pillar === activeTab);

  const categories = Array.from(new Set(filteredItems.map((item) => item.category)));

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-bold text-zinc-900 dark:text-zinc-100 shadow-xs"
        >
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>C++ Bo&apos;limlari Daraxti (Mavzular)</span>
          </div>
          <ChevronRight
            className={`w-4 h-4 text-zinc-400 transition-transform ${
              isMobileExpanded ? 'rotate-90' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-sm sticky top-20 ${
          isMobileExpanded ? 'block' : 'hidden lg:block'
        }`}
      >
        <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm mb-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>Arduino C++ Qo&apos;llanmasi</span>
        </div>

        {/* 3 Pillars Tabs */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl mb-3 text-[11px] font-medium">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-1 rounded-lg text-center transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-zinc-900 text-teal-600 dark:text-teal-400 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
            }`}
          >
            Hammasi
          </button>
          {pillars.map((p) => (
            <button
              key={p.key}
              onClick={() => setActiveTab(p.key)}
              className={`py-1 rounded-lg text-center transition-all truncate px-0.5 ${
                activeTab === p.key
                  ? 'bg-white dark:bg-zinc-900 text-teal-600 dark:text-teal-400 shadow-xs font-semibold'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
              title={p.label}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Items Tree */}
        <div className="space-y-4 max-h-[68vh] overflow-y-auto pr-1">
          {categories.map((cat) => {
            const items = filteredItems.filter((i) => i.category === cat);
            return (
              <div key={cat} className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block px-2 mb-1">
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
