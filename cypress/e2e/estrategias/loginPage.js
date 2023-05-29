class LoginPage {
    visitLoginPage() {
      cy.visit('https://app.smarttbot.com/public/login');
    }
  
    typeEmail(email) {
      cy.get('#login-username').type(email);
    }
  
    typePassword(password) {
      cy.get('#login-password').type(password);
    }
  
    clickEntrarButton() {
      cy.get('#login-button').click();
    }
  }
  
  export default LoginPage;
  