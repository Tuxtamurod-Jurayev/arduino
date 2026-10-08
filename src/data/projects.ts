import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'ultrasonic-distance-meter',
    title: 'Ultrasonik Masofa O\'lchagich va LCD 1602 Displey',
    summary:
      'HC-SR04 datchigi yordamida to\'siqqacha bo\'lgan masofani santimetrda o\'lchab, natijani real vaqtda LCD 1602 I2C ekraniga chiqaruvchi va yaqinlashganda ogohlantiruvchi qulay qurilma.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '30 daqiqa',
    category: 'O\'lchov asboblari',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'HC-SR04 Ultrasonik Datchik', quantity: '1 dona', componentSlug: 'hc-sr04' },
      { name: 'LCD 1602 I2C Displeyi', quantity: '1 dona', componentSlug: 'lcd1602-i2c' },
      { name: 'Buzzer (Pyezo signalizator)', quantity: '1 dona', componentSlug: 'piezo-buzzer' },
      { name: 'Breadboard (Maket platasi MB-102)', quantity: '1 dona' },
      { name: 'Ulovchi Jumper simlar (Erkak-Ayol, Erkak-Erkak)', quantity: '10 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/321525495084941906',
    steps: [
      {
        stepNumber: 1,
        title: 'Sxemani Breadboardda yig\'ish',
        content:
          'Barcha qismlarni quvvatdan uzilgan holatda ulang:\n1. LCD 1602 ning VCC sini Arduino 5V ga, GND sini GND ga, SDA ni A4 ga, SCL ni A5 ga ulang.\n2. HC-SR04 ning VCC sini 5V ga, GND sini GND ga, Trig pinini D9 ga, Echo pinini D10 ga ulang.\n3. Pyezo buzzerning musbat (+) oyog\'ini D8 ga, manfiy oyog\'ini GND ga ulang.',
        schematicNote:
          'Maslahat: LCD 1602 orqasidagi I2C modulining ko\'k potentsiometrini burab, harflar ravshan ko\'ringuncha kontrastni sozlang.',
      },
      {
        stepNumber: 2,
        title: 'Kerakli kutubxonalarni o\'rnatish',
        content:
          'Arduino IDE dasturini oching:\n1. Sketch -> Include Library -> Manage Libraries... menyusiga kiring.\n2. Qidiruvga "LiquidCrystal I2C" deb yozing (Frank de Brabander).\n3. "Install" tugmasini bosing.',
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
        title: 'Sinov va kalibrlash',
        content:
          'Qo\'lingizni datchik oldiga yaqinlashtiring. LCD ekranda masofa kamayishi, 15 sm dan yaqin kelganda esa buzzer ovoz berishi kerak.',
        tips: [
          'Agar ekran yonmasa, I2C manzilini 0x3F ga almashtirib ko\'ring.',
        ],
      },
    ],
    troubleshooting: [
      {
        problem: 'LCD ekranda matn ko\'rinmayapti',
        solution: 'I2C platadagi ko\'k potentsiometrni otvyortka bilan burab, harflar ravshan bo\'lguncha kontrastni sozlang.',
      },
      {
        problem: 'Masofa doim 0 sm ko\'rsatmoqda',
        solution: 'Trig va Echo pinlari almashib qolgan bo\'lishi mumkin. D9 va D10 simlarini tekshiring.',
      },
    ],
  },
  {
    id: 'proj-2',
    slug: 'smart-weather-station',
    title: 'Ixcham Ob-havo Stansiyasi (DHT11 + OLED)',
    summary:
      'Xona harorati va havoning nisbiy namligini doimiy monitoring qilib, 0.96 dyuymli OLED displeyda chiroyli grafik ko\'rsatkichlar bilan aks ettiruvchi ixcham qurilma.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '25 daqiqa',
    category: 'Monitoring',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-nano' },
      { name: 'DHT11 Harorat va Namlik datchigi', quantity: '1 dona', componentSlug: 'dht11' },
      { name: 'OLED 0.96" I2C Displeyi', quantity: '1 dona', componentSlug: 'oled-096-i2c' },
      { name: 'Breadboard va Jumper simlar', quantity: '1 to\'plam' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569420042404417',
    steps: [
      {
        stepNumber: 1,
        title: 'Komponentlarni ulash',
        content:
          '1. OLED GND -> Arduino GND, VCC -> 5V, SCL -> A5, SDA -> A4.\n2. DHT11 VCC -> 5V, GND -> GND, DATA -> D2.\n(DHT11 bilan OLED bir vaqtning o\'zida Arduino 5V va GND pinlaridan quvvatlanadi).',
      },
      {
        stepNumber: 2,
        title: 'Kutubxonalarni o\'rnatish',
        content:
          'Library Manager orqali o\'rnating:\n- "DHT sensor library" (Adafruit)\n- "Adafruit SSD1306"\n- "Adafruit GFX Library"',
      },
      {
        stepNumber: 3,
        title: 'Dastur kodini yuklash',
        content: 'Quyidagi kodni yuklang:',
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
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(15, 5);
  display.print("OB-HAVO STANSIYASI");

  display.drawFastHLine(0, 18, 128, WHITE);

  display.setTextSize(2);
  display.setCursor(10, 26);
  display.print(t, 1);
  display.print(" C");

  display.setCursor(10, 48);
  display.print(h, 0);
  display.print(" %");

  display.display();
  delay(2000);
}`,
      },
      {
        stepNumber: 4,
        title: 'Sinash va ishlatish',
        content:
          'Datchik ustiga ohista puflab ko\'ring: nafasdagi iliqlik va namlik tufayli ekrandagi sonlar zudlik bilan ko\'tariladi.',
      },
    ],
    troubleshooting: [
      {
        problem: 'OLED ekranda ma\'lumotlar yangilanmayapti',
        solution: 'display.display() funksiyasi chaqirilganini tekshiring.',
      },
    ],
  },
  {
    id: 'proj-3',
    slug: 'auto-plant-watering',
    title: 'Avtomatik O\'simlik Sug\'orish Tizimi',
    summary:
      'Tuproq quriganda datchik orqali aniqlab, 5V rele yordamida miniatyur suv nasosini avtomatik yoqib o\'simlikni sug\'oruvchi aqlli tizim.',
    difficulty: 'O\'rta',
    estimatedTime: '45 daqiqa',
    category: 'Avtomatlashtirish & Smart Home',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'Tuproq namligi datchigi', quantity: '1 dona', componentSlug: 'soil-moisture' },
      { name: '1-kanalli 5V Rele moduli', quantity: '1 dona', componentSlug: 'relay-5v' },
      { name: '5V Mini suv pompasi va silikon shlang', quantity: '1 dona' },
      { name: 'LED va Rezistor (Holat ko\'rsatkich)', quantity: '1 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569420042404417',
    steps: [
      {
        stepNumber: 1,
        title: 'Sxemani montaj qilish',
        content:
          '1. Tuproq sensori VCC -> 5V, GND -> GND, A0 -> Arduino A1.\n2. Rele VCC -> 5V, GND -> GND, IN -> Arduino D7.\n3. Suv nasosining bitta simini rele COM va NO kontaktlari orqali tashqi quvvatga ulang.',
      },
      {
        stepNumber: 2,
        title: 'Dastur kodini yuklash',
        content: 'Avtomatik nazorat kodi:',
        codeSnippet: `const int sensorPin = A1;
const int relePin = 7;
const int quruqChegara = 600; // Kalibrlash qiymati

void setup() {
  Serial.begin(9600);
  pinMode(relePin, OUTPUT);
  digitalWrite(relePin, HIGH); // Rele o'chiq
}

void loop() {
  int namlik = analogRead(sensorPin);
  Serial.print("Namlik kodi: ");
  Serial.println(namlik);

  if (namlik > quruqChegara) {
    Serial.println("Tuproq quruq! Sug'orish boshlandi.");
    digitalWrite(relePin, LOW); // Nasosni yoqish
    delay(3000);                // 3 soniya suv quyish
    digitalWrite(relePin, HIGH);// Nasosni o'chirish
    delay(10000);               // Suv singishi uchun kutish
  }

  delay(2000);
}`,
      },
      {
        stepNumber: 3,
        title: 'Kalibrlash va sinov',
        content:
          'Sensor elektrodlarini quruq tuproqqa tiqing va Serial Monitor dagi sonni tekshiring. Keyin suv quyib son pasayishini kuzating.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Nasos tinimsiz ishlayvermoqda',
        solution: 'Sensor qiymatini Serial monitorda tekshirib, quruqChegara parametrini to\'g\'rilang.',
      },
    ],
  },
  {
    id: 'proj-4',
    slug: 'rfid-smart-door-lock',
    title: 'RFID Xavfsizlik Qulfi va Domofon Tizimi',
    summary:
      'RC522 moduli orqali maxsus oq karta yoki brelok yaqinlashtirilganda servomotor orqali qulfni ochuvchi, begonalar kelganda esa signal chaluvchi aqlli qulf.',
    difficulty: 'O\'rta',
    estimatedTime: '40 daqiqa',
    category: 'Xavfsizlik & Smart Home',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'RFID RC522 Moduli + Kartalar', quantity: '1 dona', componentSlug: 'rc522' },
      { name: 'SG90 Servomotor', quantity: '1 dona', componentSlug: 'sg90-servo' },
      { name: 'Pyezo Buzzer', quantity: '1 dona', componentSlug: 'piezo-buzzer' },
      { name: 'Yashil va Qizil LEDlar', quantity: '2 dona' },
    ],
    wokwiUrl: 'https://wokwi.com/projects/305569420042404417',
    steps: [
      {
        stepNumber: 1,
        title: 'RFID va Servoni ulash',
        content:
          '1. RC522: 3.3V -> 3.3V, GND -> GND, RST -> D9, SDA -> D10, MOSI -> D11, MISO -> D12, SCK -> D13.\n2. Servomotor signal pini -> D6.\n3. Buzzer -> D8.',
        schematicNote: 'DIQQAT: RC522 moduliga 5V ulamang, faqat 3.3V bering!',
      },
      {
        stepNumber: 2,
        title: 'Kutubxonani o\'rnatish',
        content: 'Arduino IDE da "MFRC522" kutubxonasini o\'rnating.',
      },
      {
        stepNumber: 3,
        title: 'Dastur kodi',
        content: 'RFID xavfsizlik kodi:',
        codeSnippet: `#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>

#define SS_PIN 10
#define RST_PIN 9
MFRC522 rfid(SS_PIN, RST_PIN);
Servo lockServo;

const int buzzerPin = 8;
// O'zingizning kartangiz UID baytlarini kiriting:
byte ruxsatUID[] = {0xDE, 0xAD, 0xBE, 0xEF};

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  lockServo.attach(6);
  lockServo.write(0); // Yopiq holat
  pinMode(buzzerPin, OUTPUT);
  Serial.println("Qulf tayyor!");
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;

  bool ruxsat = true;
  for (byte i = 0; i < 4; i++) {
    if (rfid.uid.uidByte[i] != ruxsatUID[i]) ruxsat = false;
  }

  if (ruxsat) {
    Serial.println("XUSH KELIBSIZ! Qulf ochildi.");
    tone(buzzerPin, 2000, 200);
    lockServo.write(90); // Ochiq holat
    delay(4000);
    lockServo.write(0);  // Qayta yopish
  } else {
    Serial.println("XATO: Ruxsat berilmagan karta!");
    tone(buzzerPin, 500, 1000);
  }

  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}`,
      },
    ],
    troubleshooting: [
      {
        problem: 'Karta o\'qilmayapti',
        solution: 'Avval datchik namunaviy kodi bilan o\'z kartangizning aniq UID baytlarini bilib oling va ruxsatUID massiviga yozing.',
      },
    ],
  },
  {
    id: 'proj-5',
    slug: 'bluetooth-home-automation',
    title: 'Smart Home: Bluetooth Orqali Chiroqlarni Boshqarish',
    summary:
      'HC-05 Bluetooth moduli va 4-kanalli rele yordamida smartfondagi dastur orqali xona chiroqlari va ventilyatorlarni simsiz boshqarish tizimi.',
    difficulty: 'O\'rta',
    estimatedTime: '35 daqiqa',
    category: 'Smart Home & Simsiz aloqa',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'HC-05 Bluetooth moduli', quantity: '1 dona', componentSlug: 'hc-05' },
      { name: '1-kanalli yoki 4-kanalli 5V Rele', quantity: '1 dona', componentSlug: 'relay-5v' },
      { name: 'Smartfon (Android Bluetooth Terminal)', quantity: '1 dona' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bluetooth va Releni ulash',
        content:
          '1. HC-05 VCC -> 5V, GND -> GND, TX -> Arduino D2 (RX), RX -> Arduino D3 (TX).\n2. Rele IN -> Arduino D7.',
      },
      {
        stepNumber: 2,
        title: 'Dastur kodini yuklash',
        content: 'SoftwareSerial kodi:',
        codeSnippet: `#include <SoftwareSerial.h>

SoftwareSerial BT(2, 3); // RX, TX
const int relePin = 7;

void setup() {
  pinMode(relePin, OUTPUT);
  digitalWrite(relePin, HIGH); // O'chiq
  BT.begin(9600);
}

void loop() {
  if (BT.available()) {
    char data = BT.read();
    if (data == '1') {
      digitalWrite(relePin, LOW); // Yoqish
      BT.println("Chiroq: YONIQ");
    } else if (data == '0') {
      digitalWrite(relePin, HIGH); // O'chirish
      BT.println("Chiroq: O'CHIQ");
    }
  }
}`,
      },
      {
        stepNumber: 3,
        title: 'Telefon bilan ulash',
        content:
          '1. Telefonda Bluetooth ni yoqib "HC-05" ga ulaning (parol 1234).\n2. "Serial Bluetooth Terminal" dasturini ochib 1 yoki 0 yuboring.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Telefon ulanmayapti',
        solution: 'HC-05 qizil chirog\'i yonib turganini va 5V quvvat olayotganini tekshiring.',
      },
    ],
  },
  {
    id: 'proj-6',
    slug: 'gas-leak-alarm',
    title: 'Aqlli Gaz Sizishi va Yong\'in Signalizatsiyasi',
    summary:
      'MQ-2 gaz datchigi yordamida havoda gaz yoki tutun paydo bo\'lganda zudlik bilan baland ovozli sirena chalib, xavf haqida ogohlantiruvchi xavfsizlik tizimi.',
    difficulty: 'Boshlang\'ich',
    estimatedTime: '20 daqiqa',
    category: 'Xavfsizlik',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'MQ-2 Gaz va Tutun datchigi', quantity: '1 dona', componentSlug: 'mq-2' },
      { name: 'Buzzer (Pyezo dinamik)', quantity: '1 dona', componentSlug: 'piezo-buzzer' },
      { name: 'Qizil va Yashil LED', quantity: '2 dona' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sxemani yig\'ish',
        content:
          '1. MQ-2 VCC -> 5V, GND -> GND, A0 -> Arduino A0.\n2. Buzzer musbat -> D8, GND -> GND.\n3. Qizil LED -> D12, Yashil LED -> D11.',
      },
      {
        stepNumber: 2,
        title: 'Dastur kodini yuklash',
        content: 'Xavfsizlik kodi:',
        codeSnippet: `const int mqPin = A0;
const int buzzerPin = 8;
const int qizilLed = 12;
const int yashilLed = 11;

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
  pinMode(qizilLed, OUTPUT);
  pinMode(yashilLed, OUTPUT);
}

void loop() {
  int gaz = analogRead(mqPin);
  Serial.println(gaz);

  if (gaz > 350) {
    digitalWrite(qizilLed, HIGH);
    digitalWrite(yashilLed, LOW);
    tone(buzzerPin, 1500); // Baland sirena
  } else {
    digitalWrite(qizilLed, LOW);
    digitalWrite(yashilLed, HIGH);
    noTone(buzzerPin);
  }
  delay(300);
}`,
      },
    ],
    troubleshooting: [
      {
        problem: 'Datchik tinimsiz signal bermoqda',
        solution: 'MQ-2 dastlabki 1-2 daqiqa isishi kerak. Shundan so\'ng ko\'rsatkich me\'yoriga tushadi.',
      },
    ],
  },
  {
    id: 'proj-7',
    slug: 'line-follower-robot',
    title: 'Chiziq Bo\'ylab Harakatlanuvchi Robot (Line Follower)',
    summary:
      'Ikkita optik infraqizil datchik va L298N motor drayveri yordamida polga chizilgan qora chiziqdan chiqib ketmasdan avtonom harakatlanuvchi aqlli robot.',
    difficulty: 'O\'rta',
    estimatedTime: '60 daqiqa',
    category: 'Robototexnika',
    materials: [
      { name: 'Arduino Uno yoki Nano', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'L298N Motor Drayveri Moduli', quantity: '1 dona', componentSlug: 'l298n' },
      { name: '2x IR Chiziq datchigi (TCRT5000)', quantity: '2 dona' },
      { name: '2WD Robot shassi + 2x DC motor va g\'ildiraklar', quantity: '1 to\'plam' },
      { name: '2x 18650 Li-ion batareyalar (7.4V)', quantity: '1 to\'plam' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Mexanik shassi va motorlarni yig\'ish',
        content:
          '1. Shassiga ikkita DC motor va buriluvchi old g\'ildirakni o\'rnating.\n2. Pastki qismga o\'ng va chap IR sensorlarni polga 1 sm masofada joylashtiring.',
      },
      {
        stepNumber: 2,
        title: 'Elektronika ulanishi',
        content:
          '1. Chap sensor -> Arduino D2, O\'ng sensor -> Arduino D3.\n2. L298N: IN1 -> D4, IN2 -> D5, IN3 -> D6, IN4 -> D7.\n3. Batareya musbatini L298N 12V ga, manfiyni GND ga ulang. Arduino GND bilan birlashtiring.',
      },
      {
        stepNumber: 3,
        title: 'Dastur kodini yuklash',
        content: 'Chiziq kuzatuvchi robot algoritmi:',
        codeSnippet: `const int chapSensor = 2;
const int ongSensor = 3;

// Motor pinlari
const int in1 = 4;
const int in2 = 5;
const int in3 = 6;
const int in4 = 7;

void setup() {
  pinMode(chapSensor, INPUT);
  pinMode(ongSensor, INPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);
}

void loop() {
  int chap = digitalRead(chapSensor);
  int ong = digitalRead(ongSensor);

  // Ikkala sensor oq maydonda: to'g'riga harakat
  if (chap == LOW && ong == LOW) {
    oldinga();
  }
  // Chap sensor qora chiziqqa tushdi: chapga burilish
  else if (chap == HIGH && ong == LOW) {
    chapga();
  }
  // O'ng sensor qora chiziqqa tushdi: o'ngga burilish
  else if (chap == LOW && ong == HIGH) {
    ongga();
  }
  // Ikkalasi qora chiziqda (to'xtash)
  else {
    toxta();
  }
}

void oldinga() {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
}
void chapga() {
  digitalWrite(in1, LOW);  digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
}
void ongga() {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);  digitalWrite(in4, LOW);
}
void toxta() {
  digitalWrite(in1, LOW); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW); digitalWrite(in4, LOW);
}`,
      },
    ],
    troubleshooting: [
      {
        problem: 'Robot chiziqdan adashib chiqib ketmoqda',
        solution: 'IR datchiklardagi ko\'k potentsiometrni burab, oq qog\'oz va qora tasma orasidagi sezgirlikni sozlang.',
      },
    ],
  },
  {
    id: 'proj-8',
    slug: 'obstacle-avoiding-robot',
    title: 'To\'siqlarni Aylanib O\'tuvchi Aqlli Robot (Obstacle Avoider)',
    summary:
      'Oldidagi to\'siqlarni ultrasonik radar yordamida 360 gradus skanerlab, to\'qnashuvdan qochuvchi va erkin harakatlanuvchi robot.',
    difficulty: 'Murakkab',
    estimatedTime: '90 daqiqa',
    category: 'Robototexnika & AI',
    materials: [
      { name: 'Arduino Uno R3', quantity: '1 dona', componentSlug: 'arduino-uno-r3' },
      { name: 'L298N Motor drayveri', quantity: '1 dona', componentSlug: 'l298n' },
      { name: 'HC-SR04 Masofa datchigi', quantity: '1 dona', componentSlug: 'hc-sr04' },
      { name: 'SG90 Servomotor', quantity: '1 dona', componentSlug: 'sg90-servo' },
      { name: 'Robot shassisi va quvvat batareyalari', quantity: '1 to\'plam' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Ultrasonik Radarni montaj qilish',
        content:
          'SG90 servomotorini robotning old peshonasiga, HC-SR04 datchigini esa servoning aylanuvchi qulog\'iga qoting.',
      },
      {
        stepNumber: 2,
        title: 'Dasturlash mantig\'i',
        content:
          'Robot to\'siqqa 20 sm yaqinlashganda to\'xtaydi, servo yordamida boshini o\'ngga va chapga burib masofani o\'lchaydi va qaysi tomon ochiq bo\'lsa, o\'sha tomonga buriladi.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Robot to\'siqqa urilib ketyapti',
        solution: 'Masofa chegarasini 20 sm dan 30 sm ga oshiring.',
      },
    ],
  },
];
