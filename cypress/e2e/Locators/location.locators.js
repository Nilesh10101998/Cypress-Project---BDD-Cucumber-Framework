
class LocationPageLocators{

 USERNAME = "#txtUsername"
 PASSWORD = "#txtPassword"
 LOGINBUTTON = "button[type='submit']"
 HRADMINISTRATIONPAGE = "#left_menu_item_10  .main-menu-item-1 span"
 ORGANIZATIONPAGE = "//a[@class='top-level-menu-item '][contains(text(),'Organization ')]"
 LOCATIONS = "a[ui-sref='admin.locations']"
 EDITBUTTON = ":nth-child(1) > .edit_item > .material-icons"
 LOCATIONNAME = "#name"
 COUNTRYDROPDOWN = "#countryCode_inputfileddiv > .select-wrapper"
 SELECTCOUNTRY =  "div[class='select-wrapper initialized']> ul>li>span"
 TIMEZONE =   "#time_zone_inputfileddiv > .select-wrapper"
 SELECTTIMEZONE = "#time_zone_inputfileddiv>.select-wrapper>ul>li>span"
 STATE = "#province"
 CITY = "#city"
 PINCODE = "#zipCode"
 CONTACTNUMBER = "#phone"
 FAX = "#fax"
 ADDRESS = "#address"
 NOTES = "#notes"
 SAVEBUTTON = "a[form-name='locationsModalForm']"
 

}
export default LocationPageLocators;
