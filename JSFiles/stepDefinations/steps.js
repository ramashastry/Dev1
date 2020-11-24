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
const log4jsconfig_1 = require("../Logging/log4jsconfig");
// var chai = require('chai');
// chai.use(require('chai-as-promised'));
const mboLoginPage = new MBO_LoginPage_1.MBO_LoginPage;
const mboTalentHomePage = new MBO_TalentHomePage_1.MBO_TalentHomePage;
const expect = chai_1.default.expect;
const until = protractor_1.protractor.ExpectedConditions;
const util = new utilities_1.Utility;
cucumber_1.Given('Application is launched in {string} Environment', (environment) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    if (environment == 'Release') {
        yield protractor_1.browser.get('https://connect-release.mbopartners.com/');
        util.waitForInvisibilityOfLoginPageSpinner();
        log4jsconfig_1.log4jsconfig.Logger().info("user is in Release Environment");
    }
    else if (environment == 'Demo') {
        yield protractor_1.browser.get('https://connect-demo.mbopartners.com');
        util.waitForInvisibilityOfLoginPageSpinner();
        log4jsconfig_1.log4jsconfig.Logger().info("user is in Demo Environment");
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
                log4jsconfig_1.log4jsconfig.Logger().info("We Are in Talent Page");
            }
            else {
                log4jsconfig_1.log4jsconfig.Logger().info("User Is In Different Page");
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
    log4jsconfig_1.log4jsconfig.Logger().info("Total Count of Tabs Present is :==>" + tabCountValue1);
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
    log4jsconfig_1.log4jsconfig.Logger().info("All Tab Have Matched Perfectly With What Has Been Displayed in UI");
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
    log4jsconfig_1.log4jsconfig.Logger().info("Total Number Of Oppurtunity Cards Count Displayed Is:===>" + oppurtunitycardcount);
    var totalcardcount = yield ((yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Card.count()).toString());
    expect(oppurtunitycardcount).to.have.eql([totalcardcount]);
    log4jsconfig_1.log4jsconfig.Logger().info("Assertion Is Passed And The Card Count Is :" + totalcardcount);
}));
cucumber_1.Then('I will see count of opportunities', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count), 10000, "Waiting for Oppurtunities Card Count To Be Displayed");
    var oppurtunitycardcount = yield (yield (yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count.getText()).split(" ", 1));
    log4jsconfig_1.log4jsconfig.Logger().info("Total Number of Oppurtunity Cards displayed is:===>" + oppurtunitycardcount);
}));
cucumber_1.Then('I will see the Opportunity Name', () => __awaiter(void 0, void 0, void 0, function* () {
    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Name).forEach(async (oppurtunitynamedisplayed) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Name.each((oppurtunitynamedisplayed) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitynamedisplayed));
        yield oppurtunitynamedisplayed.isDisplayed();
        var oppurtunitynamedisplayedvalues = yield (oppurtunitynamedisplayed.getText());
        log4jsconfig_1.log4jsconfig.Logger().info("Oppurtunity name displayed is:===>" + oppurtunitynamedisplayedvalues);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Company Logo is Verified");
    }));
}));
cucumber_1.Then('I will see the Posted date of Opportunity in Month DD YYYY', () => __awaiter(void 0, void 0, void 0, function* () {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date).forEach(async (oppurtunityposteddate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date.each((oppurtunityposteddate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunityposteddate));
        yield oppurtunityposteddate.isDisplayed();
        var oppurtunityposteddate1 = yield (oppurtunityposteddate.getText());
        log4jsconfig_1.log4jsconfig.Logger().info("Oppurtunity Posted Date Is:===>" + oppurtunityposteddate1);
    }));
}));
cucumber_1.Then('I will see Location, Bill Rate, Start date and End date', () => __awaiter(void 0, void 0, void 0, function* () {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location).forEach(async (oppurtunitylocation) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location.each((oppurtunitylocation) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitylocation));
        yield oppurtunitylocation.isDisplayed();
        var oppurtunitylocation1 = yield (oppurtunitylocation.getText());
        log4jsconfig_1.log4jsconfig.Logger().info("Oppurtunity Posted Location Is:===>" + oppurtunitylocation1);
    }));
    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate).forEach(async (oppurtunitybillrate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate.each((oppurtunitybillrate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitybillrate));
        yield oppurtunitybillrate.isDisplayed();
        var oppurtunitybillrate1 = yield (oppurtunitybillrate.getText());
        log4jsconfig_1.log4jsconfig.Logger().info("Oppurtunity Posted Bill Rate Is:===>" + oppurtunitybillrate1);
    }));
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date).forEach(async (oppurtunitystartdate) => {
    yield mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date.each((oppurtunitystartdate) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(until.visibilityOf(oppurtunitystartdate));
        yield oppurtunitystartdate.isDisplayed();
        var oppurtunitystartdate1 = yield (oppurtunitystartdate.getText());
        log4jsconfig_1.log4jsconfig.Logger().info("Oppurtunity Posted Start Date Is:===>" + oppurtunitystartdate1);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Extracted Class Value is:===>" + classvalue);
    }); });
    //expect(await mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class')).to.contain('footer');
}));
cucumber_1.Then('The footer should contain the MBO Copyright signature with the current year', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Copyright_Signature));
    yield mboTalentHomePage.talent_Home_Page_Copyright_Signature.getText().then(function (copyrightext) {
        log4jsconfig_1.log4jsconfig.Logger().info("CopyRight Text displayed is:===>" + copyrightext);
        expect(copyrightext).to.contain('© 2020 MBO Partners, Inc.');
    });
}));
cucumber_1.Then('The footer should contain a Privacy Policy hyperlink and it should navigate to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Privacy_Policy_link));
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.getText().then(function (privacypolicytext) {
        log4jsconfig_1.log4jsconfig.Logger().info("Privacy Policy Text displayed is:===>" + privacypolicytext);
        expect(privacypolicytext).to.contain('Privacy Policy');
    });
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[1]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((privacypolicywindowurl) => __awaiter(void 0, void 0, void 0, function* () {
                log4jsconfig_1.log4jsconfig.Logger().info("Redirected Privacy Policy URL  displayed is:===>" + privacypolicywindowurl);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Terms of Use Text displayed is:===>" + termsofusetext);
        expect(termsofusetext).to.contain('Terms of Use');
    });
    yield mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[2]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((termsofuseurl) => __awaiter(void 0, void 0, void 0, function* () {
                log4jsconfig_1.log4jsconfig.Logger().info("Redirected Terms of Use URL displayed is:===>" + termsofuseurl);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Message Displayed when invalid credentials used is:===>" + messageforInvalidlogin);
    });
}));
cucumber_1.Then('Verify that there is a keyword search field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Keyword_Search_Field));
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.isPresent();
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.getAttribute('placeholder').then(function (searchfieldplaceholdevalues) {
        expect(searchfieldplaceholdevalues).to.contain('Search by job title, job id, or skills...');
        log4jsconfig_1.log4jsconfig.Logger().info("Place Holder Values displayed for Keywoprd search Field is:===>" + searchfieldplaceholdevalues);
    });
}));
cucumber_1.Then('Verify that the opportunities should be filtered based on the keyword entered', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys('Automation');
    yield mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys(protractor_1.Key.ENTER);
    yield mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.isDisplayed();
    yield mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.getText().then((skilltextused) => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig_1.log4jsconfig.Logger().info("Keyword used to search Oppurtunities is:===>" + skilltextused);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Project dates filter value displayed is:===>" + projectdatefiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Client));
    yield mboTalentHomePage.talent_Home_Page_Client.getText().then(function (clientfiltertext) {
        expect(clientfiltertext).to.eql('Client');
        log4jsconfig_1.log4jsconfig.Logger().info("Client filter value displayed is:===>" + clientfiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    yield mboTalentHomePage.talent_Home_Page_Bill_Rate.getText().then(function (billratefiltertext) {
        expect(billratefiltertext).to.eql('Bill Rate');
        log4jsconfig_1.log4jsconfig.Logger().info("Bill Rate filter value displayed is:===>" + billratefiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Location));
    yield mboTalentHomePage.talent_Home_Page_Location.getText().then(function (locationfiltertext) {
        expect(locationfiltertext).to.eql('Location');
        log4jsconfig_1.log4jsconfig.Logger().info("Location filter value displayed is:===>" + locationfiltertext);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Skills));
    yield mboTalentHomePage.talent_Home_Page_Skills.getText().then(function (skillsfiltertext) {
        expect(skillsfiltertext).to.eql('Skills');
        log4jsconfig_1.log4jsconfig.Logger().info("Skill filter value displayed is:===>" + skillsfiltertext);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Bill Rate Displayed is:===>" + billratevalue);
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
        log4jsconfig_1.log4jsconfig.Logger().info("Slider Orientation is:===>" + sliderorientation);
    });
    mboTalentHomePage.talent_Home_Page_Radius_Miles_Slider.getAttribute('aria-valuenow').then(function (milesvalue) {
        expect(milesvalue).to.equal(0);
        log4jsconfig_1.log4jsconfig.Logger().info("Default Radius Miles is:===>" + milesvalue);
    });
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Remote_Work));
    mboTalentHomePage.talent_Home_Page_Remote_Work_Allowed_CheckBox.getAttribute('type').then(function (remoteworkallowedboxtype) {
        expect(remoteworkallowedboxtype).to.contain('checkbox');
        log4jsconfig_1.log4jsconfig.Logger().info("Remote work allowed box type is:===>" + remoteworkallowedboxtype);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFFO0FBQ3JFLGdFQUE2RDtBQUM3RCwwRUFBdUU7QUFDdkUsMkNBQXNDO0FBQ3RDLGdEQUF3QjtBQUN4QiwwREFBdUQ7QUFFdkQsOEJBQThCO0FBQzlCLHlDQUF5QztBQUN6QyxNQUFNLFlBQVksR0FBRyxJQUFJLDZCQUFhLENBQUM7QUFDdkMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFrQixDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFHekIsZ0JBQUssQ0FBQyxpREFBaUQsRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO0lBQzNFLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxJQUFJLFdBQVcsSUFBSSxTQUFTLEVBQUU7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO1FBQzdDLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7S0FFaEU7U0FDSSxJQUFJLFdBQVcsSUFBSSxNQUFNLEVBQUU7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFDO1FBQzdDLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDN0Q7QUFH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