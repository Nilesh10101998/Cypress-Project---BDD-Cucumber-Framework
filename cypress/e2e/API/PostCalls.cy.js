describe("API testing", () => {


    //First approach

    it("approach1- hard coded json object", () => {

        const requestBody = {         //We stored request body under one variable

            name: "nilesh",
            job: "software test engineer",
            email: "nileshkasane15@gmail.com",
            location: "pune"
        }

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody

        })
            .then((response) => {         //Verifying the response data

                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal("nilesh")
                expect(response.body.email).to.equal("nileshkasane15@gmail.com")
                expect(response.body.location).to.equal("pune")

            })

    })

    //Second Approach

    it("approach2 - dynamically generating json object", () => {

        const requestBody = {         //We stored request body under one variable

            name: Math.random().toString(5).substring(2),      //with the help of random method we generated random data
            job: "software test engineer",
            email: Math.random().toString(5).substring(2) + "@gmail.com",
            location: Math.random().toString(5).substring(2)
        }

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody

        })
            .then((response) => {         //Verifying the response data

                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(requestBody.name)
                expect(response.body.email).to.equal(requestBody.email)
                expect(response.body.location).to.equal(requestBody.location)

            })

    })

    //Third approach

    it("approach3 - using Fixture", () => {

        cy.fixture('mydata').then((fixturedata) => {

            const requestBody = fixturedata;      //Storing response in the variable

            cy.request({

                method: "POST",
                url: "https://reqres.in/api/users",
                body: requestBody

            })
                .then((response) => {         //Verifying the response data

                    expect(response.status).to.equal(201)
                    expect(response.body.name).to.equal(requestBody.name)     //comparing data with fixture file data
                    expect(response.body.email).to.equal(requestBody.email)
                    expect(response.body.location).to.equal(requestBody.location)

                   expect(response.body).has.property('email', requestBody.email)   //asserting the data from the response body
                   expect(response.body).to.have.property('email',requestBody.email)
                   expect(response.body).to.have.property('location',requestBody.location)

                })

        })


    })


})