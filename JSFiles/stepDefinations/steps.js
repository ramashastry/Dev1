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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const MBO_LoginPage_1 = require("../pageObjects/MBO_LoginPage");
const MBO_TalentHomePage_1 = require("../pageObjects/MBO_TalentHomePage");
const utilities_1 = require("./utilities");
// import * as logger from "logback";
//import chai from "chai";
const chai = require('chai').use(require('chai-as-promised'));
// chai.use(require('chai-as-promised'));
const mboLoginPage = new MBO_LoginPage_1.MBO_LoginPage;
const mboTalentHomePage = new MBO_TalentHomePage_1.MBO_TalentHomePage;
const expect = chai.expect;
const until = protractor_1.protractor.ExpectedConditions;
const util = new utilities_1.Utility;
const logger = require("../Logging/letlog").default;
var propertiesReader = require('properties-reader');
var inputProperties = propertiesReader('./stepDefinations/Framework.properties');
cucumber_1.Given('Application is launched in {string} Environment', (environment) => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.waitForAngularEnabled(false);
    if (environment == inputProperties.get('ReleaseEnvironment')) {
        // await browser.get('https://connect-release.mbopartners.com/');
        yield protractor_1.browser.get(inputProperties.get('ReleaseUrl'));
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Release Environment");
    }
    else if (environment == inputProperties.get('DemoEnvironment')) {
        //await browser.get('https://connect-demo.mbopartners.com');
        yield protractor_1.browser.get(inputProperties.get('DemoUrl'));
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Demo Environment");
    }
    else {
        logger.error("user is in a different environemnet other than the oen specified");
    }
}));
cucumber_1.When('I am logged in as {string} using the {string} and {string}', (user, userid, password) => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.waitForAngularEnabled(false);
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_mbo_Partners_Logo));
    yield protractor_1.browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_loginPage_Header));
    if (user === inputProperties.get('TypeOfUser')) {
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
    if (userPage === inputProperties.get('LandingPage')) {
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
                logger.error("Please debug to see why we are getting redirected to a different page");
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
        //expect(classvalue).to.contain('footer');
        expect(classvalue).to.contain(inputProperties.get('FooterText'));
        logger.debug("Extracted Class Value is:===>" + classvalue);
    }); });
    //expect(await mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class')).to.contain('footer');
}));
cucumber_1.Then('The footer should contain the MBO Copyright signature with the current year', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Copyright_Signature));
    yield mboTalentHomePage.talent_Home_Page_Copyright_Signature.getText().then(function (copyrightext) {
        logger.debug("CopyRight Text displayed is:===>" + copyrightext);
        //expect(copyrightext).to.contain('© 2020 MBO Partners, Inc.')
        expect(copyrightext).to.contain(inputProperties.get('CopyRightText'));
    });
}));
cucumber_1.Then('The footer should contain a Privacy Policy hyperlink and it should navigate to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Privacy_Policy_link));
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.getText().then(function (privacypolicytext) {
        logger.debug("Privacy Policy Text displayed is:===>" + privacypolicytext);
        //expect(privacypolicytext).to.contain('Privacy Policy');
        expect(privacypolicytext).to.contain(inputProperties.get('PrivacyPolicyText'));
    });
    yield mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[1]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((privacypolicywindowurl) => __awaiter(void 0, void 0, void 0, function* () {
                logger.debug("Redirected Privacy Policy URL  displayed is:===>" + privacypolicywindowurl);
                expect(privacypolicywindowurl).to.contain(inputProperties.get('PrivacPolicyUrl'));
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
        expect(termsofusetext).to.contain(inputProperties.get('TermsOfUseText'));
    });
    yield mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.click();
    yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.switchTo().window(handles[2]).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.getCurrentUrl().then((termsofuseurl) => __awaiter(void 0, void 0, void 0, function* () {
                logger.debug("Redirected Terms of Use URL displayed is:===>" + termsofuseurl);
                expect(termsofuseurl).to.contain(inputProperties.get('TermsConditionUrl'));
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
        expect(skilltextused).to.equal(inputProperties.get('SkillKeywordUsedToSearchTalent'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFFO0FBQ3JFLGdFQUE2RDtBQUM3RCwwRUFBdUU7QUFDdkUsMkNBQXNDO0FBQ3RDLHFDQUFxQztBQUVyQywwQkFBMEI7QUFHMUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELHlDQUF5QztBQUN6QyxNQUFNLFlBQVksR0FBRyxJQUFJLDZCQUFhLENBQUM7QUFDdkMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHVDQUFrQixDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUM1QyxNQUFNLElBQUksR0FBRyxJQUFJLG1CQUFPLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3BELElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxlQUFlLEdBQUUsZ0JBQWdCLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUloRixnQkFBSyxDQUFDLGlEQUFpRCxFQUFFLENBQU8sV0FBVyxFQUFFLEVBQUU7SUFDM0UsNkNBQTZDO0lBRTdDLElBQUksV0FBVyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRTtRQUMzRCxpRUFBaUU7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHFDQUFx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