'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Heart } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-base text-zinc-900 dark:text-white">
                Arduino<span className="text-teal-600 dark:text-teal-400">Uz</span>
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Ochiq ta&apos;limiy elektronika va mikrokontrollerlar ensiklopediyasi
              </p>
            </div>
          </div>

          {/* Quick Clean Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/components" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Qurilmalar
            </Link>
            <Link href="/boards" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Platalar
            </Link>
            <Link href="/reference" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              C++ Qo&apos;llanma
            </Link>
            <Link href="/projects" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Loyihalar
            </Link>
            <a
              href="https://github.com/Tuxtamurod-Jurayev/arduino.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <p>&copy; 2026 ArduinoUz. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center space-x-1">
            <span>O&apos;zbekistonda</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-0.5" />
            <span>yaratildi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
