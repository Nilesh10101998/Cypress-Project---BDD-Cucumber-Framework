
// import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import EditUserFunctions from "../../Pages/edituser.page";

const editUserFunctions = new EditUserFunctions();

Given('The User navigate to the HR Administration page', ()=>{

editUserFunctions.NavigateLoginPage();
editUserFunctions.TypeUsername();
editUserFunctions.TypePassword();
editUserFunctions.ClickLoginButton();
editUserFunctions.NavigateHrAdministration();

})

When('The User click on the edit button', ()=>{

editUserFunctions.ClickEditButton();
editUserFunctions.EditUserName('zcvzcvdf');
editUserFunctions.ClickEditAdminRole();
editUserFunctions.SelectRole();

})

Then('The User will able to edit the existing user', ()=>{

editUserFunctions.SelectStatus();
editUserFunctions.ClickSaveButton();

})