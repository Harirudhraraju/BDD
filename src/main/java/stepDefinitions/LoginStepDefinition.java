package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDefinition {

	static WebDriver driver;
	static String Path=System.getProperty("user.dir");

	@Given("^user is on free crm page$")
	public void user_is_on_free_crm_page() {
		System.setProperty("webdriver.chrome.driver", Path+"\\Drivers\\chromedriver.exe");
		ChromeOptions options=new ChromeOptions();
		options.addArguments("--incognito");
		options.setPageLoadStrategy(PageLoadStrategy.EAGER);
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.get("https://classic.crmpro.com/");
	}

	@Then("^the title of free crm page$")
	public void the_title_of_free_crm_page(){
		String title=driver.getTitle();
		System.out.println("My Title is : "+title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);

	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(){
		driver.findElement(By.name("username")).sendKeys("batchautomation");
		driver.findElement(By.name("password")).sendKeys("Test@12345");
	}

	@Then("^user clicks on button$")
	public void user_clicks_on_button()  {
		driver.findElement(By.cssSelector("input[type='submit']")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title=driver.getTitle();
		System.out.println("Again My Title is : "+title);
		Assert.assertEquals("CRMPRO",title);
	}

	@Then("^close the browser$")
	public void close_the_browser(){
		driver.quit();
		System.out.println("close the browser");
	}

}
