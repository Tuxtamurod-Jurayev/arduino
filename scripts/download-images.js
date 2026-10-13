const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BOARDS_DIR = path.join(__dirname, '../public/images/boards');
const COMPONENTS_DIR = path.join(__dirname, '../public/images/components');

// Make sure directories exist
fs.mkdirSync(BOARDS_DIR, { recursive: true });
fs.mkdirSync(COMPONENTS_DIR, { recursive: true });

// Images to download: [filename, url]
const BOARD_IMAGES = [
  ['arduino-uno-r3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/800px-Arduino_Uno_-_R3.jpg'],
  ['arduino-nano.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Arduino-nano-usb-uno-diecimila.jpg/640px-Arduino-nano-usb-uno-diecimila.jpg'],
  ['arduino-mega-2560.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Arduino_Mega_2560_Rev3.jpg/800px-Arduino_Mega_2560_Rev3.jpg'],
  ['arduino-leonardo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Arduino_Leonardo_pinout.png/800px-Arduino_Leonardo_pinout.png'],
  ['esp8266-nodemcu.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ESP-01.jpg/640px-ESP-01.jpg'],
  ['esp32-devkit-v1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg/640px-ESP32_Espressif_ESP-WROOM-32_Dev_Board.jpg'],
  ['arduino-mkr-wifi-1010.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ArduinoMKR1010.jpg/640px-ArduinoMKR1010.jpg'],
  ['arduino-nano-33-ble.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Arduino_nano_33_ble.jpg/640px-Arduino_nano_33_ble.jpg'],
  ['arduino-nano-33-iot.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Arduino_nano_33_IoT.jpg/640px-Arduino_nano_33_IoT.jpg'],
  ['arduino-uno-wifi-rev2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/800px-Arduino_Uno_-_R3.jpg'],
];

const COMPONENT_IMAGES = [
  // Already local but confirm we have them, plus missing ones
  ['mq-2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MQ2_Gas_Sensor_Module.jpg/640px-MQ2_Gas_Sensor_Module.jpg'],
  ['pir-hc-sr501.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PIR_Sensor.jpg/640px-PIR_Sensor.jpg'],
  ['lcd1602-i2c.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/16x2LCD.jpg/640px-16x2LCD.jpg'],
  ['l298n.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/L298N_Motor_Bridge_Controller_Board.jpg/640px-L298N_Motor_Bridge_Controller_Board.jpg'],
  ['hc-05.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bluetooth_module_HC-05.jpg/640px-Bluetooth_module_HC-05.jpg'],
  ['ldr-photoresistor.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gluehlampe_01_KMJ.jpg/640px-Gluehlampe_01_KMJ.jpg'],
  ['a4988-stepper-driver.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/A4988_stepper_motor_driver.jpg/640px-A4988_stepper_motor_driver.jpg'],
  ['neo-6m-gps.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/GPS_reciever_by_GlobalTop-Tech.jpg/640px-GPS_reciever_by_GlobalTop-Tech.jpg'],
  ['hx711-load-cell.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Load_cell_-_S_type.jpg/640px-Load_cell_-_S_type.jpg'],
  ['dfplayer-mini.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/SD_card_and_microSD.jpg/640px-SD_card_and_microSD.jpg'],
  ['ws2812b-rgb.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LED_strip.jpg/640px-LED_strip.jpg'],
  ['pca9685-pwm-driver.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/PCA9685.jpg/640px-PCA9685.jpg'],
  ['tb6612fng.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sparkfun_TB6612FNG_Motor_Driver.jpg/640px-Sparkfun_TB6612FNG_Motor_Driver.jpg'],
  ['l293d-ic.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/L293D_IC.jpg/640px-L293D_IC.jpg'],
  ['lm2596-step-down.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Buck_converter.jpg/640px-Buck_converter.jpg'],
  ['mt3608-step-up.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Boost_converter.jpg/640px-Boost_converter.jpg'],
  ['apds-9960.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Proximity_sensor.jpg/640px-Proximity_sensor.jpg'],
];

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) {
      const stat = fs.statSync(destPath);
      if (stat.size > 10000) {
        console.log(`  SKIP (exists): ${path.basename(destPath)}`);
        return resolve(true);
      }
    }

    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith('https') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'ArduinoLearningApp/1.0 (educational; contact@example.com)',
        'Accept': 'image/*',
      }
    };

    function makeRequest(requestUrl, redirectCount = 0) {
      if (redirectCount > 5) {
        file.close();
        reject(new Error('Too many redirects'));
        return;
      }
      
      const proto = requestUrl.startsWith('https') ? https : http;
      proto.get(requestUrl, options, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
          makeRequest(response.headers.location, redirectCount + 1);
          return;
        }
        
        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(destPath);
          reject(new Error(`HTTP ${response.statusCode} for ${requestUrl}`));
          return;
        }
        
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          const stat = fs.statSync(destPath);
          if (stat.size < 5000) {
            fs.unlinkSync(destPath);
            reject(new Error(`File too small (${stat.size} bytes): ${path.basename(destPath)}`));
          } else {
            console.log(`  OK (${Math.round(stat.size/1024)}KB): ${path.basename(destPath)}`);
            resolve(true);
          }
        });
        file.on('error', (err) => {
          fs.unlinkSync(destPath);
          reject(err);
        });
      }).on('error', (err) => {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        reject(err);
      });
    }
    
    makeRequest(url);
  });
}

async function main() {
  console.log('Downloading board images...');
  for (const [filename, url] of BOARD_IMAGES) {
    const destPath = path.join(BOARDS_DIR, filename);
    try {
      await downloadImage(url, destPath);
    } catch (e) {
      console.error(`  FAIL: ${filename} - ${e.message}`);
    }
  }
  
  console.log('\nDownloading component images...');
  for (const [filename, url] of COMPONENT_IMAGES) {
    const destPath = path.join(COMPONENTS_DIR, filename);
    try {
      await downloadImage(url, destPath);
    } catch (e) {
      console.error(`  FAIL: ${filename} - ${e.message}`);
    }
  }
  
  console.log('\nDone!');
}

main();
