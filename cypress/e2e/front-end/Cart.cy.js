describe('Cart feature', () => {
    beforeEach(() => {
        cy.urlC();
        cy.loginC();
    });
    it('[FE][LOGIN] Verify that the user can login succesfully', () => {
        cy.get('#category-3 > a').click()
        cy.get('#js-product-list > div.products.row > article:nth-child(2) > div > a > img').click()
        cy.get('#add-to-cart-or-refresh > div.product-add-to-cart > div > div.add > button > i').should('be.visible').click()
        cy.get('#blockcart-modal > div > div > div.modal-body > div > div.col-md-7 > div > div > a').click()
        cy.get('#main > div > div.cart-grid-body.col-xs-12.col-lg-8 > div > div.card-block > h1').should('be.visible')
    });

});