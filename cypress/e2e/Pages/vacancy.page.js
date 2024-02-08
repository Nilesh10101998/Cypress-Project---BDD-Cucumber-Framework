import VacancyPageLocators from "../Locators/vacancy.locators";
/// <reference types= "Cypress"/>

const vacancyPageLocators = new VacancyPageLocators();

class VacancyPageFunctions {

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(vacancyPageLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(vacancyPageLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(vacancyPageLocators.LOGINBUTTON).click();
    }

    NavigateToRecruitmentPage(){

        cy.get(vacancyPageLocators.RECRUITMENTPAGE).click();
    }

    NavigateToVacancyPage(){

        cy.get(vacancyPageLocators.VACANCYPAGE).click();

    }

    AddNewVacancy(){

        cy.get(vacancyPageLocators.ADDVACANCY).click();
    }

    AddVacancyName(){

        cy.get(vacancyPageLocators.VACANCYNAME).type("Software Test Engineer");
    }

    JobTitle(){

        cy.xpath(vacancyPageLocators.JOBTITLE).click();
    }

    SelectJobTitle(){

        cy.get(vacancyPageLocators.SELECTJOBTITLE).each(($el, index, $list) => {

          if($el.text()==="QA Engineer")
          {
            cy.wrap($el).click()

          }
    

        })
    
    }

    ClickLocation(){

        cy.xpath(vacancyPageLocators.LOCATION).click();
    }

    SelectLocation(){

        cy.get(vacancyPageLocators.SELECTLOCATION).each(($el, index, $list) => {

         if($el.text()==="Pune Office")
         {
           cy.wrap($el).click()

         }
         
        })

        
    }

    SubUnit(){

        cy.xpath(vacancyPageLocators.SUBUNIT).click();
    }

    SelectSubUnit(){

        cy.get(vacancyPageLocators.SELECTSUBUNIT).each(($el, index, $list) => {

         if($el.text()==="Quality assurance (QA)")
         {
           cy.wrap($el).click()

          }

        })

    }

    HiringManager(){

        cy.get(vacancyPageLocators.MANAGER).type("Tanya Arva");
    }

    SelectHiringManager(){

        cy.get(vacancyPageLocators.SELECTMANAGER).click();

    }

    VerifyManager(){

        cy.get(vacancyPageLocators.VERIFYMANAGER).should('have.text','Tanya Arva')

    }

    NewManager(){

        cy.get(vacancyPageLocators.NEWMANAGER).type("Peter Anderson")

    }

    SelectNewManager(){

        cy.get(vacancyPageLocators.SELECTNEWMANAGER).click();

    }

    NumberofPositions(){

        cy.get(vacancyPageLocators.ALLPOSITIONS).type("5");
    }

    ToggleOn(){

        cy.get(vacancyPageLocators.TOGGLEON).click();

    }

    ClickSaveButton(){

        cy.get(vacancyPageLocators.SAVEBUTTON).click();
    }



}
export default VacancyPageFunctions;