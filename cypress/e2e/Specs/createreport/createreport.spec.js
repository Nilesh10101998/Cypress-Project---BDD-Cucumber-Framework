import CreateReportFunctions from "../../Pages/Createreport.page";

const createReportFunctions = new CreateReportFunctions();


Given('The User is navigate to the Reports and Analytics page', ()=>{

 createReportFunctions.NavigateLoginPage();
 createReportFunctions.TypeUsername();
 createReportFunctions.TypePassword();
 createReportFunctions.ClickLoginButton();
 createReportFunctions.NavigateToReportPage();

})

When('The User create a new test report', ()=>{

 createReportFunctions.ClickReportButton();
 createReportFunctions.SelectFolder();
 createReportFunctions.SelectPerformance();
 createReportFunctions.ClickLoginButton();
 createReportFunctions.ReportName();
 createReportFunctions.ClickSeconNextButton();
 createReportFunctions.EmployeeName();
 createReportFunctions.SelectAge();
 createReportFunctions.SelectEmployment();
 createReportFunctions.SelectEmployeeStatus();
 createReportFunctions.SelectNewEmployeeStatus();
 createReportFunctions.ClickThirdNextButton();
 createReportFunctions.ClickDisplayField();
 createReportFunctions.SelectDisplayField();
 createReportFunctions.SelectEmployeeId();
 createReportFunctions.SelectNationality();
 createReportFunctions.ClickSaveButton();

})

Then('The test report created successfully', ()=>{

createReportFunctions.ClickBackButton();
createReportFunctions.SearchNewReport();

})