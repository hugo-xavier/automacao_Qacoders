describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken()
    })
    it('Requisitar logins', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env("baseUrl")}/user`,
            failOnStatusCode: false,
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('Requisitar logins sem token', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env("baseUrl")}/user`,
            failOnStatusCode: false,
            // headers: {
            //     Authorization: `${Cypress.env("authorizationToken")}`
            // }
        }).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body).to.have.property('errors')
            expect(response.body.errors).to.include('No token provided.')
        })

    })

})