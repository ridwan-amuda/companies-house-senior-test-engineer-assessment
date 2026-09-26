const { HomePage } = require('./HomePage');
const { LoginPage } = require('./LoginPage');
const { ProductPage } = require('./ProductPage');

class POManager {
    constructor(page) {
        this.page = page;

        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);
        
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
}

module.exports = { POManager };