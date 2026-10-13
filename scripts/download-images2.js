const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BOARDS_DIR = path.join(__dirname, '../public/images/boards');
const COMPONENTS_DIR = path.join(__dirname, '../public/images/components');

fs.mkdirSync(BOARDS_DIR, { recursive: true });
fs.mkdirSync(COMPONENTS_DIR, { recursive: true });

// Use different sources - raw.githubusercontent.com, picsum placeholder, or other CDNs
// For boards - use Arduino official store CDN
const BOARD_IMAGES = [
  // Leonardo - use pinout image from arduino.cc
  ['arduino-leonardo.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1040x660/604a3538c15e081937dbfbd20aa60aad/a/0/a000057_iso_1_.jpg'],
  // ESP8266 NodeMCU
  ['esp8266-nodemcu.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/500x375/f8876a6f7f35d59e2a9b8c3e5f3a4e1c/nodemcu.jpg'],
  // ESP32
  ['esp32-devkit-v1.jpg', 'https://ae01.alicdn.com/kf/H7befff3e31614c38a2a3e60c8e0dbaa4e.jpg'],
  // MKR WiFi 1010
  ['arduino-mkr-wifi-1010.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1040x660/604a3538c15e081937dbfbd20aa60aad/a/b/abx00023_iso_1_.jpg'],
  // Nano 33 BLE
  ['arduino-nano-33-ble.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1040x660/604a3538c15e081937dbfbd20aa60aad/a/b/abx00030_iso_1_.jpg'],
  // Nano 33 IoT
  ['arduino-nano-33-iot.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1040x660/604a3538c15e081937dbfbd20aa60aad/a/b/abx00027_iso_1_.jpg'],
  // Uno WiFi Rev2
  ['arduino-uno-wifi-rev2.jpg', 'https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1040x660/604a3538c15e081937dbfbd20aa60aad/a/b/abx00021_iso_1_.jpg'],
];

// For components - use alternative sources
const COMPONENT_IMAGES = [
  ['mq-2.jpg', 'https://ae01.alicdn.com/kf/HTB1fWB7XtzvK1RkSnfoq6zMwVXae.jpg'],
  ['pir-hc-sr501.jpg', 'https://ae01.alicdn.com/kf/HTB1YFD6a21H3KVjSZFBq6zSMXXar.jpg'],
  ['lcd1602-i2c.jpg', 'https://ae01.alicdn.com/kf/HTB11FNua2fsK1RjSszgq6yXzpXak.jpg'],
  ['l298n.jpg', 'https://ae01.alicdn.com/kf/HTB1xkNEa8fH8KJjy1Xbq6zLdXXaL.jpg'],
  ['hc-05.jpg', 'https://ae01.alicdn.com/kf/HTB1aI8ubf9TBuNjy0Fcq6zeiFXaU.jpg'],
  ['ldr-photoresistor.jpg', 'https://ae01.alicdn.com/kf/HTB1mIGXafvsK1RjSspdq6AZepXaR.jpg'],
  ['a4988-stepper-driver.jpg', 'https://ae01.alicdn.com/kf/HTB1kXSLagHqK1RjSZJnq6zNLpXaV.jpg'],
  ['neo-6m-gps.jpg', 'https://ae01.alicdn.com/kf/HTB1kkuWa2fsK1RjSszaq6xXzpXaW.jpg'],
  ['hx711-load-cell.jpg', 'https://ae01.alicdn.com/kf/HTB1ixG2a5LaK1RjSZFxq6ymPFXa5.jpg'],
  ['dfplayer-mini.jpg', 'https://ae01.alicdn.com/kf/HTB1wWd3a3HqK1RjSZFPq6AwapXab.jpg'],
  ['ws2812b-rgb.jpg', 'https://ae01.alicdn.com/kf/HTB1iHlOb4rI8KJjy0Fpq6z5hVXam.jpg'],
  ['pca9685-pwm-driver.jpg', 'https://ae01.alicdn.com/kf/HTB1cR0lXtfJ8KJjy0Feq6xKEXXaT.jpg'],
  ['tb6612fng.jpg', 'https://ae01.alicdn.com/kf/HTB1.DhGXoLrK1Rjy1zbq6AenFXaJ.jpg'],
  ['lm2596-step-down.jpg', 'https://ae01.alicdn.com/kf/HTB1rGxOa5LaK1RjSZFxq6ymPFXaQ.jpg'],
  ['mt3608-step-up.jpg', 'https://ae01.alicdn.com/kf/HTB10.V.XfDH8KJjy1Xcq6bDTXXaI.jpg'],
  ['apds-9960.jpg', 'https://ae01.alicdn.com/kf/HTB1f9BWXtzvK1RkSnfoq6zMwVXaw.jpg'],
];

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) {
      const stat = fs.statSync(destPath);
      if (stat.size > 10000) {
        console.log(`  SKIP (exists ${Math.round(stat.size/1024)}KB): ${path.basename(destPath)}`);
        return resolve(true);
      }
    }

    const file = fs.createWriteStream(destPath);
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/',
      }
    };

    function makeRequest(requestUrl, redirectCount = 0) {
      if (redirectCount > 10) {
        file.close();
        reject(new Error('Too many redirects'));
        return;
      }
      
      const proto = requestUrl.startsWith('https') ? https : http;
      proto.get(requestUrl, options, (response) => {
        if ([301, 302, 307, 308].includes(response.statusCode)) {
          const loc = response.headers.location;
          if (!loc) { reject(new Error('Redirect without location')); return; }
          const nextUrl = loc.startsWith('http') ? loc : new URL(loc, requestUrl).toString();
          makeRequest(nextUrl, redirectCount + 1);
          return;
        }
        
        if (response.statusCode !== 200) {
          file.close();
          if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          const stat = fs.statSync(destPath);
          if (stat.size < 5000) {
            fs.unlinkSync(destPath);
            reject(new Error(`File too small (${stat.size} bytes)`));
          } else {
            console.log(`  OK (${Math.round(stat.size/1024)}KB): ${path.basename(destPath)}`);
            resolve(true);
          }
        });
        file.on('error', (err) => { if (fs.existsSync(destPath)) fs.unlinkSync(destPath); reject(err); });
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
  console.log('Downloading missing board images...');
  for (const [filename, url] of BOARD_IMAGES) {
    const destPath = path.join(BOARDS_DIR, filename);
    try {
      await downloadImage(url, destPath);
    } catch (e) {
      console.error(`  FAIL: ${filename} - ${e.message}`);
    }
  }
  
  console.log('\nDownloading missing component images...');
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
