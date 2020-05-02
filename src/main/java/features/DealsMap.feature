Feature: Free CRM Deals Feature


Scenario: Free CRM Create Deal  Details Test
Given user is on free crm page
Then the title of free crm page

Then user enters username and password 
|    username      |     password   |
| batchautomation  |   Test@12345   |   


Then user clicks on button 
Then user is on home page
Then user moves deals and click new deal
Then user enters deal details 

|    Title        |  amount|  probability    | commission  |
|    Test Deal10  |   1000 |    50           |   10        |
|    Test Deal11  |   2000 |    60           |   20        |
|    Test Deal12  |   3000 |    70           |   30        |
Then close the browser
