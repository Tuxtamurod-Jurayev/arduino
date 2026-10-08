import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { docsData } from '@/data/docs';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return docsData.map((d) => ({
    slug: d.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DocDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = docsData.find((d) => d.slug === slug);

  if (!doc) {
    notFound();
  }

  const currentIndex = docsData.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? docsData[currentIndex - 1] : null;
  const nextDoc = currentIndex < docsData.length - 1 ? docsData[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Hujjatlar (Docs)', href: '/docs' },
          { label: doc.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Persistent Docs Sidebar */}
        <DocsSidebar />

        {/* Center Main Content */}
        <main className="flex-1 min-w-0 space-y-6">
          {/* Header */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 font-semibold">
                Docs Guide
              </span>
              <span className="text-xs text-zinc-400 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {doc.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {doc.title}
            </h1>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {doc.description}
            </p>
          </div>

          {/* Key Topics List */}
          <div className="bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40 rounded-2xl p-5 space-y-3">
            <span className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider block">
              Ushbu bo&apos;limda o&apos;rganasiz:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {doc.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-teal-200/40 dark:border-teal-900/30 text-xs space-y-1"
                >
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                    {topic.title}
                  </span>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Doc Markdown Content */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xs prose prose-zinc dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-4">
            <div className="whitespace-pre-line font-sans text-zinc-700 dark:text-zinc-300">
              {doc.content}
            </div>
          </article>

          {/* Prev / Next Navigation Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {prevDoc ? (
              <Link
                href={`/docs/${prevDoc.slug}`}
                className="flex items-center space-x-2 px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 block">Oldingi qo&apos;llanma</span>
                  <span className="font-bold truncate">{prevDoc.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextDoc && (
              <Link
                href={`/docs/${nextDoc.slug}`}
                className="flex items-center justify-end space-x-2 px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all w-full sm:w-auto text-right"
              >
                <div>
                  <span className="text-[10px] text-zinc-400 block">Keyingi qo&apos;llanma</span>
                  <span className="font-bold truncate">{nextDoc.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              </Link>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
