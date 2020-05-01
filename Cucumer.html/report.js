$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Test Feature",
  "description": "",
  "id": "free-crm-test-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#This is---\u003e Without Examples Keyword : Using Scenario"
    },
    {
      "line": 6,
      "value": "#Scenario: Free CRM Login Test"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#Given user is on free crm page"
    },
    {
      "line": 9,
      "value": "#Then the title of free crm page"
    },
    {
      "line": 10,
      "value": "#Then user enters \"batchautomation\" and \"Test@12345\""
    },
    {
      "line": 11,
      "value": "#Then user clicks on button"
    },
    {
      "line": 12,
      "value": "#Then user is on home page"
    },
    {
      "line": 13,
      "value": "#Then close the browser"
    }
  ],
  "line": 17,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-test-feature;free-crm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "free-crm-test-feature;free-crm-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "free-crm-test-feature;free-crm-login-test;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 28,
      "id": "free-crm-test-feature;free-crm-login-test;;2"
    },
    {
      "cells": [
        "Tom",
        "Test@12345"
      ],
      "line": 29,
      "id": "free-crm-test-feature;free-crm-login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-test-feature;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "duration": 17421625711,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "duration": 156889939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 8047598608,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "duration": 1811642218,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 39674074,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1156615953,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-test-feature;free-crm-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user enters \"Tom\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "duration": 12098453698,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "duration": 174329979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 7923303301,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "duration": 7627291939,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 153947540,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:57)\r\n\tat ✽.Then user is on home page(src/main/java/features/Login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});