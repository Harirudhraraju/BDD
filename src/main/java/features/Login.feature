Feature: Free CRM Test Feature 


#This is---> Without Examples Keyword : Using Scenario

#Scenario: Free CRM Login Test
#
#Given user is on free crm page
#Then the title of free crm page
#Then user enters "batchautomation" and "Test@12345"
#Then user clicks on button 
#Then user is on home page
#Then close the browser



Scenario Outline: Free CRM Login Test

Given user is on free crm page
Then the title of free crm page
Then user enters "<username>" and "<password>"
Then user clicks on button 
Then user is on home page
Then close the browser

Examples:
|      username           |   password   |
|    batchautomation      |   Test@12345 |
|        Tom              |   Test@12345 |

		
		
		
		
		
		
