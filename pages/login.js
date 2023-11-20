exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.emailField = page.getByLabel('البريد الإلكتروني')
        this.passField = page.getByLabel('كلمة السر')
        this.loginBtn = page.getByRole('button', {name: 'تسجيل الدخول'})
    }

    async gotoLogin(){
        await this.page.goto('https://alhadeeth.net/')
    }

    async Login(username, pass){
        await this.emailField.fill(username)
        await this.passField.fill(pass)
        await this.loginBtn.click()
    }
}