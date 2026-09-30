const {test,expect}=require('@playwright/test')
const{LoginPage }=require('../../pages/LoginPage')

test("Login to page sucessfully",async({page})=>
{
const login=new LoginPage(page);
await login.goto();
await login.login('navyach21@gmail.com','Navya@21');
});
