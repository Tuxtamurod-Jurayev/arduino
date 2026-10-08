'use client';

import React from 'react';
import Link from 'next/link';
import { useFavorites } from '@/context/FavoritesContext';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import {
  Bookmark,
  Trash2,
  Layers,
  Cpu,
  BookOpen,
  FolderGit2,
} from 'lucide-react';

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  const getLink = (type: string, slug: string) => {
    switch (type) {
      case 'component':
        return `/components/${slug}`;
      case 'board':
        return `/boards/${slug}`;
      case 'reference':
        return `/reference/${slug}`;
      case 'project':
        return `/projects/${slug}`;
      default:
        return '/';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'component':
        return <Layers className="w-4 h-4 text-blue-500" />;
      case 'board':
        return <Cpu className="w-4 h-4 text-teal-500" />;
      case 'reference':
        return <BookOpen className="w-4 h-4 text-purple-500" />;
      case 'project':
        return <FolderGit2 className="w-4 h-4 text-amber-500" />;
      default:
        return <Bookmark className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Saqlanganlar (Sevimlilar)' }]} />

      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Bookmark className="w-4 h-4 fill-current" />
          <span>Mening Sevimlilarim</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Saqlangan Komponentlar va Maqolalar
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          Siz belgilagan datchiklar, C++ funksiyalari va loyihalar brauzeringiz xotirasida saqlanadi.
        </p>
      </div>

      {/* List */}
      {favorites.length === 0 ? (
        <div className="py-20 text-center bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800">
          <Bookmark className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
          <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            Hozircha hech narsa saqlanmagan
          </h2>
          <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
            Datchiklar, funksiyalar yoki loyihalardagi belgilash tugmasini bosib, ularni bu yerga qo&apos;shishingiz mumkin.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/components"
              className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-500 transition-colors"
            >
              Komponentlar katalogi
            </Link>
            <Link
              href="/reference"
              className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              C++ Ma&apos;lumotnomasi
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <div
              key={fav.id}
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-teal-500/60 transition-all group"
            >
              <Link
                href={getLink(fav.type, fav.slug)}
                className="flex items-center space-x-3 min-w-0 pr-2 flex-1"
              >
                <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                  {getIcon(fav.type)}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {fav.category || fav.type}
                  </div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {fav.title}
                  </h3>
                </div>
              </Link>

              <button
                onClick={() => removeFavorite(fav.id)}
                className="p-2 text-zinc-400 hover:text-red-500 rounded-lg transition-colors flex-shrink-0"
                title="O'chirish"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
