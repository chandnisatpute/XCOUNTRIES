const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Your React app URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Ensure this matches your file location
  },
});