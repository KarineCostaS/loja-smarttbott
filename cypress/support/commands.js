Cypress.Commands.add('verificaTradeSincronizado', () => {
    cy.get('p.text-gray-80.xl\\:group-hover\\:text-white')
      .should('be.visible')
      
  })


Cypress.Commands.add('verificaCarteiraMulti',() => {
  cy.get('sb-p[fontsize="sm"][fontweight="medium"][color="black-100"][truncate="false"]')
  .should('be.visible');
})
