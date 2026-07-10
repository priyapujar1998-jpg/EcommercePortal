import {Page,Locator} from "@playwright/test"
export class LoginPage{

    page:Page;

    constructor(page : Page){
        this.page=page;
    }
    


    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
}