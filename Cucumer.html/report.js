$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create Contacts  Details Test",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves contacts and click new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "company"
      ],
      "line": 16,
      "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345",
        "rhr123",
        "rhr321",
        "imedx"
      ],
      "line": 17,
      "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;;2"
    },
    {
      "cells": [
        "Tom",
        "Test@12345",
        "rhr321",
        "rhr123",
        "imedxx"
      ],
      "line": 18,
      "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create Contacts  Details Test",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves contacts and click new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"rhr123\" and \"rhr321\" and \"imedx\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "status": "skipped"
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
  "location": "ContactsStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_moves_contacts_and_click_new_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rhr123",
      "offset": 29
    },
    {
      "val": "rhr321",
      "offset": 42
    },
    {
      "val": "imedx",
      "offset": 55
    }
  ],
  "location": "ContactsStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create Contacts  Details Test",
  "description": "",
  "id": "free-crm-contacts-feature;free-crm-create-contacts--details-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Tom\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves contacts and click new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"rhr321\" and \"rhr123\" and \"imedxx\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "status": "skipped"
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
  "location": "ContactsStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_moves_contacts_and_click_new_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "rhr321",
      "offset": 29
    },
    {
      "val": "rhr123",
      "offset": 42
    },
    {
      "val": "imedxx",
      "offset": 55
    }
  ],
  "location": "ContactsStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});