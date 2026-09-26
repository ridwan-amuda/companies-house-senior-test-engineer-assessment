@ui @login
Feature: User authentication

  As a DemoBlaze customer
  I want to authenticate with my account
  So that I can access the application as a registered user

  @smoke
  Scenario: Successful login with valid credentials
    Given the user is on the DemoBlaze homepage
    When the user logs in with valid credentials
    Then the user should be successfully logged in

    @negative @login
Scenario: Login is rejected with invalid credentials
  Given the user is on the DemoBlaze homepage
  When the user attempts to login with invalid credentials
  Then the login attempt should be rejected