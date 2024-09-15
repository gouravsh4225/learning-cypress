/// <reference types="cypress" />

describe("Tasks Management Page", () => {
  it("should visit the Page", () => {
    cy.visit("http://localhost:5173");
  });
  it("should have a button and have text as Add Task Button", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task");
  });
  it("should click on Add Task Button and open Modal", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
  });
  it("should close the modal on click Cancel Button", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get("button").contains("Cancel").click();
  });
  it("should close the modal on click backdrop", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    console.info("hegy");
    cy.get(".backdrop").click({ force: true });
    // cy.get("button").contains("Cancel").click();
  });
});
