'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Layers, Filter, ArrowRight, Zap, Bookmark } from 'lucide-react';
import { componentsData } from '@/data/components';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { useFavorites } from '@/context/FavoritesContext';

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');
  const { isFavorite, toggleFavorite } = useFavorites();

  const categories = useMemo(() => {
    return ['Barchasi', ...Array.from(new Set(componentsData.map((c) => c.category)))];
  }, []);

  const filteredComponents = useMemo(() => {
    return componentsData.filter((item) => {
      const matchCategory =
        selectedCategory === 'Barchasi' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Qurilmalar va Datchiklar Katalogi' }]} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Modul 1: Hardware Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Qurilmalar va Komponentlar Katalogi
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Arduino uchun datchiklar, displeylar, servomotorlar va modullarning to&apos;liq texnik parametrlari, pinout oyoqchalari va sinov kodlari.
          </p>
        </div>

        {/* Live Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Datchik nomi bo'yicha qidirish..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:border-teal-500 outline-none text-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-zinc-400 mr-1 flex-shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Components */}
      {filteredComponents.length === 0 ? (
        <div className="py-20 text-center bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
          <Layers className="w-8 h-8 text-zinc-400 mx-auto mb-2 opacity-50" />
          <p className="text-sm text-zinc-500">
            Tanlangan parametrlar bo&apos;yicha hech qanday datchik topilmadi.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((item) => {
            const fav = isFavorite(item.id);
            return (
              <div
                key={item.slug}
                className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category, voltage, and favorite */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-zinc-400 flex items-center">
                        <Zap className="w-3 h-3 mr-0.5 text-amber-500" />
                        {item.voltage}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite({
                            id: item.id,
                            type: 'component',
                            title: item.name,
                            slug: item.slug,
                            category: item.category,
                          });
                        }}
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
                  </div>

                  {/* Component Image Preview */}
                  {item.imageUrl && (
                    <Link
                      href={`/components/${item.slug}`}
                      className="block mb-3.5 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 aspect-video relative group/img"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>
                  )}

                  {/* Component Name */}
                  <Link href={`/components/${item.slug}`}>
                    <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.name}
                    </h2>
                  </Link>

                  {/* Short Description */}
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>

                  {/* Specs Quick Preview */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="text-zinc-500 dark:text-zinc-400">
                      <span className="block text-[10px] text-zinc-400 uppercase">Tok sarfi:</span>
                      <span className="font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        {item.current}
                      </span>
                    </div>
                    <div className="text-zinc-500 dark:text-zinc-400">
                      <span className="block text-[10px] text-zinc-400 uppercase">Oyoqchalar:</span>
                      <span className="font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        {item.pinout.length} ta pin
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Arduino Uno mos</span>
                  <Link
                    href={`/components/${item.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <span>To&apos;liq qo&apos;llanma</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
