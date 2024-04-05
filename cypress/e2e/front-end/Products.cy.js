describe('Products Feature', () => {
    beforeEach(() => {
        cy.urlC();
        cy.loginC();
    });
    it('[FE][CLOTHES] Verify that clicking on "Clothes" button all clothes are displayed', () => {
        cy.get('#category-3 > a').click()
        cy.get('#js-product-list-top > div.col-md-6.hidden-sm-down.total-products > p').should('be.visible')
    });

    
    it('[FE][ACCESSORIES] Verify that clicking on "Accesories" button all accesories are displayed', () => {
        cy.get('#category-6 > a').click()
        cy.get('#js-product-list-top > div.col-md-6.hidden-sm-down.total-products > p')
    });
});