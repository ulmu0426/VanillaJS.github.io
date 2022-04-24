const API_KEY = "011785fe0f8561546041444408ceaf85";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    
    const lon = position.coords.longitude;
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(weatherUrl).then(response => response.json()).then(data => {
        const temp = document.querySelector('#temp');
        const weather = document.querySelector('#weather');
        const location = document.querySelector('#location');
        temp.innerText = `Temp : ${Math.round(data.main.temp)}˚C`;
        weather.innerText = `Weather : ${data.weather[0].main}`;
        location.innerText = `Location : ${data.name}`;
    });
}

function onGeoError(){
    
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);