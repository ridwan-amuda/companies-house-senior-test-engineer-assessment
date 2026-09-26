class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');

        this.loginButton = page.locator(
            '#logInModal button',
            { hasText: 'Log in' }
        );

        this.loggedInUser = page.locator('#nameofuser');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };