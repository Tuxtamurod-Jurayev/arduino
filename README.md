# ArduinoUz — Arduino va Robototexnika Bo'yicha Interaktiv Qo'llanma

O'zbek tilidagi birinchi keng qamrovli, zamonaviy va interaktiv Arduino, mikrokontrollerlar, datchiklar hamda amaliy loyihalar ta'limiy platformasi.

![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🌟 Loyiha Maqsadi va Imkoniyatlari

ArduinoUz — elektronika ixlosmandlari, maktab va universitet talabalari hamda robototexnika o'qituvchilari uchun mo'ljallangan to'liq o'zbek tilidagi ochiq portal bo'lib, quyidagi 4 ta asosiy mustaqil moduldan iborat:

### 1. 🔌 Qurilmalar va Komponentlar Katalogi (Hardware Hub) (`/components`)
- Datchiklar, displeylar, servomotorlar, relelar va aloqa modullari (HC-SR04, DHT11, OLED 0.96", SG90, Rele 5V, MQ-2, PIR, LCD 1602).
- Har bir komponent uchun:
  - Texnik parametrlar (kuchlanish, tok sarfi, o'lchash diapazoni).
  - **Pinout (Oyoqchalar sxemasi):** Rangli badgelar bilan VCC, GND, Digital, Analog, I2C, SPI oyoqchalari vazifasi.
  - Arduino Uno bilan ulanish jadvali va tavsifi.
  - C++ sinov kodi (Syntax highlighting va 1-bosishda nusxalash tugmasi bilan).
  - Eng ko'p uchraydigan muammolar va ularning yechimlari (Troubleshooting).

### 2. ⚡ Platalar va Rasmiy Hujjatlar (`/boards`)
- Arduino Uno R3, Arduino Nano, Arduino Mega 2560 hamda ESP32 DevKit V1.
- **Interaktiv Pinout Xaritasi:** PWM, Analog (ADC), I2C, SPI, UART va quvvat oyoqchalarini filtrlab ko'rish imkoniyati.
- Mikrokontroller chipi arxitekturasi va parametrlari.
- Arduino IDE dasturida **CH340 / CP2102 drayverlarini o'rnatish** va platani ulash bo'yicha bosqichma-bosqich o'zbekcha yo'riqnoma.

### 3. 📖 Arduino C/C++ Dasturlash Tili Spravochnigi (`/reference`)
- Stripe / Nextra uslubidagi hujjatlar arxitekturasi (doimiy chap daraxtsimon menyu).
- Bo'limlar:
  - *Asosiy tuzilma:* `setup()`, `loop()`
  - *Raqamli I/O:* `pinMode()`, `digitalWrite()`, `digitalRead()`
  - *Analog I/O:* `analogRead()`, `analogWrite()` (PWM)
  - *Vaqt:* `delay()`, `millis()` (asinxron taymerlar)
  - *Matematika:* `map()`, `constrain()`
  - *Serial aloqa:* `Serial.begin()`, `Serial.print()`, `Serial.println()`
  - *Boshqaruv operatorlari:* `if...else`, `for` sikli
  - *Ma'lumot turlari:* `int`, `float`
- Har bir funksiya sahifasida: Sintaksis, parametrlar jadvali, qaytuvchi qiymat, amaliy kod va muhim eslatmalar.

### 4. 🛠 Bosqichma-bosqich Loyihalar (Instructables Uslubida) (`/projects`)
- Haqiqiy amaliy loyihalar (Masofa o'lchagich, Ob-havo stansiyasi, Avtomatik sug'orish, Gaz signali).
- **Interaktiv BOM (Bill of Materials):** Kerakli qismlar ro'yxatini yig'ish jarayonida belgilab borish (checkbox) va komponentlar sahifasiga tezkor o'tish havolalari.
- Qadam-baqadam yo'riqnoma: Sxemani yig'ish &rarr; Kutubxonalarni o'rnatish &rarr; Dastur kodi &rarr; Sinov va nosozliklarni bartaraf etish.
- **Wokwi Simulyator Integratsiyasi:** Sahifadan chiqmasdan, brauzerning o'zida loyiha sxemasi va kodini real vaqtda ishga tushirib ko'rish imkoniyati!

### 5. 🔍 Global Qidiruv va Qo'shimcha Qulayliklar
- **Command Palette (`Ctrl + K` / `Cmd + K`):** Saytning istalgan sahifasidan datchiklar, funksiyalar va loyihalarni tezkor topish.
- **Dark / Light Mode:** Developer-first qorong'i va yorug' rejimlar.
- **Sevimlilar (Bookmarks):** Qiziqarli komponent va kodlarni brauzer xotirasiga (LocalStorage) saqlab qo'yish.

---

## 🚀 O'rnatish va Ishga Tushirish

### Talablar:
- Node.js 18+ yoki 20+
- npm yoki pnpm

```bash
# Repozitoriyni klonlash
git clone https://github.com/Tuxtamurod-Jurayev/arduino.git

# Loyiha papkasiga o'tish
cd arduino

# Kutubxonalarni o'rnatish
npm install

# Dasturchi rejimida ishga tushirish (Local dev server)
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

### Ishchi versiyani yig'ish (Production Build):
```bash
npm run build
npm run start
```

---

## 🎨 Texnologik Stek

- **Frontend:** Next.js 16 (App Router, Server & Client Components)
- **Til:** TypeScript
- **Dizayn & Stillar:** Tailwind CSS v4
- **Ikonkalar:** Lucide React
- **Simulyatsiya:** Wokwi Embedded Simulator

---

## 📄 Litsenziya

MIT Litsenziyasi asosida ochiq ta'limiy maqsadlarda foydalanish mumkin.
