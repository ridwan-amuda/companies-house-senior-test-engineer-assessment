const {Given,When,Then} = require('@cucumber/cucumber');
const assert = require('node:assert');

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

When(
    'the user attempts to login with invalid credentials',
    async function () {
        const homePage = this.poManager.getHomePage();
        const loginPage = this.poManager.getLoginPage();

        await homePage.openLogin();

        this.loginErrorMessage =
            await loginPage.loginWithInvalidCredentials(
                testData.invalidUser.username,
                testData.invalidUser.password
            );
    }
);


Then('the login attempt should be rejected', async function () {
    assert.ok(
        this.loginErrorMessage,
        'Expected an authentication error message to be displayed'
    );

    const loginPage = this.poManager.getLoginPage();

    await expect(loginPage.loggedInUser).not.toBeVisible();
});

