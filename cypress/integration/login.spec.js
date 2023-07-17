describe('Teste de backend - Qacoders', () => {
    beforeEach(() => {
        cy.loginWithToken();
    });

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

    it('Alterar email com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env("baseUrl")}/user/service/64a7567115c2f182099a1a79`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                mail: "hugolima@qacoders.com"
            },
            headers: {
                Authorization: `${Cypress.env("authorizationToken")}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

})