import Base from './base';
const chalk = require('chalk');

export default class Page extends Base {
  constructor() {
    super();
    this.elements = {
      'Insert Column': {
        xpath: './/button[@data-client-id="tlb-80"]',
      },
      'Log In': {
        xpath: './/a[text()="Log In"] | .//input[@value="Log In"]',
      },
      'Email': {
        xpath: './/input[@id="loginEmail"]',
      },
      'Continue': {
        xpath: './/input[@value="Continue"]',
      },
      'Password': {
        xpath: './/input[@id="loginPassword"]',
      },
      'Create New': {
        xpath: './/span[text()="Create New"]',
      },
      'Grid': {
        xpath: './/div[text()="Grid"]',
      },
      'Sheet Name': {
        xpath: './/input[@class="clsBorderBox clsUserEnteredText"]',
      },
      'OK': {
        xpath: './/span[text()="OK"]',
      },
      'Insert Column': {
        xpath: './/button[@data-client-id="tlb-80"]',
      },
      'Text/Number Column': {
        xpath: './/div[text()="Text/Number"]',
      },
      'Column Name': {
        xpath: './/input[@class="clsBorderBox clsUserEnteredText"]',
      }


    }
  }

  /******************************************************************************
   * getElemSelector - returns the selector for the specific field name
   *
   * @param  {string} fieldName - the name of the field (should match as in above)
   * @param  {string} selectorType - selector to use - xpath, css, ... default:xpath
   * @return {}
   ******************************************************************************/
  getElemSelector(fieldName = null, selectorType = null) {
    if (!fieldName) throw new Error(chalk.bold.red('field name not specified to retrieve selector'));
    if (!selectorType) selectorType = 'xpath';
    if (!(fieldName in this.elements)) throw new Error(chalk.bold.red('field name specified doesnt exist'));
    if (!(selectorType in this.elements[fieldName])) throw new Error(chalk.bold.red('selector type specified doesnt exist'));
    return [this.elements[fieldName][selectorType], selectorType];
  }
}
