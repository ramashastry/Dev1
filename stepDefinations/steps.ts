import { Given, Then, When } from "cucumber";
import { browser, ElementFinder, Key, protractor } from 'protractor';
import { MBO_LoginPage } from "../pageObjects/MBO_LoginPage";
import { MBO_TalentHomePage } from "../pageObjects/MBO_TalentHomePage";
import { Utility } from "./utilities";
// import * as logger from "logback";

//import chai from "chai";


const chai = require('chai').use(require('chai-as-promised'));
// chai.use(require('chai-as-promised'));
const mboLoginPage = new MBO_LoginPage;
const mboTalentHomePage = new MBO_TalentHomePage;
const expect = chai.expect;
const until = protractor.ExpectedConditions;
const util = new Utility;
const logger = require("../Logging/letlog").default;
var propertiesReader = require('properties-reader');
var inputProperties= propertiesReader('./stepDefinations/Framework.properties');



Given('Application is launched in {string} Environment', async (environment) => {
    //await browser.waitForAngularEnabled(false);

    if (environment == inputProperties.get('ReleaseEnvironment')) {
       // await browser.get('https://connect-release.mbopartners.com/');
        await browser.get(inputProperties.get('ReleaseUrl'));
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Release Environment");


    }
    else if (environment == inputProperties.get('DemoEnvironment')) {
        //await browser.get('https://connect-demo.mbopartners.com');
        await browser.get(inputProperties.get('DemoUrl'));
        util.waitForInvisibilityOfLoginPageSpinner();
        logger.debug("user is in Demo Environment");
    }
    else {
        logger.error("user is in a different environemnet other than the oen specified");
    }


});

When('I am logged in as {string} using the {string} and {string}', async (user, userid, password) => {
    //await browser.waitForAngularEnabled(false);
    await browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_mbo_Partners_Logo));
    await browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_loginPage_Header));
    if (user === inputProperties.get('TypeOfUser')) {
        await browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_email_Address));
        await mboLoginPage.talent_Login_page_email_Address.sendKeys(userid);
        await browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_password));
        await mboLoginPage.talent_Login_page_password.sendKeys(password);
    }
    await browser.wait(until.visibilityOf(mboLoginPage.talent_Login_page_login_Button));
    await browser.wait(until.elementToBeClickable(mboLoginPage.talent_Login_page_login_Button));
    await mboLoginPage.talent_Login_page_login_Button.click();
    util.waitForInvisibilityOfLoginPageSpinner();
    util.waitForInvisibilityOfSpinner();
    browser.sleep(2000);

});


When('I am in {string} landing page', async (userPage) => {
    util.waitForInvisibilityOfSpinner();
    if (userPage === inputProperties.get('LandingPage')) {
        await browser.wait(until.presenceOf(mboTalentHomePage.tab_Shown_Interest));
        await browser.wait(until.presenceOf(mboTalentHomePage.oppurtunities_link));
        await browser.wait(until.visibilityOf(mboTalentHomePage.oppurtunities_link));
        await mboTalentHomePage.oppurtunities_link.isEnabled();
        await browser.getCurrentUrl().then(function (currenUrl) {
            if (currenUrl.toString().includes("associate")) {
                logger.debug("We Are in Talent Page");
            }
            else {
                logger.debug("User Is In Different Page");
                logger.error("Please debug to see why we are getting redirected to a different page");
            }

        });
    }

});


Then('I will see {string} tabs present', async (tabCount) => {
    // await browser.wait(until.invisibilityOf(mboTalentHomePage.talent_Home_Page_PreLoadingAppContainer));
    // await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    // await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    // await mboTalentHomePage.tab_Shared_With_Me.sendKeys(Key.ENTER);
    //await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    var tabCountValue1 = (await mboTalentHomePage.talent_Home_Page_Tab_Count.count()).toString();
    expect(tabCountValue1).to.equal(tabCount);
    logger.debug("Total Count of Tabs Present is :==>" + tabCountValue1);
});

Then('Those Tabs are {string},{string}, {string}, {string},{string}', async (shared_With_Me, shown_Interest, bookmarked, saved_Search_Results, all_Oppurtunities) => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shown_Interest));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shown_Interest));
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Bokmarked));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Bokmarked));
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Saved_Search_Results));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Saved_Search_Results));
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Alloppurtunities));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Alloppurtunities));
    var tab1_shared_with_me = await mboTalentHomePage.tab_Shared_With_Me.getText();
    expect(tab1_shared_with_me).to.equal(shared_With_Me);
    var tab2_shown_interest = await mboTalentHomePage.tab_Shown_Interest.getText();
    expect(tab2_shown_interest).to.equal(shown_Interest);
    var tab3_bookmarked = await mboTalentHomePage.tab_Bokmarked.getText();
    expect(tab3_bookmarked).to.equal(bookmarked);
    var tab4_saved_searc_results = await mboTalentHomePage.tab_Saved_Search_Results.getText();
    expect(tab4_saved_searc_results).to.equal(saved_Search_Results);
    var tab5_al_oppurtunities = await mboTalentHomePage.tab_Alloppurtunities.getText();
    expect(tab5_al_oppurtunities).to.equal(all_Oppurtunities);
    logger.debug("All Tab Have Matched Perfectly With What Has Been Displayed in UI");
});

Then('I will see sort by option available with in every tab', async () => {
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
    util.waitForInvisibilityOfSpinner();
    await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shown_Interest));
    await mboTalentHomePage.tab_Shown_Interest.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Bokmarked));
    await mboTalentHomePage.tab_Bokmarked.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));
    await mboTalentHomePage.tab_Saved_Search_Results.isDisplayed();
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Alloppurtunities));
    await mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Sort_By));

});

When('I click on {string} tab', async (sharedwithmetab) => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    var tab1_shared_with_me = await mboTalentHomePage.tab_Shared_With_Me.getText();
    if (expect(tab1_shared_with_me).to.equal(sharedwithmetab)) {
        await browser.wait(until.elementToBeClickable(mboTalentHomePage.tab_Shared_With_Me));
        await mboTalentHomePage.tab_Shared_With_Me.click();
        util.waitForInvisibilityOfSpinner();
    }
});

Then('I will see total count of opportunity cards shared with me', async () => {
    await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count), 10000, "Waiting for Oppurtunities Card Count To Be Displayed");
    var oppurtunitycardcount = await (await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count.getText()).split(" ", 1));
    logger.debug("Total Number Of Oppurtunity Cards Count Displayed Is:===>" + oppurtunitycardcount);
    var totalcardcount = await ((await mboTalentHomePage.talent_Home_Page_Oppurtunity_Card.count()).toString());
    expect(oppurtunitycardcount).to.have.eql([totalcardcount]);
    logger.debug("Assertion Is Passed And The Card Count Is :" + totalcardcount);
});

Then('I will see count of opportunities', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count), 10000, "Waiting for Oppurtunities Card Count To Be Displayed");
    var oppurtunitycardcount = await (await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Card_Count.getText()).split(" ", 1));
    logger.debug("Total Number of Oppurtunity Cards displayed is:===>" + oppurtunitycardcount);
});

Then('I will see the Opportunity Name', async () => {
    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Name).forEach(async (oppurtunitynamedisplayed) => {
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Name.each(async (oppurtunitynamedisplayed) => {
        await browser.wait(until.visibilityOf(oppurtunitynamedisplayed));
        await oppurtunitynamedisplayed.isDisplayed();
        var oppurtunitynamedisplayedvalues = await (oppurtunitynamedisplayed.getText());
        logger.debug("Oppurtunity name displayed is:===>" + oppurtunitynamedisplayedvalues);
    });
});

Then('I will see the Company logo', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.mbo_Partners_logo_Talent_Home_Page));
    await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Company_logo.each(async (oppurtunitypostedcompanylogo: ElementFinder, index) => {
        await oppurtunitypostedcompanylogo.getAttribute('class').then(function (textvalue: any) {
            console.log(textvalue, index)
        });
        await browser.wait(until.visibilityOf(oppurtunitypostedcompanylogo));
        await oppurtunitypostedcompanylogo.isDisplayed();
        logger.debug("Company Logo is Verified");
    });

});

Then('I will see the Posted date of Opportunity in Month DD YYYY', async () => {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date).forEach(async (oppurtunityposteddate) => {
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_Date.each(async (oppurtunityposteddate) => {
        await browser.wait(until.visibilityOf(oppurtunityposteddate));
        await oppurtunityposteddate.isDisplayed();
        var oppurtunityposteddate1 = await (oppurtunityposteddate.getText());
        logger.debug("Oppurtunity Posted Date Is:===>" + oppurtunityposteddate1);
    });

});

Then('I will see Location, Bill Rate, Start date and End date', async () => {
    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location).forEach(async (oppurtunitylocation) => {
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Posted_location.each(async (oppurtunitylocation) => {
        await browser.wait(until.visibilityOf(oppurtunitylocation));
        await oppurtunitylocation.isDisplayed();
        var oppurtunitylocation1 = await (oppurtunitylocation.getText());
        logger.debug("Oppurtunity Posted Location Is:===>" + oppurtunitylocation1);
    });


    // await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate).forEach(async (oppurtunitybillrate) => {
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Bill_Rate.each(async (oppurtunitybillrate) => {
        await browser.wait(until.visibilityOf(oppurtunitybillrate));
        await oppurtunitybillrate.isDisplayed();
        var oppurtunitybillrate1 = await (oppurtunitybillrate.getText());
        logger.debug("Oppurtunity Posted Bill Rate Is:===>" + oppurtunitybillrate1);
    });

    //await (await mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date).forEach(async (oppurtunitystartdate) => {
    await mboTalentHomePage.talent_Home_Page_Oppurtunity_Start_Date.each(async (oppurtunitystartdate) => {
        await browser.wait(until.visibilityOf(oppurtunitystartdate));
        await oppurtunitystartdate.isDisplayed();
        var oppurtunitystartdate1 = await (oppurtunitystartdate.getText());
        logger.debug("Oppurtunity Posted Start Date Is:===>" + oppurtunitystartdate1);
    });

});

Then('The footer should be present on the bottom of the page', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Shared_With_Me));
    await mboTalentHomePage.tab_Shared_With_Me.click();
    util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Footer));
    await mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class').then(async (classvalue) => {
        var classvalue = classvalue.toString();
        //expect(classvalue).to.contain('footer');
        expect(classvalue).to.contain(inputProperties.get('FooterText'));
        logger.debug("Extracted Class Value is:===>" + classvalue);
    });

    //expect(await mboTalentHomePage.talent_Home_Page_Footer.getAttribute('class')).to.contain('footer');

});

Then('The footer should contain the MBO Copyright signature with the current year', async () => {

    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Copyright_Signature));
    await mboTalentHomePage.talent_Home_Page_Copyright_Signature.getText().then(function (copyrightext) {
        logger.debug("CopyRight Text displayed is:===>" + copyrightext);
        //expect(copyrightext).to.contain('© 2020 MBO Partners, Inc.')
        expect(copyrightext).to.contain(inputProperties.get('CopyRightText'));
    })

});
Then('The footer should contain a Privacy Policy hyperlink and it should navigate to the right page', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Privacy_Policy_link));
    await mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.getText().then(function (privacypolicytext) {
        logger.debug("Privacy Policy Text displayed is:===>" + privacypolicytext);
        //expect(privacypolicytext).to.contain('Privacy Policy');
        expect(privacypolicytext).to.contain(inputProperties.get('PrivacyPolicyText'));
    });
    await mboTalentHomePage.talent_Home_Page_Privacy_Policy_link.click();
    await browser.getAllWindowHandles().then(async (handles) => {
        await browser.switchTo().window(handles[1]).then(async () => {
            await browser.getCurrentUrl().then(async (privacypolicywindowurl) => {
                logger.debug("Redirected Privacy Policy URL  displayed is:===>" + privacypolicywindowurl);
                expect(privacypolicywindowurl).to.contain(inputProperties.get('PrivacPolicyUrl'))
                //await browser.close();
            });
        });
        await browser.switchTo().window(handles[0]);

    });
});

Then('The footer should contain Terms of Use hyperlink and it should navigate to the right page', async () => {

    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link));
    await mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.getText().then(function (termsofusetext) {
        logger.debug("Terms of Use Text displayed is:===>" + termsofusetext);
        expect(termsofusetext).to.contain(inputProperties.get('TermsOfUseText'));
    });
    await mboTalentHomePage.talent_Home_Page_Terms_Of_Use_link.click();
    await browser.getAllWindowHandles().then(async (handles) => {
        await browser.switchTo().window(handles[2]).then(async () => {
            await browser.getCurrentUrl().then(async (termsofuseurl) => {
                logger.debug("Redirected Terms of Use URL displayed is:===>" + termsofuseurl);
                expect(termsofuseurl).to.contain(inputProperties.get('TermsConditionUrl'))

            });
        });
        await browser.switchTo().window(handles[0]);
    });
});

Then('Verify that message saying Invalid Username or Password is displayed.', async () => {
    await browser.wait(until.visibilityOf(mboLoginPage.talent_login_page_Invalidcredentials_Message));
    await mboLoginPage.talent_login_page_Invalidcredentials_Message.getText().then(function (messageforInvalidlogin) {
        expect(messageforInvalidlogin).to.contain('Invalid Username or Password.');
        logger.debug("Message Displayed when invalid credentials used is:===>" + messageforInvalidlogin);
    });
});

Then('Verify that there is a keyword search field', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Keyword_Search_Field));
    await mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.isPresent();
    await mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.getAttribute('placeholder').then(function (searchfieldplaceholdevalues) {
        expect(searchfieldplaceholdevalues).to.contain('Search by job title, job id, or skills...');
        logger.debug("Place Holder Values displayed for Keywoprd search Field is:===>" + searchfieldplaceholdevalues);
    });
});

Then('Verify that the opportunities should be filtered based on the keyword entered', async () => {
    await mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    await mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys('Automation');
    await mboTalentHomePage.talent_Home_Page_Keyword_Search_Field.sendKeys(Key.ENTER);
    await mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.isDisplayed();
    await mboTalentHomePage.talent_Home_Page_Search_Keyword_Used.getText().then(async (skilltextused) => {
        logger.debug("Keyword used to search Oppurtunities is:===>" + skilltextused);
        expect(skilltextused).to.equal(inputProperties.get('SkillKeywordUsedToSearchTalent'));
    });
});
Then('Verify Keywords should search on fields such as Title, Job ID, Skills, Company, and Job Description', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_All_Oppurtunities_First_Oppurtunity));
    await mboTalentHomePage.talent_Home_Page_All_Oppurtunities_First_Oppurtunity.click();
    await util.waitForInvisibilityOfLoginPageSpinner();
    mboTalentHomePage.oppurtunities_link.click();
    mboTalentHomePage.oppurtunities_link.click();
    await browser.sleep(5000);
    // browser.actions().mouseMove(mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace).click().perform()

    //await browser.wait(until.elementToBeClickable(mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace));
    //mboTalentHomePage.talent_Home_Page_KeyBoard_BackSpace.click();
    util.waitForInvisibilityOfSpinner();
});

Then('Verify that Talent should have options to filter the opportunities.', async () => {
    await browser.wait(until.visibilityOf(mboTalentHomePage.tab_Alloppurtunities))
    await mboTalentHomePage.tab_Alloppurtunities.click();
    util.waitForInvisibilityOfSpinner();
    await mboTalentHomePage.talent_Home_Page_Filter_count.count().then(function (filtercount) {
        expect(filtercount).to.equal(5);
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates));
    await mboTalentHomePage.talent_Home_Page_Project_Dates.getText().then(function (projectdatefiltertext) {
        expect(projectdatefiltertext).to.eql('Project Dates');
        logger.debug("Project dates filter value displayed is:===>" + projectdatefiltertext);
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Client));
    await mboTalentHomePage.talent_Home_Page_Client.getText().then(function (clientfiltertext) {
        expect(clientfiltertext).to.eql('Client');
        logger.debug("Client filter value displayed is:===>" + clientfiltertext);
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    await mboTalentHomePage.talent_Home_Page_Bill_Rate.getText().then(function (billratefiltertext) {
        expect(billratefiltertext).to.eql('Bill Rate');
        logger.debug("Bill Rate filter value displayed is:===>" + billratefiltertext);
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Location));
    await mboTalentHomePage.talent_Home_Page_Location.getText().then(function (locationfiltertext) {
        expect(locationfiltertext).to.eql('Location');
        logger.debug("Location filter value displayed is:===>" + locationfiltertext);
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Skills));
    await mboTalentHomePage.talent_Home_Page_Skills.getText().then(function (skillsfiltertext) {
        expect(skillsfiltertext).to.eql('Skills');
        logger.debug("Skill filter value displayed is:===>" + skillsfiltertext);
    });



});

Then('Verify that The filter should have options Project Date,Client,Bill Rate,Location,Skills', async () => {
    await browser.sleep(3000);
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates));
    await mboTalentHomePage.talent_Home_Page_Project_Dates.click();
    await util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_Start_Date));
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_End_Date));
    await (mboTalentHomePage.talent_Home_Page_Project_Dates_Filter_Date_Picker).each(async (datepickerforstartandenddate) => {
        datepickerforstartandenddate.isDisplayed();
    });
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    await mboTalentHomePage.talent_Home_Page_Bill_Rate.click();
    await util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Min_Bill_Rate_Hour));
    await mboTalentHomePage.talent_Home_Page_Min_Bill_Rate.getAttribute('aria-valuenow').then(function (billratevalue) {
        expect(billratevalue).to.equal(0);
        logger.debug("Bill Rate Displayed is:===>" + billratevalue);
    });
    await browser.waitForAngularEnabled(true);
    await browser.sleep(5000);
    await browser.wait(until.elementToBeClickable(mboTalentHomePage.talent_Home_Page_Bill_Rate));
    await browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Bill_Rate);
    await browser.sleep(3000);
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Location));
    //await browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Location);
    //await browser.executeScript("arguments[0].click();", mboTalentHomePage.talent_Home_Page_Location);
    await mboTalentHomePage.talent_Home_Page_Location.click();
    await util.waitForInvisibilityOfSpinner();
    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Bill_Rate_Radius_Miles));
    mboTalentHomePage.talent_Home_Page_Radius_Miles_Slider.getAttribute('aria-orientation').then(function (sliderorientation) {
        expect(sliderorientation).to.contain('horizontal');
        logger.debug("Slider Orientation is:===>" + sliderorientation);
    });
    mboTalentHomePage.talent_Home_Page_Radius_Miles_Slider.getAttribute('aria-valuenow').then(function (milesvalue) {

        expect(milesvalue).to.equal(0);
        logger.debug("Default Radius Miles is:===>" + milesvalue);
    });

    await browser.wait(until.visibilityOf(mboTalentHomePage.talent_Home_Page_Remote_Work));
    mboTalentHomePage.talent_Home_Page_Remote_Work_Allowed_CheckBox.getAttribute('type').then(function (remoteworkallowedboxtype) {
        expect(remoteworkallowedboxtype).to.contain('checkbox');
        logger.debug("Remote work allowed box type is:===>" + remoteworkallowedboxtype);
    });

});




