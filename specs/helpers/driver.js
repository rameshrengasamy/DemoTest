require('chromedriver');

let { Builder } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');

let driver = null;

/******************************************************************************
 * buildChromeDriver - Creates new webdriver instance for chrome
 *
 * @param  {}
 * @return {type}      browser Object
 ******************************************************************************/
const buildChromeDriver = () => {
  let options = new chrome.Options();
  options.addArguments('--log-level=3');
  try {
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    return driver;
  } catch (err) {
    console.log(err)
  }
};

export default buildChromeDriver;
