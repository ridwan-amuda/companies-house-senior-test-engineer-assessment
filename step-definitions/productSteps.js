const {
    When,
    Then
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const assert = require('node:assert');

When(
    'the user selects the {string} category',
     async function (category) {
        const productPage =
            this.poManager.getProductPage();

        await productPage.selectCategory(category);
    }
);

Then(
    'phone products should be displayed',
    async function () {
        const productPage =
            this.poManager.getProductPage();

        const phoneProduct =
            productPage.getProductByName('Samsung galaxy s6');

        await expect(phoneProduct).toBeVisible();
    }
    
);