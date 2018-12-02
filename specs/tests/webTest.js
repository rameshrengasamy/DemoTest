import { expect } from 'chai'
import Page from '../pages/page';
import Base from '../pages/base';
import '../helpers/hooks.js';

const { By, until, Button, Key } = require('selenium-webdriver');
const argv = require('yargs').argv;
const pageObj = new Page();
const basePO = new Base();

let elem = null;
let colName = null;

describe("Verify Creating Text/Number columns from website", async () => {
  it('should load homepage', async () => {
    await basePO.open('https://www.smartsheet.com/');
  });
  it('should login', async () => {
    await pageObj.click('Log In');
    if (!argv.user) throw new Error(chalk.bold.red('username not specified to login'));
    if (!argv.pwd) throw new Error(chalk.bold.red('password not specified to login'));
    await pageObj.fillValue('Email', null, argv.user);
    await pageObj.click('Continue');
    await pageObj.fillValue('Password', null, argv.pwd);
    await pageObj.click('Log In');
  });
  it('should create new Grid Sheet', async () => {
    await pageObj.click('Create New');
    await pageObj.click('Grid');
    await pageObj.fillValue('Sheet Name', null, 'DemoWEBSheet');
    await pageObj.click('OK');
    await browser.sleep(600);
  });
  it('should insert new Text/Number Column', async () => {
    await pageObj.click('Insert Column');
    colName = 'DemoWEBColumn';
    await pageObj.fillValue('Column Name', null, colName);
    await pageObj.click('Text/Number Column');
    await pageObj.click('OK');
    elem = await browser.findElement(By.xpath("//body"));
    await elem.sendKeys(Key.chord(Key.CONTROL, "s"));
    return colName;
  });
  it('should verify text/number column added succesfully', async () => {
    elem = await browser.findElement(By.xpath(`.//div[text()="${colName}"]`));
    await browser.actions({bridge: true}).contextClick( elem, Button.RIGHT).perform();
    elem = await browser.findElement(By.xpath('.//span[contains(text(), "Edit Column Properties")]'));
    let colCurrType = await elem.getAttribute('innerText');
    colCurrType = colCurrType.split(':').pop().replace(/\s/g, '');
    expect(colCurrType).to.equal('Text/Number');
  });
});
