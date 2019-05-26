'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCounties);

function searchCounties() {
    var inputValue = document.getElementById('country-name').value;
    if (!inputValue.length) inputValue = 'Poland';
    fetch(url + inputValue)
        .then(function (response) {
            return response.json();
        })
        .then(showCountriesList)
}

function showCountriesList(response) {
    var inputValue = document.getElementById('country-name').value;
    countriesList.innerHTML = '';

    response
        .filter(matchingByName)
        .forEach(createAndAppendElement);

    function matchingByName(elem) {
        var countryNameLower = elem.name.toLowerCase();
        var inputValueLower = inputValue.toLowerCase();

        return countryNameLower.includes(inputValueLower);
    }

    function createAndAppendElement(item) {
        var elementLi = document.createElement('li');
        elementLi.innerText = item.name;
        elementLi.addEventListener('click', function () {
            var detailsCountry = elementLi.innerText = ('Capital: ' + item.capital + ', Number of Humans: ' + item.population + ', Region: ' + item.region);
            countriesList.innerHTML = detailsCountry;
        });
        countriesList.appendChild(elementLi);
    };
}