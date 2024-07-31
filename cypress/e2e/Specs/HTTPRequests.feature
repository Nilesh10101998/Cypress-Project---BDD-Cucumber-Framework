Feature: HTTP Requests

    Scenario: Perform a GET Call
        Given I make the GET request to API endpoint
        Then I verify the response status is 200
        And I verify the response body contains the expected data
