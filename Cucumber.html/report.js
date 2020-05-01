$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals Feature",
  "description": "",
  "id": "free-crm-deals-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Introduce DataTable class Concept"
    }
  ],
  "line": 8,
  "name": "Free CRM Create Deal  Details Test",
  "description": "",
  "id": "free-crm-deals-feature;free-crm-create-deal--details-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user moves deals and click new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Test Deal1",
        "222",
        "11",
        "22"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "duration": 14472567162,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "duration": 177860962,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 8724626558,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "duration": 2416126961,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 118936377,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_contacts_and_click_new_contact()"
});
formatter.result({
  "duration": 15780836981,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 4763124495,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 810822828,
  "status": "passed"
});
});