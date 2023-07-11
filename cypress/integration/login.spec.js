describe('Teste de fazer login', () => {
    beaforeEach(() => {
        cy.loginQacoders(Cypress.env('mail'), Cypress.env('password'))
                  
    })
})
