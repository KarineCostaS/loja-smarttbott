import LoginPage from './loginPage';
import CarteiraMultiRobosPage from './carteiraMultiRobosPage.js';

describe('SmarttStore Carteira Multi Robos', () => {
  const loginPage = new LoginPage();
  const carteiraMultiRobosPage = new CarteiraMultiRobosPage();

  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.typeEmail(Cypress.env('testeSeguidor'));
    loginPage.typePassword(Cypress.env('senhaSeguidor'));
    loginPage.clickEntrarButton();
  });

  it('Verifica Carteira Multi Robos da Loja', () => {
    carteiraMultiRobosPage.esperarTempo();
    carteiraMultiRobosPage.clickLoja();
    carteiraMultiRobosPage.verifyElementVisibility();
  });

});
