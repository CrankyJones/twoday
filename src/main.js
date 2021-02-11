import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './../src/js/nasa-service.js';
import BeerMe from './../src/js/beer-service.js';

async function POD() {
  let picture = await NasaService.pictureOfTheDay();
  if (picture.url) {
    $('.pictureSpot').append(`<img src="${picture.url}"><br>${picture.title}`);
  } else {
    $('.pictureSpot').append(`There was an error: ${picture.message}`);
  }
}

async function beerFunc() {
  let beer = await BeerMe.randoBeer();
  console.log(beer);
  if (beer[0].id) {
    $(".beerSpot").append(`<img src="${beer[0].image_url}"><br>Name: ${beer[0].name}<br> Description: ${beer[0].description}<br>ABV: ${beer[0].abv}<br>IBU: ${beer[0].ibu}<br>Food Pairing: ${beer[0].food_pairing}`);
  } else {
    $('.beerSpot').append(`There was an error: ${beer.message}`);
  }
}

async function weatherBoi() {
  let weather = await NasaService.currentWeather();
  console.log(weather);
  if (weather.soles) {
    $(".weatherSpot").append(`sol: ${weather.soles[0].sol}<br> Terrestrial Date: ${weather.soles[0].terrestrial_date}<br> Min Temp: ${weather.soles[0].min_temp}<br> Max Temp: ${weather.soles[0].max_temp}<br> Atmospheric Opacity: ${weather.soles[0].atmo_opacity}`);
  }
}

async function beerSearchFunc() {
  let beerWord = $("#beerInput").val().split(' ').join('_');
  let beerWordz = await BeerMe.searchBeer(beerWord);
  if (beerWordz.length !== 0 && beerWordz[0].id) {
    for (let i = 0; i < beerWordz.length; i++) {
      $(".beerSpot").append(`Name: ${beerWordz[i].name}<br> ABV: ${beerWordz[i].abv} <br> IBU: ${beerWordz[i].ibu}<br><br>`);
    }
  } else {
    $(".beerSpot").append(`There were no matches to your search for ${beerWord}`);
    return;
  }
}

window.onload = function () {
  weatherBoi();
};
$(document).ready(function () {
  $('#picture').click(function () {
    POD();
    $("#picture").hide();
  });
  $('#beer').click(function () {
    $('.beerSpot').empty();
    beerFunc();
  });
  $('#beerSearch').click(function () {
    $('.beerSpot').empty();
    beerSearchFunc();
  })
});