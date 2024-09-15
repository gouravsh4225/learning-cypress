/// <reference types="cypress" />

describe("Task Page ", () => {
  it("should open main Page", () => {
    cy.visit("http://localhost:5173");
  });

  it("should render main Image", () => {
    cy.visit("http://localhost:5173");
    cy.get(".main-header img");
  });
  it("should find element by Nested Find Method", () => {
    cy.visit("http://localhost:5173");
    cy.get(".main-header").find("img");
  });
  it("should have project Title", () => {
    cy.visit("http://localhost:5173");
    cy.get(".main-header h1").should("have.length", 1);
    cy.get(".main-header h1").contains("React Tasks");
  });
});
