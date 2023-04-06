import '@testing-library/cypress/add-commands'


Cypress.Commands.add("acessarUrl", () => {
    cy.visit('http://localhost:3000/')
})
Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`)
  })

