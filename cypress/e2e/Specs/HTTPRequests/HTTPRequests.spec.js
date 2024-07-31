/// <reference types="cypress" />


Given("I make the GET request to API endpoint", function () {

    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')

        .as('response');  // Alias the request response
});

Then("I verify the response status is 200", function () {

    cy.get('@response').then((response) => {

        expect(response.status).to.equal(200);
    });
});

And("I verify the response body contains the expected data", function () {
    cy.get('@response').then((response) => {

        expect(response.body).to.have.property('userId', 1);
        expect(response.body).to.have.property('id', 1);
        cy.log(JSON.stringify(response.body));

    });

    // GET Request => BootCamp approach
 
Given(
    "I make a GET request with url: {string}, path: {string}, query: {string}",
    (baseUrl, path, query) => {
      cy.request({
        method: "GET",
        url: Cypress.env(baseUrl) + Cypress.env(path) + query,
        failOnStatusCode: false,
      })
        .then((response) => {
          cy.log(JSON.stringify(response.body));
        })
        .as("response");
    }
  );

});
