/// <reference types="cypress" />

describe("Page Navigation", () => {
  it("should navigate between the pages", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy='header-about-link']").click();
    cy.location("pathname").should("eq", "/about");
    cy.go("back");
    cy.location("pathname").should("eq", "/");
    /** From Home to Home */
    cy.get("[data-cy='header-home-link']").click();
    cy.location("pathname").should("eq", "/");

    /** From Home to task */
    cy.get("[data-cy='header-task-link']").click();
    cy.location("pathname").should("eq", "/task");
    cy.go("back");
    cy.location("pathname").should("eq", "/");
  });
});
