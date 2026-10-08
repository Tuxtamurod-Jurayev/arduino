import React from 'react';
import Link from 'next/link';
import { docsData } from '@/data/docs';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Code2,
  FolderGit2,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Arduino Hujjatlar Markazi (Docs)' }]} />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Persistent Docs Sidebar */}
        <DocsSidebar />

        {/* Center Main Content */}
        <main className="flex-1 min-w-0 space-y-8">
          {/* Header Banner */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>docs.arduino.cc uslubida</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Arduino Rasmiy Hujjatlar Markazi
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              Mikrokontrollerlarni kompyuterga ulashdan tortib, drayver o&apos;rnatish, dasturlash tili va datchiklarni boshqarishgacha bo&apos;lgan barcha soddalashtirilgan o&apos;zbekcha yo&apos;riqnomalar.
            </p>
          </div>

          {/* Quick Hub Cards Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/boards"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow transition-all group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Hardware (Platalar)
                  </h3>
                  <span className="text-[11px] text-zinc-400">Uno, Nano, Mega, ESP32</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Pinout diagrammalari, texnik xarakteristikalar va mikrokontroller tuzilmasi.
              </p>
            </Link>

            <Link
              href="/components"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow transition-all group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Peripherals (Datchiklar)
                  </h3>
                  <span className="text-[11px] text-zinc-400">Sensor, Motor, Displey</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                HC-SR04, DHT11, OLED, SG90, Rele, L298N va boshqa modullar ulanishi.
              </p>
            </Link>

            <Link
              href="/reference"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow transition-all group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Language Reference
                  </h3>
                  <span className="text-[11px] text-zinc-400">Операторы, Данные, Функции</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                46+ ta C++ funksiyalari, o&apos;zgaruvchilar va standart kutubxona qo&apos;llanmasi.
              </p>
            </Link>

            <Link
              href="/projects"
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow transition-all group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Instructables Loyihalar
                  </h3>
                  <span className="text-[11px] text-zinc-400">Step-by-Step DIY</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                BOM qismlar, Wokwi simulyatori va qadamma-qadam montaj yo&apos;riqnomalari.
              </p>
            </Link>
          </div>

          {/* Step-by-Step Guides Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span>Bosqichma-bosqich Boshlang&apos;ich Qo&apos;llanmalar</span>
            </h2>

            <div className="space-y-4">
              {docsData.map((doc) => (
                <div
                  key={doc.slug}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xs hover:shadow hover:border-teal-500/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-semibold">
                        Qo&apos;llanma
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {doc.readTime}
                      </span>
                    </div>

                    <Link href={`/docs/${doc.slug}`}>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                        {doc.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {doc.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 pt-1">
                      {doc.topics.map((t, idx) => (
                        <li
                          key={idx}
                          className="text-[11px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-lg flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                          <span>{t.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      href={`/docs/${doc.slug}`}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 transition-all whitespace-nowrap"
                    >
                      <span>O&apos;qish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
