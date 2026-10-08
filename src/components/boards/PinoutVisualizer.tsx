'use client';

import React, { useState } from 'react';
import { BoardItem } from '@/types';
import { Zap, Activity, Info, ShieldCheck } from 'lucide-react';

interface PinoutVisualizerProps {
  board: BoardItem;
}

export function PinoutVisualizer({ board }: PinoutVisualizerProps) {
  const [activePin, setActivePin] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const selectedPinData = board.pinoutSummary.find((p) => p.pin === activePin);

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'power':
        return 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50';
      case 'analog':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50';
      case 'pwm':
        return 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/50';
      case 'communication':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50';
      case 'special':
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50';
      default:
        return 'bg-zinc-500/15 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800';
    }
  };

  const filteredPins = board.pinoutSummary.filter((p) => {
    if (filterType === 'all') return true;
    return p.type === filterType;
  });

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
            <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
            Interaktiv Pinout va Oyoqchalar Xaritasi
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Pin ustiga bosing yoki tanlang — uning barcha vazifalari ko&apos;rsatiladi.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 text-xs font-medium">
          <button
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              filterType === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setFilterType('pwm')}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              filterType === 'pwm'
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800'
            }`}
          >
            PWM (~)
          </button>
          <button
            onClick={() => setFilterType('analog')}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              filterType === 'analog'
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            }`}
          >
            Analog (ADC)
          </button>
          <button
            onClick={() => setFilterType('communication')}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              filterType === 'communication'
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
            }`}
          >
            I2C / SPI / UART
          </button>
          <button
            onClick={() => setFilterType('power')}
            className={`px-2.5 py-1 rounded-lg border transition-all ${
              filterType === 'power'
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'
            }`}
          >
            Quvvat
          </button>
        </div>
      </div>

      {/* Pins Grid display */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
        {filteredPins.map((item) => {
          const isSelected = activePin === item.pin;
          return (
            <button
              key={item.pin}
              onClick={() => setActivePin(item.pin)}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'ring-2 ring-teal-500 shadow-md bg-teal-50 dark:bg-teal-950/50 border-teal-500'
                  : 'bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200 dark:border-zinc-700/60'
              }`}
            >
              <div className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                {item.pin}
              </div>
              <div className="mt-1">
                <span
                  className={`inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono font-medium rounded border ${getBadgeClass(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pin Detail Card */}
      {selectedPinData ? (
        <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 transition-all">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-base font-bold text-teal-800 dark:text-teal-300">
                {selectedPinData.pin}
              </span>
              <span
                className={`px-2 py-0.5 text-xs font-mono uppercase rounded-md border ${getBadgeClass(
                  selectedPinData.type
                )}`}
              >
                {selectedPinData.type}
              </span>
            </div>
            <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
            Imkoniyatlar va funksiyalar:
          </div>
          <ul className="mt-1.5 list-disc list-inside text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
            {selectedPinData.functions.map((fn, idx) => (
              <li key={idx} className="font-mono">
                {fn}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex items-center p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500">
          <Info className="w-4 h-4 mr-2 flex-shrink-0 text-teal-600 dark:text-teal-400" />
          Istalgan pin tugmasini bosib, uning qo&apos;shimcha vazifalarini ko&apos;ring.
        </div>
      )}
    </div>
  );
}
