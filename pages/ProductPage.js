class ProductPage {
    constructor(page) {
        this.page = page;
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
}

module.exports = { ProductPage };