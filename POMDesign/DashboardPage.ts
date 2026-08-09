import {Page, Locator} from "@playwright/test";

export class DashboardPage{

    page :Page;
    itemOptions : Locator;
    viewButton : Locator;

    constructor(page : Page){
        this.page=page;
        this.itemOptions=this.page.locator('button:has-text("Add To Cart")');
        this.viewButton=page.getByRole('button',{name :' View'});

    }

    async addToCartItem(itemName : string){
        await this.page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
        const itemCount = await this.itemOptions.count();
        for (let i = 0; i < itemCount; i++) {
            const text = await this.itemOptions.nth(i).textContent();
            if (text && text.includes("itemName")) {
                await this.itemOptions.nth(i).click();
            }
        }
        
    }





}