const { HomePage } = require('./HomePage');
const { LoginPage } = require('./LoginPage');
const { ProductPage } = require('./ProductPage');
const { CartPage } = require('./CartPage');

class POManager {
    constructor(page) {
        this.page = page;

        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

     getProductPage() {
        return this.productPage;
    }

    getCartPage() {
    return this.cartPage;
}

}

module.exports = { POManager };