Feature: Verifying Talent Module Functionalities for Invlaid Login Credentials
    @Regression @Talent @CP04
    Scenario Outline: Verify that the talent is not able to login using invalid credentials.
        Given  Application is launched in "Release" Environment
        When I am logged in as "Talent" using the "<userid>" and "<password>"
        Then Verify that message saying Invalid Username or Password is displayed.

        Examples:
            | userid | password |
            | agreen | Mbo.2012 |

  


