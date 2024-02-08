import LoginPageLocators from "../Locators/loginpage.locators";

const loginPageLocators = new LoginPageLocators();

class LoginPageFunctions{
    NavigateLoginPage(){
        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }
    TypeUsername(){
        cy.get(loginPageLocators.USERNAME).type('Admin')
    }

    TypePassword(){
        cy.get(loginPageLocators.PASSWORD).type('aQB6R5Tkj@')
    }
    
    ClickLoginButton(){
        cy.get(loginPageLocators.LOGINBUTTON).click()
    }

    
}
export default LoginPageFunctions;