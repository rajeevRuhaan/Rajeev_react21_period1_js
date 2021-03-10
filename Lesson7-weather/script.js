let notificationElement = document.querySelector(".notification");
let iconElement = document.querySelector(".weather-icon");
let tempElement = document.querySelector(".temp-value p");
let descElement = document.querySelector(".temp-description p");
let locationElement = document.querySelector(".location p");

const weather = {};
weather.temperature = {
  unit: "celsius",
};

/**   weather data api */

/**getting data and displaying in UI */
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

/** conversion of temperature */
function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

/** when user clicking on display of tempElement for changing display temp fron c to f or f to c */
tempElement.addEventListener("click", () => {
  if (weather.temperature.value === undefined) return;

  if (weather.temperature.unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    tempElement.innerHTML = `${fahrenheit}° <span>C</span>`;
    weather.temperature.unit = "fahrenheit";
  } else {
    tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
    weather.temperature.unit = "celsius";
  }
});
