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
  it("should close the modal on click backdrop", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    console.info("Add console");
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".model").should("not.exist");
    // cy.get("button").contains("Cancel").click();
  });
  it("should close the modal on click Cancel Button", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get("button").contains("Cancel").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".model").should("not.exist");
  });

  it("should create new task", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get("#title").type("New Test Task");
    cy.get("#summary").type("Some Description");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("New Test Task");
    cy.get(".task p").contains("Some Description");
  });

  it("should validate user input", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".modal .error-message").should("exist");
    cy.get(".modal .error-message").contains(
      "Please provide values for task title, summary and category!"
    );
  });

  it("should filters the tasks", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get("#title").type("New Test Task");
    cy.get("#summary").type("Some Description");
    cy.get("#category").select("urgent");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0);
    cy.get("#filter").select("urgent");
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });

  it("should add multiple tasks", () => {
    cy.visit("http://localhost:5173");
    cy.get("button").contains("Add Task").click();
    cy.get("#title").type("Test Task 1");
    cy.get("#summary").type("Some Description 1");
    cy.get("#category").select("urgent");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    /** 2nd task  */
    cy.get("button").contains("Add Task").click();
    cy.get("#title").type("Test Task 2");
    cy.get("#summary").type("Some Description 2");
    cy.get("#category").select("moderate");
    cy.get(".modal button").contains("Add Task").click();
    cy.get(".task").should("have.length", 2);

    /** checking the order of list */
    cy.get(".task").eq(0).contains("Test Task 1"); // alternate first()
    cy.get(".task").eq(1).contains("Test Task 2"); // alternate last()
  });
});
