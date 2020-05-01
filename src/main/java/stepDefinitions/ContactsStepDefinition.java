package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

//public class ContactsStepDefinition { 
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
//	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_username_and_password(String un,String pwd) throws InterruptedException {
//		driver.findElement(By.name("username")).sendKeys(un);
//		Thread.sleep(3000);
//		driver.findElement(By.name("password")).sendKeys(pwd);
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
//	@Then("^user moves contacts and click new contact$")
//	public void user_moves_contacts_and_click_new_contact() throws InterruptedException  {
//
//		driver.switchTo().frame("mainpanel");
//		Actions actions=new Actions(driver);
//		actions.moveToElement(driver.findElement(By.xpath("//a[text()='Contacts']"))).build().perform();
//		Thread.sleep(5000);
//		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
//	}
//
//	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_contact_details_and_and(String firstname, String lastname, String company){
//		
//		driver.findElement(By.cssSelector("#first_name")).sendKeys(firstname);
//		driver.findElement(By.cssSelector("#surname")).sendKeys(lastname);
//		driver.findElement(By.cssSelector("#company_position")).sendKeys(company);
//		driver.findElement(By.xpath("//*[@id=\"contactForm\"]/table/tbody/tr[1]/td/input[2]")).click();
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.quit();
//		System.out.println("close the browser");
//	}
//
//}
