const LoadData = () => {
    let URL =
      "https://api.weatherapi.com/v1/forecast.json?key=e98ce817d86843428f2172809211404&q=London&days=2&aqi=no&alerts=no";
  
    let req = new XMLHttpreq();
    req.open("GET", URL);
    req.responseType = "json";

    req.send();
    req.onload = function () {
      ShowWeather(req.response);
    };
};

const ShowWeather = (obj) => {

    let city = document.createElement("h1");
    city.id = "city"
    city.textContent = obj.location.name;
    document.getElementById("weather_container").before(city);

    for(let i=0; i<2; i++){
        const day = document.getElementsByClassName("day")[i]
        const d = obj.forecast.forecastday[i]
        
        let maxtemp = document.createElement("span");
        maxtemp.textContent = d.day.maxtemp_c;
        day.getElementsByClassName("caption")[0].after(maxtemp);

        let mintemp = document.createElement("span");
        mintemp.textContent = d.day.mintemp_c;
        day.getElementsByClassName("caption")[1].after(mintemp);

        let maxwind = document.createElement("span");
        maxwind.textContent = d.day.maxwind_kph;
        day.getElementsByClassName("caption")[2].after(maxwind);

        let totalprecip = document.createElement("span");
        totalprecip.textContent = d.day.totalprecip_mm;
        day.getElementsByClassName("caption")[3].after(totalprecip);

        let avghumidity = document.createElement("span");
        avghumidity.textContent = d.day.avghumidity;
        day.getElementsByClassName("caption")[4].after(avghumidity);

        let daily_chance_of_rain = document.createElement("span");
        daily_chance_of_rain.textContent = d.day.daily_chance_of_rain;
        day.getElementsByClassName("caption")[5].after(daily_chance_of_rain);

        let daily_chance_of_snow = document.createElement("span");
        daily_chance_of_snow.textContent = d.day.daily_chance_of_snow;
        day.getElementsByClassName("caption")[6].after(daily_chance_of_snow);

        let sunrise = document.createElement("span");
        sunrise.textContent = d.astro.sunrise;
        day.getElementsByClassName("caption")[7].after(sunrise);

        let sunset = document.createElement("span");
        sunset.textContent = d.astro.sunset;
        day.getElementsByClassName("caption")[8].after(sunset);
    }
}