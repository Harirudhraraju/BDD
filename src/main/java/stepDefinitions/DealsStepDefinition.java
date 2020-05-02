package stepDefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

//public class DealsStepDefinition {
//
//	static WebDriver driver;
//	static String Path = System.getProperty("user.dir");
//
//	@Given("^user is on free crm page$")
//	public void user_is_on_free_crm_page() {
//
//		System.setProperty("webdriver.chrome.silentOutput", "true");
//		System.setProperty("webdriver.chrome.driver", Path + "\\Drivers\\chromedriver.exe");
//		ChromeOptions options = new ChromeOptions();
//		options.addArguments("--incognito");
//		options.setPageLoadStrategy(PageLoadStrategy.EAGER);
//		driver = new ChromeDriver(options);
//		driver.manage().window().maximize();
//		driver.get("https://classic.crmpro.com/");
//	}
//
//	@Then("^the title of free crm page$")
//	public void the_title_of_free_crm_page() {
//		String title = driver.getTitle();
//		System.out.println("My Title is : " + title);
//		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
//	}
//
//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(DataTable credintials) throws InterruptedException {
//
//
//		List<List<String>> data=credintials.raw();
//
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		Thread.sleep(3000);
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//		Thread.sleep(3000);
//	}
//
//	@Then("^user clicks on button$")
//	public void user_clicks_on_button() {
//		driver.findElement(By.cssSelector("input[type='submit']")).click();
//	}
//
//	@Then("^user is on home page$")
//	public void user_is_on_home_page() {
//		String title = driver.getTitle();
//		System.out.println("Again My Title is : " + title);
//		Assert.assertEquals("CRMPRO", title);
//	}
//
//
//	@Then("^user moves deals and click new deal$")
//	public void user_moves_contacts_and_click_new_contact() throws InterruptedException  {
//
//		driver.switchTo().frame("mainpanel");
//		Actions actions=new Actions(driver);
//		actions.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
//		Thread.sleep(5000);
//		driver.findElement(By.xpath("//a[text()='New Deal']")).click();
//	}
//
//	@Then("^user enters deal details$")
//	public void user_enters_deal_details(DataTable dealdata) {
//
//		List<List<String>> dd=dealdata.raw();
//
//		driver.findElement(By.cssSelector(" input[id='title']")).sendKeys(dd.get(0).get(0));
//		driver.findElement(By.cssSelector(" input[id='amount']")).sendKeys(dd.get(0).get(1));
//		driver.findElement(By.cssSelector(" input[id='probability']")).sendKeys(dd.get(0).get(2));
//		driver.findElement(By.cssSelector(" input[id='commission']")).sendKeys(dd.get(0).get(3));
//		driver.findElement(By.xpath("//*[@id=\"prospectForm\"]/table/tbody/tr[1]/td/input[1]")).click();
//
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.quit();
//		System.out.println("close the browser");
//		System.out.println("TestScript successfully executed");
//
//	}
//}
