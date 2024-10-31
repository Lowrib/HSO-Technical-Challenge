/ <reference types="cypress" />
describe('SwagLabsPriorityTest3', () => {
  beforeEach(() => {
    // Each test begins with login -> will discuss reasoning/assumptions for this choice. Solve for
    // plain text credentials?
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

  })
it('can complete order through checkout successfully', () => {
    // Test validates user can complete transaction.
    // Should have a listener to pickup on confirmation from server, not just navigation to 
    // sucess page.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('input[name="postalCode"]').type('AB12 ABC')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')
    cy.get('[data-test="complete-header"]').should('have.text', "Thank you for your order!")
  })
})
