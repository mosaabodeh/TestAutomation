describe('Login and Navigate to Staff Page', () => {
    it('should log in and navigate to the staff page', () => {
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
  
      cy.get('input.form-control.form-control-sm[aria-controls="staffs"]').as("staff_search");
      cy.get('@staff_search').should('exist').click();
  
      cy.get('@staff_search').type('Mosaab'); // username search
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mossab > .sorting_1').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search

  
      cy.get('@staff_search').type('any Think does not exist'); // search for non-existing thing
      cy.get('@staff_search').type('{enter}');
      cy.get('#edit_staff_123 > .sorting_1').should('not.exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  

      cy.get('@staff_search').type('Mosaab'); // search for first name
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mosaab > :nth-child(2)').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  

      cy.get('@staff_search').type('odeh'); // search for last name
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mossab > :nth-child(3)').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  
      
      cy.get('@staff_search').type('Mossab@re'); // search for email
      cy.get('@staff_search').type('{enter}');
      cy.get('#staff_Mossab > :nth-child(4)').should('exist');
      cy.get('@staff_search').clear().should('have.value', ''); // clear search
  
      cy.get('@staff_search').type('{enter}');
  
      cy.get('#staff_123 > .sorting_1').click();
      cy.get('.dtr-data > .row > :nth-child(1) > a').as('EditButton');
      cy.get('@EditButton').should('exist').click();
  
      cy.get('#edit_staff_123 > :nth-child(4) > .textinput').as('fName');
      cy.get('@fName').clear();
      cy.get('@fName').type('MyFirstName'); // edit first name field
      cy.get('#edit_staff_123 > :nth-child(4) > .textinput').should('have.value', 'MyFirstName');
      cy.get('#edit_staff_123 > :nth-child(5) > .textinput').as('Lname');
      cy.get('@Lname').clear();
      cy.get('@Lname').type('LastName'); // edit the last name
      cy.get('#edit_staff_123 > :nth-child(5) > .textinput').should('have.value', 'LastName');
  
      cy.get('#edit_staff_123 > :nth-child(6) > .textinput').as('email');
      cy.get('@email').clear();
      cy.get('@email').type('mosaab.cb@gmail.com'); // edit the email field
      cy.get('#edit_staff_123 > :nth-child(6) > .textinput').should('have.value', 'mosaab.cb@gmail.com');

      cy.get('#edit_staff_123 > :nth-child(7) > .textinput').select('Read'); // change to read
      cy.get('#edit_staff_123 > :nth-child(7) > .textinput').should('have.value', '1');


      cy.get('#new_staff').as('AddStaff');
     cy.get('@AddStaff')
      .type('mostafaaa'); // add staff
      cy.get('.toolbar > .row > :nth-child(2) > .btn').click();
     cy.get('@staff_search').type('mostafaaa'); // search for first name
     cy.get('@staff_search').type('{enter}');
     cy.get('#staff_mostafaaa > :nth-child(2)').should('exist');
     
    });
});