describe('Advert Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
    cy.login('luka.deserranno@outlook.com', '12345678');
    cy.visit('http://localhost:5173/verkopen');
  });

  it('should submit the form with valid data', () => {
    cy.intercept('POST', '**/api/adverts').as('submitAdvert');

    cy.get('[data-cy="open"]').click();
    cy.get('[data-cy="title"]').type('test');
    cy.get('[data-cy="description"]').type('test');
    cy.get('[data-cy="price"]').type('6000');
    cy.get('[data-cy="merk_id"]').select('BMW');
    cy.get('[data-cy="model_id"]').select('1 Reeks');
    cy.get('[data-cy="brandstof_id"]').select('Benzine');
    cy.get('[data-cy="transmissie_id"]').select('Handgeschakeld');
    cy.get('[data-cy="bouwjaar"]').type('2000');
    cy.get('[data-cy="kilometerstand"]').type('200000');
    cy.get('[data-cy="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Advert has been added successfully!');
    });

    // Wait for the form submission
    cy.wait('@submitAdvert');
  });
});