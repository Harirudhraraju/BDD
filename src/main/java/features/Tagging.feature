@FunctionalTest
Feature: Free CRM Application Testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and correct password 
Given This is valid test

@RegressionTest
Scenario: Login with incorrect username and correct password 
Given This is invalid test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case 

@SmokeTest  @RegressionTest
Scenario: Create a deal
Given This is a deal test case 

@RegressionTest
Scenario: Create a Tasks
Given This is a task test case

@SmokeTest
Scenario: Create a Cases
Given This is a cases test case

@SmokeTest @RegressionTest
Scenario: Verify Left Panel links
Given cliking on left panel links 


@SmokeTest
Scenario: Search a Deal
Given This is a search deal  test

@SmokeTest
Scenario: Search a Contact
Given This is a search contact  test

@SmokeTest @RegressionTest
Scenario: Search a Case
Given This is a search case test

@SmokeTest @RegressionTest
Scenario: Search a Task
Given This is a search task  test


@SmokeTest @End2End
Scenario: Search a Call
Given This is a search call  test

@SmokeTest @End2End
Scenario: Search a Email
Given This is a search email  test

@SmokeTest @End2End
Scenario: Search a Docs
Given This is a search docs  test

@SmokeTest @End2End
Scenario: Search a Forms
Given This is a search forms  test

@End2End
Scenario: Validate a Reports
Given This is a report  test

@End2End
Scenario: Application Logout
Given This is a logout  test

Scenario: Browser closed
Given This is a close the browser test




