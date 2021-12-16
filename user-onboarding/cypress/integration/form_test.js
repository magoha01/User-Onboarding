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


})