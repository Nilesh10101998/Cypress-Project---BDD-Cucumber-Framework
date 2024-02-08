
class CreateReportLocators{

    USERNAME = "#txtUsername"
    PASSWORD = "#txtPassword"
    LOGINBUTTON = 'button[type="submit"]'
    REPORTBUTTON = '//i[@class="oxd-svg-icon oxd-svg-icon--medium oxd-button-icon"]'
    SELECTFOLDER = '//div[@class="oxd-select-wrapper"]//div[@class="oxd-select-text-input"]//div[contains(text(),"Employee Management")]'
    SELECTPERFORMANCE = "//div[@class='oxd-select-option']//span[contains(text(),'Performance')]"
    NEXTBUTTON = "//button[@type='submit']"
    REPORTNAME = "#pimDefineReportName"
    SECONDNEXTBUTTON = "//button[@class='btn waves-effect waves-light right']"
    EMPLOYEENAME = "//label[@for='selectedFilters_employee_name_withgroup']"
    AGE = "//label[@for='selectedFilters_age_group_withgroup']"
    EMPLOYMENT = "//label[@for='selectedFilters_employment_status_withgroup']"
    EMPLOYEESTATUS = "//input[@class='select-dropdown']"
    SELECTEMPLOYEESTATUS = "//option[@ng-repeat='choice in filter.sortedChoices'][contains(text(),'Current Employees Only')]"
    THIRDNEXTBUTTON = "//button[@type='button'][contains(text(),'Next')]"
    DISPLAYFIELD = "#display-group-dropdown-trigger"
    SELECTDISPLAYFIELD = "//a[@ng-click='vm.toggleSelectedDisplayGroup(displayGroupId, true)'][contains(text(),'Personal')]"
    SELECTEMPLOYEEID = "label[for='selectedDisplayFields_9']"
    NATIONALITY = "label[for='selectedDisplayFields_14']"
    SAVEBUTTON = "button[class='btn waves-effect waves-light']"
    BACKBUTTON = "//a[@ng-if='vm.forcedBackButton.uiSref']"
    SEARCHREPORT = "//div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--active']//input[@placeholder='Search']"


}
export default CreateReportLocators;