import { mount } from 'cypress/react18'
import ActiveSectionContextProvider from '@/context/active-section-context'
import '../../app/globals.css'
Cypress.Commands.add('mount', (component, options) => {
  // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options)
})

Cypress.Commands.add('mount_with_context', (component, options) => {
  return mount(<ActiveSectionContextProvider>{component}</ActiveSectionContextProvider>, options)
})
