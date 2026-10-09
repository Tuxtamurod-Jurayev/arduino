import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { referenceData } from '@/data/reference';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ReferenceSidebar } from '@/components/reference/ReferenceSidebar';
import { CodeBlock } from '@/components/common/CodeBlock';
import {
  Code2,
  ListTree,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export function generateStaticParams() {
  return referenceData.map((r) => ({
    slug: r.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReferenceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = referenceData.find((r) => r.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Qo\'llanma', href: '/reference' },
          { label: item.category, href: '/reference' },
          { label: item.name },
        ]}
      />

      {/* Docs 3-Column / Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Persistent Tree Navigation */}
        <ReferenceSidebar />

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 space-y-8">
          {/* Header */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              {item.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono text-zinc-900 dark:text-white tracking-tight mt-2">
              {item.name}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* 1. Sintaksis bo'limi */}
          <section id="sintaksis" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
              <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
              Sintaksis
            </h2>
            <div className="p-4 rounded-xl bg-zinc-950 font-mono text-sm text-teal-400 border border-zinc-800 overflow-x-auto">
              <code>{item.syntax}</code>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
              {item.description}
            </p>
          </section>

          {/* 2. Parametrlar jadvali */}
          <section id="parametrlar" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
              <ListTree className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
              Parametrlari
            </h2>

            {item.parameters.length === 0 ? (
              <p className="text-xs text-zinc-500 italic">
                Ushbu funksiya hech qanday parametr qabul qilmaydi.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                <table className="w-full text-xs text-left">
                  <thead className="bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 uppercase font-mono">
                    <tr>
                      <th className="py-2.5 px-4">Parametr</th>
                      <th className="py-2.5 px-4">Turi</th>
                      <th className="py-2.5 px-4">Tavsifi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-mono">
                    {item.parameters.map((param, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                        <td className="py-2.5 px-4 font-bold text-teal-600 dark:text-teal-400">
                          {param.name}
                        </td>
                        <td className="py-2.5 px-4 text-purple-600 dark:text-purple-400">
                          {param.type}
                        </td>
                        <td className="py-2.5 px-4 text-zinc-600 dark:text-zinc-300 font-sans">
                          {param.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* 3. Qaytaradigan qiymati */}
          <section id="qaytuvchi-qiymat" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
              <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
              Qaytaradigan Qiymati (Return Value)
            </h2>
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-800 dark:text-zinc-200">
              {item.returnValue}
            </div>
          </section>

          {/* 4. Amaliy C++ Kodi */}
          <section id="misol-kod" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
              <Code2 className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
              Amaliy Kod Namunasi
            </h2>

            <CodeBlock
              code={item.exampleCode}
              filename={`${item.slug}_example.ino`}
              language="cpp"
            />

            <div className="space-y-1.5 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Kod tushuntirishi:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.exampleExplanation.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Muhim Eslatmalar */}
          {item.notes.length > 0 && (
            <section id="eslatmalar" className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                Muhim Eslatmalar va Tavsiyalar
              </h2>
              <div className="space-y-2">
                {item.notes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Bog'liq Mavzular (Related Topics) */}
          {item.relatedSlugs && item.relatedSlugs.length > 0 && (
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
                Bog&apos;liq Mavzular va Funksiyalar
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {item.relatedSlugs.map((slug) => {
                  const related = referenceData.find((r) => r.slug === slug);
                  return (
                    <Link
                      key={slug}
                      href={`/reference/${slug}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-teal-50 dark:hover:bg-teal-950/60 border border-zinc-200 dark:border-zinc-700 hover:border-teal-300 dark:hover:border-teal-700 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      <span>{related ? related.name : slug}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-400" />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </main>

        {/* Right Sidebar: On-this-page Table of Contents */}
        <aside className="hidden xl:block w-48 flex-shrink-0 sticky top-24 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block px-1">
            Ushbu Sahifada:
          </span>
          <nav className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
            <a
              href="#sintaksis"
              className="block px-2 py-1 rounded hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              1. Sintaksis
            </a>
            <a
              href="#parametrlar"
              className="block px-2 py-1 rounded hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              2. Parametrlari
            </a>
            <a
              href="#qaytuvchi-qiymat"
              className="block px-2 py-1 rounded hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              3. Qaytaradigan Qiymat
            </a>
            <a
              href="#misol-kod"
              className="block px-2 py-1 rounded hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              4. Misol Kod
            </a>
            {item.notes.length > 0 && (
              <a
                href="#eslatmalar"
                className="block px-2 py-1 rounded hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                5. Eslatmalar
              </a>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
}
