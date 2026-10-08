import React from 'react';
import { notFound } from 'next/navigation';
import { boardsData } from '@/data/boards';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PinoutVisualizer } from '@/components/boards/PinoutVisualizer';
import {
  Cpu,
  Layers,
  HardDrive,
  Clock,
  Zap,
  CheckCircle2,
  Download,
  Terminal,
  ShieldAlert,
} from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return boardsData.map((b) => ({
    slug: b.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BoardDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const board = boardsData.find((b) => b.slug === slug);

  if (!board) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Platalar', href: '/boards' },
          { label: board.title },
        ]}
      />

      {/* Board Header */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                Chip: {board.chip}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Takt chastotasi: {board.clockSpeed}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {board.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {board.description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/boards"
              className="px-4 py-2 text-xs font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
            >
              &larr; Barcha platalar
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Pinout Visualizer Section */}
      <section>
        <PinoutVisualizer board={board} />
      </section>

      {/* Technical Specifications Grid */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center">
          <HardDrive className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
          Texnik Xususiyatlar Jadvali
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 uppercase font-mono block">Mantiqiy Kuchlanish</span>
            <span className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100 mt-1 block">
              {board.operatingVoltage}
            </span>
            <span className="text-[11px] text-zinc-500 mt-0.5 block">
              Kirish: {board.inputVoltage}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 uppercase font-mono block">Raqamli I/O Pinlar</span>
            <span className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100 mt-1 block">
              {board.digitalPins} ta pin
            </span>
            <span className="text-[11px] text-teal-600 dark:text-teal-400 mt-0.5 block">
              Shundan {board.pwmPins} tasi PWM (~)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 uppercase font-mono block">Analog Kirishlar (ADC)</span>
            <span className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100 mt-1 block">
              {board.analogPins} ta kanal
            </span>
            <span className="text-[11px] text-zinc-500 mt-0.5 block">
              Datchiklar signali uchun
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <span className="text-xs text-zinc-400 uppercase font-mono block">Xotira Hajmi</span>
            <span className="text-base font-bold font-mono text-zinc-900 dark:text-zinc-100 mt-1 block">
              {board.flashMemory}
            </span>
            <span className="text-[11px] text-zinc-500 mt-0.5 block">
              SRAM: {board.sram} | EEPROM: {board.eeprom}
            </span>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-4">
            Plataning asosiy qulayliklari:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {board.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Installation Guide in Uzbek */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
          <Download className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Arduino IDE va Drayver O&apos;rnatish Qo&apos;llanmasi
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40 text-xs text-teal-900 dark:text-teal-200 leading-relaxed">
          <strong className="block font-semibold mb-1">
            USB Chip: {board.driverInfo.chipName}
          </strong>
          {board.driverInfo.description}
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Bosqichma-bosqich sozlash qadamlari:
          </h3>
          <ol className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300 list-decimal list-inside leading-relaxed">
            {board.driverInfo.installSteps.map((step, idx) => (
              <li key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 font-sans">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
