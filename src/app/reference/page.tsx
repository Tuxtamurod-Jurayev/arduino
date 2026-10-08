import React from 'react';
import Link from 'next/link';
import { referenceData } from '@/data/reference';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ReferenceSidebar } from '@/components/reference/ReferenceSidebar';
import { BookOpen, Code2, ArrowRight } from 'lucide-react';

export default function ReferencePage() {
  const categories = Array.from(
    new Set(referenceData.map((item) => item.category))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Arduino Dasturlash Tili Ma\'lumotnomasi' }]} />

      {/* Docs layout with persistent left sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Persistent Tree Sidebar */}
        <ReferenceSidebar />

        {/* Center Content */}
        <main className="flex-1 min-w-0 space-y-8">
          {/* Header */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Modul 3: Language Reference</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Arduino C/C++ Dasturlash Tili Qo&apos;llanmasi
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              Arduino dasturlash tilining o&apos;zbek tilidagi to&apos;liq lug&apos;ati: asosiy tuzilma, operatorlar, o&apos;zgaruvchilar turlari, raqamli/analog kirish-chiqish funksiyalari va serial aloqa buyruqlari.
            </p>
          </div>

          {/* Categorized Cards Matrix */}
          <div className="space-y-8">
            {categories.map((cat) => {
              const items = referenceData.filter((i) => i.category === cat);
              return (
                <div key={cat} className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {cat}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/reference/${item.slug}`}
                        className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                              {item.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                            {item.summary}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 font-mono text-[11px] text-teal-600 dark:text-teal-400 truncate">
                          {item.syntax.split('\n')[0]}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
