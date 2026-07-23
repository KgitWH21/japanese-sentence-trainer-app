describe("Japanese Sentence Trainer", () => {
    it("loads and shows the draw button", () => {
        cy.visit("/");
        cy.contains("DRAW NEW CHALLENGE");
    });
});