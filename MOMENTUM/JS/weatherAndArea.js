const API_KEY = "d06920c23a78b6acebd0e352b1b9d42b";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't access your opsition.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
