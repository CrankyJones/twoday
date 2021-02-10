import $ from 'jquery';

export default class NasaService {
  static async pictureOfTheDay() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      })
  }

  static async POD() {
    let picture = await NasaService.pictureOfTheDay();
    if (picture.url) {
      $('.pictureSpot').append(`<img src="${picture.url}"><br>${picture.title}`);
    }
  }
}