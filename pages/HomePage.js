class HomePage {
    constructor(page) {
        this.page = page;

        this.loginLink = page.locator('#login2');
        this.signupLink = page.locator('#signin2');
        this.cartLink = page.locator('#cartur');
    }

    async navigate() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async openLogin() {
        await this.loginLink.click();
    }

    async openSignup() {
        await this.signupLink.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = { HomePage };