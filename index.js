/* eslint-disable require-jsdoc, no-unused-vars*/

const Client = require('./client');
const APIRequest = require('./request');

const client = new Client('13721ff14436d11b3165c206ce55d1d9');
const request = new APIRequest(client, 'GET', 'user');
request.make()
    .then((d) => d.json()
        .then((r) => {
          console.log(r);
        }));
