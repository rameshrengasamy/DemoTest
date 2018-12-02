const { By, until } = require('selenium-webdriver');
const chalk = require('chalk');

let element = null;
let elem = null;

export default class Base {
  /******************************************************************************
   * open - Opens an url in the browser
   *
   * @param  {string} path - the full url path to open in browser
   * @return {}
   ******************************************************************************/
  async open(path) {
    await browser.get(path);
    await browser.manage().window().maximize();
  }

  /******************************************************************************
   * click - clicks an element on the page
   *
   * @param  {string} fieldName - the name of the field to click
   *                              (should match as defined in the page file)
   * @param  {string} selector - selector to use - xpath, css, ... default:xpath
   * @return {}
   ******************************************************************************/
  async click(fieldName, selector) {
    element = this.getElemSelector(fieldName, selector);
    switch (element[1]) {
      case 'xpath':
        elem = await browser.wait(until.elementLocated(By.xpath(element[0])));
        await elem.click();
        break;
      default:
        break;
    }
  }

  /******************************************************************************
   * fillValue - fills value inside an input field
   *
   * @param  {string} fieldName - the name of the field to fill value
   *                              (should match as defined in the page file)
   * @param  {string} selector - selector to use - xpath, css, ... default:xpath
   * @param  {string} value - value to fill
   * @return {}
   ******************************************************************************/
  async fillValue(fieldName, selector, value) {
    element = this.getElemSelector(fieldName, selector);
    switch (element[1]) {
      case 'xpath':
        elem = await browser.wait(until.elementLocated(By.xpath(element[0])));
        await elem.sendKeys(value);
        break;
      default:
        break;
    }
  }
}
