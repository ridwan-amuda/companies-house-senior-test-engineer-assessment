class CartPage {
    constructor(page) {
        this.page = page;

        this.cartRows = page.locator('#tbodyid tr');

         this.placeOrderButton = page.getByRole('button', {
            name: 'Place Order'
        });
    }

    async getProductRow(productName) {
        return this.cartRows.filter({
            hasText: productName
        });
    }

    async getProductName(productName) {
        const row = await this.getProductRow(productName);

        return (await row.locator('td').nth(1).textContent()).trim();
    }

    async getProductPrice(productName) {
        const row = await this.getProductRow(productName);

        return (await row.locator('td').nth(2).textContent()).trim();
    }

    async proceedToCheckout() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CartPage };