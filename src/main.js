import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './../src/js/nasa-service.js';

async function POD() {
  let picture = await NasaService.pictureOfTheDay();
  if (picture.url) {
    $('.pictureSpot').append(`<img src="${picture.url}"><br>${picture.title}`);
  }
}

$(document).ready(function () {
  $('#picture').click(function () {
    POD();
    // let picture = {};
    // NasaService.pictureOfTheDay();
    // let url = picture.url;
    // console.log(picture);
    // if (picture.url) {
    //   $('.pictureSpot').append(`<img src="${picture.url}"><br>${picture.title}`);
  })
  // });
});