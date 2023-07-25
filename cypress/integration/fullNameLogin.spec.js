describe('Validar campo fullName Login - Qacoders', () => {
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
            expect(response.status).to.eq(201)
            expect(response.body.msg).to.contain("cadastro realizado com sucesso.")
        })
    })
    it('criar login com inicial do nome em minuscula do campo fullName', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "hugo de Lima Xavier",
                mail: "hugoteste00@qacoders.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })
    })
    it.only('criar login com inicial do sobrenome em minuscula do campo fullName', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de lima",
                mail: "hugoteste00@qacoders.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })
    })
    it('Criar login sem token', () => {
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
            // headers: {
            //     Authorization: `${Cypress.env("authorizationToken")}`
            // }
        }).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body).to.have.property('errors')
            expect(response.body.errors).to.include('No token provided.')
        })
    })

    it('criar login sem sobrenome', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo",
                mail: "hugo@teste.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })
    })
    
    it('criar login com campo full name em branco', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "",
                mail: "hugo@teste.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("O campo nome completo é obrigatório.")
        })

    })
    
    it('Criar login com campo fullname com valores int', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: 1,
                mail: "hugo@teste.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })

    })

    it('Criar login com campo fullname com valores double', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: 1.5656,
                mail: "hugo@teste.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })
    })
    it('Criar login com Nome e sobrenome com número em string', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo 1234",
                mail: "hugo@teste.com",
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
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error[0]).to.be.eq("Informe o nome e sobrenome com as iniciais em letra maiúscula.")
        })
    })
})
    