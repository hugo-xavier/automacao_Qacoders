describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken()
    })
    it('Criar login', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugoteste5@qacoders.com",
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
            loginId = response.body.id
            const loginID = response.body.id //trazer o id quando criar login
            expect(response.status).to.eq(201)
            expect(response.body.msg).to.contain("cadastro realizado com sucesso.")
            // cy.log(response.body)
        })

    })
    it('Falha ao criar login com e-mail ja cadatrado', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugoteste@qacoders.com",
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
            expect(response.status).to.eq(409)
            expect(response.body.alert).to.deep.equal(["E-mail já cadastrado."])

    })

})
    it('Alterar email', () => {
        expect(loginId).to.exist
        cy.request({
            method: 'PUT',
            url: `${Cypress.env("baseUrl")}/user/service/64a7567115c2f182099a1a79`,
            url: `${Cypress.env("baseUrl")}/user/service/${loginId}`,
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

    // it('Alterar email', () => {
    //     // Gerar um ID automático
    //     cy.generateUniqueId().then((userId) => {
    //       cy.request({
    //         method: 'PUT',
    //         url: `${Cypress.env("baseUrl")}/user/service/${userId}`, // Usar o ID gerado na URL
    //         failOnStatusCode: false,
    //         body: {
    //           fullName: "Hugo de Lima Xavier",
    //           mail: "hugoLMA@qacoders.com"
    //         },
    //         headers: {
    //           Authorization: `${Cypress.env("authorizationToken")}`
    //         }
    //       }).then((response) => {
    //         expect(response.status).to.eq(200);
    //       })
    //     })
    //   })
    it('Deletar usuário',() => {
        expect(loginId).to.exist
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env("baseUrl")}/user/service/admin/${loginId}`,
            failOnStatusCode: false,
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })  
})