export default class BeerMe {
  static async randoBeer() {
    return fetch(`https://api.punkapi.com/v2/beers/random`)
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