import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { CodeBlock } from '@/components/common/CodeBlock';
import { ProjectBomChecklist } from '@/components/projects/ProjectBomChecklist';
import {
  Clock,
  Play,
  AlertTriangle,
  Lightbulb,
  Cpu,
} from 'lucide-react';

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Loyihalar', href: '/projects' },
          { label: project.title },
        ]}
      />

      {/* Project Header */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                {project.category}
              </span>
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {project.difficulty}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-teal-600 dark:text-teal-400" />
                {project.estimatedTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="px-4 py-2 text-xs font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
            >
              &larr; Barcha loyihalar
            </Link>
          </div>
        </div>
      </div>

      {/* BOM (Bill of Materials) Interactive Checklist */}
      <ProjectBomChecklist materials={project.materials} />

      {/* Step-by-Step Instructions (Instructables Style) */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
          <Play className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
          Bosqichma-bosqich Yo&apos;riqnoma (Step-by-Step)
        </h2>

        <div className="space-y-6">
          {project.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4"
            >
              <div className="flex items-center space-x-3 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <span className="w-8 h-8 rounded-xl bg-teal-600 text-white font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  {step.stepNumber}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
              </div>

              {/* Step Content */}
              <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                {step.content}
              </div>

              {/* Schematic Note if present */}
              {step.schematicNote && (
                <div className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200">
                  <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{step.schematicNote}</span>
                </div>
              )}

              {/* Code Snippet if present */}
              {step.codeSnippet && (
                <div className="pt-2">
                  <CodeBlock
                    code={step.codeSnippet}
                    filename={`${project.slug}_firmware.ino`}
                    language="cpp"
                  />
                </div>
              )}

              {/* Tips if present */}
              {step.tips && step.tips.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
                    Foydali Maslahatlar:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {step.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Wokwi Simulator Section */}
      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
          <div className="flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Wokwi Interaktiv Simulyatori (Brauzerda Ishlatish)
            </h2>
          </div>
          <span className="text-xs text-teal-600 dark:text-teal-400 font-mono font-medium">
            Jonli Simulyatsiya
          </span>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Uskunalarni jismonan ulamasdan oldin, loyihani to&apos;g&apos;ridan-to&apos;g&apos;ri brauzerda sinab ko&apos;rishingiz mumkin:
        </p>

        {/* Wokwi iframe */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-inner">
          <iframe
            src={project.wokwiUrl || 'https://wokwi.com/projects/321525495084941906'}
            title={`${project.title} Wokwi Simulator`}
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </section>

      {/* Troubleshooting Table */}
      {project.troubleshooting.length > 0 && (
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Nosozliklarni Bartaraf Etish (Troubleshooting)
            </h2>
          </div>

          <div className="space-y-3">
            {project.troubleshooting.map((tr, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-xs space-y-1.5"
              >
                <div className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                  Muammo: {tr.problem}
                </div>
                <div className="text-teal-700 dark:text-teal-400 pl-4">
                  <strong>Yechim:</strong> {tr.solution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
