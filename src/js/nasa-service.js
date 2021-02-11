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
        console.log(error);
        return error;
      });
  }

  static async currentWeather() {
    return fetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
