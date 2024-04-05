// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import { validateSchema } from "./validate-schema-command";

Cypress.Commands.add("validateSchema", validateSchema);
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('urlC', () => {
    cy.visit('http://www.testingyes.com/onlineshop')
    
})

Cypress.Commands.add('loginC', () => {
    cy.get('#_desktop_user_info > div > a > span').click()
        cy.get('#login-form > section > div:nth-child(2) > div.col-md-6 > input').type('karenmoralescarreno@gmail.com')
        cy.get('#login-form > section > div:nth-child(3) > div.col-md-6 > div > input').type('bellatrixBLACK456')
        cy.get('#submit-login').click()
        cy.get('#_desktop_user_info > div > a.logout.hidden-sm-down').should('be.visible')
})