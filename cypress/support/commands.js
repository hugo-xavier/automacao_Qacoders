Cypress.Commands.add('loginQacoders', (usuario, senha) => {
    cy.request({
        url: Cypress.env("baseUrl") + '/login',
        method: 'POST',
        body:{
            mail: usuario,
            password: senha
        }
    }).should((response) => {
        const { status, statusText } = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
    })
})