import { expect } from "chai";
import {postRequest, getRequest} from '../helpers/request';
import { createSheetPOSTData } from '../data/payload';

const argv = require('yargs').argv;
const chalk = require('chalk');

let apiToken = null;
let response = null;
let sheetId = null;

describe("Validate SmartSheet API endpoints", async () => {
  describe("Create Sheets", async () => {
    it("should be able to succesfully create sheets in Sheets folder", async () => {
      if (!argv.apiToken) throw new Error(chalk.bold.red('api token is not specified'));
      apiToken = argv.apiToken;
      response = await postRequest('https://api.smartsheet.com/2.0/sheets', `Bearer ${apiToken}`, createSheetPOSTData);
      sheetId = response.data['result']['id'];
      expect(response.status).to.equal(200);
      return [apiToken, sheetId];
    })
    it("should be able to succesfully verify the created sheet", async () => {
      response = await getRequest(`https://api.smartsheet.com/2.0/sheets/${sheetId}`, `Bearer ${apiToken}`);
      expect(response.status).to.equal(200);
      expect(response.data['columns'][0]['type']).to.equal('TEXT_NUMBER');
      expect(response.data['columns'][1]['type']).to.equal('TEXT_NUMBER');
    })
  })
})
