# JotForm Node Client

## Install

`npm i @justaplant/pwettybuttons` 

or 

`yarn add jotform-api-nodejs-client`

## Example
```
const JF = require('jotform-api-nodejs-client');
const API_KEY = 'your_api_key';
const client = new JF.Client(API_KEY);

(async function () {
  const result = await JF.User.getUser(client);
  const response = await result.json();
  console.log(response);
})();
```
