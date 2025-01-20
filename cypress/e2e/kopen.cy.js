describe('CarList Sorting', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/login');
        cy.login('luka.deserranno@outlook.com', '12345678');
        cy.visit('http://localhost:5173/kopen');
      });

    
      it('should check if car list is sorted by price asc', () => {
        cy.get('[data-cy="sort"]').select('Prijs oplopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('.carCard').find('.card-body h5').invoke('text').as('prices');
        
        cy.get('@prices').then((prices) => {
            const numericPrices = prices
              .split('\n')
              .map((line) => parseFloat(line.replace('€', '').replace(',', '').trim()))
              .filter((price) => !isNaN(price));
      
            const isSorted = numericPrices.every((price, index, array) => index === 0 || price >= array[index - 1]);
      
            expect(isSorted).to.be.true;
      });
    });

    it('should check if car list is sorted by price desc', () => {
        cy.get('[data-cy="sort"]').select('Prijs aflopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('.carCard').find('.card-body h5').invoke('text').as('prices');
        
        cy.get('@prices').then((prices) => {
            const numericPrices = prices
              .split('\n')
              .map((line) => parseFloat(line.replace('€', '').replace(',', '').trim()))
              .filter((price) => !isNaN(price));
      
            const isSorted = numericPrices.every((price, index, array) => index === 0 || price <= array[index - 1]);
      
            expect(isSorted).to.be.true;
      });
    });

    it('should check if car list is sorted by mileage asc', () => {
        cy.get('[data-cy="sort"]').select('Kilometerstand oplopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('[data-cy="kilometerstand"]').invoke('text').as('mileages');

        cy.get('@mileages').then((mileages) => {
            const numericMileages = mileages
                .split('\n')
                .map((line) => parseInt(line.replace(' km', '').replace('.', '').trim()))
                .filter((mileage) => !isNaN(mileage));

        const isSorted = numericMileages.every((mileage, index, array) => index === 0 || mileage >= array[index - 1]);

        expect(isSorted).to.be.true;
        
        });
    });

    it('should check if car list is sorted by mileage desc', () => {
        cy.get('[data-cy="sort"]').select('Kilometerstand oplopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('[data-cy="kilometerstand"]').invoke('text').as('mileages');

        cy.get('@mileages').then((mileages) => {
            const numericMileages = mileages
                .split('\n')
                .map((line) => parseInt(line.replace(' km', '').replace('.', '').trim()))
                .filter((mileage) => !isNaN(mileage));

        const isSorted = numericMileages.every((mileage, index, array) => index === 0 || mileage <= array[index - 1]);

        expect(isSorted).to.be.true;
        
        });
    });

    it('should check if car list is sorted by buildyear asc', () => {
        cy.get('[data-cy="sort"]').select('Bouwjaar oplopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('[data-cy="bouwjaar"]').invoke('text').as('bouwjaren');

        cy.get('@bouwjaren').then((bouwjaren) => {
        const numericBouwjaren = bouwjaren
            .split('\n')
            .map((line) => parseInt(line.trim()))
            .filter((bouwjaar) => !isNaN(bouwjaar));

        const isSorted = numericBouwjaren.every((bouwjaar, index, array) => index === 0 || bouwjaar >= array[index - 1]);

        expect(isSorted).to.be.true;

        });
    });

    it('should check if car list is sorted by buildyear desc', () => {
        cy.get('[data-cy="sort"]').select('Bouwjaar oplopend');
        cy.get('[data-cy="submit"]').click();

        cy.get('[data-cy="bouwjaar"]').invoke('text').as('bouwjaren');

        cy.get('@bouwjaren').then((bouwjaren) => {
        const numericBouwjaren = bouwjaren
            .split('\n')
            .map((line) => parseInt(line.trim()))
            .filter((bouwjaar) => !isNaN(bouwjaar));

        const isSorted = numericBouwjaren.every((bouwjaar, index, array) => index === 0 || bouwjaar <= array[index - 1]);

        expect(isSorted).to.be.true;

        });
    });   
});