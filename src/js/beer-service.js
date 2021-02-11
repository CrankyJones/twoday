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
  static async searchBeer(beerWord) {
    return fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=5&beer_name=${beerWord}`)
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