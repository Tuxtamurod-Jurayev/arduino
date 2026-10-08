'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { referenceData } from '@/data/reference';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ReferenceSidebar } from '@/components/reference/ReferenceSidebar';
import { ReferencePillar } from '@/types';
import {
  BookOpen,
  Code2,
  Database,
  Layers,
  Search,
  ArrowRight,
  Terminal,
} from 'lucide-react';

export default function ReferencePage() {
  const [selectedPillar, setSelectedPillar] = useState<ReferencePillar | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pillars: { key: ReferencePillar | 'all'; label: string; count: number; icon: React.ElementType }[] = [
    { key: 'all', label: 'Barchasi', count: referenceData.length, icon: BookOpen },
    {
      key: 'operators',
      label: 'Операторы (Operatorlar)',
      count: referenceData.filter((i) => i.pillar === 'operators').length,
      icon: Code2,
    },
    {
      key: 'data',
      label: 'Данные (Ma\'lumotlar turlari)',
      count: referenceData.filter((i) => i.pillar === 'data').length,
      icon: Database,
    },
    {
      key: 'functions',
      label: 'Функции (Funksiyalar)',
      count: referenceData.filter((i) => i.pillar === 'functions').length,
      icon: Layers,
    },
  ];

  const filteredItems = useMemo(() => {
    return referenceData.filter((item) => {
      const matchPillar = selectedPillar === 'all' || item.pillar === selectedPillar;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.syntax.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchPillar && matchSearch;
    });
  }, [selectedPillar, searchQuery]);

  const categories = useMemo(() => {
    return Array.from(new Set(filteredItems.map((item) => item.category)));
  }, [filteredItems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Arduino C/C++ Dasturlash Tili Spravochnigi' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Persistent Tree Sidebar */}
        <ReferenceSidebar />

        {/* Center Content */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Header Banner */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Arduino Language Reference</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Справочник языка Ардуино
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              Arduino C/C++ dasturlash tilining o&apos;zbek tilidagi to&apos;liq lug&apos;ati. Rasmiy Arduino Language Reference tuzilmasiga ko&apos;ra 3 ta asosiy bo&apos;limga ajratilgan:
              <strong className="text-zinc-900 dark:text-zinc-200"> Операторы</strong> (boshqaruv va mantiq),
              <strong className="text-zinc-900 dark:text-zinc-200"> Данные</strong> (o&apos;zgaruvchilar turlari va konstantalar) hamda
              <strong className="text-zinc-900 dark:text-zinc-200"> Функции</strong> (kirish-chiqish, vaqt, matematika, aloqa).
            </p>

            {/* Quick Live Search Bar */}
            <div className="mt-5 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Funksiya, operator yoki ma'lumot turini qidirish... (masalan, pinMode, if, int, millis)"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-teal-500 outline-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 transition-colors"
              />
            </div>
          </div>

          {/* 3 Pillars Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedPillar === p.key;
              return (
                <button
                  key={p.key}
                  onClick={() => setSelectedPillar(p.key)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{p.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {p.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Categorized Cards List */}
          {categories.length === 0 ? (
            <div className="py-16 text-center bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Terminal className="w-8 h-8 text-zinc-400 mx-auto mb-2 opacity-60" />
              <p className="text-xs text-zinc-500">
                &quot;{searchQuery}&quot; so&apos;rovi bo&apos;yicha hech qanday buyruq topilmadi.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {categories.map((cat) => {
                const items = filteredItems.filter((i) => i.category === cat);
                return (
                  <div key={cat} className="space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                          {cat}
                        </h2>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {items.length} ta mavzu
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/reference/${item.slug}`}
                          className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                                {item.pillarLabel}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                              {item.summary}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                            <span className="font-mono text-[11px] text-teal-600 dark:text-teal-400 truncate max-w-[80%]">
                              {item.syntax.split('\n')[0]}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
