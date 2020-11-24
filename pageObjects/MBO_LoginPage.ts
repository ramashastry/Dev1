import {by, element, ElementFinder } from "protractor";

export class MBO_LoginPage {
    talent_Login_page_mbo_Partners_Logo: ElementFinder;
    talent_Login_page_email_Address: ElementFinder;
    talent_Login_page_password: ElementFinder;
    talent_Login_page_login_Button: ElementFinder;
    talent_Login_page_forgot_Password: ElementFinder;
    talent_Login_page_loginPage_Header: ElementFinder;
    talent_login_page_Invalidcredentials_Message: ElementFinder;
    talent_login_page_spinner_image: ElementFinder;



    constructor() { 
        this.talent_Login_page_mbo_Partners_Logo = element(by.xpath("//*[@id='headerLogoImage']"));
        this.talent_Login_page_email_Address = element(by.xpath("//*[@id='username']"));
        this.talent_Login_page_password = element(by.xpath("//*[@id='password']"));
        this.talent_Login_page_login_Button = element(by.xpath("//*[@id='loginButton']"));
        this.talent_Login_page_forgot_Password = element(by.xpath("//*[@id='forgotPasswordButton']"));
        this.talent_Login_page_loginPage_Header = element(by.xpath("//*[@id='loginPageHeader']"));
        this.talent_login_page_Invalidcredentials_Message= element(by.xpath("//*[@id='feedbackText']"));
        this.talent_login_page_spinner_image= element(by.xpath("//*[@id='preloadingAppLogoContainer']//following::img[@id='preloadingAppLogo' and @class='loading__spinner']"));
    }
}