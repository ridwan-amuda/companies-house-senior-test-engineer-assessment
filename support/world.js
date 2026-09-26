const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.poManager = null;
    }
}

setWorldConstructor(CustomWorld);