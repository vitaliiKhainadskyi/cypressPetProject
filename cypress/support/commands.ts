// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add('loginToBasePage', () => {
  return cy.visit('/');
})

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('findTableCellElementByText', (text: string) => {
  return cy.get('.table')
  .find('td')
  .contains(text);
})

