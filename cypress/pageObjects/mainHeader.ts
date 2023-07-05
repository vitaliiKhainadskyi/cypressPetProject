import Chainable = Cypress.Chainable;


export class MainHeader {
  getHeaderLinkByText(headerText : 'Product' | 'Privacy' | 'Home' | 'EAWebApp'): Chainable {
    return cy.xpath(`//header//a[text()="${headerText}"]`)
  }
}