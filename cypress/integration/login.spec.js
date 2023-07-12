describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken();
    });
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

    it.only('Requisitar logins sem token', () => {
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

    it('Alterar email', () => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env("baseUrl")}/user/service/64a7567115c2f182099a1a79`,
            failOnStatusCode: false,
            body: {
                fullName:"Hugo de Lima Xavier",
                mail: "hugoLMA@qacoders.com"
              },
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

})