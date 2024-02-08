
import EditJobTitlesLocators from "../Locators/editjobtitles.locators";

const editJobTitlesLocators = new EditJobTitlesLocators();

class EditJobTitlesFunctions{

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(editJobTitlesLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(editJobTitlesLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(editJobTitlesLocators.LOGINBUTTON).click();

    }

    NavigateToHrAdministrationPage(){

        cy.get(editJobTitlesLocators.HRADMINISTRATIONPAGE).click();

    }

    JobDropdown(){

       cy.get(editJobTitlesLocators.JOBDROPDOWN).click();

    }

    ManageJobtitles(){

        cy.xpath(editJobTitlesLocators.MANAGEJOBTITLES).click();

    }

    EditJobTitles(){

      cy.get(editJobTitlesLocators.EDITJOBTITLE).click();

    }

    EditJobDescription(){

     cy.get(editJobTitlesLocators.EDITJOBDESCRIPTION).clear().type("John Parker is our new Assistant Director for Digital Marketing");

    }

    EditNote(){

        cy.get(editJobTitlesLocators.EDITNOTE).clear().type("The Company has plan to increase budget for the Digital Marketing");

    }

    ClickSaveButton(){

      cy.get(editJobTitlesLocators.SAVEBUTTON).click();

    }



}
export default EditJobTitlesFunctions;