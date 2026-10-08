import { ComponentItem } from '@/types';

export const componentsData: ComponentItem[] = [
  {
    id: '1',
    slug: 'hc-sr04',
    name: 'HC-SR04 Ultrasonik Masofa Datchigi',
    shortDesc: 'Ovoz to\'lqinlari (ultratovush) yordamida 2 sm dan 400 sm gacha bo\'lgan masofani aniqlaydi.',
    category: 'Sensorlar',
    voltage: '5V DC',
    current: '15 mA',
    specs: [
      { label: 'Ishchi kuchlanish', value: '5V DC' },
      { label: 'Ishchi tok', value: '15 mA' },
      { label: 'O\'lchash diapazoni', value: '2 sm - 400 sm' },
      { label: 'O\'lchash aniqligi', value: '0.3 sm (3 mm)' },
      { label: 'O\'lchash burchagi', value: '15 daraja' },
      { label: 'Trig signali davomiyligi', value: '10 µs TTL impuls' },
    ],
    overview:
      'HC-SR04 datchigi ultratovush impulslarini yuboradi va nishondan qaytgan aks-sadoni kutadi. Yuborilgan va qabul qilingan to\'lqin o\'rtasidagi vaqt bo\'yicha havodagi tovush tezligiga (340 m/s) asoslanib masofa aniq hisoblanadi.',
    howItWorks:
      'Trig oyoqchasiga kamida 10 mikrosekundlik HIGH signali beriladi. Datchik avtomatik 40 kHz chastotada 8 ta tovush to\'lqinini uzatadi. Echo pini nishondan qaytgan to\'lqin kelguncha HIGH holatida turadi. Shu HIGH vaqtini `pulseIn()` funksiyasi bilan o\'lchab, `masofa = (vaqt * 0.0343) / 2` formulasi bilan santimetrga o\'giramiz.',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V musbat quvvat ta\'minoti kiritiladi' },
      { pin: '2', name: 'Trig', type: 'Digital', description: 'Trigger (impuls yuborish signali, Arduino OUTPUT piniga ulanadi)' },
      { pin: '3', name: 'Echo', type: 'Digital', description: 'Echo (qaytgan to\'lqin signali, Arduino INPUT piniga ulanadi)' },
      { pin: '4', name: 'GND', type: 'GND', description: 'Umumiy yer (Ground / Manfiy qutb)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanish sxemasi',
      description: 'Datchikni to\'g\'ridan-to\'g\'ri Arduino Uno platasining raqamli pinlariga ulang:',
      connections: [
        { from: 'HC-SR04 VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'HC-SR04 Trig', to: 'Arduino D9', note: 'Sariq sim (Chiquvchi signal)' },
        { from: 'HC-SR04 Echo', to: 'Arduino D10', note: 'Yashil sim (Kiruvchi signal)' },
        { from: 'HC-SR04 GND', to: 'Arduino GND', note: 'Qora sim' },
      ],
    },
    sampleCode: {
      title: 'HC-SR04 Masofani Serial Monitorga chiqarish kodi',
      description: 'Ushbu kod har 200 ms da masofani santimetrda o\'lchaydi va kompyuterga uzatadi.',
      code: `const int trigPin = 9;
const int echoPin = 10;

long duration;
float distanceCm;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.println("HC-SR04 Datchigi tayyor!");
}

void loop() {
  // Trig pinini tozalash
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  // 10 mikrosekund HIGH signali uzatamiz
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Qaytgan to'lqin vaqtini o'lchaymiz (mikrosekundda)
  duration = pulseIn(echoPin, HIGH);

  // Masofani santimetrda hisoblash: (vaqt * 0.0343) / 2
  distanceCm = duration * 0.0343 / 2.0;

  Serial.print("Masofa: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  delay(200);
}`,
      explanation: [
        '9-pin Trig (OUTPUT), 10-pin esa Echo (INPUT) sifatida sozlanadi.',
        'Trig piniga 10 mks davomida HIGH berilganda, modul ultratovush to\'lqinini uzatadi.',
        'pulseIn(echoPin, HIGH) buyrug\'i to\'lqin qaytib kelguncha o\'tgan vaqtni o\'lchaydi.',
        '0.0343 - tovushning sm/mikrosekunddagi tezligi. 2 ga bo\'linishi sababi — to\'lqin borib qaytadi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Natija doim 0 sm yoki 1100 sm ko\'rsatmoqda',
        cause: 'Echo yoki Trig pinlari adashib ulangan yoki kontakt yomon.',
        solution: '9 va 10 pinlar o\'rnini tekshiring, breadboarddagi simlarni mahkamlang.',
      },
      {
        issue: 'Yumshoq buyumlar (mato, gubka) masofasi aniqlanmayapti',
        cause: 'Ultratovush yumshoq yuzalarda yutilib ketadi va qaytmaydi.',
        solution: 'Qattiq va tekis yuzalar (devor, taxta, plastik) orqali sinab ko\'ring.',
      },
    ],
  },
  {
    id: '2',
    slug: 'dht11',
    name: 'DHT11 Harorat va Namlik Datchigi',
    shortDesc: 'Atrof-muhit harorati va havoning nisbiy namligini raqamli formatda o\'lchaydi.',
    category: 'Sensorlar',
    voltage: '3.3V - 5.5V DC',
    current: '0.5 - 2.5 mA',
    specs: [
      { label: 'Ishchi kuchlanish', value: '3.3V - 5.5V' },
      { label: 'Harorat oralig\'i', value: '0°C dan 50°C gacha (±2°C)' },
      { label: 'Namlik oralig\'i', value: '20% dan 90% RH (±5%)' },
      { label: 'So\'rov davriyligi', value: 'Kamida 1 soniyada 1 marta' },
      { label: 'Protokol', value: '1-Wire xususiy bitta simli protokol' },
    ],
    overview:
      'DHT11 havoning namligini sig\'imli (kapasitiv) sensor orqali, haroratni esa termistor orqali o\'lchaydi. U ichidagi kichik mikrokontroller orqali ma\'lumotlarni raqamli signalga aylantiradi.',
    howItWorks:
      'Bitta DATA simi orqali Arduino bilan 40-bitlik paket almashiniladi (16 bit namlik, 16 bit harorat, 8 bit nazorat yig\'indisi). Ma\'lumotlarni o\'qish uchun odatda mashhur `DHT sensor library` kutubxonasi ishlatiladi.',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V musbat quvvat' },
      { pin: '2', name: 'DATA', type: 'Digital', description: 'Raqamli ma\'lumot uzatish pini (Pull-up rezistor kerak)' },
      { pin: '3', name: 'NC', type: 'Special' as any, description: 'Ulanmaydi (Not Connected)' },
      { pin: '4', name: 'GND', type: 'GND', description: 'Ground (Manfiy qutb)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanish sxemasi',
      description: 'Agar sizda 3 oyoqli modul bo\'lsa, pull-up rezistor modulning o\'zida o\'rnatilgan bo\'ladi:',
      connections: [
        { from: 'DHT11 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'DHT11 DATA', to: 'Arduino D2', note: 'Raqamli signal pini' },
        { from: 'DHT11 GND', to: 'Arduino GND', note: 'Umumiy yer' },
      ],
    },
    sampleCode: {
      title: 'DHT11 Harorat va namlikni o\'qish kodi',
      description: 'Adafruit DHT kutubxonasi yordamida o\'qish.',
      code: `#include <DHT.h>

#define DHTPIN 2     // Datchik ulangan pin
#define DHTTYPE DHT11   // Datchik modeli (DHT11 yoki DHT22)

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT11 sinovi boshlandi...");
  dht.begin();
}

void loop() {
  // Datchikdan o'qish uchun kamida 2 soniya kuting
  delay(2000);

  float namlik = dht.readHumidity();
  float harorat = dht.readTemperature(); // Selsiy bo'yicha

  // Agar o'qishda xatolik yuz bersa
  if (isnan(namlik) || isnan(harorat)) {
    Serial.println("DHT datchigidan ma'lumot o'qib bo'lmadi!");
    return;
  }

  Serial.print("Namlik: ");
  Serial.print(namlik);
  Serial.print(" %\\t");
  Serial.print("Harorat: ");
  Serial.print(harorat);
  Serial.println(" *C");
}`,
      explanation: [
        'Adafruit Sensor va DHT kutubxonalari o\'rnatilgan bo\'lishi shart.',
        'dht.readHumidity() foizda namlikni qaytaradi.',
        'dht.readTemperature() gradus Selsiyda haroratni beradi.',
        'isnan() tekshiruvi datchik uzilib qolmaganini tekshiradi.',
      ],
    },
    troubleshooting: [
      {
        issue: '"Failed to read from DHT sensor!" xabari chiqmoqda',
        cause: 'DATA pini kontakt qilmayapti yoki VCC/GND teskari ulangan.',
        solution: 'D2 pini ulanishini tekshiring, kutubxona turini (DHT11) to\'g\'ri tanlaganingizga ishonch hosil qiling.',
      },
    ],
  },
  {
    id: '3',
    slug: 'oled-096-i2c',
    name: 'OLED 0.96" I2C Displey (SSD1306)',
    shortDesc: '128x64 pikselli juda yorqin, tejamkor va ixcham monoxrom ekran.',
    category: 'Displeylar',
    voltage: '3.3V - 5V DC',
    current: '20 mA (o\'rtacha)',
    specs: [
      { label: 'Ekran o\'lchami', value: '0.96 dyuym' },
      { label: 'Ruxsat (Resolution)', value: '128 x 64 piksel' },
      { label: 'Drayver chipi', value: 'SSD1306' },
      { label: 'Aloqa interfeysi', value: 'I2C (SDA, SCL)' },
      { label: 'I2C Manzili', value: '0x3C (yoki 0x3D)' },
      { label: 'Ko\'rish burchagi', value: '160 darajadan yuqori' },
    ],
    overview:
      'SSD1306 boshqaruvidagi ushbu OLED displey orqa yoritgich (backlight) talab qilmaydi, chunki har bir piksel o\'zi yorug\'lik taratadi. I2C interfeysi tufayli Arduino bilan aloqa uchun bor-yo\'g\'i 2 ta sim yetarli.',
    howItWorks:
      'I2C shinasi orqali Arduino A4 (SDA) va A5 (SCL) oyoqchalariga ulanadi. `Adafruit_SSD1306` va `Adafruit_GFX` kutubxonalari yordamida matnlar, raqamlar, chiziqlar, geometrik shakllar va hatto pikselli rasmlarni chizish mumkin.',
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: 'Manfiy qutb (Ground)' },
      { pin: '2', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V musbat quvvat' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C Takt signali (Arduino Uno A5 piniga ulanadi)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C Ma\'lumot uzatish signali (Arduino Uno A4 piniga ulanadi)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan I2C ulanishi',
      description: 'Arduino Uno platasining standart I2C pinlariga ulanadi:',
      connections: [
        { from: 'OLED GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'OLED VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'OLED SCL', to: 'Arduino A5 (yoki maxsus SCL pini)', note: 'Takt signali' },
        { from: 'OLED SDA', to: 'Arduino A4 (yoki maxsus SDA pini)', note: 'Ma\'lumot signali' },
      ],
    },
    sampleCode: {
      title: 'OLED Ekranga "Salom, Dunyo!" chiqarish',
      description: 'Adafruit_SSD1306 kutubxonasi bilan minimal kod.',
      code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  Serial.begin(9600);

  // 0x3C - ko'pchilik 0.96 OLED larning I2C manzili
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("SSD1306 topilmadi!");
    for(;;);
  }

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(10, 15);
  display.println("ArduinoUz Portal");

  display.setTextSize(2);
  display.setCursor(10, 35);
  display.println("Salom!");
  display.display(); // Ekranga chizish buyrug'i
}

void loop() {
  // Dinamik yangilash
}`,
      explanation: [
        'display.begin(SSD1306_SWITCHCAPVCC, 0x3C) - displeyni ishga tushiradi.',
        'display.clearDisplay() - ekran xotirasini tozalaydi.',
        'display.setTextSize(2) - shrift o\'lchamini 2 karra kattalashtiradi.',
        'display.display() buyrug\'i berilmaguncha o\'zgarishlar ekranda ko\'rinmaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Ekran yonmayapti, mutlaqo qora turibdi',
        cause: 'I2C manzili 0x3C emas, balki 0x3D bo\'lishi mumkin yoki SDA/SCL teskari ulangan.',
        solution: 'I2C Scanner kodi yordamida manzilni tekshiring va 0x3D qilib ko\'ring.',
      },
    ],
  },
  {
    id: '4',
    slug: 'sg90-servo',
    name: 'SG90 Micro Servo Motor (9g)',
    shortDesc: '0 dan 180 darajagacha aniq burchak ostida aylanuvchi yengil miniatyura servomotor.',
    category: 'Motorlar',
    voltage: '4.8V - 6V DC',
    current: '100 mA (ishchi) - 500 mA (to\'xtash)',
    specs: [
      { label: 'Og\'irligi', value: '9 gramm' },
      { label: 'Aylanish burchagi', value: '0° - 180°' },
      { label: 'Aylantiruvchi moment (Torque)', value: '1.8 kg/cm (4.8V da)' },
      { label: 'Tezlik', value: '0.12 soniya / 60 daraja' },
      { label: 'Nazorat signali', value: 'PWM (50 Hz, 1ms - 2ms impuls)' },
    ],
    overview:
      'SG90 — robot qo\'llar, dronlar, avtomobil burilish mexanizmlari va to\'siqli eshiklar (shlagbaum) yasashda eng ko\'p ishlatiladigan arzon va qulay servomotor. U o\'zida reduktor tishli g\'ildiraklari, motor va burchak potentsiometrini jamlagan.',
    howItWorks:
      'Servomotor ichki qayta aloqa (feedback) sxemasiga ega. Arduino unga har 20 ms da PWM signali yuboradi: 1 ms impuls 0 gradusni, 1.5 ms impuls 90 gradusni, 2 ms impuls esa 180 gradusni bildiradi. Arduino-ning standart `Servo.h` kutubxonasi orqali to\'g\'ridan-to\'g\'ri gradus ko\'rsatib boshqariladi.',
    pinout: [
      { pin: '1 (Jigarrang)', name: 'GND', type: 'GND', description: 'Manfiy qutb (Ground)' },
      { pin: '2 (Qizil)', name: 'VCC', type: 'VCC', description: '4.8V - 6V Quvvat' },
      { pin: '3 (Sariq/To\'q sariq)', name: 'Signal', type: 'PWM', description: 'PWM boshqaruv signali (masalan, Arduino D9)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan Servo ulanishi',
      description: 'Eslatma: Agar bir nechta servo ishlatilsa, alohida 5V tashqi quvvat manbai kerak bo\'ladi.',
      connections: [
        { from: 'Servo Jigarrang sim', to: 'Arduino GND', note: 'Yer' },
        { from: 'Servo Qizil sim', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'Servo To\'q sariq sim', to: 'Arduino D9 (PWM)', note: 'Boshqaruv signali' },
      ],
    },
    sampleCode: {
      title: 'Servoni 0 dan 180 gradusgacha siljitish (Sweep)',
      description: 'Standart Servo.h kutubxonasi bilan silliq harakatlantirish.',
      code: `#include <Servo.h>

Servo myServo;  // Servo obyektini yaratish
int pos = 0;    // Joriy burchak pozitsiyasi

void setup() {
  myServo.attach(9);  // 9-raqamli pinga ulaymiz
}

void loop() {
  // 0 darajadan 180 darajagacha
  for (pos = 0; pos <= 180; pos += 1) {
    myServo.write(pos);
    delay(15); // Harakat silliq bo'lishi uchun
  }

  // 180 darajadan 0 darajagacha qaytarish
  for (pos = 180; pos >= 0; pos -= 1) {
    myServo.write(pos);
    delay(15);
  }
}`,
      explanation: [
        '#include <Servo.h> - standart kutubxona qo\'shiladi.',
        'myServo.attach(9) - 9-pin PWM boshqaruv pini qilib belgilanadi.',
        'myServo.write(burchak) - servoga kerakli gradusni (0 dan 180 gacha) buyuradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Servo titrayapti va Arduino qayta o\'chib-yonyapti (Reset)',
        cause: 'Arduino 5V chiqishidan haddan tashqari ko\'p tok sarflanmoqda.',
        solution: 'Servoga alohida batareya yoki 5V quvvat bloki bering va ularning GND larini birlashtiring.',
      },
    ],
  },
  {
    id: '5',
    slug: 'relay-5v',
    name: '1-Kanalli 5V Rele Moduli',
    shortDesc: 'Past kuchlanishli Arduino signali bilan 220V elektr asboblarini (chiroq, nasos, isitgich) xavfsiz yoqish va o\'chirish.',
    category: 'Modullar',
    voltage: '5V DC',
    current: '70 mA (g\'altak yoqilganda)',
    specs: [
      { label: 'Boshqaruv kuchlanishi', value: '5V DC' },
      { label: 'Maksimal yuklama (AC)', value: '250V AC / 10A' },
      { label: 'Maksimal yuklama (DC)', value: '30V DC / 10A' },
      { label: 'Himoya', value: 'Optopara (Optocoupler) galvanik ajratgich' },
      { label: 'Ishlash mantiqi', value: 'Odatda Low-Level Trigger (LOW da faollashadi)' },
    ],
    overview:
      'Rele — bu elektromagnit kalit. Kichik 5V tok g\'altakni tortadi va mexanik kontaktlarni birlashtiradi. Bu orqali yuqori kuchlanishli 220V maishiy texnikalarni xavfsiz boshqarish mumkin.',
    howItWorks:
      'IN piniga LOW yoki HIGH berilganda tranzistor ochiladi, g\'altak ulanadi va kontakt chertib ulanadi. Releda 3 ta yuqori kuchlanish terminali bor: COM (Common - umumiy), NO (Normally Open - ochiq), NC (Normally Closed - yopiq).',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V musbat quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer (Ground)' },
      { pin: '3', name: 'IN', type: 'Digital', description: 'Boshqaruv signali (Arduino raqamli pini)' },
      { pin: '4', name: 'COM', type: 'Quvvat', description: 'Common (220V tarmoq simi ulanadi)' },
      { pin: '5', name: 'NO', type: 'Quvvat', description: 'Normally Open (Signaldan so\'ng ulanadi)' },
      { pin: '6', name: 'NC', type: 'Quvvat', description: 'Normally Closed (Signal bo\'lmaganda ulanadi)' },
    ],
    wiringDiagram: {
      title: 'Arduino bilan Rele ulanishi',
      description: 'Rele moduli Arduinoga 3 ta sim bilan ulanadi:',
      connections: [
        { from: 'Rele VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'Rele GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'Rele IN', to: 'Arduino D7', note: 'Boshqaruv pini' },
      ],
    },
    sampleCode: {
      title: 'Releni har 3 soniyada yoqib o\'chirish',
      description: 'Chiroqni avtomatlashtirish uchun sinov kodi.',
      code: `const int relayPin = 7;

void setup() {
  pinMode(relayPin, OUTPUT);
  // Ko'pchilik relelar LOW berganda yoqiladi
  digitalWrite(relayPin, HIGH); // Dastlab o'chiq
}

void loop() {
  digitalWrite(relayPin, LOW);  // Rele YOQILDI (chertgan ovoz eshitiladi)
  delay(3000);

  digitalWrite(relayPin, HIGH); // Rele O'CHIRILDI
  delay(3000);
}`,
      explanation: [
        'pinMode(relayPin, OUTPUT) orqali 7-pin chiquvchi qilib sozlanadi.',
        'Low-level trigger relelarda LOW - yoqish, HIGH esa o\'chirish buyrug\'idir.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Signal berilganda rele chertmayapti, LED yonmayapti',
        cause: 'VCC yoki GND to\'liq ulanmagan yoki pin kuchi yetmayapti.',
        solution: 'Arduino 5V pinini tekshiring, jumper kabelni almashtirib ko\'ring.',
      },
    ],
  },
  {
    id: '6',
    slug: 'mq-2',
    name: 'MQ-2 Gaz va Tutun Datchigi',
    shortDesc: 'Metan, butan, LPG, spirt va tutun konsentratsiyasini havoda aniqlovchi gaz sensori.',
    category: 'Sensorlar',
    voltage: '5V DC',
    current: '150 mA',
    specs: [
      { label: 'Aniqlaydigan gazlar', value: 'LPG, tutun, spirt, propan, vodorod, metan' },
      { label: 'Sezgirlik diapazoni', value: '300 - 10000 ppm' },
      { label: 'Qizish vaqti (Preheat)', value: 'Kamida 20 soniya (birinchi marta 24 soat)' },
      { label: 'Chiqish signallari', value: 'Analog (AO) va Raqamli komparator (DO)' },
    ],
    overview:
      'MQ-2 gaz datchigi uylarda gaz sizib chiqishi va yong\'in xavfsizligi tizimlarida keng qo\'llaniladi. Uning ichida qizdiruvchi element va qalay dioksidi (SnO2) sezgir qatlami mavjud.',
    howItWorks:
      'Toza havoda o\'tkazuvchanlik past bo\'ladi. Atrofda yonuvchi gaz paydo bo\'lganda datchik qarshiligi pasayadi va Analog (AO) pinidagi kuchlanish ko\'tariladi. Datchikdagi potentsiometr orqali esa chegaraviy qiymat belgilanib, Raqamli (DO) signal olinadi.',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V musbat quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Yer (Ground)' },
      { pin: '3', name: 'DO', type: 'Digital', description: 'Raqamli signal (Chegara oshganda LOW/HIGH bo\'ladi)' },
      { pin: '4', name: 'AO', type: 'Analog', description: 'Analog signal (Gaz konsentratsiyasiga mutanosib kuchlanish)' },
    ],
    wiringDiagram: {
      title: 'Arduino bilan MQ-2 ulanishi',
      description: 'Analog qiymatni o\'qish uchun A0 piniga ulanadi:',
      connections: [
        { from: 'MQ-2 VCC', to: 'Arduino 5V', note: '5V quvvat' },
        { from: 'MQ-2 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'MQ-2 AO', to: 'Arduino A0', note: 'Analog signal' },
      ],
    },
    sampleCode: {
      title: 'Gaz miqdorini Analog o\'qish',
      description: 'Havodagi gaz darajasini Serial monitorga chiqarish.',
      code: `const int mqPin = A0;

void setup() {
  Serial.begin(9600);
  Serial.println("MQ-2 qizdirilmoqda...");
}

void loop() {
  int gasValue = analogRead(mqPin);

  Serial.print("Gaz ko'rsatkichi: ");
  Serial.println(gasValue);

  if (gasValue > 400) {
    Serial.println("DIQQAT! Gaz yoki tutun aniqlandi!");
  }

  delay(500);
}`,
      explanation: [
        'analogRead(A0) 0 dan 1023 gacha qiymat qaytaradi.',
        'Odatdagi toza havoda ko\'rsatkich 100-250 atrofida bo\'ladi.',
        'Gaz paydo bo\'lganda qiymat 400-800 gacha ko\'tariladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Datchik juda qizib ketmoqda',
        cause: 'MQ datchiklar ichida spiral qizdirgich bor, iliq/issiq bo\'lishi tabiiy holat.',
        solution: 'Agar kuya hidi chiqmasa yoki erib ketmasa, bu me\'yordagi holat.',
      },
    ],
  },
  {
    id: '7',
    slug: 'pir-hc-sr501',
    name: 'PIR Harakat Datchigi (HC-SR501)',
    shortDesc: 'Inson va hayvonlar tanasidan tarqaladigan infraqizil (IR) nurlanish orqali harakatni aniqlaydi.',
    category: 'Sensorlar',
    voltage: '4.5V - 20V DC',
    current: '< 50 µA (juda tejamkor)',
    specs: [
      { label: 'Ishchi kuchlanish', value: '4.5V - 20V DC' },
      { label: 'Chiqish kuchlanishi', value: '3.3V (HIGH) / 0V (LOW)' },
      { label: 'Aniqlash masofasi', value: '3 m - 7 m (potentsiometr bilan sozlanadi)' },
      { label: 'Aniqlash burchagi', value: '< 120 daraja konus' },
      { label: 'Kutish vaqti', value: '0.3 soniyadan 5 daqiqagacha sozlanadi' },
    ],
    overview:
      'PIR (Passive Infrared Sensor) harakat sensori uylarning kirish qismlarida avtomatik chiroq yoqish yoki qo\'riqlash signalizatsiyalarida ishlatiladi. Oq gumbazsimon Fresnel linzasi infraqizil nurlarni ichki piroelektrik elementga yo\'naltiradi.',
    howItWorks:
      'Tirik mavjudot harakatlanganda ikkita sezgir maydon o\'rtasidagi nurlanish balansi o\'zgaradi va datchik chiqishiga 3.3V HIGH signalini yuboradi.',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V (yoki 4.5V-20V) quvvat' },
      { pin: '2', name: 'OUT', type: 'Digital', description: 'Raqamli signal chiqishi (Harakat bo\'lsa HIGH)' },
      { pin: '3', name: 'GND', type: 'GND', description: 'Manfiy qutb (Ground)' },
    ],
    wiringDiagram: {
      title: 'PIR va Arduino Uno ulanishi',
      description: 'Chiqish pini to\'g\'ridan-to\'g\'ri Arduino raqamli kirishiga ulanadi:',
      connections: [
        { from: 'PIR VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'PIR OUT', to: 'Arduino D2', note: 'Signal pini' },
        { from: 'PIR GND', to: 'Arduino GND', note: 'Yer' },
      ],
    },
    sampleCode: {
      title: 'Harakat aniqlanganda xabar berish',
      description: 'Harakat aniqlanganda LEDni yoqish va xabar chiqarish.',
      code: `const int pirPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("PIR datchigi tayyorlanmoqda (30 soniya kutish)...");
}

void loop() {
  int pirState = digitalRead(pirPin);

  if (pirState == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Harakat aniqlandi!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
      explanation: [
        'Datchik ishga tushganda 30-60 soniya atrof-muhit foniga moslashishi kerak.',
        'Harakat bo\'lganda OUT pini 3.3V (HIGH) bo\'ladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Datchik harakatsiz xonada ham to\'xtovsiz HIGH bermoqda',
        cause: 'Platadagi kutish vaqti potentsiometri haddan tashqari ko\'pga burilgan yoki isitgich/konditsioner yaqinida turibdi.',
        solution: 'Potentsiometrni soat strelkasiga qarshi burib sezgirlikni pasaytiring.',
      },
    ],
  },
  {
    id: '8',
    slug: 'lcd1602-i2c',
    name: 'LCD 1602 I2C Displeyi',
    shortDesc: 'Har bir qatorda 16 tadan, jami 2 qatorda 32 ta belgini aks ettiruvchi ko\'k/yashil ekran.',
    category: 'Displeylar',
    voltage: '5V DC',
    current: '20 - 30 mA',
    specs: [
      { label: 'Qatorlar soni', value: '2 qator x 16 belgi' },
      { label: 'Orqa yoritgich', value: 'Ko\'k yoki sariq-yashil LED' },
      { label: 'Interfeys adapteri', value: 'PCF8574 I2C adapter moduli' },
      { label: 'Standart I2C manzili', value: '0x27 yoki 0x3F' },
    ],
    overview:
      'Klassik LCD 1602 ekrani 16 ta sim talab qilsa, uning orqasiga o\'rnatilgan PCF8574 I2C moduli bu sonni atigi 4 taga (VCC, GND, SDA, SCL) tushiradi. Matnli xabarlar, datchik ko\'rsatkichlari uchun qulay.',
    howItWorks:
      '`LiquidCrystal_I2C` kutubxonasi yordamida harflar kursor orqali xohlagan qator va ustunga joylashtiriladi.',
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: 'Yer (Ground)' },
      { pin: '2', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '3', name: 'SDA', type: 'I2C', description: 'I2C Data (Arduino A4)' },
      { pin: '4', name: 'SCL', type: 'I2C', description: 'I2C Clock (Arduino A5)' },
    ],
    wiringDiagram: {
      title: 'LCD 1602 I2C Ulanishi',
      description: 'Uno A4 va A5 pinlariga ulanadi:',
      connections: [
        { from: 'LCD GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'LCD VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'LCD SDA', to: 'Arduino A4', note: 'SDA' },
        { from: 'LCD SCL', to: 'Arduino A5', note: 'SCL' },
      ],
    },
    sampleCode: {
      title: 'LCD 1602 ekranga matn chiqarish',
      description: 'LiquidCrystal_I2C kutubxonasi orqali sinov.',
      code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// 0x27 manzilli 16x2 displey
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight(); // Orqa chiroqni yoqish

  lcd.setCursor(0, 0); // 1-qator, 1-ustun
  lcd.print("ArduinoUz Portal");

  lcd.setCursor(0, 1); // 2-qator
  lcd.print("Hush kelibsiz!");
}

void loop() {
  // Matn ekranda turadi
}`,
      explanation: [
        'lcd.init() - displeyni ishga tushiradi.',
        'lcd.backlight() - yoritish chirog\'ini faollashtiradi.',
        'lcd.setCursor(ustun, qator) - kursor koordinatasi (0 dan boshlanadi).',
      ],
    },
    troubleshooting: [
      {
        issue: 'Ekran yonadi, lekin harflar o\'rniga oq kvadratlar chiqadi',
        cause: 'Kontrast juda yuqori yoki I2C manzili 0x27 emas.',
        solution: 'I2C modul orqasidagi ko\'k potentsiometrni burab kontrastni to\'g\'rilang.',
      },
    ],
  },
];
