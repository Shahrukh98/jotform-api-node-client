/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const Client = require('./../lib/client');

describe('Client test', () => {
  const API_KEY = '13721ff14436d11b3165c206ce55d1d9';
  it('should initialize client without error', () => {
    const client = new Client(API_KEY);
    expect(client.key).toBe(API_KEY);
  });
  it('should throw error when key is not defined', () => {
    const test = () => {
      const client = new Client();
    };
    expect(test).toThrow('You need an api key to use client');
  });
});
