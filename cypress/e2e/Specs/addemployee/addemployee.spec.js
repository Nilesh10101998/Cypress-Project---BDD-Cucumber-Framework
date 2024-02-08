//import { When } from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeeFunctions from "../../Pages/addemployee.page";

const addEmployeeFunctions = new AddEmployeeFunctions();

Given ('The User is navigate to the Login and Employee management page', ()=> {

 addEmployeeFunctions.NavigateLoginPage();
 addEmployeeFunctions.TypeUsername();
 addEmployeeFunctions.TypePassword();
 addEmployeeFunctions.ClickLoginButton();
 addEmployeeFunctions.AddEmployeeListPage();
 addEmployeeFunctions.AddEmployeeButton();
 
}) 

When('The User is adding a new employee to the Employee list', ()=> {

 addEmployeeFunctions.EmployeeFirstName();
 addEmployeeFunctions.EmployeeMiddleName();
 addEmployeeFunctions.EmployeeLastName();
 addEmployeeFunctions.ClickCalender();
 addEmployeeFunctions.SelectDate();
 addEmployeeFunctions.ClickLocationDropdown();
 addEmployeeFunctions.SelectLocation();
 addEmployeeFunctions.ClickNextButton();
 addEmployeeFunctions.TypeOtherId();
 addEmployeeFunctions.TypeSsn();
 addEmployeeFunctions.BirthDate();
 addEmployeeFunctions.MaritalDropdown();
 addEmployeeFunctions.SelectMaritalStatus();
 addEmployeeFunctions.GenderDropdown();
 addEmployeeFunctions.SelectGender();
 addEmployeeFunctions.GenderDropdown();
 addEmployeeFunctions.SelectNationality();
 addEmployeeFunctions.LicenseNumber();
 addEmployeeFunctions.LicenseExpiryDate();
 addEmployeeFunctions.SecondNextButton();


})