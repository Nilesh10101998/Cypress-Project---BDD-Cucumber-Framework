
class AddEmployeeLocators{

    USERNAME = "#txtUsername"
    PASSWORD = "#txtPassword"
    LOGINBUTTON = "button[type='submit']"
    EMPLOYEELIST = "//a[@class='top-level-menu-item'][contains(text(),'Employee List ')]"
    ADDEMPLOYEEBUTTON ="#addEmployeeButton"
    FIRSTNAME = "#first-name-box"
    MIDDLENAME = "#middle-name-box"
    LASTNAME = "#last-name-box"
    CALENDER = ".col-4> .input-group > .input-group-append-container > .input-group-append> .btn > .material-icons"
    SELECTDATE = "//div[@class='picker__day picker__day--infocus'][contains(text(),'20')]"
    LOCATIONDROPDOWN = "//button[@class='btn']"
    SELECTLOCATION = "#bs-select-1-9"
    NEXTBUTTON = "#modal-save-button"
    OTHERID = "#otherId"
    SSNNUMBER = "#ssn"
    BIRTHDATE = '[form="schemaForm.form[3]"] > .schema-form-section > [style=""] > .input-field > label'
    MARITALDROPDOWN = "#emp_marital_status_inputfileddiv>.select-wrapper > input.select-dropdown"
    SELECTMARITALSTATUS = "div[class='select-wrapper initialized']> ul>li>span"
    GENDERDROPDOWN = "#emp_gender_inputfileddiv > .select-wrapper > input.select-dropdown"
    NATIONALITYDROPDOWN = "#nation_code_inputfileddiv> .select-wrapper > input.select-dropdown"
    SELECTNATIONALITY = "div[class='select-wrapper initialized'] > ul>li>span"
    LICENSENUMBER = "label[for='licenseNo']"
    LICENSEDATE = "#emp_dri_lice_exp_date"
    SECONDNEXTBUTTON = "//button[@ng-class='{disabled: !vm.canSubmitForm}'][contains(text(),'Next')]"



}
export default AddEmployeeLocators;