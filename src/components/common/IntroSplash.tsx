'use client';

import React, { useState, useEffect } from 'react';

export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(15);
  const [logs, setLogs] = useState<string[]>([
    '⚡ ATmega328P yadrosi ishga tushirilmoqda (16MHz)...',
  ]);
  const [statusText, setStatusText] = useState('Mikrokontroller yadrosi ishga tushirilmoqda...');

  useEffect(() => {
    // Jami vaqt: 3.2 sekund
    const t1 = setTimeout(() => {
      setProgress(45);
      setStatusText('Datchiklar va displeylar bazasi ulanmoqda...');
      setLogs((prev) => [
        ...prev,
        '📦 Datchiklar va displeylar yuklandi (HC-SR04, DHT11, OLED)...',
      ]);
    }, 700);

    const t2 = setTimeout(() => {
      setProgress(75);
      setStatusText('Motorlar va simsiz aloqa modullari sozlanmoqda...');
      setLogs((prev) => [
        ...prev,
        '⚙️ Motorlar va simsiz aloqa tayyor (SG90, L298N, HC-05)...',
      ]);
    }, 1400);

    const t3 = setTimeout(() => {
      setProgress(100);
      setStatusText('Tizim tayyor! Xush kelibsiz.');
      setLogs((prev) => [
        ...prev,
        '✅ Barcha qurilmalar va pinout sxemalari tayyor.',
      ]);
    }, 2200);

    // 2.8s da sekin xiralashish (fade-out) boshlanadi
    const t4 = setTimeout(() => {
      setFading(true);
    }, 2800);

    // 3.2s da butunlay yopiladi
    const t5 = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-y-auto px-4 py-6 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-opacity duration-400 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Circuit Ambient Glow (Theme-aware) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-teal-500/15 dark:bg-teal-500/20 rounded-full blur-[90px] sm:blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[70px] sm:blur-[100px]" />
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948812_1px,transparent_1px),linear-gradient(to_bottom,#0d948812_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#14b8a615_1px,transparent_1px),linear-gradient(to_bottom,#14b8a615_1px,transparent_1px)] bg-[size:28px_28px] sm:bg-[size:36px_36px]" />
      </div>

      {/* Main Center Box */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md sm:max-w-lg w-full my-auto">
        {/* Microcontroller Visual */}
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute -inset-4 sm:-inset-5 rounded-3xl bg-teal-500/20 dark:bg-teal-400/25 blur-xl animate-pulse" />
          
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-900 dark:to-teal-950 border-2 border-teal-500 dark:border-teal-400 shadow-[0_0_35px_rgba(20,184,166,0.3)] dark:shadow-[0_0_40px_rgba(20,184,166,0.5)] flex items-center justify-center">
            {/* Left Pins */}
            <div className="absolute -left-2 sm:-left-3 top-3 sm:top-4 bottom-3 sm:bottom-4 flex flex-col justify-between">
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-l-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-l-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-l-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-l-xs shadow-[0_0_8px_#14b8a6]" />
            </div>
            {/* Right Pins */}
            <div className="absolute -right-2 sm:-right-3 top-3 sm:top-4 bottom-3 sm:bottom-4 flex flex-col justify-between">
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-r-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-r-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-r-xs shadow-[0_0_8px_#14b8a6]" />
              <span className="w-2 sm:w-3 h-1 sm:h-1.5 bg-teal-500 dark:bg-teal-400 rounded-r-xs shadow-[0_0_8px_#14b8a6]" />
            </div>

            {/* Arduino Logo */}
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-teal-600 dark:text-teal-400 filter drop-shadow-[0_0_12px_rgba(20,184,166,0.6)] animate-pulse"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M30 15 C15 15 10 30 10 30 C10 30 15 45 30 45 C45 45 55 15 70 15 C85 15 90 30 90 30 C90 30 85 45 70 45 C55 45 45 15 30 15 Z" />
              <line x1="23" y1="30" x2="37" y2="30" strokeWidth="5" />
              <line x1="63" y1="30" x2="77" y2="30" strokeWidth="5" />
              <line x1="70" y1="23" x2="70" y2="37" strokeWidth="5" />
            </svg>
          </div>
        </div>

        {/* Portal Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 dark:from-teal-300 dark:via-teal-100 dark:to-emerald-300 bg-clip-text text-transparent px-2">
          ARDUINO ENSIKLOPEDIYASI
        </h1>
        <p className="text-[11px] sm:text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-mono tracking-wide px-2">
          Barcha datchiklar, modullar va ulanish sxemalari
        </p>

        {/* Live Terminal Log Box */}
        <div className="w-full mt-5 bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-teal-900/80 rounded-2xl p-3.5 text-left font-mono text-[11px] space-y-1.5 shadow-md dark:shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-2 text-[10px] text-zinc-500">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-emerald-400 animate-ping inline-block" />
              <span className="text-teal-600 dark:text-emerald-400 font-bold">BOOT SEQUENCE</span>
            </span>
            <span className="text-teal-600 dark:text-teal-400 font-bold">{progress}%</span>
          </div>

          <div className="space-y-1 min-h-[56px] overflow-hidden">
            {logs.slice(-3).map((log, idx) => (
              <p key={idx} className="text-zinc-700 dark:text-zinc-300 truncate transition-all duration-300">
                {log}
              </p>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[11px]">
            <span className="text-teal-600 dark:text-teal-300 truncate pr-2 font-semibold">
              &gt; {statusText}
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full mt-4">
          <div className="w-full h-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-teal-800/70 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-400 rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(20,184,166,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="mt-5 px-5 py-1.5 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-800 hover:border-teal-500 rounded-full transition-all cursor-pointer bg-zinc-100 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-xs"
        >
          O&apos;tkazib yuborish &rarr;
        </button>
      </div>

      {/* Bottom Footer Info */}
      <div className="mt-6 sm:absolute sm:bottom-6 text-[10px] sm:text-[11px] font-mono text-zinc-400 dark:text-zinc-500 flex items-center space-x-2">
        <span className="text-teal-600 dark:text-teal-400">●</span>
        <span>Open Hardware Guide</span>
        <span>•</span>
        <span>C++ Arduino Code</span>
        <span>•</span>
        <span>O&apos;zbek tilida</span>
      </div>
    </div>
  );
}
