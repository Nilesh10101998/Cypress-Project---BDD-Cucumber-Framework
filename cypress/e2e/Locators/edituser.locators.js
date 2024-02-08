
class EditUserLocators{

    USERNAME = "#txtUsername"
    PASSWORD = "#txtPassword"
    LOGINBUTTON = 'button[type="submit"]'
    EDITBUTTON =  "//span[contains(text(),'abrahammaize123')]//following::i[1]"
    EDITUSERNAME = "#user_name"
    EDITADMINROLE = "//label[@for='adminrole']//following::div[@class='input-group-append']//i[@class='material-icons']"
    SELECTROLE = "//ul[@class='dropdown-menu inner show']//span[contains(text(),'Regional HR Admin')]"
    SELECTSTATUS = "//div[@class='radio-display-horizontal']//label[contains(text(),'Disabled')]"
    SAVEBUTTON = "#modal-save-button"

} 
export default EditUserLocators;