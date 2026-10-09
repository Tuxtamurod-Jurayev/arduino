import { notFound, redirect } from 'next/navigation';
import { componentsData } from '@/data/components';
import { boardsData } from '@/data/boards';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { CodeBlock } from '@/components/common/CodeBlock';
import {
  Zap,
  AlertTriangle,
  Cpu,
  Info,
} from 'lucide-react';
import Link from 'next/link';

// Generate static params for static generation
export function generateStaticParams() {
  return componentsData.map((c) => ({
    slug: c.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = componentsData.find((c) => c.slug === slug);

  if (!item) {
    const board = boardsData.find((b) => b.slug === slug);
    if (board) {
      redirect(`/boards/${slug}`);
    }
    notFound();
  }

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'VCC':
        return 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50';
      case 'GND':
        return 'bg-zinc-700/15 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700';
      case 'Analog':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50';
      case 'PWM':
        return 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50';
      case 'I2C':
      case 'SPI':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50';
      default:
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Komponentlar', href: '/components' },
          { label: item.name },
        ]}
      />

      {/* Top Header Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {item.imageUrl && (
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex-shrink-0 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Ishchi kuchlanish: {item.voltage}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {item.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                {item.shortDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <Link
              href="/components"
              className="px-4 py-2 text-xs font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
            >
              &larr; Katalog
            </Link>
          </div>
        </div>
      </div>

      {/* 2-Column Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-8 min-w-0">
          {/* 1. Umumiy tavsif va ishlash prinsipi */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-lg border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <Info className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2>Umumiy Tavsif va Ishlash Prinsipi</h2>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-300 space-y-3 leading-relaxed">
              <p>{item.overview}</p>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 block mb-1">
                  Qanday ishlaydi?
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.howItWorks}</p>
              </div>
            </div>
          </section>

          {/* 2. Ulanish Sxemasi (Wiring Diagram) */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-lg border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <h2>{item.wiringDiagram.title}</h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {item.wiringDiagram.description}
            </p>

            {/* Circuit Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-xs text-left min-w-[320px]">
                <thead className="bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 uppercase font-mono">
                  <tr>
                    <th className="py-2.5 px-4">Datchik Oyoqchasi</th>
                    <th className="py-2.5 px-4">Arduino Uno Pini</th>
                    <th className="py-2.5 px-4">Izoh / Sim rangi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-mono">
                  {item.wiringDiagram.connections.map((c, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                      <td className="py-2.5 px-4 font-semibold text-teal-600 dark:text-teal-400">
                        {c.from}
                      </td>
                      <td className="py-2.5 px-4 text-zinc-800 dark:text-zinc-200">{c.to}</td>
                      <td className="py-2.5 px-4 text-zinc-500">{c.note || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Sinov Kodi (Test Code with Syntax Highlighting) */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-lg">
                <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <h2>Sinov Kodi (C++)</h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {item.sampleCode.description}
            </p>

            <CodeBlock
              code={item.sampleCode.code}
              filename={`${item.slug}_test.ino`}
              language="cpp"
            />

            {/* Explanation of the code lines */}
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                Kod tushuntirishi:
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.sampleCode.explanation.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Troubleshooting (Nosozliklarni bartaraf etish) */}
          {item.troubleshooting.length > 0 && (
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-bold text-lg border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h2>Eng Ko&apos;p Uchraydigan Muammolar va Yechimlar</h2>
              </div>

              <div className="space-y-3">
                {item.troubleshooting.map((tr, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1.5"
                  >
                    <div className="font-semibold text-amber-900 dark:text-amber-300 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                      {tr.issue}
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400 pl-3.5">
                      <strong className="text-zinc-700 dark:text-zinc-300">Sababi:</strong>{' '}
                      {tr.cause}
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-300 pl-3.5">
                      <strong className="text-teal-700 dark:text-teal-400">Yechim:</strong>{' '}
                      {tr.solution}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sticky Column: Specs & Pinout Table (1 col) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
          {/* Technical Specs Table */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-2.5 mb-3 flex items-center justify-between">
              <span>Texnik Parametrlar</span>
              <span className="text-[10px] font-mono text-zinc-400">SPECS</span>
            </h3>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/80 text-xs">
              {item.specs.map((spec, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">{spec.label}</span>
                  <span className="font-mono font-medium text-zinc-800 dark:text-zinc-200 text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pinout Table with Color Badges */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-2.5 mb-3 flex items-center justify-between">
              <span>Pinout (Oyoqchalar sxemasi)</span>
              <span className="text-[10px] font-mono text-zinc-400">{item.pinout.length} PIN</span>
            </h3>

            <div className="space-y-2.5">
              {item.pinout.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                      {p.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] uppercase font-mono font-medium rounded border ${getBadgeClass(
                        p.type
                      )}`}
                    >
                      {p.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
