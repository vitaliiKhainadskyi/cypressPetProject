/// <reference types="cypress" />

describe('Network Stubbing with Cypress', () => {

    beforeEach(() => {
        cy.visit('/')

        //Stubbing of Edit operation
        cy.intercept('POST', '/Product/Edit/*', (req) => {
            req.body = "Name=Test+hijacked+Product&Description=Test+hijacked+Description&Price=400000&__Invariant=Price&ProductType=PERIPHARALS&__RequestVerificationToken=CfDJ8NZOeh3lXiJDtRbY4axJPwkt4v4QqcWtD2Fj48eaM9kAE5IbbYf0_N40MqA1Ll2J6vJKgNcSipwVWkEs6sp1Q9DHqQgyTW6lOQqfFAWTrJ71gCEzdqjCAWCV3kxPqvX26kc_BTDFeapsVrYoYQkyQas";
            req.continue();
        }).as('EditProduct');

        //Stubbing
        cy.intercept('GET', '/Product/Create', (req) => {
            req.reply((res) => {
                res.setThrottle(0.5)
            });
        });

        cy.contains('Product').click()
    });

    it('Create a product', () => {
        cy.contains('Create').click();

        cy.get('#Name').clear().type('Test Product', { waitForAnimations: true });
    });

    it('Edit product', () => {
        cy.get('[href="/Product/Edit/3"]').click()

        cy.get('#Name').clear().type('Test Product');
        cy.get('#Description').clear().type('Test Description');
        cy.get('.btn').click();

        cy.wait('@EditProduct');
        cy.url().should('include', 'Product/List');
    });

});