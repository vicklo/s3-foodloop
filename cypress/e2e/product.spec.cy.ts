import { TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { AxiosResponse } from 'axios';
import { PostProductDto } from 'src/app/dto/postproduct.dto';
import {ProductService} from '../../src/app/services/product.service';

describe('Products', () => {
  it('show products', () => {
    cy.visit("/products")
    cy.origin('https://dev-txtbte1v.us.auth0.com', () =>
    {
      cy.get('#username').type("vic.kloeppel@outlook.com")
      cy.get('#password').type("VickloTh1200!")
      cy.get('form').first().submit()
    });
    cy.get("h1").should("be.visible")
  })
  it('add products', () => {
    cy.visit('/products')
    cy.origin('https://dev-txtbte1v.us.auth0.com', () =>
    {
      cy.get('#username').type("vic.kloeppel@outlook.com")
      cy.get('#password').type("VickloTh1200!")
      cy.get('form').first().submit()
    });
    cy.get("#createProduct").click()
    cy.get("#name").type("Irene borst")
    cy.get("#description").type("Description")
    cy.get('#url').type("www.google.com")
    cy.get('#save-product-btn').click();
    cy.get("#product").first().should("be.visible")
  })
  it('should delete a product',async () =>
  {
    cy.visit('/products')
    cy.origin('https://dev-txtbte1v.us.auth0.com', () =>
    {
      cy.get('#username').type("vic.kloeppel@outlook.com")
      cy.get('#password').type("VickloTh1200!")
      cy.get('form').first().submit()
    });
    cy.get("#delete-product").first().click()
    cy.get("#products").should("be.empty")
  })
})


