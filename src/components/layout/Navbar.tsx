'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Cpu,
  Search,
  Moon,
  Sun,
  Bookmark,
  Menu,
  X,
  Layers,
  BookOpen,
  FolderGit2,
  FileText,
} from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';
import { useTheme } from '@/context/ThemeContext';
import { useFavorites } from '@/context/FavoritesContext';
import { CommandPalette } from '@/components/common/CommandPalette';

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { href: '/components', label: 'Komponentlar', icon: Layers },
    { href: '/boards', label: 'Platalar', icon: Cpu },
    { href: '/reference', label: 'Qo\'llanma', icon: BookOpen },
    { href: '/projects', label: 'Loyihalar', icon: FolderGit2 },
    { href: '/docs', label: 'Hujjatlar', icon: FileText },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Version badge */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 rounded-xl bg-teal-600 dark:bg-teal-500 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white">
                  Arduino<span className="text-teal-600 dark:text-teal-400">Uz</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Command Palette Trigger Button */}
          <div className="flex-1 max-w-md hidden md:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all shadow-inner"
            >
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-zinc-400" />
                <span>Qidirish... (Datchik, funksiya, loyiha)</span>
              </div>
              <kbd className="hidden lg:inline-flex items-center gap-1 font-mono text-[10px] font-semibold bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-500">
                <span className="text-[12px]">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Right Navigation & Tools */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Nav links on desktop */}
            <nav className="hidden md:flex items-center space-x-1 mr-2">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold'
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile search button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 md:hidden text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              title="Qidiruv"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites link */}
            <Link
              href="/favorites"
              className="relative p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              title="Saqlanganlar"
            >
              <Bookmark className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
              title={theme === 'dark' ? 'Yorug\' rejim' : 'Qorong\'i rejim'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-700" />
              )}
            </button>

            {/* GitHub button */}
            <a
              href="https://github.com/Tuxtamurod-Jurayev/arduino.git"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors hidden sm:block"
              title="GitHub ombori"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-semibold'
                      : 'text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Loyiha kodi:</span>
              <a
                href="https://github.com/Tuxtamurod-Jurayev/arduino.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs text-teal-600 dark:text-teal-400 font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repozitoriy</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette modal */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
