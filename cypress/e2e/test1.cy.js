describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://www.darwoft.com/");
  });

  it("fails", () => {
    cy.visit("https://www.darwoft.com/");
    cy.get("h1").should("have.text", "hola mundo!");
  });

  it.skip("skip", () => {
    cy.visit("https://www.darwoft.com/");
  });
});
