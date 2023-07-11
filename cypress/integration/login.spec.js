describe('Teste de fazer login', () => {
    beaforeEach(() => {
        cy.loginQacoders(Cypress.env('usuario'), Cypress.env('senha'))
        
            
    })
})
