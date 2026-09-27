const {
    When,
    Then
} = require('@cucumber/cucumber');

const assert = require('node:assert');


When(
    'the user selects {string}',
    async function (productName) {
        const productPage =
            this.poManager.getProductPage();

        await productPage.selectProduct(productName);

        this.selectedProductName =
            await productPage.getSelectedProductName();

        this.selectedProductPrice =
            await productPage.getSelectedProductPrice();
    }
);


When(
    'the user adds the product to the cart',
    async function () {
        const productPage =
            this.poManager.getProductPage();

        await productPage.addProductToCart();
    }
);


When(
    'the user navigates to the cart',
    async function () {
        const homePage =
            this.poManager.getHomePage();

        await homePage.openCart();
    }
);


Then(
    'the selected product should be displayed in the cart',
    async function () {
        const cartPage =
            this.poManager.getCartPage();

        const cartProductName =
            await cartPage.getProductName(
                this.selectedProductName
            );

        assert.strictEqual(
            cartProductName,
            this.selectedProductName,
            'Expected the selected product to be displayed in the cart'
        );
    }
);


Then(
    'the cart price should match the selected product price',
    async function () {
        const cartPage =
            this.poManager.getCartPage();

        const cartPrice =
            await cartPage.getProductPrice(
                this.selectedProductName
            );

        const selectedPrice =
            this.selectedProductPrice
                .replace('$', '')
                .split(' ')[0];

        assert.strictEqual(
            cartPrice,
            selectedPrice,
            'Expected the cart price to match the selected product price'
        );
    }
);