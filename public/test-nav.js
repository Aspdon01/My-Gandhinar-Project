const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/index.html');
    
    console.log('Waiting for splash to finish...');
    await page.waitForTimeout(1000); // Wait for splash
    
    console.log('Clicking Home on left nav...');
    await page.click('.dsk-nav-item[data-tab="home"]');
    await page.waitForTimeout(500);
    
    let display = await page.$eval('#screen-home', el => getComputedStyle(el).display);
    console.log('Home Display:', display);
    
    console.log('Clicking Leaderboard on left nav...');
    await page.click('.dsk-nav-item[data-tab="leaderboard"]');
    await page.waitForTimeout(500);
    
    display = await page.$eval('#screen-leaderboard', el => getComputedStyle(el).display);
    console.log('Leaderboard Display:', display);

    await browser.close();
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
})();
