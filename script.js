const API_KEY = "394a840c51c904ee3be87821ba5e2bc2";
// }
// https://api.first.org/data/v1/countries

const date1 = document.querySelector("[data-date]");
const day1 = document.querySelector("[data-day]");
const country = document.querySelector("[data-country]");
const countryCode = document.querySelector("[data-countryCode]");
const cityName = document.querySelector("[data-name]");
const temprature = document.querySelector("[data-temp]");
const season = document.querySelector("[data-weather]");
const humidity1 = document.querySelector("[data-humidity]");
const windSpeed = document.querySelector("[data-wind]");
const visibility1 = document.querySelector("[data-visibility]");

// fetchWeatherInfo();
async function fetchWeatherInfo() {
  let city_nam = cityName.value;
  console.log(city_nam);

  try {
    let api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_nam}&appid=${API_KEY}`
    );
    let weather1 = await api.json();
    console.log(weather1);
    countryCode.innerText = weather1.sys.country;

    //  update temprature
    temprature.innerText = (weather1.main.temp - 273.15).toFixed(0) + "℃";

    // update season
    // season.innerText = weather1.weather.0.main;

    // update visibility
    visibility1.innerText = weather1.visibility;
    // update humidity
    humidity1.innerText = weather1.main.humidity + "%";
    // update wind speed
    windSpeed.innerText = weather1.wind.speed + "km/h";
  } catch {
    console.log("not found");
  }
}

//DATE---------------------
getTimeAndDate();
function getTimeAndDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  date1.innerText = `${day}-${month}-${year}`;
  //   console.log(currentDate);
}

// DAY--------------------
getDay();
function getDay() {
  const d = new Date();
  let day = d.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day1.innerText = dayNames[day];
  //   console.log(dayNames[day]);
}
