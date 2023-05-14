describe('SmarttStore Login', () => {

  beforeEach(() => {
    cy.visit('https://app.smarttbot.com/public/login')
    cy.get('#login-username').type(Cypress.env('login')) // digita o username
    cy.get('#login-password').type(Cypress.env('senha')) // digita a senha
    cy.get('#login-button').click() // clica no botão "Acessar"
  })
    
  })

it ('Login', () => {

})