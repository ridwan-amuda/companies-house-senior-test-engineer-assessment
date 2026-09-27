require('dotenv').config();
const {
    Before,
    After,
    BeforeAll,
    AfterAll,
    setDefaultTimeout
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');
const { POManager } = require('../pages/POManager');

setDefaultTimeout(30 * 1000);

let browser;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: true
    });
});

Before(async function () {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();

    this.poManager = new POManager(this.page);
});

After(async function () {
    await this.context.close();
});

AfterAll(async function () {
    await browser.close();
});