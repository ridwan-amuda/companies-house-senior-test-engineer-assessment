const {
    Before,
    After,
    BeforeAll,
    AfterAll
} = require('@cucumber/cucumber');

const { chromium } = require('playwright');
const { POManager } = require('../pages/POManager');

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