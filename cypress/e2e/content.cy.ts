import { RACING_CATEGORIES } from "../config/constants";
describe('Page Content', () => {
  it('Navigate to webpage', () => {
    cy.visit('http://localhost:3000/', { failOnStatusCode: false })
  })
  it('Should correctly display page title', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });
  it('validate Filter names', () => {
    cy.contains('Thoroughbred')
    cy.contains('Greyhound')
    cy.contains('Harness')
  })

  it('Should have all filters checked by default', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })
});