///  <reference types = "Cypress"/> 
import ManageJobTitlesLocators from "../Locators/managejobtitles.locators";

const manageJobTitlesLocators = new ManageJobTitlesLocators();

class ManageJobTitlesFunctions{

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(manageJobTitlesLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(manageJobTitlesLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(manageJobTitlesLocators.LOGINBUTTON).click();

    }

    NavigateToHrAdministrationPage(){

        cy.get(manageJobTitlesLocators.HRADMINISTRATIONPAGE).click();

    }

    JobDropdown(){

       cy.get(manageJobTitlesLocators.JOBDROPDOWN).click();

    }

    ManageJobtitles(){

        cy.xpath(manageJobTitlesLocators.MANAGEJOBTITLES).click();

    }

    AddJobTitle(){

        cy.xpath(manageJobTitlesLocators.ADDJOBTITLE).click();

    }

    JobTitleName(){

        cy.get(manageJobTitlesLocators.JOBTITLENAME).type("Principal QA Engineer 02");

    }

    JobDescription(){

        cy.get(manageJobTitlesLocators.JOBDESCRIPTION).type("This is our new Principal QA Engineer");

    }

    JobNote(){

        cy.get(manageJobTitlesLocators.JOBNOTE).type("Mr. Joshua Booker is our new Principal QA Engineer");

    }

    ClickSaveButton(){

        cy.get(manageJobTitlesLocators.SAVEBUTTON).click();

    }


}
export default ManageJobTitlesFunctions;