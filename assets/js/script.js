var cords;
var lat = '';
var lon = '';
var i = 1;
var ii = 0;
var weatherArray = [];
var pcContainer = document.querySelector('#city-buttons');

var futureCities;
var lsFutureCities = JSON.parse(localStorage.getItem(futureCities));
if (lsFutureCities) {
    futureCities = lsFutureCities;
} else {
    futureCities = [];
}

// GET CURRENT DATE AND TIME WITH MOMENT.JS 
const currentDate = moment().format('L'); // CURRENT DATE

var displayCityWeather = function (weatherArray) {
    // CURRENT DAY INFORMATION
    var c = 0;
    // CARD
    var dayCardEl = document.createElement('div');
    dayCardEl.classList = 'col-auto card card-body';
    var container = document.getElementById
        
}