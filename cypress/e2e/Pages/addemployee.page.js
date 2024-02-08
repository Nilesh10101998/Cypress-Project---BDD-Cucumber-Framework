import AddEmployeeLocators from "../Locators/addemployee.locators";

///   <reference types = "Cypress"/>

const addEmployeeLocators = new AddEmployeeLocators();

class AddEmployeeFunctions{

    NavigateLoginPage(){

        cy.visit('https://nileshkasane123-trials711.orangehrmlive.com/auth/login')
         cy.url().should('include','nileshkasane')
    }

    TypeUsername(){

        cy.get(addEmployeeLocators.USERNAME).type('Admin');
    }

    TypePassword(){

        cy.get(addEmployeeLocators.PASSWORD).type('aQB6R5Tkj@');
    }
    
    ClickLoginButton(){

        cy.get(addEmployeeLocators.LOGINBUTTON).click();

    }

    AddEmployeeListPage(){

        cy.xpath(addEmployeeLocators.EMPLOYEELIST).click();

    }

    AddEmployeeButton(){

        cy.get(addEmployeeLocators.ADDEMPLOYEEBUTTON).click();

    }

    EmployeeFirstName(){

        cy.get(addEmployeeLocators.FIRSTNAME).type("Ranchhoddas");

    }

    EmployeeMiddleName(){

        cy.get(addEmployeeLocators.MIDDLENAME).type("Shamaldas");

    }

    EmployeeLastName(){

        cy.get(addEmployeeLocators.LASTNAME).type("Chanchad",{force: true});

    }

    ClickCalender(){

        cy.get(addEmployeeLocators.CALENDER).click();

    }

    SelectDate(){

        cy.xpath(addEmployeeLocators.SELECTDATE).click();

    }

    ClickLocationDropdown(){

        cy.xpath(addEmployeeLocators.LOCATIONDROPDOWN).click();

    }

    SelectLocation(){

        cy.get(addEmployeeLocators.SELECTLOCATION).click();

    }

    ClickNextButton(){

        cy.get(addEmployeeLocators.NEXTBUTTON).click();

    }

    TypeOtherId(){

        cy.get(addEmployeeLocators.OTHERID).type("123456789");

    }

    TypeSsn(){

        cy.get(addEmployeeLocators.SSNNUMBER).type("9881228372", {force: true});

    }

    BirthDate(){

        cy.get(addEmployeeLocators.BIRTHDATE).type("1998/10/10");

    }

    MaritalDropdown(){

        cy.get(addEmployeeLocators.MARITALDROPDOWN).click();

    }

    SelectMaritalStatus(){

        cy.get(addEmployeeLocators.SELECTMARITALSTATUS).each(($el, index, $list) => {

            if($el.text()==="Single")
            {
              cy.wrap($el).click()

            }


        })

    }

    GenderDropdown(){

        cy.get(addEmployeeLocators.GENDERDROPDOWN).click();

    }

    SelectGender(){

        cy.get(addEmployeeLocators.SELECTMARITALSTATUS).each(($el, index, $list) => {

            if($el.text()==="Male")
            {
              cy.wrap($el).click()

            }


        })
    }

    NationalityDropdown(){

        cy.get(addEmployeeLocators.NATIONALITYDROPDOWN).click();

    }

    SelectNationality(){

        cy.get(addEmployeeLocators.SELECTNATIONALITY).each(($el, index, $list) => {

            if($el.text()==="Indian")
            {
              cy.wrap($el).click({force : true})

            }

        })
    }

    LicenseNumber(){

        cy.get(addEmployeeLocators.LICENSENUMBER).type("MH20-8669");

    }

    LicenseExpiryDate(){

        cy.get(addEmployeeLocators.LICENSEDATE).type("2026-10-10", {force:true});

    }

    SecondNextButton(){

        cy.xpath(addEmployeeLocators.SECONDNEXTBUTTON).click();

    }



     

}
export default AddEmployeeFunctions;