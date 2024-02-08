import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPageFunctions from "../../Pages/Login.page";

const loginPageFunctions  = new LoginPageFunctions();
Given('The User navigate to the login page', ()=>{
     loginPageFunctions.NavigateLoginPage();
})

When('The User enters valid username and password', ()=>{
   loginPageFunctions.TypeUsername();
   loginPageFunctions.TypePassword();  
   loginPageFunctions.ClickLoginButton(); 
})

Then('The User logged in successfully {string}', pageTitle=>
{
  cy.get('div[ng-if="!ohrmnavbar.isClickableTitle($index)"]').invoke('text').then((text1) => 
  {
     expect(text1.trim()).to.equal(pageTitle)   //Comparing two variables //Trim function will help to remove the space between the text
   
   })


 })

