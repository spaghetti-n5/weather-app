var axios = require('axios');

// Open Weather API Config
var APIKEY = '6c6c24c22fd26543e4ec7be6ff04e1b5';
var APIVERSION = '2.5';
var URL = 'http://api.openweathermap.org/data/';
var CURRENT = '/weather';
var FORECAST = '/forecast/daily';

var api = {
  getCurrentWeather: function(city) {
    var currentUrl = URL.concat(APIVERSION, CURRENT);
    var config = {
      params: {
        q: city,
        type: 'accurate',
        APPID: APIKEY,
      },
    };
    return axios.get(currentUrl, config)
         .then(function (res) {
           return res.data;
         })
         .catch(function (err) {
           console.warn('Error in getCurrentWeather: ' + err);
         });
  },
  getForecastWeather: function(city, numDays) {
    var forcastUrl = URL.concat(APIVERSION, FORECAST);
    var config = {
      params: {
        q: city,
        cnt: numDays,
        type: 'accurate',
        APPID: APIKEY,
      },
    };
    return axios.get(forcastUrl, config)
       .then(function (res) {
         return res.data;
       })
       .catch(function (err) {
         console.warn('Error in getCurrentWeather: ' + err);
       });
  },
};

module.exports = api;

