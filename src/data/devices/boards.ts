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

  // ─────────────────────────────────────────────
  // 4. Arduino Due
  // ─────────────────────────────────────────────
  {
    id: 'board-004',
    slug: 'arduino-due',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Due (32-bit ARM Cortex-M3)',
      ru: 'Микроконтроллерная плата Arduino Due (32-бит ARM)',
      en: 'Arduino Due Microcontroller Board (32-bit ARM)',
    },
    shortDesc: {
      uz: "84 MHz chastotali 32-bitli ARM Cortex-M3 yadrosiga ega eng kuchli Arduino platasi.",
      ru: 'Мощная 32-битная плата на базе ARM Cortex-M3 с частотой 84 МГц.',
      en: 'High-performance 32-bit ARM Cortex-M3 board running at 84 MHz.',
    },
    overview: {
      uz: "Arduino Due — yuqori hisoblash quvvati talab qilinadigan murakkab hisob-kitoblar, 3D printerlar va raqamli audio signallarni qayta ishlash uchun yaratilgan 32-bitli plata. Unda 54 ta raqamli pin, 12 ta analog kirish va 2 ta haqiqiy DAC chiqish mavjud.",
      ru: 'Arduino Due — 32-битная плата для сложных вычислений, 3D-принтеров и цифровой обработки звука. Имеет 54 цифровых пина и 2 настоящих ЦАП.',
      en: 'Arduino Due is designed for computationally intensive tasks, 3D printers, and digital audio with 54 digital I/O pins and 2 true DAC outputs.',
    },
    howItWorks: {
      uz: "32-bitli SAM3X8E yadrosi 84 MHz da ishlaydi. 3.3V mantiqiy darajada sensorlar va aktuatorlar bilan ishlaydi.",
      ru: 'Ядро SAM3X8E работает на частоте 84 МГц при логическом напряжении 3.3В.',
      en: 'The SAM3X8E core operates at 84 MHz with 3.3V logic levels.',
    },
    useCases: {
      uz: "3D printerlar va CNC stanoklar | Raqamli audio sintez (DSP) | Robototexnika algoritmlari | Avtomobil CAN-shina diagnostikasi",
      ru: '3D-принтеры и ЧПУ | Цифровой звук (DSP) | Сложные роботы | CAN-шина авто',
      en: '3D printers & CNC | Digital audio synthesis | Advanced robotics | Automotive CAN bus',
    },
    voltage: '3.3V DC (Mantiq), 7-12V (Vin)',
    imageUrl: 'https://docs.arduino.cc/static/7c0c2834b6e5114705a6396f7c12643a/A000062_featured.jpg',
    specs: [
      { label: 'Mikrokontroller', value: 'Atmel SAM3X8E (32-bit ARM Cortex-M3)' },
      { label: 'Takt chastotasi', value: '84 MHz' },
      { label: 'Raqamli I/O', value: '54 ta (12 ta PWM)' },
      { label: 'Analog kirish', value: '12 ta (12-bit ADC)' },
      { label: 'DAC (Analog chiqish)', value: '2 ta kanal' },
      { label: 'Flesh xotira', value: '512 KB' },
      { label: 'SRAM tezkor xotira', value: '96 KB' },
    ],
    pinout: [
      { pin: 'D0-D53', name: 'Digital I/O', type: 'Digital', description: '54 ta raqamli kirish/chiqish pini' },
      { pin: 'A0-A11', name: '12-bit ADC', type: 'Analog', description: '12 ta analog o\'lchash pini' },
      { pin: 'DAC0, DAC1', name: 'True DAC', type: 'Special', description: 'Haqiqiy analog audio chiqish' },
      { pin: 'CANRX, CANTX', name: 'CAN Bus', type: 'UART', description: 'CAN tarmoq interfeysi' },
    ],
    wiring: {
      title: { uz: 'Programming Port orqali ulash', ru: 'Подключение через Programming Port', en: 'Programming Port Connection' },
      description: {
        uz: 'Due platasini MicroUSB kabeli orqali Programming portiga ulang.',
        ru: 'Подключите кабель к порту Programming Port.',
        en: 'Connect MicroUSB to the Programming Port.',
      },
      connections: [{ from: 'Programming MicroUSB', to: 'Kompyuter', note: 'Kodni yuklash' }],
    },
    troubleshooting: [],
    tags: ['due', 'arm', 'cortex-m3', 'sam3x8e', '32bit'],
  },

  // ─────────────────────────────────────────────
  // 5. Arduino Micro
  // ─────────────────────────────────────────────
  {
    id: 'board-005',
    slug: 'arduino-micro',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Micro (USB HID Klaviatura/Sichqoncha)',
      ru: 'Микроконтроллерная плата Arduino Micro',
      en: 'Arduino Micro Board (USB HID Keyboard/Mouse)',
    },
    shortDesc: {
      uz: "Kompyuterga klaviatura yoki sichqoncha bo'lib ulanuvchi juda ixcham 5V plata.",
      ru: 'Компактная плата с аппаратной поддержкой USB клавиатуры и мыши.',
      en: 'Compact breadboard-ready board with native USB HID support.',
    },
    overview: {
      uz: "Arduino Micro — ATmega32U4 chipiga ega bo'lib, kompyuterga to'g'ridan-to'g'ri klaviatura, sichqoncha (USB HID) yoki o'yin pulti (gamepad) sifatida taniladi. O'yin kontrollerlari va makro klaviaturalar uchun eng qulay tanlov.",
      ru: 'Arduino Micro на базе ATmega32U4 определяется компьютером напрямую как клавиатура, мышь или геймпад.',
      en: 'Powered by the ATmega32U4, Arduino Micro natively acts as a USB HID keyboard, mouse, or gamepad.',
    },
    howItWorks: {
      uz: "ATmega32U4 chipi USB aloqasini to'g'ridan-to'g'ri mikrokontroller yadrosida bajaradi.",
      ru: 'Микроконтроллер ATmega32U4 аппаратно эмулирует устройства USB HID.',
      en: 'ATmega32U4 handles USB communication directly on-chip without an external bridge.',
    },
    useCases: {
      uz: "O'yin pultlari (Gamepad) | Makro klaviaturalar | Simulyator pedallari | Taqiladigan elektronika",
      ru: 'Геймпады | Макро-клавиатуры | Симуляторы | Носимая электроника',
      en: 'Custom gamepads | Macro keyboards | Flight simulator controls | Wearables',
    },
    voltage: '5V DC',
    imageUrl: 'https://docs.arduino.cc/static/f58ea9c8dd414da898a1a3848b6c59ff/A000053_featured.jpg',
    specs: [
      { label: 'Chip', value: 'ATmega32U4 (8-bit AVR)' },
      { label: 'Raqamli I/O', value: '20 ta (7 ta PWM)' },
      { label: 'Analog kirish', value: '12 ta (ADC)' },
      { label: 'Flesh xotira', value: '32 KB' },
      { label: 'USB interfeys', value: 'Native USB HID (Keyboard/Mouse)' },
    ],
    pinout: [
      { pin: 'D0-D13', name: 'Digital I/O', type: 'Digital', description: 'Raqamli pinlar' },
      { pin: 'A0-A5, A6-A11', name: 'Analog In', type: 'Analog', description: '12 ta analog kirish' },
      { pin: '5V / 3V3 / GND', name: 'VCC', type: 'VCC', description: 'Quvvat liniyalari' },
    ],
    wiring: {
      title: { uz: 'MicroUSB orqali ulash', ru: 'Подключение через MicroUSB', en: 'MicroUSB Connection' },
      description: { uz: 'MicroUSB kabel orqali to\'g\'ridan-to\'g\'ri kompyuterga ulang.', ru: 'Подключите к ПК через MicroUSB.', en: 'Connect to PC via MicroUSB.' },
      connections: [{ from: 'MicroUSB', to: 'Kompyuter' }],
    },
    troubleshooting: [],
    tags: ['micro', 'atmega32u4', 'hid', 'keyboard', 'mouse'],
  },

  // ─────────────────────────────────────────────
  // 6. Arduino MKR WiFi 1010
  // ─────────────────────────────────────────────
  {
    id: 'board-006',
    slug: 'arduino-mkr-wifi-1010',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino MKR WiFi 1010 (Xavfsiz IoT Platasi)',
      ru: 'Плата Arduino MKR WiFi 1010 (Защищённый IoT)',
      en: 'Arduino MKR WiFi 1010 (Secure IoT Board)',
    },
    shortDesc: {
      uz: "Wi-Fi, Bluetooth BLE va ATECC508A kripto-chipi bilan jihozlangan professional IoT platasi.",
      ru: 'Профессиональная IoT плата с Wi-Fi, Bluetooth BLE и крипточипом ATECC508A.',
      en: 'Secure IoT board powered by SAMD21, u-blox Wi-Fi/BLE, and crypto accelerator.',
    },
    overview: {
      uz: "Arduino MKR WiFi 1010 — sanoat IoT qurilmalari, aqlli shahar va qishloq xo'jaligi uchun yaratilgan. 32-bitli SAMD21 mikrokontrolleri, u-blox Wi-Fi/BLE moduli, ATECC508A shifrlash chipi va Li-Po batareya zaryadlash zanjiriga ega.",
      ru: 'MKR WiFi 1010 оснащена Wi-Fi, BLE, крипточипом для безопасной связи с облаком и зарядкой Li-Po аккумулятора.',
      en: 'Equipped with Wi-Fi, BLE, crypto chip for secure cloud telemetry, and onboard Li-Po charger.',
    },
    howItWorks: {
      uz: "SAMD21 protsessori dasturni bajaradi, u-blox NINA moduli esa Wi-Fi orqali Arduino IoT Cloud bilan bog'lanadi.",
      ru: 'SAMD21 выполняет код, модуль NINA обеспечивает связь с облаком.',
      en: 'SAMD21 executes firmware while the NINA module interfaces with IoT clouds.',
    },
    useCases: {
      uz: "Aqlli issiqxona | Sanoat telemetriyasi | Bulutli datchiklar (Cloud IoT) | Batareyali portativ stansiyalar",
      ru: 'Умная теплица | Промышленный мониторинг | Облачные датчики | Портативные устройства',
      en: 'Smart agriculture | Industrial telemetry | Secure cloud sensors | Battery-powered monitors',
    },
    voltage: '3.3V DC (Mantiq), 5V (USB), 3.7V Li-Po',
    imageUrl: 'https://docs.arduino.cc/static/f3f38006d64f068fb6b583f7fc068fba/ABX00023_featured.jpg',
    specs: [
      { label: 'Mikrokontroller', value: 'SAMD21 Cortex-M0+ 32-bit (48 MHz)' },
      { label: 'Simsiz aloqa', value: 'u-blox NINA-W102 (Wi-Fi + BLE)' },
      { label: 'Xavfsizlik chipi', value: 'ATECC508A CryptoAuthentication' },
      { label: 'Batareya ulagichi', value: 'Li-Po 3.7V zaryadlash zanjiri' },
      { label: 'Flesh / SRAM', value: '256 KB / 32 KB' },
    ],
    pinout: [
      { pin: 'D0-D7', name: 'Digital/PWM', type: 'Digital', description: 'PWM qo\'llab-quvvatlovchi pinlar' },
      { pin: 'A0-A6', name: 'ADC / DAC', type: 'Analog', description: 'Analog kirishlar va DAC chiqish' },
      { pin: '3V3 / GND / VIN', name: 'Power', type: 'VCC', description: 'Quvvat va batareya liniyasi' },
    ],
    wiring: {
      title: { uz: 'MicroUSB orqali ulash', ru: 'Подключение MicroUSB', en: 'MicroUSB Connection' },
      description: { uz: 'MicroUSB yoki 3.7V Li-Po batareya ulang.', ru: 'Подключите MicroUSB или Li-Po аккумулятор.', en: 'Connect via MicroUSB or 3.7V Li-Po.' },
      connections: [{ from: 'MicroUSB', to: 'PC' }],
    },
    troubleshooting: [],
    tags: ['mkr', 'wifi', 'iot', 'ble', 'samd21'],
  },

  // ─────────────────────────────────────────────
  // 7. Arduino Nano 33 BLE
  // ─────────────────────────────────────────────
  {
    id: 'board-007',
    slug: 'arduino-nano-33-ble',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Nano 33 BLE (TinyML va Neyron Tarmoqlar)',
      ru: 'Плата Arduino Nano 33 BLE (TinyML и ИИ)',
      en: 'Arduino Nano 33 BLE (TinyML and AI Board)',
    },
    shortDesc: {
      uz: "Nordic nRF52840 (64 MHz) va 9-o'qli IMU sensori bilan jihozlangan AI/TinyML platasi.",
      ru: 'Плата для машинного обучения (TinyML) на базе nRF52840 со встроенным 9-осевым датчиком IMU.',
      en: 'Machine learning & TinyML board with 64 MHz nRF52840 and 9-axis IMU.',
    },
    overview: {
      uz: "Arduino Nano 33 BLE — sun'iy intellekt (TinyML), TensorFlow Lite modellarini mikrokontrollerda ishlatish uchun ideal plata. Unda 64 MHz tezlikdagi nRF52840 protsessori, 1MB Flash, 256KB RAM va o'rnatilgan 9-o'qli LSM9DS1 IMU (akselerometr, giroskop, kompas) sensori mavjud.",
      ru: 'Nano 33 BLE создана для периферийного ИИ (TinyML) с 9-осевым датчиком движения и Bluetooth 5.0.',
      en: 'Purpose-built for Edge AI and TinyML with an integrated 9-axis motion sensor and Bluetooth 5.0.',
    },
    howItWorks: {
      uz: "Har xil harakat va imo-ishoralar o'rnatilgan 9-o'qli datchik orqali o'lchanadi va ichki neyron to'r modeli orqali tahlil qilinadi.",
      ru: 'Датчик LSM9DS1 фиксирует движения, а ядро выполняет модели TensorFlow Lite.',
      en: 'The LSM9DS1 sensor captures gestures processed locally by TensorFlow Lite models.',
    },
    useCases: {
      uz: "Imo-ishoralarni tanish (Gesture recognition) | Yiqilish detektori | Fitnes-treker | Dron balansi",
      ru: 'Распознавание жестов | Детектор падения | Фитнес-трекеры | Балансировка дронов',
      en: 'Gesture recognition | Fall detection | Fitness trackers | Drone stabilization',
    },
    voltage: '3.3V DC',
    imageUrl: 'https://docs.arduino.cc/static/b1a8d05ee0e02c7709b19dfb48b17b2b/ABX00030_featured.jpg',
    specs: [
      { label: 'Protsessor', value: 'Nordic nRF52840 Cortex-M4F (64 MHz)' },
      { label: 'O\'rnatilgan sensor', value: 'LSM9DS1 9-o\'qli IMU (Akselemtr + Giroskop + Kompas)' },
      { label: 'Simsiz aloqa', value: 'Bluetooth 5.0 Low Energy (BLE)' },
      { label: 'Xotira', value: '1 MB Flash, 256 KB RAM' },
    ],
    pinout: [
      { pin: 'D0-D13', name: 'Digital I/O', type: 'Digital', description: '14 ta raqamli pin' },
      { pin: 'A0-A7', name: 'Analog In', type: 'Analog', description: '8 ta 12-bit analog kirish' },
      { pin: '3V3 / GND / VIN', name: 'Power', type: 'VCC', description: 'Quvvat (3.3V mantiq)' },
    ],
    wiring: {
      title: { uz: 'MicroUSB orqali ulash', ru: 'Подключение MicroUSB', en: 'MicroUSB Connection' },
      description: { uz: 'MicroUSB orqali ulang va TensorFlow Lite kutubxonasini o\'rnating.', ru: 'Подключите по MicroUSB.', en: 'Connect via MicroUSB.' },
      connections: [{ from: 'MicroUSB', to: 'Kompyuter' }],
    },
    troubleshooting: [],
    tags: ['nano33ble', 'tinyml', 'ai', 'ble', 'imu'],
  },

  // ─────────────────────────────────────────────
  // 8. Arduino Nano 33 IoT
  // ─────────────────────────────────────────────
  {
    id: 'board-008',
    slug: 'arduino-nano-33-iot',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Nano 33 IoT (Wi-Fi + BLE + 6-o\'qli IMU)',
      ru: 'Плата Arduino Nano 33 IoT (Wi-Fi + BLE + IMU)',
      en: 'Arduino Nano 33 IoT (Wi-Fi + BLE + 6-Axis IMU)',
    },
    shortDesc: {
      uz: "Nano o'lchamidagi eng qulay Wi-Fi va Bluetooth bilan qurollangan IoT platasi.",
      ru: 'Компактная плата форм-фактора Nano с Wi-Fi, Bluetooth и датчиком движения.',
      en: 'Compact Nano form-factor board with Wi-Fi, BLE, and 6-axis IMU.',
    },
    overview: {
      uz: "Arduino Nano 33 IoT — klassik Nano o'lchamidagi, lekin Wi-Fi, Bluetooth, kripto-chip va 6-o'qli LSM6DS3 akselerometr/giroskop sensori bilan to'ldirilgan plata. Arduino Cloud orqali havo orqali (OTA) dasturlanadi.",
      ru: 'Компактная IoT плата с Wi-Fi, Bluetooth, крипточипом ATECC608A и акселерометром.',
      en: 'Features SAMD21, u-blox Wi-Fi/BLE, ATECC608A crypto element, and LSM6DS3 motion sensor.',
    },
    howItWorks: {
      uz: "Datchiklar ma'lumotini Wi-Fi orqali bulutga xavfsiz shifrlangan holda uzatadi.",
      ru: 'Считывает датчики и отправляет данные в облако через защищённый Wi-Fi канал.',
      en: 'Gathers telemetry and securely transmits data to cloud dashboards over Wi-Fi.',
    },
    useCases: {
      uz: "Aqlli uylar | Portativ ob-havo stansiyasi | Tebranish datchigi | Masofadan yangilanuvchi IoT",
      ru: 'Умный дом | Метеостанция | Датчик вибраций | Удаленно обновляемые устройства',
      en: 'Smart home nodes | Connected weather stations | Vibration sensing | OTA IoT devices',
    },
    voltage: '3.3V DC',
    imageUrl: 'https://docs.arduino.cc/static/0db6be4ee4c2d308f220677462ec5438/ABX00027_featured.jpg',
    specs: [
      { label: 'Mikrokontroller', value: 'SAMD21 Cortex-M0+ (48 MHz)' },
      { label: 'Simsiz aloqa', value: 'u-blox NINA-W102 (Wi-Fi + BLE)' },
      { label: 'Harakat sensori', value: 'LSM6DS3 6-o\'qli IMU (Akselerometr + Giroskop)' },
      { label: 'Kripto-chip', value: 'ATECC608A' },
    ],
    pinout: [
      { pin: 'D0-D13', name: 'Digital I/O', type: 'Digital', description: '14 ta pin' },
      { pin: 'A0-A7', name: 'Analog In', type: 'Analog', description: '8 ta analog kirish' },
      { pin: '3V3 / GND / VIN', name: 'Power', type: 'VCC', description: 'Quvvat' },
    ],
    wiring: {
      title: { uz: 'MicroUSB orqali ulash', ru: 'Подключение MicroUSB', en: 'MicroUSB Connection' },
      description: { uz: 'MicroUSB kabel bilan kompyuterga ulang.', ru: 'Подключите по MicroUSB.', en: 'Connect via MicroUSB.' },
      connections: [{ from: 'MicroUSB', to: 'Kompyuter' }],
    },
    troubleshooting: [],
    tags: ['nano33iot', 'wifi', 'iot', 'samd21', 'imu'],
  },

  // ─────────────────────────────────────────────
  // 9. Arduino Uno WiFi Rev2
  // ─────────────────────────────────────────────
  {
    id: 'board-009',
    slug: 'arduino-uno-wifi-rev2',
    type: 'board',
    category: 'Platalar',
    name: {
      uz: 'Arduino Uno WiFi Rev2 (Uno Formasida IoT)',
      ru: 'Микроконтроллерная плата Arduino Uno WiFi Rev2',
      en: 'Arduino Uno WiFi Rev2 Microcontroller Board',
    },
    shortDesc: {
      uz: "Standart Uno R3 shaklidagi, Wi-Fi, Bluetooth va 6-o'qli IMU bilan qurollangan IoT platasi.",
      ru: 'Плата в форм-факторе Uno R3 с Wi-Fi, Bluetooth и встроенным акселерометром.',
      en: 'Uno R3 form factor with integrated Wi-Fi, Bluetooth, and 6-axis IMU.',
    },
    overview: {
      uz: "Arduino Uno WiFi Rev2 — klassik Uno R3 shieldlari bilan to'liq apparat mosligini saqlagan holda, yangi avlod ATmega4809 (20 MHz) protsessori, u-blox Wi-Fi/BLE moduli va 6-o'qli IMU harakat datchigini o'zida birlashtiradi.",
      ru: 'Uno WiFi Rev2 сохраняет совместимость с платами расширения Uno R3, добавляя Wi-Fi, BLE и датчик движения.',
      en: 'Retains full Uno R3 shield compatibility while adding Wi-Fi, BLE, and an integrated 6-axis IMU.',
    },
    howItWorks: {
      uz: "Standart Uno shieldlari bilan ishlaydi, bir vaqtning o'zida ma'lumotlarni Wi-Fi orqali internetga uzatadi.",
      ru: 'Работает с шилдами Uno, одновременно передавая данные по Wi-Fi.',
      en: 'Drives standard Uno shields while concurrently transmitting data over Wi-Fi.',
    },
    useCases: {
      uz: "Maktab va universitetlarda IoT darslari | Robotlarni Wi-Fi orqali boshqarish | Uno shieldlarini internetga ulash",
      ru: 'Обучение IoT | Управление роботами по Wi-Fi | Подключение шилдов Uno к сети',
      en: 'Classroom IoT education | Wi-Fi robot control | Connecting Uno shields to the web',
    },
    voltage: '5V DC (Mantiq), 7-12V (Vin)',
    imageUrl: 'https://docs.arduino.cc/static/317ad565cbdae52cf875b47a16e7fc56/ABX00021_featured.jpg',
    specs: [
      { label: 'Mikrokontroller', value: 'Microchip ATmega4809 (20 MHz)' },
      { label: 'Simsiz aloqa', value: 'u-blox NINA-W102 (Wi-Fi + BLE)' },
      { label: 'Harakat sensori', value: 'LSM6DS3TR 6-o\'qli IMU' },
      { label: 'Xavfsizlik', value: 'ATECC608A kripto-protsessor' },
      { label: 'Flesh / SRAM', value: '48 KB / 6 KB' },
    ],
    pinout: [
      { pin: 'D0-D13', name: 'Digital I/O', type: 'Digital', description: '14 ta pin (5 ta PWM)' },
      { pin: 'A0-A5', name: 'Analog In', type: 'Analog', description: '6 ta analog kirish' },
      { pin: '5V / 3V3 / GND / Vin', name: 'Power', type: 'VCC', description: 'Standart Uno quvvati' },
    ],
    wiring: {
      title: { uz: 'USB-B orqali ulash', ru: 'Подключение USB-B', en: 'USB-B Connection' },
      description: { uz: 'Standart USB kabel bilan ulang.', ru: 'Подключите стандартным USB кабелем.', en: 'Connect via standard USB cable.' },
      connections: [{ from: 'USB-B', to: 'PC' }],
    },
    troubleshooting: [],
    tags: ['unowifi', 'atmega4809', 'wifi', 'iot', 'ble'],
  },
];
