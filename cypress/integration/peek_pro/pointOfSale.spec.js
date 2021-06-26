Cypress.on('uncaught:exception', (err) => {
    return false
  })

  describe('peekpro-pointOfSale product',()=>{

    it('checks all elements and feautes on point of sale page',()=>{
        //visit peek pro page
        cy.visit('http://peek.com/pro')
        //click on the produc Tour on the top nav
        cy.get('#menu-new-main-menu > #menu-item-17225 > a').click()
        //check that user is taken on the product tour page
        cy.url().should('contain','pro/product-tour')
        //User clicks on the learn more button of Point of sale prod
        cy.get('.et_pb_column_2 > .et_pb_code > .et_pb_code_inner > .pt-learn-more').click()
        //check that user is correctly taken to point of sale page
        cy.url().should('contain','pro/product-tour/point-of-sale')
        //verify that page displays POS specific features
        cy.get('.et_pb_column_7 > .et_pb_module > .et_pb_text_inner > h2').should('have.text','Optimized for Speed')
        cy.get('.et_pb_column_9 > .et_pb_module > .et_pb_text_inner > h2').should('have.text','See Availability At A Glance')
        cy.get('.et_pb_column_13 > .et_pb_module > .et_pb_text_inner > h2').should('have.text','Goes Anywhere')
        cy.get('.et_pb_column_31 > .et_pb_module > .et_pb_text_inner > h2').should('have.text','Ticket Printing')

    })
  })