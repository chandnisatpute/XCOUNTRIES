describe("Countries App", () => {
    it("Logs API response", () => {
      cy.intercept("GET", "**/https://xcountries-backend.azurewebsites.net/all**").as("getCountries");
      cy.visit("/");
      cy.wait("@getCountries").then((interception) => {
        console.log("API Response:", interception.response);
      });
    });
  });