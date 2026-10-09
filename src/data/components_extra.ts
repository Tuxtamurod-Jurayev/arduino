import { ComponentItem } from '@/types';

export const extraComponentsData: ComponentItem[] = [
  // ─────────────────────────────────────────────
  // 17. MPU-6050 6-O'qli IMU Sensori
  // ─────────────────────────────────────────────
  {
    id: '17',
    slug: 'mpu-6050',
    name: "MPU-6050 6-O'qli Akselerometr va Giroskop (6-DOF IMU)",
    shortDesc: "Har bir yo'nalishdagi burchak tezligini (giroskop) va tezlanishni (akselerometr) I2C orqali o'lchaydi.",
    category: 'Sensorlar',
    voltage: '3.3V - 5V DC (o\'rnatilgan LDO stabilizator mavjud)',
    current: '3.9 mA',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    specs: [
      { label: "O'qlar soni", value: "6 o'q (3 ta akselerometr + 3 ta giroskop)" },
      { label: 'Akselerometr diapazoni', value: '±2g, ±4g, ±8g, ±16g' },
      { label: 'Giroskop diapazoni', value: '±250, ±500, ±1000, ±2000 °/s' },
      { label: 'Protokol', value: 'I2C (Standart manzil 0x68, AD0=HIGH da 0x69)' },
      { label: 'Raqamli harakat protsessori', value: 'DMP (Digital Motion Processor)' },
      { label: 'ADC aniqligi', value: '16-bit har bir kanal uchun' },
    ],
    overview:
      "MPU-6050 — mikromexanik (MEMS) akselerometr va giroskopni bitta chipda birlashtirgan inersial o'lchov moduli (IMU). Qayerda ishlatilishi: Kvadrokopter va dronlarning parvozini havoda barqarorlashtirish, 2 g'ildirakli o'zi muvozanat saqlovchi robotlar (self-balancing robots), smartfon va kamera stabilizatorlari (gimbal), imo-ishoralar orqali boshqariluvchi simsiz qo'lqoplar hamda virtual reallik (VR) boshqaruv pultlari.",
    howItWorks:
      "Chip ichidagi mikroskopik kremniy tebranuvchi massalar orqali burchak tezligi (giroskop) va Yer tortishish kuchi yo'nalishi (akselerometr) o'lchanadi. 16-bitli analog-raqamli o'zgartirgichlar orqali ma'lumotlar I2C shinasiga uzatiladi. O'rnatilgan DMP harakat hisob-kitoblarini mikrokontrollersiz o'zi tahlil qila oladi.",
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V quvvat kiritiladi' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer (Ground)' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C takt signali (Arduino A5 ga ulanadi)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C ma\'lumot uzatish (Arduino A4 ga ulanadi)' },
      { pin: '5', name: 'XDA', type: 'Special', description: 'Tashqi I2C Master ma\'lumot liniyasi (magnitometr uchun)' },
      { pin: '6', name: 'XCL', type: 'Special', description: 'Tashqi I2C Master takt liniyasi' },
      { pin: '7', name: 'AD0', type: 'Digital', description: 'I2C manzil tanlash (GND: 0x68, VCC: 0x69)' },
      { pin: '8', name: 'INT', type: 'Special', description: 'Harakat aniqlangandagi uzilish pini (Interrupt)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno bilan I2C ulanishi',
      description: 'Datchikni Arduino Uno platasining standart I2C pinlariga ulang:',
      connections: [
        { from: 'MPU-6050 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'MPU-6050 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'MPU-6050 SCL', to: 'Arduino A5', note: 'I2C Clock' },
        { from: 'MPU-6050 SDA', to: 'Arduino A4', note: 'I2C Data' },
      ],
    },
    sampleCode: {
      title: 'MPU-6050 Akselerometr va Giroskop qiymatlarini o\'qish',
      description: 'Adafruit_MPU6050 kutubxonasi orqali burchaklar va tezlanishni o\'qish.',
      code: `#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

Adafruit_MPU6050 mpu;

void setup() {
  Serial.begin(115200);
  while (!Serial) delay(10);

  if (!mpu.begin()) {
    Serial.println("MPU-6050 chipi topilmadi!");
    while (1) yield();
  }
  Serial.println("MPU-6050 muvaffaqiyatli ishga tushdi!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
}

void loop() {
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  Serial.print("Tezlanish X: "); Serial.print(a.acceleration.x);
  Serial.print(", Y: "); Serial.print(a.acceleration.y);
  Serial.print(", Z: "); Serial.print(a.acceleration.z);
  Serial.println(" m/s^2");

  Serial.print("Burchak tezligi X: "); Serial.print(g.gyro.x);
  Serial.print(", Y: "); Serial.print(g.gyro.y);
  Serial.print(", Z: "); Serial.print(g.gyro.z);
  Serial.println(" rad/s");

  delay(200);
}`,
      explanation: [
        'Adafruit_MPU6050 kutubxonasi o\'lchovlarni m/s² va rad/s birliklarida tayyor hisoblab beradi.',
        'I2C aloqasi uchun Uno platasida A4 (SDA) va A5 (SCL) ishlatiladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'MPU-6050 chipi topilmadi xatosi',
        cause: 'I2C simlari adashgan yoki modulga quvvat bormayapti.',
        solution: 'I2C Scanner kodi orqali 0x68 manzili ko\'rinayotganini tekshiring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 18. BME280 Harorat, Namlik va Bosim Sensori
  // ─────────────────────────────────────────────
  {
    id: '18',
    slug: 'bme280',
    name: 'Bosch BME280 Harorat, Namlik va Bosim Sensori (3-in-1)',
    shortDesc: 'Atmosfera bosimi, havo harorati va nisbiy namlikni bitta chipda yuqori aniqlikda o\'lchaydi.',
    category: 'Sensorlar',
    voltage: '3.3V DC (5V modulda regulyator mavjud)',
    current: '3.6 µA (o\'lchash vaqtida)',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800',
    specs: [
      { label: 'Harorat diapazoni', value: '-40°C dan +85°C gacha (aniqlik ±1.0°C)' },
      { label: 'Namlik diapazoni', value: '0% dan 100% RH gacha (aniqlik ±3%)' },
      { label: 'Bosim diapazoni', value: '300 dan 1100 hPa gacha (aniqlik ±1 hPa)' },
      { label: 'Balandlik aniqligi', value: '±1 metr (barometrik altimetr)' },
      { label: 'Protokol', value: 'I2C (0x76 yoki 0x77) hamda SPI' },
    ],
    overview:
      "Bosch BME280 — jahon miqyosida eng aniq deb tan olingan mini atrof-muhit sensori. Qayerda ishlatilishi: Professional uy va dala ob-havo stansiyalari, altimetrlar (dengiz sathidan balandlikni hisoblash), aqlli issiqxonalar va parniklar mikroklimat nazorati, ventilyatsiya va HVAC tizimlari.",
    howItWorks:
      "Pyezorezistiv bosim sensori atmosfera bosimini, sig'imli element esa havo namligini o'lchaydi. Ichki kalibratsiya koeffitsientlari yordamida o'lchov natijalari to'g'ri fizik birliklarda I2C orqali qaytariladi.",
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '3.3V yoki 5V quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C takt signali (Arduino A5)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C ma\'lumot signali (Arduino A4)' },
    ],
    wiringDiagram: {
      title: 'BME280 I2C ulanishi',
      description: 'Arduino Uno A4 va A5 pinlariga ulanadi:',
      connections: [
        { from: 'BME280 VCC', to: 'Arduino 3.3V (yoki 5V)', note: 'Quvvat' },
        { from: 'BME280 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'BME280 SCL', to: 'Arduino A5', note: 'I2C SCL' },
        { from: 'BME280 SDA', to: 'Arduino A4', note: 'I2C SDA' },
      ],
    },
    sampleCode: {
      title: 'BME280 Ob-havo ma\'lumotlarini o\'qish',
      description: 'Adafruit_BME280 kutubxonasi bilan harorat, namlik va bosimni o\'qish.',
      code: `#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
  Serial.begin(9600);
  // Ko'p modullarda manzil 0x76 bo'ladi
  if (!bme.begin(0x76)) {
    Serial.println("BME280 topilmadi! 0x77 manzilini ham tekshiring.");
    while (1);
  }
  Serial.println("BME280 tayyor!");
}

void loop() {
  Serial.print("Harorat: ");
  Serial.print(bme.readTemperature());
  Serial.println(" *C");

  Serial.print("Namlik: ");
  Serial.print(bme.readHumidity());
  Serial.println(" %");

  Serial.print("Bosim: ");
  Serial.print(bme.readPressure() / 100.0F);
  Serial.println(" hPa");

  Serial.print("Balandlik: ");
  Serial.print(bme.readAltitude(1013.25));
  Serial.println(" m");

  delay(2000);
}`,
      explanation: [
        'readAltitude(1013.25) standart dengiz sathi bosimiga tayanib metrda balandlikni hisoblaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Sensor topilmadi xatosi',
        cause: 'I2C manzili 0x76 emas, balki 0x77 bo\'lishi mumkin.',
        solution: 'bme.begin(0x76) o\'rniga bme.begin(0x77) deb yozib ko\'ring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 19. DS3231 Yuqori Aniqlikdagi RTC Moduli
  // ─────────────────────────────────────────────
  {
    id: '19',
    slug: 'ds3231-rtc',
    name: 'DS3231 Yuqori Aniqlikdagi Real Vaqt Soati Moduli (RTC)',
    shortDesc: 'Zaxira batareya yordamida Arduino o\'chiq bo\'lsa ham soniya, soat, sana va yilni to\'xtovsiz hisoblab boradi.',
    category: 'Modullar',
    voltage: '3.3V - 5.5V DC',
    current: '200 µA',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    specs: [
      { label: 'Vaqt aniqligi', value: 'Yiliga 2 daqiqadan kam xatolik (TCXO kristalli)' },
      { label: 'Zaxira batareya', value: 'CR2032 (yillab quvvatsiz ishlaydi)' },
      { label: 'Protokol', value: 'I2C (manzili 0x68)' },
      { label: 'Qo\'shimcha xotira', value: '32 KB AT24C32 EEPROM chipi o\'rnatilgan' },
      { label: 'Signallar', value: '2 ta dasturlanuvchi budilnik (Alarm)' },
    ],
    overview:
      "DS3231 — ichida harorat kompensatsiyasiga ega kvars kristalli (TCXO) bo'lgan o'ta aniq real vaqt soati moduli. Qayerda ishlatilishi: Raqamli soatlar va avtomatik budilniklar, ma'lumotlarni aniq sana va vaqt bilan SD kartaga yozib boruvchi data-loggerlar, vaqt rejasiga ko'ra avtomatik sug'orish va ko'cha chiroqlarini yoqish tizimlari.",
    howItWorks:
      "Asosiy quvvat uzilganda avtomatik CR2032 batareyasiga o'tadi va hisobni uzluksiz davom ettiradi. Harorat o'zgarsa ham kvars tebranishini moslab xatolikning oldini oladi.",
    pinout: [
      { pin: '1', name: '32K', type: 'Special', description: '32.768 kHz to\'g\'ridan-to\'g\'ri kvars chiqishi' },
      { pin: '2', name: 'SQW', type: 'Special', description: 'Square Wave impuls va budilnik uzilish pini' },
      { pin: '3', name: 'SCL', type: 'I2C', description: 'I2C Takt pini (Arduino A5)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C Ma\'lumot pini (Arduino A4)' },
      { pin: '5', name: 'VCC', type: 'VCC', description: '5V yoki 3.3V quvvat' },
      { pin: '6', name: 'GND', type: 'GND', description: 'Umumiy yer' },
    ],
    wiringDiagram: {
      title: 'DS3231 I2C ulanishi',
      description: 'Arduino Uno A4 va A5 ga ulanadi:',
      connections: [
        { from: 'DS3231 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'DS3231 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'DS3231 SCL', to: 'Arduino A5', note: 'SCL' },
        { from: 'DS3231 SDA', to: 'Arduino A4', note: 'SDA' },
      ],
    },
    sampleCode: {
      title: 'Hozirgi vaqtni Serial Monitorga chiqarish',
      description: 'RTClib kutubxonasi yordamida vaqtni o\'qish va dastlabki sozlash.',
      code: `#include <Wire.h>
#include "RTClib.h"

RTC_DS3231 rtc;

void setup() {
  Serial.begin(9600);
  if (!rtc.begin()) {
    Serial.println("DS3231 RTC topilmadi!");
    while (1);
  }

  if (rtc.lostPower()) {
    Serial.println("RTC quvvatsiz qolgan, vaqt kompyuter vaqtiga sozlanmoqda...");
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
  }
}

void loop() {
  DateTime now = rtc.now();

  Serial.print(now.year(), DEC);
  Serial.print('/');
  Serial.print(now.month(), DEC);
  Serial.print('/');
  Serial.print(now.day(), DEC);
  Serial.print(" ");
  Serial.print(now.hour(), DEC);
  Serial.print(':');
  Serial.print(now.minute(), DEC);
  Serial.print(':');
  Serial.print(now.second(), DEC);
  Serial.println();

  delay(1000);
}`,
      explanation: [
        'rtc.adjust(DateTime(F(__DATE__), F(__TIME__))) kodi kompyuterning joriy vaqtini modulga bir marta yuklaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Vaqt qayta yoqilganda 2000 yilga qaytib qolyapti',
        cause: 'Moduldagi CR2032 tanga batareyasi tugagan yoki o\'rnatilmagan.',
        solution: 'Yangi CR2032 3V batareyasini modul uyasiga joylashtiring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 20. DS18B20 Suv O'tkazmaydigan Harorat Sensori
  // ─────────────────────────────────────────────
  {
    id: '20',
    slug: 'ds18b20',
    name: 'DS18B20 Suv O\'tkazmaydigan Raqamli Harorat Sensori',
    shortDesc: 'Zanglamaydigan po\'lat kapsuladagi, Dallas 1-Wire protokoli orqali ishlovchi germetik datchik.',
    category: 'Sensorlar',
    voltage: '3.0V - 5.5V DC',
    current: '1.5 mA',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    specs: [
      { label: 'O\'lchash diapazoni', value: '-55°C dan +125°C gacha' },
      { label: 'Aniqlik', value: '±0.5°C (-10°C dan +85°C gacha oraliqda)' },
      { label: 'Ruxsat etilgan bit', value: '9 dan 12 bitgacha sozlanadi' },
      { label: 'Protokol', value: 'Dallas 1-Wire (bitta simli raqamli aloqa)' },
      { label: 'Korpus', value: 'Zanglamaydigan po\'lat kapsula va suv o\'tkazmaydigan kabel' },
    ],
    overview:
      "DS18B20 — suyuqliklar va nam muhitlar haroratini o'lchash uchun standart hisoblangan datchik. Qayerda ishlatilishi: Akvarium va basseyn suvi haroratini kuzatish, xususiy uylar isitish qozonlari (kotyol) va issiq pol trubalari harorati, fermentatsiya, oziq-ovqat va pivo pishirish, ochiq dala tuprog'i haroratini tahlil qilish.",
    howItWorks:
      "Dallas 1-Wire protokoli orqali yagona DATA simidan foydalanadi (4.7k Om tortuvchi rezistor bilan). Har bir DS18B20 o'zining noyob 64-bitli seriya manziliga ega bo'lgani sababli, bitta Arduino piniga o'nlab sensorlarni parallel ulash mumkin.",
    pinout: [
      { pin: '1', name: 'Qizil (VCC)', type: 'VCC', description: '3.3V yoki 5V musbat quvvat' },
      { pin: '2', name: 'Qora (GND)', type: 'GND', description: 'Umumiy yer' },
      { pin: '3', name: 'Sariq/Ko\'k (DATA)', type: 'Digital', description: '1-Wire raqamli signal liniyasi' },
    ],
    wiringDiagram: {
      title: 'DS18B20 ulanish sxemasi',
      description: 'DATA va VCC orasiga 4.7k Om rezistor qo\'yiladi:',
      connections: [
        { from: 'DS18B20 Qizil', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'DS18B20 Qora', to: 'Arduino GND', note: 'Yer' },
        { from: 'DS18B20 Sariq (DATA)', to: 'Arduino D2', note: 'Signal pini' },
        { from: 'Rezistor 4.7k', to: '5V va DATA orasi', note: 'Pull-up rezistor' },
      ],
    },
    sampleCode: {
      title: 'DS18B20 dan suv haroratini o\'qish',
      description: 'OneWire va DallasTemperature kutubxonalari yordamida haroratni o\'qish.',
      code: `#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
  Serial.println("DS18B20 sensori ishga tushirildi!");
}

void loop() {
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);

  if (tempC == DEVICE_DISCONNECTED_C) {
    Serial.println("Xatolik: Sensor ulanmagan!");
  } else {
    Serial.print("Suv harorati: ");
    Serial.print(tempC);
    Serial.println(" °C");
  }

  delay(1000);
}`,
      explanation: [
        'DATA liniyasi va 5V orasida 4.7k Om rezistor bo\'lishi shart, aks holda chip signal bera olmaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: '-127°C ko\'rsatmoqda',
        cause: 'Datchik bilan kontakt uzilgan yoki 4.7k Om pull-up rezistor ulanmagan.',
        solution: 'Pull-up rezistorni DATA va 5V orasiga to\'g\'ri ulanishini tekshiring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 21. NRF24L01+ 2.4GHz Simsiz Modul
  // ─────────────────────────────────────────────
  {
    id: '21',
    slug: 'nrf24l01',
    name: 'NRF24L01+ 2.4GHz Simsiz Aloqa Moduli (Transceiver)',
    shortDesc: 'Ikki yoki undan ortiq Arduino o\'rtasida 2.4 GHz chastotada paketli ma\'lumot almashuvchi simsiz modul.',
    category: 'Simsiz aloqa',
    voltage: '1.9V - 3.6V DC (Diqqat: 5V ga ulamang, faqat 3.3V)',
    current: '12 mA (uzatishda), 13.5 mA (qabulda)',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    specs: [
      { label: 'Chastota diapazoni', value: '2.4 GHz ISM diapazoni (125 ta kanal)' },
      { label: 'Masofa', value: 'Ichki antenna bilan 50-100 m, PA+LNA bilan 1000 m' },
      { label: 'Tezlik', value: '250 kbps, 1 Mbps yoki 2 Mbps' },
      { label: 'Protokol', value: 'SPI (Mantiqiy pinlar 5V tolerant)' },
      { label: 'Ko\'p nuqtali aloqa', value: '6 tagacha qabul quvuri (Multi-pipe)' },
    ],
    overview:
      "NRF24L01+ — robotlar va qurilmalar o'rtasida tejamkor simsiz aloqa o'rnatish uchun jahondagi eng mashhur modul. Qayerda ishlatilishi: Masofadan boshqariladigan radio-pultlar va o'yinchoq mashinalar, dronlar telemetriyasi, simsiz ob-havo datchiklaridan uy stansiyasiga ma'lumot uzatish, sanoat teleboshqaruvi.",
    howItWorks:
      "Nordic Semiconductor chipi asosida ishlaydi. Ma'lumotlarni CRC nazorat yig'indisi va avtomatik qayta yuborish (Auto-ACK) mexanizmi bilan xatosiz uzatadi. SPI interfeysi orqali yuqori tezlikda paket almashadi.",
    pinout: [
      { pin: '1', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: '2', name: 'VCC', type: 'VCC', description: 'Faqat 3.3V quvvat!' },
      { pin: '3', name: 'CE', type: 'Digital', description: 'Chip Enable (Arduino D9)' },
      { pin: '4', name: 'CSN', type: 'Digital', description: 'SPI Chip Select (Arduino D10)' },
      { pin: '5', name: 'SCK', type: 'SPI', description: 'SPI Clock (Arduino D13)' },
      { pin: '6', name: 'MOSI', type: 'SPI', description: 'SPI Master Out (Arduino D11)' },
      { pin: '7', name: 'MISO', type: 'SPI', description: 'SPI Master In (Arduino D12)' },
      { pin: '8', name: 'IRQ', type: 'Special', description: 'Uzilish pini (ixtiyoriy)' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno SPI ulanishi',
      description: 'VCC pini faqat 3.3V ga ulanadi:',
      connections: [
        { from: 'NRF24 VCC', to: 'Arduino 3.3V', note: '10uF kondensator tavsiya etiladi' },
        { from: 'NRF24 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'NRF24 CE', to: 'Arduino D9', note: 'CE' },
        { from: 'NRF24 CSN', to: 'Arduino D10', note: 'CSN' },
        { from: 'NRF24 SCK', to: 'Arduino D13', note: 'SCK' },
        { from: 'NRF24 MOSI', to: 'Arduino D11', note: 'MOSI' },
        { from: 'NRF24 MISO', to: 'Arduino D12', note: 'MISO' },
      ],
    },
    sampleCode: {
      title: 'Matnli xabar uzatish (Transmitter kodi)',
      description: 'RF24 kutubxonasi yordamida simsiz xabar yuborish.',
      code: `#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10); // CE, CSN
const byte address[6] = "00001";

void setup() {
  Serial.begin(9600);
  radio.begin();
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}

void loop() {
  const char text[] = "Salom Arduino!";
  radio.write(&text, sizeof(text));
  Serial.println("Xabar uzatildi: Salom Arduino!");
  delay(1000);
}`,
      explanation: [
        'VCC va GND pinlari orasiga 10-100 uF elektrolitik kondensator qo\'yilsa aloqa barqarorlashadi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Uzatish amalga oshmayapti',
        cause: 'Arduino 3.3V liniyasida tok yetarli emas yoki modul quvvati tebranyapti.',
        solution: 'VCC va GND pinlari orasiga 10uF-100uF kondensator kavsharlang yoki alohida adapterdan quvvatlang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 22. A4988 Qadam Dvigateli Drayveri
  // ─────────────────────────────────────────────
  {
    id: '22',
    slug: 'a4988-stepper-driver',
    name: 'A4988 Qadam Dvigateli Mikrosurilish Drayveri',
    shortDesc: 'Bipolyar qadam dvigatellarini (NEMA 17 kabi) 1/16 gacha mikrosurilish bilan ravon boshqaradi.',
    category: 'Motorlar',
    voltage: 'Mantiq (VDD): 3.3V-5V, Motor (VMOT): 8V-35V DC',
    current: '2A gacha (radiator bilan)',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800',
    specs: [
      { label: 'Mikrosurilish bo\'linishi', value: 'To\'liq, 1/2, 1/4, 1/8 va 1/16 qadam' },
      { label: 'Tokni sozlash', value: 'Platadagi mini-potensiometr (Vref) orqali' },
      { label: 'Himoya tizimlari', value: 'Termal o\'chish, ortiqcha tok va past kuchlanishdan himoya' },
      { label: 'Boshqarish liniyalari', value: 'Faqat 2 ta pin: STEP va DIR' },
    ],
    overview:
      "A4988 — 3D printerlar va mini CNC stanoklarining eng mashhur drayveri. Qayerda ishlatilishi: 3D printerlar (Ender, Prusa, RAMPS 1.4), CNC lazer o'yish apparatlari, kamera uchun motorli slaydlar (camera slider), robot qo'llarning aniq burchakli o'qlari.",
    howItWorks:
      "STEP piniga har bir impuls berilganda dvigatel o'zining bitta qadami (yoki mikrosurilish qismi) bo'yicha siljiydi. DIR pini HIGH yoki LOW qilinishi orqali soat yo'nalishida yoki teskarisiga aylanish boshqariladi.",
    pinout: [
      { pin: '1', name: 'VMOT', type: 'Quvvat', description: 'Motor quvvati (8-35V)' },
      { pin: '2', name: 'GND (Motor)', type: 'GND', description: 'Motor manfiy qutbi' },
      { pin: '3', name: '2B, 2A, 1A, 1B', type: 'Special', description: 'Dvigatelning 4 ta fazasi' },
      { pin: '4', name: 'VDD', type: 'VCC', description: 'Mantiqiy quvvat (5V)' },
      { pin: '5', name: 'GND (Mantiq)', type: 'GND', description: 'Mantiqiy yer' },
      { pin: '6', name: 'STEP', type: 'Digital', description: 'Qadam impulsi pini' },
      { pin: '7', name: 'DIR', type: 'Digital', description: 'Yo\'nalish pini' },
    ],
    wiringDiagram: {
      title: 'A4988 Arduino ulanishi',
      description: 'STEP va DIR pinlari raqamli chiqishlarga ulanadi:',
      connections: [
        { from: 'A4988 STEP', to: 'Arduino D3', note: 'Qadam impulsi' },
        { from: 'A4988 DIR', to: 'Arduino D4', note: 'Yo\'nalish' },
        { from: 'A4988 VDD', to: 'Arduino 5V', note: 'Mantiq' },
        { from: 'A4988 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'VMOT va GND', to: 'Tashqi 12V blok', note: '100uF kondensator bilan' },
      ],
    },
    sampleCode: {
      title: 'Qadam dvigatelini 200 qadam aylantirish',
      description: 'STEP piniga impulslar yuborish kodi.',
      code: `const int stepPin = 3;
const int dirPin = 4;

void setup() {
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
}

void loop() {
  digitalWrite(dirPin, HIGH); // Soat yo'nalishida

  // 1 to'liq aylanish (200 qadam)
  for (int i = 0; i < 200; i++) {
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(1000);
  }
  delay(1000);

  digitalWrite(dirPin, LOW); // Teskari yo'nalishda
  for (int i = 0; i < 200; i++) {
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(1000);
  }
  delay(1000);
}`,
      explanation: [
        'delayMicroseconds vaqti qancha kichik bo\'lsa, dvigatel shuncha tez aylanadi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Dvigatel faqat g\'o\'ng\'illayapti, aylanmayapti',
        cause: 'Faza simlari chalkashgan yoki tok (Vref) yetarli emas.',
        solution: 'Multimetr bilan motor o\'ramlarini tekshirib 1A/1B va 2A/2B ga to\'g\'ri ulang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 23. NEMA 17 Bipolyar Qadam Dvigateli
  // ─────────────────────────────────────────────
  {
    id: '23',
    slug: 'nema-17-stepper',
    name: 'NEMA 17 Bipolyar Qadam Dvigateli (Stepper Motor)',
    shortDesc: 'Har bir qadamda 1.8 gradus buriluvchi yuqori quvvatli va aniq boshqariluvchi standart motor.',
    category: 'Motorlar',
    voltage: '12V - 24V DC (Drayver orqali)',
    current: '1.5A - 1.7A faza boshiga',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800',
    specs: [
      { label: 'Qadam burchagi', value: '1.8° (bitta to\'liq aylanishda 200 qadam)' },
      { label: 'Fazalar soni', value: '2 ta faza (4 ta sim)' },
      { label: 'Ushlab turish momenti', value: '40 - 45 N·cm' },
      { label: 'Korpus o\'lchami', value: '42 x 42 mm standart NEMA 17' },
      { label: 'Val diametri', value: '5 mm (D-kesimli)' },
    ],
    overview:
      "NEMA 17 — avtomatlashtirish va 3D bosib chiqarish sohasida eng ko'p ishlatiladigan dvigatel. Qayerda ishlatilishi: 3D printerlarning barcha o'qlari va ekstruderi, mini CNC frezer va plazma stanoklari, robotik manipulyatorlar, optik asboblar va aniq aylanuvchi mexanizmlar.",
    howItWorks:
      "Statorda joylashgan elektromagnit qutblar ketma-ket qo'zg'atilganda doimiy magnitli rotor 1.8 darajaga buriladi. Hech qanday qayta aloqa datchigisiz ham burchakni mikron darajasida aniq saqlay oladi.",
    pinout: [
      { pin: 'Faza A+', name: 'Qora/Qizil', type: 'Special', description: '1-faza musbat uchi' },
      { pin: 'Faza A-', name: 'Yashil/Moviy', type: 'Special', description: '1-faza manfiy uchi' },
      { pin: 'Faza B+', name: 'Qizil/Sariq', type: 'Special', description: '2-faza musbat uchi' },
      { pin: 'Faza B-', name: 'Moviy/Oq', type: 'Special', description: '2-faza manfiy uchi' },
    ],
    wiringDiagram: {
      title: 'A4988 drayveri orqali ulanishi',
      description: 'NEMA 17 simlari to\'g\'ridan-to\'g\'ri A4988 yoki DRV8825 drayveriga ulanadi:',
      connections: [
        { from: 'Motor Faza A', to: 'A4988 1A va 1B', note: '1-o\'ram' },
        { from: 'Motor Faza B', to: 'A4988 2A va 2B', note: '2-o\'ram' },
      ],
    },
    sampleCode: {
      title: 'AccelStepper kutubxonasi bilan tezlashuvli aylanish',
      description: 'AccelStepper orqali qadam dvigatelini silliq yurgizish.',
      code: `#include <AccelStepper.h>

#define STEP_PIN 3
#define DIR_PIN 4

AccelStepper stepper(AccelStepper::DRIVER, STEP_PIN, DIR_PIN);

void setup() {
  stepper.setMaxSpeed(1000);
  stepper.setAcceleration(500);
  stepper.moveTo(800); // 4 ta aylanish
}

void loop() {
  if (stepper.distanceToGo() == 0) {
    stepper.moveTo(-stepper.currentPosition()); // Orqaga
  }
  stepper.run();
}`,
      explanation: [
        'AccelStepper dvigatelning birdan qotib qolmasligi uchun tezlashuv (acceleration) beradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Dvigatel juda qizib ketmoqda',
        cause: 'Drayverdagi tok (Vref) me\'yoridan yuqori o\'rnatilgan.',
        solution: 'Drayver trimmerini soat strelkasiga qarshi burab Vref tokini pasaytiring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 24. 74HC595 Siljitish Registri
  // ─────────────────────────────────────────────
  {
    id: '24',
    slug: 'sn74hc595n',
    name: '74HC595 8-Bitli Siljitish Registri (Shift Register IC)',
    shortDesc: 'Arduino-ning bor-yo\'g\'i 3 ta raqamli pini yordamida 8 ta (yoki ketma-ket ulab o\'nlab) chiqishni boshqaradi.',
    category: 'Komponentlar',
    voltage: '2.0V - 6.0V DC',
    current: '70 mA (umumiy paket)',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    specs: [
      { label: 'Chiqishlar soni', value: '8 ta parallel chiqish (Q0 - Q7)' },
      { label: 'Kirish liniyalari', value: 'DS (Data), SH_CP (Clock), ST_CP (Latch)' },
      { label: 'Kaskad ulash', value: 'Q7S pini orqali cheksiz chip zanjiri' },
      { label: 'Paket turi', value: 'DIP-16 (Standart non-plata format)' },
    ],
    overview:
      "74HC595 — ketma-ket kiritiladigan ma'lumotni parallel 8 ta chiqishga chiqaruvchi siljitish registri. Qayerda ishlatilishi: Mikrokontroller pinlarini tejash, ko'p sonli LED chiroqlarni boshqarish, ko'p xonali 7-segmentli indikatorlar, relelar bloklari va 3D LED kublar (LED Cube).",
    howItWorks:
      "Data piniga ketma-ket 8 ta bit (HIGH/LOW) yuboriladi va har bir bit Clock zarbasi bilan keyingi yacheykaga siljiydi. Latch pini HIGH qilinganda barcha 8 bit bir lahzada chiqishlarga uzatiladi.",
    pinout: [
      { pin: 'Q0-Q7', name: 'Parallel Chiqishlar', type: 'Digital', description: '8 ta chiqish pini' },
      { pin: 'GND', name: 'Yer', type: 'GND', description: '8-pin' },
      { pin: 'VCC', name: 'Quvvat', type: 'VCC', description: '16-pin (5V)' },
      { pin: 'DS (14)', name: 'Serial Data', type: 'Digital', description: 'Ma\'lumot kirish pini' },
      { pin: 'SH_CP (11)', name: 'Shift Clock', type: 'Digital', description: 'Takt pini' },
      { pin: 'ST_CP (12)', name: 'Latch Clock', type: 'Digital', description: 'Fiksatsiya pini' },
      { pin: 'OE (13)', name: 'Output Enable', type: 'Digital', description: 'GND ga ulanadi' },
      { pin: 'MR (10)', name: 'Master Reset', type: 'Digital', description: '5V ga ulanadi' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno 74HC595 ulanishi',
      description: '3 ta raqamli pin ishlatiladi:',
      connections: [
        { from: '74HC595 DS (14)', to: 'Arduino D4', note: 'Data' },
        { from: '74HC595 ST_CP (12)', to: 'Arduino D5', note: 'Latch' },
        { from: '74HC595 SH_CP (11)', to: 'Arduino D6', note: 'Clock' },
        { from: '74HC595 VCC & MR', to: 'Arduino 5V', note: 'Quvvat' },
        { from: '74HC595 GND & OE', to: 'Arduino GND', note: 'Yer' },
      ],
    },
    sampleCode: {
      title: '8 ta LED chiroqni navbat bilan yoqish',
      description: 'shiftOut funksiyasidan foydalanish.',
      code: `const int dataPin = 4;
const int latchPin = 5;
const int clockPin = 6;

void setup() {
  pinMode(dataPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < 8; i++) {
    byte leds = 1 << i;
    digitalWrite(latchPin, LOW);
    shiftOut(dataPin, clockPin, MSBFIRST, leds);
    digitalWrite(latchPin, HIGH);
    delay(100);
  }
}`,
      explanation: [
        'shiftOut funksiyasi baytni avtomatik ravishda bitma-bit chiqarib beradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Chiqishlar tartibsiz miltillamoqda',
        cause: 'MR (10-pin) 5V ga yoki OE (13-pin) GND ga ulanmagan.',
        solution: 'MR pinini 5V ga, OE pinini esa GND ga ulab qo\'ying.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 25. TM1637 4-Xonali 7-Segmentli Displey
  // ─────────────────────────────────────────────
  {
    id: '25',
    slug: 'tm1637-display',
    name: 'TM1637 4-Xonali 7-Segmentli Raqamli Displey Moduli',
    shortDesc: 'O\'rtasida soat ikki nuqtasi bo\'lgan 4 xonali yorqin raqamli displey (CLK va DIO orqali boshqariladi).',
    category: 'Displeylar',
    voltage: '3.3V - 5V DC',
    current: '30 mA - 80 mA',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    specs: [
      { label: 'Displey formati', value: '4 xonali 7-segment (qo\'sh nuqta : bilan)' },
      { label: 'Boshqaruv liniyalari', value: '2 ta pin: CLK va DIO' },
      { label: 'Yorug\'lik darajasi', value: '8 pog\'onali dasturiy yorug\'lik nazorati' },
      { label: 'O\'lchami', value: '42 x 24 mm ixcham korpus' },
    ],
    overview:
      "TM1637 moduli — har qanday vaqt yoki raqamli ko'rsatkichlarni namoyish qilish uchun eng qulay displey. Qayerda ishlatilishi: Raqamli soatlar, daqiqa hisoblagichlar, oshxona taymerlari, sport sekundomerlari, ball ko'rsatkichlari, masofa yoki harorat raqamlarini chiqarish.",
    howItWorks:
      "TM1637 drayver chipi 7-segmentli indikatorlarni dinamik indikatsiya orqali yondiradi. Arduino faqat ikki sim orqali raqamlarni uzatadi, qolgan barcha dinamik yangilanishni modulning o'zi bajaradi.",
    pinout: [
      { pin: '1', name: 'CLK', type: 'Digital', description: 'Takt signali (Arduino D2)' },
      { pin: '2', name: 'DIO', type: 'Digital', description: 'Ma\'lumot kirish-chiqish (Arduino D3)' },
      { pin: '3', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '4', name: 'GND', type: 'GND', description: 'Umumiy yer' },
    ],
    wiringDiagram: {
      title: 'TM1637 ulanish sxemasi',
      description: 'Arduino bilan 4 ta sim orqali ulanadi:',
      connections: [
        { from: 'TM1637 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'TM1637 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'TM1637 CLK', to: 'Arduino D2', note: 'Clock' },
        { from: 'TM1637 DIO', to: 'Arduino D3', note: 'Data' },
      ],
    },
    sampleCode: {
      title: 'Hisoblagich (0 dan 9999 gacha sanash)',
      description: 'TM1637Display kutubxonasi yordamida raqam chiqarish.',
      code: `#include <TM1637Display.h>

#define CLK 2
#define DIO 3

TM1637Display display(CLK, DIO);

void setup() {
  display.setBrightness(0x0f); // Maksimal yorug'lik
}

void loop() {
  for (int i = 0; i < 1000; i++) {
    display.showNumberDec(i, false);
    delay(100);
  }
}`,
      explanation: [
        'display.showNumberDecEx funksiyasi o\'rtadagi : ikki nuqtani ham yoqish imkonini beradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Raqamlar ko\'rinmayapti',
        cause: 'setBrightness chaqirilmagan yoki 0 ga o\'rnatilgan.',
        solution: 'setup ichida display.setBrightness(0x0f) buyrug\'ini yozing.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 26. MAX7219 8x8 LED Matritsa Moduli
  // ─────────────────────────────────────────────
  {
    id: '26',
    slug: 'max7219-matrix',
    name: 'MAX7219 8x8 LED Matritsa Moduli (SPI)',
    shortDesc: '64 ta qizil svetodioddan iborat matritsa; matn, piktogramma va animatsiyalarni ko\'rsatadi.',
    category: 'Displeylar',
    voltage: '5V DC',
    current: '150 - 320 mA',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    specs: [
      { label: 'Nuqtalar soni', value: '8x8 = 64 ta qizil LED nuqta' },
      { label: 'Interfeys', value: 'SPI (DIN, CS, CLK)' },
      { label: 'Kaskadlash', value: 'Bir nechtasini ketma-ket ulab 32x8 yoki 64x8 qilish mumkin' },
      { label: 'Boshqaruv chipi', value: 'MAX7219 Seriya drayveri' },
    ],
    overview:
      "MAX7219 matritsasi — belgilar, piktogrammalar va yuguruvchi satrlarni ko'rsatish uchun mo'ljallangan. Qayerda ishlatilishi: Reklama va e'lonlar uchun yuguruvchi matn tablosi, retro o'yinlar (Tetris, Snake), robot yuzidagi emotsiyalar (ko'zlar, tabassum), ob-havo piktogrammalari.",
    howItWorks:
      "MAX7219 chipi barcha 64 ta svetodiodni ketma-ket dinamik skanerlash bilan yondiradi. Arduino faqat 3 ta sim (DIN, CS, CLK) orqali kadr ma'lumotlarini jo'natadi.",
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: '3', name: 'DIN', type: 'SPI', description: 'Data In (Arduino D11 yoki D12)' },
      { pin: '4', name: 'CS', type: 'SPI', description: 'Chip Select (Arduino D10)' },
      { pin: '5', name: 'CLK', type: 'SPI', description: 'Clock (Arduino D13)' },
    ],
    wiringDiagram: {
      title: 'MAX7219 ulanish sxemasi',
      description: 'SPI pinlariga ulanadi:',
      connections: [
        { from: 'MAX7219 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'MAX7219 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'MAX7219 DIN', to: 'Arduino D11', note: 'MOSI / DIN' },
        { from: 'MAX7219 CS', to: 'Arduino D10', note: 'CS' },
        { from: 'MAX7219 CLK', to: 'Arduino D13', note: 'SCK / CLK' },
      ],
    },
    sampleCode: {
      title: 'Matritsada yurakcha shaklini chiqarish',
      description: 'LedControl kutubxonasi bilan ishlash.',
      code: `#include <LedControl.h>

// DIN=11, CLK=13, CS=10, 1 ta modul
LedControl lc = LedControl(11, 13, 10, 1);

const byte heart[8] = {
  B00000000,
  B01100110,
  B11111111,
  B11111111,
  B11111111,
  B01111110,
  B00111100,
  B00011000
};

void setup() {
  lc.shutdown(0, false);
  lc.setIntensity(0, 8); // O'rtacha yorug'lik
  lc.clearDisplay(0);

  for (int row = 0; row < 8; row++) {
    lc.setRow(0, row, heart[row]);
  }
}

void loop() {}`,
      explanation: [
        'Har bir qatordagi 8 ta bit 8 ta svetodiod holatini bildiradi (1-yonadi, 0-o\'chadi).',
      ],
    },
    troubleshooting: [
      {
        issue: 'Tasvir teskari yoki qing\'ir chiqmoqda',
        cause: 'Matritsa orientatsiyasi kutubxona bilan teskari.',
        solution: 'Bitlar ketma-ketligini yoki modulni 90 darajaga buring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 27. u-blox NEO-6M GPS Moduli
  // ─────────────────────────────────────────────
  {
    id: '27',
    slug: 'neo-6m-gps',
    name: 'u-blox NEO-6M GPS Joylashuvni Aniqlash Moduli',
    shortDesc: 'Sun\'iy yo\'ldosh signallari orqali kenglik, uzunlik, balandlik va harakat tezligini aniqlaydi.',
    category: 'Modullar',
    voltage: '3.3V - 5V DC',
    current: '45 mA - 67 mA',
    imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800',
    specs: [
      { label: 'Joylashuv aniqligi', value: '2.5 metr (ochiq osmon ostida)' },
      { label: 'Kanallar soni', value: '50 ta mustaqil sun\'iy yo\'ldosh kanali' },
      { label: 'Tezlik chegarasi', value: '500 m/s (1800 km/soat)' },
      { label: 'Standart tezlik', value: 'UART 9600 baud (NMEA protokoli)' },
      { label: 'Antenna', value: 'Keramik faol patch-antenna kiritilgan' },
    ],
    overview:
      "u-blox NEO-6M — global joylashuvni aniqlovchi eng arzon va ishonchli modul. Qayerda ishlatilishi: Avtomobil va velosipedlar uchun GPS trekerlar, dronlarning koordinata bo'yicha parvozi va start nuqtasiga qaytish (Return-to-Home) tizimi, qishloq xo'jaligi texnikasi monitoringi va aniq atom vaqti sinxronizatori.",
    howItWorks:
      "Sun'iy yo'ldoshlardan kelgan radio signallarni ushlab, NMEA standartidagi matnli satrlar ($GPRMC, $GPGGA) orqali koordinata va tezlikni UART portiga uzatadi.",
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V yoki 3.3V quvvat' },
      { pin: '2', name: 'RX', type: 'UART', description: 'Serial qabul (Arduino TX ga)' },
      { pin: '3', name: 'TX', type: 'UART', description: 'Serial uzatish (Arduino RX ga)' },
      { pin: '4', name: 'GND', type: 'GND', description: 'Umumiy yer' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno SoftwareSerial ulanishi',
      description: 'D4 va D3 pinlariga ulanadi:',
      connections: [
        { from: 'NEO-6M VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'NEO-6M GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'NEO-6M TX', to: 'Arduino D4 (RX)', note: 'GPS dan ma\'lumot keladi' },
        { from: 'NEO-6M RX', to: 'Arduino D3 (TX)', note: 'GPS ga buyruq jo\'natish' },
      ],
    },
    sampleCode: {
      title: 'GPS koordinatalarini o\'qish',
      description: 'TinyGPSPlus kutubxonasi bilan kenglik va uzunlikni chiqarish.',
      code: `#include <SoftwareSerial.h>
#include <TinyGPS++.h>

SoftwareSerial gpsSerial(4, 3); // RX, TX
TinyGPSPlus gps;

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(9600);
  Serial.println("Sun'iy yo'ldoshlar qidirilmoqda...");
}

void loop() {
  while (gpsSerial.available() > 0) {
    if (gps.encode(gpsSerial.read())) {
      if (gps.location.isValid()) {
        Serial.print("Kenglik (Lat): ");
        Serial.println(gps.location.lat(), 6);
        Serial.print("Uzunlik (Lng): ");
        Serial.println(gps.location.lng(), 6);
        Serial.print("Tezlik: ");
        Serial.print(gps.speed.kmph());
        Serial.println(" km/soat");
      }
    }
  }
}`,
      explanation: [
        'Dastlabki sun\'iy yo\'ldoshlarni ushlash (Cold start) ochiq osmon ostida 1-3 daqiqa vaqt olishi mumkin.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Koordinatalar chiqmayapti',
        cause: 'Bino ichida sun\'iy yo\'ldosh signallari beton devorlardan o\'tmaydi.',
        solution: 'Antennani deraza yoniga yoki ochiq havoga olib chiqing.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 28. HX711 Tenzo-datchik Kuchaytirgichi
  // ─────────────────────────────────────────────
  {
    id: '28',
    slug: 'hx711-load-cell',
    name: 'HX711 24-Bitli Kuchaytirgich va Og\'irlik Sensori (Load Cell)',
    shortDesc: 'Tenzo-datchikdan keluvchi mikrovolt signallarni 24-bitli yuqori aniqlikda kuchaytirib og\'irlikni o\'lchaydi.',
    category: 'Sensorlar',
    voltage: '2.6V - 5.5V DC',
    current: '1.5 mA',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    specs: [
      { label: 'ADC aniqligi', value: '24-bit yuqori darajali konverter' },
      { label: 'Kuchaytirish koeffitsienti', value: '64 yoki 128 (dasturiy tanlanadi)' },
      { label: 'Yangilanish tezligi', value: '10 Hz yoki 80 Hz' },
      { label: 'Mos datchiklar', value: '1kg, 5kg, 10kg, 20kg, 50kg, 200kg Load Cell tenzo-balkalari' },
    ],
    overview:
      "HX711 moduli — tenzometrik og'irlik datchiklari uchun maxsus ishlab chiqilgan kuchaytirgich. Qayerda ishlatilishi: Raqamli oshxona va sanoat tarozilari, asalarichilikda uylardagi asal og'irligini masofadan nazorat qilish, ombordagi detallar sonini og'irlik orqali sanash, avtomobil yuk ko'rsatkichlari.",
    howItWorks:
      "Og'irlik tushganda metall deformatsiyalanadi va Uitson ko'prigining qarshiligi mikrovoltlarda o'zgaradi. HX711 ushbu mikrosignallarni 24-bitli raqamli kodga aylantiradi.",
    pinout: [
      { pin: 'E+, E-', name: 'Excitation', type: 'Special', description: 'Tenzo datchikning quvvat simlari (Qizil va Qora)' },
      { pin: 'A+, A-', name: 'Signal', type: 'Special', description: 'Tenzo datchikning signal simlari (Oq va Yashil)' },
      { pin: 'VCC, GND', name: 'Quvvat', type: 'VCC', description: 'Arduino 5V va GND' },
      { pin: 'DT', name: 'Data', type: 'Digital', description: 'Raqamli ma\'lumot (Arduino D2)' },
      { pin: 'SCK', name: 'Clock', type: 'Digital', description: 'Takt signali (Arduino D3)' },
    ],
    wiringDiagram: {
      title: 'HX711 Arduino ulanishi',
      description: 'DT va SCK pinlariga ulanadi:',
      connections: [
        { from: 'HX711 VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'HX711 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'HX711 DT', to: 'Arduino D2', note: 'Data' },
        { from: 'HX711 SCK', to: 'Arduino D3', note: 'Clock' },
      ],
    },
    sampleCode: {
      title: 'Tarozidan gramm hisoblash',
      description: 'HX711 kutubxonasi bilan og\'irlik o\'lchash.',
      code: `#include "HX711.h"

const int LOADCELL_DOUT_PIN = 2;
const int LOADCELL_SCK_PIN = 3;

HX711 scale;

void setup() {
  Serial.begin(9600);
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  // Kalibratsiya koeffitsienti
  scale.set_scale(2280.f);
  scale.tare(); // Tarozini nolga tushirish
  Serial.println("Tarozi tayyor!");
}

void loop() {
  Serial.print("Og'irlik: ");
  Serial.print(scale.get_units(5), 1);
  Serial.println(" gramm");
  delay(500);
}`,
      explanation: [
        'scale.tare() bo\'sh tarozini nolga tenglashtiradi.',
        'Kalibratsiya uchun ma\'lum og\'irlikdagi yuk bilan set_scale koeffitsienti topiladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Og\'irlik ko\'rsatkichi tebranib turibdi',
        cause: 'Simlar kontaktida shovqin bor yoki tenzo-balka qattiq asosga mahkamlanmagan.',
        solution: 'Tenzo-datchikni ikkala chetidan mustahkam metall/taxta asosga burang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 29. DFPlayer Mini MP3 Audio Pleyer
  // ─────────────────────────────────────────────
  {
    id: '29',
    slug: 'dfplayer-mini',
    name: 'DFPlayer Mini MP3 va Audio Pleyer Moduli',
    shortDesc: 'MicroSD kartadagi MP3 va WAV fayllarni o\'qiydi va o\'rnatilgan 3W kuchaytirgichi orqali dinamikka chiqaradi.',
    category: 'Modullar',
    voltage: '3.3V - 5.0V DC',
    current: '20 mA (kutishda), 150-300 mA (ovoz yangraganda)',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800',
    specs: [
      { label: 'Qo\'llab-quvvatlovchi formatlar', value: 'MP3, WAV, WMA' },
      { label: 'Xotira', value: 'MicroSD karta 32GB gacha (FAT16/FAT32)' },
      { label: 'O\'rnatilgan kuchaytirgich', value: '3W quvvat (to\'g\'ridan-to\'g\'ri dinamikka ulanadi)' },
      { label: 'Ovoz darajasi', value: '30 pog\'onali dasturiy balandlik sozlamasi' },
      { label: 'Ekvalayzer', value: 'Normal, Pop, Rock, Jazz, Classic, Bass' },
    ],
    overview:
      "DFPlayer Mini — Arduinoga haqiqiy inson ovozi va musiqiy effektlarni qo'shish uchun mo'ljallangan ixcham audio chip. Qayerda ishlatilishi: Gapiruvchi aqlli robotlar, xonadon eshik qo'ng'iroqlari, liftning qavat ovozi e'loni, bolalar interaktiv o'yinchoqlari, avtomobil parkovka ogohlantirgichlari.",
    howItWorks:
      "MicroSD kartadagi MP3 fayllarni apparat dekoderi orqali o'qiydi. Arduino buyruqlari UART (Serial) orqali yuboriladi: trek raqamini tanlash, pauza, tovush balandligi.",
    pinout: [
      { pin: '1', name: 'VCC', type: 'VCC', description: '5V quvvat' },
      { pin: '2', name: 'RX', type: 'UART', description: 'Serial qabul (1k rezistor bilan ulanadi)' },
      { pin: '3', name: 'TX', type: 'UART', description: 'Serial uzatish' },
      { pin: '4', name: 'DAC_R, DAC_L', type: 'Special', description: 'Quloqchin yoki tashqi kuchaytirgich chiqishi' },
      { pin: '5', name: 'SPK_1, SPK_2', type: 'Special', description: '3W 4/8 Om dinamik ulanadi' },
      { pin: '6', name: 'GND', type: 'GND', description: 'Umumiy yer' },
    ],
    wiringDiagram: {
      title: 'Arduino Uno SoftwareSerial ulanishi',
      description: 'Arduino TX va modul RX orasiga 1k Om rezistor qo\'yiladi:',
      connections: [
        { from: 'DFPlayer VCC', to: 'Arduino 5V', note: 'Quvvat' },
        { from: 'DFPlayer GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'DFPlayer RX', to: 'Arduino D11', note: '1k Om rezistor orqali (shovqindan himoya)' },
        { from: 'DFPlayer TX', to: 'Arduino D10', note: 'To\'g\'ridan-to\'g\'ri' },
        { from: 'SPK_1 va SPK_2', to: 'Dinamik 3W 8Om', note: 'Ovoz chiqarish' },
      ],
    },
    sampleCode: {
      title: '1-trekni ijro etish',
      description: 'DFRobotDFPlayerMini kutubxonasi yordamida audio qo\'yish.',
      code: `#include <SoftwareSerial.h>
#include <DFRobotDFPlayerMini.h>

SoftwareSerial mySoftwareSerial(10, 11); // RX, TX
DFRobotDFPlayerMini myDFPlayer;

void setup() {
  mySoftwareSerial.begin(9600);
  Serial.begin(115200);

  if (!myDFPlayer.begin(mySoftwareSerial)) {
    Serial.println("DFPlayer ishga tushmadi!");
    while (true);
  }

  myDFPlayer.volume(20); // Balandlik: 0 dan 30 gacha
  myDFPlayer.play(1);    // 1-chi qo'shiqni qo'yish
}

void loop() {}`,
      explanation: [
        'SD kartadagi fayllar 01/001.mp3 yoki mp3/0001.mp3 shaklida nomlanishi tavsiya etiladi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Dinamikdan faqat shiqillagan ovoz kelmoqda',
        cause: 'Arduino USB portidan yetarli tok kelmayapti.',
        solution: 'DFPlayer moduliga alohida 5V 1A quvvat manbai ulang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 30. WS2812B Manzilli RGB NeoPixel
  // ─────────────────────────────────────────────
  {
    id: '30',
    slug: 'ws2812b-rgb',
    name: 'WS2812B Manzilli RGB Svetodiod (NeoPixel)',
    shortDesc: 'Bitta signal simi orqali yuzlab LED larning har birini alohida 16 million rangda boshqaradi.',
    category: 'Displeylar',
    voltage: '5V DC',
    current: 'Har bir LED uchun 60 mA (oq rangda to\'liq yonganda)',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    specs: [
      { label: 'Ranglar soni', value: '16.7 million rang (24-bit: 8 bit R, G, B)' },
      { label: 'Boshqaruv liniyasi', value: '1 ta yagona raqamli pin (DIN / DOUT)' },
      { label: 'Tezlik', value: '800 kbps yuqori tezlikdagi ma\'lumot uzatish' },
      { label: 'Formatlar', value: 'LED lenta, matritsa, uzuk (ring) va alohida modullar' },
    ],
    overview:
      "WS2812B — har bir svetodiod korpusi ichida o'z kontrolleriga ega manzilli RGB chip. Qayerda ishlatilishi: Monitor va televizor orqa fon yoritgichi (Ambilight), musiqaga ritmik munosabat bildiruvchi rangli vizualizatorlar, bayramona aqlli bezaklar, robotlarning ko'z va holat indikatsiyalari.",
    howItWorks:
      "Bitta DIN simidan ketma-ket 24-bitli paketlar keladi. Har bir chip o'zining 24 bitini o'zlashtiradi va qolganini keyingi LED ga uzatadi.",
    pinout: [
      { pin: '1', name: '5V (VCC)', type: 'VCC', description: '5V musbat quvvat' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: '3', name: 'DIN', type: 'Digital', description: 'Data In (Arduino chiqishiga ulanadi)' },
      { pin: '4', name: 'DOUT', type: 'Special', description: 'Keyingi LED ning DIN siga ulanadi' },
    ],
    wiringDiagram: {
      title: 'WS2812B Arduino ulanishi',
      description: 'DIN va Arduino orasiga 330-470 Om rezistor tavsiya etiladi:',
      connections: [
        { from: 'Lenta 5V', to: 'Tashqi 5V quvvat bloki', note: 'Kuchli manba' },
        { from: 'Lenta GND', to: 'Arduino GND va Blok GND', note: 'Umumiy yer' },
        { from: 'Lenta DIN', to: 'Arduino D6', note: '330 Om rezistor orqali' },
      ],
    },
    sampleCode: {
      title: 'Kamalak effektini hosil qilish',
      description: 'Adafruit_NeoPixel kutubxonasi yordamida ranglar o\'ynatish.',
      code: `#include <Adafruit_NeoPixel.h>

#define PIN 6
#define NUMPIXELS 8

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();
  strip.show(); // Barchasini o'chirish
}

void loop() {
  for (int i = 0; i < NUMPIXELS; i++) {
    strip.setPixelColor(i, strip.Color(255, 0, 0)); // Qizil
    strip.show();
    delay(100);
    strip.setPixelColor(i, strip.Color(0, 255, 0)); // Yashil
    strip.show();
    delay(100);
  }
}`,
      explanation: [
        'Katta uzunlikdagi lentaga alohida quvvat bloki ulanishi shart (Arduino 5V pini 500 mA gacha ko\'taradi).',
      ],
    },
    troubleshooting: [
      {
        issue: 'Birinchi LED yonmayapti yoki yonib ketdi',
        cause: 'Signal pini to\'g\'ridan-to\'g\'ri rezistorsiz ulangan va kuchlanish zarbasi bo\'lgan.',
        solution: 'Arduino pini bilan DIN orasiga 330 Om rezistor, quvvatga 1000uF kondensator qo\'ying.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 31. PCA9685 16-Kanalli Servo Drayveri
  // ─────────────────────────────────────────────
  {
    id: '31',
    slug: 'pca9685-pwm-driver',
    name: 'PCA9685 16-Kanalli 12-Bitli PWM va Servo Drayveri',
    shortDesc: 'I2C orqali 16 tagacha servomotorni bir vaqtda mikrokontroller protsessoriga og\'irlik tushirmasdan boshqaradi.',
    category: 'Motorlar',
    voltage: 'Mantiq: 3.3V-5V, Servolar quvvati: 5V-6V terminal',
    current: '10 mA (chip o\'zi), tashqi blokdan servolarga 5-10A',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800',
    specs: [
      { label: 'Kanallar soni', value: '16 ta mustaqil apparat PWM kanali' },
      { label: 'Aniqlik', value: '12-bit (4096 pog\'onali burchak boshqaruvi)' },
      { label: 'Protokol', value: 'I2C (0x40 standart, 62 tagacha kaskadlash mumkin)' },
      { label: 'Chastota', value: '40 Hz dan 1000 Hz gacha sozlanuvchi PWM' },
    ],
    overview:
      "PCA9685 — bitta I2C shinasi orqali ko'p sonli servomotorlarni boshqarish drayveri. Qayerda ishlatilishi: 4 oyoqli it-robotlar (Quadruped robot), 6 oyoqli o'rgimchak robotlar (Hexapod), 6 bo'g'inli robot qo'llar (manipulyatorlar), animatronika va yoritish shoulari.",
    howItWorks:
      "Chip ichida mustaqil takt generatori mavjud. Arduino faqat burchak qiymatini jo'natadi, PWM impulslarini uzluksiz generatsiya qilishni chipning o'zi bajaradi.",
    pinout: [
      { pin: 'VCC', name: 'Logic Power', type: 'VCC', description: '5V yoki 3.3V' },
      { pin: 'GND', name: 'Ground', type: 'GND', description: 'Umumiy yer' },
      { pin: 'SCL', name: 'I2C Clock', type: 'I2C', description: 'Arduino A5' },
      { pin: 'SDA', name: 'I2C Data', type: 'I2C', description: 'Arduino A4' },
      { pin: 'V+', name: 'Servo Power', type: 'Quvvat', description: 'Tashqi 5V-6V akkumulyator terminali' },
    ],
    wiringDiagram: {
      title: 'PCA9685 I2C ulanishi',
      description: 'Arduino I2C pinlariga ulanadi, servolar uchun alohida quvvat beriladi:',
      connections: [
        { from: 'PCA9685 VCC', to: 'Arduino 5V', note: 'Mantiq' },
        { from: 'PCA9685 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'PCA9685 SCL', to: 'Arduino A5', note: 'SCL' },
        { from: 'PCA9685 SDA', to: 'Arduino A4', note: 'SDA' },
        { from: 'Terminal V+ va GND', to: 'Tashqi 5V 5A Blok', note: 'Servolar quvvati' },
      ],
    },
    sampleCode: {
      title: '1-kanal servoni 0 dan 180 gradusga burish',
      description: 'Adafruit_PWMServoDriver kutubxonasi bilan ishlash.',
      code: `#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

#define SERVOMIN  150 // 0 gradus
#define SERVOMAX  600 // 180 gradus

void setup() {
  pwm.begin();
  pwm.setPWMFreq(50); // Standart servo chastotasi (50 Hz)
}

void loop() {
  pwm.setPWM(0, 0, SERVOMIN);
  delay(1000);
  pwm.setPWM(0, 0, SERVOMAX);
  delay(1000);
}`,
      explanation: [
        'Har bir kanal mustaqil bo\'lib, 16 ta servoni bir vaqtda qaltirashsiz ushlab turadi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Servolar qaltirab ishlamayapti yoki Arduino o\'chib qolyapti',
        cause: 'Servolarga alohida kuchli quvvat manbai ulanmagan.',
        solution: 'V+ vintli terminaliga alohida 5V 3-5A quvvat manbai ulang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 32. TB6612FNG MOSFET Dvigatel Drayveri
  // ─────────────────────────────────────────────
  {
    id: '32',
    slug: 'tb6612fng',
    name: 'TB6612FNG Ikkitalik MOSFET Dvigatel Drayveri Moduli',
    shortDesc: 'L298N ga zamonaviy alternativa; MOSFET tranzistorlari tufayli kam qiziydi va yuqori samaradorlikka ega.',
    category: 'Motorlar',
    voltage: 'Motor (VM): 4.5V - 13.5V, Mantiq (VCC): 2.7V - 5.5V DC',
    current: '1.2A doimiy, 3.2A cho\'qqi',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800',
    specs: [
      { label: 'Tranzistor turi', value: 'MOSFET H-Bridge (Juda kam kuchlanish yo\'qotilishi)' },
      { label: 'Kanal soni', value: '2 ta DC dvigatel yoki 1 ta 4-simli Stepper' },
      { label: 'PWM chastotasi', value: '100 kHz gacha yuqori chastotali tezlik boshqaruvi' },
      { label: 'Kutish rejimi', value: 'STBY pini orqali batareya tejash' },
    ],
    overview:
      "TB6612FNG — ixcham va o'ta samarador dvigatel drayveri. L298N kabi katta radiator talab qilmaydi va batareyani qizib isrof qilmaydi. Qayerda ishlatilishi: Mini-sumo robotlar, chiziq bo'ylab tezkor harakatlanuvchi robotlar (Line follower), labirint robotlari va ixcham dron g'ildiraklari.",
    howItWorks:
      "IN1 va IN2 pinlari aylanish yo'nalishini belgilaydi, PWM pini esa tezlikni boshqaradi. STBY pini HIGH bo'lgandagina modul faollashadi.",
    pinout: [
      { pin: 'VM', name: 'Motor Power', type: 'Quvvat', description: 'Motor batareyasi (4.5-13.5V)' },
      { pin: 'VCC', name: 'Logic Power', type: 'VCC', description: 'Arduino 5V' },
      { pin: 'GND', name: 'Ground', type: 'GND', description: 'Umumiy yer' },
      { pin: 'AIN1, AIN2', name: 'Motor A Inputs', type: 'Digital', description: 'Yo\'nalish' },
      { pin: 'PWMA', name: 'PWM Motor A', type: 'PWM', description: 'Tezlik' },
      { pin: 'STBY', name: 'Standby', type: 'Digital', description: 'HIGH qilib faollashtiriladi' },
    ],
    wiringDiagram: {
      title: 'TB6612FNG ulanish sxemasi',
      description: 'Arduino raqamli va PWM pinlariga ulanadi:',
      connections: [
        { from: 'TB6612 VM', to: 'Akkumulyator 7.4V/11.1V', note: 'Dvigatel quvvati' },
        { from: 'TB6612 VCC', to: 'Arduino 5V', note: 'Mantiq' },
        { from: 'TB6612 GND', to: 'Arduino GND va Batareya GND', note: 'Yer' },
        { from: 'TB6612 STBY', to: 'Arduino D8', note: 'Standby' },
        { from: 'TB6612 AIN1', to: 'Arduino D7', note: 'Yo\'nalish 1' },
        { from: 'TB6612 AIN2', to: 'Arduino D6', note: 'Yo\'nalish 2' },
        { from: 'TB6612 PWMA', to: 'Arduino D9 (PWM)', note: 'Tezlik' },
      ],
    },
    sampleCode: {
      title: 'Dvigatelni oldinga va orqaga yurgizish',
      description: 'PWM orqali tezlikni o\'zgartirish.',
      code: `const int AIN1 = 7;
const int AIN2 = 6;
const int PWMA = 9;
const int STBY = 8;

void setup() {
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMA, OUTPUT);
  pinMode(STBY, OUTPUT);

  digitalWrite(STBY, HIGH); // Drayverni uyg'otish
}

void loop() {
  // Oldinga yarim tezlikda
  digitalWrite(AIN1, HIGH);
  digitalWrite(AIN2, LOW);
  analogWrite(PWMA, 150);
  delay(2000);

  // Orqaga to'liq tezlikda
  digitalWrite(AIN1, LOW);
  digitalWrite(AIN2, HIGH);
  analogWrite(PWMA, 255);
  delay(2000);
}`,
      explanation: [
        'STBY pini HIGH bo\'lmasa, dvigatelga tok bormaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Dvigatel umuman aylanmayapti',
        cause: 'STBY pini Arduino piniga ulanmagan yoki LOW bo\'lib qolgan.',
        solution: 'STBY pinini 5V ga yoki dasturda HIGH qilib sozlang.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 33. L293D Dvigatel Drayveri Mikrosxemasi
  // ─────────────────────────────────────────────
  {
    id: '33',
    slug: 'l293d-ic',
    name: 'L293D Ikkitalik H-Ko\'prik Dvigatel Drayveri Mikrosxemasi (DIP-16)',
    shortDesc: 'Breadboardga to\'g\'ridan-to\'g\'ri o\'rnatiluvchi klassik 16-oyoqli dvigatel boshqaruv chipi.',
    category: 'Motorlar',
    voltage: 'Motor (VCC2): 4.5V - 36V, Mantiq (VCC1): 5V DC',
    current: '600 mA kanal boshiga, 1.2A cho\'qqi',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    specs: [
      { label: 'Korpus', value: 'DIP-16 (Breadboardga juda mos)' },
      { label: 'Kanallar soni', value: '2 ta ikki tomonlama DC motor yoki 1 ta Stepper' },
      { label: 'Ichki diodlar', value: 'O\'rnatilgan induktiv himoya diodlari (Clamping diodes)' },
      { label: 'Chiqish toki', value: 'Kanal boshiga 0.6A doimiy' },
    ],
    overview:
      "L293D — elektronika asoslarini o'rganishda eng mashhur dvigatel drayveri mikrosxemasi. Qayerda ishlatilishi: Maket platada motor yo'nalishi va tezligini boshqarishni o'rganish, kichik robotik o'yinchoqlar, relalar va elektromagnit klapanlarni boshqarish.",
    howItWorks:
      "Ichidagi to'rtta tranzistorli H-ko'prik orqali dvigatel qutblarini almashtirib, dvigatelni oldinga yoki orqaga aylantiradi. Enable pini orqali PWM tezlik sozlanadi.",
    pinout: [
      { pin: '1', name: 'Enable 1,2', type: 'PWM', description: '1-motor tezlik pini' },
      { pin: '2, 7', name: 'Input 1, 2', type: 'Digital', description: '1-motor yo\'nalish kirishlari' },
      { pin: '3, 6', name: 'Output 1, 2', type: 'Special', description: '1-motor ulanadigan oyoqchalar' },
      { pin: '4, 5, 12, 13', name: 'GND', type: 'GND', description: 'Umumiy yer va radiator' },
      { pin: '8', name: 'VCC2', type: 'Quvvat', description: 'Dvigatel quvvati (4.5V-36V)' },
      { pin: '16', name: 'VCC1', type: 'VCC', description: 'Mantiqiy quvvat (5V)' },
    ],
    wiringDiagram: {
      title: 'L293D Breadboard ulanishi',
      description: 'Arduino raqamli pinlariga ulanadi:',
      connections: [
        { from: 'L293D Pin 16 (VCC1)', to: 'Arduino 5V', note: 'Mantiq' },
        { from: 'L293D Pin 8 (VCC2)', to: 'Tashqi batareya 9V', note: 'Motor quvvati' },
        { from: 'L293D Pin 4, 5', to: 'Arduino GND', note: 'Yer' },
        { from: 'L293D Pin 2 (IN1)', to: 'Arduino D3', note: 'Yo\'nalish' },
        { from: 'L293D Pin 7 (IN2)', to: 'Arduino D4', note: 'Yo\'nalish' },
        { from: 'L293D Pin 1 (EN1)', to: 'Arduino D5 (PWM)', note: 'Tezlik' },
      ],
    },
    sampleCode: {
      title: 'L293D orqali kichik DC motorni boshqarish',
      description: 'Yo\'nalish va tezlikni o\'zgartirish.',
      code: `const int in1 = 3;
const int in2 = 4;
const int en1 = 5;

void setup() {
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(en1, OUTPUT);
}

void loop() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  analogWrite(en1, 200);
  delay(2000);

  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
  delay(2000);
}`,
      explanation: [
        'Katta oqim oqganda chip qizishi mumkin, shuning uchun 4 ta o\'rta GND pini sovutish vazifasini ham bajaradi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Chip juda qizib ketmoqda',
        cause: 'Dvigatel 600 mA dan ko\'p tok talab qilmoqda yoki val tiqilib qolgan.',
        solution: 'Kuchliroq motor uchun TB6612FNG yoki L298N modulidan foydalaning.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 34. LM2596 Step-Down Buck Moduli
  // ─────────────────────────────────────────────
  {
    id: '34',
    slug: 'lm2596-step-down',
    name: 'LM2596 Sozlanuvchi Impulsi Pastlatuvchi (Step-Down Buck) Moduli',
    shortDesc: '4-40V kirish kuchlanishini barqaror 1.25-35V ga qizimasdan va yuqori samaradorlik bilan pasaytirib beradi.',
    category: 'Quvvat ta\'minoti',
    voltage: 'Kirish: 4V - 40V DC, Chiqish: 1.25V - 37V DC',
    current: '2A doimiy, 3A radiator bilan',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    specs: [
      { label: 'Samaradorlik (FIK)', value: '92% gacha yuqori energiya samaradorligi' },
      { label: 'Kommutatsiya chastotasi', value: '150 kHz' },
      { label: 'Sozlash', value: 'Ko\'p aylanali ko\'k trimmer potensiometri orqali' },
      { label: 'Kuchlanish farqi', value: 'Kirish chiqishdan kamida 1.5V yuqori bo\'lishi kerak' },
    ],
    overview:
      "LM2596 moduli — robototexnika loyihalarida akkumulyator yoki 12V/24V adapter kuchlanishini tushirish uchun eng ko'p ishlatiladigan qurilma. Qayerda ishlatilishi: 12V yoki 24V akkumulyatordan Arduino va datchiklar uchun barqaror 5V olish, kuchli servolar va motor drayverlariga mustaqil quvvat berish.",
    howItWorks:
      "Impulsli tranzistorli kalit va induktiv g'altak yordamida ortiqcha kuchlanishni issiqlikka aylantirmasdan (chiziqli stabilizatorlardan farqli ravishda) samarali pasaytiradi.",
    pinout: [
      { pin: 'IN+', name: 'Kirish Musbat', type: 'Quvvat', description: '4V dan 40V gacha DC manba' },
      { pin: 'IN-', name: 'Kirish Manfiy', type: 'GND', description: 'Umumiy yer' },
      { pin: 'OUT+', name: 'Chiqish Musbat', type: 'Quvvat', description: 'Sozlangan barqaror kuchlanish (masalan 5.0V)' },
      { pin: 'OUT-', name: 'Chiqish Manfiy', type: 'GND', description: 'Chiqish umumiy yer' },
    ],
    wiringDiagram: {
      title: 'LM2596 ulash va sozlash tartibi',
      description: 'Avval multimetr bilan chiqish kuchlanishi 5V ga sozlanadi, keyin Arduinoga ulanadi:',
      connections: [
        { from: 'Akkumulyator 12V', to: 'LM2596 IN+ va IN-', note: 'Kirish quvvati' },
        { from: 'LM2596 OUT+', to: 'Arduino 5V pini', note: 'Sozlangan 5.0V' },
        { from: 'LM2596 OUT-', to: 'Arduino GND', note: 'Umumiy yer' },
      ],
    },
    sampleCode: {
      title: 'Kuchlanishni analog pin orqali monitoring qilish',
      description: 'Arduino A0 orqali batareya kuchlanishini nazorat qilish kodi.',
      code: `const int voltagePin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(voltagePin);
  float voltage = sensorValue * (5.0 / 1023.0);
  Serial.print("Chiqish kuchlanishi: ");
  Serial.print(voltage);
  Serial.println(" V");
  delay(1000);
}`,
      explanation: [
        'LM2596 apparat moduli bo\'lib, kod talab qilmaydi; datchik kodi faqat batareya darajasini tekshirish uchun ko\'rsatilgan.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Trimmerni burganda ham chiqish kuchlanishi o\'zgarmayapti',
        cause: 'Ko\'p aylanali trimmer dastlab 10-15 marta soat strelkasiga qarshi buralishi kerak bo\'lishi mumkin.',
        solution: 'Multimetrni ulab ko\'k trimmerni soat strelkasiga qarshi kamida 10-15 marta buring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 35. MT3608 Step-Up Boost Moduli
  // ─────────────────────────────────────────────
  {
    id: '35',
    slug: 'mt3608-step-up',
    name: 'MT3608 Ixcham Kuchlanish Oshiruvchi (Step-Up Boost) Moduli',
    shortDesc: 'Past kuchlanishni (masalan bitta 3.7V batareya) 5V, 9V, 12V yoki 28V gacha oshirib beradi.',
    category: 'Quvvat ta\'minoti',
    voltage: 'Kirish: 2V - 24V DC, Chiqish: 5V - 28V DC',
    current: '2A gacha maksimal cho\'qqi toki',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800',
    specs: [
      { label: 'Maksimal chiqish kuchlanishi', value: '28V DC' },
      { label: 'Samaradorlik', value: '93% gacha' },
      { label: 'Kommutatsiya chastotasi', value: '1.2 MHz (juda kichik o\'lchamli g\'altak)' },
      { label: 'O\'lchami', value: '36 x 17 x 14 mm miniatyur' },
    ],
    overview:
      "MT3608 — bitta litiy-ionli batareyadan (3.7V) yuqoriroq kuchlanish olish uchun ideal miniatyur modul. Qayerda ishlatilishi: 18650 akkumulyatoridan Arduino uchun 5V olish, 12V rele va motorlarni bitta batareyadan quvvatlash, portativ cho'ntak gadjetlari va IoT sensor tugunlari.",
    howItWorks:
      "Yuqori chastotali (1.2 MHz) kuchaytiruvchi induktiv zanjir orqali kiruvchi past kuchlanishdan yuqori chiqish kuchlanishini generatsiya qiladi.",
    pinout: [
      { pin: 'VIN+', name: 'Kirish Musbat', type: 'Quvvat', description: '2V dan 24V gacha (masalan 3.7V Li-ion)' },
      { pin: 'VIN-', name: 'Kirish Manfiy', type: 'GND', description: 'Batareya manfiy qutbi' },
      { pin: 'VOUT+', name: 'Chiqish Musbat', type: 'Quvvat', description: 'Oshirilgan kuchlanish (masalan 9V yoki 12V)' },
      { pin: 'VOUT-', name: 'Chiqish Manfiy', type: 'GND', description: 'Chiqish umumiy yer' },
    ],
    wiringDiagram: {
      title: '3.7V batareyani 9V ga ko\'tarish',
      description: 'Avval trimmer bilan chiqish kuchlanishini sozlang:',
      connections: [
        { from: 'Li-ion Batareya (3.7V)', to: 'MT3608 VIN+ va VIN-', note: 'Kirish' },
        { from: 'MT3608 VOUT+', to: 'Arduino Vin pini (7-9V)', note: 'Oshirilgan quvvat' },
        { from: 'MT3608 VOUT-', to: 'Arduino GND', note: 'Yer' },
      ],
    },
    sampleCode: {
      title: 'Batareya kuchlanishini nazorat qilish',
      description: 'Analog pin orqali batareya zaryadini tekshirish.',
      code: `const int batPin = A1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int raw = analogRead(batPin);
  float v = raw * (5.0 / 1023.0);
  Serial.print("Batareya kuchlanishi: ");
  Serial.print(v);
  Serial.println(" V");
  if (v < 3.3) {
    Serial.println("DIQQAT: Batareya quvvatsizlandi!");
  }
  delay(2000);
}`,
      explanation: [
        'MT3608 apparat moduli bo\'lib, kod talab qilmaydi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Kuchlanish oshmayapti, kirish kuchlanishiga teng bo\'lib turibdi',
        cause: 'Ko\'p aylanali trimmer dastlab bir necha bor soat strelkasiga qarshi buralishi kerak.',
        solution: 'Trimmerni kamida 10-20 marta soat strelkasiga qarshi buring.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 36. APDS-9960 Imo-Ishoʻra va Rang Datchigi
  // ─────────────────────────────────────────────
  {
    id: '36',
    slug: 'apds-9960',
    name: 'APDS-9960 Imo-Ishoʻra, Rang, Yorugʻlik va Yaqinlik Datchigi (RGB & Gesture)',
    shortDesc: 'Qo\'l harakatlarini (yuqoriga, pastga, chapga, o\'ngga) va ob\'yekt rangini kontaktsiz aniq taniy oladi.',
    category: 'Sensorlar',
    voltage: '3.3V DC (Diqqat: 5V ga ulamang, faqat 3.3V)',
    current: '1 µA (kutishda), 790 µA (ishlaganda)',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
    specs: [
      { label: 'Imo-ishora yo\'nalishlari', value: 'Yuqoriga, Pastga, Chapga, O\'ngga, Yaqin, Uzoq' },
      { label: 'Rangni aniqlash', value: 'Qizil, Yashil, Moviy (RGB) va Atrof yorug\'lik (Clear)' },
      { label: 'Yaqinlik masofasi', value: '10 - 20 sm gacha kontaktsiz masofa' },
      { label: 'Protokol', value: 'I2C (Standart manzil 0x39)' },
    ],
    overview:
      "APDS-9960 — smartfonlar va zamonaviy avtomobillarda qo'llanuvchi juda ilg'or sensor (Arduino Nano 33 BLE Sense platasiga ham o'rnatilgan). Qayerda ishlatilishi: Kontaktsiz imo-ishoralar orqali yoritishni yoki musiqa pleyerni boshqarish, ranglarni saralovchi avtomatlashtirilgan robotlar, kontaktsiz smart eshik qulflari va gigiyenik tugmalar.",
    howItWorks:
      "Modulda 4 ta yo'nalishli IQ (infraqizil) fotodiod va bitta IQ svetodiod mavjud. Qo'l sensor ustidan o'tganda aks etgan infraqizil nurning fazaviy o'zgarishi orqali harakat yo'nalishi aniqlanadi.",
    pinout: [
      { pin: '1', name: 'VL', type: 'Quvvat', description: 'IQ svetodiod quvvati (3.3V ga ulanadi)' },
      { pin: '2', name: 'GND', type: 'GND', description: 'Umumiy yer' },
      { pin: '3', name: 'VCC', type: 'VCC', description: '3.3V quvvat (faqat 3.3V!)' },
      { pin: '4', name: 'SDA', type: 'I2C', description: 'I2C Data (Arduino A4)' },
      { pin: '5', name: 'SCL', type: 'I2C', description: 'I2C Clock (Arduino A5)' },
      { pin: '6', name: 'INT', type: 'Special', description: 'Uzilish pini (Arduino D2)' },
    ],
    wiringDiagram: {
      title: 'APDS-9960 Arduino Uno ulanishi',
      description: 'Quvvat faqat 3.3V ga ulanadi:',
      connections: [
        { from: 'APDS-9960 VCC va VL', to: 'Arduino 3.3V', note: 'Quvvat' },
        { from: 'APDS-9960 GND', to: 'Arduino GND', note: 'Yer' },
        { from: 'APDS-9960 SCL', to: 'Arduino A5', note: 'I2C SCL' },
        { from: 'APDS-9960 SDA', to: 'Arduino A4', note: 'I2C SDA' },
        { from: 'APDS-9960 INT', to: 'Arduino D2', note: 'Interrupt' },
      ],
    },
    sampleCode: {
      title: 'Qo\'l harakatlari yo\'nalishini aniqlash',
      description: 'SparkFun_APDS9960 kutubxonasi bilan imo-ishorani o\'qish.',
      code: `#include <Wire.h>
#include <SparkFun_APDS9960.h>

SparkFun_APDS9960 apds = SparkFun_APDS9960();

void setup() {
  Serial.begin(9600);
  if (apds.init()) {
    Serial.println("APDS-9960 ishga tushdi!");
  }
  if (apds.enableGestureSensor(true)) {
    Serial.println("Imo-ishora sensori faol! Qo'lingizni siltang.");
  }
}

void loop() {
  if (apds.isGestureAvailable()) {
    switch (apds.readGesture()) {
      case DIR_UP:    Serial.println("Harakat: YUQORIGA"); break;
      case DIR_DOWN:  Serial.println("Harakat: PASTGA"); break;
      case DIR_LEFT:  Serial.println("Harakat: CHAPGA"); break;
      case DIR_RIGHT: Serial.println("Harakat: O'NGA"); break;
      case DIR_NEAR:  Serial.println("Harakat: YAQINLASHISH"); break;
      case DIR_FAR:   Serial.println("Harakat: UZOQLASHISH"); break;
      default: break;
    }
  }
}`,
      explanation: [
        'Datchik oldida 5-10 sm masofada qo\'lni sekin siltash orqali yo\'nalish aniq aniqlanadi.',
      ],
    },
    troubleshooting: [
      {
        issue: 'Imo-ishoralar aniqlanmayapti',
        cause: 'Qo\'l juda uzoq yoki quyosh nuri IQ sensoriga to\'g\'ridan-to\'g\'ri tushmoqda.',
        solution: 'Datchik ustidan 5-15 sm masofada harakatlaning va kuchli quyosh nuridan pana qiling.',
      },
    ],
  },
];
