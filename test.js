const puppeteer = require('puppeteer');
var randomstring = require("randomstring");
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

async function TS002POS() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url+'/register');
  await page.setViewport({width: 1920, height: 1080});
  
  await page.waitFor(2*1000);
  console.log('Fill Form');
  await page.type('input[name=firstname]',randomstring.generate(6));
  await page.type('input[name=lastname]',randomstring.generate(6));
  await page.type('input[name=phone]',randomstring.generate(6));
  const email = randomstring.generate(6)+'@'+randomstring.generate(6)+'.com';
  await page.type('input[name=email]',email);
  const pw = randomstring.generate(10);
  await page.type('input[name=password]',pw);
  await page.type('input[name=confirmpassword]',pw);
  
  console.log('Click to Sign Up button');
  await page.click('button[type=submit]');
  
  await page.waitFor(2*1000);
  await page.screenshot({path: 'TS002POS.png', fullPage: true});
  await browser.close();
  console.log('Success! (TS002POS)');
}

async function TS003() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url+'/login');
  await page.setViewport({width: 1920, height: 1080});
  await page.waitFor(2*1000);
  console.log('Fill user datas');
  await page.type('input[name=username]','user@phptravels.com');
  await page.type('input[name=password]','demouser');
  console.log('Click to submit button');
  await page.click('button[type=submit');
  
  await page.waitFor(5*1000);
  await page.screenshot({path: 'TS003.png', fullPage: true});
  await browser.close();
  console.log('Success! (TS003)');
}


TS002POS();
TS003();