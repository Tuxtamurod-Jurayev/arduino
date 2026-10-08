'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Heart } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-zinc-900 dark:text-white">
                Arduino<span className="text-teal-600 dark:text-teal-400">Uz</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              O&apos;zbek tilidagi birinchi keng qamrovli interaktiv Arduino, mikrokontrollerlar, datchiklar va robototexnika portali.
            </p>
          </div>

          {/* Column 1: Hardware */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
              Qurilmalar
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/components/hc-sr04" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  HC-SR04 Masofa datchigi
                </Link>
              </li>
              <li>
                <Link href="/components/dht11" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  DHT11 Harorat datchigi
                </Link>
              </li>
              <li>
                <Link href="/components/oled-096-i2c" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  OLED 0.96&quot; Displey
                </Link>
              </li>
              <li>
                <Link href="/components/sg90-servo" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  SG90 Micro Servo
                </Link>
              </li>
              <li>
                <Link href="/components" className="text-teal-600 dark:text-teal-400 font-medium">
                  Barcha komponentlar &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Reference */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
              C++ Qo&apos;llanma
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/reference/setup" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  setup() va loop()
                </Link>
              </li>
              <li>
                <Link href="/reference/pinmode" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  pinMode() sozlamalari
                </Link>
              </li>
              <li>
                <Link href="/reference/digitalwrite" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  digitalWrite() va digitalRead()
                </Link>
              </li>
              <li>
                <Link href="/reference/millis" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  millis() va taymerlar
                </Link>
              </li>
              <li>
                <Link href="/reference" className="text-teal-600 dark:text-teal-400 font-medium">
                  To&apos;liq lug&apos;at &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Boards & Open Source */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
              Platalar & Manba
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/boards/arduino-uno-r3" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Arduino Uno R3
                </Link>
              </li>
              <li>
                <Link href="/boards/arduino-nano" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Arduino Nano
                </Link>
              </li>
              <li>
                <Link href="/boards/esp32-devkit-v1" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  ESP32 DevKit V1
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Tuxtamurod-Jurayev/arduino.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-zinc-700 dark:text-zinc-300 hover:text-teal-600 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; 2026 ArduinoUz. Barcha huquqlar himoyalangan. Ochiq ta&apos;limiy portal.
          </p>
          <div className="flex items-center space-x-1">
            <span>O&apos;zbekistonda</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-0.5" />
            <span>bilan yaratildi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
