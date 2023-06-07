// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('calculate', (input1, input2) => {
  
  cy.get('input[ng-model="first"]').type(input1)
  cy.get('input[ng-model="second"]').type(input2)

  cy.get('#gobutton').click()
  cy.wait(3000)
})

Cypress.Commands.add('selection',(operation, value)=> {
  cy.get('select[ng-model="operator"]').select(operation).should('have.value', value)
  cy.wait(2000)
})

Cypress.Commands.add('viewportPreset', (size = '') => {
  switch (size) {
    case 'samsung-s10-plus':
      cy.viewport(412, 869)
      break
    case 'iphone-se': 
      cy.viewport(375, 667)
      break
    case 'ipad-pro':
      cy.viewport(1366, 1024)
      break
    case 'ms-surface':
      cy.viewport(1280, 720)
      break
    case 'full-hd':
      cy.viewport(1920, 1080)
      break
    case 'imac':
      cy.viewport(2560, 1440)
      break
    default:
      cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'))
  }
})