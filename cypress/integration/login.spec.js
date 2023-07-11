describe('Teste de fazer login', () => {
    beaforeEach(() => {
        cy.get(Cypress.env('usuario'), Cypress.env('senha'))
            .should((response) => {
                const { status, statusText } = response
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
            })
    })
})
