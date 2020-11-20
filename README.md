## Overview
This is a travel application which pulls data from various APIs. 
The user enters their destination city and travel/return dates. They will then be provided with weather forecast, the length of their trip and a picture of the city they're travelling to. 
Firstly, the city entered is passed to the Geonames API and this then gets the longitude and latitude of the location. The longitude and latitude is then passed to the Weatherbit API, which uses this information to get an accurate weather forecast. The city entered is also passed to the Pixabay API which retrieves a picture relevant to the city. 

# Demo - Computer Screen
![Alt Text](TravelApp.gif)

# Demo - Mobile Screen
![](TravelAppMobile.gif)

# To run this app
* Clone, fork or download this repo
* In the terminal run:
  * npm i
  * npm run build-prod
  * npm run start
  * Then navigate to localhost:8090

# Dependencies
* HTML
* CSS
* Javascript
* Sass
* Node.js (Express)
* Webpack
* Babel
* Geonames API
* Weatherbit API 
* Pixabay API

# References
* http://www.geonames.org/export/web-services.html
* https://www.weatherbit.io
* https://pixabay.com/api/docs/



