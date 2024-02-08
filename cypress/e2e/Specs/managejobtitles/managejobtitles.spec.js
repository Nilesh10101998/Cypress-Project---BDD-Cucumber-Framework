//import { Given } from "@badeball/cypress-cucumber-preprocessor";
import ManageJobTitlesFunctions from "../../Pages/managejobtitles.page";

const manageJobTitlesFunctions = new ManageJobTitlesFunctions();

Given('The User is navigate to the Manage Job Titles page', ()=>{

    manageJobTitlesFunctions.NavigateLoginPage();
    manageJobTitlesFunctions.TypeUsername();
    manageJobTitlesFunctions.TypePassword();
    manageJobTitlesFunctions.ClickLoginButton();
    manageJobTitlesFunctions.NavigateToHrAdministrationPage();
    manageJobTitlesFunctions.JobDropdown();
    manageJobTitlesFunctions.ManageJobtitles();

})

When('The User is add the Job Titles', ()=> {

  manageJobTitlesFunctions.AddJobTitle();
  manageJobTitlesFunctions.JobTitleName();
  manageJobTitlesFunctions.JobDescription();
  manageJobTitlesFunctions.JobNote();
  //manageJobTitlesFunctions.ClickSaveButton();


})

Then('Job Titles added successfully', ()=>{

  manageJobTitlesFunctions.ClickSaveButton();

})

