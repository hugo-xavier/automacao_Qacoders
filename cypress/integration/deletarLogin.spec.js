describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken()
    })
    it('Deletar usuário', () => {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env("baseUrl")}/user/service/admin/` + Cypress.env("user_id"),
            failOnStatusCode: false,
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            cy.log(Cypress.env("user_id"))
            expect(response.status).to.eq(200)
            expect(response.body).to.be.property('msg')
            expect(response.body.msg).to.be.eq('Admin deletado com sucesso!.')
        })
    })

    it('Não deletar usuário inexistente', () => {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env("baseUrl")}/user/service/admin/` + Cypress.env("user_id"),
            failOnStatusCode: false,
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