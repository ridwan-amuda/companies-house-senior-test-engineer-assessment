const {Given,When,Then} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');
const { testData } = require('../utils/testData');

Given('the user is on the DemoBlaze homepage', async function () {
    const homePage = this.poManager.getHomePage();

    await homePage.navigate();
});

When('the user logs in with valid credentials', async function () {
    const homePage = this.poManager.getHomePage();
    const loginPage = this.poManager.getLoginPage();

    await homePage.openLogin();

    await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );
});

Then('the user should be successfully logged in', async function () {
    const loginPage = this.poManager.getLoginPage();

    await expect(loginPage.loggedInUser).toContainText(
        testData.validUser.username);
});