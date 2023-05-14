describe('SmarttStore Login', () => {

  beforeEach(() => {
    cy.visit('https://app.smarttbot.com/public/login')
    cy.get('#login-username').type(Cypress.env('testeSeguidor')) // digita o username
    cy.get('#login-password').type(Cypress.env('senhaSeguidor')) // digita a senha
    cy.get('#login-button').click() // clica no botão "Acessar"
  })
  

    
  

it ('Acessa as Estrategias da Loja', () => {
  

  cy.wait(1000)
  cy.get('svg[data-icon="cart-plus"]').click(); //clica na LOja
  Cypress.on('uncaught:exception', (err, runnable) => {
    //retorna falso os erros que podem danificar a automação, tratamento de exceção
    return false //
  })
  
  

})


})
