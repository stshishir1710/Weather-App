const container = document.querySelector(".container");
const search = document.querySelector(".sarch-box search");
const weatherbox= document.querySelector(".weather-box");
const weatherDetails= document.querySelector(".weather-detais");

search.addEventListener("click",()=>{
    const APIkey = "9140aab1af881eac3fb25faaffaf23e5";
    const city = document.querySelector(".sarch-box input").value;
    if(city == "")return;
    fatch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    ).then((response) => response.json())
    .then(json =>{
        const image = document.querySelector(".weather-box img");
        const temp = document.querySelector(".weather-box .temp");
        const discription = document.querySelector(".weather-box .discription");
        const wind = document.querySelector(".weather-detais .wind");
        const humidity = document.querySelector(".weather-detaism .wind span");
        switch(json.weatherbox[0].main){
            case"Clear":
            image.src = "images/clear.png";
            break;

            case"Rain":
            image.src = "images/rain.png";
            break;
            
            case"Mist":
            image.src = "images/mist.png";
            break;
            
            case"Snow":
            image.src = "images/snow.png";
            break;
            
            case"hazy":
            image.src = "images/mist.png";
            break;
            
            case"Clear":
            image.src = "images/cloud.png";
            break;
            
            default:
            image.src = "images/cloud.png";
            
        }
        temp.innerHTML = `${parseInt(json.main.temp)}<span> </span>`;
        discription.innerHTML = `${json.weather[0].discription}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML =  `${parseInt(json.wind.speed)}km/h`;
    })
})