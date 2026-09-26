const { HomePage } = require('./HomePage');
const { LoginPage } = require('./LoginPage');

class POManager {
    constructor(page) {
        this.page = page;

        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }
}

module.exports = { POManager };