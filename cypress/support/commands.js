Cypress.Commands.add('loginQacoders', (mail, password) => {
    cy.request({
        url: Cypress.env("baseUrl") + '/login',
        method: 'POST',
        body:{
            mail: mail,
            password: password
        },
    }).then((res) => {
        Cypress.env('tokenLogin', res.body.token)
    })
   
})