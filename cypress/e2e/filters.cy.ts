/// <reference types="cypress" />
import { eq } from "cypress/types/lodash";
import { RACING_CATEGORIES } from "../config/constants";
describe('Catogory filter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('checking URl', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('validate heading', () => {
    cy.get('.app-header > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)').contains('Next To Go Races')
  })

  it('validate checkbox names', () => {
    cy.wait(1000)
    cy.contains('Thoroughbred')
    cy.contains('Greyhound')
    cy.contains('Harness')
  })

  it('Should have all filters checked by default', () => {
    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    })
  });

  it('Uncheck Thoroughbred and vadiate items', () => {
    cy.wait(1000)
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    //cy.contains('Crayford Bags')
    //cy.contains('Romford Bags')
    // cy.contains('R4')
    // cy.contains('Pau')
    //cy.contains('R4')
    //cy.contains('Swindon')
    //cy.contains('R6')
    //cy.contains('Crayford Bags')
    //cy.contains('R7')
  })
  it('Uncheck Greyhound and vadiate items', () => {
    cy.wait(1000)
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    //cy.contains('Swindon')
    //cy.contains('R6')
    //cy.contains('Crayford Bags')
    //cy.contains('R7')
  })
  it('Uncheck Harness and vadiate items', () => {
    cy.wait(1000)
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
    //cy.contains('Swindon')
    //cy.contains('R6')
    //cy.contains('Crayford Bags')
    //cy.contains('R7')
  })

  it('Uncheck Thoroughbred & Greyhound and vadiate items', () => {
    cy.wait(1000)
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    //cy.contains('Vincennes')
    //cy.contains('Northam')
    //cy.contains('R6')
    //cy.contains('Crayford Bags')
    //cy.contains('R7')
  })

  it('Uncheck All filters', () => {
    cy.wait(1000)
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('not.be.checked');
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('not.be.checked');
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('not.be.checked');
    //cy.contains('Northam')
    //cy.contains('R6')
    //cy.contains('Crayford Bags')
    //cy.contains('R7')
  })
});