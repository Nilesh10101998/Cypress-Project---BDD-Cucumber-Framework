//import { Given } from "@badeball/cypress-cucumber-preprocessor";

import EditJobTitlesFunctions from "../../Pages/editjobtitles.page";

const editJobTitlesFunctions = new EditJobTitlesFunctions();

Given('The User is navigate to the Manage Job Titles page', ()=> {

 editJobTitlesFunctions.NavigateLoginPage();
 editJobTitlesFunctions.TypeUsername();
 editJobTitlesFunctions.TypePassword();
 editJobTitlesFunctions.ClickLoginButton();
 editJobTitlesFunctions.NavigateToHrAdministrationPage();
 editJobTitlesFunctions.JobDropdown();
 editJobTitlesFunctions.ManageJobtitles();

})

When('The User is edit the Job Titles', ()=>{

 editJobTitlesFunctions.EditJobTitles();
 editJobTitlesFunctions.EditJobDescription();
 editJobTitlesFunctions.EditNote();

})

Then('Job Titles updated successfully', ()=> {

 editJobTitlesFunctions.ClickSaveButton();

})

