
class LoginPage{
  constructor(page)
  {
    this.page=page;
    this.loginEmailInput=page.locator("[data-qa='login-email']");
    this.loginPasswordInput=page.locator("[data-qa='login-password']");
    this.loginSubmitButton=page.locator("[data-qa='login-button']");
  }
  async goto()
  {
    await this.page.goto('/login');
  }
  async login(email,password)
  {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginSubmitButton.click();

  }

}
module.exports={LoginPage};