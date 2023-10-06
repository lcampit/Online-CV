import React from 'react'
import Header from '../../components/header'

describe('Header component', () => {
  it('renders on 720p resolution', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1024, 768)
    cy.mount_with_context(<Header />)
  })
})
