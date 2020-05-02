$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals Feature",
  "description": "",
  "id": "free-crm-deals-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Free CRM Create Deal  Details Test",
  "description": "",
  "id": "free-crm-deals-feature;free-crm-create-deal--details-test",
  "type": "scenario",
  "keyword": "Scenario"
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
  "line": 8,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user moves deals and click new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 18
    },
    {
      "cells": [
        "Test Deal10",
        "1000",
        "50",
        "10"
      ],
      "line": 19
    },
    {
      "cells": [
        "Test Deal11",
        "2000",
        "60",
        "20"
      ],
      "line": 20
    },
    {
      "cells": [
        "Test Deal12",
        "3000",
        "70",
        "30"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMapStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "duration": 13864714389,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "duration": 190205778,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5289095901,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "duration": 1858849637,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 30799584,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_moves_contacts_and_click_new_contact()"
});
formatter.result({
  "duration": 15519530922,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 34858454335,
  "status": "passed"
});
formatter.match({
  "location": "DealsMapStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1042934154,
  "status": "passed"
});
});