
Feature: Verifying Talent Module Functionalities

    @Regression @Talent @TC01
    Scenario Outline: Verify talent is able to see 5 tabs in landing page

        Given  Application is launched in "Release" Environment
        When I am logged in as "Talent" using the "<userid>" and "<password>"
        And I am in "Talent" landing page
        Then I will see "5" tabs present
        And  Those Tabs are "Shared With Me","Shown Interest", "Bookmarked", "Saved Search Results","All Opportunities"
        And I will see sort by option available with in every tab

        Examples:
            | userid | password |
            | agreen | Mbo.2011 |
            

    @Regression @Talent @TC02 @UST
    Scenario: Verify talent is able to see shared opportunities under 'Shared With Me' tab
    #     # Given  Application is launched in "Release" Environment
    #     # When I am logged in as "Talent" using the "<userid>" and "<password>"
    #     # And I am in "Talent" landing page
    #     # Then I will see "5" tabs present
    #     # And  Those Tabs are "Shared With Me","Shown Interest", "Bookmarked", "Saved Search Results","All Opportunities"
    #     # And I will see sort by option available with in every tab
        When I click on "Shared With Me" tab
        Then I will see total count of opportunity cards shared with me
        And I will see count of opportunities
        And I will see the Opportunity Name
        And I will see the Company logo
        And I will see the Posted date of Opportunity in Month DD YYYY
        And I will see Location, Bill Rate, Start date and End date

    #     Examples:
    #         | userid | password |
    #         

#     @Regression @Talent @CP01 @CP06
#     Scenario Outline: Verify that the talent is able to log in
#         Given  Application is launched in "Release" Environment
#         When I am logged in as "Talent" using the "<userid>" and "<password>"
#         And I am in "Talent" landing page
#         Then I will see "5" tabs present
#         And  Those Tabs are "Shared With Me","Shown Interest", "Bookmarked", "Saved Search Results","All Opportunities"
#         And I will see sort by option available with in every tab

#         Examples:
#             | userid | password |
#           

    @Regression @Talent @CP02
    Scenario: Verify that the MBO Partners logo is present, and it navigates to the opportunity listing page
        And I will see the Company logo
        And I am in "Talent" landing page


    @Regression @Talent  @CP03
    Scenario: Verify that the footer is present and have the MBO Copyright signature, Privacy Policy and Terms of Use.
        And The footer should be present on the bottom of the page
        And The footer should contain the MBO Copyright signature with the current year
        And The footer should contain a Privacy Policy hyperlink and it should navigate to the right page
        And The footer should contain Terms of Use hyperlink and it should navigate to the right page

    @Regression @Talent @CP07
    Scenario: Verify that there is an option to filter the opportunities listed.
        And Verify that Talent should have options to filter the opportunities.
        And Verify that The filter should have options Project Date,Client,Bill Rate,Location,Skills

# # @Regression @Talent @TC05 @CP05
# # Scenario: Verify that there is an option to search the opportunities is present(keyword search)
# #     And Verify that there is a keyword search field
# #     And Verify that the opportunities should be filtered based on the keyword entered
# # And Verify Keywords should search on fields such as Title, Job ID, Skills, Company, and Job Description






