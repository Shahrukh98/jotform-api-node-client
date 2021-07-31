/* eslint-disable require-jsdoc, no-unused-vars*/

class Client {
  constructor(apiKey) {
    try {
      if (apiKey === undefined || apiKey === '') {
        throw new Error('You need an api key to use client');
      }
      this.key = apiKey;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = Client;
