describe('Navigation', () => {
  describe('Header buttons', () => {
    it('should navigate to the home section', () => {
      // Start from the index page
      cy.visit('/')

      cy.get('a[href="#home"]').click()

      // The new url should include "/about"
      cy.url().should('include', '#home')
    })
    it('should navigate to the about section', () => {
      // Start from the index page
      cy.visit('/')

      cy.get('a[href="#about"]').click()

      // The new url should include "/about"
      cy.url().should('include', '#about')
    })
    it('should navigate to the projects section', () => {
      // Start from the index page
      cy.visit('/')

      cy.get('a[href="#projects"]').click()

      // The new url should include "/about"
      cy.url().should('include', '#projects')
    })
  })
})
