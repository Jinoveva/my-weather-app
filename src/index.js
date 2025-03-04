function refreshWeather(response) {
  let tempElement = document.querySelector("#temp-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city-input");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = `${temperature}`;
}

function searchCity(city) {
  let apiKey = "ft01o336fa01b0d041f3cbcd1c5dc250";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSearch);

function details() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let currentDay = document.querySelector("#current-day");
  let currentHour = document.querySelector("#current-hours");
  let currentMinutes = document.querySelector("#current-minutes");

  currentDay.innerHTML = `${day}`;
  currentHour.innerHTML = `${hours}`;
  currentMinutes.innerHTML = `${minutes}`;
}
details();
