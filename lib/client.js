/* eslint-disable require-jsdoc, no-unused-vars*/

class Client {
  constructor(apiKey) {
    if (apiKey === undefined || apiKey === '') {
      throw new Error('You need an api key to use client');
    } else {
      this.key = apiKey;
    }
  }
}

module.exports = Client;
