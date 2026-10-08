import { DeviceItem } from '@/types/device';

export const wirelessData: DeviceItem[] = [
  // ─────────────────────────────────────────────
  // 1. HC-05 Bluetooth Moduli
  // ─────────────────────────────────────────────
  {
    id: 'wireless-001',
    slug: 'hc-05-bluetooth',
    type: 'wireless',
    category: 'Simsiz Aloqa Modullari',
    name: {
      uz: 'HC-05 Bluetooth 2.0 SPP Moduli',
      ru: 'Bluetooth модуль HC-05 (Master/Slave)',
      en: 'HC-05 Bluetooth 2.0 SPP Module',
    },
    shortDesc: {
      uz: "Telefon va Arduino o'rtasida 10 metrgacha masofada UART orqali simsiz ma'lumot almashuvchi modul.",
      ru: 'Модуль беспроводной связи для обмена данными между смартфоном и Arduino через UART.',
      en: 'Wireless communication module for data exchange between smartphone and Arduino via UART.',
    },
    overview: {
      uz: "HC-05 — eng ommabop Bluetooth moduli. U Arduino bilan oddiy Serial (UART - RX/TX) protokoli orqali ishlaydi. Smartfondan maxsus dastur (masalan, Arduino Bluetooth Controller) orqali buyruqlar yuborib, robot mashinalarni boshqarish, xona chiroqlarini yoqish yoki datchiklar ko'rsatkichini telefonda ko'rish mumkin.",
      ru: 'HC-05 — популярный модуль Bluetooth. Работает с Arduino по стандартному интерфейсу UART (RX/TX). Позволяет управлять роботами и умным домом прямо с мобильного телефона.',
      en: 'HC-05 is a popular Bluetooth module communicating with Arduino via serial UART (RX/TX). Enables smartphone remote control for robot cars and smart home automation.',
    },
    howItWorks: {
      uz: "Modul telefon bilan Bluetooth SPP (Serial Port Profile) orqali juftlashadi (PIN kod odatda 1234). Telefondan yuborilgan har bir belgi (masalan 'F', 'B') modulning TX pinidan Arduino RX piniga oddiy Serial bayt sifatida keladi.",
      ru: 'Модуль связывается со смартфоном по протоколу SPP (код сопряжения 1234). Символы с телефона передаются на пин RX Arduino как обычные байты Serial.',
      en: 'Pairs via Bluetooth SPP (PIN 1234). Characters sent from phone arrive as serial bytes into Arduino RX pin.',
    },
    useCases: {
      uz: "Smartfondan boshqariladigan robot mashina | Masofaviy Bluetooth pult | Telefonga harorat yuborish | Smart qulf ochish",
      ru: 'Машинка на Bluetooth управлении | Беспроводной пульт | Передача показаний сенсоров на телефон | Умный замок',
      en: 'Smartphone-controlled robot car | Wireless remote controller | Telemetry to phone | Smart door lock',
    },
    voltage: '3.6V – 6V DC (VCC), lekin RX pini 3.3V mantiq talab qiladi',
    current: '30-40 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/HC-05-Bluetooth-Module-Pinout.jpg',
    datasheetUrl: 'https://components101.com/sites/default/files/component_datasheet/HC-05%20Datasheet.pdf',
    specs: [
      { label: 'Protokol', value: 'Bluetooth 2.0 + EDR' },
      { label: 'Masofa', value: '10 metrgacha' },
      { label: 'Bod tezligi (Baud rate)', value: 'Standart: 9600 bps (AT rejimida 38400)' },
      { label: 'Rejimlar', value: 'Master va Slave (HC-06 dan farqi)' },
    ],
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'POWER', description: '5V quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: 'TXD', name: 'Transmit', type: 'UART', description: 'Arduino RX piniga (masalan D2)' },
      { pin: 'RXD', name: 'Receive', type: 'UART', description: 'Arduino TX piniga (rezistorli bo\'lgich orqali 3.3V ga tushirish tavsiya)' },
      { pin: 'STATE', name: 'State', type: 'DIGITAL', description: 'Ulanish holati indikatori' },
      { pin: 'EN / KEY', name: 'Enable', type: 'DIGITAL', description: 'AT buyruqlar rejimiga o\'tish pini' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan SoftwareSerial orqali ulash', ru: 'Подключение через SoftwareSerial', en: 'Wiring via SoftwareSerial' },
      description: {
        uz: "Arduino'ning 0 va 1 (Hardware Serial) pinlari kompyuter bilan aloqa uchun band bo'lgani sababli, SoftwareSerial (D2 va D3) ishlatish eng to'g'ri yo'ldir:",
        ru: 'Используйте SoftwareSerial на пинах D2 и D3, чтобы пины 0 и 1 оставались свободными для загрузки прошивки:',
        en: 'Use SoftwareSerial on D2 and D3 so hardware Serial pins 0/1 remain free for sketch uploads:',
      },
      connections: [
        { from: 'HC-05 VCC', to: 'Arduino 5V', note: '5V quvvat' },
        { from: 'HC-05 GND', to: 'Arduino GND', note: 'Umumiy yer' },
        { from: 'HC-05 TXD', to: 'Arduino D2 (RX)', note: 'Ma\'lumot qabul qilish' },
        { from: 'HC-05 RXD', to: 'Arduino D3 (TX)', note: 'Ma\'lumot jo\'natish' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Standart kutubxona: <SoftwareSerial.h>',
        ru: 'Стандартная библиотека: <SoftwareSerial.h>',
        en: 'Built-in library: <SoftwareSerial.h>',
      },
      code: `#include <SoftwareSerial.h>

// RX=Pin 2, TX=Pin 3
SoftwareSerial bluetooth(2, 3);

const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  bluetooth.begin(9600); // HC-05 standart bod tezligi
  Serial.println("HC-05 Bluetooth tayyor!");
}

void loop() {
  if (bluetooth.available()) {
    char cmd = bluetooth.read();
    Serial.print("Kelgan buyruq: ");
    Serial.println(cmd);

    if (cmd == '1') {
      digitalWrite(LED_PIN, HIGH); // 1 kelsa LED ni yoq
    } else if (cmd == '0') {
      digitalWrite(LED_PIN, LOW);  // 0 kelsa LED ni o'chir
    }
  }
}`,
      explanation: [
        { uz: "SoftwareSerial bluetooth(2, 3) — D2 va D3 pinlarida ikkilamchi UART portini ochadi.", ru: "SoftwareSerial создаёт виртуальный UART порт на выводах 2 и 3.", en: "SoftwareSerial creates virtual UART on pins 2 and 3." },
        { uz: "bluetooth.read() — telefondan yuborilgan belgilarni o'qiydi.", ru: "bluetooth.read() считывает переданные со смартфона символы.", en: "bluetooth.read() reads incoming chars from paired phone." },
      ],
    },
    troubleshooting: [
      { issue: "Telefon modulni ko'rmayapti", cause: "Modul LEDi tez pirpiramayapti (quvvat yetarli emas).", solution: "5V va GND to'g'ri ulanganini tekshiring." },
      { issue: "Kod Arduino'ga yuklanmayapti", cause: "Agar HC-05 ni D0 va D1 (RX/TX) ga ulagan bo'lsangiz, yuklash bloklanadi.", solution: "D2 va D3 (SoftwareSerial) ga ulang yoki sketch yuklanayotganda simni uzib turing." },
    ],
    relatedSlugs: ['rc522-rfid-module', 'nrf24l01-wireless'],
    tags: ['bluetooth', 'hc-05', 'simsiz', 'uart', 'telefon', 'robot'],
  },

  // ─────────────────────────────────────────────
  // 2. RC522 RFID Moduli (13.56 MHz)
  // ─────────────────────────────────────────────
  {
    id: 'wireless-002',
    slug: 'rc522-rfid-module',
    type: 'wireless',
    category: 'Simsiz Aloqa Modullari',
    name: {
      uz: 'RC522 RFID 13.56 MHz O\'quvchi Modul',
      ru: 'RFID модуль RC522 (13.56 МГц) с картой и брелоком',
      en: 'RC522 RFID 13.56 MHz Reader Module',
    },
    shortDesc: {
      uz: "RFID karta va breloklarning noyob UID kodini simsiz o'quvchi xavfsizlik va kirish nazorati moduli.",
      ru: 'Модуль бесконтактного считывания RFID смарт-карт и брелоков Mifare для СКУД.',
      en: 'Contactless 13.56 MHz RFID smart card and keyfob reader module for access control.',
    },
    overview: {
      uz: "RC522 moduli 13.56 MHz chastotadagi Mifare karta va breloklarni 3-5 sm masofadan kontaktsiz o'qiydi. Har bir RFID kartaning o'ziga xos takrorlanmas UID (Unique Identifier) raqami bo'ladi. Ushbu modul eshik qulflari, turniketlar, xodimlar davomati va elektron hamyon loyihalarida eng mashhur hisoblanadi.",
      ru: 'RC522 считывает Mifare метки на частоте 13.56 МГц на расстоянии до 5 см. Каждая метка имеет уникальный UID. Идеален для домофонов, электронных замков и систем учёта времени.',
      en: 'RC522 reads 13.56 MHz Mifare tags up to 5cm distance. Each tag has a unique UID number. Ideal for smart door locks, turnstiles, and attendance trackers.',
    },
    howItWorks: {
      uz: "Modul o'rnatilgan antenna orqali elektromagnit maydon tarqatadi. Karta maydonga kirganda, induksiya orqali quvvatlanib o'z UID kodini SPI protokoli orqali Arduinoga uzatadi.",
      ru: 'Антенна модуля излучает поле, бесконтактно питающее чип внутри карты, после чего карта передает свой код по шине SPI.',
      en: 'Module antenna emits electromagnetic field powering the passive card chip via induction, which transmits UID back over SPI.',
    },
    useCases: {
      uz: "Eshik qulfi (Aqlli domofon) | Avtoturargoh shlagbaumi | Talabalar davomat tizimi | Metro va avtobus elektron to'lovi",
      ru: 'Электронный дверной замок | Шлагбаум парковки | Учёт посещаемости | Электронный кошелёк',
      en: 'Smart door lock | Parking gate barrier | Attendance logging | Contactless payment simulator',
    },
    voltage: '3.3V DC (5V ga ulash MUMKIN EMAS!)',
    current: '13-26 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/RC522-RFID-Module-Pinout.jpg',
    datasheetUrl: 'https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf',
    specs: [
      { label: 'Ishchi chastota', value: '13.56 MHz' },
      { label: 'Qo\'llab-quvvatlanuvchi kartalar', value: 'Mifare1 S50, Mifare1 S70, Mifare UltraLight' },
      { label: 'Aloqa interfeysi', value: 'SPI' },
      { label: 'O\'qish masofasi', value: '3 – 5 sm' },
    ],
    pinout: [
      { pin: 'SDA (SS)', name: 'Chip Select', type: 'SPI', description: 'Arduino D10' },
      { pin: 'SCK', name: 'SPI Clock', type: 'SPI', description: 'Arduino D13' },
      { pin: 'MOSI', name: 'Master Out', type: 'SPI', description: 'Arduino D11' },
      { pin: 'MISO', name: 'Master In', type: 'SPI', description: 'Arduino D12' },
      { pin: 'IRQ', name: 'Interrupt', type: 'DIGITAL', description: 'Ulanmaydi (ixtiyoriy)' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Arduino GND' },
      { pin: 'RST', name: 'Reset', type: 'DIGITAL', description: 'Arduino D9' },
      { pin: '3.3V', name: 'VCC', type: 'POWER', description: 'Arduino 3.3V (5V ga ULANMASIN!)' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan SPI ulanish', ru: 'Подключение по SPI к Arduino Uno', en: 'SPI Wiring with Arduino Uno' },
      description: {
        uz: "OGOHLANTIRISH: RC522 moduli 3.3V kuchlanishda ishlaydi. 5V ga ulasangiz chip kuyadi!",
        ru: 'ВНИМАНИЕ: Модуль работает строго от 3.3V! Подключение к 5V выведет чип из строя!',
        en: 'WARNING: Operates strictly at 3.3V! Connecting to 5V will permanently damage the chip!',
      },
      connections: [
        { from: 'RC522 3.3V', to: 'Arduino 3.3V', note: 'Faqat 3.3V pini!' },
        { from: 'RC522 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'RC522 RST', to: 'Arduino D9', note: 'Reset' },
        { from: 'RC522 SDA', to: 'Arduino D10', note: 'SS (Slave Select)' },
        { from: 'RC522 MOSI', to: 'Arduino D11', note: 'SPI MOSI' },
        { from: 'RC522 MISO', to: 'Arduino D12', note: 'SPI MISO' },
        { from: 'RC522 SCK', to: 'Arduino D13', note: 'SPI Clock' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Kutubxona: "MFRC522" by GithubCommunity',
        ru: 'Библиотека: "MFRC522"',
        en: 'Library: "MFRC522" by GithubCommunity',
      },
      code: `#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();       // SPI shinasini ishga tushirish
  rfid.PCD_Init();   // RC522 ni sozlash
  Serial.println("RFID kartani yaqinlashtiring...");
}

void loop() {
  // Yangi karta paydo bo'lishini tekshirish
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  Serial.print("Karta UID kodi: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
  }
  Serial.println();

  rfid.PICC_HaltA(); // Kartani uyqu rejimiga o'tkazish
  delay(1000);
}`,
      explanation: [
        { uz: "rfid.PCD_Init() — RFID modulini ishga tushiradi.", ru: "Инициализирует считыватель RFID.", en: "Initializes the RFID reader." },
        { uz: "rfid.uid.uidByte — kartaning noyob HEX formatdagi UID baytlarini o'qiydi.", ru: "Считывает уникальный массив байт UID карты.", en: "Reads unique UID bytes in HEX." },
      ],
    },
    troubleshooting: [
      { issue: "Karta yaqinlashtirilganda Serialda hech narsa chiqmayapti", cause: "VCC 5V ga ulab qo'yilgan yoki SPI simlari (MOSI/MISO) adashgan.", solution: "3.3V ga ulanganini va D11, D12, D13 pinlarini tekshiring." },
    ],
    relatedSlugs: ['hc-05-bluetooth', 'relay-module-5v'],
    tags: ['rfid', 'rc522', 'karta', 'domofon', 'xavfsizlik', 'spi'],
  },
];
