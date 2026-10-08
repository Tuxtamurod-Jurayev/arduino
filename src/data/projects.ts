import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'ultrasonic-distance-meter',
    title: 'Ultrasonik Masofa O\'lchagich va LCD 1602 Displey',
    summary:
      'HC-SR04 datchigi yordamida buyumgacha bo\'lgan masofani santimetrda o\'lchab, natijani real vaqtda LCD 1602 I2C ekraniga chiqaruvchi va yaqinlashganda ogohlantiruvchi qulay qurilma.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '30 daqiqa',
    category: 'O\'lchov asboblari',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'HC-SR04 Ultrasonik Datchik', quantity: '1 dona', componentSlug: 'hc-sr04' },
      { name: 'LCD 1602 I2C Displeyi', quantity: '1 dona', componentSlug: 'lcd1602-i2c' },
      { name: 'Buzzer (Pyezo signalizator)', quantity: '1 dona' },
      { name: 'Breadboard (Maket platasi)', quantity: '1 dona' },
      { name: 'Ulovchi Jumper simlar (Erkak-Ayol, Erkak-Erkak)', quantity: '8-10 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/321525495084941906',
    steps: [
      {
        stepNumber: 1,
        title: 'Sxemani Breadboardda yig\'ish',
        content:
          'Dastlab barcha qismlarni quvvatdan uzilgan holatda ulang:\n1. LCD 1602 ning VCC sini Arduino 5V ga, GND sini GND ga, SDA ni A4 ga, SCL ni A5 ga ulang.\n2. HC-SR04 ning VCC sini 5V ga, GND sini GND ga, Trig pinini D9 ga, Echo pinini D10 ga ulang.\n3. Pyezo buzzerning musbat (+) oyog\'ini D8 ga, manfiy oyog\'ini GND ga ulang.',
        schematicNote:
          'Maslahat: LCD 1602 orqasidagi I2C modulining ko\'k potentsiometrini burab, harflar ravshan ko\'ringuncha kontrastni sozlang.',
      },
      {
        stepNumber: 2,
        title: 'Kerakli kutubxonalarni o\'rnatish',
        content:
          'Arduino IDE dasturini oching:\n1. Menyudan: Sketch -> Include Library -> Manage Libraries... bo\'limiga o\'ting.\n2. Qidiruv qatoriga "LiquidCrystal I2C" deb yozing (muallifi Frank de Brabander).\n3. "Install" tugmasini bosing va o\'rnatilishini kuting.',
      },
      {
        stepNumber: 3,
        title: 'Dastur kodini yuklash',
        content:
          'Quyidagi to\'liq C++ kodini nusxalab, Arduino IDE ga joylang va plataga yuklang:',
        codeSnippet: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

const int trigPin = 9;
const int echoPin = 10;
const int buzzerPin = 8;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Masofa O'lchagich");
  delay(1000);
  lcd.clear();
}

void loop() {
  // Impuls yuborish
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Qaytgan vaqtni o'lchash
  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.0343 / 2.0;

  // LCD ga chiqarish
  lcd.setCursor(0, 0);
  lcd.print("Masofa: ");
  lcd.print(distance, 1);
  lcd.print(" cm  ");

  // Yaqinlashganda ogohlantirish (15 sm dan kam bo'lsa)
  if (distance > 0 && distance < 15.0) {
    digitalWrite(buzzerPin, HIGH);
    lcd.setCursor(0, 1);
    lcd.print("XAVF: Yaqin!   ");
  } else {
    digitalWrite(buzzerPin, LOW);
    lcd.setCursor(0, 1);
    lcd.print("Holat: Xavfsiz ");
  }

  delay(200);
}`,
      },
      {
        stepNumber: 4,
        title: 'Sinov va nosozliklarni bartaraf etish',
        content:
          'Qo\'lingizni datchik oldiga yaqinlashtiring. LCD ekranda masofa kamayishi, 15 sm dan yaqin kelganda esa buzzer ovoz berishi kerak.',
        tips: [
          'Agar ekranda hech narsa chiqmasa, I2C manzilini 0x3F ga almashtirib ko\'ring.',
          'Datchik oldida burchak ostidagi silliq yuzalar ultratovushni chetga qaytarib yuborishi mumkin.',
        ],
      },
    ],
    troubleshooting: [
      {
        problem: 'LCD ekranda faqat oq kvadratlar yonib turibdi',
        solution: 'I2C modul orqasidagi kichik buragichni (potentsiometr) burab kontrastni sozlang.',
      },
      {
        problem: 'Masofa doim 0 sm ko\'rsatmoqda',
        solution: 'Trig (9) va Echo (10) simlari adashmaganini tekshiring.',
      },
    ],
  },
  {
    id: 'proj-2',
    slug: 'smart-weather-station',
    title: 'Ixcham Ob-havo Stansiyasi (DHT11 + OLED Displey)',
    summary:
      'Xona harorati va nisbiy havoning namligini o\'lchab, zamonaviy grafik interfeysda 0.96 dyuymli OLED displeyda aks ettiruvchi qulay mini-stansiya.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '40 daqiqa',
    category: 'Aqlli uy & IoT',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'DHT11 Harorat va Namlik datchigi', quantity: '1 dona', componentSlug: 'dht11' },
      { name: 'OLED 0.96" I2C Displeyi', quantity: '1 dona', componentSlug: 'oled-096-i2c' },
      { name: 'Maket platasi va simlar', quantity: '1 to\'plam' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569424754704962',
    steps: [
      {
        stepNumber: 1,
        title: 'OLED va DHT11 datchigini ulash',
        content:
          '1. OLED SDA -> Arduino A4, SCL -> Arduino A5, VCC -> 5V, GND -> GND.\n2. DHT11 Signal pini -> Arduino D2, VCC -> 5V, GND -> GND.',
      },
      {
        stepNumber: 2,
        title: 'Kutubxonalarni o\'rnatish',
        content:
          'Library Manager orqali quyidagilarni o\'rnating:\n- Adafruit SSD1306\n- Adafruit GFX Library\n- DHT sensor library (by Adafruit)',
      },
      {
        stepNumber: 3,
        title: 'Dastur kodini yuklash',
        content: 'Chiroyli shrift va grafik chiziqlar bilan ko\'rsatuvchi kod:',
        codeSnippet: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <DHT.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  dht.begin();
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    for(;;);
  }
  display.clearDisplay();
}

void loop() {
  delay(2000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  display.clearDisplay();

  // Sarlavha ramkasi
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(15, 2);
  display.print("OB-HAVO STANSIYASI");
  display.drawLine(0, 12, 128, 12, SSD1306_WHITE);

  // Harorat ko'rsatkichi
  display.setCursor(4, 20);
  display.print("Harorat:");
  display.setTextSize(2);
  display.setCursor(4, 32);
  display.print(t, 1);
  display.print(" C");

  // Namlik ko'rsatkichi
  display.setTextSize(1);
  display.setCursor(70, 20);
  display.print("Namlik:");
  display.setTextSize(2);
  display.setCursor(70, 32);
  display.print((int)h);
  display.print(" %");

  display.display();
}`,
      },
      {
        stepNumber: 4,
        title: 'Ishga tushirish',
        content:
          'Kodni yuklagandan so\'ng, ekranda joriy xona harorati va namligi aks etadi. Datchikka yengil puflasangiz namlik oshishini ko\'rishingiz mumkin.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Ekranda "nan" yoki 0 chiqmoqda',
        solution: 'DHT11 signali 2-pinga to\'g\'ri ulanganini va kutubxona turini tekshiring.',
      },
    ],
  },
  {
    id: 'proj-3',
    slug: 'auto-plant-watering',
    title: 'Avtomatik O\'simlik Sug\'orish Tizimi',
    summary:
      'Gultuvak tuprog\'ining namlik darajasini o\'lchab, tuproq qurib qolganda 5V rele orqali mini suv nasosini avtomatik ishga tushiruvchi aqlli tizim.',
    difficulty: 'O\'rta',
    estimatedTime: '1 soat',
    category: 'Avtomatika & Qishloq xo\'jaligi',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'Tuproq namligi sensori (Capacitive yoki Resistive)', quantity: '1 dona' },
      { name: '1-kanalli 5V Rele moduli', quantity: '1 dona', componentSlug: 'relay-5v' },
      { name: '5V mini suv nasosi va shlang', quantity: '1 dona' },
      { name: 'Tashqi quvvat manbai (Nasos uchun)', quantity: '1 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569424754704962',
    steps: [
      {
        stepNumber: 1,
        title: 'Mexanik va elektr ulanishlar',
        content:
          '1. Tuproq sensori Analog signalini Arduino A0 piniga ulang.\n2. Rele IN pinini Arduino D7 piniga ulang.\n3. Suv nasosini Rele NO va COM kontaktlari orqali tashqi quvvatga ulang.',
        schematicNote:
          'Diqqat: Suv nasosi tok zarbalari va shovqin berishi mumkin, shuning uchun nasos quvvatini to\'g\'ridan-to\'g\'ri Arduino 5V pinidan olmang!',
      },
      {
        stepNumber: 2,
        title: 'Dastur mantig\'i va chegaraviy qiymat',
        content:
          'Tuproq qurigan sari analog qiymat oshadi yoki pasayadi (sensor turiga qarab). Quruq tuproq chegarasini aniqlash kodi:',
        codeSnippet: `const int sensorPin = A0;
const int relayPin = 7;

// Quruq tuproq chegarasi (tajriba orqali aniqlanadi)
const int QURUQ_CHEGARA = 600;

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Dastlab nasos o'chiq
}

void loop() {
  int namlikQiymat = analogRead(sensorPin);
  Serial.print("Tuproq namligi kodi: ");
  Serial.println(namlikQiymat);

  if (namlikQiymat > QURUQ_CHEGARA) {
    Serial.println("Tuproq quruq! Suv quyilmoqda...");
    digitalWrite(relayPin, LOW); // Rele yoqiladi (Nasos ishlaydi)
    delay(3000);                 // 3 soniya suv quyish
    digitalWrite(relayPin, HIGH);// Nasos to'xtaydi
    delay(10000);                // Suv shimilib ketguncha kutish
  } else {
    Serial.println("Tuproq namligi yetarli.");
    digitalWrite(relayPin, HIGH);
  }

  delay(2000);
}`,
      },
      {
        stepNumber: 3,
        title: 'Kalibrlash va sinov',
        content:
          'Sensorni quruq tuproqqa tiqing va Serial monitordagi qiymatni yozib oling. Keyin tuproqni namlab yana tekshiring va dasturdagi QURUQ_CHEGARA sonini shunga moslang.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Nasos yoqilganda Arduino qayta ishga tushib ketyapti (Restart)',
        solution: 'Nasos uchun alohida batareya yoki adapter bering, faqat GND larni umumlashtiring.',
      },
    ],
  },
  {
    id: 'proj-4',
    slug: 'gas-leak-alarm',
    title: 'Oshxona Gaz Sizib Chiqishini Aniqlash Signalizatsiyasi',
    summary:
      'MQ-2 gazi datchigi metan yoki tutunni sezishi bilan qizil chiroqni miltillatib, kuchli pyezo buzzer tovushi bilan xavfdan ogohlantiradi.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '25 daqiqa',
    category: 'Xavfsizlik tizimlari',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'MQ-2 Gaz va Tutun datchigi', quantity: '1 dona', componentSlug: 'mq-2' },
      { name: 'Faol Buzzer (Active Buzzer)', quantity: '1 dona' },
      { name: 'Qizil va Yashil LED', quantity: 'Har biridan 1 dona' },
      { name: '220 Om rezistorlar', quantity: '2 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569424754704962',
    steps: [
      {
        stepNumber: 1,
        title: 'Sxemani montaj qilish',
        content:
          '1. MQ-2 AO -> Arduino A0, VCC -> 5V, GND -> GND.\n2. Yashil LED -> D11 (xavfsiz holat uchun).\n3. Qizil LED -> D12 (xavf holati uchun).\n4. Buzzer (+) -> D8, (-) -> GND.',
      },
      {
        stepNumber: 2,
        title: 'Dastur kodi',
        content:
          'Gaz darajasini kuzatish va chegaradan oshganda signal berish kodi:',
        codeSnippet: `const int mqPin = A0;
const int buzzerPin = 8;
const int yashilLed = 11;
const int qizilLed = 12;

const int GAZ_XAVFI = 350; // Chegara qiymati

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
  pinMode(yashilLed, OUTPUT);
  pinMode(qizilLed, OUTPUT);
}

void loop() {
  int gazQiymat = analogRead(mqPin);
  Serial.print("Gaz konsentratsiyasi: ");
  Serial.println(gazQiymat);

  if (gazQiymat > GAZ_XAVFI) {
    // Xavf holati
    digitalWrite(yashilLed, LOW);
    digitalWrite(qizilLed, HIGH);
    digitalWrite(buzzerPin, HIGH);
    delay(100);
    digitalWrite(buzzerPin, LOW);
    delay(100);
  } else {
    // Normal holat
    digitalWrite(yashilLed, HIGH);
    digitalWrite(qizilLed, LOW);
    digitalWrite(buzzerPin, LOW);
    delay(500);
  }
}`,
      },
      {
        stepNumber: 3,
        title: 'Sinab ko\'rish',
        content:
          'Gaz zajigalkasini yoqmasdan (faqat tugmasini bosib) datchik oldiga tuting. 2-3 soniyada qizil chiroq va sirenaning ishlashini ko\'rishingiz mumkin.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Datchik birinchi yoqilganda o\'z-o\'zidan signal beryapti',
        solution: 'MQ datchiklar qizish uchun 2-3 daqiqa talab qiladi. Dastlabki qizishdan so\'ng barqarorlashadi.',
      },
    ],
  },
];
