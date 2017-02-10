# OscrApp

##Inspiration behind the application
This app was designed for the city of San Francisco. There is a cash refund value for all bottle and cans.The homeless popluation uses that cash refund value as a source of income. What this means is that the trash cans are dumped out and trash is strewn across sidewalks. It is a problem with no easy solutions. 

OSCR, named after Oscar the Grouch, is a simple location reporting application that depends on crowdsourced data. If enough data is gathered, trends may be spotted. For example, the data could be used by food kitchens to more effectively distribute donations and food. Or used in city council meetings to demonstrate to better target street cleaning. 

##Dependicies
The front-end uses bower and the back-end uses npm.

**Front-end:** navigate to ```/client/lib```, where there is a bower.json and enter ```bower install``` from your terminal
**Back-end:**  navigate to server folder, where there is a package.json and enter ```npm install``` from your terminal

##Google Maps API
You must enter your own google maps api key on ```line 16``` of the ```index.html``` file

You can be get one by going [here](https://developers.google.com/maps/documentation/javascript/get-api-key#key).
Once you get one, simply remove ```YOUR_APIKEY``` in the ```index.html``` file and paste in yours.

##Notes about features
1. You can see how many times the address has been reported on the 'No. of times reported' line within the hub. 
2. You can also claim the address by clicking where it says 'click me'

##Contribution Wishlist
1. Pop-ups on the google maps markers that show more details about the locations
2. Better centering of ```divs``` across the app.

##Notes
This solo project was conceptualized, designed and implemented over the course of two days at Hack Reactor. 
