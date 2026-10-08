import { DeviceItem } from '@/types/device';
import { sensorsData } from './sensors';
import { displaysData } from './displays';
import { motorsData } from './motors';
import { wirelessData } from './wireless';

// Barcha qurilmalarning yagona birlashgan bazasi
export const allDevicesData: DeviceItem[] = [
  ...sensorsData,
  ...displaysData,
  ...motorsData,
  ...wirelessData,
];

// Slug bo'yicha topish
export function getDeviceBySlug(slug: string): DeviceItem | undefined {
  return allDevicesData.find((d) => d.slug === slug);
}

// Kategoriya bo'yicha filtrlash
export function getDevicesByCategory(category: string): DeviceItem[] {
  return allDevicesData.filter((d) => d.category === category);
}

// Barcha toifalar ro'yxati
export const deviceCategories = [
  'Barchasi',
  'Datchiklar',
  'Displeylar',
  'Motorlar va Drayverlar',
  'Simsiz Aloqa Modullari',
] as const;

export { sensorsData, displaysData, motorsData, wirelessData };
