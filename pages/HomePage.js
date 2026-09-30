
class HomePage
{
    constructor(page)
{
    this.page=page;

}
async goto (){
    await this.page.goto('/');
}
}
module.exports={HomePage};