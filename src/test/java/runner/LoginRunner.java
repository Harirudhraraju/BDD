package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\features\\Contacts.feature",
		glue = {"stepDefinitions"},
		format = {"pretty","html:Cucumber.html"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class LoginRunner {

}
