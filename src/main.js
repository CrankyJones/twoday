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
  }
}

async function beerFunc() {
  let beer = await BeerMe.randoBeer();
  console.log(beer);
  if (beer[0].id) {
    $(".beerSpot").append(`<img src="${beer[0].image_url}"><br>Name: ${beer[0].name}<br> Description: ${beer[0].description}<br>ABV: ${beer[0].abv}<br>IBU: ${beer[0].ibu}<br>Food Pairing: ${beer[0].food_pairing}`);
  }
}

$(document).ready(function () {
  $('#picture').click(function () {
    POD();
    $("#picture").hide();
  });
  $('#beer').click(function () {
    $('.beerSpot').empty();
    beerFunc();
  });
});