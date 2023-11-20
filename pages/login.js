const { expect } = require("@playwright/test")

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.emailField = page.getByLabel('البريد الإلكتروني')
        this.passField = page.getByLabel('كلمة السر')
        this.loginBtn = page.getByRole('button', {name: 'تسجيل الدخول'})
        this.welcome = page.getByRole('heading', { name: 'أهلا بكم في المنصة الحديثية' });
        this.errorEmailMessage = page.getByText('اسم المستخدم أو كلمة المرور غير صحيحة');
    }

    async gotoLogin(){
        await this.page.goto('https://alhadeeth.net/')
    }

    async Login(username, pass){
        await this.emailField.fill(username)
        await this.passField.fill(pass)
        await this.loginBtn.click()
    }
    async VerifyWelcomeMessage(){
        expect(this.welcome).toBeTruthy();
    }
    async VerifyWrongEmailError(){
        //await page.waitForLoadState('domcontentloaded');
        expect(this.errorEmailMessage).toContainText('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
}