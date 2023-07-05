import Chainable = Cypress.Chainable;


class ProductPage {

  getCreateLink(): Chainable {
    return cy.xpath('//a[text()="Create"]');
  }

  getTableCellElementByOtherCellElement(goalCellText: string, filterCellText: string): Chainable {
    return cy.findTableCellElementByText(filterCellText).parent().contains(goalCellText);
  }



}

export const productPage = new ProductPage();