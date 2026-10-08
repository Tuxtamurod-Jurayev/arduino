import { ReferenceItem } from '@/types';

export const referenceData: ReferenceItem[] = [
  // 1. Asosiy tuzilma
  {
    id: 'setup',
    slug: 'setup',
    name: 'setup()',
    category: 'Asosiy tuzilma',
    summary: 'Plata yoqilganda yoki qayta yuklanganda faqat bir marta ishga tushadigan dastlabki sozlash funksiyasi.',
    syntax: 'void setup() {\n  // dastlabki sozlash kodlari\n}',
    parameters: [],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      '`setup()` funksiyasi Arduino eskizi (sketch) boshlanganda faqat bitta marta chaqiriladi. U o\'zgaruvchilarni initsializatsiya qilish, pin rejimlarini (`pinMode`) belgilash, kutubxonalarni ishga tushirish va Serial aloqa tezligini ochish uchun ishlatiladi.',
    exampleCode: `int ledPin = 13;

void setup() {
  // 13-pinni chiquvchi (OUTPUT) sifatida sozlaymiz
  pinMode(ledPin, OUTPUT);
  // Kompyuter bilan Serial aloqani 9600 bod tezlikda ochamiz
  Serial.begin(9600);
  Serial.println("Arduino dasturi ishga tushdi!");
}

void loop() {
  // Asosiy sikl kodi bu yerda
}`,
    exampleExplanation: [
      '`setup()` funksiyasi plataga tok berilganda yoki reset tugmasi bosilganda 1 marta bajariladi.',
      '`pinMode` va `Serial.begin` kabi bir martalik amallar aynan shu yerga yoziladi.',
    ],
    notes: [
      'Har qanday Arduino dasturida setup() funksiyasi bo\'lishi shart, hatto uning ichi bo\'sh bo\'lsa ham.',
    ],
  },
  {
    id: 'loop',
    slug: 'loop',
    name: 'loop()',
    category: 'Asosiy tuzilma',
    summary: 'Dastur ishlash davrida to\'xtovsiz, cheksiz takrorlanib turuvchi asosiy mantiqiy sikl funksiyasi.',
    syntax: 'void loop() {\n  // to\'xtovsiz takrorlanuvchi kod\n}',
    parameters: [],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      '`setup()` funksiyasi o\'z ishini tugatgach, boshqaruv darhol `loop()` ga o\'tadi. `loop()` o\'z nomiga mos ravishda ichidagi buyruqlarni to\'xtovsiz, cheksiz siklda yuqoridan pastga qarab takror va takror bajaradi.',
    exampleCode: `int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH); // LED yoqiladi
  delay(1000);                // 1 soniya kutish
  digitalWrite(ledPin, LOW);  // LED o'chadi
  delay(1000);                // 1 soniya kutish
}`,
    exampleExplanation: [
      'Dastur loop() ning oxirgi qatoriga yetganda, darhol yana uning birinchi qatoriga qaytib boshdan boshlaydi.',
      'Plataga quvvat berilib turgan ekan, bu sikl abadiy aylanadi.',
    ],
    notes: [
      'loop() ichida delay() ni haddan tashqari ko\'p ishlatish Arduino boshqa datchiklarni o\'qishini to\'xtatib (muzlatib) qo\'yishi mumkin. Buning o\'rniga millis() tavsiya etiladi.',
    ],
  },

  // 2. Raqamli I/O
  {
    id: 'pinMode',
    slug: 'pinmode',
    name: 'pinMode()',
    category: 'Raqamli I/O',
    summary: 'Raqamli pinni kiruvchi (INPUT), chiquvchi (OUTPUT) yoki ichki tortuvchi (INPUT_PULLUP) rejimiga sozlaydi.',
    syntax: 'pinMode(pin, mode);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Rejimi belgilanayotgan Arduino pini raqami (masalan 13, 7, A0)' },
      { name: 'mode', type: 'uint8_t', description: 'INPUT, OUTPUT yoki INPUT_PULLUP' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino mikrokontrolleridagi umumiy pinlar ikki yo\'nalishda ishlashi mumkin. `pinMode()` ularning yo\'nalishini tayinlaydi. `INPUT` rejimida pin yuqori qarshilikka o\'tadi va datchik signallarini tinglaydi. `OUTPUT` rejimida pin orqali 5V/0V kuchlanish va 20mA gacha tok chiqariladi.',
    exampleCode: `const int tugmaPin = 2;
const int ledPin = 13;

void setup() {
  // 13-pin chiqish signali uchun
  pinMode(ledPin, OUTPUT);

  // 2-pin ichki 20k pull-up rezistori bilan kirish
  pinMode(tugmaPin, INPUT_PULLUP);
}

void loop() {
  int holat = digitalRead(tugmaPin);
  if (holat == LOW) { // Tugma bosilganda yerga (GND) ulanadi
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,
    exampleExplanation: [
      'INPUT_PULLUP rejimi tashqi rezistor ulamasdan tugmani to\'g\'ridan-to\'g\'ri GND ga ulash imkonini beradi.',
      'OUTPUT rejimi LED, rele yoki buzzerlarni boshqarish uchun zarur.',
    ],
    notes: [
      'Analog kirish pinlari (A0-A5) ham raqamli pin sifatida ishlatilishi mumkin.',
    ],
  },
  {
    id: 'digitalWrite',
    slug: 'digitalwrite',
    name: 'digitalWrite()',
    category: 'Raqamli I/O',
    summary: 'Raqamli pinga HIGH (5V / 3.3V) yoki LOW (0V / GND) kuchlanish qiymatini beradi.',
    syntax: 'digitalWrite(pin, value);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Arduino pini raqami' },
      { name: 'value', type: 'uint8_t', description: 'HIGH (1) yoki LOW (0)' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Agar pin `pinMode(pin, OUTPUT)` qilib sozlangan bo\'lsa, `digitalWrite(pin, HIGH)` ushbu pinda 5V (yoki 3.3V platalarda 3.3V) kuchlanish hosil qiladi. `digitalWrite(pin, LOW)` esa pinni 0V (GND) ga tenglashtiradi.',
    exampleCode: `const int relePin = 8;

void setup() {
  pinMode(relePin, OUTPUT);
}

void loop() {
  digitalWrite(relePin, HIGH); // Releni faollashtirish
  delay(2000);
  digitalWrite(relePin, LOW);  // Releni o'chirish
  delay(2000);
}`,
    exampleExplanation: [
      'HIGH berilganda tranzistor yoki LED ga quvvat boradi.',
      'LOW berilganda zanjir uziladi va 0V bo\'ladi.',
    ],
    notes: [
      'Agar pin OUTPUT qilinmagan bo\'lsa, digitalWrite(pin, HIGH) ichki pull-up rezistorni yoqadi.',
    ],
  },
  {
    id: 'digitalRead',
    slug: 'digitalread',
    name: 'digitalRead()',
    category: 'Raqamli I/O',
    summary: 'Raqamli pindagi mantiqiy darajani o\'qiydi va HIGH (1) yoki LOW (0) qaytaradi.',
    syntax: 'int digitalRead(pin);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'O\'qilayotgan raqamli pin raqami' },
    ],
    returnValue: 'HIGH (1) yoki LOW (0)',
    description:
      'Ushbu funksiya belgilangan pindagi kuchlanishni tekshiradi. 5V platalarda agar kuchlanish 3V dan yuqori bo\'lsa HIGH, 1.5V dan past bo\'lsa LOW qaytaradi. Tugmalar, harakat datchiklari (PIR) va chegara kalitlarini (limit switch) o\'qish uchun asosiy funksiya hisoblanadi.',
    exampleCode: `const int pirPin = 4;

void setup() {
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
}

void loop() {
  int sensorHolati = digitalRead(pirPin);
  if (sensorHolati == HIGH) {
    Serial.println("Harakat aniqlandi!");
  }
  delay(100);
}`,
    exampleExplanation: [
      'sensorHolati o\'zgaruvchisi faqat 0 yoki 1 qiymatni qabul qiladi.',
    ],
    notes: [
      'Agar pin havoda ochiq tursa (hech narsaga ulanmagan bo\'lsa), u antennaga aylanadi va shovqin sababli tasodifiy HIGH/LOW qaytaradi (Floating pin).',
    ],
  },

  // 3. Analog I/O
  {
    id: 'analogRead',
    slug: 'analogread',
    name: 'analogRead()',
    category: 'Analog I/O',
    summary: 'Analog pindagi kuchlanishni 10-bitli ADC yordamida o\'qiydi va 0 dan 1023 gacha son qaytaradi.',
    syntax: 'int analogRead(pin);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Analog pin (A0 dan A5 gacha)' },
    ],
    returnValue: '0 dan 1023 gacha butun son (int)',
    description:
      'Arduino Uno da 10-bitli analog-raqamli o\'zgartirgich (ADC) mavjud. Bu 0V dan 5V gacha bo\'lgan oraliqni 1024 ta qismga bo\'ladi (aniqlik ~4.9 mV bitta qadamga). Potentsiometrlar, fotorezistorlar, harorat va gaz datchiklarining silliq kuchlanishini o\'qish uchun ishlatiladi.',
    exampleCode: `const int potPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorQiymat = analogRead(potPin);
  // Kuchlanishni voltga o'tkazish
  float kuchlanish = sensorQiymat * (5.0 / 1023.0);

  Serial.print("Kod: ");
  Serial.print(sensorQiymat);
  Serial.print(" | Kuchlanish: ");
  Serial.print(kuchlanish);
  Serial.println(" V");

  delay(250);
}`,
    exampleExplanation: [
      'A0 piniga 0V kelganda natija 0 bo\'ladi.',
      'A0 piniga 2.5V kelganda natija taxminan 512 bo\'ladi.',
      'A0 piniga 5V kelganda natija 1023 bo\'ladi.',
    ],
    notes: [
      'analogRead() bajarilishi uchun mikrokontroller taxminan 100 mikrosekund sarflaydi.',
    ],
  },
  {
    id: 'analogWrite',
    slug: 'analogwrite',
    name: 'analogWrite()',
    category: 'Analog I/O',
    summary: 'PWM (Kenglik-impuls modulyatsiyasi) pini orqali soxta analog signal (0 - 255) chiqaradi.',
    syntax: 'analogWrite(pin, value);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'PWM belgisi (~) bor pinlar (Uno da 3, 5, 6, 9, 10, 11)' },
      { name: 'value', type: 'int', description: 'Impuls to\'ldirish koeffitsienti: 0 (to\'liq o\'chiq) dan 255 (to\'liq 5V) gacha' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino sof uzluksiz analog kuchlanish chiqara olmaydi. Buning o\'rniga u yuqori tezlikda (~490 Hz yoki ~980 Hz) 5V va 0V ni almashtirib turadi (PWM). Bu LED yorug\'ligini xiralashtirish yoki doimiy tok (DC) motorlar tezligini sozlashda ajoyib samara beradi.',
    exampleCode: `const int ledPin = 9; // ~ belgisi bor PWM pin

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // LED yorug'ligini sekin oshiramiz
  for (int yoruglik = 0; yoruglik <= 255; yoruglik += 5) {
    analogWrite(ledPin, yoruglik);
    delay(20);
  }
  // LED yorug'ligini sekin pasaytiramiz
  for (int yoruglik = 255; yoruglik >= 0; yoruglik -= 5) {
    analogWrite(ledPin, yoruglik);
    delay(20);
  }
}`,
    exampleExplanation: [
      'analogWrite(9, 127) berilsa, vaqtning 50 foizida 5V, 50 foizida 0V bo\'ladi — bu o\'rtacha 2.5V effektini beradi.',
      'analogWrite() ishlatishdan oldin pinMode() chaqirish shart emas, lekin tavsiya qilinadi.',
    ],
    notes: [
      'Uno da faqat 3, 5, 6, 9, 10, va 11-pinlar PWM ni qo\'llab-quvvatlaydi.',
    ],
  },

  // 4. Vaqt
  {
    id: 'delay',
    slug: 'delay',
    name: 'delay()',
    category: 'Vaqt (Time)',
    summary: 'Dastur bajarilishini belgilangan millisekund davomida to\'xtatib (pauza qilib) turadi.',
    syntax: 'delay(ms);',
    parameters: [
      { name: 'ms', type: 'unsigned long', description: 'Kutish vaqti millisekundlarda (1 soniya = 1000 ms)' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      '`delay()` Arduino mikrokontrollerini ko\'rsatilgan vaqt davomida to\'liq to\'xtatib qo\'yadi. Bu vaqt ichida boshqa hech qanday kod (datchik o\'qish, tugma bosilishini tekshirish) bajarilmaydi, faqatgina apparatli uzilishlar (interrupts) ishlashi mumkin.',
    exampleCode: `void loop() {
  digitalWrite(13, HIGH);
  delay(500); // Yarim soniya kutish
  digitalWrite(13, LOW);
  delay(500); // Yarim soniya kutish
}`,
    exampleExplanation: [
      'Dastur delay davomida keyingi qatorga o\'tmay muzlab turadi.',
    ],
    notes: [
      'Bir vaqtning o\'zida bir nechta vazifani parallel bajarish kerak bo\'lsa (masalan bir vaqtda LED miltillash va tugmani kutish), delay() o\'rniga millis() funksiyasidan foydalaning.',
    ],
  },
  {
    id: 'millis',
    slug: 'millis',
    name: 'millis()',
    category: 'Vaqt (Time)',
    summary: 'Arduino platasi yoqilgan paytdan boshlab o\'tgan millisekundlar sonini qaytaradi.',
    syntax: 'unsigned long time = millis();',
    parameters: [],
    returnValue: 'Plata yoqilgandan beri o\'tgan millisekundlar (unsigned long)',
    description:
      '`millis()` — ko\'p vazifalilik (multitasking) va asinxron kechikishlar uchun asosiy vositadir. U dasturni to\'xtatib qo\'ymaydi (non-blocking). Taxminan 50 kundan keyin bu hisoblagich to\'lib, yana 0 ga qaytadi (overflow).',
    exampleCode: `unsigned long avvalgiVaqt = 0;
const long interval = 1000; // 1 soniya
int ledHolati = LOW;
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long hozirgiVaqt = millis();

  // Agar 1 soniya o'tgan bo'lsa
  if (hozirgiVaqt - avvalgiVaqt >= interval) {
    avvalgiVaqt = hozirgiVaqt;

    // LED holatini almashtirish
    ledHolati = (ledHolati == LOW) ? HIGH : LOW;
    digitalWrite(ledPin, ledHolati);
  }

  // Bu yerda boshqa datchiklarni HECH QANDAY TO'XTASHLARSIZ o'qish mumkin!
}`,
    exampleExplanation: [
      '`hozirgiVaqt - avvalgiVaqt >= interval` formulasi orqali bloklanmagan taymer yasaladi.',
      'millis() bilan ishlaganda o\'zgaruvchi turi har doim `unsigned long` bo\'lishi shart!',
    ],
    notes: [
      'Hech qachon millis() natijasini int ga yuklamang, chunki int 32 soniyada to\'lib qoladi.',
    ],
  },

  // 5. Matematika
  {
    id: 'map',
    slug: 'map',
    name: 'map()',
    category: 'Matematika',
    summary: 'Qiymatni bir raqamli diapazondan boshqa diapazonga mutanosib ravishda o\'tkazadi.',
    syntax: 'map(value, fromLow, fromHigh, toLow, toHigh);',
    parameters: [
      { name: 'value', type: 'long', description: 'O\'zgartirilishi kerak bo\'lgan boshlang\'ich son' },
      { name: 'fromLow', type: 'long', description: 'Boshlang\'ich oraliqning pastki chegarasi' },
      { name: 'fromHigh', type: 'long', description: 'Boshlang\'ich oraliqning yuqori chegarasi' },
      { name: 'toLow', type: 'long', description: 'Yangi oraliqning pastki chegarasi' },
      { name: 'toHigh', type: 'long', description: 'Yangi oraliqning yuqori chegarasi' },
    ],
    returnValue: 'Yangi oraliqqa o\'tkazilgan qiymat (long)',
    description:
      'Masalan, potentsiometr 0 dan 1023 gacha son beradi, lekin servomotor burchagi 0 dan 180 gacha bo\'lishi kerak. `map()` bu hisob-kitobni osonlashtiradi: `int burchak = map(pot, 0, 1023, 0, 180);`',
    exampleCode: `int potQiymat = analogRead(A0); // 0 dan 1023 gacha
// PWM oraliqqa (0 dan 255 gacha) o'tkazamiz
int pwmQiymat = map(potQiymat, 0, 1023, 0, 255);

analogWrite(9, pwmQiymat);`,
    exampleExplanation: [
      'map() funksiyasi butun sonlar (integer arifmetikasi) bilan ishlaydi, shuning uchun kasr qismini tashlab yuboradi.',
    ],
    notes: [
      'map() qiymatni chegaralamaydi! Agar boshlang\'ich son fromHigh dan katta bo\'lsa, chiqish ham toHigh dan katta bo\'ladi. Chegaralash uchun constrain() bilan birga ishlatiladi.',
    ],
  },
  {
    id: 'constrain',
    slug: 'constrain',
    name: 'constrain()',
    category: 'Matematika',
    summary: 'Raqamni belgilangan minimal va maksimal chegaralar orasida cheklab ushlab turadi.',
    syntax: 'constrain(x, a, b);',
    parameters: [
      { name: 'x', type: 'int / float', description: 'Tekshirilayotgan son' },
      { name: 'a', type: 'int / float', description: 'Ruxsat etilgan eng kichik chegara' },
      { name: 'b', type: 'int / float', description: 'Ruxsat etilgan eng katta chegara' },
    ],
    returnValue: 'Agar x < a bo\'lsa a; agar x > b bo\'lsa b; aks holda x ning o\'zi',
    description:
      'Datchik ko\'rsatkichi yoki motor tezligi xavfli parametrlardan oshib ketmasligini ta\'minlash uchun sonni sun\'iy ravishda [a, b] oralig\'ida ushlaydi.',
    exampleCode: `int tezlik = analogRead(A0) / 4;
// Tezlikni 50 va 200 oralig'ida cheklaymiz
tezlik = constrain(tezlik, 50, 200);
analogWrite(motorPin, tezlik);`,
    exampleExplanation: [
      'Agar tezlik 30 bo\'lib qolsa, avtomatik 50 ga tenglashtiriladi.',
      'Agar tezlik 240 bo\'lib qolsa, avtomatik 200 ga cheklanadi.',
    ],
    notes: [
      'a parametri har doim b dan kichik bo\'lishi kerak.',
    ],
  },

  // 6. Serial aloqa
  {
    id: 'serial-begin',
    slug: 'serial-begin',
    name: 'Serial.begin()',
    category: 'Serial aloqa',
    summary: 'Ketma-ket (UART) ma\'lumot uzatish tezligini (baud rate) belgilaydi va portni ochadi.',
    syntax: 'Serial.begin(speed);',
    parameters: [
      { name: 'speed', type: 'long', description: 'Tezlik soniyadagi bitlarda: 9600, 19200, 57600, 115200 va h.k.' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino bilan kompyuter o\'rtasida USB orqali aloqa o\'rnatish uchun `setup()` ichida `Serial.begin()` chaqirilishi shart. Eng keng tarqalgan standart tezlik — 9600 bod.',
    exampleCode: `void setup() {
  Serial.begin(9600);
  Serial.println("Kompyuter bilan aloqa o'rnatildi!");
}`,
    exampleExplanation: [
      'Arduino IDE dagi "Serial Monitor" oynasidagi tezlik ham aynan shu 9600 ga sozlangan bo\'lishi shart, aks holda tushunarsiz belgilar (krakadabra) chiqadi.',
    ],
    notes: [
      'ESP8266 va ESP32 uchun odatda tezroq 115200 bod tezligi tanlanadi.',
    ],
  },
  {
    id: 'serial-print',
    slug: 'serial-print',
    name: 'Serial.print() / Serial.println()',
    category: 'Serial aloqa',
    summary: 'Ma\'lumotlarni (matn, son, o\'zgaruvchi) o\'qilishi qulay insoniy formatda Serial portga uzatadi.',
    syntax: 'Serial.print(val);\nSerial.println(val);',
    parameters: [
      { name: 'val', type: 'any', description: 'Uzatilayotgan qiymat (satr, char, int, float va h.k.)' },
    ],
    returnValue: 'Yuborilgan baytlar soni (size_t)',
    description:
      '`Serial.print()` qiymatni bitta qatorda uzatadi. `Serial.println()` esa qiymatdan so\'ng avtomatik tarzda yangi qatorga o\'tish belgilarini (`\\r\\n`) qo\'shadi.',
    exampleCode: `int sensor = 450;
float volt = 2.2;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Datchik: ");
  Serial.print(sensor);
  Serial.print(" | Volt: ");
  Serial.println(volt); // Yangi qatorga o'tadi
  delay(1000);
}`,
    exampleExplanation: [
      'Serial.print() orqali bitta qatorda murakkab jumlalar yig\'iladi, oxirida println() bilan yakunlanadi.',
    ],
    notes: [
      'Float sonlarni chiqarishda verguldan keyingi xonalar sonini ko\'rsatish mumkin: Serial.print(1.23456, 3) -> "1.234"',
    ],
  },

  // 7. Boshqaruv operatorlari
  {
    id: 'if-else',
    slug: 'if-else',
    name: 'if...else',
    category: 'Boshqaruv operatorlari',
    summary: 'Berilgan mantiqiy shart to\'g\'riligiga (rost/yolg\'on) qarab dastur oqimini tarmoqlantiradi.',
    syntax: 'if (shart) {\n  // shart rost bo\'lsa\n} else {\n  // shart yolg\'on bo\'lsa\n}',
    parameters: [
      { name: 'shart', type: 'boolean', description: 'Taqqoslash ifodasi (masalan x > 50 yoki holat == HIGH)' },
    ],
    returnValue: 'Yo\'q',
    description:
      'Robot yoki qurilmaning aqlli qaror qabul qilishi if...else orqali amalga oshiriladi. Masalan, agar masofa 10 sm dan kam bo\'lsa to\'xta, aks holda olg\'a harakatlan.',
    exampleCode: `int masofa = 15;

void loop() {
  if (masofa < 10) {
    digitalWrite(buzzerPin, HIGH); // Xavfli yaqinlik
  } else if (masofa < 30) {
    digitalWrite(sariqLedPin, HIGH); // Ogohlantirish
  } else {
    digitalWrite(yashilLedPin, HIGH); // Xavfsiz
  }
}`,
    exampleExplanation: [
      'Taqqoslash belgilaridan foydalaniladi: == (teng), != (teng emas), > (katta), < (kichik), >=, <=.',
    ],
    notes: [
      'Ehtiyot bo\'ling: if(x == 5) o\'rniga if(x = 5) yozib qo\'yish jiddiy mantiqiy xatodir.',
    ],
  },
  {
    id: 'for',
    slug: 'for',
    name: 'for sikli',
    category: 'Boshqaruv operatorlari',
    summary: 'Kodni ma\'lum bir sanagich bo\'yicha aniq belgilangan marta takrorlab bajarish sikli.',
    syntax: 'for (initsializatsiya; shart; qadam) {\n  // takrorlanuvchi kod\n}',
    parameters: [
      { name: 'initsializatsiya', type: 'kod', description: 'Sikldan oldin 1 marta bajariladigan sanagich e\'loni (masalan int i = 0)' },
      { name: 'shart', type: 'boolean', description: 'Har bir qadamdan oldin tekshiriladigan shart (masalan i < 10)' },
      { name: 'qadam', type: 'kod', description: 'Har bir sikl oxirida sanagichni o\'zgartirish (masalan i++)' },
    ],
    returnValue: 'Yo\'q',
    description:
      '`for` operatori ketma-ketliklarni aylanib chiqish (masalan 5 ta LEDni ketma-ket yoqish), massivlar bilan ishlash yoki PWM ni silliq oshirish uchun juda qulay.',
    exampleCode: `// 2 dan 6 gacha bo'lgan barcha pinlarni OUTPUT qilish
void setup() {
  for (int pin = 2; pin <= 6; pin++) {
    pinMode(pin, OUTPUT);
  }
}

void loop() {
  // LEDlarni ketma-ket yoqish (Running light)
  for (int pin = 2; pin <= 6; pin++) {
    digitalWrite(pin, HIGH);
    delay(100);
    digitalWrite(pin, LOW);
  }
}`,
    exampleExplanation: [
      'Sanagich har safar 1 taga oshadi (pin++) va belgilangan chegaragacha ishlaydi.',
    ],
    notes: [
      'Siklni muddatidan oldin to\'xtatish uchun `break`, keyingi qadamga o\'tish uchun `continue` ishlatiladi.',
    ],
  },

  // 8. Ma'lumotlar turlari
  {
    id: 'int',
    slug: 'int',
    name: 'int (Integer)',
    category: 'Ma\'lumotlar turlari',
    summary: 'Arduino Uno da -32,768 dan 32,767 gacha bo\'lgan 16-bitli butun sonlarni saqlovchi asosiy tur.',
    syntax: 'int o\'zgaruvchiNomi = qiymat;',
    parameters: [],
    returnValue: 'Xotirada 2 bayt (16 bit) joy egallaydi',
    description:
      '`int` turi Arduino dasturlashda eng ko\'p ishlatiladigan butun son turidir. Eslatma: Arduino Uno va Nano da `int` 16 bit (2 bayt) bo\'lsa, ESP32 va Arduino Due da u 32 bit (4 bayt, -2 milliarddan +2 milliardgacha) joy egallaydi.',
    exampleCode: `int ledPin = 13;
int hisoblagich = 0;
int harorat = -15;

void loop() {
  hisoblagich = hisoblagich + 1;
  Serial.println(hisoblagich);
  delay(1000);
}`,
    exampleExplanation: [
      'Musbat va manfiy butun sonlar uchun qo\'llaniladi.',
    ],
    notes: [
      'Agar o\'zgaruvchi faqat musbat bo\'lsa va 65,535 gacha yetishi kerak bo\'lsa, `unsigned int` turidan foydalaning.',
    ],
  },
  {
    id: 'float',
    slug: 'float',
    name: 'float (Haqiqiy sonlar)',
    category: 'Ma\'lumotlar turlari',
    summary: 'Kasr qismi bor haqiqiy sonlarni saqlaydi (32-bit suzuvchi nuqtali son).',
    syntax: 'float o\'zgaruvchiNomi = 3.1415;',
    parameters: [],
    returnValue: 'Xotirada 4 bayt (32 bit) joy egallaydi',
    description:
      'Kasrli aniq o\'lchovlar, harorat, masofa, burchak va fizik hisob-kitoblarda ishlatiladi. Qiymat oralig\'i 3.4028235E+38 dan -3.4028235E+38 gacha, aniqligi 6-7 ta raqam xonasigacha.',
    exampleCode: `float volt = 3.3;
float harorat = 24.65;

void loop() {
  float fahrenheit = (harorat * 9.0 / 5.0) + 32.0;
  Serial.print("Fahrenheit: ");
  Serial.println(fahrenheit);
  delay(1000);
}`,
    exampleExplanation: [
      'Kasr sonlar bilan hisob-kitoblar mikrokontrollerda butun sonlarga qaraganda bir oz ko\'proq vaqt oladi.',
    ],
    notes: [
      'Arduino da double turi ham float bilan bir xil (32 bit) qilib sozlangan (Mega va Due bundan mustasno).',
    ],
  },
];
