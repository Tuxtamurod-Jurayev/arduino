import { ReferenceItem } from '@/types';

export const referenceData: ReferenceItem[] = [
  // ==========================================
  // PILLAR 1: ОПЕРАТОРЫ (OPERATORS & STRUCTURE)
  // ==========================================
  {
    id: 'setup',
    slug: 'setup',
    name: 'setup()',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Asosiy tuzilma',
    summary: 'Plata yoqilganda yoki qayta yuklanganda faqat bir marta ishga tushadigan dastlabki sozlash funksiyasi.',
    syntax: 'void setup() {\n  // dastlabki sozlash kodlari\n}',
    parameters: [],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      '`setup()` funksiyasi Arduino sketch boshlanganda faqat bitta marta chaqiriladi. U o\'zgaruvchilarni initsializatsiya qilish, pin rejimlarini (`pinMode`) belgilash, kutubxonalarni ishga tushirish va Serial aloqa tezligini ochish uchun ishlatiladi.',
    exampleCode: `int ledPin = 13;

void setup() {
  // 13-pinni chiquvchi (OUTPUT) sifatida sozlaymiz
  pinMode(ledPin, OUTPUT);
  // Kompyuter bilan Serial aloqani 9600 bod tezlikda ochamiz
  Serial.begin(9600);
  Serial.println("Arduino dasturi ishga tushdi!");
}

void loop() {
  // Asosiy sikl kodi
}`,
    exampleExplanation: [
      '`setup()` funksiyasi plataga tok berilganda yoki reset tugmasi bosilganda 1 marta bajariladi.',
      '`pinMode` va `Serial.begin` kabi bir martalik amallar aynan shu yerga yoziladi.',
    ],
    notes: [
      'Har qanday Arduino dasturida setup() funksiyasi bo\'lishi shart, hatto uning ichi bo\'sh bo\'lsa ham.',
    ],
    relatedSlugs: ['loop', 'pinmode', 'serial-begin'],
  },
  {
    id: 'loop',
    slug: 'loop',
    name: 'loop()',
    pillar: 'operators',
    pillarLabel: 'Операторы',
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
      'Dastur loop() ning oxirgi qatoriga yetganda, darhol yana birinchi qatorga qaytib boshdan boshlaydi.',
      'Plataga quvvat berilib turgan ekan, bu sikl abadiy aylanadi.',
    ],
    notes: [
      'loop() ichida delay() ni haddan tashqari ko\'p ishlatish Arduino boshqa datchiklarni o\'qishini to\'xtatib (muzlatib) qo\'yishi mumkin. Buning o\'rniga millis() tavsiya etiladi.',
    ],
    relatedSlugs: ['setup', 'millis', 'delay'],
  },
  {
    id: 'if-else',
    slug: 'if-else',
    name: 'if...else',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Berilgan mantiqiy shart to\'g\'riligiga (rost/yolg\'on) qarab dastur oqimini tarmoqlantiradi.',
    syntax: 'if (shart) {\n  // shart rost (true) bo\'lsa\n} else if (boshqaShart) {\n  // boshqa shart rost bo\'lsa\n} else {\n  // barcha shartlar yolg\'on bo\'lsa\n}',
    parameters: [
      { name: 'shart', type: 'boolean', description: 'Taqqoslash ifodasi (masalan x > 50 yoki holat == HIGH)' },
    ],
    returnValue: 'Yo\'q',
    description:
      'Robot yoki qurilmaning qaror qabul qilishi if...else orqali amalga oshiriladi. Masalan, agar masofa 10 sm dan kam bo\'lsa to\'xta, aks holda olg\'a harakatlan.',
    exampleCode: `int masofa = 15;
const int buzzerPin = 8;
const int yashilLedPin = 7;

void loop() {
  if (masofa < 10) {
    digitalWrite(buzzerPin, HIGH); // Xavfli yaqinlik: signal chalish
  } else if (masofa < 30) {
    digitalWrite(buzzerPin, LOW);
    digitalWrite(yashilLedPin, HIGH); // O'rtacha masofa
  } else {
    digitalWrite(buzzerPin, LOW);
    digitalWrite(yashilLedPin, LOW); // Xavfsiz
  }
}`,
    exampleExplanation: [
      'Taqqoslash belgilaridan foydalaniladi: == (teng), != (teng emas), > (katta), < (kichik), >=, <=.',
    ],
    notes: [
      'Ehtiyot bo\'ling: if(x == 5) o\'rniga if(x = 5) yozib qo\'yish jiddiy mantiqiy xatodir.',
    ],
    relatedSlugs: ['switch-case', 'comparison-operators'],
  },
  {
    id: 'switch-case',
    slug: 'switch-case',
    name: 'switch...case',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Bitta o\'zgaruvchini bir nechta aniq qiymatlar bilan solishtirib, mos keluvchi blokni bajaradi.',
    syntax: 'switch (ozgaruvchi) {\n  case 1:\n    // kod 1\n    break;\n  case 2:\n    // kod 2\n    break;\n  default:\n    // hech biri mos kelmasa\n    break;\n}',
    parameters: [
      { name: 'ozgaruvchi', type: 'int / char', description: 'Tekshirilayotgan butun son yoki belgi' },
    ],
    returnValue: 'Yo\'q',
    description:
      'Agar o\'zgaruvchi bir nechta variantlardan biriga teng bo\'lishi kerak bo\'lsa (masalan menyu tanlash, Bluetooth dan kelgan buyruqlar), ko\'plab `if...else` lardan ko\'ra `switch...case` ancha ixcham va tez ishlaydi.',
    exampleCode: `char buyruq = 'F';

void loop() {
  switch (buyruq) {
    case 'F':
      // Oldinga yurish
      Serial.println("Robot oldinga");
      break;
    case 'B':
      // Orqaga yurish
      Serial.println("Robot orqaga");
      break;
    case 'S':
      // To'xtash
      Serial.println("Robot to'xtadi");
      break;
    default:
      Serial.println("Noma'lum buyruq");
      break;
  }
}`,
    exampleExplanation: [
      '`break` kalit so\'zi har bir case oxirida bo\'lishi shart, aks holda keyingi case lar ham bajarilib ketadi (fall-through).',
      '`default` mos keluvchi variant topilmaganda ishga tushadi.',
    ],
    notes: [
      'switch...case faqat butun sonlar (int, char, byte) bilan ishlaydi, float yoki satrlar bilan ishlamaydi.',
    ],
    relatedSlugs: ['if-else', 'break-continue'],
  },
  {
    id: 'for',
    slug: 'for',
    name: 'for sikli',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Kodni ma\'lum bir sanagich bo\'yicha aniq belgilangan marta takrorlab bajarish sikli.',
    syntax: 'for (initsializatsiya; shart; qadam) {\n  // takrorlanuvchi kod\n}',
    parameters: [
      { name: 'initsializatsiya', type: 'kod', description: 'Sanagich e\'loni (masalan int i = 0)' },
      { name: 'shart', type: 'boolean', description: 'Sikl davom etish sharti (masalan i < 10)' },
      { name: 'qadam', type: 'kod', description: 'Har qadam oxirida bajariladigan amal (masalan i++)' },
    ],
    returnValue: 'Yo\'q',
    description:
      '`for` operatori ketma-ketliklarni aylanib chiqish (masalan 5 ta LEDni ketma-ket yoqish), massivlar bilan ishlash yoki PWM ni silliq oshirish uchun juda qulay.',
    exampleCode: `void setup() {
  // 2 dan 6 gacha bo'lgan barcha pinlarni OUTPUT qilish
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
      'Siklni muddatidan oldin to\'xtatish uchun `break`, keyingi qadamga sakrash uchun `continue` ishlatiladi.',
    ],
    relatedSlugs: ['while', 'break-continue'],
  },
  {
    id: 'while',
    slug: 'while',
    name: 'while sikli',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Berilgan mantiqiy shart rost (true) bo\'lib turgan ekan, kodni to\'xtovsiz takrorlaydi.',
    syntax: 'while (shart) {\n  // shart rost ekan, bu kod takrorlanadi\n}',
    parameters: [
      { name: 'shart', type: 'boolean', description: 'Sikl bajarilishi uchun zarur mantiqiy ifoda' },
    ],
    returnValue: 'Yo\'q',
    description:
      '`while` operatori qadamlar soni oldindan noma\'lum bo\'lgan, lekin ma\'lum bir hodisa sodir bo\'lguncha kutish kerak bo\'lgan holatlarda ishlatiladi (masalan tugma bosilishini kutish, sensor signali kelguncha kutish).',
    exampleCode: `int sensorQiymati = analogRead(A0);

// Sensor 500 dan past ekan, LED ni yoqib kutamiz
while (sensorQiymati < 500) {
  digitalWrite(13, HIGH);
  delay(100);
  sensorQiymati = analogRead(A0); // Yangi qiymatni tekshirish
}
digitalWrite(13, LOW);`,
    exampleExplanation: [
      'Shart har bir qadam boshida tekshiriladi. Agar shart boshidanoq yolg\'on bo\'lsa, sikl 0 marta bajariladi.',
    ],
    notes: [
      'Sikl ichida shartga ta\'sir qiluvchi o\'zgaruvchini yangilab turish shart, aks holda cheksiz qotib qolish (infinite loop) yuzaga keladi.',
    ],
    relatedSlugs: ['do-while', 'for'],
  },
  {
    id: 'do-while',
    slug: 'do-while',
    name: 'do...while',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Kodni kamida bir marta bajaradi, so\'ngra shartni tekshirib takrorlashni hal qiladi.',
    syntax: 'do {\n  // kamida 1 marta bajariladigan kod\n} while (shart);',
    parameters: [
      { name: 'shart', type: 'boolean', description: 'Tekshiriladigan mantiqiy shart' },
    ],
    returnValue: 'Yo\'q',
    description:
      '`do...while` ning `while` dan asosiy farqi shundaki, shart eng oxirida tekshiriladi. Demak shart hatto boshidanoq yolg\'on bo\'lsa ham, sikl tanasi kamida bir marta kafolatlangan holda bajariladi.',
    exampleCode: `int x = 0;
do {
  delay(50);
  x = analogRead(A0);
} while (x < 100);`,
    exampleExplanation: [
      'Avval sensor o\'qiladi, keyin uning qiymati 100 dan kichikligi tekshiriladi.',
    ],
    notes: [
      '`while (shart);` oxirida nuqta-vergul (;) qo\'yilishi shart.',
    ],
    relatedSlugs: ['while'],
  },
  {
    id: 'break-continue',
    slug: 'break-continue',
    name: 'break / continue',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Sikldan muddatidan oldin chiqish (break) yoki navbatdagi qadamga sakrash (continue).',
    syntax: 'break;\ncontinue;',
    parameters: [],
    returnValue: 'Yo\'q',
    description:
      '`break` operatori `for`, `while` yoki `switch` siklini darhol to\'xtatadi va sikldan tashqariga chiqadi. `continue` esa siklning joriy qadamidagi qolgan kodlarni tashlab yuborib, darhol keyingi qadamga o\'tkazadi.',
    exampleCode: `for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue; // 4-raqamni tashlab ketadi
  }
  if (i == 8) {
    break; // 8 ga yetganda siklni butunlay to'xtatadi
  }
  Serial.println(i);
}`,
    exampleExplanation: [
      'Natijada konsolga 0, 1, 2, 3, 5, 6, 7 sonlari chiqadi.',
    ],
    notes: [
      'Ichma-ich joylashgan sikllarda break faqat o\'zi turgan ichki siklni to\'xtatadi.',
    ],
    relatedSlugs: ['for', 'while', 'switch-case'],
  },
  {
    id: 'return',
    slug: 'return',
    name: 'return',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Boshqaruv operatorlari',
    summary: 'Funksiyani yakunlaydi va ixtiyoriy ravishda chaqirgan joyga natija qiymatini qaytaradi.',
    syntax: 'return;\nreturn qiymat;',
    parameters: [
      { name: 'qiymat', type: 'ixtiyoriy', description: 'Funksiya qaytaruvchi natija (agar void bo\'lmasa)' },
    ],
    returnValue: 'Funksiya e\'lon qilingan turdagi qiymat',
    description:
      '`return` operatori funksiya bajarilishini darhol to\'xtatadi. `loop()` ichida `return;` chaqirilsa, joriy loop sikli darhol tugab, loop boshidan yangi sikl boshlanadi.',
    exampleCode: `int ikkiBarobar(int son) {
  return son * 2;
}

void loop() {
  int natija = ikkiBarobar(5); // natija = 10
  Serial.println(natija);
  delay(1000);
}`,
    exampleExplanation: [
      'Funksiya ichidagi return dan keyingi qatorlar bajarilmaydi.',
    ],
    notes: [
      'void turidagi funksiyalarda faqat `return;` yoziladi, qiymat berilmaydi.',
    ],
    relatedSlugs: ['setup', 'loop'],
  },
  {
    id: 'comparison-operators',
    slug: 'comparison-operators',
    name: 'Taqqoslash operatorlari',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Taqqoslash operatorlari',
    summary: 'Ikkita qiymatni solishtirish: ==, !=, <, >, <=, >=.',
    syntax: 'x == y  // Tengmi?\nx != y  // Teng emasmi?\nx < y   // Kichikmi?\nx > y   // Kattami?\nx <= y  // Kichik yoki tengmi?\nx >= y  // Katta yoki tengmi?',
    parameters: [],
    returnValue: 'boolean (true yoki false)',
    description:
      'Shartli ifodalarda o\'zgaruvchilar va datchik signallarini solishtirish uchun qo\'llaniladi.',
    exampleCode: `int harorat = 30;
if (harorat >= 28) {
  Serial.println("Konditsionerni yoqish kerak");
}`,
    exampleExplanation: [
      '`==` ikkita qiymat tengligini tekshiradi. `=` esa o\'zlashtirish (qiymat berish) belgisidir.',
    ],
    notes: [
      'Eng ko\'p xato: if(a = b) yozish! Har doim if(a == b) deb yozing.',
    ],
    relatedSlugs: ['if-else', 'boolean-operators'],
  },
  {
    id: 'boolean-operators',
    slug: 'boolean-operators',
    name: 'Mantiqiy operatorlar (&&, ||, !)',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Mantiqiy operatorlar',
    summary: 'Bir nechta shartlarni birlashtirish: && (VA), || (YOKI), ! (EMAS / INKOR).',
    syntax: 'shart1 && shart2  // Mantiqiy VA (Ikkalasi ham rost bo\'lishi shart)\nshart1 || shart2  // Mantiqiy YOKI (Kamida bittasi rost bo\'lsa yetarli)\n!shart            // Mantiqiy EMAS (Rostni yolg\'on, yolg\'onni rost qiladi)',
    parameters: [],
    returnValue: 'boolean (true yoki false)',
    description:
      'Murakkab shartli logikani qurishda ishlatiladi. Masalan, "Agar harorat > 30 VA namlik < 40 bo\'lsa sug\'or".',
    exampleCode: `int temp = 35;
int namlik = 25;

if (temp > 30 && namlik < 30) {
  // Ikkala shart ham to'g'ri bo'lsagina ishlaydi
  digitalWrite(relePin, HIGH);
}`,
    exampleExplanation: [
      '&& amali faqat ikkala tomon true bo\'lganda true qaytaradi.',
      '|| amali kamida bitta tomon true bo\'lsa true qaytaradi.',
      '! amali qiymatni teskarisiga aylantiradi: !HIGH -> LOW.',
    ],
    notes: [
      '& va | (bitta belgi) bitli amallardir. Mantiqiy shartlar uchun har doim && va || ishlating.',
    ],
    relatedSlugs: ['comparison-operators', 'if-else'],
  },
  {
    id: 'arithmetic-compound',
    slug: 'arithmetic-compound',
    name: 'Arifmetik va birikma operatorlar',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Arifmetik operatorlar',
    summary: 'Matematik amallar: +, -, *, /, % hamda birikmalar: ++, --, +=, -=, *=, /=.',
    syntax: 'a = b + c;   // Qo\'shish\na = b - c;   // Ayirish\na = b * c;   // Ko\'paytirish\na = b / c;   // Bo\'lish\na = b % c;   // Qoldiq olish (modulo)\na++;         // a = a + 1\na += 5;      // a = a + 5',
    parameters: [],
    returnValue: 'Hisoblash natijasi',
    description:
      'Mikrokontrollerda datchik signallarini hisoblash, vaqt oraliqlarini belgilash va o\'lchov birliklarini o\'zgartirishda ishlatiladi.',
    exampleCode: `int sekund = 125;
int minut = sekund / 60; // 2
int qoldiqSekund = sekund % 60; // 5`,
    exampleExplanation: [
      '% operatori faqat butun sonli bo\'lishdagi qoldiqni beradi.',
    ],
    notes: [
      'Butun sonlarni bir-biriga bo\'lganda kasr qismi tashlab yuboriladi: 5 / 2 = 2. Kasr kerak bo\'lsa kamida bitta son float bo\'lishi shart: 5.0 / 2.0 = 2.5.',
    ],
    relatedSlugs: ['int', 'float'],
  },
  {
    id: 'bitwise-operators',
    slug: 'bitwise-operators',
    name: 'Bitli operatorlar (&, |, ^, ~, <<, >>)',
    pillar: 'operators',
    pillarLabel: 'Операторы',
    category: 'Bitli operatorlar',
    summary: 'Sonlarning ikkilik (binary) bitlari ustida amallar bajarish.',
    syntax: 'a & b   // Bitwise AND\na | b   // Bitwise OR\na ^ b   // Bitwise XOR\n~a      // Bitwise NOT\na << n  // Chapga surish\na >> n  // O\'ngga surish',
    parameters: [],
    returnValue: 'Bitli amal natijasi',
    description:
      'Registrlar, shift-registrlar (74HC595), datchiklarning binar baytlari bilan ishlashda va tezkor apparatli manipulyatsiyalarda qo\'llaniladi.',
    exampleCode: `byte registr = B00000000;
registr |= (1 << 3); // 3-bitni 1 ga aylantirish: B00001000`,
    exampleExplanation: [
      'Surish amali (<<) sonni 2 ning darajasiga ko\'paytirish bilan teng kuchlidir.',
    ],
    notes: [
      'Mantiqiy && bilan bitli & ni adashtirmang.',
    ],
    relatedSlugs: ['byte', 'bit-operations'],
  },

  // ==========================================
  // PILLAR 2: ДАННЫЕ (DATA TYPES & CONSTANTS)
  // ==========================================
  {
    id: 'high-low',
    slug: 'high-low',
    name: 'HIGH / LOW',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Konstantalar',
    summary: 'Raqamli pinlarning mantiqiy darajasini ifodalovchi asosiy konstantalar (5V/3.3V va 0V).',
    syntax: 'digitalWrite(pin, HIGH);\ndigitalWrite(pin, LOW);\nif (digitalRead(pin) == HIGH) { ... }',
    parameters: [],
    returnValue: 'HIGH = 1, LOW = 0',
    description:
      '`HIGH` raqamli pinda yuqori kuchlanish (5V platalarda 5V, 3.3V platalarda 3.3V) mavjudligini bildiradi. `LOW` esa yer (GND, 0V) ga teng kuchlanishni bildiradi.',
    exampleCode: `void loop() {
  digitalWrite(13, HIGH); // 5V berish (LED yonadi)
  delay(500);
  digitalWrite(13, LOW);  // 0V berish (LED o'chadi)
  delay(500);
}`,
    exampleExplanation: [
      'Raqamli signallar faqat shu ikkita holatdan birida bo\'ladi.',
    ],
    notes: [
      'HIGH o\'rniga 1 yoki true, LOW o\'rniga 0 yoki false deb yozish ham mumkin, lekin o\'qilishi uchun HIGH/LOW tavsiya etiladi.',
    ],
    relatedSlugs: ['digitalwrite', 'digitalread'],
  },
  {
    id: 'input-output',
    slug: 'input-output',
    name: 'INPUT / OUTPUT / INPUT_PULLUP',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Konstantalar',
    summary: 'Raqamli pinlarning ishlash yo\'nalishini belgilovchi pinMode() rejimlari.',
    syntax: 'pinMode(pin, INPUT);\npinMode(pin, OUTPUT);\npinMode(pin, INPUT_PULLUP);',
    parameters: [],
    returnValue: 'Rejim konstantalari',
    description:
      '`INPUT` — pin tashqi datchik yoki tugmadan signal o\'qiydi (yuqori qarshilik). `OUTPUT` — pin orqali LED, rele va motorga tok uzatiladi. `INPUT_PULLUP` — mikrokontrollerning ichki 20k Om tortuvchi rezistorini yoqadi, tugmani tashqi rezistorsiz to\'g\'ridan-to\'g\'ri GND ga ulash imkonini beradi.',
    exampleCode: `const int tugmaPin = 2;

void setup() {
  // Tugma bosilmaganda HIGH, bosilganda LOW bo'ladi
  pinMode(tugmaPin, INPUT_PULLUP);
}`,
    exampleExplanation: [
      'INPUT_PULLUP ishlatilganda tugma bosilganda pin GND ga ulanishi kerak.',
    ],
    notes: [
      'Ochiq (floating) pin shovqin qabul qilmasligi uchun INPUT o\'rniga INPUT_PULLUP juda qulaydir.',
    ],
    relatedSlugs: ['pinmode', 'digitalread'],
  },
  {
    id: 'true-false',
    slug: 'true-false',
    name: 'true / false',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Konstantalar',
    summary: 'Mantiqiy (bool) o\'zgaruvchilarning rost (true, 1) va yolg\'on (false, 0) qiymatlari.',
    syntax: 'bool holat = true;\nbool xato = false;',
    parameters: [],
    returnValue: 'Mantiqiy qiymat',
    description:
      'Arduino va C++ da har qanday 0 bo\'lmagan butun son mantiqiy rost (true), 0 esa yolg\'on (false) hisoblanadi.',
    exampleCode: `bool tizimYoniqmi = false;

void loop() {
  if (tizimYoniqmi == true) {
    // Tizim ishlamoqda
  }
}`,
    exampleExplanation: [
      '`if (tizimYoniqmi)` yozuvi `if (tizimYoniqmi == true)` bilan aynan bir xil ma\'noga ega.',
    ],
    notes: [
      'Kichik harflar bilan yoziladi: true va false.',
    ],
    relatedSlugs: ['bool', 'if-else'],
  },
  {
    id: 'bool',
    slug: 'bool',
    name: 'bool / boolean',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Faqat ikkita qiymatni saqlaydigan mantiqiy tur: true (1) yoki false (0).',
    syntax: 'bool holat = false;\nboolean bayroq = true;',
    parameters: [],
    returnValue: 'Xotirada 1 bayt (8 bit) joy oladi',
    description:
      'Dastur holatini eslab qolish (bayroqlar / flags), tizim yoniq/o\'chiqligi, datchik xatolarini belgilashda eng qulay tur.',
    exampleCode: `bool ledHolati = false;

void loop() {
  ledHolati = !ledHolati; // Teskarisiga almashtirish
  digitalWrite(13, ledHolati);
  delay(1000);
}`,
    exampleExplanation: [
      '!ledHolati orqali har soniyada true va false navbatma-navbat almashadi.',
    ],
    notes: [
      'Standart C++ da `bool`, eski Arduino sketchlarida `boolean` ishlatiladi. `bool` tavsiya etiladi.',
    ],
    relatedSlugs: ['true-false', 'high-low'],
  },
  {
    id: 'byte',
    slug: 'byte',
    name: 'byte',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: '0 dan 255 gacha bo\'lgan 8-bitli ishorasiz butun sonlarni saqlaydi.',
    syntax: 'byte qiymat = 180;\nbyte binarSon = B00101100;',
    parameters: [],
    returnValue: 'Xotirada aniq 1 bayt (8 bit) joy egallaydi',
    description:
      'Xotirani tejash uchun ajoyib tur. PWM qiymatlari (0-255), datchiklarning binar registrlari va ranglar uchun aynan byte ishlatiladi.',
    exampleCode: `byte yoruglik = 128; // 50% PWM
analogWrite(9, yoruglik);`,
    exampleExplanation: [
      'byte faqat musbat sonlarni saqlaydi (0 dan 255 gacha).',
    ],
    notes: [
      'Agar byte qiymati 255 dan oshsa (masalan 255 + 1), u 0 ga aylanib qoladi (overflow).',
    ],
    relatedSlugs: ['int', 'analogwrite'],
  },
  {
    id: 'int',
    slug: 'int',
    name: 'int (Integer)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Arduino Uno/Nano da -32,768 dan 32,767 gacha bo\'lgan 16-bitli butun sonlarni saqlovchi asosiy tur.',
    syntax: 'int son = 1200;\nint manfiy = -45;',
    parameters: [],
    returnValue: 'Uno/Nano da 2 bayt (16 bit), ESP32/Due da 4 bayt (32 bit)',
    description:
      '`int` turi Arduino dasturlashda eng ko\'p ishlatiladigan butun son turidir. Pin raqamlari, hisoblagichlar, `analogRead()` natijalari (0-1023) hammasi `int` da saqlanadi.',
    exampleCode: `int sensorQiymati = analogRead(A0); // 0 dan 1023 gacha
int hisoblagich = 0;

void loop() {
  hisoblagich++;
  Serial.println(hisoblagich);
  delay(500);
}`,
    exampleExplanation: [
      'Musbat va manfiy butun sonlar uchun qo\'llaniladi.',
    ],
    notes: [
      'Agar faqat musbat sonlar kerak bo\'lsa va 65,535 gacha yetishi kerak bo\'lsa, `unsigned int` ishlating.',
    ],
    relatedSlugs: ['unsigned-int', 'long', 'byte'],
  },
  {
    id: 'unsigned-int',
    slug: 'unsigned-int',
    name: 'unsigned int',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: '0 dan 65,535 gacha bo\'lgan faqat musbat 16-bitli butun sonlarni saqlaydi.',
    syntax: 'unsigned int masofa = 45000;',
    parameters: [],
    returnValue: 'Xotirada 2 bayt (16 bit) joy egallaydi',
    description:
      'Manfiy sonlarni saqlamaydi, evaziga musbat sonlar oralig\'i ikki baravarga (65,535 gacha) oshadi.',
    exampleCode: `unsigned int impulsSoni = 50000;`,
    exampleExplanation: [
      'Impuls vaqtlarini mikrosekundlarda yoki yuqori sanagichlarni hisoblashda qulay.',
    ],
    notes: [
      'Manfiy qiymat berilsa, u aylanib juda katta musbat songa aylanadi.',
    ],
    relatedSlugs: ['int', 'unsigned-long'],
  },
  {
    id: 'long',
    slug: 'long',
    name: 'long',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Katta butun sonlarni (-2,147,483,648 dan 2,147,483,647 gacha) saqlovchi 32-bitli tur.',
    syntax: 'long kattaSon = 1234567L;',
    parameters: [],
    returnValue: 'Xotirada 4 bayt (32 bit) joy oladi',
    description:
      'Ultrasonik masofa datchigidan qaytgan mikrosekundlik davomiylik (`pulseIn`), katta matematik hisob-kitoblar uchun zarur.',
    exampleCode: `long duration = pulseIn(echoPin, HIGH);
float masofa = duration * 0.0343 / 2.0;`,
    exampleExplanation: [
      'pulseIn funksiyasi mikrosekund qaytargani sababli int sig\'maydi va long ishlatiladi.',
    ],
    notes: [
      'Katta son konstanta yozayotganda oxiriga "L" harfini qo\'shish tavsiya etiladi (masalan 100000L).',
    ],
    relatedSlugs: ['unsigned-long', 'int'],
  },
  {
    id: 'unsigned-long',
    slug: 'unsigned-long',
    name: 'unsigned long',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: '0 dan 4,294,967,295 gacha bo\'lgan 32-bitli musbat sonlar (millis() uchun majburiy tur).',
    syntax: 'unsigned long vaqt = millis();',
    parameters: [],
    returnValue: 'Xotirada 4 bayt (32 bit) joy oladi',
    description:
      '`millis()` va `micros()` funksiyalari natijasini saqlash uchun standart tur. 50 kundan ortiq vaqt mobaynida millisekundlarni xatosiz hisoblay oladi.',
    exampleCode: `unsigned long avvalgiVaqt = 0;
const unsigned long interval = 1000;

void loop() {
  unsigned long hozir = millis();
  if (hozir - avvalgiVaqt >= interval) {
    avvalgiVaqt = hozir;
    // Har 1 soniyada bajariladigan kod
  }
}`,
    exampleExplanation: [
      'millis() natijasini hech qachon int ga yuklamang, chunki int 32 soniyada to\'lib qoladi.',
    ],
    notes: [
      'Vaqt bilan ishlashda har doim unsigned long ishlatiladi.',
    ],
    relatedSlugs: ['millis', 'long'],
  },
  {
    id: 'float',
    slug: 'float',
    name: 'float (Haqiqiy sonlar)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Kasr qismi bor suzuvchi nuqtali haqiqiy sonlar (masalan 3.1415, -12.75).',
    syntax: 'float harorat = 24.6;\nfloat kuchlanish = 3.3;',
    parameters: [],
    returnValue: 'Xotirada 4 bayt (32 bit) joy oladi',
    description:
      'Kasrli aniq o\'lchovlar, harorat, namlik, kuchlanish, burchaklar va fizik hisob-kitoblar uchun ishlatiladi. Qiymat oralig\'i 3.4028235E+38 dan -3.4028235E+38 gacha, aniqligi 6-7 xona.',
    exampleCode: `int sensor = analogRead(A0);
float volt = sensor * (5.0 / 1023.0);
Serial.print("Kuchlanish: ");
Serial.print(volt, 2); // Verguldan keyin 2 ta xona
Serial.println(" V");`,
    exampleExplanation: [
      'Serial.print(volt, 2) ikkinchi parametri verguldan keyingi belgilar sonini belgilaydi.',
    ],
    notes: [
      'Float amallari mikrokontrollerda butun sonlarga qaraganda sekinroq hisoblanadi.',
    ],
    relatedSlugs: ['int', 'double'],
  },
  {
    id: 'char',
    slug: 'char',
    name: 'char (Belgi)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Bitta ASCII belgisini saqlaydi (masalan \'A\', \'9\', \'#\').',
    syntax: 'char belgi = \'A\';\nchar yangiQator = \'\\n\';',
    parameters: [],
    returnValue: 'Xotirada 1 bayt (-128 dan 127 gacha ASCII kodi)',
    description:
      'Bitta harf yoki klaviatura belgisini saqlaydi. Serial port orqali kompyuterdan yoki Bluetooth dan kelgan buyruq harflarini qabul qilishda keng qo\'llaniladi.',
    exampleCode: `if (Serial.available() > 0) {
  char buyruq = Serial.read();
  if (buyruq == '1') {
    digitalWrite(13, HIGH);
  } else if (buyruq == '0') {
    digitalWrite(13, LOW);
  }
}`,
    exampleExplanation: [
      'Belgilar har doim bittalik tirnoq (\'A\') ichiga olinadi. Ikkitalik tirnoq ("A") esa satr hisoblanadi.',
    ],
    notes: [
      'char aslida 8-bitli son bo\'lib, uning qiymati ASCII jadvalidagi tartib raqamiga teng (\'A\' = 65).',
    ],
    relatedSlugs: ['string-object', 'serial-read-available'],
  },
  {
    id: 'string-object',
    slug: 'string-object',
    name: 'String (Matnli obyekt)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Dinamik matnli satrlar bilan qulay ishlash imkonini beruvchi Arduino klassi.',
    syntax: 'String xabar = "Salom Dunyo";\nxabar += " Arduino!";',
    parameters: [],
    returnValue: 'Dinamik xotirada satr obyekti',
    description:
      'String klassi matnlarni birlashtirish (`+`), qidirish (`indexOf`), qirqib olish (`substring`) va o\'lchamini bilish (`length()`) amallarini juda osonlashtiradi.',
    exampleCode: `int harorat = 25;
String hisobot = "Harorat: " + String(harorat) + " C";
Serial.println(hisobot);`,
    exampleExplanation: [
      'String obyekti o\'z ichida xotirani dinamik kengaytiradi.',
    ],
    notes: [
      'Kichik xotirali Uno/Nano da String ni haddan ko\'p ishlatish RAM parchalanib (fragmentation) qotib qolishiga olib kelishi mumkin. Professional dasturlarda char massivlari (C-string) tavsiya etiladi.',
    ],
    relatedSlugs: ['char', 'serial-print'],
  },
  {
    id: 'array',
    slug: 'array',
    name: 'Massivlar (Arrays)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Ma\'lumotlar turlari',
    summary: 'Bitta umumiy nom ostida saqlanuvchi bir xil turdagi qiymatlar to\'plami.',
    syntax: 'int pinlar[] = {2, 3, 4, 5};\nint sonlar[5]; // 5 ta elementli bo\'sh massiv\nsonlar[0] = 10; // 1-elementga qiymat berish',
    parameters: [],
    returnValue: 'Xotirada ketma-ket joylashgan elementlar bloki',
    description:
      'Bir nechta bir xil qurilmalarni (masalan 4 ta LED pinini, datchik o\'lchovlari tarixini) bitta o\'zgaruvchida saqlash va `for` sikli bilan aylanib chiqish uchun ishlatiladi.',
    exampleCode: `int ledPinlar[] = {3, 5, 6, 9};
int pinSoni = 4;

void setup() {
  for (int i = 0; i < pinSoni; i++) {
    pinMode(ledPinlar[i], OUTPUT);
  }
}`,
    exampleExplanation: [
      'Massiv indekslari doimo 0 dan boshlanadi. 4 ta elementli massiv indekslari: 0, 1, 2, 3.',
    ],
    notes: [
      'Massiv chegarasidan tashqariga chiqish (masalan 4 elementli massivning 5-elementini o\'qish) Arduino mikrokontrollerini qayta yuklanishiga olib keladi.',
    ],
    relatedSlugs: ['for', 'int'],
  },
  {
    id: 'type-conversion',
    slug: 'type-conversion',
    name: 'Tip o\'zgartirish (int(), float(), char())',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'Tip o\'zgartirish',
    summary: 'Bir ma\'lumot turini boshqa turga o\'tkazish funksiyalari.',
    syntax: 'int(x);\nfloat(x);\nchar(x);\nbyte(x);\nlong(x);',
    parameters: [
      { name: 'x', type: 'har qanday', description: 'O\'zgartirilishi kerak bo\'lgan o\'zgaruvchi yoki son' },
    ],
    returnValue: 'Yangi turdagi qiymat',
    description:
      'Kasr sonni butun songa aylantirish, ASCII kodni harfga o\'girish yoki satrni songa aylantirishda zarur.',
    exampleCode: `float pi = 3.14159;
int butunQism = int(pi); // 3 bo'ladi
char harf = char(65);    // 'A' bo'ladi`,
    exampleExplanation: [
      '`int(pi)` kasr qismini shunchaki tashlab yuboradi (yaxlitlamaydi).',
    ],
    notes: [
      'String matnini butun songa o\'girish uchun `str.toInt()`, kasr songa o\'girish uchun `str.toFloat()` ishlatiladi.',
    ],
    relatedSlugs: ['int', 'float', 'char'],
  },
  {
    id: 'const-qualifier',
    slug: 'const-qualifier',
    name: 'const (O\'zgarmaslar)',
    pillar: 'data',
    pillarLabel: 'Данные',
    category: 'O\'zgaruvchilar va modifikatorlar',
    summary: 'Dastur davomida qiymatini o\'zgartirish taqiqlangan o\'zgarmas parametr.',
    syntax: 'const int ledPin = 13;\nconst float PI_QIYMATI = 3.14159;',
    parameters: [],
    returnValue: 'O\'zgarmas qiymat',
    description:
      'Pin raqamlari, matematik o\'zgarmaslar va maksimal chegaralarni e\'lon qilishda `const` ishlatiladi. Agar dasturda adashib uning qiymatini o\'zgartirishga urinsangiz, kompilyator darhol xatolik beradi.',
    exampleCode: `const int sensorPin = A0;

void setup() {
  // sensorPin = A1; // Kompilyatsiya xatosi beradi!
}`,
    exampleExplanation: [
      '`#define` ga qaraganda `const` xavfsizroq, chunki tur tekshiruvidan (type safety) o\'tadi.',
    ],
    notes: [
      'Pin raqamlari uchun har doim `const int` ishlatish tavsiya etiladi.',
    ],
    relatedSlugs: ['int', 'high-low'],
  },

  // ==========================================
  // PILLAR 3: ФУНКЦИИ (FUNCTIONS)
  // ==========================================
  {
    id: 'pinmode',
    slug: 'pinmode',
    name: 'pinMode()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Raqamli I/O',
    summary: 'Raqamli pinni kiruvchi (INPUT), chiquvchi (OUTPUT) yoki tortuvchi (INPUT_PULLUP) rejimiga sozlaydi.',
    syntax: 'pinMode(pin, mode);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Rejimi belgilanayotgan pin raqami (masalan 13, 7, A0)' },
      { name: 'mode', type: 'uint8_t', description: 'INPUT, OUTPUT yoki INPUT_PULLUP' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino mikrokontrolleridagi pinlar ikki tomonlama ishlashi mumkin. `pinMode()` ularning yo\'nalishini belgilaydi. `INPUT` rejimida pin datchik signallarini tinglaydi. `OUTPUT` rejimida pin orqali 5V/0V kuchlanish va 20mA gacha tok chiqariladi.',
    exampleCode: `const int tugmaPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(tugmaPin, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(tugmaPin) == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}`,
    exampleExplanation: [
      'INPUT_PULLUP tashqi rezistorsiz tugmani GND ga ulash imkonini beradi.',
    ],
    notes: [
      'Analog kirish pinlari (A0-A5) ham raqamli pin sifatida ishlatilishi mumkin.',
    ],
    relatedSlugs: ['digitalwrite', 'digitalread', 'input-output'],
  },
  {
    id: 'digitalwrite',
    slug: 'digitalwrite',
    name: 'digitalWrite()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Raqamli I/O',
    summary: 'Raqamli pinga HIGH (5V / 3.3V) yoki LOW (0V / GND) kuchlanish qiymatini beradi.',
    syntax: 'digitalWrite(pin, value);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Arduino pini raqami (0-13, A0-A5)' },
      { name: 'value', type: 'uint8_t', description: 'HIGH yoki LOW' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Agar pin `OUTPUT` qilib sozlangan bo\'lsa, `digitalWrite(pin, HIGH)` ushbu pinda 5V hosil qiladi. `digitalWrite(pin, LOW)` esa pinni 0V (GND) ga tenglashtiradi.',
    exampleCode: `const int relePin = 8;

void setup() {
  pinMode(relePin, OUTPUT);
}

void loop() {
  digitalWrite(relePin, HIGH); // Releni yoqish
  delay(2000);
  digitalWrite(relePin, LOW);  // Releni o'chirish
  delay(2000);
}`,
    exampleExplanation: [
      'HIGH berilganda tranzistor, LED yoki rele ga quvvat boradi.',
      'LOW berilganda zanjir uziladi va 0V bo\'ladi.',
    ],
    notes: [
      'Agar pin OUTPUT qilinmagan bo\'lsa, digitalWrite(pin, HIGH) ichki pull-up rezistorni faollashtiradi.',
    ],
    relatedSlugs: ['pinmode', 'digitalread', 'high-low'],
  },
  {
    id: 'digitalread',
    slug: 'digitalread',
    name: 'digitalRead()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Raqamli I/O',
    summary: 'Raqamli pindagi mantiqiy darajani o\'qiydi va HIGH (1) yoki LOW (0) qaytaradi.',
    syntax: 'int qiymat = digitalRead(pin);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'O\'qilayotgan raqamli pin raqami' },
    ],
    returnValue: 'HIGH (1) yoki LOW (0)',
    description:
      'Ushbu funksiya belgilangan pindagi kuchlanishni tekshiradi. 5V platalarda kuchlanish 3V dan yuqori bo\'lsa HIGH, 1.5V dan past bo\'lsa LOW qaytaradi. Tugmalar, harakat datchiklari (PIR) va chegara kalitlarini o\'qish uchun asosiy vosita.',
    exampleCode: `const int pirPin = 4;

void setup() {
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
}

void loop() {
  int sensor = digitalRead(pirPin);
  if (sensor == HIGH) {
    Serial.println("Harakat aniqlandi!");
  }
  delay(100);
}`,
    exampleExplanation: [
      'sensor faqat 0 yoki 1 qiymatini oladi.',
    ],
    notes: [
      'Ochiq pin (havoda turgan) shovqin sababli tasodifiy qiymat qaytaradi. Bunga yo\'l qo\'ymaslik uchun INPUT_PULLUP dan foydalaning.',
    ],
    relatedSlugs: ['digitalwrite', 'pinmode', 'high-low'],
  },
  {
    id: 'analogread',
    slug: 'analogread',
    name: 'analogRead()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Analog I/O',
    summary: 'Analog pindagi kuchlanishni 10-bitli ADC yordamida o\'qiydi va 0 dan 1023 gacha son qaytaradi.',
    syntax: 'int val = analogRead(pin);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Analog pin (A0 dan A5 gacha)' },
    ],
    returnValue: '0 dan 1023 gacha butun son (int)',
    description:
      'Arduino Uno da 10-bitli ADC (analog-raqamli o\'zgartirgich) mavjud. U 0V dan 5V gacha bo\'lgan oraliqni 1024 ta qadamga bo\'ladi (aniqlik ~4.9 mV). Potentsiometrlar, fotorezistorlar, harorat va gaz datchiklarining uzluksiz kuchlanishini o\'qish uchun ishlatiladi.',
    exampleCode: `const int potPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int kod = analogRead(potPin);
  float volt = kod * (5.0 / 1023.0);

  Serial.print("Kod: ");
  Serial.print(kod);
  Serial.print(" | Kuchlanish: ");
  Serial.print(volt);
  Serial.println(" V");
  delay(250);
}`,
    exampleExplanation: [
      '0V kelganda natija 0, 2.5V kelganda ~512, 5V kelganda 1023 bo\'ladi.',
    ],
    notes: [
      'analogRead() bajarilishi uchun mikrokontroller taxminan 100 mikrosekund sarflaydi.',
    ],
    relatedSlugs: ['analogwrite', 'map'],
  },
  {
    id: 'analogwrite',
    slug: 'analogwrite',
    name: 'analogWrite()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Analog I/O',
    summary: 'PWM (Kenglik-impuls modulyatsiyasi) orqali soxta analog signal (0 - 255) chiqaradi.',
    syntax: 'analogWrite(pin, value);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'PWM belgisi (~) bor pinlar (Uno da 3, 5, 6, 9, 10, 11)' },
      { name: 'value', type: 'int', description: 'To\'ldirish koeffitsienti: 0 (o\'chiq) dan 255 (to\'liq 5V) gacha' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino sof uzluksiz analog kuchlanish chiqara olmaydi. Buning o\'rniga u yuqori tezlikda (~490 Hz) 5V va 0V ni almashtirib turadi (PWM). Bu LED yorug\'ligini xiralashtirish yoki doimiy tok (DC) motorlar tezligini sozlashda ajoyib samara beradi.',
    exampleCode: `const int ledPin = 9;

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
      'analogWrite(9, 127) vaqtning 50% qismida 5V, 50% da 0V beradi — bu o\'rtacha 2.5V effektini hosil qiladi.',
    ],
    notes: [
      'Uno da faqat 3, 5, 6, 9, 10 va 11-pinlar PWM ni qo\'llab-quvvatlaydi.',
    ],
    relatedSlugs: ['analogread', 'map', 'byte'],
  },
  {
    id: 'delay',
    slug: 'delay',
    name: 'delay()',
    pillar: 'functions',
    pillarLabel: 'Функции',
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
      'Bir vaqtning o\'zida bir nechta vazifani parallel bajarish kerak bo\'lsa, delay() o\'rniga millis() funksiyasidan foydalaning.',
    ],
    relatedSlugs: ['millis', 'delaymicroseconds'],
  },
  {
    id: 'millis',
    slug: 'millis',
    name: 'millis()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Vaqt (Time)',
    summary: 'Arduino platasi yoqilgan paytdan boshlab o\'tgan millisekundlar sonini qaytaradi.',
    syntax: 'unsigned long time = millis();',
    parameters: [],
    returnValue: 'Plata yoqilgandan beri o\'tgan millisekundlar (unsigned long)',
    description:
      '`millis()` — ko\'p vazifalilik (multitasking) va bloklanmagan (non-blocking) taymerlar uchun asosiy vositadir. U dasturni to\'xtatib qo\'ymaydi. Taxminan 50 kundan keyin bu hisoblagich to\'lib, yana 0 ga qaytadi (overflow).',
    exampleCode: `unsigned long avvalgiVaqt = 0;
const long interval = 1000;
int ledHolati = LOW;

void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  unsigned long hozir = millis();
  if (hozir - avvalgiVaqt >= interval) {
    avvalgiVaqt = hozir;
    ledHolati = (ledHolati == LOW) ? HIGH : LOW;
    digitalWrite(13, ledHolati);
  }
  // Bu yerda boshqa datchiklar bloklanmasdan o'qilaveradi!
}`,
    exampleExplanation: [
      '`hozir - avvalgiVaqt >= interval` formulasi orqali bloklanmagan taymer yasaladi.',
    ],
    notes: [
      'millis() natijasi har doim `unsigned long` turidagi o\'zgaruvchida saqlanishi shart!',
    ],
    relatedSlugs: ['delay', 'micros', 'unsigned-long'],
  },
  {
    id: 'tone-notone',
    slug: 'tone-notone',
    name: 'tone() / noTone()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Kengaytirilgan I/O',
    summary: 'Pyezo dinamik (buzzer) orqali belgilangan chastotada tovush hosil qiladi va to\'xtatadi.',
    syntax: 'tone(pin, frequency);\ntone(pin, frequency, duration);\nnoTone(pin);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Buzzer ulangan raqamli pin' },
      { name: 'frequency', type: 'unsigned int', description: 'Tovush chastotasi Gersda (Hz), masalan 440 (La notasi)' },
      { name: 'duration', type: 'unsigned long', description: 'Ixtiyoriy: tovush davomiyligi millisekundlarda' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Pyezo dinamikda 50% li to\'rtburchak to\'lqin hosil qiladi. Musiqa ohanglari, signalizatsiya va ogohlantirish tovushlari yaratish uchun ishlatiladi.',
    exampleCode: `const int buzzerPin = 8;

void setup() {
  tone(buzzerPin, 1000, 500); // 1000 Hz chastotada 500 ms signal berish
}

void loop() {
  tone(buzzerPin, 262); // Do notasi (262 Hz)
  delay(300);
  noTone(buzzerPin);
  delay(300);
}`,
    exampleExplanation: [
      'noTone() ovozni zudlik bilan to\'xtatadi.',
    ],
    notes: [
      'tone() funksiyasi ishlatilganda 3 va 11-pinlardagi PWM ishlashdan to\'xtaydi (chunki ular bir xil taymerdan foydalanadi).',
    ],
    relatedSlugs: ['analogwrite', 'delay'],
  },
  {
    id: 'pulsein',
    slug: 'pulsein',
    name: 'pulseIn()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Kengaytirilgan I/O',
    summary: 'Pinga kelgan impulsning davomiyligini mikrosekundlarda o\'lchaydi.',
    syntax: 'unsigned long davomiylik = pulseIn(pin, value, timeout);',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Impuls o\'lchanayotgan pin (masalan HC-SR04 Echo pini)' },
      { name: 'value', type: 'uint8_t', description: 'O\'lchanadigan impuls turi: HIGH yoki LOW' },
      { name: 'timeout', type: 'unsigned long', description: 'Ixtiyoriy: maksimal kutish vaqti mikrosekundda (standart 1 soniya)' },
    ],
    returnValue: 'Impuls davomiyligi mikrosekundda (unsigned long)',
    description:
      'Pin ko\'rsatilgan holatga (masalan HIGH) o\'tishini kutadi, o\'tgach vaqtni sanashni boshlaydi va yana LOW ga qaytguncha o\'tgan vaqtni qaytaradi. HC-SR04 ultrasonik datchigida masofani aniqlashda eng muhim funksiya hisoblanadi.',
    exampleCode: `const int trigPin = 9;
const int echoPin = 10;

void loop() {
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long vaqt = pulseIn(echoPin, HIGH);
  float masofa = vaqt * 0.0343 / 2.0; // Santimetrda
  Serial.println(masofa);
  delay(100);
}`,
    exampleExplanation: [
      'Ovoz to\'lqinining borib-qaytish vaqti mikrosekundlarda o\'lchanadi.',
    ],
    notes: [
      'Agar belgilangan vaqt ichida impuls kelmasa, pulseIn() 0 qaytaradi.',
    ],
    relatedSlugs: ['micros', 'delay'],
  },
  {
    id: 'map',
    slug: 'map',
    name: 'map()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Matematika va Trigonometriya',
    summary: 'Qiymatni bir raqamli diapazondan boshqa diapazonga mutanosib ravishda o\'tkazadi.',
    syntax: 'long yangi = map(value, fromLow, fromHigh, toLow, toHigh);',
    parameters: [
      { name: 'value', type: 'long', description: 'O\'zgartirilayotgan boshlang\'ich son' },
      { name: 'fromLow', type: 'long', description: 'Boshlang\'ich oraliqning pastki chegarasi' },
      { name: 'fromHigh', type: 'long', description: 'Boshlang\'ich oraliqning yuqori chegarasi' },
      { name: 'toLow', type: 'long', description: 'Yangi oraliqning pastki chegarasi' },
      { name: 'toHigh', type: 'long', description: 'Yangi oraliqning yuqori chegarasi' },
    ],
    returnValue: 'Yangi oraliqqa mutanosib ko\'chirilgan son (long)',
    description:
      'Potentsiometr 0 dan 1023 gacha son beradi, servomotor esa 0 dan 180 gradusgacha burchak qabul qiladi. `map()` bu hisobni bir qatorda yechadi: `int burchak = map(pot, 0, 1023, 0, 180);`.',
    exampleCode: `int pot = analogRead(A0); // 0 dan 1023
int pwm = map(pot, 0, 1023, 0, 255); // 0 dan 255 gacha
analogWrite(9, pwm);`,
    exampleExplanation: [
      '0 qiymat 0 ga, 512 qiymat ~127 ga, 1023 qiymat 255 ga mutanosib o\'tkaziladi.',
    ],
    notes: [
      '`map()` qiymatni chegaralamaydi! Agar son fromHigh dan oshsa, natija ham toHigh dan oshadi. Qat\'iy cheklash uchun `constrain()` bilan birga ishlatiladi.',
    ],
    relatedSlugs: ['constrain', 'analogread', 'analogwrite'],
  },
  {
    id: 'constrain',
    slug: 'constrain',
    name: 'constrain()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Matematika va Trigonometriya',
    summary: 'Raqamni belgilangan minimal va maksimal chegaralar orasida cheklab ushlab turadi.',
    syntax: 'int natija = constrain(x, min, max);',
    parameters: [
      { name: 'x', type: 'son', description: 'Tekshirilayotgan son' },
      { name: 'min', type: 'son', description: 'Ruxsat etilgan eng kichik chegara' },
      { name: 'max', type: 'son', description: 'Ruxsat etilgan eng katta chegara' },
    ],
    returnValue: 'Agar x < min bo\'lsa min; agar x > max bo\'lsa max; aks holda x',
    description:
      'Motor tezligi yoki PWM qiymati xavfli parametrlardan oshib ketmasligini ta\'minlash uchun sonni [min, max] chegarasida ushlab qoladi.',
    exampleCode: `int tezlik = analogRead(A0) / 4;
tezlik = constrain(tezlik, 50, 200); // 50 dan kam bo'lmaydi, 200 dan oshmaydi
analogWrite(motorPin, tezlik);`,
    exampleExplanation: [
      'Agar tezlik 20 bo\'lsa 50 ga, 240 bo\'lsa 200 ga tenglashtiriladi.',
    ],
    notes: [
      'min har doim max dan kichik bo\'lishi shart.',
    ],
    relatedSlugs: ['map', 'min-max-abs'],
  },
  {
    id: 'min-max-abs',
    slug: 'min-max-abs',
    name: 'min() / max() / abs()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Matematika va Trigonometriya',
    summary: 'Eng kichik, eng katta va modul (absolyut) qiymatni hisoblovchi matematik funksiyalar.',
    syntax: 'min(x, y);\nmax(x, y);\nabs(x);',
    parameters: [
      { name: 'x, y', type: 'har qanday son', description: 'Solishtirilayotgan qiymatlar' },
    ],
    returnValue: 'Tegishli natija',
    description:
      '`min()` ikkita sondan kichigini, `max()` kattasini, `abs()` esa sonning ishorasiz musbat modulini qaytaradi.',
    exampleCode: `int farq = abs(oldHarorat - yangiHarorat); // Harorat o'zgarish kattaligi
int kichik = min(5, 12); // 5`,
    exampleExplanation: [
      'abs(-10) natijasi 10 bo\'ladi.',
    ],
    notes: [
      'Funksiya ichida boshqa amallarni bajarmang: `min(a++, 10)` xato natija berishi mumkin.',
    ],
    relatedSlugs: ['constrain', 'map'],
  },
  {
    id: 'random',
    slug: 'random',
    name: 'random() / randomSeed()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Tasodifiy sonlar',
    summary: 'Tasodifiy (psevdotasodifiy) sonlarni hosil qiladi va boshlang\'ich generatorni sozlaydi.',
    syntax: 'long son = random(max);\nlong son = random(min, max);\nrandomSeed(seed);',
    parameters: [
      { name: 'min', type: 'long', description: 'Pastki chegara (shu son ham kiradi)' },
      { name: 'max', type: 'long', description: 'Yuqori chegara (bu son kirmaydi, max-1 gacha)' },
      { name: 'seed', type: 'unsigned long', description: 'Generator boshlang\'ich qadami (masalan analogRead(A0))' },
    ],
    returnValue: 'Tasodifiy butun son (long)',
    description:
      'O\'yinlar, miltillovchi chiroq effektlari, tasodifiy kechikishlar uchun ishlatiladi. `randomSeed(analogRead(A0))` ochiq turgan analog pindagi shovqinni o\'qib, har safar plata yoqilganda turli xil tasodifiy ketma-ketlik hosil qilishini ta\'minlaydi.',
    exampleCode: `void setup() {
  Serial.begin(9600);
  // Ochiq A0 pinidagi shovqin yordamida generatorni aralashtiramiz
  randomSeed(analogRead(A0));
}

void loop() {
  // 1 dan 6 gacha tasodifiy son (O'yin soqqasi)
  int soqqa = random(1, 7);
  Serial.println(soqqa);
  delay(1000);
}`,
    exampleExplanation: [
      'random(1, 7) aynan 1, 2, 3, 4, 5 yoki 6 sonlaridan birini beradi.',
    ],
    notes: [
      'randomSeed ishlatilmasa, Arduino har safar qayta yuklanganda aynan bir xil tasodifiy sonlar zanjirini takrorlaydi.',
    ],
    relatedSlugs: ['analogread'],
  },
  {
    id: 'attachinterrupt',
    slug: 'attachinterrupt',
    name: 'attachInterrupt()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Tashqi uzilishlar (Interrupts)',
    summary: 'Tashqi pin signali o\'zgarganda asosiy dasturni to\'xtatib, tezkor uzilish funksiyasini (ISR) chaqiradi.',
    syntax: 'attachInterrupt(digitalPinToInterrupt(pin), ISR, mode);\ndetachInterrupt(digitalPinToInterrupt(pin));',
    parameters: [
      { name: 'pin', type: 'uint8_t', description: 'Uzilishni qo\'llovchi pin (Uno da 2 yoki 3-pinlar)' },
      { name: 'ISR', type: 'funksiya', description: 'Uzilish sodir bo\'lganda chaqiriladigan maxsus funksiya' },
      { name: 'mode', type: 'rejim', description: 'LOW, CHANGE, RISING (0 dan 1 ga), yoki FALLING (1 dan 0 ga)' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Enkoderlar (tezlik o\'lchagich), favqulodda to\'xtatish tugmalari yoki yuqori tezlikdagi datchiklar uchun hayotiy zarur vosita. Arduino asosiy `loop()` da nima bilan band bo\'lishidan qat\'i nazar, uzilish kelgan paytda asosiy kodni bir zumga to\'xtatib, ISR funksiyasini chaqiradi.',
    exampleCode: `const byte interruptPin = 2;
volatile int hisoblagich = 0;

void setup() {
  pinMode(interruptPin, INPUT_PULLUP);
  // 2-pinda signal 1 dan 0 ga tushganda (tugma bosilganda) impulsSanoq chaqiriladi
  attachInterrupt(digitalPinToInterrupt(interruptPin), impulsSanoq, FALLING);
}

void loop() {
  Serial.println(hisoblagich);
  delay(1000);
}

void impulsSanoq() {
  hisoblagich++; // Juda qisqa va tez bajarilishi shart!
}`,
    exampleExplanation: [
      'ISR ichida o\'zgartiriladigan o\'zgaruvchilar `volatile` kalit so\'zi bilan e\'lon qilinishi shart.',
    ],
    notes: [
      'ISR funksiyasi ichida `delay()` ishlamaydi, `millis()` esa o\'smay turadi. Uzilish funksiyasi iloji boricha tez va ixcham bo\'lishi shart.',
    ],
    relatedSlugs: ['digitalread', 'pinmode'],
  },
  {
    id: 'serial-begin',
    slug: 'serial-begin',
    name: 'Serial.begin()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Serial aloqa',
    summary: 'Ketma-ket (UART) ma\'lumot uzatish tezligini (baud rate) belgilaydi va portni ochadi.',
    syntax: 'Serial.begin(speed);',
    parameters: [
      { name: 'speed', type: 'long', description: 'Tezlik soniyadagi bitlarda: 9600, 19200, 57600, 115200 va h.k.' },
    ],
    returnValue: 'Hech narsa qaytarmaydi (void)',
    description:
      'Arduino bilan kompyuter o\'rtasida USB orqali ma\'lumot almashish uchun `setup()` ichida `Serial.begin()` chaqirilishi shart. Eng keng tarqalgan standart tezlik — 9600 bod.',
    exampleCode: `void setup() {
  Serial.begin(9600);
  Serial.println("Kompyuter bilan aloqa o'rnatildi!");
}`,
    exampleExplanation: [
      'Arduino IDE ning "Serial Monitor" oynasidagi tezlik ham aynan shu 9600 ga sozlangan bo\'lishi kerak.',
    ],
    notes: [
      'ESP8266 va ESP32 uchun odatda tezroq 115200 bod tezligi tanlanadi.',
    ],
    relatedSlugs: ['serial-print', 'serial-read-available'],
  },
  {
    id: 'serial-print',
    slug: 'serial-print',
    name: 'Serial.print() / Serial.println()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Serial aloqa',
    summary: 'Ma\'lumotlarni (matn, son, datchik qiymati) kompyuter ekraniga (Serial Monitor) chiqaradi.',
    syntax: 'Serial.print(val);\nSerial.println(val);',
    parameters: [
      { name: 'val', type: 'har qanday', description: 'Uzatilayotgan qiymat (satr, son, float, char va h.k.)' },
    ],
    returnValue: 'Yuborilgan baytlar soni (size_t)',
    description:
      '`Serial.print()` qiymatni bir xil qatorda chiqaradi. `Serial.println()` esa qiymatdan so\'ng yangi qatorga o\'tadi.',
    exampleCode: `int sensor = 450;
float volt = 2.2;

void loop() {
  Serial.print("Datchik: ");
  Serial.print(sensor);
  Serial.print(" | Volt: ");
  Serial.println(volt); // Yangi qatorga o'tadi
  delay(1000);
}`,
    exampleExplanation: [
      'Serial.println orqali terminalda chiroyli ustunli ma\'lumotlar hosil qilinadi.',
    ],
    notes: [
      'Float sonlarda kasr xonalarini ko\'rsatish mumkin: `Serial.println(1.2345, 2)` -> "1.23".',
    ],
    relatedSlugs: ['serial-begin', 'serial-read-available'],
  },
  {
    id: 'serial-read-available',
    slug: 'serial-read-available',
    name: 'Serial.available() / Serial.read()',
    pillar: 'functions',
    pillarLabel: 'Функции',
    category: 'Serial aloqa',
    summary: 'Kompyuter yoki Bluetooth dan kelgan ma\'lumotlar mavjudligini tekshiradi va 1 bayt o\'qiydi.',
    syntax: 'int baytlarSoni = Serial.available();\nint belgi = Serial.read();',
    parameters: [],
    returnValue: 'available() kutayotgan baytlar sonini; read() birinchi kelgan belgi baytini (-1 agar bo\'sh bo\'lsa)',
    description:
      'Kompyuter klaviaturasidan yoki smartfondan buyruq yuborilganda ularni qabul qilish uchun qo\'llaniladi.',
    exampleCode: `void loop() {
  if (Serial.available() > 0) {
    char buyruq = Serial.read();
    if (buyruq == '1') {
      digitalWrite(13, HIGH);
      Serial.println("Chiroq yoqildi");
    } else if (buyruq == '0') {
      digitalWrite(13, LOW);
      Serial.println("Chiroq o'chirildi");
    }
  }
}`,
    exampleExplanation: [
      '`Serial.available() > 0` buferda yangi xat kelganligini bildiradi.',
    ],
    notes: [
      'Butun matnni birdaniga o\'qish uchun `Serial.readStringUntil(\'\\n\')` funksiyasi ham mavjud.',
    ],
    relatedSlugs: ['serial-begin', 'serial-print', 'char'],
  },
];
