import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtdrw0Z_XPZJEl5iTbE2G0nV0Ge0XbeKw",
  authDomain: "springwood-422ed.firebaseapp.com",
  projectId: "springwood-422ed",
  storageBucket: "springwood-422ed.appspot.com",
  messagingSenderId: "737466387161",
  appId: "1:737466387161:web:115db22ff56a1edc180cc8",
  measurementId: "G-KTS0MQQPQY"
};

function logWeatherEvents({ city, temperature, humidity, weather }) {
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
}

export { logWeatherEvents };
