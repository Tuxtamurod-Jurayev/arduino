'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { componentsData } from '@/data/components';
import { boardsData } from '@/data/boards';
import {
  Search,
  Zap,
  ArrowRight,
  Layers,
  CheckCircle2,
  Code2,
} from 'lucide-react';

export function DeviceSearchBox() {
  const [query, setQuery] = useState('');
  const [selectedDeviceSlug, setSelectedDeviceSlug] = useState<string>('hc-sr04');

  // Combined searchable devices (components + boards)
  const allDevices = useMemo(() => {
    const comps = componentsData.map((c) => ({
      type: 'component' as const,
      id: c.id,
      slug: c.slug,
      name: c.name,
      shortDesc: c.shortDesc,
      category: c.category,
      voltage: c.voltage,
      imageUrl: c.imageUrl,
      howItWorks: c.howItWorks,
      pinout: c.pinout,
      sampleCode: c.sampleCode,
      troubleshooting: c.troubleshooting,
      specs: c.specs,
    }));

    const boards = boardsData.map((b) => ({
      type: 'board' as const,
      id: b.id,
      slug: b.slug,
      name: b.title,
      shortDesc: b.description,
      category: 'Platalar',
      voltage: b.operatingVoltage,
      imageUrl: b.imageUrl,
      howItWorks: b.features.join('. '),
      pinout: b.pinoutSummary.map((p) => ({
        pin: p.pin,
        name: p.pin,
        type: 'Digital' as const,
        description: p.functions.join(', '),
      })),
      sampleCode: {
        title: `${b.title} sinov kodi (Blink)`,
        description: 'Standart platani tekshirish kodi',
        code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
        explanation: ['Platadagi 13-pindagi sinov LEDi miltillaydi.'],
      },
      troubleshooting: [
        {
          issue: 'Drayver muammosi',
          cause: b.driverInfo.description,
          solution: b.driverInfo.installSteps.join(' -> '),
        },
      ],
      specs: [
        { label: 'Chip', value: b.chip },
        { label: 'Kuchlanish', value: b.operatingVoltage },
        { label: 'Raqamli I/O', value: `${b.digitalPins} pin` },
        { label: 'Flash Xotira', value: b.flashMemory },
      ],
    }));

    return [...comps, ...boards];
  }, []);

  // Filtered devices list
  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allDevices.slice(0, 8);

    return allDevices.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.slug.toLowerCase().includes(q) ||
        d.shortDesc.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
    );
  }, [allDevices, query]);

  // Current active preview device
  const currentDevice = useMemo(() => {
    return (
      allDevices.find((d) => d.slug === selectedDeviceSlug) ||
      searchResults[0] ||
      allDevices[0]
    );
  }, [allDevices, selectedDeviceSlug, searchResults]);

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Title & Input */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>Tezkor Qurilma Qidiruvi & To&apos;liq O&apos;zbekcha Ma&apos;lumot</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            {allDevices.length} ta datchik va plata
          </span>
        </div>

        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Qurilma yoki datchik nomini yozing (masalan: HC-SR04, DHT11, SG90, L298N, Uno, Nano, Mega, Rele, RFID, OLED)..."
            className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:border-teal-500 outline-none text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 shadow-inner"
          />
        </div>

        {/* Quick Tag Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] text-zinc-400 mr-1 flex-shrink-0">Ommabop:</span>
          {['hc-sr04', 'dht11', 'oled-096-i2c', 'sg90-servo', 'l298n', 'rc522', 'arduino-uno-r3', 'esp32-devkit-v1'].map(
            (slug) => (
              <button
                key={slug}
                onClick={() => {
                  setSelectedDeviceSlug(slug);
                  setQuery('');
                }}
                className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all whitespace-nowrap ${
                  selectedDeviceSlug === slug
                    ? 'bg-teal-600 text-white font-bold'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {slug}
              </button>
            )
          )}
        </div>
      </div>

      {/* Main Split: Results List on Left, Live Uzbek Detail Dossier on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of matching devices */}
        <div className="lg:col-span-4 space-y-2 max-h-[250px] sm:max-h-[350px] lg:max-h-[620px] overflow-y-auto pr-1 custom-scrollbar">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block px-1">
            Topilgan Qurilmalar ({searchResults.length})
          </span>

          {searchResults.length === 0 ? (
            <div className="p-6 text-center text-xs text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
              Qurilma topilmadi. Boshqa nom bilan qidirib ko&apos;ring.
            </div>
          ) : (
            searchResults.map((device) => {
              const isSelected = currentDevice.slug === device.slug;
              return (
                <div
                  key={device.slug}
                  onClick={() => setSelectedDeviceSlug(device.slug)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 shadow-xs'
                      : 'bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                    {device.imageUrl && (
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={device.imageUrl}
                          alt={device.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {device.category}
                        </span>
                        {device.voltage && (
                          <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400">
                            {device.voltage}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {device.name}
                      </h4>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected
                        ? 'text-teal-600 dark:text-teal-400 translate-x-1'
                        : 'text-zinc-400'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Full Uzbek Information Dossier Card */}
        {currentDevice && (
          <div className="lg:col-span-8 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-6 space-y-5">
            {/* Header: Title, Category, Image & Detail Page Link */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="flex flex-col xs:flex-row sm:flex-row items-start gap-3.5 sm:gap-4 min-w-0 w-full sm:w-auto">
                {currentDevice.imageUrl && (
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex-shrink-0 shadow-sm mx-auto sm:mx-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentDevice.imageUrl}
                      alt={currentDevice.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
                      {currentDevice.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      ⚡ {currentDevice.voltage}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-extrabold text-zinc-900 dark:text-white break-words">
                    {currentDevice.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                    {currentDevice.shortDesc}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href={
                    currentDevice.type === 'board'
                      ? `/boards/${currentDevice.slug}`
                      : `/components/${currentDevice.slug}`
                  }
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors shadow-xs whitespace-nowrap"
                >
                  <span>To&apos;liq Sahifasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Technical Specs Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              {currentDevice.specs.slice(0, 4).map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                >
                  <span className="block text-[10px] text-zinc-400 uppercase truncate">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* How It Works (Ishlash prinsipi) */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 mr-1.5" />
                Qanday Ishlaydi? (Ishlash Prinsipi)
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed bg-white dark:bg-zinc-900 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                {currentDevice.howItWorks}
              </p>
            </div>

            {/* Pinout (Oyoqchalari) Summary Table */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mr-1.5" />
                Oyoqchalari (Pinout xaritasi)
              </span>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <table className="w-full text-xs text-left">
                  <thead className="bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 font-mono text-[11px]">
                    <tr>
                      <th className="py-2 px-3">Pin</th>
                      <th className="py-2 px-3">Nomi</th>
                      <th className="py-2 px-3">Vazifasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {currentDevice.pinout.slice(0, 4).map((p, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="py-1.5 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                          {p.pin}
                        </td>
                        <td className="py-1.5 px-3 font-mono text-zinc-700 dark:text-zinc-300">
                          {p.name}
                        </td>
                        <td className="py-1.5 px-3 text-zinc-500 dark:text-zinc-400">
                          {p.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Code Snippet Preview */}
            {currentDevice.sampleCode && (
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center">
                  <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 mr-1.5" />
                  {currentDevice.sampleCode.title}
                </span>
                <div className="p-3 rounded-2xl bg-zinc-950 font-mono text-xs text-teal-400 border border-zinc-800 max-h-48 overflow-y-auto overflow-x-auto">
                  <pre className="whitespace-pre">{currentDevice.sampleCode.code}</pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
