'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Cpu, ArrowRight, CheckCircle2, Search, X } from 'lucide-react';
import { boardsData } from '@/data/boards';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export default function BoardsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Barchasi');

  const tags = ['Barchasi', 'Klassik AVR', '32-bit ARM', 'IoT & Simsiz'];

  const filteredBoards = useMemo(() => {
    return boardsData.filter((board) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        board.title.toLowerCase().includes(q) ||
        board.chip.toLowerCase().includes(q) ||
        board.description.toLowerCase().includes(q) ||
        board.slug.toLowerCase().includes(q);

      let matchTag = true;
      if (selectedTag === 'Klassik AVR') {
        matchTag = board.chip.includes('AVR') || board.chip.includes('ATmega');
      } else if (selectedTag === '32-bit ARM') {
        matchTag = board.chip.includes('SAM') || board.chip.includes('Cortex') || board.chip.includes('nRF52840');
      } else if (selectedTag === 'IoT & Simsiz') {
        matchTag =
          board.title.includes('WiFi') ||
          board.title.includes('IoT') ||
          board.title.includes('BLE') ||
          board.chip.includes('ESP') ||
          board.description.toLowerCase().includes('wi-fi') ||
          board.description.toLowerCase().includes('bluetooth');
      }

      return matchSearch && matchTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Mikrokontroller Platalari' }]} />

      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Cpu className="w-4 h-4" />
          <span>Modul 2: Platalar & Hujjatlar</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Mikrokontroller Platalari va Hujjatlar
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-3xl">
          Arduino Uno R3, Nano, Mega 2560, Due, Micro, MKR WiFi 1010, Nano 33 BLE / IoT hamda ESP modullarining to&apos;liq pinout xaritasi, texnik xususiyatlari va amaliy qo&apos;llanilishi.
        </p>

        {/* Live Search and Filters */}
        <div className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Plata nomi yoki chip bo'yicha qidirish (Due, SAMD21, ESP32, BLE...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results counter */}
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>
            {boardsData.length} ta platadan <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{filteredBoards.length}</strong> tasi topildi
          </span>
          {(searchQuery || selectedTag !== 'Barchasi') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('Barchasi');
              }}
              className="text-teal-600 dark:text-teal-400 hover:underline"
            >
              Filtrlarni tozalash
            </button>
          )}
        </div>
      </div>

      {/* Boards Grid */}
      {filteredBoards.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            Mos keluvchi plata topilmadi
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
            &quot;{searchQuery}&quot; so&apos;rovi bo&apos;yicha plata mavjud emas. Qidiruv so&apos;zini o&apos;zgartirib ko&apos;ring yoki filtrlarni tozalang.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBoards.map((board) => (
            <div
              key={board.slug}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-teal-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Title & Chip badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {board.chip}
                    </span>
                    <Link href={`/boards/${board.slug}`}>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mt-1.5">
                        {board.title}
                      </h2>
                    </Link>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {board.description}
                </p>

                {/* Board Photo Banner */}
                {board.imageUrl && (
                  <Link
                    href={`/boards/${board.slug}`}
                    className="block my-3.5 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 aspect-video relative group/img shadow-xs"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={board.imageUrl}
                      alt={board.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>
                )}

                {/* Key Specs Matrix */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="block text-[10px] text-zinc-400 uppercase">Kuchlanish</span>
                    <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {board.operatingVoltage}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="block text-[10px] text-zinc-400 uppercase">Raqamli I/O</span>
                    <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {board.digitalPins} pin
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="block text-[10px] text-zinc-400 uppercase">Flash Xotira</span>
                    <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {board.flashMemory.split(' ')[0]} {board.flashMemory.split(' ')[1] || ''}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800">
                    <span className="block text-[10px] text-zinc-400 uppercase">Chastota</span>
                    <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {board.clockSpeed.split(' ')[0]} {board.clockSpeed.split(' ')[1] || ''}
                    </span>
                  </div>
                </div>

                {/* Key Features List preview */}
                <ul className="mt-4 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  {board.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom link */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">
                  Drayver: {board.driverInfo.chipName}
                </span>
                <Link
                  href={`/boards/${board.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  <span>Pinout & Drayver</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
