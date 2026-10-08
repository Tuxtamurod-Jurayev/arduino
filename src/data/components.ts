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
    imageUrl: 'https://cdn4.telesco.pe/file/ssSDqoCydoXZpFyNHRmwLmIfaLUO0lHxwG221t8BDFw7GZUNRd6aqKWE0aYi6gfn6wcxm934i1roP-hOCfdjvQeKJxnL8ilWmiBCadXRuXLMA4CIV6BZabp5V8qiQFP4SGAjKkmIox6e8RJll20J80BojaIMlgGC0q-yFv4PDEewsK9p4qiu9EHXWcA6HqGCJM8W8uJwUotSwPyvS33cTuJD0Et5Qmyn-foFHHuoS8BLFk_mLqBaXj9UmIs9kkmw8TrRjDV-UORmU0ejUl50reXX_KBFhF-Yu0QgeS4iGMCRYEIA31pF6mEKXpMjioDHK1ESwEKqAnvSSE5sa0-N8Q.jpg',
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
    shortDesc: 'Atrofdagi havoning nisbiy namligini va haroratini raqamli 1-Wire interfeysi orqali o\'lchaydi.',
    category: 'Sensorlar',
    voltage: '3.3V - 5.5V DC',
    current: '0.5 - 2.5 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/pHNTCV0DUQQxSFBbkDkd2iShONiqQFzvZCo7dpITMFqz8HiJL7L4N_JQYY-ceTH521CyayyqsSFT4d4a99HyvuYg8icnPS4ItfQMTgE3tVODXfooLxYUO7soPg_Fe5ifd2zbYKgyQz4dY6MOL-pS7TLggK0rz1S6k9KkNCuTybxNLfcqYqb8NZC9Az0mnU3-RSKIfdTfxoDys_HvF4McUvZ4OccUdV2pppylyv2l4INzdG0oR2QIRQ4qAQ8GSGgaSl-9BWo1Lav6KDrcTgTanUk6hKd01eKf4TAfFUxP27wavztwwGV_jwdyS80mCdC1BippjKgirDFLVsewFYVesQ.jpg',
    specs: [
      { label: 'Namlik o\'lchash oralig\'i', value: '20% - 90% RH (aniqlik ±5%)' },
      { label: 'Harorat o\'lchash oralig\'i', value: '0°C dan +50°C gacha (aniqlik ±2°C)' },
      { label: 'Ishchi kuchlanish', value: '3.3V - 5.5V DC' },
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
      { pin: '3', name: 'NC', type: 'Special', description: 'Ulanmaydi (Not Connected)' },
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

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("DHT11 sensori ishga tushirildi!");
}

void loop() {
  // O'lchovlar orasida kamida 2 soniya kutish shart
  delay(2000);

  float namlik = dht.readHumidity();
  float harorat = dht.readTemperature();

  if (isnan(namlik) || isnan(harorat)) {
    Serial.println("Xatolik: DHT11 dan ma'lumot o'qib bo'lmadi!");
    return;
  }

  Serial.print("Namlik: ");
  Serial.print(namlik);
  Serial.print("% | Harorat: ");
  Serial.print(harorat);
  Serial.println("°C");
}`,
      explanation: [
        'DHT kutubxonasi Arduino IDE ning Library Manager oynasidan o\'rnatiladi.',
        'isnan() tekshiruvi ma\'lumot uzatishda uzilish bo\'lmaganini tasdiqlaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: '"Failed to read from DHT sensor!" xabari chiqmoqda',
        cause: 'DATA pini noto\'g\'ri ulangan yoki 4.7k-10k pull-up rezistor ulanmagan.',
        solution: 'Arduino D2 piniga to\'g\'ri ulanganini va 5V quvvat berilganini tekshiring.',
      },
    ],
  },
  {
    id: '3',
    slug: 'oled-096-i2c',
    name: 'OLED 0.96" I2C Displeyi (128x64)',
    shortDesc: 'I2C shinasi orqali atigi 2 ta simda grafik, shrift va ikonkalarni ravshan ko\'rsatuvchi monoxrom displey.',
    category: 'Displeylar',
    voltage: '3.3V - 5V DC',
    current: '20 mA (o\'rtacha)',
    imageUrl: 'https://cdn4.telesco.pe/file/dVM6n5coDBypmGDHd0uo1em9yvO0YFuXp72s5JntvjINN0c6KiCcCQiEeLfmWhX8wxqQjh0H-B5ee5d9cirXWAC9r7ot0jgzGJheKowWpNE8qwXDrp3QXVwmAAx6M6Tw2VkiCsHFC5rPuvV0PeIa7kfgVC_G-9Pb0egdZUIXJcJ4EcZFd3ryLV9StuJBnllZqgx9mPrmwywB3c7djS11mJQPJVjM4YQeXCR9gtWHcajVsHDsX8hu3FhzyAznvdAQcWGaWdpWUO_0Sq53g-Fzg3nEUXYYt4uKYg_wyWnMlT_bgJqFI9YUcrAaHRjP1luYWjF5C8HSm0BFlaCFkHdnNQ.jpg',
    specs: [
      { label: 'Ruxsati (Resolution)', value: '128 x 64 piksel' },
      { label: 'Drayver chipi', value: 'SSD1306' },
      { label: 'Interfeys', value: 'I2C (Standart manzil 0x3C)' },
      { label: 'Rang turi', value: 'Moviy yoki Oq monoxrom' },
      { label: 'Ko\'rish burchagi', value: '160 darajadan yuqori' },
    ],
    overview:
      'SSD1306 chipi asosidagi 0.96 dyuymli OLED displey o\'zining yorug\'lik chiqaruvchi diodlariga ega bo\'lib, orqa fon chirog\'ini (backlight) talab qilmaydi. Shuning uchun qora rang chuqur va kontrast juda yuqori.',
    howItWorks:
      'Displey I2C shinasi orqali SDA (ma\'lumot) va SCL (takt) liniyalarida ishlaydi. Adafruit_SSD1306 va Adafruit_GFX kutubxonalari orqali xotirada bufer hosil qilinib, `display()` buyrug\'i bilan ekranga uzatiladi.',
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: 'Ground (Manfiy qutb)' },
      { pin: '2', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V musbat quvvat' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C Takt liniyasi (Arduino A5 / SCL)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C Ma\'lumot liniyasi (Arduino A4 / SDA)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan I2C ulanishi',
      description: 'Uno platasidagi A4 va A5 apparatli I2C pinlariga ulang:',
      connections: [
        { from: 'OLED GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'OLED VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'OLED SCL', to: 'Arduino A5', note: 'SCL liniyasi' },
        { from: 'OLED SDA', to: 'Arduino A4', note: 'SDA liniyasi' },
      ],
    },
    sampleCode: {
      title: 'OLED ekranga matn chiqarish kodi',
      description: 'Adafruit SSD1306 kutubxonasi bilan sinov dasturi.',
      code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

void setup() {
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("SSD1306 topilmadi!");
    for(;;);
  }

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(10, 15);
  display.println("ArduinoUz Portal");
  display.setTextSize(2);
  display.setCursor(10, 35);
  display.println("OLED OK!");
  display.display();
}

void loop() {}`,
      explanation: [
        '0x3C — OLED displeyining standart I2C manzili.',
        'display.display() chaqirilmaguncha o\'zgarishlar ekranda ko\'rinmaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Ekran umuman yonmayapti',
        cause: 'I2C manzili 0x3C emas, balki 0x3D bo\'lishi mumkin.',
        solution: 'I2C Scanner sketchini yuklab, aniq manzilni aniqlang.',
      },
    ],
  },
  {
    id: '4',
    slug: 'sg90-servo',
    name: 'SG90 Micro Servomotor (9g)',
    shortDesc: '0 dan 180 gradusgacha burchak ostida aniq buriluvchi ixcham va yengil motor.',
    category: 'Motorlar',
    voltage: '4.8V - 6.0V DC',
    current: '100 mA (harakatda), 500 mA (yuklamada)',
    imageUrl: 'https://cdn4.telesco.pe/file/lP23BvJSKG63nEowhhZD6eftIUp8b2EvqsP7SC_qDiL0NGz8ESZi6G7t7DOktYodjAGe7Kqxme_WVht2XVvEVExyblaUy3elFzkWdcfSenzgHsmdWynBNQmuJYDE9FC0KgtkigjBHf0265gmaBigTSVE6wuvfmB8h8H0v1pEysv7UG0m_jLBsMIz_GM86tMsBF792NWiAJp7EKEZxuZMSQTZNNW7fH2m-p-ENNsahM1rL5B2k00vBZTVXR1pHVV8POoSXHQvzs4KjJjmMqg14IYGXpT3P1MDrDDsf2mY3Li9NE4YNQsGpsqFmHW0dmWgW-l9h5kioZ4keFlg9amsTw.jpg',
    specs: [
      { label: 'Burilish burchagi', value: '180 daraja (0° - 180°)' },
      { label: 'Aylantiruvchi moment (Torque)', value: '1.8 kg/sm (4.8V da)' },
      { label: 'Tezlik', value: '0.1 soniya / 60 daraja' },
      { label: 'Og\'irligi', value: '9 gramm' },
      { label: 'Boshqaruv signali', value: '50 Hz PWM (1-2 ms impuls kengligi)' },
    ],
    overview:
      'SG90 — bu ichida doimiy tok dvigateli, reduktor tishli g\'ildiraklari, potentsiometr va qayta aloqa mikrosxemasiga ega bo\'lgan intellektual motor. Berilgan burchakni o\'zi qat\'iy ushlab turadi.',
    howItWorks:
      'Har 20 millisekundda (50 Hz) bitta impuls yuboriladi. 1 ms impuls 0 darajaga, 1.5 ms impuls 90 darajaga, 2 ms impuls 180 darajaga mos keladi. Arduino `Servo.h` kutubxonasi bu impulslarni avtomatik boshqaradi.',
    pinout: [
      { pin: 'Jigarrang', name: 'GND', type: 'GND', description: 'Manfiy qutb (Ground)' },
      { pin: 'Qizil', name: 'VCC', type: 'VCC', description: 'Musbat quvvat (5V DC)' },
      { pin: 'To\'q sariq', name: 'Signal', type: 'PWM', description: 'PWM boshqaruv signali (Arduino D9)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanish sxemasi',
      description: 'Ko\'p yuklama bo\'lmasa Arduino 5V pinidan quvvatlanadi:',
      connections: [
        { from: 'Servo Jigarrang (GND)', to: 'Arduino GND', note: 'Yer' },
        { from: 'Servo Qizil (VCC)', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'Servo Sariq (Signal)', to: 'Arduino D9', note: 'PWM boshqaruv pini' },
      ],
    },
    sampleCode: {
      title: 'SG90 ni 0 dan 180 ga aylantirish kodi',
      description: 'Servo kutubxonasi bilan harakatlantirish.',
      code: `#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9); // 9-pinga ulaymiz
}

void loop() {
  // 0 dan 180 ga silliq buramiz
  for (int pos = 0; pos <= 180; pos += 1) {
    myServo.write(pos);
    delay(15);
  }
  delay(500);

  // 180 dan 0 ga qaytaramiz
  for (int pos = 180; pos >= 0; pos -= 1) {
    myServo.write(pos);
    delay(15);
  }
  delay(500);
}`,
      explanation: [
        'myServo.attach(9) buyrug\'i 9-pinni servoga bog\'laydi.',
        'myServo.write(gradus) burchakni 0 dan 180 gacha belgilaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Servo qaltirayapti va Arduino qayta yuklanyapti (reset)',
        cause: 'Arduino USB portidan yetarlicha tok kelmayapti (tok yetishmovchiligi).',
        solution: 'Servoga tashqi 5V 1A quvvat manbaini ulang va uning GND sini Arduino GND si bilan birlashtiring.',
      },
    ],
  },
  {
    id: '5',
    slug: 'relay-5v',
    name: '1-Kanalli 5V Rele Moduli',
    shortDesc: 'Past kuchlanishli Arduino signali bilan 220V maishiy elektr jihozlarini xavfsiz boshqarish kaliti.',
    category: 'Modullar',
    voltage: '5V DC',
    current: '70 mA (yoniq paytda)',
    imageUrl: 'https://cdn4.telesco.pe/file/FpEF6OmB_UYs_QVIc-Z0ppWfNmbm5Fbj-dpVM7vPQGqXy-sp9qlt3Fh2zoiRuqX5dgrbyDVKVkOZ4MxrI_-BS1WNW4zESwF6BMFQM82HR7x2xRIB8Q81kA0BVkcqVIk3Rz2C3XnALpNf97Cr7-Patn-1ckuWJy6bJeSuWmsr-XtuGtUzBd580iTmkLZ-x2XDNyLCSWxpRtZx7nphaDs2cxnbwCtGjWDprsm0B6D9QeYOpbVw22J8RaBHbn3GhnRR-M6bG5Uqe1o3vfUPp_5Lt1tQfSdNW0hwiCg9GzpKPhlDeJbtpKeiWwldVK28jwiT34Ra61MVrZ8HEVQDJpGv2Q.jpg',
    specs: [
      { label: 'Maksimal yuklama', value: '250V AC / 10A yoki 30V DC / 10A' },
      { label: 'Boshqaruv signali', value: '5V TTL (Active LOW yoki HIGH)' },
      { label: 'Himoya', value: 'Optopara (Optoizolyatsiya) va teskari diod' },
      { label: 'Kontaktlar', value: 'NO (Normal Open), COM (Umumiy), NC (Normal Close)' },
    ],
    overview:
      'Elektromagnit rele orqali 5V past kuchlanishli signallar bilan 220V lik lampochkalar, suv nasoslari, motorlar va isitkichlarni galavanik jihatdan to\'liq ajratilgan (xavfsiz) holda yoqib-o\'chirish mumkin.',
    howItWorks:
      'Arduino pini orqali modulga signal yuborilganda, tranzistor va optopara ochilib, g\'altakdan tok o\'tadi. Elektromagnit maydon hosil bo\'lib, kontakt mexanik ravishda COM dan NO ga ulanadi.',
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '5V musbat quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'IN', name: 'Signal', type: 'Digital', description: 'Boshqaruv kirishi (Arduino D7)' },
      { pin: 'COM / NO / NC', name: 'Yuqori kuchlanish', type: 'Quvvat', description: '220V yuklama terminallari' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno va 220V chiroq ulanishi',
      description: 'Modulning kirish qismini Arduinoga, chiqishini yuklamaga ulang:',
      connections: [
        { from: 'Rele VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'Rele GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'Rele IN', to: 'Arduino D7', note: 'Signal' },
      ],
    },
    sampleCode: {
      title: 'Releni har 3 soniyada yoqish va o\'chirish',
      description: 'Active LOW rele moduli bilan ishlash kodi.',
      code: `const int relePin = 7;

void setup() {
  pinMode(relePin, OUTPUT);
  digitalWrite(relePin, HIGH); // Rele o'chiq holatda boshlanadi
}

void loop() {
  digitalWrite(relePin, LOW);  // Releni yoqish (Chiqillash ovozi eshitiladi)
  delay(3000);

  digitalWrite(relePin, HIGH); // Releni o'chirish
  delay(3000);
}`,
      explanation: [
        'Aksariyat rele modullari LOW signalida yoqiladi (Active LOW).',
      ],
    },
    troubleshooting: [
      {
        issue: 'Rele yoqilganda Arduino o\'chib-yonmoqda',
        cause: 'G\'altak tok tortayotgan paytda kuchlanish pasayishi (voltage drop).',
        solution: 'Arduino quvvatini kuchliroq qiling yoki releni tashqi 5V manbaga ulang.',
      },
    ],
  },
  {
    id: '6',
    slug: 'mq-2',
    name: 'MQ-2 Tutun va Yonuvchi Gaz Datchigi',
    shortDesc: 'Suyultirilgan gaz (LPG), metan, butan, propan, vodorod va tutun konsentratsiyasini aniqlaydi.',
    category: 'Sensorlar',
    voltage: '5V DC',
    current: '150 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/Z_y0LVTMo4ZcNu5IckgP-9fAnm0q0WpH3MSXDuCb13woNKVkcTykQmKZ8ttBDB2bzZhKCdX1K4R8CVIp45WP5KnMnRLqkSDXnF_8FqkFs3o3y1HS8r2bHrzfuId_ZUKY3q8R8d4kAFGH0tmWdC1zive8X_Q-CGH0r7Vxj6E8z5yfbIJarPhlWw5APeyxjdHckUh4R7-UILbPLKNN5jXsY8eRGJ9Rg_JWlmZEVTQoUhR1G08Cf5NnCdjdxw7zIXBZQVACLdvwl9Z5KSdphNI3xzGYvy0DYW5_b1tLtvkyv-qDuv1vmPnufYws0Y1aTU5OM-zYKLU2z2BlatSG_IHdlw.jpg',
    specs: [
      { label: 'Sezuvchanlik oralig\'i', value: '300 - 10000 ppm (yonuvchi gazlar)' },
      { label: 'Isitish quvvati', value: '~800 mW (ichki spiral qiziydi)' },
      { label: 'Chiqish signallari', value: 'Analog (A0) va Raqamli komparator (D0)' },
      { label: 'Isitish vaqti (Preheat)', value: 'Kamida 20 soniya (aniq o\'lchash uchun 24 soat)' },
    ],
    overview:
      'MQ-2 gaz datchigi ichida qalay oksidi (SnO2) qatlami va isitgich joylashgan. Havoda yonuvchi gazlar yoki tutun paydo bo\'lganda datchikning elektr qarshiligi kamayadi va chiqish kuchlanishi ortadi.',
    howItWorks:
      'Isitgich spiral qiziganda gaz molekulalari bilan kimyoviy reaksiya yuz beradi. Qancha ko\'p gaz bo\'lsa, A0 pinidagi kuchlanish shuncha yuqori bo\'ladi (0V dan 5V gacha). D0 esa o\'rnatilgan potentsiometr chegarasidan oshganda HIGH/LOW chiqaradi.',
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '5V DC quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Yer (Ground)' },
      { pin: 'D0', name: 'Digital Out', type: 'Digital', description: 'Raqamli chegara signali (Komparator)' },
      { pin: 'A0', name: 'Analog Out', type: 'Analog', description: 'Uzluksiz analog kuchlanish (Arduino A0)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanishi',
      description: 'Analog va raqamli pinlarga ulanish:',
      connections: [
        { from: 'MQ-2 VCC', to: 'Arduino 5V', note: '5V' },
        { from: 'MQ-2 GND', to: 'Arduino GND', note: 'GND' },
        { from: 'MQ-2 A0', to: 'Arduino A0', note: 'Analog signal' },
      ],
    },
    sampleCode: {
      title: 'MQ-2 Gaz darajasini o\'lchash kodi',
      description: 'Serial Monitor orqali gaz miqdorini kuzatish.',
      code: `const int mq2Pin = A0;

void setup() {
  Serial.begin(9600);
  Serial.println("MQ-2 Datchigi qizimoqda, 20 soniya kuting...");
  delay(20000); // Isitish vaqti
}

void loop() {
  int sensorQiymat = analogRead(mq2Pin);
  Serial.print("Gaz konsentratsiyasi: ");
  Serial.println(sensorQiymat);

  if (sensorQiymat > 400) {
    Serial.println("DIQQAT: Gaz sizishi yoki Tutun aniqlandi!");
  }
  delay(500);
}`,
      explanation: [
        'Toza havoda sensor odatda 100-250 atrofida son beradi.',
        'Zajigalka gazi yaqinlashtirilsa, qiymat 500-800 gacha ko\'tariladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Sensor juda qizib ketmoqda',
        cause: 'MQ datchiklarining ichida 5V spiral qiziydi — bu normal holat.',
        solution: 'Issiqlik datchikning ishlash talabi hisoblanadi.',
      },
    ],
  },
  {
    id: '7',
    slug: 'pir-hc-sr501',
    name: 'PIR HC-SR501 Harakat Datchigi',
    shortDesc: 'Inson va hayvonlar tanasidan chiquvchi infraqizil (issiqlik) nurlanishi orqali harakatni aniqlaydi.',
    category: 'Sensorlar',
    voltage: '4.5V - 20V DC',
    current: '50 µA (kutish rejimida)',
    imageUrl: 'https://cdn4.telesco.pe/file/EndTagy7O62o1vLAGs5N4_wULd0CVFZj9dDQr3Os9cM1i68GvXUmx75-sn3piFxnHamB7VV63Q87onuxN6cMu0EPXvDP7yc-le_2T3qxY9-rqLYTPxFDfjDtvF-1DUojrBc9QmJvXdzaPt0xewQdbQtMo5kfUI6cS-Bk1SpPGkxWauF7u5NH9i1s63BaptOmtgQS0AO9q9rWlI3Q1-1y0j3b6v7GeVMwOaBNF8KJCyKhhCo2C7nS97C5koosExbk4yDdqpxvS53ilMrBaSlfAcLY-d4PDdWoT35nIDkbyFF9KPt1FR9gp-MhxzUVDSHgkbzSNQRuZorbNpcsY519pw.jpg',
    specs: [
      { label: 'Aniqlash masofasi', value: '3 m - 7 m gacha (sozlanadi)' },
      { label: 'Ko\'rish burchagi', value: '120 daraja konussimon' },
      { label: 'Kechikish vaqti (Delay time)', value: '5 soniyadan 300 soniyagacha sozlanadi' },
      { label: 'Chiqish signali', value: '3.3V TTL HIGH (harakatda) / 0V LOW' },
    ],
    overview:
      'Piroelektr datchik inson tanasi chiqaradigan 9.4 mkm to\'lqin uzunligidagi infraqizil nurlanishni Frenel linzasi orqali ikkita sezgir elementga qaratadi. Harakat sodir bo\'lganda nurlanish farqi hisobiga signal hosil bo\'ladi.',
    howItWorks:
      'Harakat aniqlanganda OUT pini 3.3V (HIGH) ga o\'tadi. Platadagi ikkita potentsiometr orqali masofani (3-7 m) va signal davomiyligini (Time delay) oson sozlash mumkin.',
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V - 12V DC quvvat' },
      { pin: '2', name: 'OUT', type: 'Digital', description: '3.3V TTL signal chiqishi (Arduino D4)' },
      { pin: '3', name: 'GND', type: 'GND', description: 'Ground' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanishi',
      description: 'Datchikning OUT oyoqchasini Arduino raqamli kirish piniga ulang:',
      connections: [
        { from: 'PIR VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'PIR OUT', to: 'Arduino D4', note: 'Raqamli kirish' },
        { from: 'PIR GND', to: 'Arduino GND', note: 'Yer' },
      ],
    },
    sampleCode: {
      title: 'Harakat aniqlanganda signal berish kodi',
      description: 'PIR datchigini o\'qish.',
      code: `const int pirPin = 4;
const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.println("PIR datchigi sozlanmoqda (1 daqiqa kuting)...");
  delay(30000); // Datchik barqarorlashishi uchun
}

void loop() {
  int holat = digitalRead(pirPin);
  if (holat == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("DIQQAT: Harakat aniqlandi!");
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
      explanation: [
        'Harakat bor ekan OUT pini HIGH bo\'ladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Datchik xonada hech kim bo\'lmasa ham tinimsiz yonmoqda',
        cause: 'Konditsioner havo oqimi, quyosh nurlari yoki isitkich radiatorlari infraqizil shovqin beradi.',
        solution: 'Datchikni to\'g\'ridan-to\'g\'ri issiqlik manbalariga qaratmang, sezgirlik potentsiometrini pasaytiring.',
      },
    ],
  },
  {
    id: '8',
    slug: 'lcd1602-i2c',
    name: 'LCD 1602 I2C Simvolli Displey',
    shortDesc: 'Har bir qatorda 16 tadan jami 2 qatorda 32 ta belgi chiqaruvchi klassik matnli suyuq kristal displey.',
    category: 'Displeylar',
    voltage: '5V DC',
    current: '20 mA (orqa yoritish bilan ~50 mA)',
    imageUrl: 'https://cdn4.telesco.pe/file/qELL0ObNVNnxKUGAlcxow5l8-MgcIOpjCdWWFkmUr4A2dNRYpcWPG23aK84GHco_d2JTwq1jvKJv2OSBGI2qvh1biFIPYtvDfQEVQNczhCX2hxpcEU6WdyQPPnjmoIr6My5tvN63g5tQaEgx_k6K84FXKrSUfl_-TCHIlQT-Gj2NquunwKXBfm53x0-pIdAtCNeELxXEX4RqBx6QBPzTLVKUoacrBvHh50oHpFJtQUuMs4Uw4UF7fRs3kJHiW0a1M0LcOI_fdpqHZuyDgp2r6Kjm46UKwVAh2HTB_V9nR-rAK8seD_7gF40ZzNsimlW_rX3Gf5qdwd2OBJsFzfjzAg.jpg',
    specs: [
      { label: 'Format', value: '16 ta belgi x 2 ta qator' },
      { label: 'Interfeys', value: 'I2C PCF8574 adapteri (standart 0x27 yoki 0x3F)' },
      { label: 'Orqa yoritish (Backlight)', value: 'Ko\'k fonda oq harflar yoki Yashil fonda qora harflar' },
      { label: 'Kontrast sozlash', value: 'I2C platadagi ko\'k potentsiometr' },
    ],
    overview:
      'LCD 1602 dastlab 16 ta oyoqchaga ega bo\'lgan, lekin orqasiga o\'rnatilgan I2C adapteri (PCF8574 chipi) tufayli Arduino bilan atigi 4 ta simda (VCC, GND, SDA, SCL) ulanadi.',
    howItWorks:
      'LiquidCrystal_I2C kutubxonasi orqali harflar I2C shinasi orqali yuboriladi. `lcd.setCursor(ustun, qator)` buyrug\'i orqali kerakli joyga matn joylanadi.',
    pinout: [
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Manfiy yer' },
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '5V musbat quvvat' },
      { pin: 'SDA', name: 'SDA', type: 'I2C', description: 'I2C Ma\'lumot (Arduino A4)' },
      { pin: 'SCL', name: 'SCL', type: 'I2C', description: 'I2C Takt (Arduino A5)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan I2C ulanishi',
      description: 'Arduino A4 va A5 pinlariga ulang:',
      connections: [
        { from: 'LCD GND', to: 'Arduino GND', note: 'GND' },
        { from: 'LCD VCC', to: 'Arduino 5V', note: '5V' },
        { from: 'LCD SDA', to: 'Arduino A4', note: 'SDA' },
        { from: 'LCD SCL', to: 'Arduino A5', note: 'SCL' },
      ],
    },
    sampleCode: {
      title: 'LCD 1602 ga matn chiqarish kodi',
      description: 'LiquidCrystal_I2C kutubxonasi kodi.',
      code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Salom, Dunyo!");
  lcd.setCursor(0, 1);
  lcd.print("ArduinoUz 2026");
}

void loop() {}`,
      explanation: [
        '0x27 manzil ishlamasa, 0x3F manzilini sinab ko\'ring.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Displeyda faqat oq to\'rtburchaklar ko\'rinmoqda',
        cause: 'Kontrast sozlanmagan.',
        solution: 'Displey orqasidagi ko\'k potentsiometrni otvyortka bilan burab sozlang.',
      },
    ],
  },
  {
    id: '9',
    slug: 'l298n',
    name: 'L298N Ikkitalik DC / Qadam Motor Drayveri',
    shortDesc: 'Ikkita doimiy tok (DC) motorining aylanish tezligi va yo\'nalishini yoki 1 ta qadam motorini boshqaruvchi quvvatli drayver.',
    category: 'Motorlar',
    voltage: '5V - 35V DC (Motor quvvati)',
    current: 'Har bir kanalga 2A (cho\'qqida 3A)',
    imageUrl: 'https://cdn4.telesco.pe/file/q8ZXnUpKqhT3CVW1crEWAxFkx3l9loQFPZvnXvXxqIFdhEFmOiRLB7kLqsVXuYEcVYo8ErciDyjgEumff8mRckCM8r8qNqSmWfpOAZguWP3B4RZsD7Ix5cB_T-bOO9UJi_hTR81k1ph438akxMdgp7jL3eDO8pFgKyF19fyIogiaCSDy1yZ-o1XnqyPsO92y5yklVX3o0vIbbge2-emisSojgyeYEQNVtJ8tfXFMF_aCOhMJADYIDbNa3FFoRvCPjjaERrhPZrojJePhjJYZE8zIC3ph38n4S6Rb-YEINw7fi9mpPMie8iW62y2gMwofecxT1Xa7CiBntW5yYsQR9g.jpg',
    specs: [
      { label: 'Drayver chipi', value: 'L298N Ikkitalik H-Bridge' },
      { label: 'Mantiqiy kuchlanish (Vss)', value: '5V DC' },
      { label: 'Dvigatel kuchlanishi (Vs)', value: '5V - 35V DC' },
      { label: 'Maksimal quvvat', value: '25W' },
      { label: 'PWM tezlik boshqaruvi', value: 'ENA va ENB jumperlarini yechib beriladi' },
    ],
    overview:
      'L298N moduli robot mashinalarning o\'ng va chap g\'ildirak motorlarini alohida boshqarishda standart hisoblanadi. Undagi H-Bridge sxemasi motorni oldinga, orqaga aylantirish va tez tormozlash imkonini beradi.',
    howItWorks:
      'IN1 va IN2 pinlari 1-motor yo\'nalishini belgilaydi (HIGH/LOW -> oldinga, LOW/HIGH -> orqaga). ENA piniga PWM signali berilsa, motor tezligi 0 dan 255 gacha boshqariladi.',
    pinout: [
      { pin: '12V', name: 'Power In', type: 'Quvvat', description: 'Motorlar uchun tashqi batareya (7-12V)' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Umumiy yer (Arduino GND ga ulanishi shart!)' },
      { pin: '5V', name: '5V Out/In', type: 'VCC', description: 'Ichki stabilizator 5V chiqishi' },
      { pin: 'IN1, IN2', name: 'Motor A Logic', type: 'Digital', description: 'A motor yo\'nalish pinlari' },
      { pin: 'IN3, IN4', name: 'Motor B Logic', type: 'Digital', description: 'B motor yo\'nalish pinlari' },
      { pin: 'ENA, ENB', name: 'PWM Speed', type: 'PWM', description: 'Tezlikni sozlash pinlari' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanish sxemasi',
      description: 'L298N GND si bilan Arduino GND sini birlashtirish shart:',
      connections: [
        { from: 'L298N GND', to: 'Arduino GND', note: 'Umumiy yer' },
        { from: 'L298N IN1', to: 'Arduino D5', note: 'Yo\'nalish 1' },
        { from: 'L298N IN2', to: 'Arduino D6', note: 'Yo\'nalish 2' },
        { from: 'L298N ENA', to: 'Arduino D9', note: 'PWM tezlik' },
      ],
    },
    sampleCode: {
      title: 'DC motorni oldinga va orqaga yurgizish kodi',
      description: 'L298N tezlik va yo\'nalish boshqaruvi.',
      code: `const int in1 = 5;
const int in2 = 6;
const int ena = 9;

void setup() {
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(ena, OUTPUT);
}

void loop() {
  // Oldinga o'rtacha tezlikda
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  analogWrite(ena, 180); // Tezlik: 0-255
  delay(2000);

  // To'xtash
  analogWrite(ena, 0);
  delay(1000);

  // Orqaga to'liq tezlikda
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  analogWrite(ena, 255);
  delay(2000);

  analogWrite(ena, 0);
  delay(1000);
}`,
      explanation: [
        'analogWrite(ena, qiymat) orqali motor tezligi ravon o\'zgartiriladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Motor aylanmayapti, chiyillagan ovoz chiqyapti',
        cause: 'Kuchlanish yetarli emas yoki PWM qiymati juda past (masalan 50 dan kam).',
        solution: 'Batareyani tekshiring va analogWrite qiymatini 150 dan oshiring.',
      },
    ],
  },
  {
    id: '10',
    slug: 'rc522',
    name: 'RFID RC522 Karta va Brelok O\'quvchi Moduli',
    shortDesc: '13.56 MHz chastotali kontaktsiz RFID kartalar va breloklarni o\'quvchi va yozuvchi xavfsizlik moduli.',
    category: 'Modullar',
    voltage: '3.3V DC (Diqqat: 5V bermang!)',
    current: '13 - 26 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/S9Yl6naEDGtWM0sc4wA10dJ7Ue5lwNzn2rHKGqOOlo7I2g1NJ_JB-QXiLvsCrFiPmcQisftN-9Z-ivx-pKWaVTq0eoAdk7XEQXqGobXy81DUqounwkYKAUgbimoNvJMQnV-C6USFxic_sYN1dX8F37jrazdllVUZmeUxmKuZGUuxdwdnDPwKHkQ60Y0YT6LM6A4KjOb2Wa73OmWljmLha-N4q55tAxjf0RgWXfOf3AyA4XC1urvXaqIq3lvL3euNuN8DU3oWpPw7wHA4eWGWiXBHnhhmip1At4jsCyq8acYEdz3GhivHmlETtYMUqHbIexL8RMqJHXICYYsYIKNf7Q.jpg',
    specs: [
      { label: 'Ishchi chastota', value: '13.56 MHz' },
      { label: 'Qo\'llab-quvvatlaydi', value: 'Mifare1 S50, S70, Mifare UltraLight' },
      { label: 'Interfeys', value: 'SPI (MISO, MOSI, SCK, SS)' },
      { label: 'O\'qish masofasi', value: '3 - 5 sm gacha' },
    ],
    overview:
      'Elektron qulflar, turniketlar, to\'lov tizimlari va avtomatik domofonlarda keng ishlatiladigan MFRC522 chipiga asoslangan modul. Har bir kartaning o\'ziga xos noyob UID raqami mavjud.',
    howItWorks:
      'Karta modul antennasiga yaqinlashtirilganda elektromagnit induksiya hisobiga karta chipiga quvvat boradi va u o\'z UID raqamini javoban uzatadi. Arduino SPI shinasi orqali buni o\'qiydi.',
    pinout: [
      { pin: '3.3V', name: '3.3V', type: 'VCC', description: 'Faqat 3.3V (5V ga ulamang!)' },
      { pin: 'RST', name: 'Reset', type: 'Digital', description: 'Reset pini (Arduino D9)' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'MISO', name: 'MISO', type: 'SPI', description: 'Master In Slave Out (Arduino D12)' },
      { pin: 'MOSI', name: 'MOSI', type: 'SPI', description: 'Master Out Slave In (Arduino D11)' },
      { pin: 'SCK', name: 'SCK', type: 'SPI', description: 'SPI Takt (Arduino D13)' },
      { pin: 'SDA (SS)', name: 'SDA', type: 'SPI', description: 'Slave Select (Arduino D10)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan SPI ulanishi',
      description: 'Uno platasidagi SPI apparatli pinlariga ulang:',
      connections: [
        { from: 'RC522 3.3V', to: 'Arduino 3.3V', note: '3.3V MUHIM!' },
        { from: 'RC522 RST', to: 'Arduino D9', note: 'RST' },
        { from: 'RC522 GND', to: 'Arduino GND', note: 'GND' },
        { from: 'RC522 MISO', to: 'Arduino D12', note: 'MISO' },
        { from: 'RC522 MOSI', to: 'Arduino D11', note: 'MOSI' },
        { from: 'RC522 SCK', to: 'Arduino D13', note: 'SCK' },
        { from: 'RC522 SDA', to: 'Arduino D10', note: 'SS' },
      ],
    },
    sampleCode: {
      title: 'RFID karta UID raqamini o\'qish kodi',
      description: 'MFRC522 kutubxonasi yordamida o\'qish.',
      code: `#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  Serial.println("RFID O'quvchi tayyor. Kartani yaqinlashtiring...");
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  Serial.print("Karta UID: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
  }
  Serial.println();

  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}`,
      explanation: [
        'Har bir karta yoki brelokning UID kodi takrorlanmasdir.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Karta o\'qilmayapti, Serial Monitor bo\'sh',
        cause: '3.3V o\'rniga 5V ga ulangan yoki SPI pinlari (11, 12, 13) adashgan.',
        solution: 'Ulanish simlarini tekshiring.',
      },
    ],
  },
  {
    id: '11',
    slug: 'bmp280',
    name: 'BMP280 Bosim, Harorat va Balandlik Datchigi',
    shortDesc: 'Bosch kompaniyasining yuqori aniqlikdagi atmosfera bosimi va barometrik balandlik o\'lchash datchigi.',
    category: 'Sensorlar',
    voltage: '1.8V - 3.6V DC (Modulda 3.3V/5V stabilizator mavjud)',
    current: '2.7 µA',
    imageUrl: 'https://cdn4.telesco.pe/file/le_DTpRynOBorh5JBXtcx9Jsy5_AQGMG5t0jPU3LJb_wJ62Mq_WFDCWaUy1OOvTnKfGivwEjGkJHwko-shYvL3_HF3vOkGY1yJAJEHDCEWukBBqI-dBlckgpUxbvMSJmJUSkDcUQVWTYyGZVVrxMU721Wd6kDKD-SugmyPG0aSfTl2kAAf_ma44_rmLKr9v6rB5nh0SGetftiJ2n4xJVABzquWjmE3uwKS6pFvtbPKKmS1a7nJlQb6weTSuqh4i84YUbiOtPCqhWNhD_7d_1fdcscyQfToWSObte29AexzS16XxZKvMSS3RMgu6M2BTstXMQoO_8KameUyXp-lrRIA.jpg',
    specs: [
      { label: 'Bosim oralig\'i', value: '300 - 1100 hPa (aniqlik ±0.12 hPa)' },
      { label: 'Harorat oralig\'i', value: '-40°C dan +85°C gacha' },
      { label: 'Balandlik aniqligi', value: '±1 metr' },
      { label: 'Interfeys', value: 'I2C (0x76 yoki 0x77) va SPI' },
    ],
    overview:
      'BMP280 kvadrokopterlar, havo sharlari, ob-havo stansiyalari va avtopilot tizimlarida dengiz sathidan balandlikni santimetrgacha aniqlashda eng mashhur datchik hisoblanadi.',
    howItWorks:
      'Atmosfera bosimi balandlik oshgani sari qonuniyatli kamayadi. Datchik bosimni o\'lchab, barometrik formula bo\'yicha dengiz sathidan balandlikni hisoblab beradi.',
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'SCL', name: 'SCL', type: 'I2C', description: 'I2C Takt (Arduino A5)' },
      { pin: 'SDA', name: 'SDA', type: 'I2C', description: 'I2C Ma\'lumot (Arduino A4)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan I2C ulanishi',
      description: 'A4 va A5 pinlariga ulanadi:',
      connections: [
        { from: 'BMP280 VCC', to: 'Arduino 3.3V yoki 5V', note: 'Quvvat' },
        { from: 'BMP280 GND', to: 'Arduino GND', note: 'GND' },
        { from: 'BMP280 SCL', to: 'Arduino A5', note: 'SCL' },
        { from: 'BMP280 SDA', to: 'Arduino A4', note: 'SDA' },
      ],
    },
    sampleCode: {
      title: 'Atmosfera bosimi va balandlikni o\'qish',
      description: 'Adafruit_BMP280 kutubxonasi.',
      code: `#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(9600);
  // Odatda I2C manzili 0x76 bo'ladi
  if (!bmp.begin(0x76)) {
    Serial.println("BMP280 topilmadi!");
    while (1);
  }
}

void loop() {
  Serial.print("Harorat: ");
  Serial.print(bmp.readTemperature());
  Serial.print(" °C | Bosim: ");
  Serial.print(bmp.readPressure() / 100.0F);
  Serial.print(" hPa | Balandlik: ");
  Serial.print(bmp.readAltitude(1013.25));
  Serial.println(" m");
  delay(1000);
}`,
      explanation: [
        '1013.25 hPa — dengiz sathidagi standart atmosfera bosimi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Sensor aniqlanmadi (topilmadi)',
        cause: 'Manzil 0x76 o\'rniga 0x77 bo\'lishi mumkin.',
        solution: 'bmp.begin(0x77) qilib sinab ko\'ring.',
      },
    ],
  },
  {
    id: '12',
    slug: 'hc-05',
    name: 'HC-05 Bluetooth Serial Moduli',
    shortDesc: 'Arduino va smartfon (Android/iOS) o\'rtasida simsiz ketma-ket (UART) ma\'lumot almashuvchi modul.',
    category: 'Simsiz aloqa',
    voltage: '3.6V - 6V DC (Plata orqali), Mantiqiy 3.3V',
    current: '30 - 40 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/IGWbLRbfDTNsP5aK-R1SBBfC7uf7JnpNuWea7Sg6vvw5kha3hSAula0yBrb4sawdcpeHRQxOFVDnV_hHSGrDAhOe3UQKA4B-2J9v06MwAsCnd6KcmHr28jWHaowlmh4b61nhGhMsxW92WyXm3oR8ktBNw6li2IJgTlsqBzk8bLxyL1u7K-S5_We5iq4FmZ9ZwhLX4phQBc92BCx79S1werTMBR7sfFrPr3xXORILmT7GM9OgHiJ8d4LridS0fOpieBDIHdb4l_E1O4-Mn3de-3cQOg6b6MAuXQnsPB2pY51_lLhpiD6kNOpnnY0XZeIQvRK7E-VLVaal-jdW-Tjffg.jpg',
    specs: [
      { label: 'Bluetooth standarti', value: 'Bluetooth v2.0 + EDR' },
      { label: 'Ishchi masofa', value: '10 metrgacha ochiq havoda' },
      { label: 'Rejimlar', value: 'Master (Boshqaruvchi) va Slave (Boshqariluvchi)' },
      { label: 'Standart ulanish kodi', value: '1234 yoki 0000' },
      { label: 'Standart tezlik', value: '9600 bod (AT rejimda 38400)' },
    ],
    overview:
      'Smartfon orqali robot mashinani boshqarish, xona chiroqlarini yoqish va sensor ma\'lumotlarini telefonga uzatish uchun eng qulay simsiz modul.',
    howItWorks:
      'Modul telefonga Bluetooth orqali ulanadi va kelgan baytlarni oddiy UART Serial (RX/TX) orqali Arduinoga uzatadi.',
    pinout: [
      { pin: 'STATE', name: 'State', type: 'Special', description: 'Ulanish holati ko\'rsatkichi' },
      { pin: 'RXD', name: 'RX', type: 'UART', description: 'Qabul qilish (Arduino TX piniga)' },
      { pin: 'TXD', name: 'TX', type: 'UART', description: 'Uzatish (Arduino RX piniga)' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: 'EN', name: 'Enable', type: 'Special', description: 'AT buyruqlar rejimi (3.3V)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno SoftwareSerial ulanishi',
      description: 'D2 va D3 pinlariga virtual serial orqali ulanadi:',
      connections: [
        { from: 'HC-05 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'HC-05 GND', to: 'Arduino GND', note: 'GND' },
        { from: 'HC-05 TXD', to: 'Arduino D2 (RX)', note: 'Ma\'lumot o\'qish' },
        { from: 'HC-05 RXD', to: 'Arduino D3 (TX)', note: 'Rezistor bo\'lgich tavsiya etiladi' },
      ],
    },
    sampleCode: {
      title: 'Telefondan chiroqni boshqarish kodi',
      description: 'Bluetooth Serial nazorat kodi.',
      code: `#include <SoftwareSerial.h>

SoftwareSerial BT(2, 3); // RX=2, TX=3
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  BT.begin(9600);
}

void loop() {
  if (BT.available()) {
    char buyruq = BT.read();
    if (buyruq == '1') {
      digitalWrite(ledPin, HIGH);
      BT.println("LED Yoqildi");
    } else if (buyruq == '0') {
      digitalWrite(ledPin, LOW);
      BT.println("LED O'chirildi");
    }
  }
}`,
      explanation: [
        'Android da "Serial Bluetooth Terminal" ilovasi orqali 1 yoki 0 yuboriladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Telefon modulni ko\'rmayapti',
        cause: 'Modul qizil chirog\'i tez-tez miltillayotgan bo\'lishi kerak (ulanish kutilmoqda).',
        solution: 'Parol: 1234 yoki 0000 ni kiriting.',
      },
    ],
  },
  {
    id: '13',
    slug: 'soil-moisture',
    name: 'Tuproq Namligi Datchigi Moduli',
    shortDesc: 'O\'simlik tuprog\'ining namlik darajasini o\'lchab, avtomatik sug\'orish tizimlarini boshqarish datchigi.',
    category: 'Sensorlar',
    voltage: '3.3V - 5V DC',
    current: '35 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/pHNTCV0DUQQxSFBbkDkd2iShONiqQFzvZCo7dpITMFqz8HiJL7L4N_JQYY-ceTH521CyayyqsSFT4d4a99HyvuYg8icnPS4ItfQMTgE3tVODXfooLxYUO7soPg_Fe5ifd2zbYKgyQz4dY6MOL-pS7TLggK0rz1S6k9KkNCuTybxNLfcqYqb8NZC9Az0mnU3-RSKIfdTfxoDys_HvF4McUvZ4OccUdV2pppylyv2l4INzdG0oR2QIRQ4qAQ8GSGgaSl-9BWo1Lav6KDrcTgTanUk6hKd01eKf4TAfFUxP27wavztwwGV_jwdyS80mCdC1BippjKgirDFLVsewFYVesQ.jpg',
    specs: [
      { label: 'Ishchi kuchlanish', value: '3.3V - 5V DC' },
      { label: 'Chiqish turi', value: 'Analog (A0) va Raqamli (D0 komparator)' },
      { label: 'Elektrod qoplamasi', value: 'Korroziyaga qarshi nikel qoplamasi' },
    ],
    overview:
      'Aqlli issiqxona va xona gullarini avtomatlashtirilgan sug\'orish loyihalarida tuproqning qurib qolganini aniqlovchi qulay datchik.',
    howItWorks:
      'Tuproq qanchalik nam bo\'lsa, uning elektr o\'tkazuvchanligi shunchalik yuqori (qarshiligi past) bo\'ladi. Natijada A0 pindagi signal o\'zgaradi.',
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '3.3V - 5V quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'A0', name: 'Analog Out', type: 'Analog', description: 'Uzluksiz namlik darajasi (Arduino A1)' },
      { pin: 'D0', name: 'Digital Out', type: 'Digital', description: 'Quruqlik chegarasi' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan ulanishi',
      description: 'Analog A1 piniga ulanadi:',
      connections: [
        { from: 'Sensor VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'Sensor GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'Sensor A0', to: 'Arduino A1', note: 'Analog kirish' },
      ],
    },
    sampleCode: {
      title: 'Tuproq namligini o\'lchash kodi',
      description: 'Quruqlik darajasini aniqlash.',
      code: `const int tuproqPin = A1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int qiymat = analogRead(tuproqPin);
  Serial.print("Tuproq sensori: ");
  Serial.println(qiymat);

  if (qiymat > 600) {
    Serial.println("Tuproq quruq! Sug'orish lozim.");
  } else {
    Serial.println("Tuproq yetarlicha nam.");
  }
  delay(1000);
}`,
      explanation: [
        'Quruq havoda qiymat ~1023, suv ichida ~250 bo\'ladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Elektrodlar bir necha haftada zanglab ketmoqda',
        cause: 'Doimiy tok elektroliz yuzaga keltiradi.',
        solution: 'Datchik VCC sini doimiy 5V ga emas, balki Arduino raqamli piniga ulab, faqat o\'lchash paytida tok bering.',
      },
    ],
  },
  {
    id: '14',
    slug: 'piezo-buzzer',
    name: 'Pyezo Buzzer (Tovush Signalizatori)',
    shortDesc: 'Elektr signallarini eshitiladigan tovush va ohanglarga aylantiruvchi ixcham dinamik.',
    category: 'Modullar',
    voltage: '3.3V - 5V DC',
    current: '20 - 30 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/Z-1vl12-9h1JAknsSqf4GthDgcMYfgU3NT_C16ogsj-IVp7iVYs89XWkHgIQ3MxH_6FNQd8p0w3pu2mPMAvjOxlozLLNJUF9z8K5cyK439AYW14gPECiAzO7zBOJpixlL-tRbO6zb3Pgw4UUjukSOEItJ21m9cWWp7NiLP9cigjrqnc9Z777BmUa44cirZyP0ZUowFsxdZJt12AAAoXpETjcRASw73Zh_5Yb0yU338yhM-yjMBQevTnwfSoD4MbZG6yK0wLimcpH08wMDcIQxastc8eHdOJri9N1xG4-LyhWLEu5pB5fZE2wTPWoAy61DY8gy6hDxP0-YA9MZtmFRA.jpg',
    specs: [
      { label: 'Turi', value: 'Passiv (Passive piezo buzzer)' },
      { label: 'Chastota diapazoni', value: '100 Hz - 10 kHz' },
      { label: 'Tovush balandligi', value: '85 dB (10 sm masofada)' },
    ],
    overview:
      'Signalizatsiyalar, tugma bosilishidagi bildirishnomalar, masofa yaqinlashgandagi signallar va hatto oddiy musiqalarni ijro etish uchun zarur qism.',
    howItWorks:
      'Pyezoelektrik kristall o\'zgaruvchan kuchlanish ostida tebranadi va havoda tovush to\'lqinlarini yaratadi. Arduino `tone(pin, chastota)` funksiyasi orqali boshqariladi.',
    pinout: [
      { pin: '+ (Musbat)', name: 'Plus', type: 'PWM', description: 'Arduino signal pini (D8)' },
      { pin: '- (Manfiy)', name: 'Minus', type: 'GND', description: 'GND ga ulanadi' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno ulanishi',
      description: 'D8 va GND piniga ulanadi:',
      connections: [
        { from: 'Buzzer (+)', to: 'Arduino D8', note: 'Signal' },
        { from: 'Buzzer (-)', to: 'Arduino GND', note: 'GND' },
      ],
    },
    sampleCode: {
      title: 'Signal chalish kodi',
      description: 'tone() funksiyasi bilan sinov.',
      code: `const int buzzerPin = 8;

void setup() {}

void loop() {
  tone(buzzerPin, 1000); // 1000 Hz signal
  delay(200);
  noTone(buzzerPin);
  delay(200);
}`,
      explanation: [
        'noTone(8) signalni o\'chiradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Ovoz juda past chiqyapti',
        cause: 'Rezistor orqali ulangan yoki polarite teskari.',
        solution: 'Musbat oyoqni to\'g\'ridan-to\'g\'ri pinga ulang.',
      },
    ],
  },
  {
    id: '15',
    slug: 'potentiometer-10k',
    name: 'B10K 10k Om Aylanma Potensiometr',
    shortDesc: 'Aylantirish orqali qarshilikni 0 dan 10 kOm gacha silliq o\'zgartiruvchi analog boshqaruv vositasi.',
    category: 'Sensorlar',
    voltage: '0V - 5V DC',
    current: '< 1 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/P5Ij-IhlLk_7iFlKewjL8rea4YH3LR_k_8l49lKacHVO6fpuAMH7xCr7wUdanyveitlyAmbBZWWZjWMDBJyzv1DHGdrYZvsme0x_6oU0pAN9uSxp3vj8Gq2x3UocuLWcmhD6GR8_zgfGTE5rwuGNoOZRDwhY0UYSfS5dJceoe2Xisw4LsYZWV2urLt1PXOPKDb9iNOlFN_2BsBl6QrymDRzY5as2pRN0MB5NJ2z_i86C7yoSBi2Q72FQv6rq4AwchA37kxTXp2YXOGgPBtrlz7l6prX4cbkMrOGUx-t11am6MfYcw4SiRdaf4wFflnzeo2bM5LdyfKkFDaOrAPDUfw.jpg',
    specs: [
      { label: 'Qarshilik qiymati', value: '10 kOm (B10K chiziqli)' },
      { label: 'Aylanish burchagi', value: '300 daraja' },
      { label: 'Turi', value: 'O\'zgaruvchan rezistor (Chiziqli / Linear)' },
    ],
    overview:
      'LED yorug\'ligini, motor tezligini, tovush balandligini yoki servomotor burchagini qo\'lda silliq sozlash uchun eng muhim vosita.',
    howItWorks:
      'Ikki chetki oyoqqa 5V va GND beriladi. O\'rtadagi oyoqcha (slayder) aylanayotganda 0V dan 5V gacha uzluksiz kuchlanish chiqaradi va Arduino ADC buni 0-1023 soniga aylantiradi.',
    pinout: [
      { pin: '1 (Chap)', name: 'VCC', type: 'VCC', description: '5V ga ulanadi' },
      { pin: '2 (O\'rta)', name: 'Signal (Wiper)', type: 'Analog', description: 'Chiquvchi kuchlanish (Arduino A0)' },
      { pin: '3 (O\'ng)', name: 'GND', type: 'GND', description: 'GND ga ulanadi' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno ulanishi',
      description: 'O\'rta oyoq A0 ga ulanadi:',
      connections: [
        { from: 'Pot 1-oyoq', to: 'Arduino 5V', note: '5V' },
        { from: 'Pot 2-oyoq', to: 'Arduino A0', note: 'Signal' },
        { from: 'Pot 3-oyoq', to: 'Arduino GND', note: 'GND' },
      ],
    },
    sampleCode: {
      title: 'Potensiometr bilan LED yorug\'ligini boshqarish',
      description: 'analogRead va map funksiyasi.',
      code: `const int potPin = A0;
const int ledPin = 9; // PWM pin

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int pot = analogRead(potPin); // 0 - 1023
  int yoruglik = map(pot, 0, 1023, 0, 255); // PWM ga o'tkazish
  analogWrite(ledPin, yoruglik);
}`,
      explanation: [
        'map() yordamida 1023 soni 255 ga mutanosib qisqartiriladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Potensiometr burilganda teskari ishlayapti',
        cause: 'Chetki oyoqchalar (5V va GND) o\'rni almashgan.',
        solution: '1 va 3-oyoqchalarni almashtiring.',
      },
    ],
  },
  {
    id: '16',
    slug: 'ldr-photoresistor',
    name: 'Fotorezistor (LDR) Yorug\'lik Datchigi Moduli',
    shortDesc: 'Atrof-muhit yorug\'lik darajasiga qarab elektr qarshiligini o\'zgartiruvchi optoelektronik sensor.',
    category: 'Sensorlar',
    voltage: '3.3V - 5V DC',
    current: '1 - 2 mA',
    imageUrl: 'https://cdn4.telesco.pe/file/U4s6USUeZPLchgPPA3gRKaMTF5i0zfBct95FNdjo7HRotm6n0VqjhYJBhGH6nGUXQ_Rx_fHDJnoT2xZmNhA57B7wXag0wAsyyicfYd_-AK2Pm0j6wiV5XjG-U31DkdnZRGow7ppEfEaKIxlhZ4KLzmu_a45V1tSXVWW8DdRO83pw_9xwyf1pdpXqnUpwQogYwTsxu0v7nlH33BbkFxxLl3jIOqtr2IvXbAosx8mcfS-nq4yHOb7FIdvCjTgUrU7Nr-YgXquzQ1HFimHvcQyb0mCk-gzL2zgMNFHZXXXJmrQAISl_IhzCyvb89j59VTkzGt4OKtQQsZtBIfKlitYg0w.jpg',
    specs: [
      { label: 'Qorong\'idagi qarshilik', value: '1 MOm dan yuqori' },
      { label: 'Yorug\'dagi qarshilik', value: '10 - 20 kOm' },
      { label: 'Chiqish turi', value: 'Analog kuchlanish bo\'lgich orqali' },
    ],
    overview:
      'Kech tushganda avtomatik yonuvchi ko\'cha chiroqlari, quyosh ortidan buriluvchi quyosh panellari (solar tracker) loyihalarida ishlatiladi.',
    howItWorks:
      'Yorug\'lik fotonlari yarimo\'tkazgich qatlamiga tushganda erkin elektronlar hosil bo\'ladi va qarshilik keskin pasayadi.',
    pinout: [
      { pin: 'VCC', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: 'GND', name: 'GND', type: 'GND', description: 'Ground' },
      { pin: 'A0', name: 'Signal Out', type: 'Analog', description: 'Yorug\'lik signali (Arduino A0)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno ulanishi',
      description: 'A0 piniga ulanadi:',
      connections: [
        { from: 'LDR VCC', to: 'Arduino 5V', note: '5V' },
        { from: 'LDR GND', to: 'Arduino GND', note: 'GND' },
        { from: 'LDR A0', to: 'Arduino A0', note: 'Signal' },
      ],
    },
    sampleCode: {
      title: 'Qorong\'i tushganda chiroqni yoqish kodi',
      description: 'Avtomatik tungi chiroq.',
      code: `const int ldrPin = A0;
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int yoruglik = analogRead(ldrPin);
  Serial.println(yoruglik);

  if (yoruglik < 300) { // Qorong'i bo'lsa
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(200);
}`,
      explanation: [
        '300 qiymati xonaning yorug\'ligiga qarab o\'zgartirilishi mumkin.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Yorug\'lik o\'zgarsa ham qiymat deyarli o\'zgarmayapti',
        cause: 'Oddiy fotorezistorda 10k tortuvchi rezistor qo\'yilmagan.',
        solution: 'Fotorezistor bilan GND orasiga 10k Om rezistor qo\'ying (Voltage divider).',
      },
    ],
  },
];
