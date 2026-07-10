import { test as base } from "@playwright/test";
import { LoginPage } from "../POMDesign/LoginPage";
import {RegisterPage} from "../POMDesign/RegisterPage";

type MyFixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    }
});


export { expect } from "@playwright/test";