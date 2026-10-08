import { DeviceItem } from '@/types/device';

export const displaysData: DeviceItem[] = [
  // ─────────────────────────────────────────────
  // 1. OLED 0.96" I2C
  // ─────────────────────────────────────────────
  {
    id: 'display-001',
    slug: 'oled-096-i2c',
    type: 'display',
    category: 'Displeylar',
    name: {
      uz: 'OLED 0.96" 128x64 I2C Displey',
      ru: 'OLED 0.96" 128x64 I2C Дисплей',
      en: 'OLED 0.96" 128x64 I2C Display',
    },
    shortDesc: {
      uz: "128x64 piksel, katta kontrast, 0.96 dyuymli OLED displey. I2C orqali faqat 2 sim bilan ulanadi.",
      ru: 'OLED дисплей 128x64 пикс, высокий контраст, 0.96 дюйма. Подключается по I2C всего 2 проводами.',
      en: '128x64 pixel OLED display with high contrast, 0.96 inch. Connects via I2C with only 2 wires.',
    },
    overview: {
      uz: "OLED (Organic Light Emitting Diode) displey — har bir piksel o'z yorug'ligini chiqaradi, shuning uchun qora piksellar haqiqiy qoralikda bo'ladi. LCD displeylardan farqli, orqa yorug'lik kerak emas. 0.96 dyuymli OLED — harorat, masofa, vaqt kabi ma'lumotlarni ko'rsatish uchun ideal. SSD1306 drayveri I2C protokolini ishlatadi.",
      ru: 'OLED (Organic Light Emitting Diode) дисплей — каждый пиксель излучает свой свет, поэтому чёрные пиксели — абсолютно чёрные. Не требует подсветки в отличие от LCD. Идеален для отображения температуры, расстояния, времени. Драйвер SSD1306 использует протокол I2C.',
      en: 'OLED display — each pixel emits its own light, so black pixels are truly black. No backlight needed unlike LCD. Ideal for displaying temperature, distance, time data. SSD1306 driver uses I2C protocol.',
    },
    howItWorks: {
      uz: "SSD1306 drayveri chip Arduino I2C buyruqlarini qabul qilib, tegishli OLED piksellarni yondirib-o'chiradi. Adafruit SSD1306 + GFX kutubxonalari orqali matn, raqamlar, grafiklar va rasmlar chizish mumkin. I2C manzil odatda 0x3C yoki 0x3D.",
      ru: 'Драйвер SSD1306 принимает команды по I2C и управляет включением/выключением пикселей OLED. Библиотеки Adafruit SSD1306 + GFX позволяют рисовать текст, числа, графики и изображения. I2C адрес обычно 0x3C или 0x3D.',
      en: 'SSD1306 driver receives I2C commands and controls OLED pixel on/off. Adafruit SSD1306 + GFX libraries allow drawing text, numbers, graphics and images. I2C address is usually 0x3C or 0x3D.',
    },
    useCases: {
      uz: "Harorat/namlik ko'rsatkichi | Soat va taymer | Sensor ma'lumotlari vizualizatsiyasi | Mini o'yin konsolyasi | Smart soat",
      ru: 'Индикатор температуры/влажности | Часы и таймер | Визуализация данных сенсора | Мини-игровая консоль | Умные часы',
      en: 'Temperature/humidity display | Clock and timer | Sensor data visualization | Mini game console | Smart watch',
    },
    voltage: '3.3V – 5V DC',
    current: '20 mA (maksimal)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/OLED-Display-Pinout.jpg',
    datasheetUrl: 'https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf',
    specs: [
      { label: 'Ekran o\'lchami', value: '0.96 dyuym (diagonal)' },
      { label: 'Piksel soni', value: '128 x 64' },
      { label: 'Piksel rangi', value: 'Oq (yoki ko\'k)' },
      { label: 'Drayveri', value: 'SSD1306' },
      { label: 'Aloqa', value: 'I2C (0x3C yoki 0x3D)' },
      { label: 'Ko\'rish burchagi', value: '160°' },
    ],
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: "Umumiy yer" },
      { pin: '2', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V quvvat' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C takt liniyasi → Arduino A5' },
      { pin: '4', name: 'SDA', type: 'I2C', description: "I2C ma'lumot liniyasi → Arduino A4" },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan I2C ulanish', ru: 'I2C подключение к Arduino Uno', en: 'I2C Wiring to Arduino Uno' },
      description: { uz: "Faqat 4 ta sim bilan ulaning:", ru: 'Подключите всего 4 провода:', en: 'Connect with just 4 wires:' },
      connections: [
        { from: 'OLED GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'OLED VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'OLED SCL', to: 'Arduino A5', note: 'Sariq sim' },
        { from: 'OLED SDA', to: 'Arduino A4', note: 'Ko\'k sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'OLED ga matn va sensor ma\'lumotini chiqarish', ru: 'Вывод текста и данных на OLED', en: 'Display Text & Sensor Data on OLED' },
      description: {
        uz: "Adafruit SSD1306 va GFX kutubxonalarini o'rnatib ishlatishingiz kerak.",
        ru: 'Установите библиотеки Adafruit SSD1306 и GFX.',
        en: 'Install Adafruit SSD1306 and GFX libraries first.',
      },
      code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define SCREEN_ADDRESS 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,
                          &Wire, OLED_RESET);

void setup() {
  Serial.begin(9600);

  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println("OLED topilmadi!");
    while (1);
  }

  display.clearDisplay();
  display.setTextSize(2);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(10, 20);
  display.println("ArduinoUz!");
  display.display();
  delay(2000);
}

void loop() {
  display.clearDisplay();

  display.setTextSize(1);
  display.setCursor(0, 0);
  display.println("Harorat: 25.6 C");
  display.println("Namlik:  68 %");
  display.println("Masofa:  45 cm");

  // Progress bar
  display.drawRect(0, 48, 128, 10, SSD1306_WHITE);
  display.fillRect(0, 48, 64, 10, SSD1306_WHITE);

  display.display();
  delay(1000);
}`,
      explanation: [
        { uz: "display.clearDisplay() — ekranni tozalaydi. Har yangi ko'rsatishdan oldin chaqirish kerak.", ru: "display.clearDisplay() — очищает экран. Вызывать перед каждым новым отображением.", en: "display.clearDisplay() clears the screen. Call before each new display update." },
        { uz: "display.display() — buferda tayyorlangan rasmni OLED ga uzatadi. Oxirida chaqiriladi.", ru: "display.display() — отправляет подготовленное изображение из буфера на OLED. Вызывается в конце.", en: "display.display() sends the prepared buffer to the OLED. Called at the end." },
        { uz: "drawRect() va fillRect() — kvadrat va to'ldirilgan kvadrat chizish uchun.", ru: "drawRect() и fillRect() — для рисования прямоугольника и заполненного прямоугольника.", en: "drawRect() and fillRect() — for drawing rectangle outlines and filled rectangles." },
      ],
    },
    troubleshooting: [
      { issue: "OLED ekrani yonmayapti", cause: "I2C manzil noto'g'ri (0x3C vs 0x3D).", solution: "I2C Scanner sketchni ishlatib to'g'ri manzilni toping." },
      { issue: "Ekranda belgilar noto'g'ri ko'rinmoqda", cause: "Katta matn o'lchami ekrandan chiqib ketmoqda.", solution: "setTextSize(1) dan boshlang, keyin kattalashiring." },
    ],
    relatedSlugs: ['dht11', 'hc-sr04', 'bmp280'],
    tags: ['OLED', 'displey', 'display', 'SSD1306', 'I2C', '128x64'],
  },

  // ─────────────────────────────────────────────
  // 2. LCD 1602 I2C
  // ─────────────────────────────────────────────
  {
    id: 'display-002',
    slug: 'lcd-1602-i2c',
    type: 'display',
    category: 'Displeylar',
    name: {
      uz: 'LCD 1602 I2C (16x2 Simvol Displey)',
      ru: 'LCD 1602 I2C (16x2 Символьный дисплей)',
      en: 'LCD 1602 I2C (16x2 Character Display)',
    },
    shortDesc: {
      uz: "Orqa yoritgichli 16 ustun × 2 qator simvol LCD displey. I2C adapter bilan faqat 4 sim kerak.",
      ru: '16 столбцов × 2 строки символьный LCD дисплей с подсветкой. С I2C адаптером нужно всего 4 провода.',
      en: 'Backlit 16-column × 2-row character LCD display. With I2C adapter only 4 wires needed.',
    },
    overview: {
      uz: "LCD 1602 — Arduino bilan eng ko'p ishlatiladigan displeylardan biri. HD44780 drayveri bilan ishlovchi 16x2 simvol ekrani. I2C adapter (PCF8574) qo'shilganda oddiy 16 ta sim o'rniga faqat 4 ta sim bilan ulanadi. Matn, raqamlar va maxsus belgilar ko'rsatish mumkin.",
      ru: 'LCD 1602 — один из самых популярных дисплеев для Arduino. 16x2 символьный экран на базе HD44780. С I2C адаптером (PCF8574) вместо 16 проводов нужно только 4. Можно отображать текст, числа и специальные символы.',
      en: 'LCD 1602 is one of the most used displays with Arduino. 16x2 character screen based on HD44780. With I2C adapter (PCF8574), only 4 wires instead of 16. Can display text, numbers and custom characters.',
    },
    howItWorks: {
      uz: "PCF8574 I2C adapter chipi Arduino dan I2C signal qabul qilib, LCD ning 8 ta data piniga parallel signal yuboradi. LiquidCrystal_I2C kutubxonasi orqali print(), setCursor(), clear() kabi funksiyalar ishlatiladi. Orqa yorug'lik potentsiometr bilan sozlanadi.",
      ru: 'Адаптер PCF8574 принимает I2C сигнал и передаёт параллельный сигнал на 8 пинов данных LCD. Библиотека LiquidCrystal_I2C позволяет использовать print(), setCursor(), clear(). Подсветка регулируется потенциометром.',
      en: 'PCF8574 I2C adapter receives I2C signal and sends parallel signal to LCD 8 data pins. LiquidCrystal_I2C library provides print(), setCursor(), clear() functions. Backlight adjustable via potentiometer.',
    },
    useCases: {
      uz: "Sensor ma'lumotlarini ko'rsatish | Menyu interfeysi | Sanoq taymer | Temperatura/namlik ko'rsatkichi | DIY raqamli soat",
      ru: 'Отображение данных сенсора | Меню интерфейс | Счётчик | Индикатор температуры | DIY цифровые часы',
      en: 'Sensor data display | Menu interface | Counter | Temperature indicator | DIY digital clock',
    },
    voltage: '5V DC',
    current: '120 mA (backlight yoniq)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/16x2-LCD-Pinout.jpg',
    specs: [
      { label: 'Ekran o\'lchami', value: '16 ustun × 2 qator' },
      { label: 'Simvol o\'lchami', value: '5 × 8 piksel' },
      { label: 'Drayveri', value: 'HD44780 + PCF8574 (I2C)' },
      { label: 'I2C manzil', value: '0x27 yoki 0x3F' },
      { label: 'Orqa yorug\'lik', value: 'LED (o\'chirish mumkin)' },
    ],
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: "Umumiy yer" },
      { pin: '2', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '3', name: 'SDA', type: 'I2C', description: "I2C ma'lumot → Arduino A4" },
      { pin: '4', name: 'SCL', type: 'I2C', description: 'I2C takt → Arduino A5' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan I2C ulanish', ru: 'Подключение I2C к Arduino Uno', en: 'I2C Wiring to Arduino Uno' },
      description: { uz: "I2C adapter bilan faqat 4 ta sim:", ru: 'С I2C адаптером только 4 провода:', en: 'With I2C adapter only 4 wires:' },
      connections: [
        { from: 'LCD GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'LCD VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'LCD SDA', to: 'Arduino A4', note: 'Ko\'k sim' },
        { from: 'LCD SCL', to: 'Arduino A5', note: 'Sariq sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'LCD ga matn chiqarish', ru: 'Вывод текста на LCD', en: 'Print Text to LCD' },
      description: {
        uz: "LiquidCrystal_I2C kutubxonasini o'rnatib ishlating.",
        ru: 'Установите библиотеку LiquidCrystal_I2C.',
        en: 'Install LiquidCrystal_I2C library.',
      },
      code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// 0x27 yoki 0x3F — I2C manzil, 16 ustun, 2 qator
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();       // Orqa yorug'likni yoq

  lcd.setCursor(0, 0);  // 1-qator, 1-ustun
  lcd.print("ArduinoUz.uz");

  lcd.setCursor(0, 1);  // 2-qator, 1-ustun
  lcd.print("Salom, Dunyo!");
}

void loop() {
  // Vaqtni ko'rsatish misoli
  static int sec = 0;
  lcd.setCursor(0, 1);
  lcd.print("Vaqt: ");
  lcd.print(sec);
  lcd.print("s  ");
  sec++;
  delay(1000);
}`,
      explanation: [
        { uz: "lcd.init() — LCD ni I2C orqali ishga tushiradi.", ru: "lcd.init() — инициализирует LCD по I2C.", en: "lcd.init() initializes LCD via I2C." },
        { uz: "lcd.setCursor(ustun, qator) — matn yozish boshlanadigan joyni belgilaydi. 0 dan boshlanadi.", ru: "lcd.setCursor(col, row) — задаёт позицию курсора. Нумерация с 0.", en: "lcd.setCursor(col, row) sets cursor position. Numbering starts from 0." },
        { uz: "lcd.print() — String, int, float qiymatlarni chiqaradi.", ru: "lcd.print() — выводит String, int, float значения.", en: "lcd.print() outputs String, int, float values." },
      ],
    },
    troubleshooting: [
      { issue: "LCD ishlamayapti, hech narsa ko'rinmayapti", cause: "I2C manzil noto'g'ri (0x27 vs 0x3F).", solution: "I2C Scanner sketchni ishlatib manzilni toping." },
      { issue: "Belgilar ko'rinmayapti (faqat qora kvadratlar)", cause: "Orqa yorug'lik kontrast potentsiometri noto'g'ri.", solution: "PCF8574 modul orqasidagi kichik potentsiometrni burub sozlang." },
    ],
    relatedSlugs: ['oled-096-i2c', 'dht11'],
    tags: ['LCD', 'displey', '1602', '16x2', 'I2C', 'matn'],
  },
];
