/ <reference types="cypress" />
describe('SwagLabsPriorityTest1', () => {
  beforeEach(() => {
    // Each test begins with login -> will discuss reasoning/assumptions for this choice. Solve for
    // plain text credentials?
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

  })

  it('can add and remove items from cart', () => {
    //Would like to expand to randomise item selections, verify number in cart icon "span"
    //and check item title in cart matches inventory selection.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', 'cart.html')
    cy.get('[data-test="cart-list"]').should('have.length', 1) //verifies single item added
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('include', 'inventory.html')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', 'cart.html')
    cy.get('[data-test="cart-list"]').should('have.length', 2) //verifies second item added
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="cart-list"]').should('have.length', 1) //verifies an item removed
 })
})
