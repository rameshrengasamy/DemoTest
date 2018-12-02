import buildChromeDriver from './driver';

let browser = null;

before(async () => {
  browser = await buildChromeDriver();
  global.browser = browser;
});

after(async () => {
  await browser.quit();
});
