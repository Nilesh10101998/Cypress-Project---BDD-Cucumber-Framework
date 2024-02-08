import LocationPageLocators from "../Locators/location.locators";
///  <reference types = "Cypress"/>

const locationPageLocators = new LocationPageLocators();

class LocationPageFunctions{

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(locationPageLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(locationPageLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(locationPageLocators.LOGINBUTTON).click();
    }

    NavigateToHrAdministrationPage(){

        cy.get(locationPageLocators.HRADMINISTRATIONPAGE).click();

    }

    NavigateToOrganizationPage(){

        cy.xpath(locationPageLocators.ORGANIZATIONPAGE).click();
    }

    LocationsPage(){

        cy.get(locationPageLocators.LOCATIONS).click();
    }

    ClickEditButton(){

        cy.get(locationPageLocators.EDITBUTTON).click();  
    }

    LocationName(){

        cy.get(locationPageLocators.LOCATIONNAME).clear().type("Pune Office");
    }

    CountryDropdown(){

        cy.get(locationPageLocators.COUNTRYDROPDOWN).click();
    }

    SelectCountry(){

        cy.get(locationPageLocators.SELECTCOUNTRY).each(($el, index, $list) => {

            // cy.wrap($el).text('India').click()

            if($el.text()=="India")
            {
              cy.wrap($el).click()
    
            }
        })

    }

    TimeZone(){

        cy.get(locationPageLocators.TIMEZONE).click();
    }

    SelectTimeZone(){

        cy.get(locationPageLocators.SELECTTIMEZONE).each(($el, index, $list) => {     //We use .each function for iterating element
        
            if($el.text()=="(GMT+05:30) India Standard Time - Kolkata")
            {
              cy.wrap($el).click()

            }

        })

    }

    SelectState(){

        cy.get(locationPageLocators.STATE).type("Maharashtra");
    }

    SelectCity(){

        cy.get(locationPageLocators.CITY).clear().type("Pune");
    }

    EnterPinCode(){

        cy.get(locationPageLocators.PINCODE).clear().type("411038");

    }

    EnterContactNumber(){

        cy.get(locationPageLocators.CONTACTNUMBER).clear().type("9673067421");

    }

    FaxContact(){

        cy.get(locationPageLocators.FAX).type("+919673067421");
    }

    EnterAddress(){

        cy.get(locationPageLocators.ADDRESS).type("Office No 1A, 2nd Floor Tower B-3 Cerebrum IT Park Kalyani Nagar Pune – 411 014 Maharashtra India");

    }

    ImpNotes(){

        cy.get(locationPageLocators.NOTES).type('Now Pune is our new office location');
    }

    ClickSaveButton(){

        cy.get(locationPageLocators.SAVEBUTTON).click();
        
    }

}
export default LocationPageFunctions;