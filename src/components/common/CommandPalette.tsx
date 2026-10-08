'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  Cpu,
  BookOpen,
  FolderGit2,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { componentsData } from '@/data/components';
import { boardsData } from '@/data/boards';
import { referenceData } from '@/data/reference';
import { projectsData } from '@/data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Reset query when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keydown listener for Esc and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered search results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default recommendations
      return [
        {
          id: 'comp-hc-sr04',
          title: 'HC-SR04 Ultrasonik Masofa Datchigi',
          category: 'Komponentlar',
          type: 'component',
          href: '/components/hc-sr04',
          desc: 'Masofa o\'lchash datchigi',
        },
        {
          id: 'ref-digitalWrite',
          title: 'digitalWrite()',
          category: 'Sintaksis & Funksiyalar',
          type: 'reference',
          href: '/reference/digitalwrite',
          desc: 'Raqamli pinga HIGH yoki LOW berish',
        },
        {
          id: 'board-uno',
          title: 'Arduino Uno R3',
          category: 'Platalar',
          type: 'board',
          href: '/boards/arduino-uno-r3',
          desc: 'ATmega328P mikrokontrolleri',
        },
        {
          id: 'proj-weather',
          title: 'Ixcham Ob-havo Stansiyasi (DHT11 + OLED)',
          category: 'Loyihalar',
          type: 'project',
          href: '/projects/smart-weather-station',
          desc: 'Harorat va namlik monitoringi',
        },
      ];
    }

    const items: Array<{
      id: string;
      title: string;
      category: string;
      type: string;
      href: string;
      desc: string;
    }> = [];

    // Search components
    componentsData.forEach((comp) => {
      if (
        comp.name.toLowerCase().includes(q) ||
        comp.slug.toLowerCase().includes(q) ||
        comp.shortDesc.toLowerCase().includes(q)
      ) {
        items.push({
          id: comp.id,
          title: comp.name,
          category: 'Komponentlar',
          type: 'component',
          href: `/components/${comp.slug}`,
          desc: comp.shortDesc,
        });
      }
    });

    // Search reference
    referenceData.forEach((ref) => {
      if (
        ref.name.toLowerCase().includes(q) ||
        ref.slug.toLowerCase().includes(q) ||
        ref.summary.toLowerCase().includes(q)
      ) {
        items.push({
          id: ref.id,
          title: ref.name,
          category: 'Sintaksis & Funksiyalar',
          type: 'reference',
          href: `/reference/${ref.slug}`,
          desc: ref.summary,
        });
      }
    });

    // Search boards
    boardsData.forEach((board) => {
      if (
        board.title.toLowerCase().includes(q) ||
        board.chip.toLowerCase().includes(q) ||
        board.description.toLowerCase().includes(q)
      ) {
        items.push({
          id: board.id,
          title: board.title,
          category: 'Platalar',
          type: 'board',
          href: `/boards/${board.slug}`,
          desc: board.chip,
        });
      }
    });

    // Search projects
    projectsData.forEach((proj) => {
      if (
        proj.title.toLowerCase().includes(q) ||
        proj.summary.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q)
      ) {
        items.push({
          id: proj.id,
          title: proj.title,
          category: 'Loyihalar',
          type: 'project',
          href: `/projects/${proj.slug}`,
          desc: proj.summary,
        });
      }
    });

    return items.slice(0, 8); // limit top results
  }, [query]);

  // Handle arrow key navigation in results
  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      router.push(results[selectedIndex].href);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 transition-all animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownList}
            placeholder="Datchik, funksiya, plata yoki loyihani qidiring... (masalan, HC-SR04, digitalWrite, Uno)"
            className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 text-sm md:text-base outline-none focus:ring-0"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded border border-zinc-300 dark:border-zinc-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-zinc-100 dark:divide-zinc-800/40">
          {results.length === 0 ? (
            <div className="py-12 text-center text-zinc-400 text-sm">
              Hech narsa topilmadi. Boshqa so&apos;z bilan qidirib ko&apos;ring.
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 border border-teal-200/50 dark:border-teal-800/50'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0 pr-3">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        item.type === 'component'
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : item.type === 'reference'
                          ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                          : item.type === 'board'
                          ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      }`}
                    >
                      {item.type === 'component' && <Layers className="w-4 h-4" />}
                      {item.type === 'reference' && <BookOpen className="w-4 h-4" />}
                      {item.type === 'board' && <Cpu className="w-4 h-4" />}
                      {item.type === 'project' && <FolderGit2 className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm truncate">{item.title}</span>
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected
                        ? 'text-teal-600 dark:text-teal-400 translate-x-0.5'
                        : 'text-zinc-400 opacity-0'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts info */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950/80 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500">
          <div className="flex items-center space-x-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-300 dark:border-zinc-700 font-mono">
                ↑
              </kbd>{' '}
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-300 dark:border-zinc-700 font-mono">
                ↓
              </kbd>{' '}
              Tanlash
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-300 dark:border-zinc-700 font-mono">
                Enter
              </kbd>{' '}
              Ochish
            </span>
          </div>
          <span className="text-teal-600 dark:text-teal-400 font-medium">ArduinoUz Hub</span>
        </div>
      </div>
    </div>
  );
}
