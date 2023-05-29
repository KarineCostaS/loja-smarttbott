class EstrategiaTradeSincronizadoPage {
    clickLoja() {
      cy.get('svg[data-icon="cart-plus"]').click();
      Cypress.on('uncaught:exception', (err, runnable) => {
        //retorna falso os erros que podem danificar a automação, tratamento de exceção
        return false;
      });
    }

    esperarTempo(){
      cy.wait(2000)
    }
  
    verifyElementVisibility() {
      cy.get('p.text-gray-80.xl\\:group-hover\\:text-white')
        .should('be.visible');
    }
  }
  
  export default EstrategiaTradeSincronizadoPage;
  