package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\features\\Tagging.feature",
		glue = {"stepDefinitions"},
		format = {"pretty","html:Cucumber.html"},
		monochrome = true,
		strict = true,
		dryRun = true,
		tags = {"~@SmokeTest" , "~@RegressionTest","~@End2End"}
		)

public class TaggingRunner {
	
}
// ORed :tags = {"@SmokeTest,@RegressionTest"}-- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed :tags = {"@SmokeTest,@RegressionTest"}-- execute all tests tagged as @SmokeTest AND @RegressionTest

//~  : tags = {"~@SmokeTest" , "~@RegressionTest","~@End2End"}---ignore all test 