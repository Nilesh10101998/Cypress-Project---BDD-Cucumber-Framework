import EditUserLocators from "../Locators/edituser.locators";


const editUserLocators = new EditUserLocators();


class EditUserFunctions{

    NavigateLoginPage(){
        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }
    TypeUsername(){

        cy.get(editUserLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(editUserLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(editUserLocators.LOGINBUTTON).click();
    }
    NavigateHrAdministration(){

        cy.contains('HR Administration').click();
        cy.wait(15000)
    }
    ClickEditButton(){

        cy.xpath(editUserLocators.EDITBUTTON).click();
    }
    EditUserName(editedName){

        cy.get(editUserLocators.EDITUSERNAME).clear().type(editedName);
    
    }
    ClickEditAdminRole(){
        
        cy.xpath(editUserLocators.EDITADMINROLE).click();
    }
    SelectRole(){

      cy.xpath(editUserLocators.SELECTROLE).click();

    } 
    SelectStatus(){
        cy.xpath(editUserLocators.SELECTSTATUS).click();
    }
    
    ClickSaveButton(){
        cy.get(editUserLocators.SAVEBUTTON).click();
    }

    
       
    
    



}
export default EditUserFunctions;