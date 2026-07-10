import { Page,Locator } from "playwright/test";



export class RegisterPage{

page:Page;
registerHereFeild:Locator;
registerLogo: Locator;
firstNameField:Locator;
lastNameField:Locator;
emailIDField:Locator;
phoneNumberField:Locator;
occupationDropdownField:Locator;
genderMaleRadioButton:Locator;
genderFemaleRadioButton:Locator;
passwordField:Locator;
confirmPasswordField:Locator;
iAm18YearsOrOlderCheckbox:Locator;
registerButton:Locator;


constructor(page : Page){
this.page = page;
this.registerHereFeild=this.page.getByText("Register here");
this.registerLogo=this.page.getByText("Register");
this.firstNameField=this.page.getByPlaceholder("First Name");
this.lastNameField=this.page.locator("#lastName");
this.emailIDField=this.page.getByPlaceholder("email@example.com");
this.phoneNumberField=this.page.locator("#userMobile");
this.occupationDropdownField=this.page.locator("select[formcontrolname='occupation']");
this.genderMaleRadioButton=this.page.locator("input[value='Male']");
this.genderFemaleRadioButton=this.page.locator("input[value='Female']");
this.passwordField=this.page.locator("#userPassword");
this.confirmPasswordField=this.page.locator("#confirmPassword");
this.iAm18YearsOrOlderCheckbox=this.page.locator("input[type='checkbox']");
this.registerButton=this.page.getByRole('button',{name:'Register'});

}

async gotoRegisterPage(){
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await this.registerHereFeild.click();
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/register")
}










}