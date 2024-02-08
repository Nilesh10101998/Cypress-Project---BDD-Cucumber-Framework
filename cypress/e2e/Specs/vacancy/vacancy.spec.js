
import VacancyPageFunctions from "../../Pages/vacancy.page";

const vacancyPageFunctions = new VacancyPageFunctions();

Given('The User is navigate to the login page and Recruitment page', ()=>{

  vacancyPageFunctions.NavigateLoginPage();
  vacancyPageFunctions.TypeUsername();
  vacancyPageFunctions.TypePassword();
  vacancyPageFunctions.ClickLoginButton();
  vacancyPageFunctions.NavigateToRecruitmentPage();


})

When('The user is adding new vacancies in the recruitment', ()=>{

  vacancyPageFunctions.NavigateToVacancyPage();
  vacancyPageFunctions.AddNewVacancy();
  vacancyPageFunctions.AddVacancyName();
  vacancyPageFunctions.JobTitle();
  vacancyPageFunctions.SelectJobTitle();
  vacancyPageFunctions.ClickLocation();
  vacancyPageFunctions.SelectLocation();
  vacancyPageFunctions.SubUnit();
  vacancyPageFunctions.SelectSubUnit();
  vacancyPageFunctions.HiringManager();
  vacancyPageFunctions.SelectHiringManager();
  vacancyPageFunctions.VerifyManager();
  vacancyPageFunctions.NewManager();
  vacancyPageFunctions.SelectNewManager();
  vacancyPageFunctions.NumberofPositions();

})

Then('The new vacancy is added successfully in the recruitment', ()=>{

 vacancyPageFunctions.ToggleOn();
 vacancyPageFunctions.ClickSaveButton();

})