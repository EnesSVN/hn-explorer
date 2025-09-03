describe("HN Explorer - Detail page", () => {
  it("navigates to detail page and shows title + no comments", () => {
    cy.intercept("GET", "/api/hn/search*", { fixture: "hn-react.json" });
    cy.intercept("GET", "/api/hn/item/*", {
      id: 999,
      title: "React for Professionals",
      points: 123,
      author: "someone",
      children: [],
    });

    cy.visit("/");
    cy.contains("details").click();

    cy.contains("React for Professionals").should("be.visible");
    cy.contains(/No comments/i).should("be.visible");
  });
});
