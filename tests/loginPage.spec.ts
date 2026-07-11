
import { LoginPage}  from "../POMDesign/LoginPage";
import loginTestData from "../testData/loginTestData.json";
import {test, expect} from '../customFixtures/pageObjects';


type LoginCredentials = {
    username: string;
    password: string;
    loginPage:LoginPage;
};

test.describe("Login page test with diff approach", () =>{

    test("Login with POM", async ({ page ,loginPage}) => {
        await loginPage.goto();
        await loginPage.validLogin("priyapujar1998@gmail.com","Test@123");
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await expect(page).toHaveTitle("Let's Shop");
      
    });

    test("Login with JSON data", async({page,loginPage}) =>{
        await loginPage.goto();
        await loginPage.validLogin(loginTestData.loginCredentials.username,loginTestData.loginCredentials.password);
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await expect(page).toHaveTitle("Let's Shop");

    })



 });


   

