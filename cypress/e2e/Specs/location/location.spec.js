// import { Given } from "@badeball/cypress-cucumber-preprocessor";
import LocationPageFunctions from "../../Pages/Location.page";

const locationPageFunctions = new LocationPageFunctions();

Given('The User is navigate to the login page and Organization page', ()=>{

  locationPageFunctions.NavigateLoginPage();
  locationPageFunctions.TypeUsername();
  locationPageFunctions.TypePassword();
  locationPageFunctions.ClickLoginButton();
  locationPageFunctions.NavigateToHrAdministrationPage();
  locationPageFunctions.NavigateToOrganizationPage();
  
})

When('The User edit the location of the Organization', ()=>{

  locationPageFunctions.LocationsPage();
  locationPageFunctions.ClickEditButton();
  locationPageFunctions.LocationName();
  locationPageFunctions.CountryDropdown();
  locationPageFunctions.SelectCountry();
  locationPageFunctions.TimeZone();
  locationPageFunctions.SelectTimeZone();
  locationPageFunctions.SelectState();
  locationPageFunctions.SelectCity();
  locationPageFunctions.EnterPinCode();
  locationPageFunctions.EnterContactNumber();
  locationPageFunctions.FaxContact();
  locationPageFunctions.EnterAddress();
  locationPageFunctions.ImpNotes();
  //locationPageFunctions.ClickSaveButton();

})

Then('The Organization location changed successfully', ()=>{

 locationPageFunctions.ClickSaveButton();
 
})