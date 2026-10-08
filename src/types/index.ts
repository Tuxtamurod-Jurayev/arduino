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
  type: 'VCC' | 'GND' | 'Digital' | 'Analog' | 'I2C' | 'SPI' | 'UART' | 'PWM' | 'Quvvat';
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

export type ReferenceCategory =
  | 'Asosiy tuzilma'
  | 'Boshqaruv operatorlari'
  | 'Ma\'lumotlar turlari'
  | 'Raqamli I/O'
  | 'Analog I/O'
  | 'Vaqt (Time)'
  | 'Matematika'
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
  wokwiId?: string; // Wokwi project ID if available
  wokwiUrl?: string; // Direct embed URL
  steps: ProjectStep[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
}
