/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const Client = require('./../lib/client');
const System = require('./../lib/system/system');

const BASE_PATH = 'https://api.jotform.com/'
const API_KEY = '13721ff14436d11b3165c206ce55d1d9';

describe('System endpoint', () => {
  const client = new Client(BASE_PATH,API_KEY);
  const planName = 'FREE';
  it('should get plan without error', async () => {
    const result = await System.getSystem(client, planName);
    const response = await result.json();
    const {content} = response;
    const {name} = content;
    expect(name).toBe(planName);
  });
});
