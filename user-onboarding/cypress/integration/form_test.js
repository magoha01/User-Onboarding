describe('Quotes App', () => {

    beforeEach(() => {
     
        cy.visit('http://localhost:3000')

    }) 
    
    it('Sanity Check', () => {
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
      const fullName = () => cy.get()

      it('Form elements are showing', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
        checkbox().should('exist')
      })

      it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
      })

      it('Can type in names, email, and password', () => {
        fNameInput()
          .should('have.value', '')
          .type('firstName')
          .should('have.value', 'firstName')
        
          lNameInput()
          .should('have.value', '')
          .type('lastName')
          .should('have.value', 'lastName')
  
        emailInput()
          .should('have.value', '')
          .type('email@email.com')
          .should('have.value', 'email@email.com')

          passwordInput()
          .should('have.value', '')
          .type('password')
          .should('have.value', 'password')
      })

      it('terms of service checkbox can be checked', () => {
        checkbox().check()
      })

      it('If all fields are filled out, user can submit form', () =>{
        fNameInput()
        .type('firstName')

        lNameInput()
        .type('lastName')
       

        emailInput()
        .type('email@email.com')
      

        passwordInput()
        .type('password')

        checkbox().check()
        
        submitBtn().click()

       cy.get('h2').should('exist').contains('firstName lastName');
       
      })

      it('user cannot submit form if field is left empty', () => {

        fNameInput().type('firstName')
          submitBtn().should('be.disabled')
        
          lNameInput()
          .type('lastName')
          submitBtn().should('be.disabled')
  
        emailInput()
          .type('email@email.com')
          submitBtn().should('be.disabled')

          passwordInput()
          .type('password')
          submitBtn().should('be.disabled')

          checkbox().check()

          submitBtn().should('not.be.disabled')

      })
})