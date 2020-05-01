package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/features/Login.feature",
		glue = {"stepDefinitions"},
		format = {"pretty","html:Cucumer.html"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class LoginRunner {

}
