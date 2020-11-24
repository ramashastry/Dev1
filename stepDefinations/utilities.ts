import { browser, protractor } from "protractor";
import { MBO_LoginPage } from "../pageObjects/MBO_LoginPage";
import { MBO_TalentHomePage } from "../pageObjects/MBO_TalentHomePage";
const  mboTalentHomePage = new MBO_TalentHomePage;
const  mboLoginPage = new MBO_LoginPage;
const until = protractor.ExpectedConditions;

export class Utility{

    async waitForInvisibilityOfSpinner(){

        await browser.wait(until.invisibilityOf(mboTalentHomePage.talent_Home_Page_Spinner));
    }

    async waitForInvisibilityOfLoginPageSpinner(){

        await browser.wait(until.visibilityOf(mboLoginPage.talent_login_page_spinner_image));
    }


}