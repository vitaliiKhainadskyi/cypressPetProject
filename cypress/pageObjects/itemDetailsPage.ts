class ItemDetailsPage {

  getNameInputField() {
    return cy.get('#Name');
  }

  getDescriptionInputField() {
    return cy.get('#Description');
  }

  getPriceInputField() {
    return cy.get('#Price');
  }

  getProductTypeInputField() {
    return cy.get('#ProductType');
  }

  getSaveButton() {
    return cy.get('[value="Save"]');
  }

  getBackToListLink() {
    return cy.xpath('//a[text()="Back to List"]');
  }
}

export const itemDetailsPage = new ItemDetailsPage();