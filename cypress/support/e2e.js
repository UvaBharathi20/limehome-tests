// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './routes'
import 'cypress-mochawesome-reporter/register';


before(() => {
   // Cypress commands you would like to run (once) at the start of each test run.
   cy.visit('/')
   cy.get('h3').contains('Super Calculator')
   cy.get('h4').contains('History')
   cy.get('th').its('length').should('equal', 3)
})

beforeEach(() => {
    // Cypress commands you would like to run before every single Cypress test.
})