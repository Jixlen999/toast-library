describe('Toasts spec', () => {
  it('check default toast creating, default closing time (5s)', () => {
    cy.visit('/iframe.html?id=toasts--toasts');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="toast"]')
      .should('include.text', 'Success')
      .and('have.css', 'background-color', 'rgb(92, 184, 92)');
    //checking default close time
    cy.wait(5000);
    cy.get('[data-cy="toast"]').should('not.exist');
  });
  it('check warning toast with title="TITLE" and text="some warning text, close btn', () => {
    cy.visit(
      '/iframe.html?id=toasts--toasts&args=title:TITLE;variant:warning;text:some warning text',
    );
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="toast"]')
      .should('include.text', 'TITLE')
      .and('include.text', 'some warning text')
      .and('have.css', 'background-color', 'rgb(240, 173, 78)');
    //checking close btn
    cy.get('[data-cy="close-btn"]').click();
    cy.get('[data-cy="toast"]').should('not.exist');
  });
  it('check info toast with default title (for this varian must be "Info"), position="top-left", timer="2"', () => {
    cy.visit(
      '/iframe.html?id=toasts--toasts&args=variant:info;position:top-left;timer:3',
    );
    cy.get('[data-cy="btn"]').click();
    //check position by checking position of a portal with special id and having created toast inside
    cy.get('#toastPortal-top-left')
      .should('have.css', 'top', '0px')
      .and('have.css', 'left', '0px')
      .find('[data-cy="toast"]')
      .should('include.text', 'Info')
      .and('have.css', 'background-color', 'rgb(91, 192, 222)');
    //checking timer
    cy.wait(3000);
    cy.get('[data-cy="toast"]').should('not.exist');
  });
  it('check toast bgColor and text/icon color setting', () => {
    cy.visit(
      '/iframe.html?id=toasts--toasts&args=bgColor:rgb(186, 35, 166);iconAndTextColor:rgb(0, 0, 0)',
    );
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="toast"]')
      .should('have.css', 'background-color', 'rgb(186, 35, 166)')
      .and('have.css', 'color', 'rgb(0, 0, 0)');
  });
  it('check max 3 toasts creating and spacing=50', () => {
    cy.visit('/iframe.html?id=toasts--toasts&args=spacing:50');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="toast"]').should('have.css', 'margin', '50px 0px');
    cy.get('#toastPortal-bottom-right').children().should('have.length', 3);
  });
});
