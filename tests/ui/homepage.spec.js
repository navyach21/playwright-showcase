

const {test,expect}=require('@playwright/test')
const{HomePage }=require('../../pages/HomePage')

test("Homepage sucessfully loaded",async({page})=>{
    const home=new HomePage(page);
    await home.goto();
    await(expect(page).toHaveTitle(/Automation Exercise/));
    });