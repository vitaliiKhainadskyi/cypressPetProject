describe('EA App Test', {
  retries: {
    runMode: 3,
    openMode: 3
  }
}, () => {
  beforeEach(() => {
    cy.visit('/').as('app');
    cy.contains('Product').click();
  })

  it('Create a product', () => {
    cy.get('@app').url().should('include', 'localhost');

    cy.screenshot('appLoadPage', {
      capture: 'fullPage',
    })

    cy.contains('Create').then(($createlink) => {
      cy.wrap($createlink).should('have.text', 'Create');
    }).as('createlink');

    cy.get('@createlink').click();

    cy.on('window:alert', (str) => {
      expect(str).to.contain('You are about to create a new item');
    });

    cy.get('#Name')
    .clear()
    .type('Test Product');

    cy.get('#Description').clear().type('Test Product Desc');
    cy.get('#Price').clear().type('2000');
    cy.get('#ProductType').select('0');
    cy.get('#Create').click();
    cy.get('[href="/Product/Edit/5"]').click();
    cy.get(':nth-child(5) > a').click();
  });

  it('Click Edit for specific product', () => {
    cy.get('.table')
    .find('td')
    .filter(':contains("Monitor")')
    .parent()
    .contains('Edit')
    .click();

    //cy.pause();

    cy.url().should('include', '/Product/Edit');
    cy.get('#Name').should('have.value', 'Monitor');

    //Alias
    cy.get('#Description').as('description');

    //Multiple Assertion with Alias
    cy.get('@description').then(($description) => {
      //Wrap command
      cy.wrap($description).invoke('val').should('contain', 'HD monitor');
      cy.wrap($description).parent().should('have.class', 'form-group');
    });
  });

  it.skip('This test is skipped for a purpose', () => {
    cy.get('.table')
    .find('td')
    .filter(':contains("Monitor")')
    .parent()
    .contains('Edit')
    .click();

    //cy.pause();

    cy.url().should('include', '/Product/Edit');
    cy.get('#Name').should('have.value', 'Monitor');

    //Alias
    cy.get('#Description').as('description');

    //Multiple Assertion with Alias
    cy.get('@description').then(($description) => {
      debugger;
      //Wrap command
      cy.wrap($description).invoke('val').should('contain', 'HD monitor');
      cy.wrap($description).parent().should('have.class', 'form-group');
    });
  });
})