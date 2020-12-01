"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MBO_LoginPage = void 0;
const protractor_1 = require("protractor");
class MBO_LoginPage {
    constructor() {
        this.talent_Login_page_mbo_Partners_Logo = protractor_1.element(protractor_1.by.xpath("//*[@id='headerLogoImage']"));
        this.talent_Login_page_email_Address = protractor_1.element(protractor_1.by.xpath("//*[@id='username']"));
        this.talent_Login_page_password = protractor_1.element(protractor_1.by.xpath("//*[@id='password']"));
        this.talent_Login_page_login_Button = protractor_1.element(protractor_1.by.xpath("//*[@id='loginButton']"));
        this.talent_Login_page_forgot_Password = protractor_1.element(protractor_1.by.xpath("//*[@id='forgotPasswordButton']"));
        this.talent_Login_page_loginPage_Header = protractor_1.element(protractor_1.by.xpath("//*[@id='loginPageHeader']"));
        this.talent_login_page_Invalidcredentials_Message = protractor_1.element(protractor_1.by.xpath("//*[@id='feedbackText']"));
        this.talent_login_page_spinner_image = protractor_1.element(protractor_1.by.xpath("//*[@id='preloadingAppLogoContainer']//following::img[@id='preloadingAppLogo' and @class='loading__spinner']"));
    }
}
exports.MBO_LoginPage = MBO_LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTUJPX0xvZ2luUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL01CT19Mb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsYUFBYTtJQVl0QjtRQUNJLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQywrQkFBK0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQywwQkFBMEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyw0Q0FBNEMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQywrQkFBK0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEdBQThHLENBQUMsQ0FBQyxDQUFDO0lBQzdLLENBQUM7Q0FDSjtBQXRCRCxzQ0FzQkMifQ==