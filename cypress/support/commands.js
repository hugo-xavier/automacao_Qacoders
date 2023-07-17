Cypress.Commands.add('loginWithToken', () => {
    const mail = 'hugoLMA@qacoders.com';
    const password = 'Hugo@#123';
    
    cy.request({
      method: 'POST',
      url:`${Cypress.env("baseUrl")}/login`,
      body: {
        mail: mail,
        password: password
      },
     
    }).then(response => { 
        if(response.status == 200){
            let authorizationToken = response.body.token
            Cypress.env("authorizationToken", authorizationToken)
            cy.log(authorizationToken)
        }
    })

  Cypress.Commands.add('generateUniqueId', () => {
      return Cypress._.uniqueId()
    })
      

})
  
  