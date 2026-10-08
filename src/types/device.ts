// ============================================================
// UNIVERSAL DEVICE TYPE — ArduinoUz Hub
// Barcha qurilmalar (sensorlar, displeylar, motorlar,
// platalar, modullar va h.k.) uchun yagona tip.
// ============================================================

export type DeviceCategory =
  | 'Sensorlar'
  | 'Datchiklar'
  | 'Displeylar'
  | 'Motorlar'
  | 'Motorlar va Drayverlar'
  | 'Simsiz aloqa'
  | 'Simsiz Aloqa Modullari'
  | 'Quvvat modullari'
  | 'Platalar'
  | 'Passiv komponentlar'
  | 'Boshqaruv modullari'
  | 'Ovoz modullari'
  | 'Xotira va ID';

export type DeviceType =
  | 'sensor'
  | 'display'
  | 'motor'
  | 'wireless'
  | 'power'
  | 'board'
  | 'passive'
  | 'control'
  | 'audio'
  | 'storage'
  | 'relay';

export type PinType =
  | 'VCC'
  | 'GND'
  | 'Digital'
  | 'Analog'
  | 'I2C'
  | 'SPI'
  | 'UART'
  | 'PWM'
  | 'Special'
  | 'POWER'
  | 'OUTPUT'
  | 'INPUT'
  | 'DIGITAL';

export interface DevicePin {
  pin: string;         // Pin raqami yoki nomi (masalan: "1", "VCC", "D2")
  name: string;        // Funksional nomi (masalan: "TRIG", "SDA", "OUT")
  type: PinType;
  description: string; // O'zbek tilida tavsif
}

export interface DeviceWiring {
  from: string;   // Qurilma pini
  to: string;     // Arduino pini
  note?: string;  // Qo'shimcha izoh (sim rangi va h.k.)
}

export interface DeviceTroubleshooting {
  issue: string;    // Muammo nomi
  cause: string;    // Sababi
  solution: string; // Yechim
}

export interface DeviceSpec {
  label: string;
  value: string;
}

// 3 tilli matn strukturasi
export interface I18nText {
  uz: string; // O'zbek tili
  ru: string; // Rus tili
  en: string; // Ingliz tili
}

export interface DeviceItem {
  // ── Identifikatsiya ──────────────────────────────────────
  id: string;
  slug: string;
  type: DeviceType;
  category: DeviceCategory;

  // ── Ko'p tilli ma'lumotlar ───────────────────────────────
  name: I18nText;
  shortDesc: I18nText;    // Qisqa tavsif (1-2 jumla)
  overview: I18nText;     // To'liq tavsif
  howItWorks: I18nText;   // Ishlash prinsipi
  useCases: I18nText;     // Qayerda ishlatiladi

  // ── Texnik ma'lumotlar ───────────────────────────────────
  voltage: string;        // Ishchi kuchlanish (masalan: "5V DC")
  current?: string;       // Tok sarfi (masalan: "15 mA")
  specs: DeviceSpec[];    // Texnik parametrlar jadvali

  // ── Vizual ──────────────────────────────────────────────
  imageUrl?: string;      // Qurilma rasmi URL
  datasheetUrl?: string;  // PDF datasheet linki

  // ── Pinout ──────────────────────────────────────────────
  pinout: DevicePin[];

  // ── Ulanish sxemasi ─────────────────────────────────────
  wiring: {
    title: I18nText;
    description: I18nText;
    connections: DeviceWiring[];
  };

  // ── Sinov kodi ──────────────────────────────────────────
  sampleCode?: {
    title?: I18nText;
    description?: I18nText;
    libraryNeeded?: I18nText;
    code: string;             // Arduino C++ kodi
    explanation?: I18nText[]; // Kod tushuntirishi qatorlari
  };
  codeExample?: {
    title?: I18nText;
    description?: I18nText;
    libraryNeeded?: I18nText;
    code: string;
    explanation?: I18nText[];
  };

  // ── Muammolar va yechimlar ───────────────────────────────
  troubleshooting: DeviceTroubleshooting[];

  // ── Qo'shimcha ──────────────────────────────────────────
  relatedSlugs?: string[]; // Bog'liq qurilmalar sluglari
  tags?: string[];         // Qidiruvda yordam beruvchi teglar
}
