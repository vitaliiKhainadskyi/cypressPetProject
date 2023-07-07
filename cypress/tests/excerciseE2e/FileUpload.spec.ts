/// <reference types="cypress" />

describe('File Upload Testing', () => {

    beforeEach('Navigate to fineuploader', () => {
        cy.visit('https://fineuploader.com/demos.html')
    });

    it('Upload file', () => {
        // verify that the page was navigated
        cy.url().should('include', 'fineuploader.com/demos');

        cy.get('.buttons > .qq-upload-button-selector > input')
            .selectFile('cypress/fixtures/code.png', {force:true});

    })

})