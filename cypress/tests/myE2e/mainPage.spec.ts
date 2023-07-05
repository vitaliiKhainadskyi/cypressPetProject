//@ts-check

import {productPageSteps} from "../../testSteps/productPageSteps";
import {commonSteps} from "../../testSteps/commonSteps";

describe("Product Page tests", () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('User should be able to edit existing item', () => {
    // todo add DDT
    const item = {
      name: 'Monitor',
      description: 'Asus 2010',
      price: '300'
    };

    commonSteps.navigateToPageFromHeader('Product')
    productPageSteps.performEditingNewItem('Monitor', item, true)
    .verifyProductFields(item)
  })
});