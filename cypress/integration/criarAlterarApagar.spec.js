describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken()
    })
    it('criar login', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugoteste500@qacoders.com",
                password: "Hugo@#123",
                confirmPassword: "Hugo@#123",
                accessProfile: "ADMIN",
                audit: [
                    {
                        idCompany: "Qa-Coders",
                        loginUser: "Hugo-02"
                    }
                ]
            },
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            Cypress.env("user_id", response.body.newUser._id)
            cy.log(Cypress.env("user_id"))
            expect(response.status).to.eq(201)
            expect(response.body.msg).to.contain("cadastro realizado com sucesso.")
        })

    })
    it('Alterar email', () => {
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
})
