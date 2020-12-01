"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MBO_TalentHomePage = void 0;
const protractor_1 = require("protractor");
class MBO_TalentHomePage {
    constructor() {
        this.oppurtunities_link = protractor_1.element(protractor_1.by.xpath("//*[@id='opportunitiesLink']"));
        this.tab_Shared_With_Me = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-0-0')]"));
        this.tab_Shown_Interest = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-0-1')]"));
        this.tab_Bokmarked = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-0-2')]"));
        this.tab_Saved_Search_Results = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-0-3')]"));
        this.tab_Alloppurtunities = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-0-4')]"));
        this.mbo_Partners_logo_Talent_Home_Page = protractor_1.element(protractor_1.by.xpath("//*[@id='topNavLogo']"));
        this.talent_Home_Page_Opp_Search_Text_Box = protractor_1.element(protractor_1.by.xpath("//*[@id='oppListSearchInput']"));
        this.talent_Home_Page_Opp_List_Search_Icon = protractor_1.element(protractor_1.by.xpath("//*[@id='oppListSearchInput']/..//following-sibling::div/mat-icon[@id='oppListSearchIcon']"));
        this.talent_Home_Page_My_Account = protractor_1.element(protractor_1.by.xpath("//*[@id='myAccountLink']"));
        this.talent_Home_Page_Tab_Count = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'mat-tab-label-')]"));
        this.talent_Home_Page_Sort_By = protractor_1.element(protractor_1.by.xpath("//button[contains(.,'Sort')]"));
        this.talent_Home_Page_Oppurtunity_Card = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@class,'row opportunity-list-item')]"));
        this.talent_Home_Page_Oppurtunity_Name = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'opportunity-heading')]"));
        this.talent_Home_Page_Oppurtunity_Card_Count = protractor_1.element(protractor_1.by.xpath("//*[contains(@id,'opportunity-heading')]/parent::div/preceding::h3[contains(@class,'talent-page-headin')]"));
        this.talent_Home_Page_Oppurtunity_Posted_Company_logo = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'postedDate')]/../div/img[contains(@class,'company-logo')]"));
        this.talent_Home_Page_Oppurtunity_Posted_Date = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'postedDate')]"));
        this.talent_Home_Page_Oppurtunity_Posted_location = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'locationData-')]"));
        this.talent_Home_Page_Oppurtunity_Bill_Rate = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'billRateRange-')]"));
        this.talent_Home_Page_Oppurtunity_Start_Date = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'startEndDate')]/span[2][contains(@id,'startDate')]"));
        this.talent_Home_Page_PreLoadingAppContainer = protractor_1.element(protractor_1.by.xpath("//div[@id='preloadingAppContainer']"));
        this.talent_Home_Page_Spinner = protractor_1.element(protractor_1.by.xpath("//*[@class='opportunity-results-container ng-star-inserted']/div//*[name()='svg']"));
        this.talent_Home_Page_Footer = protractor_1.element(protractor_1.by.xpath("//footer[@id='footer']"));
        this.talent_Home_Page_Copyright_Signature = protractor_1.element(protractor_1.by.xpath("//footer[@id='footer']//*[@id='mboPartnersCopyrightText']"));
        this.talent_Home_Page_Privacy_Policy_link = protractor_1.element(protractor_1.by.xpath("//*[@id='footerNavLink_0']"));
        this.talent_Home_Page_Terms_Of_Use_link = protractor_1.element(protractor_1.by.xpath("//*[@id='footerNavLink_1']"));
        this.talent_Home_Page_Keyword_Search_Field = protractor_1.element(protractor_1.by.xpath("//*[@id='oppListSearchInput']"));
        this.talent_Home_Page_Search_Keyword_Used = protractor_1.element(protractor_1.by.xpath("//span[.='Showing results for keyword search:']/following-sibling::span"));
        this.talent_Home_Page_All_Oppurtunities_First_Oppurtunity = protractor_1.element(protractor_1.by.xpath("//*[@id='opportunity-heading0']"));
        this.talent_Home_Page_KeyBoard_BackSpace = protractor_1.element(protractor_1.by.xpath("//mat-icon[.='keyboard_backspace']"));
        this.talent_Home_Page_Project_Dates = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-3']"));
        this.talent_Home_Page_Filter_count = protractor_1.element.all(protractor_1.by.xpath("//*[contains(@id,'mat-expansion-panel-header-')]"));
        this.talent_Home_Page_Client = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-4']"));
        this.talent_Home_Page_Bill_Rate = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-0']"));
        this.talent_Home_Page_Location = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-1']"));
        this.talent_Home_Page_Skills = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-2']"));
        this.talent_Home_Page_Project_Dates_Filter_Start_Date = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//label[contains(.,'Start Date')]"));
        this.talent_Home_Page_Project_Dates_Filter_End_Date = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//label[contains(.,'End Date')]"));
        this.talent_Home_Page_Project_Dates_Filter_Date_Picker = protractor_1.element.all(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//mat-icon[contains(.,'calendar_today')]"));
        this.talent_Home_Page_Min_Bill_Rate = protractor_1.element(protractor_1.by.xpath("//*[@id='minimumPayRate']"));
        this.talent_Home_Page_Min_Bill_Rate_Hour = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-expansion-panel-header-10']//following::div[@class='row radius-miles']"));
        this.talent_Home_Page_Bill_Rate_Radius_Miles = protractor_1.element(protractor_1.by.xpath("(//*[@id='cdk-accordion-child-11']//following::div[@class='row radius-miles'])[1]"));
        this.talent_Home_Page_Radius_Miles_Slider = protractor_1.element(protractor_1.by.xpath("//*[@id='locationDistance']"));
        this.talent_Home_Page_Remote_Work = protractor_1.element(protractor_1.by.xpath("(//*[@id='cdk-accordion-child-11']//following::div[@class='row radius-miles'])[2]"));
        this.talent_Home_Page_Remote_Work_Allowed_CheckBox = protractor_1.element(protractor_1.by.xpath("//*[@id='remote-input']"));
        this.talent_Home_Page_Logout_link = protractor_1.element(protractor_1.by.xpath("//*[@id='logoutLink']"));
    }
}
exports.MBO_TalentHomePage = MBO_TalentHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTUJPX1RhbGVudEhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTUJPX1RhbGVudEhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLGtCQUFrQjtJQW9EM0I7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLHdCQUF3QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLHFDQUFxQyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0RkFBNEYsQ0FBQyxDQUFDLENB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