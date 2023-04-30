import { logFilterValues } from "./analytics_log_event.js";
/* JavaScript code for the weather app */

async function getWeather() {
  try {
    const location = document.getElementById("location").value;
    const pincode = document.getElementById("pincode").value;
    var unit = document.getElementById("Unit").value;
    let url;
    if (location.length === 0) {
      if (pincode.length === 0) {
        window.alert("Please enter a location or a pincode.");
        return;
      }
      url =
        "https://api.openweathermap.org/data/2.5/forecast?zip=" +
        pincode +
        "&units=" +
        unit +
        "&appid=4e8c42d2514b6fc0fa6c45dd18d3788f";
    } else {
      url =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        location +
        "&units=" +
        unit +
        "&appid=4e8c42d2514b6fc0fa6c45dd18d3788f";
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Display the weather information in the #weather div
    const weather = document.getElementById("weather");
    const src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    var html = `
      <img src="${src}" />
      <h1>${data.city.name}</h1>
      <h2>${data.list[0].dt_txt}</h2>
      <p>Temperature: ${data.list[0].main.temp}°C</p>
      <p>Humidity: ${data.list[0].main.humidity}%</p>
      <p>Wind Speed: ${data.list[0].wind.speed} m/s</p>
      <p>Feels Like: ${data.list[0].main.feels_like}°C</p>
      <p>Max Temp: ${data.list[0].main.temp_max}°C</p>
      <p>Min Temp: ${data.list[0].main.temp_min}°C</p>
      <p>Weather Condition: ${data.list[0].weather[0].description}</p>
    `;
    for (var i = 1; i < data.list.length; i += 8) {
      html += "<h2>Weather on " + data.list[i].dt_txt + " </h2>";
      html += "<p>Max Temp: " + data.list[i].main.temp_max + "  </p>";
      html += "<p>Min Temp: " + data.list[i].main.temp_min + "  </p>";
      html += "<p>Weather Condition: " + data.list[i].weather[0].description + "</p>";
    }
    weather.innerHTML = html

    // log events on firebase 
    logFilterValues({ location: data.city.name });
    
  } catch (error) {
    console.error("Error:", error);
    const weather = document.getElementById("weather");
    weather.innerHTML = `<p>Error: ${error.message}</p>`;
  }

  return data;
}

export { getWeather };
