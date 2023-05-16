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
  cy.wait(1000);
  cy.get('sb-p[fontsize="sm"][fontweight="medium"][color="black-100"][truncate="false"]')
  .should('be.visible')
  .and('have.text', 'Carteira Multi Robôs SmarttInvest - 3 Estratégias WINCarteira Multi Robôs SmarttInvest - 6 Estratégias WINAlgoritmia - ErastóstenesTrade Sincronizado Seguidor de RLP WDOTrade Sincronizado Seguidor de RLP WINTrade Sincronizado WIN - Orion Robust TradingTrade Sincronizado Carabot Swing WDOTrade Sincronizado – North Trader');


})

/*it ('Verifica Estrategia de Trade Sincronizado na Loja', () => {

  cy.wait(1000);  
  cy.get('svg[data-icon="cart-plus"]').click(); //clica na Loja
  Cypress.on('uncaught:exception', (err, runnable) => {
    //retorna falso os erros que podem danificar a automação, tratamento de exceção
    return false //
  })

  cy.wait(1000)
  cy.get('p.text-gray-80.xl\\:group-hover\\:text-white')
  .should('be.visible')


})*/
})
