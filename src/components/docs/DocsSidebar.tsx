'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsData } from '@/data/docs';
import {
  BookOpen,
  ChevronRight,
  Cpu,
  Layers,
  Code2,
  FolderGit2,
} from 'lucide-react';

export function DocsSidebar() {
  const pathname = usePathname();
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);

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
            <span>Hujjatlar Menusi (Qo&apos;llanmalar)</span>
          </div>
          <ChevronRight
            className={`w-4 h-4 text-zinc-400 transition-transform ${
              isMobileExpanded ? 'rotate-90' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-xs sticky top-20 space-y-6 ${
          isMobileExpanded ? 'block' : 'hidden lg:block'
        }`}
      >
        <div>
          <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-sm pb-3 border-b border-zinc-100 dark:border-zinc-800">
            <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Arduino Hujjatlar (Docs)</span>
          </div>

          <div className="mt-3 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 block mb-1">
              🚀 Tezkor Qo&apos;llanmalar
            </span>
            {docsData.map((doc) => {
              const isActive = pathname === `/docs/${doc.slug}`;
              return (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold border-l-2 border-teal-500'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <span className="truncate">{doc.title}</span>
                  {isActive && (
                    <ChevronRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Hub Links */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2 block">
            Kataloglar
          </span>
          <Link
            href="/boards"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-teal-500" />
              <span>Platalar Hub</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
          <Link
            href="/components"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Datchiklar Katalogi</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
          <Link
            href="/reference"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span>C++ Spravochnik</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          >
            <div className="flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4 text-amber-500" />
              <span>Amaliy Loyihalar</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
