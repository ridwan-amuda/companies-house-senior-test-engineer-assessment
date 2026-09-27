const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const { testData } = require('../utils/testData');


Given(
    'the user has added {string} to the cart',
    async function (productName) {
        const homePage =
            this.poManager.getHomePage();

        const productPage =
            this.poManager.getProductPage();

        await homePage.navigate();

        await productPage.selectProduct(productName);

        await productPage.addProductToCart();

        await homePage.openCart();
    }
);

When(
    'the user proceeds to checkout',
    async function () {
        const cartPage =
            this.poManager.getCartPage();

        await cartPage.proceedToCheckout();
    }
);

When(
    'the user enters valid purchase information',
    async function () {
        const checkoutPage =
            this.poManager.getCheckoutPage();

        await checkoutPage.enterPurchaseInformation(
            testData.purchaseData
        );
    }
);

When(
    'the user places the order',
    async function () {
        const checkoutPage =
            this.poManager.getCheckoutPage();

        await checkoutPage.placeOrder();
    }
);

Then(
    'the purchase should be confirmed',
    async function () {
        const checkoutPage =
            this.poManager.getCheckoutPage();

        await expect(
            checkoutPage.getConfirmationMessage()
        ).toContainText('Thank you for your purchase!');
    }
);