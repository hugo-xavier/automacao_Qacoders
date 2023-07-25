describe('Validar campo fullName Login - Qacoders', () => {
    before(() => {
        cy.loginWithToken()
    })
    it('validar cpf login com sucesso', () => {
        const cpfValue = "12345678910" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf: cpfValue,
                mail: "hugoqa@qacoders.com",
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
    it.only('Cpf em branco', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:"",
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Invalid value",
            "Deve preencher o CPF com 11 dígitos")
        })
    })
    it.only('Cpf com texto', () => {
        const cpfValue = "aaaaaaaaaaa" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf: cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Invalid value",
            "Deve preencher o CPF com 11 dígitos")
        })
    })
    it.only('Cpf com mais de 11 dgitos', () => {
        const cpfValue = "11111111111111111111" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf: cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Deve preencher o CPF com 11 dígitos")
        })
    })
    it.only('Cpf com menos de 11 dgitos', () => {
        const cpfValue = "1111111" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Deve preencher o CPF com 11 dígitos")
        })
    })
    it('Cpf valores double', () => {
        const cpfValue = 0.1234567890 // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Deve preencher o CPF com 11 dígitos")
        })
    })
    it('Cpf valores INT', () => {
        const cpfValue = 12345678980 // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Deve preencher o CPF com 11 dígitos")
        })
    })
    it.only('Cpf com caracteres especiais', () => {
        const cpfValue = "!!@@$$&&###" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Invalid value",
            "Deve preencher o CPF com 11 dígitos")
        })
    })
    it.only('Cpf com letras e numeros', () => {
        const cpfValue = "hugo1234567" // Valor do CPF a ser enviado na requisição
    cy.log(`CPF a ser enviado: ${cpfValue}`)

        cy.request({
            method: 'POST',
            url: `${Cypress.env("baseUrl")}/user/register`,
            failOnStatusCode: false,
            body: {
                fullName: "Hugo de Lima Xavier",
                cpf:cpfValue,
                mail: "hugoqa@qacoders.com",
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
            expect(response.body.error[0]).to.be.eq("Invalid value",
            "Deve preencher o CPF com 11 dígitos")
        })
    })
})  