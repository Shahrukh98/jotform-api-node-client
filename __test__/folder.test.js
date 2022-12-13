/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const Client = require('./../lib/client');
const Folder = require('./../lib/folder/folder');

const BASE_PATH = 'https://api.jotform.com/'
const API_KEY = '13721ff14436d11b3165c206ce55d1d9';

describe('Folder endpoint', () => {
  const client = new Client(BASE_PATH,API_KEY);
  it('should gen folder without error', async () => {
    const result = await Folder.getFolder(client, '60e84f985a364a3729660ca2');
    const response = await result.json();
    const {content} = response;
    const {owner} = content;
    expect(owner).toBe('justaplant');
  });
});
