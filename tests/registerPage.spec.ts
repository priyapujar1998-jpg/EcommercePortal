import {test, expect} from '../customFixtures/pageObjects';
import {readExcelData} from "../Utils/excelUtils";
import path from 'path';
const filePath = path.resolve(__dirname, '../testData/register.xlsx');
console.log('Resolved file path:', filePath);


type RegisterData = {
    //genderMaleRadioButton: any;
    firstname: string;
    lastname: string;
    emailD: string;
    phoneNumber: number;
    occupation: string;
    gender: string;
    password: string;
    confirmPassword: string;
};

for(const data of readExcelData('Sheet1','testData/register.xlsx') as RegisterData[]){
    test('Register user', async({page, registerPage})=>{

    await registerPage.gotoRegisterPage();
    await registerPage.firstNameField.fill(data.firstname);
    await registerPage.lastNameField.fill(data.lastname);
    await registerPage.emailIDField.fill(data.emailD);
    await registerPage.phoneNumberField.fill(data.phoneNumber.toString());
    await registerPage.occupationDropdownField.selectOption(data.occupation);
    if (data.gender === 'Male') {
        await registerPage.genderMaleRadioButton.check();
    } else {
        await registerPage.genderFemaleRadioButton.check();
    }
    await registerPage.passwordField.fill(data.password);
    await registerPage.confirmPasswordField.fill(data.confirmPassword);
    await registerPage.iAm18YearsOrOlderCheckbox.check();
    await registerPage.registerButton.click();
})
}
