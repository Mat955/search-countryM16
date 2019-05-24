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
        .then(showCountriesList)
}


function showCountriesList(resp) {
    var countryName = document.getElementById('country-name').value;
    countriesList.innerHTML = '';
    var result = resp.filter((elem) => {
        console.log('elem.name', elem.name);
        console.log('countryName', countryName);
        return elem.name.includes(countryName);
    });
    resp.forEach(function (item) {
        var elementLi = document.createElement('li');
        elementLi.innerText = result;
        elementLi.addEventListener('click', function () {
            var detailsCountry = elementLi.innerText = ('Capital: ' + item.capital + ', Number of Humans: ' + item.population + ', Region: ' + item.region);
            countriesList.innerHTML = detailsCountry;
        });
        countriesList.appendChild(elementLi);
    });
    console.log('result', result);
}