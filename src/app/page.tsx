'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Layers, Cpu, ArrowRight, Zap, Filter } from 'lucide-react';
import { componentsData } from '@/data/components';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');

  // Barcha mavjud kategoriyalar
  const categories = useMemo(() => {
    return ['Barchasi', ...Array.from(new Set(componentsData.map((c) => c.category)))];
  }, []);

  // Qidiruv va toifa bo'yicha saralangan qurilmalar
  const filteredDevices = useMemo(() => {
    return componentsData.filter((item) => {
      const matchCategory =
        selectedCategory === 'Barchasi' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
          Arduino Qurilmalar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400">
            Ensiklopediyasi
          </span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Datchiklar, displeylar, motorlar va modullarning to&apos;liq o&apos;zbekcha pasporti, oyoqchalar (pinout) xaritasi hamda sinov C++ kodlari.
        </p>
      </div>

      {/* Main Search Input & Category Filters */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Qurilma yoki datchik nomini yozing (masalan: dht11, oled, servo, hc-sr04)..."
            className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-teal-500 dark:focus:border-teal-400 outline-none text-zinc-900 dark:text-zinc-100 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800"
            >
              Tozalash ✕
            </button>
          )}
        </div>

        {/* Category Pills (Touch-friendly & Horizontal Scroll) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 custom-scrollbar">
          <Filter className="w-4 h-4 text-zinc-400 mr-1 flex-shrink-0" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-xs font-semibold'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-transparent dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <span className="text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300">
          Qurilmalar ({filteredDevices.length})
        </span>
        <span className="text-[11px] font-mono text-zinc-400">
          O&apos;quv portali • Do&apos;kon emas
        </span>
      </div>

      {/* Grid of All Devices */}
      {filteredDevices.length === 0 ? (
        <div className="py-20 text-center bg-white dark:bg-zinc-900/50 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800 p-6">
          <Layers className="w-10 h-10 text-zinc-400 mx-auto mb-3 opacity-40" />
          <h3 className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
            Qurilma topilmadi
          </h3>
          <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
            &quot;{searchQuery}&quot; so&apos;rovi bo&apos;yicha hech narsa chiqmadi. Boshqa nom yoki toifani tanlab ko&apos;ring.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDevices.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Thumbnail */}
                {item.imageUrl && (
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3.5 border border-zinc-200 dark:border-zinc-800 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Badges: Category & Voltage */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    ⚡ {item.voltage}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-zinc-400">
                  {item.pinout.length} ta pin
                </span>
                <span className="text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center">
                  Batafsil <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
