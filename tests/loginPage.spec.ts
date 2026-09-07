
import { LoginPage}  from "../POMDesign/LoginPage";
import loginTestData from "../testData/loginTestData.json";
import {test, expect} from '../customFixtures/pageObjects';
import { getLoginToken } from "../Utils/apiUtils";


type LoginCredentials = {
    username: string;
    password: string;
    loginPage:LoginPage;
};

test.describe("Login page test with diff approach", () =>{

    test("Login with POM", async ({ page ,loginPage, browser}) => {
        const context=await browser.newContext();
        await loginPage.goto();
        await loginPage.validLogin("priyapujar1998@gmail.com","Test@123");
        context.storageState({
            path :"auth.json"
        });
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await expect(page).toHaveTitle("Let's Shop");
      
    });

    test("Login with JSON data", async({page,loginPage}) =>{
        await loginPage.goto();
        await loginPage.validLogin(loginTestData.loginCredentials.username,loginTestData.loginCredentials.password);
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await expect(page).toHaveTitle("Let's Shop");
    
    })

    test("login with API token", async({page, loginPage}) =>{
        const loginToken=await getLoginToken("priyapujar1998@gmail.com","Test@123");
        await page.addInitScript(value =>{
            window.localStorage.setItem('token',value);
        },
        loginToken);
        await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
        await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
 

    })
    



 });

test('file upload & download', async ({page})=>{
    await page.locator("input[type='file']").setInputFiles("filepath");
    //one more wrt waitforevent
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("#uploadBtn").click()
    ]);
    await fileChooser.setFiles("filepath");
    
    const [download] = await Promise.all([

        page.waitForEvent('download'),
        page.locator('#downloadBtn').click()

    ]);
    const fileName=download.suggestedFilename();
    await download.saveAs(`downloads/${fileName}`);
 
})

type objectFixture={
    loginPage:LoginPage;
}

test.extend<objectFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

interface logindata{
    userName:string,
    password:string
}

test.extend<logindata>(async({},use)=>{
    const loginData={
        username:"priyanka",
        password:"test@123"
    }
    await use(loginData);
})

enum roles{
    admin="admin",
    branch_manager="branch manager"
}

const adminRole:roles=roles.admin; 

test('dropdown validation', async({page})=>{
    const options=await page.locator('#options').allTextContents();

    await expect(options).toContain(['admin', 'branch manager', 'employees']);

    const dropdown = page.locator("#country");

await expect(dropdown).toContainText(["India", "Canada", "USA"]);
dropdown.filter({hasText:'India'})

})

test('network mocking',async({page})=>{
    page.route('api url', (route) =>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify({
                username:'priya'
            })
        })
    })
    page.route('**/api/users',(route)=>{
        route.abort();
    })
})

test('api testing', async({request})=>{
    request.post('api url',{
        headers:{
            'Authorization':'token',
            'content-Type':'application/json',
        },
        data:{
            username:'priyanka'
        }
    })

})
