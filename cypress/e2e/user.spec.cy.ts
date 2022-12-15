
import { login } from "cypress/support/commands";

describe('login', () => {
  it('should successfully log into our app', async () => {
    cy.visit("/products")
    cy.origin('https://dev-txtbte1v.us.auth0.com', () =>
    {
      cy.get('#username').type("vic.kloeppel@outlook.com")
      cy.get('#password').type("VickloTh1200!")
      cy.get('form').first().submit()
    });
    cy.contains("Welcome")
    cy.get("#name").type("cypress")
    cy.get("#adress").type("sint cypress straat 22")
    cy.get("#postcode").type("6002CP")
    cy.get('#btn-submit').click()
    cy.contains("Products")
  });
});
