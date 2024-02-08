import ManageRoleLocators from "../Locators/managerole.locators";
///  <reference types="Cypress"/>

const manageRoleLocators = new ManageRoleLocators();

class ManageRoleFunctions{

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(manageRoleLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(manageRoleLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(manageRoleLocators.LOGINBUTTON).click();
    }

    NavigateToHrAdministrationpage(){

        cy.get(manageRoleLocators.HRADMINISTRATIONPAGE).click();
    }

    SelectJob(){

        cy.xpath(manageRoleLocators.SELECTJOB).click();
    }

    SelectJobTitle(){

        cy.xpath(manageRoleLocators.SELECTJOBTITLE).click();
    }

    EditJobTitle(){

        cy.get(manageRoleLocators.EDITJOBTITLE).click();
    }

    JobTitle(){

      cy.get(manageRoleLocators.JOBTITLE).clear().type("New Brand Manager");

    }

    JobDescription(){

        cy.get(manageRoleLocators.JOBDESCRIPTION).type("This is the New Brand Manager");

    }

    JobNote(){

        cy.get(manageRoleLocators.JOBNOTE).type("From now he/she is the Brand Manager")
    }

    ClickSaveButton(){

        cy.get(manageRoleLocators.SAVEBUTTON).click();
    }



}
export default ManageRoleFunctions;
