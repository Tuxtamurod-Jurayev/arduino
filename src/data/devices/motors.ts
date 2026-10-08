import { DeviceItem } from '@/types/device';

export const motorsData: DeviceItem[] = [
  // ─────────────────────────────────────────────
  // 1. SG90 Micro Servo (9g)
  // ─────────────────────────────────────────────
  {
    id: 'motor-001',
    slug: 'sg90-micro-servo',
    type: 'motor',
    category: 'Motorlar va Drayverlar',
    name: {
      uz: 'SG90 9g Mini Servo Motor',
      ru: 'Микросервопривод SG90 9g',
      en: 'SG90 9g Micro Servo Motor',
    },
    shortDesc: {
      uz: "0 dan 180 gradusgacha aniq burchak ostida buriladigan ixcham va arzon servo motor.",
      ru: 'Компактный и доступный сервопривод с поворотом от 0 до 180 градусов.',
      en: 'Compact and affordable servo motor rotating precisely from 0 to 180 degrees.',
    },
    overview: {
      uz: "SG90 — Arduino robototexnikasida eng mashhur mikro servomotor. Og'irligi bor-yo'g'i 9 gramm, lekin 1.8 kg/sm gacha kuch (moment) hosil qiladi. U PWM (impuls kenglik modulyatsiyasi) signali orqali 0° dan 180° gacha istalgan burchakka aniq buriladi. Mexanizmlar, robot qo'llari, kamera burilishi va aqlli to'siqlar uchun ajralmas detal hisoblanadi.",
      ru: 'SG90 — самый популярный микросервопривод в робототехнике Arduino. Вес всего 9 грамм, но развивает крутящий момент до 1.8 кг/см. Управляется ШИМ сигналом от 0° до 180°. Незаменим для манипуляторов, поворотников камер и шлагбаумов.',
      en: 'SG90 is the most popular micro servo motor in Arduino robotics. Weighs only 9g with up to 1.8 kg-cm torque. Rotates from 0° to 180° via PWM signals. Essential for robot arms, camera pans, and smart barriers.',
    },
    howItWorks: {
      uz: "Servo motor ichida doimiy tok dvigateli, reduktor (tishli g'ildiraklar) va potentsiometr (qayta aloqa datchigi) joylashgan. Arduino har 20 millisekundda (50Hz) bitta impuls yuboradi. Impuls davomiyligi 1ms (0°), 1.5ms (90°) va 2ms (180°) ga teng bo'ladi.",
      ru: 'Внутри сервопривода расположен DC мотор, редуктор и потенциометр обратной связи. Arduino отправляет импульс каждые 20 мс (50 Гц). Длина импульса 1мс (0°), 1.5мс (90°) и 2мс (180°).',
      en: 'Inside the servo is a DC motor, gear reduction box, and feedback potentiometer. Arduino sends pulses every 20ms (50Hz). Pulse width of 1ms (0°), 1.5ms (90°), and 2ms (180°) determines angle.',
    },
    useCases: {
      uz: "Robot qo'li (Robot Arm) | Avtomatlashgan shlagbaum | Ultratovushli radar uchun skanerlash | Smart quti qopqog'i | Pan-Tilt kamera boshqaruvi",
      ru: 'Робот-рука | Автоматический шлагбаум | Сканирующий ультразвуковой радар | Умная корзина | Поворотное крепление камеры',
      en: 'Robot arm | Smart barrier gate | Scanning ultrasonic radar | Smart trash can | Pan-tilt camera mount',
    },
    voltage: '4.8V – 6.0V DC',
    current: '100 mA (bo\'sh rejimda), 550 mA (to\'siq ostida)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/SG90-Servo-Motor-Pinout.jpg',
    datasheetUrl: 'http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf',
    specs: [
      { label: 'Aylanish burchagi', value: '180°' },
      { label: 'Aylanish tezligi', value: '0.12 s / 60° (4.8V da)' },
      { label: 'Kuch momenti', value: '1.8 kg/sm' },
      { label: 'Tishli uzatma', value: 'Neylon (plastik)' },
      { label: 'Vazni', value: '9 gramm' },
    ],
    pinout: [
      { pin: '1 (Jigarrang)', name: 'GND', type: 'GND', description: "Yer (manfiy qutb)" },
      { pin: '2 (Qizil)', name: 'VCC', type: 'VCC', description: '5V quvvat (alohida manba tavsiya etiladi)' },
      { pin: '3 (Sariq/To\'q sariq)', name: 'PWM Signal', type: 'PWM', description: 'Arduino PWM piniga (masalan D9)' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulash', ru: 'Подключение к Arduino Uno', en: 'Wiring with Arduino Uno' },
      description: {
        uz: "Servo kuchli yuklama ostida ko'p tok olishi mumkin, shuning uchun 5V alohida manbadan olingani ma'qul, yer (GND) esa umumiy bo'lishi shart:",
        ru: 'При нагрузке сервопривод потребляет до 0.5А, общий провод GND обязателен:',
        en: 'Under load the servo draws up to 0.5A, common GND with Arduino is mandatory:',
      },
      connections: [
        { from: 'Servo Jigarrang sim', to: 'Arduino GND', note: 'Umumiy yer' },
        { from: 'Servo Qizil sim', to: 'Arduino 5V', note: 'Kuchsiz sinov uchun (katta yuklama uchun tashqi 5V)' },
        { from: 'Servo Sariq sim', to: 'Arduino D9 (PWM)', note: 'Burchakni boshqarish signali' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Arduino IDE standart kutubxonasi: <Servo.h>',
        ru: 'Стандартная библиотека Arduino IDE: <Servo.h>',
        en: 'Standard Arduino IDE library: <Servo.h>',
      },
      code: `#include <Servo.h>

Servo myServo;  // Servo obyektini yaratish

void setup() {
  myServo.attach(9);  // D9 piniga servo boshqaruv simini ulash
}

void loop() {
  // 0 dan 180 gradusgacha sekin burish
  for (int pos = 0; pos <= 180; pos += 1) {
    myServo.write(pos);
    delay(15);
  }

  delay(500);

  // 180 dan 0 gradusgacha qaytarish
  for (int pos = 180; pos >= 0; pos -= 1) {
    myServo.write(pos);
    delay(15);
  }

  delay(500);
}`,
      explanation: [
        { uz: "myServo.attach(9) — servoning boshqaruv signali qaysi raqamli pinga ulanganini bildiradi.", ru: "myServo.attach(9) — привязывает сервопривод к цифровому выводу 9.", en: "myServo.attach(9) binds servo signal to digital pin 9." },
        { uz: "myServo.write(pos) — servoga 0 dan 180 gacha bo'lgan aniq burchakni buyuradi.", ru: "myServo.write(pos) — отправляет команду поворота на угол от 0 до 180°.", en: "myServo.write(pos) commands angle from 0 to 180 degrees." },
      ],
    },
    troubleshooting: [
      { issue: "Servo titraydi (drizhzhit) yoki Arduino qayta ishga tushib ketmoqda (reset)", cause: "Tok yetishmasligi. Arduino 5V pini yetarli amper berolmayapti.", solution: "Servoni alohida 5V 1A quvvat manbaiga ulang va Arduino GND bilan umumiy qiling." },
      { issue: "Servo buyruqqa umuman javob bermayapti", cause: "Simlar ketma-ketligi adashgan yoki noto'g'ri pinga ulangan.", solution: "Jigarrang=GND, Qizil=5V, Sariq=Signal ekanini tekshiring." },
    ],
    relatedSlugs: ['l298n-motor-driver', 'step-motor-28byj48'],
    tags: ['servo', 'sg90', 'motor', 'pwm', 'robot', 'burchak'],
  },

  // ─────────────────────────────────────────────
  // 2. L298N Dual H-Bridge Motor Drayver
  // ─────────────────────────────────────────────
  {
    id: 'motor-002',
    slug: 'l298n-motor-driver',
    type: 'motor',
    category: 'Motorlar va Drayverlar',
    name: {
      uz: 'L298N Ikkitalik H-ko\'prik Motor Drayveri',
      ru: 'Драйвер двигателей L298N (Двойной H-мост)',
      en: 'L298N Dual H-Bridge Motor Driver',
    },
    shortDesc: {
      uz: "2 ta doimiy tok (DC) yoki 1 ta 4-simli qadamli motorni tezlik va yo'nalish bilan boshqaruvchi quvvatli modul.",
      ru: 'Мощный модуль для управления направлением и скоростью двух DC моторов или одного шагового двигателя.',
      en: 'Powerful module controlling speed and direction of 2 DC motors or 1 bipolar stepper motor.',
    },
    overview: {
      uz: "Arduino mikrokontrolleri to'g'ridan-to'g'ri motorni aylantira olmaydi, chunki motorlar 500mA - 2A gacha katta tok talab qiladi. L298N moduli aynan shu vazifani bajaradi: u Arduino'ning past kuchlanishli signallarini olib, tashqi akkumulyatordan (7V-12V) motorlarga yo'naltiradi. 4 g'ildirakli robot mashinalar yaratishda eng ko'p ishlatiladigan drayver.",
      ru: 'Микроконтроллер Arduino не может питать моторы напрямую из-за ограничений по току. Драйвер L298N принимает логические сигналы от Arduino и коммутирует высокое напряжение (до 35V) с током до 2А на канал.',
      en: 'Arduino cannot drive motors directly due to current limits. L298N receives logic signals from Arduino and switches higher voltage (up to 35V, 2A per channel) from external batteries.',
    },
    howItWorks: {
      uz: "H-ko'prik (H-Bridge) sxemasi orqali tranzistorlar tok oqimi yo'nalishini o'zgartiradi: IN1=HIGH va IN2=LOW bo'lsa oldinga, teskarisi bo'lsa orqaga aylanadi. ENA va ENB pinlariga PWM berish orqali motorlarning aylanish tezligi (0-255) sozlanadi.",
      ru: 'Схема H-моста меняет полярность питания мотора для реверса. Подача ШИМ сигнала на пины ENA/ENB регулирует скорость вращения.',
      en: 'H-bridge configuration reverses motor polarity for bi-directional rotation. Applying PWM to ENA/ENB pins controls motor RPM.',
    },
    useCases: {
      uz: "2 yoki 4 g'ildirakli Bluetooth robot mashinalar | Chiziq bo'ylab harakatlanuvchi robot | Konveyer lentalari | CNC mini stanoklar",
      ru: 'Роботы-машинки (Bluetooth/RC) | Робот, следующий по линии | Конвейерные ленты | Мини CNC станки',
      en: 'Smart RC/Bluetooth robot cars | Line follower robot | Conveyor belts | Mini CNC machines',
    },
    voltage: '5V – 35V DC (Motor quvvati)',
    current: '2A har bir kanal uchun (maksimal)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/L298N-Motor-Driver-Module-Pinout.jpg',
    datasheetUrl: 'https://www.sparkfun.com/datasheets/Robotics/L298_H_Bridge.pdf',
    specs: [
      { label: 'Drayver chipi', value: 'L298N Dual H-Bridge' },
      { label: 'Maksimal tok', value: '2A (har bir kanalga)' },
      { label: 'Mantiqiy kuchlanish', value: '5V' },
      { label: 'O\'rnatilgan stabilizator', value: '78M05 (5V chiqish beradi)' },
      { label: 'Maksimal quvvat', value: '25 Vt' },
    ],
    pinout: [
      { pin: 'OUT1 & OUT2', name: 'Motor A', type: 'OUTPUT', description: '1-motor terminallari' },
      { pin: 'OUT3 & OUT4', name: 'Motor B', type: 'OUTPUT', description: '2-motor terminallari' },
      { pin: '12V Terminal', name: 'VMS Power', type: 'POWER', description: 'Akkumulyator musbat qutbi (7V - 12V)' },
      { pin: 'GND Terminal', name: 'GND', type: 'GND', description: 'Akkumulyator va Arduino umumiy yeri' },
      { pin: '5V Terminal', name: '5V Out', type: 'POWER', description: 'Agar 12V ulangan bo\'lsa, Arduino uchun 5V beradi' },
      { pin: 'ENA', name: 'Enable A', type: 'PWM', description: '1-motor tezligi (PWM)' },
      { pin: 'IN1, IN2', name: 'Inputs A', type: 'DIGITAL', description: '1-motor aylanish yo\'nalishi' },
      { pin: 'IN3, IN4', name: 'Inputs B', type: 'DIGITAL', description: '2-motor aylanish yo\'nalishi' },
      { pin: 'ENB', name: 'Enable B', type: 'PWM', description: '2-motor tezligi (PWM)' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno va Batareya bilan ulash', ru: 'Подключение к Arduino и батарее', en: 'Wiring with Arduino and Battery' },
      description: {
        uz: "Eng muhim qoida: Akkumulyatorning GND va Arduino GND simlari L298N ning GND terminalida birlashishi SHART!",
        ru: 'Главное правило: GND батареи и GND Arduino ОБЯЗАТЕЛЬНО должны быть соединены вместе!',
        en: 'Golden rule: Battery GND and Arduino GND MUST be connected together at L298N GND terminal!',
      },
      connections: [
        { from: 'L298N 12V', to: 'Akkumulyator + (7-12V)', note: 'Motorlar quvvati' },
        { from: 'L298N GND', to: 'Batareya - va Arduino GND', note: 'Umumiy yer ulanishi' },
        { from: 'L298N IN1', to: 'Arduino D8', note: 'A motor yo\'nalish 1' },
        { from: 'L298N IN2', to: 'Arduino D7', note: 'A motor yo\'nalish 2' },
        { from: 'L298N ENA', to: 'Arduino D9 (PWM)', note: 'A motor tezligi (jumper olib tashlanadi)' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Maxsus kutubxona shart emas (oddiy digitalWrite va analogWrite)',
        ru: 'Библиотека не требуется (стандартные digitalWrite и analogWrite)',
        en: 'No extra library needed (uses standard digitalWrite & analogWrite)',
      },
      code: `// Motor A boshqaruv pinlari
const int ENA = 9;  // PWM tezlik
const int IN1 = 8;  // Yo'nalish
const int IN2 = 7;  // Yo'nalish

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  // 1. Oldinga to'liq tezlikda harakat
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 255); // 255 = 100% tezlik
  delay(2000);

  // 2. To'xtash
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);

  // 3. Orqaga o'rtacha tezlikda harakat
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, 180); // 180 = ~70% tezlik
  delay(2000);

  // 4. To'xtash
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  delay(1000);
}`,
      explanation: [
        { uz: "digitalWrite(IN1, HIGH) va (IN2, LOW) — motor polaritetini oldinga harakatga o'rnatadi.", ru: "IN1=HIGH, IN2=LOW задаёт вращение вперёд.", en: "IN1=HIGH, IN2=LOW sets forward direction." },
        { uz: "analogWrite(ENA, 255) — PWM orqali motorni maksimal tezlikka chiqaradi (0 dan 255 gacha).", ru: "analogWrite(ENA, 255) регулирует скорость мотора через ШИМ.", en: "analogWrite(ENA, 255) controls motor speed via PWM." },
      ],
    },
    troubleshooting: [
      { issue: "Motorlar umuman aylanmayapti, faqat hushtak ovozi chiqmoqda", cause: "PWM qiymati juda past yoki batareya quvvati o'tirib qolgan.", solution: "analogWrite qiymatini 150 dan yuqori bering va batareya kuchlanishini tekshiring." },
      { issue: "Arduino va L298N ishlamayapti, signal uzilmoqda", cause: "Arduino GND va Batareya GND ulanmagan.", solution: "GND simlarini albatta bitta joyga ulang." },
    ],
    relatedSlugs: ['sg90-micro-servo', 'step-motor-28byj48'],
    tags: ['L298N', 'drayver', 'motor', 'robot mashina', 'h-bridge'],
  },

  // ─────────────────────────────────────────────
  // 3. 28BYJ-48 Step Motor + ULN2003
  // ─────────────────────────────────────────────
  {
    id: 'motor-003',
    slug: 'step-motor-28byj48',
    type: 'motor',
    category: 'Motorlar va Drayverlar',
    name: {
      uz: '28BYJ-48 Qadamli Motor + ULN2003 Drayver',
      ru: 'Шаговый двигатель 28BYJ-48 + драйвер ULN2003',
      en: '28BYJ-48 Stepper Motor + ULN2003 Driver',
    },
    shortDesc: {
      uz: "Mikro qadamlar bilan juda aniq burchakka buriluvchi reduktorli qadamli motor to'plami.",
      ru: 'Редукторный шаговый двигатель с высокой точностью шага и платой драйвера.',
      en: 'Geared stepper motor set with precise step angle control and driver board.',
    },
    overview: {
      uz: "28BYJ-48 — to'rt fazali unipolyar qadamli motor bo'lib, unga ULN2003 tranzistorli drayver platasi birga keladi. Reduktor nisbati 1:64 bo'lgani sababli, to'liq bir aylanish uchun taxminan 2048 qadam kerak bo'ladi. Bu har bir qadam taxminan 0.176 gradusga to'g'ri kelishini anglatadi. Pardalarni avtomat ochish, soat mexanizmlari va aniq o'lchov asboblari uchun ideal.",
      ru: '28BYJ-48 — 4-фазный униполярный шаговый двигатель с редуктором 1:64. Для одного полного оборота требуется 2048 шагов, что обеспечивает отличную точность позиционирования.',
      en: '28BYJ-48 is a 4-phase unipolar stepper motor with 1:64 gear reduction. One full rotation takes 2048 steps, giving exceptional precision.',
    },
    howItWorks: {
      uz: "Motor ichidagi 4 ta chulg'am ketma-ket (IN1 → IN2 → IN3 → IN4) quvvatlanadi. ULN2003 drayveri Arduinoning past toki bilan har bir chulg'amni navbatma-navbat yoqadi va rotor qadamma-qadam aylanadi.",
      ru: 'Микросхема ULN2003 последовательно подает питание на 4 фазные обмотки двигателя, заставляя ротор шагать с заданным интервалом.',
      en: 'ULN2003 sequentially energizes the 4 motor phase coils, causing the rotor to advance precisely step by step.',
    },
    useCases: {
      uz: "Aqlli parda mexanizmi | 3D skaner aylanuvchi stoli | Aniq dozalovchi asboblar | Soat mexanizmi",
      ru: 'Умные шторы | Поворотный стол 3D сканера | Дозаторы жидкостей | Часовые механизмы',
      en: 'Smart window blinds | 3D scanner turntable | Liquid dispensers | Precision clockwork',
    },
    voltage: '5V DC',
    current: '240 mA (aylanish paytida)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/28BYJ-48-Stepper-Motor-Pinout.jpg',
    datasheetUrl: 'https://components101.com/sites/default/files/component_datasheet/28byj-48-step-motor-datasheet.pdf',
    specs: [
      { label: 'Qadam burchagi', value: '5.625° / 64 (reduktor bilan)' },
      { label: 'Bir aylanish qadamlari', value: '2048 yoki 4096 (yarim qadam)' },
      { label: 'Reduksiya nisbati', value: '1:64' },
      { label: 'Fazalar soni', value: '4 faza' },
    ],
    pinout: [
      { pin: 'IN1', name: 'Faza A', type: 'DIGITAL', description: 'Arduino D8' },
      { pin: 'IN2', name: 'Faza B', type: 'DIGITAL', description: 'Arduino D9' },
      { pin: 'IN3', name: 'Faza C', type: 'DIGITAL', description: 'Arduino D10' },
      { pin: 'IN4', name: 'Faza D', type: 'DIGITAL', description: 'Arduino D11' },
      { pin: '+ / -', name: 'VCC / GND', type: 'POWER', description: '5V tashqi quvvat manbai' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulanish', ru: 'Подключение к Arduino Uno', en: 'Wiring to Arduino Uno' },
      description: { uz: "ULN2003 moduli pinlarini Arduino raqamli pinlariga ulang:", ru: 'Подключите выводы ULN2003 к цифровым выводам:', en: 'Connect ULN2003 inputs to digital pins:' },
      connections: [
        { from: 'ULN2003 IN1-IN4', to: 'Arduino D8, D9, D10, D11', note: 'Boshqaruv signallari' },
        { from: 'ULN2003 (+)', to: 'Arduino 5V (yoki tashqi 5V)', note: '5V quvvat' },
        { from: 'ULN2003 (-)', to: 'Arduino GND', note: 'Umumiy yer' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Standart kutubxona: <Stepper.h>',
        ru: 'Стандартная библиотека: <Stepper.h>',
        en: 'Built-in library: <Stepper.h>',
      },
      code: `#include <Stepper.h>

const int STEPS_PER_REV = 2048; // Bir to'liq aylanish qadami

// IN1, IN3, IN2, IN4 tartibida ulanadi (chulg'amlar ketma-ketligi)
Stepper myStepper(STEPS_PER_REV, 8, 10, 9, 11);

void setup() {
  myStepper.setSpeed(10); // Aylanish tezligi (RPM - minutiga aylanishlar soni)
}

void loop() {
  // 1 to'liq aylanish soat strelkasi bo'yicha
  myStepper.step(STEPS_PER_REV);
  delay(1000);

  // 1 to'liq aylanish teskari tomonga
  myStepper.step(-STEPS_PER_REV);
  delay(1000);
}`,
      explanation: [
        { uz: "Stepper myStepper(2048, 8, 10, 9, 11) — 4 fazali qadamli motorni initsializatsiya qiladi.", ru: "Инициализация шагового мотора с пинами 8, 10, 9, 11.", en: "Initializes stepper motor on pins 8, 10, 9, 11." },
        { uz: "myStepper.step(qadam) — ko'rsatilgan qadamlar soniga motorni buradi.", ru: "myStepper.step() — делает указанное число шагов.", en: "myStepper.step() drives motor for specified number of steps." },
      ],
    },
    troubleshooting: [
      { issue: "Motor faqat titraydi, aylanmayapti", cause: "Pinlar ketma-ketligi noto'g'ri (8, 10, 9, 11 o'rniga 8, 9, 10, 11 yozilgan).", solution: "Stepper myStepper(2048, 8, 10, 9, 11) tartibini tekshiring." },
    ],
    relatedSlugs: ['sg90-micro-servo', 'l298n-motor-driver'],
    tags: ['stepper', 'qadamli motor', '28BYJ-48', 'uln2003'],
  },

  // ─────────────────────────────────────────────
  // 4. 5V Rele (Relay) Moduli
  // ─────────────────────────────────────────────
  {
    id: 'motor-004',
    slug: 'relay-module-5v',
    type: 'relay',
    category: 'Motorlar va Drayverlar',
    name: {
      uz: '5V Elektromagnit Rele Moduli',
      ru: 'Модуль реле 5V (Электромагнитное)',
      en: '5V Electromagnetic Relay Module',
    },
    shortDesc: {
      uz: "Arduino 5V signali orqali 220V maishiy elektr qurilmalarini xavfsiz yoqib-o'chirish moduli.",
      ru: 'Модуль для безопасного управления бытовыми приборами 220V с помощью логики 5V Arduino.',
      en: 'Module safely switching 220V AC household appliances using low-voltage 5V Arduino logic.',
    },
    overview: {
      uz: "Rele — bu elektr kalit hisoblanadi. Uning ichida elektromagnit g'altak bor. Arduino 5V signal yuborganda, g'altak magnit maydoni hosil qilib, 220V tarmoqdagi yuklamani (chiroq, nasos, isitgich) ulaydi yoki uzadi. Optron (optocoupler) orqali to'liq galvanik ajratilgani sababli Arduino yuqori kuchlanishdan 100% himoyalangan.",
      ru: 'Реле — электромагнитный переключатель. При подаче сигнала 5V от Arduino катушка замыкает контакты сети 220V. Оптопара изолирует цепи микроконтроллера от сетевого напряжения.',
      en: 'Relay is an electrically operated switch. 5V logic signal from Arduino triggers the coil to switch high-voltage loads like 220V lamps or water pumps. Optocoupler provides galvanic isolation.',
    },
    howItWorks: {
      uz: "Modulda 3 ta chiqish terminali bor: NO (Normally Open - Odatda ochiq), COM (Common - Umumiy) va NC (Normally Closed - Odatda yopiq). Signal berilganda COM kontakt NO tomonga ulanadi va zanjir berkiladi.",
      ru: 'На выходе реле 3 контакта: NO (нормально разомкнутый), COM (общий) и NC (нормально замкнутый). При сигнале COM замыкается с NO.',
      en: 'Output features NO, COM, and NC terminals. When triggered, COM connects to NO, closing the high-voltage circuit.',
    },
    useCases: {
      uz: "Aqlli uy (xona chiroqlarini masofadan yoqish) | Avtomat sug'orish nasosini ishga tushirish | Isitgich va ventilyator boshqaruvi",
      ru: 'Умный дом (включение освещения) | Автополив (управление насосом 220V) | Управление бойлером и обогревателем',
      en: 'Smart Home automated lighting | 220V irrigation water pump | Heater and fan control',
    },
    voltage: '5V DC (G\'altak uchun)',
    current: '70 mA (yoniq holatda)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/5v-relay-module-pinout.jpg',
    datasheetUrl: 'https://www.circuitbasics.com/wp-content/uploads/2015/11/SRD-05VDC-SL-C-Datasheet.pdf',
    specs: [
      { label: 'Maksimal yuklama (AC)', value: '250V AC / 10A (2200 Watt)' },
      { label: 'Maksimal yuklama (DC)', value: '30V DC / 10A' },
      { label: 'Boshqaruv toki', value: '15-20 mA (optron)' },
      { label: 'Izolyatsiya', value: 'Optronli galvanik himoya' },
    ],
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'POWER', description: '5V quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: 'IN', name: 'Signal', type: 'DIGITAL', description: 'Arduino D7 (Low-level trigger)' },
      { pin: 'NO', name: 'Normally Open', type: 'OUTPUT', description: 'Odatda ochiq kontakt (chiroq simi)' },
      { pin: 'COM', name: 'Common', type: 'INPUT', description: '220V tarmoq faza simi' },
      { pin: 'NC', name: 'Normally Closed', type: 'OUTPUT', description: 'Odatda yopiq kontakt' },
    ],
    wiring: {
      title: { uz: 'Arduino va Chiroq bilan ulanish', ru: 'Подключение к Arduino и лампе 220V', en: 'Wiring to Arduino and 220V Lamp' },
      description: {
        uz: "DIQQAT: 220V elektr toki hayot uchun xavfli! Ishlayotganingizda tarmoqdan uzilganiga ishonch hosil qiling:",
        ru: 'ВНИМАНИЕ: 220В опасно для жизни! Проводите монтаж только при обесточенной сети:',
        en: 'CAUTION: Mains 220V AC is dangerous! Ensure power is disconnected during wiring:',
      },
      connections: [
        { from: 'Relay VCC', to: 'Arduino 5V', note: '5V quvvat' },
        { from: 'Relay GND', to: 'Arduino GND', note: 'Umumiy yer' },
        { from: 'Relay IN', to: 'Arduino D7', note: 'Boshqaruv pini' },
        { from: '220V Faza simi', to: 'Relay COM', note: 'Tarmoqning uziladigan fazasi' },
        { from: 'Relay NO', to: 'Chiroqqa ketuvchi sim', note: 'Chiroqning ikkinchi simi tarmoq nollariga ulanadi' },
      ],
    },
    codeExample: {
      libraryNeeded: {
        uz: 'Kutubxona kerak emas',
        ru: 'Библиотека не требуется',
        en: 'No library needed',
      },
      code: `const int RELAY_PIN = 7;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  // Ko'pchilik rele modullari LOW bo'lganda yoqiladi (Active-LOW)
  digitalWrite(RELAY_PIN, HIGH); // Dastlab o'chiq holat
}

void loop() {
  // Chiroqni yoqish
  digitalWrite(RELAY_PIN, LOW);
  delay(3000); // 3 soniya yoniq turadi

  // Chiroqni o'chirish
  digitalWrite(RELAY_PIN, HIGH);
  delay(3000); // 3 soniya o'chiq turadi
}`,
      explanation: [
        { uz: "Ko'p rele modullari 'Active-LOW' bo'ladi: LOW berilganda chertillab yoqiladi, HIGH da o'chadi.", ru: "Большинство реле имеют Active-LOW логику: включаются нулём (LOW).", en: "Most relay modules are active-LOW: LOW turns it on, HIGH turns off." },
      ],
    },
    troubleshooting: [
      { issue: "Relay chertillamayapti va LED yoritmayapti", cause: "IN piniga signal bormayapti yoki GND ulanmagan.", solution: "Arduino GND va VCC to'g'riligini tekshiring." },
    ],
    relatedSlugs: ['l298n-motor-driver', 'sg90-micro-servo'],
    tags: ['rele', 'relay', '220V', 'aqlli uy', 'switch'],
  },
];
