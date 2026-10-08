'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  Cpu,
  BookOpen,
  FolderGit2,
  ArrowRight,
  Search,
  Sparkles,
  Zap,
  Terminal,
  Clock,
  Gauge,
  Code2,
  ChevronRight,
} from 'lucide-react';
import { componentsData } from '@/data/components';
import { projectsData } from '@/data/projects';
import { CommandPalette } from '@/components/common/CommandPalette';

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const featuredProject = projectsData[0]; // Ultrasonik masofa o'lchagich
  const popularComponents = componentsData.slice(0, 6);

  const modules = [
    {
      title: 'Qurilmalar & Datchiklar',
      desc: 'HC-SR04, DHT11, OLED, Servomotor va boshqa modullarning oyoqchalar sxemasi va sinov kodlari.',
      href: '/components',
      icon: Layers,
      count: '10+ datchik',
      color: 'from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
    },
    {
      title: 'Platalar & Hujjatlar',
      desc: 'Arduino Uno R3, Nano, Mega 2560 hamda ESP32 platalari xususiyatlari, pinout diagrammalari va drayverlar.',
      href: '/boards',
      icon: Cpu,
      count: '4 xil plata',
      color: 'from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50',
    },
    {
      title: 'C++ Dasturlash Lug\'ati',
      desc: 'setup, loop, pinMode, digitalWrite, millis va boshqa standart funksiyalarning to\'liq o\'zbekcha qo\'llanmasi.',
      href: '/reference',
      icon: BookOpen,
      count: '14+ funksiya',
      color: 'from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
    },
    {
      title: 'Bosqichma-bosqich Loyihalar',
      desc: 'Instructables uslubidagi amaliy loyihalar, kerakli qismlar (BOM) va Wokwi simulyatorida sinash.',
      href: '/projects',
      icon: FolderGit2,
      count: '4 ta tayyor loyiha',
      color: 'from-amber-500/10 to-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Subtle glow effect behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Release Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>O&apos;zbek tilidagi birinchi ochiq elektronika portali</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Arduino va Robototexnika —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400">
            O&apos;zbek tilidagi
          </span>{' '}
          interaktiv qo&apos;llanma
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Datchiklarning pinout sxemalari, C++ tili spravochnigi hamda real hayotiy loyihalarni hech qanday to&apos;siqlarsiz o&apos;rganing.
        </p>

        {/* Hero Search Box Trigger */}
        <div className="mt-8 max-w-xl mx-auto">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-2xl shadow-lg hover:shadow-xl hover:border-teal-500/60 dark:hover:border-teal-500/60 transition-all text-left group"
          >
            <div className="flex items-center space-x-3 text-zinc-400 dark:text-zinc-500 text-sm">
              <Search className="w-5 h-5 text-teal-600 dark:text-teal-400 transition-transform group-hover:scale-110" />
              <span>Datchik (HC-SR04), funksiya (digitalWrite) yoki loyiha qidiring...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Quick action badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
          <span className="text-zinc-400">Tezkor o&apos;tish:</span>
          {['HC-SR04', 'DHT11', 'OLED 0.96', 'digitalWrite', 'Arduino Uno'].map((tag) => (
            <button
              key={tag}
              onClick={() => setIsSearchOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 text-zinc-700 dark:text-zinc-300 transition-colors font-mono"
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {/* 4 Core Modules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Platforma Bo&apos;limlari
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Nazariyadan tortib amaliy simulyatsiyagacha bo&apos;lgan 4 ta asosiy modul
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.title}
                href={m.href}
                className="group relative p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border bg-gradient-to-br ${m.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {m.count}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center text-xs font-semibold text-teal-600 dark:text-teal-400">
                  <span>Bo&apos;limga o&apos;tish</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Hardware Components Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Ommabop Datchik va Modullar
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Eng ko&apos;p talab qilinadigan elektron komponentlar katalogi
            </p>
          </div>
          <Link
            href="/components"
            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center"
          >
            Barchasini ko&apos;rish <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularComponents.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-teal-500/60 transition-all shadow-sm hover:shadow group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{item.voltage}</span>
                </div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[11px]">{item.pinout.length} ta pin</span>
                <span className="text-teal-600 dark:text-teal-400 font-medium group-hover:underline">
                  Pinout & Kod &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Project of the Week (Instructables Style) */}
      {featuredProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 text-white p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hafta Loyihasi</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-zinc-300 text-sm leading-relaxed max-w-xl">
                  {featuredProject.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>{featuredProject.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Gauge className="w-4 h-4 text-amber-400" />
                    <span>{featuredProject.difficulty} daraja</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span>{featuredProject.steps.length} qadam</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col justify-center space-y-3">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold text-sm transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center space-x-2"
                >
                  <span>Loyihani boshlash</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-center text-[11px] text-zinc-400">
                  Wokwi interaktiv simulyatori bilan brauzerda sinab ko&apos;ring
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Global Command Palette trigger modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
