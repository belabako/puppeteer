const puppeteer = require('puppeteer');
const url = 'https://www.phptravels.net/';

async function test1() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1920, height: 1080});
  await page.goto(url);
  await page.screenshot({path: 'test1.png', fullPage: true});
  
  
  await browser.close();
  console.log('Success!1');
}

async function test2() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({width: 1920, height: 1080});

  await page.screenshot({path: 'test2.png', fullPage: true});
  await browser.close();
  console.log('Success!2');
}

test1();
test2();