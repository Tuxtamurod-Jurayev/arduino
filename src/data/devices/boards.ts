import { DeviceItem } from '@/types/device';

export const boardsDeviceData: DeviceItem[] = [
  // ─────────────────────────────────────────────
  // 1. Arduino Uno R3
  // ─────────────────────────────────────────────
  {
    id: 'board-001',
    slug: 'arduino-uno-r3',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Uno R3 Mikrokontroller Platasi',
      ru: 'Микроконтроллерная плата Arduino Uno R3',
      en: 'Arduino Uno R3 Microcontroller Board',
    },
    shortDesc: {
      uz: "Dunyodagi eng mashhur va o'rganish uchun eng qulay 8-bitli mikrokontroller platasi.",
      ru: 'Самая популярная и удобная 8-битная отладочная плата в мире на базе ATmega328P.',
      en: 'The most popular and beginner-friendly 8-bit microcontroller board based on ATmega328P.',
    },
    overview: {
      uz: "Arduino Uno R3 — robototexnika va mikrokontrollerlarni o'rganishdagi standart plata. Unda ATmega328P mikrokontrolleri, 16 MHz takt chastotasi, 14 ta raqamli kirish/chiqish liniyasi, 6 ta analog kirish va USB-B dasturlash porti mavjud.",
      ru: 'Arduino Uno R3 — стандартная плата для изучения робототехники на микроконтроллере ATmega328P с частотой 16 МГц, 14 цифровыми портами и 6 аналоговыми входами.',
      en: 'Arduino Uno R3 is the benchmark board for learning electronics, powered by the ATmega328P running at 16 MHz with 14 digital I/O pins and 6 analog inputs.',
    },
    howItWorks: {
      uz: "Kompyuter orqali C++ sketch kodi USB port orqali ATmega328P flesh xotirasiga yoziladi. Plata 5V mantiqiy darajada ishlaydi va datchiklardan kelayotgan signallarni tahlil qilib motorlar, displeylar va relelarni boshqaradi.",
      ru: 'Код загружается через USB в память программ микроконтроллера. Плата работает на логике 5В, считывает датчики и управляет исполнительными механизмами.',
      en: 'Code is uploaded via USB to the ATmega328P flash memory. Operates at 5V logic to read sensors and actuate motors, displays, and relays.',
    },
    useCases: {
      uz: "Ta'limiy robotlar | Uy avtomatizatsiyasi | Datchiklar monitoringi | STEM darslari",
      ru: 'Учебные роботы | Умный дом | Сбор телеметрии | STEM обучение',
      en: 'Educational robots | Home automation | Sensor monitoring | STEM education',
    },
    voltage: '5V DC (Ishchi), 7-12V (Tashqi Vin/Jack)',
    current: '50 mA (plata o\'zi), 500 mA (maksimal 5V chiqish)',
    imageUrl: 'https://yarat.uz/wp-content/uploads/2023/05/UNOR3-e1705082394439.jpg',
    datasheetUrl: 'https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf',
    specs: [
      { label: 'Mikrokontroller', value: 'ATmega328P (8-bit AVR)' },
      { label: 'Takt chastotasi', value: '16 MHz' },
      { label: 'Raqamli I/O pinlar', value: '14 ta (6 tasi PWM)' },
      { label: 'Analog kirishlar', value: '6 ta (10-bit ADC)' },
      { label: 'Flesh xotira (Flash)', value: '32 KB (0.5 KB bootloader)' },
      { label: 'SRAM tezkor xotira', value: '2 KB' },
      { label: 'EEPROM xotira', value: '1 KB' },
    ],
    pinout: [
      { pin: 'D0 (RX)', name: 'RX', type: 'UART', description: 'Serial qabul qilish liniyasi' },
      { pin: 'D1 (TX)', name: 'TX', type: 'UART', description: 'Serial uzatish liniyasi' },
      { pin: 'D2', name: 'INT0', type: 'Digital', description: 'Raqamli I/O va tashqi uzilish 0' },
      { pin: 'D3', name: 'PWM / INT1', type: 'PWM', description: 'PWM impuls va tashqi uzilish 1' },
      { pin: 'D5', name: 'PWM', type: 'PWM', description: '8-bitli PWM chiqish' },
      { pin: 'D6', name: 'PWM', type: 'PWM', description: '8-bitli PWM chiqish' },
      { pin: 'D9', name: 'PWM', type: 'PWM', description: '8-bitli PWM chiqish' },
      { pin: 'D10', name: 'PWM / SS', type: 'PWM', description: 'PWM va SPI Slave Select' },
      { pin: 'D11', name: 'PWM / MOSI', type: 'PWM', description: 'PWM va SPI Master Out' },
      { pin: 'D12', name: 'MISO', type: 'Digital', description: 'SPI Master In Slave Out' },
      { pin: 'D13', name: 'SCK / LED', type: 'Digital', description: 'SPI Takt va o\'rnatilgan test LED' },
      { pin: 'A0-A3', name: 'ADC', type: 'Analog', description: '10-bit analog o\'lchash kirishlari' },
      { pin: 'A4', name: 'SDA', type: 'I2C', description: 'I2C ma\'lumotlar liniyasi' },
      { pin: 'A5', name: 'SCL', type: 'I2C', description: 'I2C takt chastotasi liniyasi' },
      { pin: '5V', name: '5V Out', type: 'VCC', description: 'Stabilizatsiyalangan 5V ta\'minot' },
      { pin: '3.3V', name: '3.3V Out', type: 'VCC', description: '3.3V quvvat chiqishi (maks 50mA)' },
      { pin: 'GND', name: 'Ground', type: 'GND', description: 'Umumiy yer / korpus' },
      { pin: 'Vin', name: 'Vin', type: 'VCC', description: 'Tashqi 7-12V quvvat kirishi' },
    ],
    wiring: {
      title: {
        uz: 'Kompyuterga ulash va birinchi sinov',
        ru: 'Подключение к ПК и первый тест',
        en: 'Connecting to PC and first test',
      },
      description: {
        uz: 'Arduino Uno platasini standart USB-A -> USB-B kabeli orqali kompyuterga ulang. CH340 yoki 16U2 drayveri avtomatik taniladi.',
        ru: 'Подключите плату к компьютеру стандартным USB кабелем.',
        en: 'Connect the board to your PC using a standard USB-A to USB-B cable.',
      },
      connections: [
        { from: 'USB Port', to: 'Kompyuter USB', note: 'Quvvat va sketch yuklash' },
      ],
    },
    sampleCode: {
      title: {
        uz: 'Birinchi sinov kodi: Blink LED',
        ru: 'Тестовый код: Мигающий светодиод Blink',
        en: 'First test code: Blink LED',
      },
      description: {
        uz: 'Platadagi 13-pindagi sinov svetodiodini 1 soniya interval bilan yondirib-o\'chirish kodi.',
        ru: 'Мигание встроенным тестовым светодиодом на выводе 13.',
        en: 'Blinks the onboard LED attached to digital pin 13.',
      },
      code: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
      explanation: [
        {
          uz: 'pinMode(LED_BUILTIN, OUTPUT) — 13-pinni signal chiqarish holatiga keltiradi.',
          ru: 'pinMode(LED_BUILTIN, OUTPUT) — настраивает 13-й вывод на вывод сигнала.',
          en: 'pinMode(LED_BUILTIN, OUTPUT) sets the built-in LED pin to output.',
        },
      ],
    },
    troubleshooting: [
      {
        issue: 'Arduino IDE platani ko\'rmayapti (Port xatoligi)',
        cause: 'CH340 USB-UART drayveri kompyuterga o\'rnatilmagan.',
        solution: 'CH340 drayverini yuklab olib o\'rnating va qurilmalar boshqaruvchisidan COM portni tekshiring.',
      },
      {
        issue: 'avrdude: stk500_recv(): programmer is not responding',
        cause: 'D0 (RX) yoki D1 (TX) pinlariga qandaydir datchik ulangan.',
        solution: 'Sketch yuklayotganda RX/TX pinlaridagi barcha simlarni vaqtincha uzib turing.',
      },
    ],
    tags: ['uno', 'atmega328p', 'ch340', 'board', 'microcontroller'],
  },

  // ─────────────────────────────────────────────
  // 2. Arduino Nano V3.0
  // ─────────────────────────────────────────────
  {
    id: 'board-002',
    slug: 'arduino-nano',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Nano V3.0 Mikrokontroller Platasi',
      ru: 'Микроконтроллерная плата Arduino Nano V3.0',
      en: 'Arduino Nano V3.0 Microcontroller Board',
    },
    shortDesc: {
      uz: "Breadboard uchun mos ixcham o'lchamli, to'liq funksional ATmega328P platasi.",
      ru: 'Компактная плата на базе ATmega328P, идеально подходящая для макетной платы.',
      en: 'Compact breadboard-friendly microcontroller board powered by ATmega328P.',
    },
    overview: {
      uz: "Arduino Nano — Uno platasining barcha imkoniyatlariga ega, lekin o'lchami atigi 18x45 mm bo'lgan ixcham versiya. Unda hatto Uno'dan 2 ta ko'p, ya'ni 8 ta analog kirish (A0-A7) mavjud.",
      ru: 'Arduino Nano имеет те же возможности что и Uno, но в форм-факторе 18x45 мм и с 8 аналоговыми входами (A0-A7).',
      en: 'Arduino Nano packs all Uno capabilities into a compact 18x45 mm form factor with 8 analog inputs (A0-A7).',
    },
    howItWorks: {
      uz: "Mini/Micro USB yoki Type-C port orqali dasturlanadi. Maket platasiga (Breadboard) to'g'ridan-to'g'ri tiqilib ishlatiladi.",
      ru: 'Программируется через USB и устанавливается прямо в макетную плату.',
      en: 'Programmed over USB and plugs directly into standard breadboards.',
    },
    useCases: {
      uz: "Ixcham robotlar | Dronlar | Portativ gadjetlar | Breadboard prototiplari",
      ru: 'Мини-роботы | Дроны | Портативные гаджеты | Прототипирование',
      en: 'Mini robotics | Drones | Wearable projects | Breadboard prototyping',
    },
    voltage: '5V DC (USB), 7-12V (Vin)',
    current: '20 mA (bo\'sh holatda)',
    imageUrl: 'https://yarat.uz/wp-content/uploads/2023/05/nano-v3-e1705082531649.jpg',
    specs: [
      { label: 'Chip', value: 'ATmega328P' },
      { label: 'Raqamli I/O', value: '14 ta (6 ta PWM)' },
      { label: 'Analog kirish', value: '8 ta (A0-A7)' },
      { label: 'Flesh xotira', value: '32 KB' },
      { label: 'O\'lchami', value: '18 x 45 mm' },
    ],
    pinout: [
      { pin: 'D0-D13', name: 'Digital I/O', type: 'Digital', description: 'Raqamli kirish/chiqish liniyalari' },
      { pin: 'A0-A7', name: 'Analog In', type: 'Analog', description: 'Analog o\'lchash kirishlari' },
      { pin: '5V / 3.3V', name: 'VCC', type: 'VCC', description: 'Quvvat manbalari' },
      { pin: 'GND', name: 'Ground', type: 'GND', description: 'Manfiy yer' },
    ],
    wiring: {
      title: { uz: 'Breadboardga o\'rnatish', ru: 'Установка на макетную плату', en: 'Plugging into Breadboard' },
      description: {
        uz: 'Nanoni breadboard o\'rtasidagi tirqish ustiga tekis o\'rnating.',
        ru: 'Вставьте плату ровно по центру макетной платы.',
        en: 'Mount the Nano across the center groove of a breadboard.',
      },
      connections: [{ from: 'USB', to: 'Kompyuter', note: 'Dasturlash' }],
    },
    troubleshooting: [
      {
        issue: 'Old Bootloader xatosi',
        cause: 'Xitoy klonlarida eski ATmega328P bootloaderi yozilgan bo\'lishi mumkin.',
        solution: 'Arduino IDE -> Tools -> Processor menyusidan "ATmega328P (Old Bootloader)" ni tanlang.',
      },
    ],
    tags: ['nano', 'atmega328p', 'ch340', 'compact'],
  },

  // ─────────────────────────────────────────────
  // 3. ESP32 DevKit V1
  // ─────────────────────────────────────────────
  {
    id: 'board-003',
    slug: 'esp32-devkit-v1',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'ESP32 DevKit V1 (Wi-Fi + Bluetooth IoT Platasi)',
      ru: 'Плата ESP32 DevKit V1 (Wi-Fi + BLE IoT)',
      en: 'ESP32 DevKit V1 (Wi-Fi + Bluetooth IoT Board)',
    },
    shortDesc: {
      uz: "240 MHz ikki yadroli protsessor, Wi-Fi va Bluetooth bilan ta'minlangan eng kuchli IoT platasi.",
      ru: 'Мощный двухъядерный процессор 240 МГц с Wi-Fi и Bluetooth для интернета вещей.',
      en: 'High-performance 240 MHz dual-core board with built-in Wi-Fi and Bluetooth for IoT.',
    },
    overview: {
      uz: "ESP32 — zamonaviy Internet of Things (IoT) olamining shohi. Unda 240 MHz tezlikdagi Xtensa LX6 ikki yadroli CPU, Wi-Fi 802.11 b/g/n, Bluetooth 4.2 BLE, 520 KB SRAM va 4 MB Flash xotira mavjud. 3.3V mantiqiy darajasida ishlaydi.",
      ru: 'ESP32 — мощнейший микроконтроллер для интернета вещей с двухъядерным процессором 240 МГц, встроенным Wi-Fi и Bluetooth.',
      en: 'ESP32 is the powerhouse for IoT projects featuring dual-core 240 MHz CPU, Wi-Fi, BLE, and generous memory.',
    },
    howItWorks: {
      uz: "Arduino IDE muhitida C++ tilida dasturlanadi. Wi-Fi orqali serverlarga (Telegram bot, Blynk, MQTT, Web Server) to'g'ridan-to'g'ri ulanadi.",
      ru: 'Программируется в Arduino IDE, подключается к Wi-Fi сетям и серверам (MQTT, Telegram, Blynk).',
      en: 'Programmed via Arduino IDE to connect directly to Wi-Fi networks and cloud services.',
    },
    useCases: {
      uz: "Aqlli uy tizimi | Telegram bot orqali boshqarish | Web server | Masofaviy kamera | IoT stansiyalar",
      ru: 'Умный дом | Телеграм бот | Веб-сервер | IoT мониторинг',
      en: 'Smart home | Telegram bot control | Embedded web server | IoT telemetry',
    },
    voltage: '3.3V DC (Mantiq), 5V (MicroUSB orqali)',
    current: '80-240 mA (Wi-Fi faol bo\'lganda)',
    imageUrl: 'https://yarat.uz/wp-content/uploads/2023/05/esp32-e1705082728956.jpg',
    specs: [
      { label: 'Protsessor', value: 'Xtensa 32-bit LX6 Dual-Core (240 MHz)' },
      { label: 'Simsiz aloqa', value: 'Wi-Fi 802.11 b/g/n + Bluetooth v4.2 BR/EDR & BLE' },
      { label: 'SRAM xotira', value: '520 KB' },
      { label: 'Flesh xotira', value: '4 MB (SPI Flash)' },
      { label: 'GPIO pinlar', value: '36 ta (3.3V mantiqiy daraja)' },
    ],
    pinout: [
      { pin: 'GPIO2', name: 'Built-in LED', type: 'Digital', description: 'O\'rnatilgan ko\'k test svetodiodi' },
      { pin: 'GPIO21', name: 'SDA', type: 'I2C', description: 'I2C Data liniyasi' },
      { pin: 'GPIO22', name: 'SCL', type: 'I2C', description: 'I2C Clock liniyasi' },
      { pin: 'GPIO1-3', name: 'UART0', type: 'UART', description: 'Dasturlash va Serial monitor' },
      { pin: '3V3', name: '3.3V Out', type: 'VCC', description: 'Stabil 3.3V quvvat' },
      { pin: 'GND', name: 'Ground', type: 'GND', description: 'Umumiy yer' },
    ],
    wiring: {
      title: { uz: 'MicroUSB orqali ulash', ru: 'Подключение по MicroUSB', en: 'MicroUSB Connection' },
      description: {
        uz: 'ESP32 ni kompyuterga ma\'lumot uzatuvchi (data) MicroUSB kabel orqali ulang.',
        ru: 'Подключите плату через дата-кабель MicroUSB к ПК.',
        en: 'Connect ESP32 to PC using a data-capable MicroUSB cable.',
      },
      connections: [{ from: 'MicroUSB', to: 'PC', note: 'Dasturlash' }],
    },
    troubleshooting: [
      {
        issue: 'A fatal error occurred: Failed to connect to ESP32: Timed out waiting for packet header',
        cause: 'Kodni yuklash paytida plata yuklash (BOOT) rejimiga avtomatik o\'ta olmadi.',
        solution: 'Arduino IDE da "Connecting......" yozuvi chiqqanda platadagi "BOOT" tugmasini 2 soniya bosib turing.',
      },
    ],
    tags: ['esp32', 'wifi', 'bluetooth', 'iot', 'espressif'],
  },
];
