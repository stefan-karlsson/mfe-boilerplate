describe('app.cy.ts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('header should exist', () => {
    cy.get('[data-cy=header]').children().its('length').should('be.gte', 1);
  });

  it('navigation should exist', () => {
    cy.get('[data-cy=navigation]').children().its('length').should('be.gte', 1);
  });
});
