/// <reference types="cypress" />

describe('EA Application test from Online', () => {
   
    const login = () => {
        cy.session('login', () => {
            cy.visit('http://eaapp.somee.com');
            cy.get('a[href*="Login"]').click();
            cy.fixture('login').then(login => {
                cy.get('#UserName').type(login.name);
                cy.get('#Password').type(login.password);
            });
            cy.get('.btn').click();
        });
    }

    beforeEach(() => {
        login();
        cy.visit('http://eaapp.somee.com');
    });
    it('Perform login operation', () => {
        cy.contains('Employee List').click();
        cy.get('.btn-primary').click();
    })

    it('Navigate Manage Users', () => {
        cy.get('a[href*="Role"]').click();
        cy.contains('Log off').click();
    });

})