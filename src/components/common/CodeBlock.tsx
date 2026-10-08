'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'cpp',
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-mono text-sm shadow-md my-4">
      {/* Top Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          {filename && <span className="text-zinc-300 font-medium">{filename}</span>}
          {!filename && <span className="uppercase text-[11px] font-semibold text-teal-400 tracking-wider">{language}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors border border-zinc-700"
          title="Kodni nusxalash"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-teal-400 font-medium">Nusxalandi!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Nusxalash</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed select-text">
        <pre className="flex">
          {showLineNumbers && (
            <div className="flex flex-col pr-4 mr-3 text-right text-zinc-600 select-none border-r border-zinc-800/80">
              {lines.map((_, i) => (
                <span key={i} className="text-xs leading-relaxed">
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <code className="text-zinc-200 flex-1 leading-relaxed">
            {lines.map((line, idx) => {
              // Basic color highlights for comments and keywords
              const isComment = line.trim().startsWith('//');
              const isInclude = line.trim().startsWith('#include') || line.trim().startsWith('#define');

              return (
                <div key={idx} className="whitespace-pre">
                  {isComment ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : isInclude ? (
                    <span className="text-purple-400 font-semibold">{line}</span>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
