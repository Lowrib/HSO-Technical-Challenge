/ <reference types="cypress" />
describe('SwagLabsPriorityTest2', () => {
  beforeEach(() => {
    // Each test begins with login -> will discuss reasoning/assumptions for this choice. Solve for
    // plain text credentials?
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

  })
it('can view correct checkout contents and total price', () => {
    // Test validates user can move through the checkout process with correct cart contents and total.
    // Need to iterate through items dynamically, rather than hard code.
    // Attempting to trim price to compare total to display.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item-name"]').first().should('have.text', "Sauce Labs Backpack")
    cy.get('[data-test="inventory-item-name"]').eq(1).should('have.text', "Sauce Labs Bike Light")
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('input[name="postalCode"]').type('AB12 ABC')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
    //let priceCalc = 0
    
    
    //let price1 = cy.get('.inventory_item_price').first().text.substring(2)
    //})


   //data-test="subtotal-label"

   // cy.get('[data-test="inventory-item-price"]').each($price => {
    //  priceCalc += Number
   // })
    //cy.get('[data-test="inventory-item-price"]')
   // cy.get('.cart-list').each($item => {
    //  $item.invoke()
   // })
   // var priceCalc = 0

  })
})
