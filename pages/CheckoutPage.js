class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.cardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');

        this.purchaseButton = page.getByRole('button', {
            name: 'Purchase'
        });

        this.confirmationMessage =
            page.locator('.sweet-alert h2');
    }

    async enterPurchaseInformation(customer) {
        await this.nameInput.fill(customer.name);
        await this.countryInput.fill(customer.country);
        await this.cityInput.fill(customer.city);
        await this.cardInput.fill(customer.card);
        await this.monthInput.fill(customer.month);
        await this.yearInput.fill(customer.year);
    }

    async placeOrder() {
        await this.purchaseButton.click();
    }

    getConfirmationMessage() {
        return this.confirmationMessage;
    }
}

module.exports = { CheckoutPage };