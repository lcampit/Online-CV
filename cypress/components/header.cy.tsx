import React from "react";
import Header from "../../components/header";
const screenResolutions = [
  [1920, 1080],
  [360, 800],
  [1366, 768],
  [1280, 720],
  [1536, 864],
];
describe("Header component", () => {
  screenResolutions.forEach(([width, height]) => {
    it(
      "renders on screens with width: " + width + " and height: " + height + "",
      () => {
        // see: https://on.cypress.io/mounting-react
        cy.viewport(width, height);
        cy.mount_with_context(<Header />);
      },
    );
  });
});
