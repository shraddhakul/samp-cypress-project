Cypress.on('uncaught:exception', (err) => {
    return false
  })
describe('Peek Pro Demo Request',()=>{
    
    it('verifies user is taken to the demo form',()=>{

    //visit peek.com
    cy.visit('http://peek.com')
    //click on Learn more
    cy.get('#peek-pro > :nth-child(2) > .col-lg-3 > .section-cta').click()
    //verify url contains peek.com/pro
    cy.url().should('contain','/pro/')
    //click on get started and verify request free demo form shows up
    cy.get('#menu-new-main-menu > #menu-item-15110 > a').click()
    //check if the user has landed on the right page
    cy.url().should('contain','/pro/get-started')
    cy.get('.et_pb_code_inner > h2').should('contain','Request Free Demo\n')
    })
})
