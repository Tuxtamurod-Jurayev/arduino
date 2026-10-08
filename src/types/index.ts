export type ComponentCategory =
  | 'Sensorlar'
  | 'Displeylar'
  | 'Motorlar'
  | 'Simsiz aloqa'
  | 'Quvvat ta\'minoti'
  | 'Modullar';

export interface PinoutItem {
  pin: string;
  name: string;
  type: 'VCC' | 'GND' | 'Digital' | 'Analog' | 'I2C' | 'SPI' | 'UART' | 'PWM' | 'Quvvat' | 'Special';
  description: string;
}

export interface ComponentItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  category: ComponentCategory;
  voltage: string;
  current: string;
  imageUrl?: string;
  specs: {
    label: string;
    value: string;
  }[];
  overview: string;
  howItWorks: string;
  pinout: PinoutItem[];
  wiringDiagram: {
    title: string;
    description: string;
    connections: { from: string; to: string; note?: string }[];
  };
  sampleCode: {
    title: string;
    description: string;
    code: string;
    explanation: string[];
  };
  troubleshooting: {
    issue: string;
    cause: string;
    solution: string;
  }[];
}

export interface BoardItem {
  id: string;
  slug: string;
  title: string;
  chip: string;
  imageUrl?: string;
  pinoutImageUrl?: string;
  operatingVoltage: string;
  inputVoltage: string;
  digitalPins: number;
  pwmPins: number;
  analogPins: number;
  flashMemory: string;
  sram: string;
  eeprom: string;
  clockSpeed: string;
  description: string;
  features: string[];
  pinoutSummary: {
    pin: string;
    functions: string[];
    type: 'power' | 'digital' | 'analog' | 'pwm' | 'communication' | 'special';
  }[];
  driverInfo: {
    chipName: string;
    description: string;
    installSteps: string[];
  };
}

export type ReferencePillar = 'operators' | 'data' | 'functions';

export type ReferenceCategory =
  | 'Asosiy tuzilma'
  | 'Boshqaruv operatorlari'
  | 'Taqqoslash operatorlari'
  | 'Mantiqiy operatorlar'
  | 'Arifmetik operatorlar'
  | 'Bitli operatorlar'
  | 'Konstantalar'
  | 'Ma\'lumotlar turlari'
  | 'Tip o\'zgartirish'
  | 'O\'zgaruvchilar va modifikatorlar'
  | 'Raqamli I/O'
  | 'Analog I/O'
  | 'Kengaytirilgan I/O'
  | 'Vaqt (Time)'
  | 'Matematika va Trigonometriya'
  | 'Tasodifiy sonlar'
  | 'Bitlar bilan ishlash'
  | 'Tashqi uzilishlar (Interrupts)'
  | 'Serial aloqa';

export interface ReferenceParam {
  name: string;
  type: string;
  description: string;
}

export interface ReferenceItem {
  id: string;
  slug: string;
  name: string;
  pillar: ReferencePillar;
  pillarLabel: 'Операторы' | 'Данные' | 'Функции';
  category: ReferenceCategory;
  summary: string;
  syntax: string;
  parameters: ReferenceParam[];
  returnValue: string;
  description: string;
  exampleCode: string;
  exampleExplanation: string[];
  notes: string[];
  relatedSlugs?: string[];
}

export type ProjectDifficulty = 'Boshlang\'ich' | 'O\'rta' | 'Murakkab';

export interface ProjectMaterial {
  name: string;
  quantity: string;
  componentSlug?: string;
}

export interface ProjectStep {
  stepNumber: number;
  title: string;
  content: string;
  schematicNote?: string;
  codeSnippet?: string;
  tips?: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  difficulty: ProjectDifficulty;
  estimatedTime: string;
  category: string;
  materials: ProjectMaterial[];
  wokwiId?: string;
  wokwiUrl?: string;
  steps: ProjectStep[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
}

export interface DocSection {
  id: string;
  title: string;
  slug: string;
  description: string;
  readTime: string;
  topics: {
    title: string;
    description: string;
    badge?: string;
  }[];
  content: string;
}
