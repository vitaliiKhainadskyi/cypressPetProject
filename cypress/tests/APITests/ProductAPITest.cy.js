/// <reference types="cypress" />

describe('Products API Testing', () => {

    it('GET operation', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8001/Product/GetProductById/1',
            failOnStatusCode: false,
            headers: {
                'accept': ' text/plain'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.contain('application/json');
            expect(response.body).to.be.an('object');
            expect(response.body).to.deep.include({ name: 'Keyboard' });
        });
    })

    it('POST operation', () => {
        cy.fixture('APIBody').then((data) => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:8001/Product/Create',
                failOnStatusCode: false,
                headers: {
                    'accept': ' text/plain'
                },
                body: data
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.headers['content-type']).to.contain('application/json');
                expect(response.body).to.be.an('object');
                expect(response.body).to.deep.include({ name: 'FromAPI' });
            });
        });
    });

    it('DELETE operation', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8001/Product/DeleteByName',
            qs: {
                "productName": "FromAPI"
            },
            failOnStatusCode: false,
            headers: {
                'accept':'*/*'
            }
        }).then((response) => { 
            expect(response.status).to.equal(200);
        });
    });

})