/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const fetch = require('node-fetch');
const querystring = require('qs');

class RequestHandler {
  constructor(client, method, path, options) {
    this.basePath = 'https://api.jotform.com/';
    this.key = client.key;
    this.method = method;
    this.path = path;
    this.options = options;
  }
  make() {
    const url = `${this.basePath}${this.path}?apiKey=${this.key}`;
    let data;
    if (this.method === 'PUT') {
      data = JSON.stringify(this.options);
    } else {
      data = (this.options === undefined) ? null : querystring.stringify(this.options);
    }

    return fetch(url, {
      method: this.method,
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: data,
    });
  }
}

module.exports = RequestHandler;
