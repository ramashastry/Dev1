import { by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class MBO_TalentHomePage {
    
    oppurtunities_link: ElementFinder;
    tab_Shared_With_Me: ElementFinder;
    tab_Shown_Interest: ElementFinder;
    tab_Bokmarked: ElementFinder;
    tab_Saved_Search_Results: ElementFinder;
    tab_Alloppurtunities: ElementFinder;
    mbo_Partners_logo_Talent_Home_Page: ElementFinder;
    talent_Home_Page_Opp_Search_Text_Box: ElementFinder;
    talent_Home_Page_Opp_List_Search_Icon: ElementFinder;
    talent_Home_Page_My_Account: ElementFinder;
    talent_Home_Page_Tab_Count: ElementArrayFinder;
    talent_Home_Page_Sort_By: ElementFinder;
    talent_Home_Page_Oppurtunity_Card: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Card_Count: ElementFinder;
    talent_Home_Page_Oppurtunity_Name: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Posted_Company_logo: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Posted_Date: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Posted_location: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Bill_Rate: ElementArrayFinder;
    talent_Home_Page_Oppurtunity_Start_Date: ElementArrayFinder;
    talent_Home_Page_PreLoadingAppContainer: ElementFinder;
    talent_Home_Page_Spinner: ElementFinder;
    talent_Home_Page_Footer: ElementFinder;
    talent_Home_Page_Copyright_Signature:ElementFinder;
    talent_Home_Page_Privacy_Policy_link: ElementFinder;
    talent_Home_Page_Terms_Of_Use_link: ElementFinder;
    talent_Home_Page_Keyword_Search_Field: ElementFinder;
    talent_Home_Page_Search_Keyword_Used: ElementFinder;
    talent_Home_Page_All_Oppurtunities_First_Oppurtunity: ElementFinder;
    talent_Home_Page_KeyBoard_BackSpace:ElementFinder;
    talent_Home_Page_Project_Dates: ElementFinder;
    talent_Home_Page_Filter_count: ElementArrayFinder;
    talent_Home_Page_Client: ElementFinder;
    talent_Home_Page_Bill_Rate: ElementFinder;
    talent_Home_Page_Location: ElementFinder;
    talent_Home_Page_Skills: ElementFinder;
    talent_Home_Page_Project_Dates_Filter_Start_Date: ElementFinder;
    talent_Home_Page_Project_Dates_Filter_End_Date: ElementFinder;
    talent_Home_Page_Project_Dates_Filter_Date_Picker: ElementArrayFinder;
    talent_Home_Page_Min_Bill_Rate: ElementFinder;
    talent_Home_Page_Min_Bill_Rate_Hour: ElementFinder;
    talent_Home_Page_Bill_Rate_Radius_Miles: ElementFinder;
    talent_Home_Page_Radius_Miles_Slider: ElementFinder;
    talent_Home_Page_Remote_Work: ElementFinder;
    talent_Home_Page_Remote_Work_Allowed_CheckBox: ElementFinder;
    



    constructor() {
        this.oppurtunities_link = element(by.xpath("//*[@id='opportunitiesLink']"));
        this.tab_Shared_With_Me = element(by.xpath("//*[contains(@id,'mat-tab-label-0-0')]"));
        this.tab_Shown_Interest = element(by.xpath("//*[contains(@id,'mat-tab-label-0-1')]"))
        this.tab_Bokmarked = element(by.xpath("//*[contains(@id,'mat-tab-label-0-2')]"));
        this.tab_Saved_Search_Results = element(by.xpath("//*[contains(@id,'mat-tab-label-0-3')]"));
        this.tab_Alloppurtunities = element(by.xpath("//*[contains(@id,'mat-tab-label-0-4')]"));
        this.mbo_Partners_logo_Talent_Home_Page = element(by.xpath("//*[@id='topNavLogo']"));
        this.talent_Home_Page_Opp_Search_Text_Box = element(by.xpath("//*[@id='oppListSearchInput']"));
        this.talent_Home_Page_Opp_List_Search_Icon = element(by.xpath("//*[@id='oppListSearchInput']/..//following-sibling::div/mat-icon[@id='oppListSearchIcon']"));
        this.talent_Home_Page_My_Account= element(by.xpath("//*[@id='myAccountLink']"));
        this.talent_Home_Page_Tab_Count= element.all(by.xpath("//*[contains(@id,'mat-tab-label-')]"));
        this.talent_Home_Page_Sort_By= element(by.xpath("//button[contains(.,'Sort')]"));
        this.talent_Home_Page_Oppurtunity_Card= element.all(by.xpath("//*[contains(@class,'row opportunity-list-item')]"));
        this.talent_Home_Page_Oppurtunity_Name= element.all(by.xpath("//*[contains(@id,'opportunity-heading')]"));
        this.talent_Home_Page_Oppurtunity_Card_Count= element(by.xpath("//*[contains(@id,'opportunity-heading')]/parent::div/preceding::h3[contains(@class,'talent-page-headin')]"));
        this.talent_Home_Page_Oppurtunity_Posted_Company_logo=element.all(by.xpath("//*[contains(@id,'postedDate')]/../div/img[contains(@class,'company-logo')]"))
        this.talent_Home_Page_Oppurtunity_Posted_Date= element.all(by.xpath("//*[contains(@id,'postedDate')]"));
        this.talent_Home_Page_Oppurtunity_Posted_location= element.all(by.xpath("//*[contains(@id,'locationData-')]"));
        this.talent_Home_Page_Oppurtunity_Bill_Rate= element.all(by.xpath("//*[contains(@id,'billRateRange-')]"));
        this.talent_Home_Page_Oppurtunity_Start_Date= element.all(by.xpath("//*[contains(@id,'startEndDate')]/span[2][contains(@id,'startDate')]"));
        this.talent_Home_Page_PreLoadingAppContainer= element(by.xpath("//div[@id='preloadingAppContainer']"));
        this.talent_Home_Page_Spinner= element(by.xpath("//*[@class='opportunity-results-container ng-star-inserted']/div//*[name()='svg']"));
        this.talent_Home_Page_Footer= element(by.xpath("//footer[@id='footer']"));
        this.talent_Home_Page_Copyright_Signature= element(by.xpath("//footer[@id='footer']//*[@id='mboPartnersCopyrightText']"));
        this.talent_Home_Page_Privacy_Policy_link= element(by.xpath("//*[@id='footerNavLink_0']"));       
        this.talent_Home_Page_Terms_Of_Use_link= element(by.xpath("//*[@id='footerNavLink_1']"));
        this.talent_Home_Page_Keyword_Search_Field= element(by.xpath("//*[@id='oppListSearchInput']"));
        this.talent_Home_Page_Search_Keyword_Used= element(by.xpath("//span[.='Showing results for keyword search:']/following-sibling::span"));
        this.talent_Home_Page_All_Oppurtunities_First_Oppurtunity= element(by.xpath("//*[@id='opportunity-heading0']"));
        this.talent_Home_Page_KeyBoard_BackSpace= element(by.xpath("//mat-icon[.='keyboard_backspace']"));
        this.talent_Home_Page_Project_Dates= element(by.xpath("//*[@id='mat-expansion-panel-header-3']"));
        this.talent_Home_Page_Filter_count= element.all(by.xpath("//*[contains(@id,'mat-expansion-panel-header-')]"));
        this.talent_Home_Page_Client= element(by.xpath("//*[@id='mat-expansion-panel-header-4']"));
        this.talent_Home_Page_Bill_Rate= element(by.xpath("//*[@id='mat-expansion-panel-header-0']"));
        this.talent_Home_Page_Location= element(by.xpath("//*[@id='mat-expansion-panel-header-1']"));
        this.talent_Home_Page_Skills= element(by.xpath("//*[@id='mat-expansion-panel-header-2']"));
        this.talent_Home_Page_Project_Dates_Filter_Start_Date= element(by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//label[contains(.,'Start Date')]"));
        this.talent_Home_Page_Project_Dates_Filter_End_Date= element(by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//label[contains(.,'End Date')]"));
        this.talent_Home_Page_Project_Dates_Filter_Date_Picker= element.all(by.xpath("//*[@id='mat-expansion-panel-header-3']/ancestor::opportunity-filters//mat-icon[contains(.,'calendar_today')]"));
        this.talent_Home_Page_Min_Bill_Rate= element(by.xpath("//*[@id='minimumPayRate']"));
            this.talent_Home_Page_Min_Bill_Rate_Hour= element(by.xpath("//*[@id='mat-expansion-panel-header-10']//following::div[@class='row radius-miles']"));
            this.talent_Home_Page_Bill_Rate_Radius_Miles= element(by.xpath("(//*[@id='cdk-accordion-child-11']//following::div[@class='row radius-miles'])[1]"));
        this.talent_Home_Page_Radius_Miles_Slider= element(by.xpath("//*[@id='locationDistance']"));
        this.talent_Home_Page_Remote_Work= element(by.xpath("(//*[@id='cdk-accordion-child-11']//following::div[@class='row radius-miles'])[2]"));
        this.talent_Home_Page_Remote_Work_Allowed_CheckBox= element(by.xpath("//*[@id='remote-input']"));
    }

}