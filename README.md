# springwood
Allowed users to enter a location to get the current weather conditions and forecast for that location.
Displayed the current temperature, weather conditions (e.g. cloudy, sunny, rainy), and any other relevant weather data (e.g. humidity, wind speed) for the specified location
Displayed the forecasted weather for the next 5 days, including the high and low temperature for each day
Allow users to switch between Celsius and Fahrenheit units for the temperature display taking unit input.
The application is built using HTML, CSS, and JavaScript.
The weather data is retrieved from OpenWeatherMap weather API.
The user interface is intuitive and easy to use, with clear feedback when the weather data is loading or when an error occurs.


file Strcture:
index.html : took user inputs.
app.js: fetched data from open weathermap API and displayed it. constructed log events.
analytics_log_event.js: logged events to firebase analytics by writing SDKand intialising firebase.


in last submission i logged following event   
**firebaseAnalytics.logEvent(FirebaseAnalytics.Event.SEARCH_BUTTON_CLICKED) {
param(FirebaseAnalytics.Param.{filter1 name}, {filter1 value})
param(FirebaseAnalytics.Param.{filter 2 name},{filter2 value})
}** and were advised to log more events. 
for this event log i didn't feel any nessecity of signup page(were not mentioned in assignment) so i logged other events like 

**function logWeatherEvents({ city, temperature, humidity, weather }) {
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  logEvent(analytics, "weather_search", { city: city });
if (temperature) {
    logEvent(analytics, "temperature_search", { city: city, temperature: temperature });
  }
if (humidity) {
    logEvent(analytics, "humidity_search", { city: city, humidity: humidity });
  }
if (weather) {
    logEvent(analytics, "weather_search_details", { city: city, weather: weather });
  }
console.log("Weather events logged");
}**

** logWeatherEvents({ city: data.city.name , temperature: data.list[0].main.temp, humidity: data.list[0].main.humidity, weather:data.list[0].weather[0].description, });**
exported logWeatherEvents from app.js to analytics_log_event.js and logged to firebase analytics.

click on the https://virendra-jpg.github.io/springwood/ to see website live on internet.
