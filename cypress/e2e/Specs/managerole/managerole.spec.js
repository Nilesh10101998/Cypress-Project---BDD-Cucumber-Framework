// import { Given } from "@badeball/cypress-cucumber-preprocessor";
import ManageRoleFunctions from "../../Pages/managerole.page";

const manageRoleFunctions = new ManageRoleFunctions();


Given('The User is navigate to the HR Administration page and Job Page', ()=>{

 manageRoleFunctions.NavigateLoginPage();
 manageRoleFunctions.TypeUsername();
 manageRoleFunctions.TypePassword();
 manageRoleFunctions.ClickLoginButton();
 manageRoleFunctions.NavigateToHrAdministrationpage();


})

When('The user is edit the user roles', ()=>{

 manageRoleFunctions.SelectJob();
 manageRoleFunctions.SelectJobTitle();
 manageRoleFunctions.EditJobTitle();
 manageRoleFunctions.JobTitle();
 manageRoleFunctions.JobDescription();
 manageRoleFunctions.JobNote();
 

})

Then('The User role is updated successfully', ()=>{

manageRoleFunctions.ClickSaveButton();

})