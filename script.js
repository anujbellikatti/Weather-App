let api = "d931003cd1469f9fec75cd2d37574a84";
let obj = [];

let btn = document.getElementById("btn");
let pop = document.getElementById("pop");
let con = document.getElementById("container");
let location1 = document.getElementById("location");
let windspeed = document.getElementById("windspeed");
let Humidity = document.getElementById("Humidity");
let timezone = document.getElementById("timezone");
let pressure = document.getElementById("pressure");
let windDirection = document.getElementById("windDirection");
let UVIndex = document.getElementById("UVIndex");
let feels = document.getElementById("feels");
let latlong = document.getElementById("lat-long");

let h5 = document.getElementById("h5")
let p1 = document.getElementById("p-1");


let map = document.getElementById("map");

btn.addEventListener("click",fetching);


function fetching(){
     container.style.display="none";
     pop.style.display="block";
     navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude
            console.log(lat);
           p1.innerHTML = "Lat: "+lat;
           h5.innerHTML = "Long: "+long;
               console.log(h5)
               obj.push(lat)
               obj.push(long)
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj[0]}&lon=${obj[1]}&appid=${api}`)
.then(res=>res.json())
.then((data)=>{
     console.log(data);
     windspeed.innerHTML = "Wind Speed: "+data.wind.speed+"Kmph"
      location1.innerHTML = "Location: "+data.name
      Humidity.innerHTML = "Humidity: "+data.main.humidity
      timezone.innerHTML = "Timezone: "+"GMT +5:30"
      windDirection.innerHTML = "Wind Direction: "+ data.wind.deg
      UVIndex.innerHTML = "UV Index: "+data.main.temp
      feels.innerHTML = "Feels like: "+data.main.feels_like;
     pressure.innerHTML = "Pressure: "+data.main.pressure+"atm"
     map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="560" height="270" frameborder="0" style="border:0"></iframe>`
})
     












}
 )
}


