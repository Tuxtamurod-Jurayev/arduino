import { DocSection } from '@/types';

export const docsData: DocSection[] = [
  {
    id: 'getting-started',
    slug: 'getting-started',
    title: 'Tezkor Boshlash: Arduino Ekotizimi',
    readTime: '5 daqiqa',
    description:
      'Arduino platformasi bilan tanishuv: mikrokontrollerlar arxitekturasi, dasturiy ta\'minot va birinchi elektron qurilmani yaratish asoslari.',
    topics: [
      {
        title: 'Arduino o\'zi nima?',
        description: 'Arduino — mustaqil ravishda elektron qurilmalarni yaratishga mo\'ljallangan ochiq (open-source) platforma.',
        badge: 'Asoslar',
      },
      {
        title: 'Hardware va Software tushunchasi',
        description: 'Plata (Atmega mikrokontrolleri, stabilizator, kiritish-chiqarish portlari) va Arduino IDE dasturiy muhiti.',
      },
      {
        title: 'Mikrokontroller qismlari',
        description: 'Yadro (CPU), Flesh-xotira (32KB), SRAM tezkor xotira (2KB), EEPROM sozlamalar xotirasi (1KB) va GPIO portlari.',
      },
    ],
    content: `## Arduino platformasi haqida to'liq ma'lumot

**Arduino** — mustaqil ravishda elektron qurilmalarni yoki ularning prototip va maketlarini yaratishga mo'ljallangan platforma. U o'z ichiga apparat vositasi (hardware — Atmega mikrokontrolleri asosidagi modul-konstruktor, tajriba olib borish platasi, "плата отладки") va dasturiy (software — Arduino IDE) vositalar majmuasini oladi.

### Mikrokontrollerning asosiy funksional bloklari:
1. **Yadro (Protsessor)** — barcha funksional bloklarni boshqaradi va kod buyruqlarini bajaradi.
2. **Flesh-xotira (Flash)** — yuklangan dastur kodi (sketch) saqlanadigan xotira. Tok uzilganda ham o'chib ketmaydi.
3. **SRAM (Tezkor xotira)** — o'zgaruvchilar va hisoblash natijalari vaqtincha saqlanadigan joy.
4. **EEPROM** — dastur sozlamalari saqlanadigan energiya mustaqil xotira.
5. **GPIO (General Purpose Input-Output)** — datchiklar va motorlarni ulash uchun umumiy raqamli va analog pinlar.

### Bog'lanish interfeyslari:
- **UART (Serial):** Kompyuter va Bluetooth bilan aloqa (D0-RX, D1-TX).
- **I2C:** Atigi 2 ta simda (SDA, SCL) 128 tagacha datchik va displeylarni ulash.
- **SPI:** Yuqori tezlikdagi sinxron ma'lumot almashish (MOSI, MISO, SCK).`,
  },
  {
    id: 'ide-setup',
    slug: 'ide-setup',
    title: 'Arduino IDE ni O\'rnatish va Sozlash',
    readTime: '6 daqiqa',
    description:
      'Windows, macOS va Linux operatsion tizimlari uchun rasmiy Arduino IDE 2.0 ni yuklab olish va dastlabki sozlash bo\'yicha yo\'riqnoma.',
    topics: [
      {
        title: 'Arduino IDE 2.0 yuklab olish',
        description: 'Rasmiy arduino.cc saytidan eng so\'nggi versiyani yuklab olish.',
        badge: 'O\'rnatish',
      },
      {
        title: 'Interfeys bilan tanishish',
        description: 'Tekshirish (Verify), Yuklash (Upload), Serial Monitor va Library Manager tugmalari.',
      },
      {
        title: 'Plata va COM portni tanlash',
        description: 'Tools -> Board va Tools -> Port menyularidan to\'g\'ri moslamalarni tanlash.',
      },
    ],
    content: `## Arduino IDE ni o'rnatish bosqichlari

Arduino mikrokontrolleriga dastur yozish uchun maxsus **Arduino IDE** (Integrated Development Environment) dasturidan foydalaniladi.

### 1-qadam: Yuklab olish
1. Rasmiy veb-sayt: [arduino.cc/en/software](https://www.arduino.cc/en/software) sahifasiga o'ting.
2. Operatsion tizimingizni tanlang (masalan, Windows 10/11 x64 installer).
3. "Just Download" tugmasini bosib yuklab oling va o'rnating.

### 2-qadam: Platani ulash va sozlash
1. Arduino platasini USB kabel orqali kompyuterga ulang.
2. Arduino IDE dasturini oching.
3. Yuqori paneldan: **Tools -> Board -> Arduino AVR Boards -> Arduino Uno** ni tanlang.
4. **Tools -> Port** bo'limidan paydo bo'lgan portni tanlang (masalan: **COM3** yoki **COM4**).

> **Eslatma:** Agar Port bo'limi nofaol (kulrang) bo'lsa yoki platangiz ko'rinmasa, platangizdagi CH340 chipi uchun drayver o'rnatishingiz lozim.`,
  },
  {
    id: 'ch340-driver',
    slug: 'ch340-driver',
    title: 'CH340 Drayverini O\'rnatish Qo\'llanmasi',
    readTime: '4 daqiqa',
    description:
      'O\'zbekiston bozoridagi ko\'plab arzon Arduino Uno va Nano klon platalarini kompyuter tanishi uchun zarur CH341SER drayverini o\'rnatish.',
    topics: [
      {
        title: 'CH340 chipi nima?',
        description: 'USB signallarini UART ga o\'giruvchi tejamkor mikrosxema.',
        badge: 'Drayver',
      },
      {
        title: 'CH341SER.EXE ni o\'rnatish',
        description: 'Bitta klik bilan drayverni tizimga joylash ketma-ketligi.',
      },
      {
        title: 'Device Manager da tekshirish',
        description: 'Kompyuter boshqaruvida "USB-SERIAL CH340 (COM...)" paydo bo\'lganini tekshirish.',
      },
    ],
    content: `## CH340 USB-UART drayverini o'rnatish

Original Arduino platalari qimmat bo'lgani sababli, o'quvchilar va havaskorlar orasida WCH kompaniyasining **CH340G / CH340C** chipiga ega arzon klon platalar keng tarqalgan.

### O'rnatish ketma-ketligi:
1. **CH341SER.ZIP** arxivini yuklab oling va oching.
2. **SETUP.EXE** faylini administrator nomidan ishga tushiring.
3. Ko'k rangli **"INSTALL"** tugmasini bosing.
4. "The driver is successfully pre-installed in advance!" xabari chiqqach "OK" ni bosing.
5. Arduino platasini USB ga qayta ulang.
6. Kompyuterning "Device Manager" (Диспетчер устройств) bo'limida **"Ports (COM & LPT)"** ostida **"USB-SERIAL CH340 (COM3)"** paydo bo'ladi.

Endi Arduino IDE dasturiga kirib, ushbu port orqali kod yuklashingiz mumkin!`,
  },
  {
    id: 'first-sketch-blink',
    slug: 'first-sketch-blink',
    title: 'Birinchi Dastur: "Blink" (LED Miltillatish)',
    readTime: '5 daqiqa',
    description:
      'Elektronikaning "Salom Dunyo" (Hello World) si bo\'lgan Blink dasturi: kod tahlili, 13-pin va sikl mantig\'i.',
    topics: [
      {
        title: 'Blink kodi tahlili',
        description: 'pinMode, digitalWrite va delay buyruqlarining o\'zaro ishlashi.',
        badge: 'Amaliyot',
      },
      {
        title: 'Platadagi 13-pin LEDi',
        description: 'Qo\'shimcha simlarsiz to\'g\'ridan-to\'g\'ri platada sinash.',
      },
      {
        title: 'Kodni plataga yuklash',
        description: 'Upload tugmasi, TX/RX chiroqlari miltillashi va natija.',
      },
    ],
    content: `## Birinchi Dastur: "Blink"

Har qanday dasturlash tilida "Salom Dunyo" bo'lganidek, robototexnikada birinchi qadam — bu platadagi sinov LEDini yoqish va o'chirishdir.

### Blink kodi:
\`\`\`cpp
void setup() {
  // 13-pinni chiquvchi signal rejimiga sozlaymiz
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH); // 13-pinga 5V beramiz (LED yonadi)
  delay(1000);            // 1000 ms = 1 soniya kutamiz

  digitalWrite(13, LOW);  // 13-pinni 0V ga tushiramiz (LED o'chadi)
  delay(1000);            // 1 soniya kutamiz
}
\`\`\`

### Yuklash jarayoni:
1. Arduino IDE yuqori chap burchagidagi strelka belgisini (**Upload**) bosing.
2. Dastur avval xatoliklarni tekshiradi (**Compiling sketch**).
3. So'ngra platadagi TX va RX svetodiodlari tez-tez yonib-o'chadi (**Uploading**).
4. Pastda "Done uploading" yozuvi chiqqach, platangizdagi sariq "L" belgili LED har bir soniyada miltillay boshlaydi!`,
  },
  {
    id: 'library-manager',
    slug: 'library-manager',
    title: 'Kutubxonalar (Libraries) bilan Ishlash',
    readTime: '6 daqiqa',
    description:
      'Arduino kutubxonalari nima, ularni qidirib topish, Library Manager orqali o\'rnatish va ZIP fayldan import qilish.',
    topics: [
      {
        title: 'Kutubxona o\'zi nima?',
        description: 'Datchik yoki modul bilan ishlashni osonlashtiruvchi tayyor dasturiy ta\'minot.',
        badge: 'Kutubxona',
      },
      {
        title: 'Library Manager orqali o\'rnatish',
        description: 'Ctrl+Shift+I orqali kutubxona nomini qidirib o\'rnatish.',
      },
      {
        title: '.ZIP kutubxonani qo\'shish',
        description: 'GitHub dan yuklab olingan arxivlarni Arduino IDE ga ulash.',
      },
    ],
    content: `## Arduino kutubxonalarini o'rnatish

Kutubxonalar (Libraries) — bu murakkab datchiklar (OLED ekranlar, datchiklar, servomotorlar) bilan bir necha qator kodda ishlash imkonini beruvchi tayyor funksiyalar to'plamidir.

### 1-usul: Library Manager (Tavsiya etiladi)
1. Arduino IDE menyusidan: **Sketch -> Include Library -> Manage Libraries...** (yoki chap panelda kitobcha belgisi).
2. Qidiruv maydoniga kerakli modul nomini yozing (masalan: \`LiquidCrystal I2C\`, \`DHT sensor\`, \`Adafruit SSD1306\`).
3. Topilgan kutubxona yonidagi **"Install"** tugmasini bosing.
4. Agar qo'shimcha bog'liq kutubxonalarni o'rnatishni so'rasa (**Install all**) ni tanlang.

### 2-usul: ZIP arxivdan o'rnatish
1. GitHub dan kutubxonaning \`.zip\` faylini yuklab oling.
2. Arduino IDE da: **Sketch -> Include Library -> Add .ZIP Library...** ni bosing.
3. Yuklab olingan faylni tanlang. Kutubxona avtomatik o'rnatiladi.`,
  },
  {
    id: 'troubleshooting',
    slug: 'troubleshooting',
    title: 'Keng Tarqalgan Xatolar va Yechimlar',
    readTime: '7 daqiqa',
    description:
      'avrdude: ser_open(), programmer is not responding xatolari, bootloader muammolari va ularni 100% yechish usullari.',
    topics: [
      {
        title: 'avrdude: ser_open() xatosi',
        description: 'COM port boshqa dastur (Serial Monitor) tomonidan band qilingan.',
        badge: 'Yechimlar',
      },
      {
        title: 'stk500_recv() xatosi',
        description: 'Nano platasida "Old Bootloader" ni tanlash yoki kabelni almashtirish.',
      },
      {
        title: 'Datchik ko\'rsatkichi sakrab turishi',
        description: 'Ochiq qolgan kirish pinlariga pull-up rezistor qo\'yish zaruriyati.',
      },
    ],
    content: `## Keng tarqalgan xatoliklar va ularning yechimlari

### 1. "avrdude: ser_open(): can't open device"
- **Sababi:** Tanlangan COM port mavjud emas yoki u boshqa dastur (boshqa Serial monitor, Cura, 3D printer dasturi) tomonidan band qilib qo'yilgan.
- **Yechimi:** 
  1. Serial monitor oynasini yoping.
  2. USB kabelni sug'urib qaytadan ulang.
  3. **Tools -> Port** bo'limida to'g'ri COM port tanlanganini tekshiring.

### 2. "avrdude: stk500_recv(): programmer is not responding"
- **Sababi:** Arduino Nano klonlarida bootloader versiyasi mos kelmasligi.
- **Yechimi:**
  1. **Tools -> Processor** bo'limiga kiring.
  2. **"ATmega328P (Old Bootloader)"** parametrini tanlang va qayta yuklang.

### 3. "D0 (RX) va D1 (TX) pinlariga qurilma ulanishi"
- **Sababi:** Agar 0 va 1-pinlarga Bluetooth yoki datchik ulangan bo'lsa, USB orqali dastur yuklanmay qoladi.
- **Yechimi:** Dastur yuklanayotgan paytda 0 va 1-pindagi simlarni vaqtincha uzib turing, yuklanib bo'lgach qayta ulang.`,
  },
];
