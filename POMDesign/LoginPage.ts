import {Page,Locator} from "@playwright/test"
export class LoginPage{

    page:Page;
    userNameField:Locator;
    passwordField: Locator;
    loginButton:Locator;

    constructor(page : Page){
        this.page=page;
        this.userNameField=this.page.getByPlaceholder("email@example.com");
        this.passwordField=this.page.getByPlaceholder("enter your passsword");
        this.loginButton=this.page.getByRole("button",{name:"Login"});
    }
    

    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async validLogin(username : string, password : string){

        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}