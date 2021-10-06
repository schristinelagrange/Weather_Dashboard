var input = document.querySelector(".input");
var output = document.querySelector(".output");
var search = document.querySelector(".search");
var weather = document.getElementById("container");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API;
var API = "a4b4716e88cadb45fae714953c38bd2c";
var city = input.value;


search.addEventListener("click", getWeather);
output.textContent = localStorage.getItem("city");

function getWeather() {
	localStorage.setItem("city", input.value);
	output.textContent = input.value;
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data));
};

