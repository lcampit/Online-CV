import { mount } from 'cypress/react'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      mount_with_context: typeof mount
    }
  }
}
