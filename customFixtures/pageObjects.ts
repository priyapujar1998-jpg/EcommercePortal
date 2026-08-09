import { test as base , Page} from "@playwright/test";
import { LoginPage } from "../POMDesign/LoginPage";
import {RegisterPage} from "../POMDesign/RegisterPage";
import {DashboardPage} from "../POMDesign/DashboardPage";

type MyFixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    dashboardPage : async ({page},use) =>{
        await use(new DashboardPage(page));
    }
});


export { expect } from "@playwright/test";