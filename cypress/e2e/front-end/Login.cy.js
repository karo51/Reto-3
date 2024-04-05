describe('Login', () => {
    beforeEach(() => {
        cy.urlC();
       // cy.loginC();
    });
    it('[FE][LOGIN] Verify that the user can login succesfully', () => {
        cy.get('#_desktop_user_info > div > a > span').click()
        cy.get('#login-form > section > div:nth-child(2) > div.col-md-6 > input').type('karenmoralescarreno@gmail.com')
        cy.get('#login-form > section > div:nth-child(3) > div.col-md-6 > div > input').type('bellatrixBLACK456')
        cy.get('#submit-login').click()
        cy.get('#_desktop_user_info > div > a.logout.hidden-sm-down').should('be.visible')
    });

    
    it('[FE][LOGIN] Verify that an error authentication message is displayed with invalid credentials', () => {
        cy.get('#_desktop_user_info > div > a > span').click()
        cy.get('#login-form > section > div:nth-child(2) > div.col-md-6 > input').type('kare@gmail.com')
        cy.get('#login-form > section > div:nth-child(3) > div.col-md-6 > div > input').type('asdfasdf')
        cy.get('#submit-login').click()
        cy.get('#content > section > div > ul > li').should('be.visible')
    });
});