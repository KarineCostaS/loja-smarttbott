describe('SmarttStore Login', () => {

  beforeEach(() => {
    cy.visit('https://app.smarttbot.com/public/login')
    cy.get('#login-username').type(Cypress.env('testeSeguidor')) // digita o username
    cy.get('#login-password').type(Cypress.env('senhaSeguidor')) // digita a senha
    cy.get('#login-button').click() // clica no botão "Acessar"
  })
  

    
  

it ('Verifica Carteira Multi Robos da Loja da Loja', () => {
  
  cy.wait(1000);
  cy.get('svg[data-icon="cart-plus"]').click(); //clica na Loja

  
  Cypress.on('uncaught:exception', (err, runnable) => {
    //retorna falso os erros que podem danificar a automação, tratamento de exceção
    return false //
  })

  cy.verificaCarteiraMulti();
  

})

it ('Verifica Estrategia de Trade Sincronizado na Loja', () => {

  cy.wait(1000);  
  cy.get('svg[data-icon="cart-plus"]').click(); //clica na Loja
  Cypress.on('uncaught:exception', (err, runnable) => {
    //retorna falso os erros que podem danificar a automação, tratamento de exceção
    return false //
  })

  cy.verificaTradeSincronizado();


})
})
