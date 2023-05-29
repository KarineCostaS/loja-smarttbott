class CarteiraMultiRobosPage {
    clickLoja() {
      cy.get('svg[data-icon="cart-plus"]').click()
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        //retorna falso os erros que podem danificar a automação, tratamento de exceção
        return false;
      });
      

    }
  
    esperarTempo(){
      cy.wait(20000)
    }

    verifyElementVisibility() {
      cy.get('sb-p[fontsize="sm"][fontweight="medium"][color="black-100"][truncate="false"]')
        .should('be.visible');
    }
  }
  
  export default CarteiraMultiRobosPage;
  