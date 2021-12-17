describe('Quotes App', () => {

    beforeEach(() => {
        // Each test needs fresh state!
        // Never rely on state left over from previous tests
        // Every test should work in isolation (MUST)
        cy.visit('http://localhost:3000')

    }) 
    
    it('Sanity Check', () => {
        // 'it' is a test
        // expect is an assertion
        expect(2 + 2).to.equal(4);
        expect(2 + 2).not.to.equal(2);
        expect({}).to.eql({}); 
        expect({}).not.to.equal({});   
      })

      const fNameInput = () => cy.get('input[name=first_name]');
      const lNameInput = () => cy.get('input[name=last_name]');
      const emailInput = () => cy.get('input[name=email]');
      const passwordInput = () => cy.get('input[name=password]');
      const submitBtn = () => cy.get('button[id="submitBtn"]');
      const checkbox = () => cy.get('input[name=tos]')

      it('Form elements are showing', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
        checkbox().should('exist')
        
        // cy.contains('Submit Quote').should('exist');
        // cy.contains(/submit quote/i).should('exist');
      })

})