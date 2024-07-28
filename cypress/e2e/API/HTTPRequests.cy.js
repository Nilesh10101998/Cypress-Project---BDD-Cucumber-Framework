describe("HTTP Requests", () => {

    // Get call 

    it("GET Call", () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200);

    })

    //Post Call

    it("POST Call", () => {

        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {

                title: "Test post",        //We don't need to give double quotes in the cypress
                body: "This is post call",
                userId: 1

            }

        })
            .its('status')
            .should('equal', 201);
    })

    //Put call

    it("PUT Call", () => {

        cy.request({

            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {

                title: "Test post - Updated",
                body: "This is put call",
                userId: 1,
                id: 1

            }

        })
            .its('status')
            .should('equal', 200);

    })

    //Delete call

    it("DELETE Call", () => {

        cy.request({

            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1"

        })
            .its('status')
            .should('equal', 200);

    })


})