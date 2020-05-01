package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/features/Contacts.feature",
		glue = "stepDefinitions/ContactsStepDefinition",
		format = {"pretty","html:Cucumer.html"},
		monochrome = true,
		strict = true,
		dryRun = true
		)

public class ContactsRunner {

}
