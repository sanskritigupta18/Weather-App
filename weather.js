const api_key = 'd1845658f92b31c64bd94f06f7188c9c';

const inputtext = document.querySelector('.inputtext');
const temperature = document.querySelector('.temp');
const cityName = document.querySelector('.city');
const search_btn = document.querySelector('.search_btn');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const weather_image = document.querySelector("[weather_image]");
const form = document.querySelector(".form");
search_btn.addEventListener('click', getData); // Removed the parentheses after getData
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getData();
})
async function getData() {
    const city = inputtext.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    //document.write(response.body)
    console.log(response.body)
    const data = await response.json(); // Removed unnecessary await before response
    console.log(data);
    console.log(city);
    temperature.textContent = `${data.main.temp}` + " °C";
    cityName.innerText = inputtext.value;
    console.log(data.main.temp);
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + "km/h";
    let weatherIconvalue = data?.weather[0]?.main;
    console.log(weatherIconvalue); 
    if(weatherIconvalue == "Haze")
    {
        weather_image.src = "./haze.png";
    } 
    else if(weatherIconvalue == "Clear")
    {
        weather_image.src = "./clear.png";
    }
    else if(weatherIconvalue == "Clouds")
    {
        weather_image.src = "./clouds.png";
    }
    else if(weather_image == "Drizzle")
    {
        weather_image.src = "./drizzle.png";
    }
}


async function tempFunction(){
    let city = "jabalpur";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
    //document.write(response.body)
    console.log(response.body)
    const data = await response.json(); // Removed unnecessary await before response
    console.log(data);
    console.log(city);
    temperature.textContent = `${data.main.temp}` + " °C";
    cityName.innerText = city;
    console.log(data.main.temp);
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + "km/h";

    let weatherIconvalue = data?.weather[0]?.main;
    console.log(weatherIconvalue); 
    if(weatherIconvalue == "Haze")
    {
        weather_image.src = "./haze.png";
    } 
    else if(weatherIconvalue == "Clear")
    {
        weather_image.src = "./clear.png";
    }
    else if(weatherIconvalue == "Clouds")
    {
        weather_image.src = "./clouds.png";
    }
    else if(weather_image == "Drizzle")
    {
        weather_image.src = "./drizzle.png";
    }

}
tempFunction();