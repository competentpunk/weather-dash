// Using the 5 Day Weather Forecast API, you'll notice that you will need 
// to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, 
// how could we retrieve geographical coordinates given a city name?

// You will use `localStorage` to store any persistent data. For more information on how 
// to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API 
// keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

// AS A traveler
// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// API Key
var apiKey = "b4baa4ee379f57320fa20816d25e66c0";

var getCurrentDay = function (city) {
    var currentDayUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    var testUrl = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=b4baa4ee379f57320fa20816d25e66c0"
    fetch(testUrl).then(function (response) {
        if(response.ok) {
        return response.json().then(function (data) {
            console.log(data);
            // call function to display data
        });
    } else {
        alert(reponse.statusText)
    }
});
};

getCurrentDay();

var getForecast = function (city) {
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;
    var testUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=b4baa4ee379f57320fa20816d25e66c0"
    fetch(testUrl).then(function (response) {
        if(response.ok) {
        return response.json().then(function (data) {
            console.log(data);
            // call function to display data
        });
    } else {
        alert(reponse.statusText)
    }
});
};

getForecast();

// data.list[0].main.temp
// data.list[9].main.temp
// repeat for wind, humidity, etc.
// five numbers for five days: 0,9,17,25,33

//get current weather API
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={b4baa4ee379f57320fa20816d25e66c0}

// Lat and Lon API link 
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={b4baa4ee379f57320fa20816d25e66c0}

// forecast API
// https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={b4baa4ee379f57320fa20816d25e66c0}




