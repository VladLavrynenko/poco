let apiKey = "a62d7a850f413b9826e3162b1bac93a8";
let url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a62d7a850f413b9826e3162b1bac93a8`;

let city = "";

let imgTag = document.querySelector("img");
let pTag = document.querySelector("pre");

let inputTag = document.querySelector("#city");
inputTag.addEventListener("change", () => {
    city = inputTag.value;
    getWeather();
});


async function getWeather() {
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a62d7a850f413b9826e3162b1bac93a8`;
    const response = await fetch(url);
    const weather = await response.json();
    console.log(weather);
    console.log(weather.name);

    showTheWeather(weather);
  }


function showTheWeather(weather){
    let weatherString = 
    `The weather today in ${weather.name},${weather.sys.country} is ${weather.weather[0].main},
${weather.weather[0].description},
    the temperature now is: ${Math.round((weather.main.temp - 273) * 10) / 10} °C 
    the temperature min is: ${Math.round((weather.main.temp_min - 273) * 10) / 10} °C
the temperature max is: ${Math.round((weather.main.temp_max - 273) * 10) / 10} °C
    the wind is: ${weather.wind.speed} m/s
    coordinates: ${weather.coord.lon}°/${weather.coord.lat}°`;

    console.log(weatherString);    
    pTag.textContent = weatherString;

    changeImg(weather.weather[0].icon);
}



function changeImg(img_id) {
    let imgURL = `https://openweathermap.org/img/wn/${img_id}@2x.png`;
    console.log(imgURL);
    imgTag.src = imgURL;
}