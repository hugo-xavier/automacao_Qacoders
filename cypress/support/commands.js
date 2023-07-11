Cypress.Commands.add('loginQacoders', (usuario, senha) => {
    cy.request({
        url: Cypress.env("baseUrl") + '/login',
        method: 'POST',
        body:{
            mail: usuario,
            password: senha
        }
    })
})