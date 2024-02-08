import CreateReportLocators from "../Locators/createreport.locators";
/// <reference types="Cypress" />  


const createReportLocators = new CreateReportLocators();

class CreateReportFunctions{

    NavigateLoginPage(){
        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(createReportLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(createReportLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(createReportLocators.LOGINBUTTON).click();
    }
    NavigateToReportPage(){

        cy.contains("Reports and Analytics").click();
    }
    ClickReportButton(){

        cy.xpath(createReportLocators.REPORTBUTTON).click();
    }
    
    SelectFolder(){

        cy.xpath(createReportLocators.SELECTFOLDER).click();
    }

    SelectPerformance(){

        cy.xpath(createReportLocators.SELECTPERFORMANCE).click();
    }

    ClickNextButton(){

        cy.xpath(createReportLocators.NEXTBUTTON).click();
    }

    ReportName(){
        cy.get(createReportLocators.REPORTNAME).type("My Test Report 6")
    }

    ClickSeconNextButton(){

        cy.xpath(createReportLocators.SECONDNEXTBUTTON).click();
    }

    EmployeeName(){

        cy.xpath(createReportLocators.EMPLOYEENAME).click();
    }

    SelectAge(){

        cy.xpath(createReportLocators.AGE).click();
    }
 
    SelectEmployment(){

        cy.xpath(createReportLocators.EMPLOYMENT).click();
    }

    SelectEmployeeStatus(){

        cy.xpath(createReportLocators.EMPLOYEESTATUS).click();
    }

    SelectNewEmployeeStatus(){

        cy.xpath(createReportLocators.SELECTEMPLOYEESTATUS).click({force: true});
    }

    ClickThirdNextButton(){

        cy.xpath(createReportLocators.THIRDNEXTBUTTON).click();
    }

    ClickDisplayField(){

        cy.get(createReportLocators.DISPLAYFIELD).click();
    }

    SelectDisplayField(){

        cy.xpath(createReportLocators.SELECTDISPLAYFIELD).click();
    }

    SelectEmployeeId(){

        cy.get(createReportLocators.SELECTEMPLOYEEID).click();
    }

    SelectNationality(){

        cy.get(createReportLocators.NATIONALITY).click();
    }

    ClickSaveButton(){

        cy.get(createReportLocators.SAVEBUTTON).click();
    }

    ClickBackButton(){

        cy.get(createReportLocators.BACKBUTTON).click();
    }

    SearchNewReport(){

        cy.xpath(createReportLocators.SEARCHREPORT).type("My Test Report 6")
    }

}
export default CreateReportFunctions;