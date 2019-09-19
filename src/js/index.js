import "./import/modules";
import "./import/components";
import "abpetkov-powerange/dist/powerange.min";
import "instafeed.js";
import "geolocator";
import "imask";
import "validator";
import innerVh from "inner-vh";

document.addEventListener("DOMContentLoaded", event => {
    let sidenav = document.getElementById("sidenav");
    innerVh("sidenavHeight", (innerVhInPx) => console.log(""), sidenav);
    document.getElementById("question_btn").disabled = true;
    document.getElementById("popup_btn").disabled = true;
});

let geolocator = require("geolocator");

geolocator.config({
    language: "ru",
    google: {
        version: "3",
        key: "AIzaSyBA5worfgANjXL7i8y1dgiQa55o7cXq49A"
    }
});

window.onload = () => {
    let options = {
        enableHighAccuracy: true,
        timeout: 0,
        maximumWait: 0,         // max wait time for desired accuracy
        maximumAge: 0,          // disable cache
        desiredAccuracy: 100,    // meters
        fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
        addressLookup: true,    // requires Google API key if true
    };
    geolocator.locate(options, function (err, location) {
        if (err) return console.log(err);
        document.getElementById("town-3").innerHTML = "<p>" + location.address.city + "</p>";
    });
};
