import {productData} from "../resources/product.data";

class ProductApiHelper {
  apiBaseUrl = `${Cypress.env("apiUrl")}Product`;

  POSTProduct(body: productData) {
    this.makePostRequest(body, this.apiBaseUrl + "/Create", {
          'accept': ' text/plain'
        }
    ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.contain('application/json');
      cy.wrap(response.body).as('response');
    });
    return cy.get('@response');
  }

  PUTProduct(body: productData) {
    this.makePutRequest(body, this.apiBaseUrl + "/Update", {
          'accept': ' text/plain'
        }
    ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.contain('application/json');
      cy.wrap(response.body).as('response');
    });
    return cy.get('@response');
  }


  DELETEProduct(id: number) {
    this.makeDeleteRequest({ id: id}, this.apiBaseUrl + "/Delete", {
          'accept': '*/*'
        }
    ).then((response) => {
      expect(response.status).to.equal(200);
    });
  }

  GETProduct(id: number) {
    this.makeGetRequest( `${(this.apiBaseUrl)}/GetProductById/${id}`, {
          'accept': ' text/plain'
        }
    ).then((response) => {
      expect(response.status).to.equal(200);
      cy.wrap(response.body).as('response');
    });
    return cy.get('@response');
  }

  GETAllProducts() {
    this.makeGetRequest( `${(this.apiBaseUrl)}/GetProducts/`, {
          'accept': ' text/plain'
        }
    ).then((response) => {
      expect(response.status).to.equal(200);
      cy.wrap(response.body).as('response');
    });
    return cy.get('@response');
  }

  makePostRequest(body: any, url: string, headers: any) {
    cy.log(`POST request by URL: ${url} with headers: ${JSON.stringify(headers)} and body:${JSON.stringify(body)}`);
    return cy.request({
      method: 'POST',
      url: url,
      failOnStatusCode: false,
      headers: headers,
      body: body
    })
  }

  makePutRequest(body: any, url: string, headers: any) {
    cy.log(`PUT request by URL: ${url} with headers: ${JSON.stringify(headers)} and body:${JSON.stringify(body)}`);
    return cy.request({
      method: 'PUT',
      url: url,
      failOnStatusCode: false,
      headers: headers,
      body: body
    })
  }

  makeDeleteRequest(qs: any, url: string, headers: any) {
    cy.log(`DELETE request by URL: ${url} with headers: ${JSON.stringify(headers)} and qs:${JSON.stringify(qs)}`);
    return cy.request({
      method: 'DELETE',
      url: url,
      failOnStatusCode: false,
      headers: headers,
      qs: qs
    })
  }

  makeGetRequest(url: string, headers: any) {
    cy.log(`GET request by URL: ${url} with headers: ${JSON.stringify(headers)}`);
    return cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false,
      headers: headers,
    })
  }

}

export const productApiHelper = new ProductApiHelper();