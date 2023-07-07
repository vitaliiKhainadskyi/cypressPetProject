import {productData} from "../../resources/product.data";
import {ProductType} from "../../resources/productType";
import {dataManipulation} from "../../resources/dataManipulation";
import {productApiHelper} from "../../apiHelper/productApi.helper";

describe('Product API tests', {
  retries: {
    runMode: 0,
    openMode: 0
  }
}, () => {

  it('User should be able to create product via API', () => {
    const product = productData.generateProductData();
    productApiHelper.POSTProduct(product).then((response) => {
      cy.log('reponse body', JSON.stringify(response))
      expect(response).to.deep.equal(product);
    })
  })

  it('User should be able to edit product via API', () => {
    const product = productData.generateProductData();
    productApiHelper.POSTProduct(product)
    let editedProduct = productData.generateProductData()
    editedProduct.id = product.id;
    productApiHelper.PUTProduct(editedProduct).then((response) => {
      cy.log('response body', JSON.stringify(response))
      expect(response).to.deep.equal(editedProduct);
    })
  })

  it('User should be able to get product via API', () => {
    const product = productData.generateProductData();
    productApiHelper.POSTProduct(product,)
    productApiHelper.GETProduct(<number>product.id).then((response) => {
      cy.log('response body', JSON.stringify(response))
      expect(response).to.deep.equal(product);
    })
  })

  it('User should be able to get all products via API', () => {
    let products = Array<productData>();
    Array.from(Array(5).keys()).forEach(n => {
      products.push(productData.generateProductData());
    })
    products.forEach(product => {
      productApiHelper.POSTProduct(product)
    })
    productApiHelper.GETAllProducts().then((response) => {
      cy.log('response body', JSON.stringify(response))
      products.forEach( product => {
        expect(response).to.deep.include(product);
      })
    })
  })

  it('User should be able to delete product via API', () => {
    const product = productData.generateProductData();
    productApiHelper.POSTProduct(product)
    productApiHelper.DELETEProduct(<number>product.id);
  })
})