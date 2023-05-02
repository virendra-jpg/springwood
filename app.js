import { logFilterValues } from "./analytics_log_event.js";
/* JavaScript code for the weather app */

async function getWeather() {
  try {
    const location = document.getElementById("location").value;
    const pincode = document.getElementById("pincode").value;
    var unit = document.getElementById("Unit").value;

    //writing if else loop to show choosen
    var units;
    if(unit === "metric"){
       units = "°C";
    }
    if(unit === "imperial" ){
       units = "°F";
    }
    if(unit === "standard"){
      units = "K";
    }
    //setting url for fetching data
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
      alert("Warning: Please Enter the correct Location");
    }

    const data = await response.json();
    console.log(data);

    // Display the weather information in the #weather div
    const weather = document.getElementById("weather");
    const src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    var html = `




    <section class="vh-100" >
  <div class="container py-5 h-100">

    <div class="row d-flex justify-content-center align-items-center h-100" style="color: #282828;">
      <div class="col-md-9 col-lg-7 col-xl-5">

        <div class="card mb-4 gradient-custom" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo1" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators mb-0">
                <li data-target="#demo1" data-slide-to="0" class="active"></li>
                <li data-target="#demo1" data-slide-to="1"></li>
                <li data-target="#demo1" data-slide-to="2"></li>
              </ul>
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-between mb-4 pb-2">
                    <div>
                      <p class="text-muted mb-0">${data.list[0].dt_txt} </p>
                      <h2 class="display-2"><strong>${data.list[0].main.temp}${units} </strong></h2>
                      <p class="text-muted mb-0">${data.city.name}</p>
                      <p class="text-muted mb-0">Feels like :${data.list[0].main.feels_like}${units}</p>
                      <p class="text-muted mb-0">Humidity :${data.list[0].main.humidity}%</p>
                      <p class="text-muted mb-0">Wind: ${data.list[0].wind.speed}m/s</p>

                    </div>
                    <div>
                      <img src="${src}"
                        width="150px">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="card mb-4" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo2" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators mb-0">
                <li data-target="#demo2" data-slide-to="0"></li>
                <li data-target="#demo2" data-slide-to="1" class="active"></li>
                <li data-target="#demo2" data-slide-to="2"></li>
              </ul>
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[1].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[1].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[1].dt_txt.slice(11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[3].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[3].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[3].dt_txt.slice(11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[4].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[4].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[4].dt_txt.slice(11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[5].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[5].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[5].dt_txt.slice(11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[6].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[6].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[6].dt_txt.slice(11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[7].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[7].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[7].dt_txt.slice( 11,16)}</strong></p>
                    </div>
                    <div class="flex-column">
                    <p class="small"><strong>${data.list[8].main.temp}${units}</strong></p>
                    <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png"></i>
                    <p class="small"><strong>${data.list[8].weather[0].description}</strong></p>

                    <p class="mb-0"><strong>${data.list[8].dt_txt.slice(11,16)}</strong></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <h2>Forecast for next 4 days</h2>
        <div class="card" style="border-radius: 25px;">
          <div class="card-body p-4">

            <div id="demo3" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ul class="carousel-indicators mb-0">
                <li data-target="#demo3" data-slide-to="0"></li>
                <li data-target="#demo3" data-slide-to="1"></li>
                <li data-target="#demo3" data-slide-to="2" class="active"></li>
              </ul>
              <!-- Carousel inner -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                    <div class="flex-column">
                      <p class="small"><strong>max ${data.list[9].main.temp_max}${units}</strong></p>
                      <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png"></i>
                      <p class="small"><strong>${data.list[9].weather[0].description}</strong></p>
                      <p class="small"><strong>min ${data.list[9].main.temp_min}${units}</strong></p>
                      <p class="mb-0"><strong>${data.list[9].dt_txt.slice( 0,10)}</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>${data.list[17].main.temp_max}${units}</strong></p>
                      <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png"></i>
                      <p class="small"><strong>${data.list[17].weather[0].description}</strong></p>
                      <p class="small"><strong>${data.list[17].main.temp_min}${units}</strong></p>
                      <p class="mb-0"><strong>${data.list[17].dt_txt.slice( 0,10)}</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>${data.list[25].main.temp_max}${units}</strong></p>
                      <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png"></i>
                      <p class="small"><strong>${data.list[25].weather[0].description}</strong></p>
                      <p class="small"><strong>${data.list[25].main.temp_min}${units}</strong></p>
                      <p class="mb-0"><strong>${data.list[25].dt_txt.slice(0,10)}</strong></p>
                    </div>
                    <div class="flex-column">
                      <p class="small"><strong>${data.list[33].main.temp_max}${units}</strong></p>
                      <i class=" fa-2x mb-3" style="color: #ddd;"><img src="https://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png"></i>
                      <p class="small"><strong>${data.list[33].weather[0].description}</strong></p>
                      <p class="small"><strong>${data.list[33].main.temp_min}${units}</strong></p>
                      <p class="mb-0"><strong>${data.list[33].dt_txt.slice(0,10)}</strong></p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>



    `;

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
