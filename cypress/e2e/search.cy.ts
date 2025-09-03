describe("HN Explorer - Search flow", () => {
  it("shows results when typing (stubbed network)", () => {
    cy.intercept("GET", "/api/hn/search*", { fixture: "hn-react.json" }).as(
      "search"
    );

    cy.visit("/");

    cy.get('input[aria-label="Search"]').clear().type("react");

    cy.wait("@search");
    cy.contains(/React for Professionals/i).should("be.visible");
  });

  it("shows error UI on server error", () => {
    cy.intercept("GET", "/api/hn/search*", {
      statusCode: 500,
      body: { error: "boom" },
    }).as("search-err");

    cy.visit("/");

    cy.get('input[aria-label="Search"]').clear().type("error");
    cy.wait("@search-err");

    cy.get('[role="alert"]').should("contain.text", "Error");
  });
});
