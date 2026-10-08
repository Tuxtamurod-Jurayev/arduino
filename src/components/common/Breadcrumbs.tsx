import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-1.5 text-xs text-zinc-500 dark:text-zinc-400 py-3 overflow-x-auto">
      <Link
        href="/"
        className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Bosh sahifa</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 flex-shrink-0" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-800 dark:text-zinc-200 font-medium whitespace-nowrap">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
