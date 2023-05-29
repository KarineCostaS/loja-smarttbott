import LoginPage from './loginPage.js';
import EstrategiaTradeSincronizadoPage from './estrategiaTradeSincronizadoPage.js';

describe('SmarttStore Estrategia Trade Sincronizado', () => {
  const loginPage = new LoginPage();
  const estrategiaTradeSincronizadoPage = new EstrategiaTradeSincronizadoPage();

  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.typeEmail(Cypress.env('testeSeguidor'));
    loginPage.typePassword(Cypress.env('senhaSeguidor'));
    loginPage.clickEntrarButton();
  });

  it('Verifica Estrategia de Trade Sincronizado na Loja', () => {
    estrategiaTradeSincronizadoPage.esperarTempo()
    estrategiaTradeSincronizadoPage.clickLoja();
    estrategiaTradeSincronizadoPage.esperarTempo();
    estrategiaTradeSincronizadoPage.verifyElementVisibility();
  });
});
