describe('Login and Navigate to Staff Page', () => {
    beforeEach(() => {
      cy.visit('https://goal-dev.mdx.ac.uk/'); // Visit the login page
   
      // Fill in the login form with valid credentials and submit
      cy.visit('https://goal-dev.mdx.ac.uk/'); // Visit the login page
  
      // Fill in the login form with valid credentials and submit
      cy.get('#id_username').type('Mosaab');
      cy.get('#id_password').type('qwerghjk');
      cy.get('select[name="login_as"]').should('exist');
      cy.get('select[name="login_as"]').select('staff', { force: true });
      cy.get('form[action="/login/"] > button[type="submit"]').click();
  
      // Navigate to the staff page
      cy.get(':nth-child(2) > .row > .col-sm-4 > .nav > .nav-item > .nav-link').click();
      cy.get('.mr-auto > :nth-child(3) > .nav-link').should('exist').click();
      
      // Register alias for staff search input
      cy.get('input.form-control.form-control-sm[aria-controls="staffs"]').as('staff_search');
    });
  
   
  
    it('search about User name', () => {
    
      cy.get('@staff_search').should('exist').click();
  
      cy.get('@staff_search').type('Mosaab'); // username search
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mossab > .sorting_1').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  
    });
  
  
  
    it('search for non-existing thing', () => {
   
      cy.get('@staff_search').type('any Think does not exist'); // search for non-existing thing
        cy.get('@staff_search').type('{enter}');
        cy.get('#edit_staff_123 > .sorting_1').should('not.exist');
        cy.get('@staff_search').clear().should('have.value', ''); // clear search
    });
  
  
    
  
    it('search for first name', () => {
     
      cy.get('@staff_search').type('Mosaab'); // search for first name
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mosaab > :nth-child(2)').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  
    });
    
  
    
  
    it('search for last name', () => {
     
      cy.get('@staff_search').type('odeh'); // search for last name
        cy.get('@staff_search').type('{enter}');
        cy.get('#staff_Mossab > :nth-child(3)').should('exist');
        cy.get('@staff_search').clear().should('have.value', ''); // clear search
    
  
    });
  
  
    
  
    it('search for email', () => {
  
      
      cy.get('@staff_search').type('Mossab@re'); // search for email
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mossab > :nth-child(4)').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
      cy.get('@staff_search').type('{enter}');
    });
  
  
      it('Add new staff', () => {
        cy.get('#new_staff').as('AddStaff');
        cy.get('@AddStaff')
         .type('mostafaa010000'); // add staff
         cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
        cy.get('@staff_search').type('mostafaa010000'); // search for first name
        cy.get('@staff_search').type('{enter}');
        cy.get('#staff_mostafaa010000 > :nth-child(2)').should('exist');
  
    });
  
  
    it(' edit first name field', () => {
    
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').should('exist').click();
       cy.get('#edit_staff_123 > :nth-child(4) > .textinput').as('fName');
        cy.get('@fName').clear();
        cy.get('@fName').type('MyFirstName'); // edit first name field
        cy.get('#edit_staff_123 > :nth-child(4) > .textinput').should('have.value', 'MyFirstName');
  
    });
  
  
  
    it('edit the last name', () => {
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').should('exist').click();
  
      cy.get('#edit_staff_123 > :nth-child(5) > .textinput').as('Lname');
        cy.get('@Lname').clear();
        cy.get('@Lname').type('LastName'); // edit the last name
        cy.get('#edit_staff_123 > :nth-child(5) > .textinput').should('have.value', 'LastName');
      });
  
  
     it('edit the email field', () => {
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').should('exist').click();
  
      cy.get('#edit_staff_123 > :nth-child(6) > .textinput').as('email');
      cy.get('@email').clear();
      cy.get('@email').type('mosaab.cb@gmail.com'); // edit the email field
      cy.get('#edit_staff_123 > :nth-child(6) > .textinput').should('have.value', 'mosaab.cb@gmail.com');
  
  
    });
    it('Edit its authorization to Write', () => {
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').click();
    cy.get('#edit_staff_123 > :nth-child(7) > .textinput').select('Write'); 
      cy.get('#edit_staff_123 > :nth-child(7) > .textinput').should('have.value', '2');
  
    });
  
   it('Eait to Read', () => {
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').click();
     cy.get('#edit_staff_123 > :nth-child(7) > .textinput').select('Read'); // change to read
      cy.get('#edit_staff_123 > :nth-child(7) > .textinput').should('have.value', '1');
    });
  
  
  });