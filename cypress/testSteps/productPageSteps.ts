import {ProductType} from "../resources/productType";
import {productPage} from "../pageObjects/productPage";
import {itemDetailsPage} from "../pageObjects/itemDetailsPage";


class ProductPageSteps {

  performCreatingNewItem(item: { name: string; description: string; price: string, productType: ProductType },) {

  }

  performEditingNewItem(itemName: string, editedItem: { name?: string; description?: string; price?: string, productType?: ProductType }, isChangesSaved: boolean) {
    productPage.getTableCellElementByOtherCellElement('Edit', itemName).click();
    if (editedItem.name) itemDetailsPage.getNameInputField().clear().type(editedItem.name)
    if (editedItem.description) itemDetailsPage.getDescriptionInputField().clear().type(editedItem.description)
    if (editedItem.price) itemDetailsPage.getPriceInputField().clear().type(editedItem.price)
    if (editedItem.productType) itemDetailsPage.getProductTypeInputField().clear().type(editedItem.productType.toString())
    if (isChangesSaved) itemDetailsPage.getSaveButton().click();
    return this;
  }

  verifyProductFields(item: { name: string; description?: string; price?: string, productType?: ProductType }) {
    cy.findTableCellElementByText(item.name)
    .parent()
    .should(($td) => {
      if (item.description) expect($td).to.contain.text(item.description)
      if (item.price) expect($td).to.contain.text(item.price)
      if (item.productType) expect($td).to.contain.text(item.productType.toString())
    })
    return this;
  }

}

export const productPageSteps = new ProductPageSteps();