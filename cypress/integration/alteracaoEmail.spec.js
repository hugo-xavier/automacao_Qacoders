describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken()
    })
    it('Alterar email com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env("baseUrl")}/user/service/` + Cypress.env("user_id"),
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugolima501@qacoders.com"
            },
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            cy.log(Cypress.env("user_id"))
            expect(response.status).to.eq(200)
            expect(response.body).to.be.property('msg')
            expect(response.body.msg).to.be.eq('Dados atualizados com sucesso!')
        })
    })
    it('Alterar email com id inexistente', () => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env("baseUrl")}/user/service/64b5c5e99724c28af70737f4`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugolima12@qacoders.com"
            },
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.be.property('msg')
            expect(response.body.msg).to.be.eq('Esse usuário não existe em nossa base de dados.')
        })
    })
}) 