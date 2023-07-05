/// <reference types="cypress" />

declare namespace Cypress {

  interface Chainable {
    loginToBasePage(): Chainable

    getBySel(dataTestAttribute: string): Chainable;

    findTableCellElementByText(tableCellText: string): Chainable;
  }
}
