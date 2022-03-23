function onGeoSuccess(position){
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(URL).then(response => response.json()).then(data => console.log(data.name))
}
function onGeoError(){
    alert("Can't find you")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)

const API_KEY = "52a71fd8f3692d36a0a94dcf45d445fd"
