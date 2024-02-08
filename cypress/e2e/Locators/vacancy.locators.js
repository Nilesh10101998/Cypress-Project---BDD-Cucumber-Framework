
class VacancyPageLocators{

  USERNAME = "#txtUsername"
  PASSWORD = "#txtPassword"
  LOGINBUTTON = "button[type='submit']"
  RECRUITMENTPAGE = 'li#left_menu_item_15> .main-menu-item-1> span'
  VACANCYPAGE = "#top_level_menu_item_menu_item_194> .top-level-menu-item"
  ADDVACANCY  = ".oxd-button-label-wrapper"
  VACANCYNAME = "#addVacancyForm_vacancyName"
  JOBTITLE = "//div[@class='select-placeholder'][contains(text(),'Select Job Title...')]"
  SELECTJOBTITLE = ".oxd-select-option> span"
  LOCATION = "//div[@class='select-placeholder'][contains(text(),'Select Location...')]"
  SELECTLOCATION = ".oxd-select-option > span"
  SUBUNIT = "//div[@class='select-placeholder'][contains(text(),'Select Sub Unit...')]"
  SELECTSUBUNIT = ".oxd-select-option > span"
  MANAGER = "#addVacancyForm_hiringManager"
  SELECTMANAGER = ".oxd-autocomplete-option > span"
  VERIFYMANAGER = ":nth-child(1)> .oxd-autocomplete-chips-area> div>span"
  NEWMANAGER = "#addVacancyForm_hiringManager"
  SELECTNEWMANAGER = ".oxd-autocomplete-option > span"
  ALLPOSITIONS = "#addVacancyForm_numberOfPositions"
  TOGGLEON = ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-switch-wrapper > label > .oxd-switch-input"
  SAVEBUTTON = ".oxd-form-actions> .oxd-button--secondary> .oxd-button-label-wrapper"



}
export default VacancyPageLocators;