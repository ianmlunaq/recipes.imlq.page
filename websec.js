"use strict;"

let height = screen.height;
let width = screen.width;
let ua = navigator.userAgent;
let lang = navigator.language;
let onl = navigator.onLine;

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    //console.log("Your current position is:");
    //console.log(`Latitude : ${crd.latitude}`);
    //console.log(`Longitude: ${crd.longitude}`);
    //console.log(`More or less ${crd.accuracy} meters.`);
    document.getElementById("lat").innerHTML = crd.latitude;
    document.getElementById("lon").innerHTML = crd.longitude;
    
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
navigator.geolocation.getCurrentPosition(success, error, options);

document.getElementById("width").innerHTML = width;
document.getElementById("height").innerHTML = height;
document.getElementById("ua").innerHTML = ua;
document.getElementById("lang").innerHTML = lang;
document.getElementById("onl").innerHTML = onl;


  