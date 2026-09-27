class ProductPage {
    constructor(page) {
        this.page = page;

        this.productName = page.locator('.name');
        this.productPrice = page.locator('.price-container');

        this.addToCartButton = page.getByRole('link', {
            name: 'Add to cart'
        });
    }

    async selectCategory(category) {
        await this.page
            .getByRole('link', {
                name: category,
                exact: true
            })
            .click();
    }

    getProductByName(productName) {
        return this.page.getByRole('link', {
            name: productName,
            exact: true
        });
    }

    async selectProduct(productName) {
        await this.getProductByName(productName).click();
    }

    async getSelectedProductName() {
        return (await this.productName.textContent()).trim();
    }

    async getSelectedProductPrice() {
        return (await this.productPrice.textContent()).trim();
    }

    async addProductToCart() {
        const dialogPromise = this.page.waitForEvent('dialog');

        await this.addToCartButton.click();

        const dialog = await dialogPromise;

        await dialog.accept();
    }
}

module.exports = { ProductPage };