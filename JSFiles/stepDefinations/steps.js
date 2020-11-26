"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const MBO_LoginPage_1 = require("../pageObjects/MBO_LoginPage");
const MBO_TalentHomePage_1 = require("../pageObjects/MBO_TalentHomePage");
const utilities_1 = require("./utilities");
const chai_1 = __importDefault(require("chai"));
//import { log4jsconfig } from "../Logging/log4jsconfig";
// var chai = require('chai');
// chai.use(require('chai-as-promised'));
const mboLoginPage = new MBO_LoginPage_1.MBO_LoginPage;
const mboTalentHomePage = new MBO_TalentHomePage_1.MBO_TalentHomePage;
const expect = chai_1.default.expect;
const until = protractor_1.protractor.ExpectedConditions;
const util = new utilities_1.Utility;
const logger = require("../Logging/letlog").default;
cucumber_1.Given('Application is launched in {string} Environment', (environment) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    if (environment == 'Release') {
        yield protractor_1.browser.get('https://connect-release.mbopartners.com/');
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Release Environment");
    }
    else if (environment == 'Demo') {
        yield protractor_1.browser.get('https://connect-demo.mbopartners.com');
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Demo Environment");
    }
}));
cucumber_1.When('I am logged in as {string} using the {string} and {string}', (user, userid, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_mbo_Partners_Logo));
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_loginPage_Header));
    if (user === 'Talent') {
        yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_email_Address));
        yield mboLoginPage.talent_Login_page_email_Address.sendKeys(userid);
        yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_password));
        yield mboLoginPage.talent_Login_page_password.sendKeys(password);
    }
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_login_Button));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboLoginPage.talent_Login_page_login_Button));
    yield mboLoginPage.talent_Login_page_login_Button.click();
    util.waitForInvisibilityOfLoginPageSpinner();
    util.waitForInvisibilityOfSpinner();
    protractor_1.browser.sleep(2000);
}));
cucumber_1.When('I am in {string} landing page', (userPage) => __awaiter(void 0, void 0, void 0, function* () {
    util.waitForInvisibilityOfSpinner();
    if (userPage === 'Talent') {
        yield protractor_1.browser.wait(until.presenceOf(mboTalentHomePage.tab_Shown_Interest));
        yield protractor_1.browser.wait(until.presenceOf(mboTalentHomePage.oppurtunities_link));
        yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.oppurtunities_link));
        yield mboTalentHomePage.oppurtunities_link.isEnabled();
        yield protractor_1.browser.getCurrentUrl().then(function (currenUrl) {
            if (currenUrl.toString().includes("associate")) {
                logger.debug("We Are in Talent Page");
            }
            else {
                logger.debug("User Is In Different Page");
            }
        });
    }
}));
cucumber_1.Then('I will see {string} tabs present', (tabCount) => __awaiter(void 0, void 0, void 0, function* () {
    // await browser.wait(until.invisibilityOf(mboTalentHomePage.talent_Home_Page_PreLoadingAppContainer));
    // await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    // await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    // await mboTalentHomePage.tab_Shared_With_Me.sendKeys(Key.ENTER);
    //await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    var tabCountValue1 = (yield mboTalentHomePage.talent_Home_Page_Tab_Count.count()).toString();
    expect(tabCountValue1).to.equal(tabCount);
    logger.debug("Total Count of Tabs Present is :==>" + tabCountValue1);
}));
cucumber_1.Then('Those Tabs are {string},{string}, {string}, {string},{string}', (shared_With_Me, shown_Interest, bookmarked, saved_Search_Results, all_Oppurtunities) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shown_Interest));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shown_Interest));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Bokmarked));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Bokmarked));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Saved_Search_Results));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Saved_Search_Results));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Alloppurtunities));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Alloppurtunities));
    var tab1_shared_with_me = yield mboTalentHomePage.tab_Shared_With_Me.getText();
    expect(tab1_shared_with_me).to.equal(shared_With_Me);
    var tab2_shown_interest = yield mboTalentHomePage.tab_Shown_Interest.getText();
    expect(tab2_shown_interest).to.equal(shown_Interest);
    var tab3_bookmarked = yield mboTalentHomePage.tab_Bokmarked.getText();
    expect(tab3_bookmarked).to.equal(bookmarked);
    var tab4_saved_searc_results = yield mboTalentHomePage.tab_Saved_Search_Results.getText();
    expect(tab4_saved_searc_results).to.equal(saved_Search_Results);
    var tab5_al_oppurtunities = yield mboTalentHomePage.tab_Alloppurtunities.getText();
    expect(tab5_al_oppurtunities).to.equal(all_Oppurtunities);
    logger.debug("All Tab Have Matched Perfectly With What Has Been Displayed in UI");
}));
cucumber_1.Then('I will see sort by option available with in every tab', () => __awaiter(void 0, void 0, void 0, function* () {
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    util.waitForInvisibilityOfSpinner();
    yield mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shown_Interest));
    yield mboTalentHomePage.tab_Shown_Interest.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Bokmarked));
    yield mboTalentHomePage.tab_Bokmarked.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    yield mboTalentHomePage.tab_Saved_Search_Results.isDisplayed();
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Alloppurtunities));
    yield mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
}));
cucumber_1.When('I click on {string} tab', (sharedwithmetab) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    yield mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    var tab1_shared_with_me = yield mboTalentHomePage.tab_Shared_With_Me.getText();
    if (expect(tab1_shared_with_me).to.equal(sharedwithmetab)) {
        yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
        yield mboTalentHomePage.tab_Shared_With_Me.click();
        util.waitForInvisibilityOfSpinner();
    }
}));
cucumber_1.Then('I will see total count of opportunity cards shared with me', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count), 10000, "Waiting for Oppurtunities Card Count To Be Displayed");
    var oppurtunitycardcount = yield (yield (yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count.getText()).split(" ", 1));
    logger.debug("Total Number Of Oppurtunity Cards Count Displayed Is:===>" + oppurtunitycardcount);
    var totalcardcount = yield ((yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Card.count()).toString());
    expect(oppurtunitycardcount).to.have.eql([totalcardcount]);
    logger.debug("Assertion Is Passed And The Card Count Is :" + totalcardcount);
}));
cucumber_1.Then('I will see count of opportunities', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count), 10000, "Waiting for Oppurtunities Card Count To Be Displayed");
    var oppurtunitycardcount = yield (yield (yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count.getText()).split(" ", 1));
    logger.debug("Total Number of Oppurtunity Cards displayed is:===>" + oppurtunitycardcount);
}));
cucumber_1.Then('I will see the Opportunity Name', () => __awaiter(void 0, void 0, void 0, function* () {
    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Name).forEach(async (oppurtunitynamedisplayed) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Name.each((oppurtunitynamedisplayed) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitynamedisplayed));
        yield oppurtunitynamedisplayed.isDisplayed();
        var oppurtunitynamedisplayedvalues = yield (oppurtunitynamedisplayed.getText());
        logger.debug("Oppurtunity name displayed is:===>" + oppurtunitynamedisplayedvalues);
    }));
}));
cucumber_1.Then('I will see the Company logo', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.mbo_Partners_logo_Talent_Home_Page));
    yield mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Company_logo.each((oppurtunitypostedcompanylogo, index) => __awaiter(void 0, void 0, void 0, function* () {
        yield oppurtunitypostedcompanylogo.getAttribute('class').then(function (textvalue) {
            console.log(textvalue, index);
        });
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitypostedcompanylogo));
        yield oppurtunitypostedcompanylogo.isDisplayed();
        logger.debug("Company Logo is Verified");
    }));
}));
cucumber_1.Then('I will see the Posted date of Opportunity in Month DD YYYY', () => __awaiter(void 0, void 0, void 0, function* () {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date).forEach(async (oppurtunityposteddate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date.each((oppurtunityposteddate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunityposteddate));
        yield oppurtunityposteddate.isDisplayed();
        var oppurtunityposteddate1 = yield (oppurtunityposteddate.getText());
        logger.debug("Oppurtunity Posted Date Is:===>" + oppurtunityposteddate1);
    }));
}));
cucumber_1.Then('I will see Location, Bill Rate, Start date and End date', () => __awaiter(void 0, void 0, void 0, function* () {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location).forEach(async (oppurtunitylocation) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location.each((oppurtunitylocation) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitylocation));
        yield oppurtunitylocation.isDisplayed();
        var oppurtunitylocation1 = yield (oppurtunitylocation.getText());
        logger.debug("Oppurtunity Posted Location Is:===>" + oppurtunitylocation1);
    }));
    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate).forEach(async (oppurtunitybillrate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate.each((oppurtunitybillrate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitybillrate));
        yield oppurtunitybillrate.isDisplayed();
        var oppurtunitybillrate1 = yield (oppurtunitybillrate.getText());
        logger.debug("Oppurtunity Posted Bill Rate Is:===>" + oppurtunitybillrate1);
    }));
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date).forEach(async (oppurtunitystartdate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date.each((oppurtunitystartdate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitystartdate));
        yield oppurtunitystartdate.isDisplayed();
        var oppurtunitystartdate1 = yield (oppurtunitystartdate.getText());
        logger.debug("Oppurtunity Posted Start Date Is:===>" + oppurtunitystartdate1);
    }));
}));
cucumber_1.Then('The footer should be present on the bottom of the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    yield mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Footer));
    yield mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class').then((classvalue) => { var classvalue; return __awaiter(void 0, void 0, void 0, function* () {
        classvalue = classvalue.toString();
        expect(classvalue).to.contain('footer');
        logger.debug("Extracted Class Value is:===>" + classvalue);
    }); });
    //expect(await mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class')).to.contain('footer');
}));
cucumber_1.Then('The footer should contain the MBO Copyright signature with the current year', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Copyright_Signature));
    yield mboTalentHomePage.talent_Home_Page_Copyright_Signature.getText().then(function (copyrightext) {
        logger.debug("CopyRight Text displayed is:===>" + copyrightext);
        expect(copyrightext).to.contain('© 2020 MBO Partners, Inc.');
    });
}));
cucumber_1.Then('The footer should contain a Privacy Policy hyperlink and it should navigate to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Privacy_Policy_link));
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.getText().then(function (privacypolicytext) {
        logger.debug("Privacy Policy Text displayed is:===>" + privacypolicytext);
        expect(privacypolicytext).to.contain('Privacy Policy');
    });
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[1]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((privacypolicywindowurl) => __awaiter(void 0, void 0, void 0, function* () {
                logger.debug("Redirected Privacy Policy URL  displayed is:===>" + privacypolicywindowurl);
                expect(privacypolicywindowurl).to.contain('https://www.mbopartners.com/privacy-policy/');
                //await browser.close();
            }));
        }));
        yield protractor_1.browser.switchTo().window(handles[0]);
    }));
}));
cucumber_1.Then('The footer should contain Terms of Use hyperlink and it should navigate to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link));
    yield mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.getText().then(function (termsofusetext) {
        logger.debug("Terms of Use Text displayed is:===>" + termsofusetext);
        expect(termsofusetext).to.contain('Terms of Use');
    });
    yield mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[2]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((termsofuseurl) => __awaiter(void 0, void 0, void 0, function* () {
                logger.debug("Redirected Terms of Use URL displayed is:===>" + termsofuseurl);
                expect(termsofuseurl).to.contain('https://www.mbopartners.com/terms-and-conditions/');
            }));
        }));
        yield protractor_1.browser.switchTo().window(handles[0]);
    }));
}));
cucumber_1.Then('Verify that message saying Invalid Username or Password is displayed.', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_login_page_Invalidcredentials_Message));
    yield mboLoginPage.talent_login_page_Invalidcredentials_Message.getText().then(function (messageforInvalidlogin) {
        expect(messageforInvalidlogin).to.contain('Invalid Username or Password.');
        logger.debug("Message Displayed when invalid credentials used is:===>" + messageforInvalidlogin);
    });
}));
cucumber_1.Then('Verify that there is a keyword search field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Keyword_Search_Field));
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.isPresent();
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.getAttribute('placeholder').then(function (searchfieldplaceholdevalues) {
        expect(searchfieldplaceholdevalues).to.contain('Search by job title, job id, or skills...');
        logger.debug("Place Holder Values displayed for Keywoprd search Field is:===>" + searchfieldplaceholdevalues);
    });
}));
cucumber_1.Then('Verify that the opportunities should be filtered based on the keyword entered', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys('Automation');
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys(protractor_1.Key.ENTER);
    yield mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.isDisplayed();
    yield mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.getText().then((skilltextused) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug("Keyword used to search Oppurtunities is:===>" + skilltextused);
        expect(skilltextused).to.equal('Automation');
    }));
}));
cucumber_1.Then('Verify Keywords should search on fields such as Title, Job ID, Skills, Company, and Job Description', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_All_Oppurtunities_First_Oppurtunity));
    yield mboTalentHomePage.talent_Home_Page_All_Oppurtunities_First_Oppurtunity.click();
    yield util.waitForInvisibilityOfLoginPageSpinner();
    mboTalentHomePage.oppurtunities_link.click();
    mboTalentHomePage.oppurtunities_link.click();
    yield protractor_1.browser.sleep(5000);
    // browser.actions().mouseMove(mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace).click().perform()
    //await browser.wait(until.elementToBeClickable(mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace));
    //mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace.click();
    util.waitForInvisibilityOfSpinner();
}));
cucumber_1.Then('Verify that Talent should have options to filter the opportunities.', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.tab_Alloppurtunities));
    yield mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    yield mboTalentHomePage.talent_Home_Page_Filter_count.count().then(function (filtercount) {
        expect(filtercount).to.equal(5);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates));
    yield mboTalentHomePage.talent_Home_Page_Project_Dates.getText().then(function (projectdatefiltertext) {
        expect(projectdatefiltertext).to.eql('Project Dates');
        logger.debug("Project dates filter value displayed is:===>" + projectdatefiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Client));
    yield mboTalentHomePage.talent_Home_Page_Client.getText().then(function (clientfiltertext) {
        expect(clientfiltertext).to.eql('Client');
        logger.debug("Client filter value displayed is:===>" + clientfiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    yield mboTalentHomePage.talent_Home_Page_Bill_Rate.getText().then(function (billratefiltertext) {
        expect(billratefiltertext).to.eql('Bill Rate');
        logger.debug("Bill Rate filter value displayed is:===>" + billratefiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Location));
    yield mboTalentHomePage.talent_Home_Page_Location.getText().then(function (locationfiltertext) {
        expect(locationfiltertext).to.eql('Location');
        logger.debug("Location filter value displayed is:===>" + locationfiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Skills));
    yield mboTalentHomePage.talent_Home_Page_Skills.getText().then(function (skillsfiltertext) {
        expect(skillsfiltertext).to.eql('Skills');
        logger.debug("Skill filter value displayed is:===>" + skillsfiltertext);
    });
}));
cucumber_1.Then('Verify that The filter should have options Project Date,Client,Bill Rate,Location,Skills', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates));
    yield mboTalentHomePage.talent_Home_Page_Project_Dates.click();
    yield util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_Start_Date));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_End_Date));
    yield (mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_Date_Picker).each((datepickerforstartandenddate) => __awaiter(void 0, void 0, void 0, function* () {
        datepickerforstartandenddate.isDisplayed();
    }));
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    yield mboTalentHomePage.talent_Home_Page_Bill_Rate.click();
    yield util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Min_Bill_Rate_Hour));
    yield mboTalentHomePage.talent_Home_Page_Min_Bill_Rate.getAttribute('aria-valuenow').then(function (billratevalue) {
        expect(billratevalue).to.equal(0);
        logger.debug("Bill Rate Displayed is:===>" + billratevalue);
    });
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.wait(until.elementToBeClickable(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    yield protractor_1.browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Bill_Rate);
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Location));
    //await browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Location);
    //await browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Location);
    yield mboTalentHomePage.talent_Home_Page_Location.click();
    yield util.waitForInvisibilityOfSpinner();
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate_Radius_Miles));
    mboTalentHomePage.talent_Home_Page_Radius_Miles_Slider.getAttribute('aria-orientation').then(function (sliderorientation) {
        expect(sliderorientation).to.contain('horizontal');
        logger.debug("Slider Orientation is:===>" + sliderorientation);
    });
    mboTalentHomePage.talent_Home_Page_Radius_Miles_Slider.getAttribute('aria-valuenow').then(function (milesvalue) {
        expect(milesvalue).to.equal(0);
        logger.debug("Default Radius Miles is:===>" + milesvalue);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Remote_Work));
    mboTalentHomePage.talent_Home_Page_Remote_Work_Allowed_CheckBox.getAttribute('type').then(function (remoteworkallowedboxtype) {
        expect(remoteworkallowedboxtype).to.contain('checkbox');
        logger.debug("Remote work allowed box type is:===>" + remoteworkallowedboxtype);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFFO0FBQ3JFLGdFQUE2RDtBQUM3RCwwRUFBdUU7QUFDdkUsMkNBQXNDO0FBQ3RDLGdEQUF3QjtBQUN4Qix5REFBeUQ7QUFFekQsOEJBQThCO0FBQzlCLHlDQUF5QztBQUN6QyxNQUFNLFlBQVksR0FBRyxJQUFJLDZCQUFhLENBQUM7QUFDdkMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFrQixDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBR3BELGdCQUFLLENBQUMsaURBQWlELEVBQUUsQ0FBTyxXQUFXLEVBQUUsRUFBRTtJQUMzRSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0MsSUFBSSxXQUFXLElBQUksU0FBUyxFQUFFO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7S0FFbEQ7U0FDSSxJQUFJLFdBQVcsSUFBSSxNQUFNLEVBQUU7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMs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