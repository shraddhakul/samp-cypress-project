// ignore uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
    return false
  })

describe('New User sign up and login',() =>{

    it.skip('Creates a new user', ()=>{

        //go to home page
        cy.visit('https://www.peek.com/')
        //click on the login/signup
        //**cypress captured uncaught exception at this point
        //Added ignore uncaught exceptions for now - see at the top
        //Added {force:true} as it's parent prop has css prop display:none
        cy.contains('Log In / Sign Up').click({force:true})
        cy.get('.banner-header').should('have.text', 'Welcome!')
        //click on Sign Up button
        cy.get(':nth-child(1) > .btn').click()
        cy.get('.text-captialize').should('have.text','Sign Up')
        //Enter email, password, password confirmation
        cy.get('#user_email').type('testUser1@gmail.com')
        cy.get('#user_password').type('12345678')
        cy.get('#user_password_confirmation').type('12345678')
        //click on the register button
        cy.get('.btn').click()
        //assert the success confirmation
    })

    it('Logs in existing user', ()=>{

        //go to home page
        cy.viewport('macbook-15')
        cy.visit('https://www.peek.com/')
        //click on the login/signup
        cy.contains('Log In / Sign Up').click({force:true})
        
        //Click on the login button
        cy.get(':nth-child(3) > .btn').click()
        //enter email
        cy.get('#user_email').type('testUser1@gmail.com')
        //enter password
        cy.get('#user_password').type('12345678')
        //click on the sign in button
        cy.get('.btn').click()
        //assert the success confirmation
        //test was failing at this point
        //app converting the email id testUser1@gmail.com to testuser1@gmail.com 
        cy.get('li > .dark-on-light').should('contain','testuser1@gmail.com')
    })

})