$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Test Feature",
  "description": "",
  "id": "free-crm-test-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-test-feature;free-crm-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on free crm page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the title of free crm page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_free_crm_page()"
});
formatter.result({
  "duration": 27450324902,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_title_of_free_crm_page()"
});
formatter.result({
  "duration": 318484428,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 3390928938,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_button()"
});
formatter.result({
  "duration": 2236320335,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 438530117,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1312928104,
  "status": "passed"
});
});