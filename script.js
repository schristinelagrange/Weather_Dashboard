var input = document.querySelector(".input");
var output = document.querySelector(".output");
var search = document.querySelector(".search");
var weather = document.getElementById("container");


var cities = [];

function listCities() {
    output.innerHTML="";
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        var li = document.createElement("li");
        li.textContent = city;
        li.setAttribute("data-index", i);
        output.appendChild(li);

}};

function save() {
    var savedCities = JSON.parse(localStorage.getItem("cities"));
    if (savedCities !== null) {
        cities = savedCities;
    }
    listCities();
};

function outputCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
};

search.addEventListener("click", function(event) {
    event.preventDefault();
    var cityInput = input.value.trim();
    if (cityInput === "") {
        return;
    }
    cities.push(cityInput);
    input.value = "";

    listCities();
    outputCities();
});

save();





