'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCounties);

function searchCounties() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var elementLi = document.createElement('li');
        elementLi.innerText = (item.name + ', Capital: ' + item.capital + ', Number of Humans: ' + item.population + ', Region: ' + item.region);
        countriesList.appendChild(elementLi);
    });
}