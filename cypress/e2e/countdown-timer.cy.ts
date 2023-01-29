import { timers } from "cypress/types/jquery";

describe('Countdown Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('checking URl', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('compare timer', () => {
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)')
    cy.get(':nth-child(4) > :nth-child(2)')
    cy.get(':nth-child(5) > :nth-child(2)')
    //cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').invoke('465269h').should("eq",'465269h')
    //cy.wrap({ foo: 'bar' }).its('quux').should('not.exist')     
  }) 
});

