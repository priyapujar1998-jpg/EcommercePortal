import {request} from "playwright/test";

export async function getLoginToken(userEmail:string, userPassword:string){
    const apiContext=request.newContext();
    const response = (await apiContext).post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: {
            userEmail: "priyapujar1998@gmail.com",
            userPassword: "Test@123"
        }
    })
    const responseBody = await (await response).json();
    const token = responseBody.token;
    return token;
}