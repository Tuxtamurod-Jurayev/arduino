import { DeviceItem } from '@/types/device';

export const sensorsData: DeviceItem[] = [
  // ─────────────────────────────────────────────
  // 1. HC-SR04 — Ultrasonik Masofa Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-001',
    slug: 'hc-sr04',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'HC-SR04 Ultrasonik Masofa Datchigi',
      ru: 'HC-SR04 Ультразвуковой датчик расстояния',
      en: 'HC-SR04 Ultrasonic Distance Sensor',
    },
    shortDesc: {
      uz: "Ultratovush to'lqinlari yordamida 2 sm dan 400 sm gacha bo'lgan masofani aniq o'lchaydi.",
      ru: 'Измеряет расстояние от 2 до 400 см с помощью ультразвуковых волн.',
      en: 'Measures distance from 2 cm to 400 cm using ultrasonic sound waves.',
    },
    overview: {
      uz: "HC-SR04 — eng keng tarqalgan Arduino datchiglaridan biri. U ultratovush impulslarini yuboradi va nishondan qaytgan aks-sadoni kutadi. Yuborilgan va qabul qilingan to'lqin o'rtasidagi vaqt bo'yicha havodagi tovush tezligiga (340 m/s) asoslanib masofa hisoblanadi. Robotlar, to'siqlardan saqlanish tizimlari, avtomatik eshiklar va daraxt o'lchagilarda keng qo'llaniladi.",
      ru: 'HC-SR04 — один из самых популярных датчиков для Arduino. Он излучает ультразвуковые импульсы и ждёт отражённого эха от объекта. По времени между отправкой и получением сигнала вычисляется расстояние на основе скорости звука (340 м/с). Применяется в роботах, системах обхода препятствий, автоматических дверях.',
      en: 'HC-SR04 is one of the most popular Arduino sensors. It emits ultrasonic pulses and waits for the reflected echo. Distance is calculated based on the time difference and speed of sound (340 m/s). Widely used in robots, obstacle avoidance, and automation.',
    },
    howItWorks: {
      uz: "Trig oyoqchasiga kamida 10 mikrosekundlik HIGH signali beriladi. Datchik avtomatik 40 kHz chastotada 8 ta tovush to'lqinini uzatadi. Echo pini nishondan qaytgan to'lqin kelguncha HIGH holatida turadi. Shu HIGH vaqtini `pulseIn()` funksiyasi bilan o'lchab, `masofa = (vaqt × 0.0343) / 2` formulasi bilan santimetrga o'giramiz.",
      ru: 'На вывод Trig подаётся импульс HIGH длительностью не менее 10 мкс. Датчик автоматически излучает 8 ультразвуковых волн на 40 кГц. Вывод Echo остаётся HIGH до получения отражённого сигнала. Время измеряется функцией `pulseIn()`, расстояние: `distance = (duration × 0.0343) / 2`.',
      en: 'A HIGH pulse of at least 10 µs is sent to the Trig pin. The sensor automatically sends 8 ultrasonic bursts at 40 kHz. Echo pin stays HIGH until the reflected signal is received. Time is measured with `pulseIn()`, distance: `(duration × 0.0343) / 2`.',
    },
    useCases: {
      uz: 'Robotlar uchun to\'siqlardan saqlanish | Avtomatik eshik va parda tizimlari | Tank darajasini o\'lchash | Parking sensori | Qo\'l yuvinish avtomati',
      ru: 'Объездка препятствий для роботов | Автоматические двери | Измерение уровня жидкости | Парковочный датчик | Бесконтактная мойка рук',
      en: 'Robot obstacle avoidance | Automatic doors | Liquid level measurement | Parking sensor | Touchless hand wash',
    },
    voltage: '5V DC',
    current: '15 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/HC-SR04-Ultrasonic-Sensor-Pinout.jpg',
    datasheetUrl: 'https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf',
    specs: [
      { label: 'Ishchi kuchlanish', value: '5V DC' },
      { label: 'Ishchi tok', value: '15 mA' },
      { label: "O'lchash diapazoni", value: '2 sm - 400 sm' },
      { label: "O'lchash aniqligi", value: '0.3 sm' },
      { label: "O'lchash burchagi", value: '15°' },
      { label: 'Trig signal davomiyligi', value: '10 µs TTL' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V musbat quvvat kiritiladi' },
      { pin: '2', name: 'TRIG', type: 'Digital', description: 'Trigger — impuls yuborish signali (Arduino OUTPUT)' },
      { pin: '3', name: 'ECHO', type: 'Digital', description: 'Echo — qaytgan signal (Arduino INPUT)' },
      { pin: '4', name: 'GND', type: 'GND', description: "Umumiy manfiy yer (Ground)" },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulanish', ru: 'Подключение к Arduino Uno', en: 'Wiring to Arduino Uno' },
      description: {
        uz: "Datchikni to'g'ridan-to'g'ri Arduino Uno platasining raqamli pinlariga ulang:",
        ru: 'Подключите датчик к цифровым пинам Arduino Uno:',
        en: 'Connect the sensor directly to digital pins of Arduino Uno:',
      },
      connections: [
        { from: 'HC-SR04 VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'HC-SR04 TRIG', to: 'Arduino D9', note: 'Sariq sim (chiquvchi)' },
        { from: 'HC-SR04 ECHO', to: 'Arduino D10', note: 'Yashil sim (kiruvchi)' },
        { from: 'HC-SR04 GND', to: 'Arduino GND', note: 'Qora sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'Masofani Serial Monitorga chiqarish', ru: 'Вывод расстояния в Serial Monitor', en: 'Print Distance to Serial Monitor' },
      description: {
        uz: "Har 200 ms da masofani santimetrda o'lchaydi va kompyuterga uzatadi.",
        ru: 'Каждые 200 мс измеряет расстояние в сантиметрах и отправляет на компьютер.',
        en: 'Measures distance in centimeters every 200ms and sends to computer.',
      },
      code: `const int trigPin = 9;
const int echoPin = 10;

long duration;
float distanceCm;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.println("HC-SR04 tayyor!");
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distanceCm = duration * 0.0343 / 2.0;

  Serial.print("Masofa: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  delay(200);
}`,
      explanation: [
        { uz: "9-pin Trig (OUTPUT), 10-pin Echo (INPUT) sifatida sozlanadi.", ru: "Пин 9 — Trig (OUTPUT), пин 10 — Echo (INPUT).", en: "Pin 9 is Trig (OUTPUT), pin 10 is Echo (INPUT)." },
        { uz: "Trig piniga 10 mks HIGH berilganda modul ultratovush to'lqinini uzatadi.", ru: "Импульс HIGH 10 мкс запускает ультразвуковой сигнал.", en: "A 10µs HIGH pulse triggers the ultrasonic burst." },
        { uz: "0.0343 — tovushning sm/mikrosekunddagi tezligi. 2 ga bo'linadi chunki to'lqin borib-qaytadi.", ru: "0.0343 — скорость звука в см/мкс. Делим на 2, так как сигнал проходит путь туда и обратно.", en: "0.0343 is speed of sound in cm/µs. Divide by 2 since signal travels both ways." },
      ],
    },
    troubleshooting: [
      { issue: 'Natija doim 0 yoki 1100 sm', cause: "Echo yoki Trig pinlari adashib ulangan.", solution: "9 va 10 pinlar o'rnini tekshiring." },
      { issue: "Yumshoq buyumlar aniqlanmayapti", cause: "Ultratovush yumshoq yuzalarda yutiladi.", solution: "Qattiq va tekis yuzalarda sinab ko'ring." },
    ],
    relatedSlugs: ['dht11', 'pir-hc-sr501'],
    tags: ['masofa', 'ultrasonic', 'robot', 'proximity', 'HC-SR04'],
  },

  // ─────────────────────────────────────────────
  // 2. DHT11 — Harorat va Namlik Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-002',
    slug: 'dht11',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'DHT11 Harorat va Namlik Datchigi',
      ru: 'DHT11 Датчик температуры и влажности',
      en: 'DHT11 Temperature & Humidity Sensor',
    },
    shortDesc: {
      uz: "0°C dan +50°C gacha harorat va 20%–80% namlikni raqamli signal orqali o'lchaydi.",
      ru: 'Измеряет температуру от 0°C до +50°C и влажность 20–80% через цифровой сигнал.',
      en: 'Measures temperature 0–50°C and humidity 20–80% via digital signal.',
    },
    overview: {
      uz: "DHT11 — Arduino loyihalarida eng ko'p ishlatiladigan harorat-namlik datchigi. Bitta signal sim orqali raqamli ma'lumot uzatadi. Ob-havo stansiyasi, issiqxona nazorati, konditsioner boshqaruvi kabi loyihalarda keng qo'llaniladi. Arzon narxi va oddiy ulanishi uni boshlang'ichlar uchun ideal qiladi.",
      ru: 'DHT11 — один из самых распространённых датчиков температуры и влажности для Arduino. Передаёт цифровые данные по одному проводу. Применяется в метеостанциях, теплицах, управлении климатом.',
      en: 'DHT11 is one of the most used temperature-humidity sensors for Arduino. It sends digital data over a single wire. Used in weather stations, greenhouses, and climate control.',
    },
    howItWorks: {
      uz: "DHT11 ichida kapasitiv namlik sensori va termistor mavjud. Arduino kutubxona (DHT.h) orqali bitta DATA pinidan harorat va namlik ma'lumotini oladi. Har o'lchash orasida kamida 1 soniya kutish kerak.",
      ru: 'DHT11 содержит ёмкостной датчик влажности и термистор. Arduino считывает данные через библиотеку DHT.h по одному пину DATA. Между измерениями нужно ждать не менее 1 секунды.',
      en: 'DHT11 contains a capacitive humidity sensor and a thermistor. Arduino reads data via DHT.h library through a single DATA pin. At least 1 second delay required between readings.',
    },
    useCases: {
      uz: "Ob-havo stansiyasi | Issiqxona harorat nazorati | Uy avtomatikasi | Konditsioner boshqaruvi | OLED displey bilan ma'lumot ko'rsatish",
      ru: 'Метеостанция | Контроль температуры в теплице | Умный дом | Управление кондиционером | Отображение данных на OLED',
      en: 'Weather station | Greenhouse temperature control | Home automation | AC control | OLED data display',
    },
    voltage: '3.3V – 5V DC',
    current: '2.5 mA (o\'lchash paytida)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/DHT11-Sensor-Pinout.jpg',
    datasheetUrl: 'https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf',
    specs: [
      { label: 'Harorat diapazoni', value: '0°C – 50°C' },
      { label: 'Harorat aniqligi', value: '±2°C' },
      { label: 'Namlik diapazoni', value: '20% – 80% RH' },
      { label: 'Namlik aniqligi', value: '±5% RH' },
      { label: 'Namuna olish tezligi', value: '1 Hz (sekundiga 1 marta)' },
      { label: 'Signal turi', value: 'Raqamli (1-Wire)' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V quvvat' },
      { pin: '2', name: 'DATA', type: 'Digital', description: "Ma'lumot pini — Arduino raqamli pinga ulanadi (4.7kΩ pull-up)" },
      { pin: '3', name: 'NC', type: 'Special', description: "Ulangan emas (Not Connected)" },
      { pin: '4', name: 'GND', type: 'GND', description: "Umumiy yer" },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulanish', ru: 'Подключение к Arduino Uno', en: 'Wiring to Arduino Uno' },
      description: {
        uz: "DATA va VCC o'rtasiga 4.7kΩ yoki 10kΩ pull-up rezistor ulash tavsiya etiladi:",
        ru: 'Рекомендуется подключить подтягивающий резистор 4.7кОм или 10кОм между DATA и VCC:',
        en: 'A 4.7kΩ or 10kΩ pull-up resistor between DATA and VCC is recommended:',
      },
      connections: [
        { from: 'DHT11 VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'DHT11 DATA', to: 'Arduino D2', note: 'Sariq sim + 4.7kΩ pull-up' },
        { from: 'DHT11 GND', to: 'Arduino GND', note: 'Qora sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'Harorat va namlikni o\'lchash', ru: 'Измерение температуры и влажности', en: 'Read Temperature & Humidity' },
      description: {
        uz: "DHT.h kutubxonasini o'rnatib, harorat va namlikni o'lchang.",
        ru: 'Установите библиотеку DHT.h и считывайте температуру и влажность.',
        en: 'Install DHT.h library and read temperature and humidity.',
      },
      code: `#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("DHT11 tayyor!");
}

void loop() {
  delay(2000);

  float humidity = dht.readHumidity();
  float tempC    = dht.readTemperature();

  if (isnan(humidity) || isnan(tempC)) {
    Serial.println("O'qish xatosi!");
    return;
  }

  Serial.print("Namlik: ");
  Serial.print(humidity);
  Serial.print("% | Harorat: ");
  Serial.print(tempC);
  Serial.println(" *C");
}`,
      explanation: [
        { uz: "#include <DHT.h> — rasmiy DHT kutubxonasini ulaydi. Library Manager'dan o'rnating.", ru: "#include <DHT.h> подключает официальную библиотеку DHT. Установите через Library Manager.", en: "#include <DHT.h> includes the official DHT library. Install via Library Manager." },
        { uz: "dht.readHumidity() va dht.readTemperature() funksiyalari namlik va haroratni qaytaradi.", ru: "dht.readHumidity() и dht.readTemperature() возвращают влажность и температуру.", en: "dht.readHumidity() and dht.readTemperature() return humidity and temperature." },
        { uz: "isnan() — o'qish xatosi bo'lganda NaN (Not a Number) qaytadi, shuni tekshiramiz.", ru: "isnan() проверяет, не является ли значение NaN (ошибка считывания).", en: "isnan() checks if the reading failed (returns NaN)." },
      ],
    },
    troubleshooting: [
      { issue: "NaN yoki -999 qaytmoqda", cause: "Pull-up rezistor yo'q yoki ulangan emas.", solution: "DATA va VCC orasiga 4.7kΩ rezistor qo'ying." },
      { issue: "Harorat noto'g'ri ko'rsatmoqda", cause: "Datchik quyosh nuri yoki issiqlik manbai yaqinida.", solution: "Datchikni ochiq havoga joylashtiring." },
    ],
    relatedSlugs: ['hc-sr04', 'oled-096-i2c', 'bmp280'],
    tags: ['harorat', 'namlik', 'temperature', 'humidity', 'DHT11', 'ob-havo'],
  },

  // ─────────────────────────────────────────────
  // 3. PIR HC-SR501 — Harakat Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-003',
    slug: 'pir-hc-sr501',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'PIR HC-SR501 Harakat Datchigi',
      ru: 'PIR HC-SR501 Датчик движения',
      en: 'PIR HC-SR501 Motion Sensor',
    },
    shortDesc: {
      uz: "Infraqizil nurlanish yordamida odamlar va hayvonlarning harakatini 7 metrgacha aniqlaydi.",
      ru: 'Обнаруживает движение людей и животных на расстоянии до 7 метров с помощью ИК-излучения.',
      en: 'Detects motion of people and animals up to 7 meters using infrared radiation.',
    },
    overview: {
      uz: "PIR (Passive Infrared) datchigi — odam yoki hayvon havoga issiqlik chiqarganda hosil bo'ladigan infraqizil nurlanish o'zgarishini sezadi. Xavfsizlik tizimlari, avtomatik yorug'lik va simsiz signal tizimlarida keng qo'llaniladi. HC-SR501 modelida sezgirlik va vaqt sozlamalari uchun 2 ta potentsiometr mavjud.",
      ru: 'PIR датчик реагирует на изменения инфракрасного излучения от человека или животного. Широко используется в охранных системах, автоматическом освещении и беспроводных сигнализациях. Модель HC-SR501 имеет 2 потенциометра для настройки чувствительности и задержки.',
      en: 'PIR sensor detects changes in infrared radiation from humans or animals. Used in security systems, automatic lighting, and alarm systems. HC-SR501 has 2 potentiometers for sensitivity and delay adjustment.',
    },
    howItWorks: {
      uz: "Ikkita pyroelektrik sensor harorat o'zgarishini farqlaydi. Harakatlanayotgan issiq jism (odam) sensorda turli darajada issiqlik hosil qiladi — bu signal sifatida qayd etiladi. OUT pini HIGH ga o'tadi va sozlangan vaqt davomida HIGH holatida qoladi.",
      ru: 'Два пироэлектрических сенсора фиксируют разницу в тепловом излучении. Движущийся объект создаёт разное тепловое воздействие на каждый из сенсоров — это регистрируется как сигнал. Вывод OUT переходит в HIGH и остаётся в этом состоянии в течение заданного времени.',
      en: 'Two pyroelectric sensors detect temperature differences. A moving warm body creates different heat levels on each sensor — this is registered as a signal. OUT pin goes HIGH and stays HIGH for the configured duration.',
    },
    useCases: {
      uz: "Avtomatik yorug'lik tizimi | Uy xavfsizlik signali | Smart eshik ochuvchi | Odamlarni sanash tizimi | Energiya tejash tizimi",
      ru: 'Автоматическое освещение | Охранная сигнализация | Умная дверь | Счётчик людей | Энергосберегающая система',
      en: 'Automatic lighting | Home security alarm | Smart door | People counter | Energy saving system',
    },
    voltage: '4.5V – 20V DC',
    current: '< 60 µA (standby)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/PIR-Sensor-Pinout.jpg',
    datasheetUrl: 'https://www.mpja.com/download/31227sc.pdf',
    specs: [
      { label: 'Aniqlash masofasi', value: '3 – 7 metr (sozlanadi)' },
      { label: 'Aniqlash burchagi', value: '120°' },
      { label: 'Ishchi kuchlanish', value: '4.5V – 20V' },
      { label: 'Chiqish signali', value: 'HIGH (3.3V)' },
      { label: 'Kechikish vaqti', value: '5 – 200 soniya (sozlanadi)' },
      { label: 'Isitish vaqti', value: '30 – 60 soniya' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '4.5V – 20V quvvat (Arduino 5V yoki tashqi)' },
      { pin: '2', name: 'OUT', type: 'Digital', description: 'Chiqish — harakat aniqlansa HIGH (3.3V), aks holda LOW' },
      { pin: '3', name: 'GND', type: 'GND', description: "Umumiy yer" },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulanish', ru: 'Подключение к Arduino Uno', en: 'Wiring to Arduino Uno' },
      description: {
        uz: "Juda oddiy ulanish — faqat 3 ta sim kerak:",
        ru: 'Очень простое подключение — нужно всего 3 провода:',
        en: 'Very simple connection — only 3 wires needed:',
      },
      connections: [
        { from: 'PIR VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'PIR OUT', to: 'Arduino D7', note: "Yashil sim (harakat signali)" },
        { from: 'PIR GND', to: 'Arduino GND', note: 'Qora sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'Harakat aniqlash va LED yoqish', ru: 'Обнаружение движения и включение LED', en: 'Motion Detection with LED' },
      description: {
        uz: "Harakat aniqlanganda 13-pindagi LEDni yoqadi va Serial Monitorga xabar chiqaradi.",
        ru: 'При обнаружении движения включает LED на пине 13 и выводит сообщение в Serial Monitor.',
        en: 'When motion is detected, turns on LED on pin 13 and prints to Serial Monitor.',
      },
      code: `const int pirPin = 7;
const int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.println("PIR datchigi tayyor...");
  delay(30000); // isitish vaqti
  Serial.println("Tayyor! Harakat kuting...");
}

void loop() {
  int motion = digitalRead(pirPin);

  if (motion == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Harakat aniqlandi!");
  } else {
    digitalWrite(ledPin, LOW);
  }

  delay(500);
}`,
      explanation: [
        { uz: "delay(30000) — datchik isishi uchun 30 soniya kutiladi, aks holda yolg'on signal beradi.", ru: "delay(30000) — ждём 30 секунд для прогрева датчика, иначе будут ложные срабатывания.", en: "delay(30000) waits 30 seconds for sensor warm-up, otherwise false triggers occur." },
        { uz: "digitalRead(pirPin) == HIGH bo'lsa harakat aniqlangan.", ru: "digitalRead(pirPin) == HIGH означает обнаружение движения.", en: "digitalRead(pirPin) == HIGH means motion detected." },
      ],
    },
    troubleshooting: [
      { issue: "Doimiy HIGH signal", cause: "Isitish vaqti o'tmagan yoki sezgirlik juda yuqori.", solution: "30 soniya kuting va sezgirlik potentsiometrini sozlang." },
      { issue: "Harakat aniqlanmayapti", cause: "Aniqlash burchagi yoki masofa sozlamasi noto'g'ri.", solution: "Modul orqasidagi ikkala potentsiometrni tekshiring." },
    ],
    relatedSlugs: ['hc-sr04', 'relay-5v'],
    tags: ['harakat', 'motion', 'PIR', 'xavfsizlik', 'infrared'],
  },

  // ─────────────────────────────────────────────
  // 4. MQ-2 — Gaz va Tutun Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-004',
    slug: 'mq-2',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'MQ-2 Gaz va Tutun Datchigi',
      ru: 'MQ-2 Датчик газа и дыма',
      en: 'MQ-2 Gas and Smoke Sensor',
    },
    shortDesc: {
      uz: "LPG, propan, vodorod, metan va tutunni aniqlaydi. Yong'in va gaz signal tizimlarida ishlatiladi.",
      ru: 'Обнаруживает LPG, пропан, водород, метан и дым. Применяется в пожарных и газовых сигнализациях.',
      en: 'Detects LPG, propane, hydrogen, methane and smoke. Used in fire and gas alarm systems.',
    },
    overview: {
      uz: "MQ-2 — qizdirilgan kimyoviy sensor bo'lib, havoda gaz konsentratsiyasiga qarab elektrik qarshiligi o'zgaradi. Analog chiqish (A0) va raqamli chiqish (D0) pinlari mavjud. D0 pini potentsiometr orqali sozlanadi va gaz miqdori chegaradan oshganda LOW ga tushadi.",
      ru: 'MQ-2 — нагреваемый химический датчик, электрическое сопротивление которого изменяется в зависимости от концентрации газа. Имеет аналоговый (A0) и цифровой (D0) выходы. Порог срабатывания цифрового выхода настраивается потенциометром.',
      en: 'MQ-2 is a heated chemical sensor whose electrical resistance changes with gas concentration. Has analog (A0) and digital (D0) outputs. The digital threshold is adjustable via potentiometer.',
    },
    howItWorks: {
      uz: "Sensor ichida qizdirilgan SnO2 (qalay oksidi) material mavjud. Gaz bo'lganda SnO2 ning elektr o'tkazuvchanligi oshadi — bu analog signal sifatida o'lchanadi. Yuqori gaz konsentratsiyasi = yuqori analog qiymat (0-1023).",
      ru: 'Внутри датчика находится нагреваемый материал SnO2 (оксид олова). При наличии газа проводимость SnO2 увеличивается — это фиксируется как аналоговый сигнал. Высокая концентрация газа = высокое аналоговое значение (0-1023).',
      en: 'Inside the sensor is heated SnO2 (tin oxide) material. When gas is present, SnO2 conductivity increases — this is measured as an analog signal. High gas concentration = high analog value (0-1023).',
    },
    useCases: {
      uz: "Uy yong'in signali | Gaz sizish detektori | Sanoat xavfsizligi | Smart oshxona | CO detektori",
      ru: 'Домашняя пожарная сигнализация | Детектор утечки газа | Промышленная безопасность | Умная кухня',
      en: 'Home fire alarm | Gas leak detector | Industrial safety | Smart kitchen | CO detector',
    },
    voltage: '5V DC',
    current: '150 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/MQ2-Gas-Sensor-Pinout.jpg',
    datasheetUrl: 'https://www.pololu.com/file/0J309/MQ2.pdf',
    specs: [
      { label: 'Aniqlash gazlar', value: 'LPG, propan, vodorod, metan, tutun' },
      { label: 'Konsentratsiya diapazoni', value: '300 – 10000 ppm' },
      { label: 'Isitish kuchi', value: '800 mW' },
      { label: 'Isitish vaqti', value: '20 soniya (20 daqiqa keyin to\'liq aniq)' },
      { label: 'Chiqish', value: 'Analog (0-1023) + Raqamli (HIGH/LOW)' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: "Umumiy yer" },
      { pin: '3', name: 'D0', type: 'Digital', description: 'Raqamli chiqish — gaz aniqlansa LOW (potentsiometr bilan sozlash)' },
      { pin: '4', name: 'A0', type: 'Analog', description: 'Analog chiqish — gaz konsentratsiyasiga mos qiymat (0-1023)' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan ulanish', ru: 'Подключение к Arduino Uno', en: 'Wiring to Arduino Uno' },
      description: {
        uz: "Analog va raqamli chiqishlarni birga ishlatish mumkin:",
        ru: 'Можно использовать как аналоговый, так и цифровой выходы:',
        en: 'Both analog and digital outputs can be used together:',
      },
      connections: [
        { from: 'MQ-2 VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'MQ-2 GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'MQ-2 A0', to: 'Arduino A0', note: "Analog ma'lumot" },
        { from: 'MQ-2 D0', to: 'Arduino D8', note: 'Raqamli signal (ixtiyoriy)' },
      ],
    },
    sampleCode: {
      title: { uz: 'Gaz darajasini o\'lchash va signal', ru: 'Измерение уровня газа и сигнализация', en: 'Gas Level Measurement & Alarm' },
      description: {
        uz: "Analog qiymatni o'qib, chegaradan oshsa buzzer yoqiladi.",
        ru: 'Считывает аналоговое значение и включает зуммер при превышении порога.',
        en: 'Reads analog value and activates buzzer when threshold exceeded.',
      },
      code: `const int gasSensor = A0;
const int buzzerPin = 8;
const int threshold = 400; // sozlash mumkin

void setup() {
  Serial.begin(9600);
  pinMode(buzzerPin, OUTPUT);
  Serial.println("MQ-2 isiyapti... (20s kuting)");
  delay(20000);
  Serial.println("Tayyor!");
}

void loop() {
  int gasValue = analogRead(gasSensor);

  Serial.print("Gaz darajasi: ");
  Serial.println(gasValue);

  if (gasValue > threshold) {
    Serial.println("!!! XAVF: Gaz aniqlandi !!!");
    digitalWrite(buzzerPin, HIGH);
  } else {
    digitalWrite(buzzerPin, LOW);
  }

  delay(500);
}`,
      explanation: [
        { uz: "analogRead(gasSensor) 0-1023 orasida qiymat qaytaradi. Yuqori = ko'proq gaz.", ru: "analogRead() возвращает значение 0-1023. Выше = больше газа.", en: "analogRead() returns 0-1023. Higher = more gas." },
        { uz: "threshold = 400 — bu qiymatni siz vaziyatga qarab o'zgartirasiz.", ru: "threshold = 400 — этот порог настраивается по ситуации.", en: "threshold = 400 — adjust this value based on your situation." },
      ],
    },
    troubleshooting: [
      { issue: "Doimiy yuqori qiymat", cause: "Sensor hali isigancha isimagan.", solution: "20 daqiqa kutib, yangi sinab ko'ring." },
      { issue: "Gaz bo'lsa ham aniqlamayapti", cause: "Potentsiometr noto'g'ri sozlangan.", solution: "D0 piniga LED ulab, potentsiometrni asta burung." },
    ],
    relatedSlugs: ['pir-hc-sr501', 'relay-5v'],
    tags: ['gaz', 'tutun', 'xavfsizlik', 'MQ2', 'smoke', 'fire'],
  },

  // ─────────────────────────────────────────────
  // 5. BMP280 — Bosim va Harorat Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-005',
    slug: 'bmp280',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'BMP280 Bosim va Harorat Datchigi',
      ru: 'BMP280 Датчик давления и температуры',
      en: 'BMP280 Pressure & Temperature Sensor',
    },
    shortDesc: {
      uz: "I2C/SPI orqali atmosfera bosimi (300-1100 hPa) va haroratni yuqori aniqlikda o'lchaydi.",
      ru: 'Измеряет атмосферное давление (300–1100 гПа) и температуру с высокой точностью по I2C/SPI.',
      en: 'Measures atmospheric pressure (300–1100 hPa) and temperature with high accuracy via I2C/SPI.',
    },
    overview: {
      uz: "BMP280 — Bosch kompaniyasining professional bosim va harorat sensori. Atmosfera bosimi o'lchanishi orqali balandlikni (dengiz sathidan) hisoblab chiqarish mumkin. Drone va UAV lar uchun, ob-havo stansiyasi va alpinistik asboblarda keng qo'llaniladi.",
      ru: 'BMP280 — профессиональный датчик давления и температуры от Bosch. По атмосферному давлению можно вычислить высоту над уровнем моря. Используется в дронах, метеостанциях и туристическом снаряжении.',
      en: 'BMP280 is a professional pressure and temperature sensor from Bosch. Atmospheric pressure allows altitude calculation above sea level. Used in drones, weather stations, and hiking equipment.',
    },
    howItWorks: {
      uz: "Piezoresistiv bosim sensori atmosfera bosimini o'lchaydi. I2C protokoli orqali (manzil 0x76 yoki 0x77) Arduino ga ma'lumot uzatadi. Bosch BMP280 kutubxonasi orqali bosim (Pa), harorat (°C) va balandlik (m) olinadi.",
      ru: 'Пьезорезистивный датчик давления измеряет атмосферное давление. Данные передаются по протоколу I2C (адрес 0x76 или 0x77). Библиотека Bosch BMP280 позволяет получить давление (Па), температуру (°C) и высоту (м).',
      en: 'Piezoresistive pressure sensor measures atmospheric pressure. Data transmitted via I2C protocol (address 0x76 or 0x77). Bosch BMP280 library provides pressure (Pa), temperature (°C) and altitude (m).',
    },
    useCases: {
      uz: "Drone balandlik nazorati | Ob-havo stansiyasi | Alpinistik GPS asbob | Metrologik qurilmalar | Smart uy",
      ru: 'Высотомер для дрона | Метеостанция | Туристический GPS | Метрологические приборы',
      en: 'Drone altitude control | Weather station | Hiking altimeter | Meteorological devices',
    },
    voltage: '1.8V – 3.6V (modul: 3.3V – 5V)',
    current: '2.7 µA (normal rejim)',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/BMP280-Pinout.jpg',
    datasheetUrl: 'https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmp280-ds001.pdf',
    specs: [
      { label: 'Bosim diapazoni', value: '300 – 1100 hPa' },
      { label: 'Bosim aniqligi', value: '±1 hPa' },
      { label: 'Harorat diapazoni', value: '-40°C – +85°C' },
      { label: 'Harorat aniqligi', value: '±1°C' },
      { label: 'Aloqa protokoli', value: 'I2C (0x76/0x77) yoki SPI' },
      { label: 'Balandlik aniqligi', value: '±1 metr' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V (modul) quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: "Umumiy yer" },
      { pin: '3', name: 'SDA', type: 'I2C', description: "I2C ma'lumot liniyasi (Arduino A4)" },
      { pin: '4', name: 'SCL', type: 'I2C', description: 'I2C takt liniyasi (Arduino A5)' },
      { pin: '5', name: 'CSB', type: 'Special', description: 'Chip Select (I2C uchun VCC ga ulash)' },
      { pin: '6', name: 'SDO', type: 'Special', description: 'I2C manzilni tanlash: GND=0x76, VCC=0x77' },
    ],
    wiring: {
      title: { uz: 'Arduino Uno bilan I2C ulanish', ru: 'Подключение I2C к Arduino Uno', en: 'I2C Wiring to Arduino Uno' },
      description: {
        uz: "I2C protokoli faqat 2 ta sim bilan ishlaydi (SDA va SCL):",
        ru: 'Протокол I2C работает всего с 2 проводами (SDA и SCL):',
        en: 'I2C protocol works with just 2 wires (SDA and SCL):',
      },
      connections: [
        { from: 'BMP280 VCC', to: 'Arduino 3.3V', note: 'Qizil sim' },
        { from: 'BMP280 GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'BMP280 SDA', to: 'Arduino A4 (SDA)', note: 'Ko\'k sim' },
        { from: 'BMP280 SCL', to: 'Arduino A5 (SCL)', note: 'Sariq sim' },
      ],
    },
    sampleCode: {
      title: { uz: 'Bosim, harorat va balandlikni o\'lchash', ru: 'Измерение давления, температуры и высоты', en: 'Read Pressure, Temperature & Altitude' },
      description: {
        uz: "Adafruit BMP280 kutubxonasini o'rnatib ishga tushiring.",
        ru: 'Установите библиотеку Adafruit BMP280 и запустите.',
        en: 'Install Adafruit BMP280 library and run.',
      },
      code: `#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(9600);

  if (!bmp.begin(0x76)) {
    Serial.println("BMP280 topilmadi! Ulanishni tekshiring.");
    while (1);
  }
  Serial.println("BMP280 tayyor!");
}

void loop() {
  float temp     = bmp.readTemperature();
  float pressure = bmp.readPressure() / 100.0F; // hPa
  float altitude = bmp.readAltitude(1013.25);   // dengiz sathi

  Serial.print("Harorat: "); Serial.print(temp); Serial.println(" *C");
  Serial.print("Bosim: ");   Serial.print(pressure); Serial.println(" hPa");
  Serial.print("Balandlik: "); Serial.print(altitude); Serial.println(" m");
  Serial.println("---");

  delay(2000);
}`,
      explanation: [
        { uz: "bmp.begin(0x76) — I2C manzilini belgilaydi. SDO → GND bo'lsa 0x76, VCC bo'lsa 0x77.", ru: "bmp.begin(0x76) задаёт I2C адрес. SDO → GND = 0x76, VCC = 0x77.", en: "bmp.begin(0x76) sets I2C address. SDO → GND = 0x76, VCC = 0x77." },
        { uz: "readPressure() Paskal qaytaradi. 100 ga bo'lib hPa (millibar) ga o'tkaziladi.", ru: "readPressure() возвращает Паскали. Делим на 100 для гПа (миллибар).", en: "readPressure() returns Pascals. Divide by 100 for hPa (millibar)." },
      ],
    },
    troubleshooting: [
      { issue: "BMP280 topilmadi xatosi", cause: "I2C manzil noto'g'ri (0x76 vs 0x77).", solution: "SDO pinini GND yoki VCC ga ulashni sinab ko'ring." },
      { issue: "Noto'g'ri balandlik qiymati", cause: "Dengiz sathi bosimi noto'g'ri.", solution: "readAltitude() ga mahalliy bosim qiymatini kiriting." },
    ],
    relatedSlugs: ['dht11', 'oled-096-i2c'],
    tags: ['bosim', 'balandlik', 'pressure', 'altitude', 'BMP280', 'ob-havo'],
  },

  // ─────────────────────────────────────────────
  // 6. Tuproq Namlik Datchigi
  // ─────────────────────────────────────────────
  {
    id: 'sensor-006',
    slug: 'soil-moisture',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: 'Tuproq Namlik Datchigi (Capacitive)',
      ru: 'Датчик влажности почвы (Ёмкостной)',
      en: 'Soil Moisture Sensor (Capacitive)',
    },
    shortDesc: {
      uz: "Tuproq yoki o'simlik substratidagi namlik darajasini analog signal orqali o'lchaydi.",
      ru: 'Измеряет уровень влажности почвы или субстрата растений через аналоговый сигнал.',
      en: 'Measures soil or plant substrate moisture level via analog signal.',
    },
    overview: {
      uz: "Tuproq namlik datchigi o'simliklarni avtomatik sug'orish tizimlarida asosiy element hisoblanadi. Kapasitiv versiyasi metall elektrodlar o'rniga dielektrik o'zgarishni o'lchaydi — shuning uchun zanglash muammosi yo'q va uzoq umr ko'radi. Analog A0 pini namlik darajasiga mos 0-1023 qiymat beradi.",
      ru: 'Датчик влажности почвы — основной элемент систем автополива. Ёмкостная версия измеряет диэлектрическую проницаемость вместо металлических электродов, поэтому не ржавеет и служит дольше. Аналоговый A0 возвращает значение 0–1023, соответствующее уровню влажности.',
      en: 'Soil moisture sensor is the key component of automated irrigation systems. Capacitive version measures dielectric changes instead of metal electrodes — no corrosion and longer life. Analog A0 returns 0-1023 corresponding to moisture level.',
    },
    howItWorks: {
      uz: "Tuproqdagi suv miqdori elektrni o'tkazuvchanligini o'zgartiradi (yoki kapasitiv versiyada — dielektrik konstantani). Bu o'zgarish analog kuchlanishga aylanadi va Arduino ning analogRead() funksiyasi bilan o'lchanadi. Quruq tuproq = yuqori qiymat (1023 ga yaqin), ho'l tuproq = past qiymat.",
      ru: 'Количество воды в почве изменяет её проводимость (или диэлектрическую постоянную для ёмкостного датчика). Это изменение преобразуется в аналоговое напряжение и считывается через analogRead(). Сухая почва = высокое значение (≈1023), влажная = низкое.',
      en: "Water in soil changes its conductivity (or dielectric constant for capacitive). This change converts to analog voltage read by analogRead(). Dry soil = high value (≈1023), wet soil = low value.",
    },
    useCases: {
      uz: "Avtomatik sug'orish tizimi | Smart issiqxona | O'simlik nazorati | Qishloq xo'jaligi IoT | Uy bog'chasi",
      ru: 'Система автополива | Умная теплица | Мониторинг растений | Сельскохозяйственный IoT | Домашний сад',
      en: 'Automatic irrigation | Smart greenhouse | Plant monitoring | Agricultural IoT | Home garden',
    },
    voltage: '3.3V – 5V DC',
    current: '5 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/Capacitive-Soil-Moisture-Sensor-Pinout.jpg',
    specs: [
      { label: "O'lchash diapazoni", value: '0% – 100% namlik' },
      { label: 'Analog chiqish', value: '0 – 1023 (ADC)' },
      { label: 'Ishchi kuchlanish', value: '3.3V – 5V' },
      { label: 'Sensor turi', value: 'Kapasitiv (zangsiz)' },
    ],
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V – 5V quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: "Umumiy yer" },
      { pin: '3', name: 'AOUT', type: 'Analog', description: 'Analog chiqish — namlik darajasiga mos qiymat' },
    ],
    wiring: {
      title: { uz: 'Arduino bilan ulanish', ru: 'Подключение к Arduino', en: 'Wiring to Arduino' },
      description: { uz: "3 ta sim bilan ulaning:", ru: 'Подключите 3 провода:', en: 'Connect with 3 wires:' },
      connections: [
        { from: 'Sensor VCC', to: 'Arduino 5V', note: 'Qizil sim' },
        { from: 'Sensor GND', to: 'Arduino GND', note: 'Qora sim' },
        { from: 'Sensor AOUT', to: 'Arduino A0', note: 'Analog signal' },
      ],
    },
    sampleCode: {
      title: { uz: "Tuproq namligini o'lchash va sug'orish", ru: 'Измерение влажности почвы и полив', en: 'Soil Moisture Reading & Irrigation' },
      description: {
        uz: "Namlik past bo'lganda suv nasosini (rele orqali) yoqadi.",
        ru: 'При низкой влажности включает насос воды (через реле).',
        en: 'When moisture is low, activates water pump (via relay).',
      },
      code: `const int sensorPin  = A0;
const int relayPin   = 7;   // Nasos releyi
const int dryLimit   = 700; // Quruq chegarasi (sozlash mumkin)
const int wetLimit   = 300; // Ho'l chegarasi

void setup() {
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Relay o'chiq
}

void loop() {
  int moisture = analogRead(sensorPin);

  Serial.print("Namlik (raw): ");
  Serial.println(moisture);

  if (moisture > dryLimit) {
    Serial.println("Tuproq QURUQ — Sug'orish boshlanmoqda...");
    digitalWrite(relayPin, LOW);  // Nasosni yoq
    delay(3000);
    digitalWrite(relayPin, HIGH); // Nasosni o'chir
  } else if (moisture < wetLimit) {
    Serial.println("Tuproq HO'L — Sug'orish shart emas.");
  }

  delay(5000);
}`,
      explanation: [
        { uz: "analogRead() 0-1023 qaytaradi. Quruq = 700+, ho'l = 300-.", ru: "analogRead() возвращает 0-1023. Сухо = 700+, влажно = 300-.", en: "analogRead() returns 0-1023. Dry = 700+, wet = 300-." },
        { uz: "digitalWrite(relayPin, LOW) — Ko'pchilik relelerda LOW = yoniq.", ru: "digitalWrite(relayPin, LOW) — у большинства реле LOW = включено.", en: "digitalWrite(relayPin, LOW) — most relays are active LOW." },
      ],
    },
    troubleshooting: [
      { issue: "Doimiy bir xil qiymat", cause: "Sensor tuproqqa to'g'ri kiritilmagan.", solution: "Sensor elektrodlarini tuproqqa to'liq kiritib sinab ko'ring." },
    ],
    relatedSlugs: ['relay-5v', 'dht11'],
    tags: ['tuproq', 'namlik', 'sug\'orish', 'soil', 'irrigation', 'o\'simlik'],
  },

  // ─────────────────────────────────────────────
  // 7. LDR — Yorug'lik Datchigi (Fotorezistor)
  // ─────────────────────────────────────────────
  {
    id: 'sensor-007',
    slug: 'ldr-fotorezistor',
    type: 'sensor',
    category: 'Sensorlar',
    name: {
      uz: "LDR Fotorezistor (Yorug'lik Datchigi)",
      ru: 'LDR Фоторезистор (Датчик света)',
      en: 'LDR Photoresistor (Light Sensor)',
    },
    shortDesc: {
      uz: "Yorug'lik miqdoriga qarab elektr qarshiligi o'zgaradigan passiv komponent. Kun/tun avtomatlashtirishda ishlatiladi.",
      ru: 'Пассивный компонент, сопротивление которого меняется в зависимости от освещённости. Используется для автоматизации освещения.',
      en: "Passive component whose resistance changes based on light intensity. Used for day/night automation.",
    },
    overview: {
      uz: "LDR (Light Dependent Resistor) — fotorezistor bo'lib, yorug'lik tushganda qarshiligi pasayadi (1-10 kΩ), qorong'ida esa oshadi (1 MΩ gacha). Voltage divider sxemasi orqali Arduino ning analog kirishiga ulanadi. Kechqurun avtomatik chiroq, quyosh paneli yo'naltirgichi va smart parda tizimlarida keng qo'llaniladi.",
      ru: 'LDR (Light Dependent Resistor) — фоторезистор, сопротивление которого уменьшается при освещении (1-10 кОм) и растёт в темноте (до 1 МОм). Подключается к аналоговому входу Arduino через схему делителя напряжения. Применяется в ночном освещении, трекерах солнечной панели, умных шторах.',
      en: 'LDR (Light Dependent Resistor) — resistance decreases in light (1-10 kΩ) and increases in darkness (up to 1 MΩ). Connected to Arduino analog input via voltage divider. Used in automatic night lights, solar trackers, smart curtains.',
    },
    howItWorks: {
      uz: "LDR va 10kΩ rezistor voltage divider sifatida ulanadi. Yorug'lik bo'lganda LDR qarshiligi pasayadi → A0 pini yuqori kuchlanish o'lchaydi. Qorong'ida LDR qarshiligi oshadi → A0 pini past kuchlanish o'lchaydi.",
      ru: 'LDR и резистор 10 кОм включаются как делитель напряжения. При свете сопротивление LDR падает → A0 измеряет высокое напряжение. В темноте сопротивление LDR растёт → A0 измеряет низкое напряжение.',
      en: 'LDR and 10kΩ resistor form a voltage divider. In light, LDR resistance drops → A0 measures higher voltage. In darkness, LDR resistance rises → A0 measures lower voltage.',
    },
    useCases: {
      uz: "Avtomatik ko'cha chiroqlari | Quyosh paneli tracker | Smart parda | Fotoapparat avtomatlashtirilgan chaqiruv | Ekran yorqinligi nazorati",
      ru: 'Автоматическое уличное освещение | Трекер солнечной панели | Умные шторы | Управление яркостью экрана',
      en: 'Automatic street lights | Solar panel tracker | Smart curtains | Screen brightness control',
    },
    voltage: '5V (voltage divider orqali)',
    current: '< 1 mA',
    imageUrl: 'https://components101.com/sites/default/files/component_pin/LDR-Pinout.jpg',
    specs: [
      { label: "Qorong'i qarshilik", value: '1 MΩ' },
      { label: "Yorug' qarshilik", value: '1 – 10 kΩ' },
      { label: 'Chiqish turi', value: 'Analog (voltage divider)' },
      { label: 'Ishchi kuchlanish', value: '5V DC' },
    ],
    pinout: [
      { pin: '1', name: 'A', type: 'Special', description: '5V ga yoki GND ga ulanadi (voltage divider)' },
      { pin: '2', name: 'B', type: 'Analog', description: "Analog signal pini — 10kΩ orqali GND ga, Arduino A0 ga ham" },
    ],
    wiring: {
      title: { uz: 'Arduino bilan Voltage Divider ulanishi', ru: 'Подключение делителя напряжения к Arduino', en: 'Voltage Divider Wiring to Arduino' },
      description: {
        uz: "LDR va 10kΩ rezistorni ketma-ket ulab, o'rta nuqtani A0 ga ulang:",
        ru: 'Подключите LDR и резистор 10 кОм последовательно, среднюю точку — к A0:',
        en: 'Connect LDR and 10kΩ resistor in series, middle point to A0:',
      },
      connections: [
        { from: 'LDR 1-uchi', to: 'Arduino 5V', note: 'Yuqori qo\'l' },
        { from: 'LDR 2-uchi + 10kΩ', to: 'Arduino A0', note: "O'rta nuqta (signal)" },
        { from: '10kΩ ikkinchi uchi', to: 'Arduino GND', note: 'Quyi qo\'l' },
      ],
    },
    sampleCode: {
      title: { uz: "Yorug'lik darajasini o'lchash", ru: 'Измерение уровня освещённости', en: 'Measure Light Level' },
      description: {
        uz: "Yorug'lik past bo'lganda LEDni avtomatik yoqadi.",
        ru: 'Автоматически включает LED при низком освещении.',
        en: 'Automatically turns on LED when light is low.',
      },
      code: `const int ldrPin = A0;
const int ledPin = 13;
const int darkLimit = 300; // sozlash mumkin

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int lightValue = analogRead(ldrPin);

  Serial.print("Yorug'lik: ");
  Serial.println(lightValue);

  if (lightValue < darkLimit) {
    digitalWrite(ledPin, HIGH); // Qorong'i — LED yoq
  } else {
    digitalWrite(ledPin, LOW);  // Yorug' — LED o'chir
  }

  delay(200);
}`,
      explanation: [
        { uz: "Yorug'lik ko'p = qiymat yuqori, qorong'i = qiymat past. darkLimit ni muhitga qarab sozlang.", ru: "Много света = высокое значение, темнота = низкое. Настройте darkLimit по обстановке.", en: "More light = higher value, darkness = lower. Adjust darkLimit based on environment." },
      ],
    },
    troubleshooting: [
      { issue: "Analog qiymat o'zgarmayapti", cause: "10kΩ rezistor yo'q yoki ulangan emas.", solution: "Voltage divider sxemasini to'g'ri ulang." },
    ],
    relatedSlugs: ['relay-5v'],
    tags: ["yorug'lik", 'fotorezistor', 'LDR', 'light', 'kun', 'tun', 'photoresistor'],
  },
];
