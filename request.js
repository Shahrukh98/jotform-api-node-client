/* eslint-disable require-jsdoc, no-unused-vars*/

const fetch = require('node-fetch');

class Request {
  constructor(client, method, path) {
    this.basePath = 'https://api.jotform.com/';
    this.key = client.key;
    this.method = method;
    this.path = path;
  }
  make() {
    const url = `${this.basePath}${this.path}?apiKey=${this.key}`;
    return fetch(url, {
      method: this.method,
    });
  }
}

module.exports = Request;
