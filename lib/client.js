/* eslint-disable require-jsdoc, no-unused-vars*/

class Client {
  constructor(basePath,apiKey) {
    if (apiKey === undefined || apiKey === '') {
      throw new Error('You need an api key to use client');
    } else {
      this.basePath = basePath || 'https://api.jotform.com/';
      this.key = apiKey;
    }
  }
}

module.exports = Client;
