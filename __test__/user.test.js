/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const Client = require('./../lib/client');
const User = require('./../lib/user/user');

const API_KEY = '13721ff14436d11b3165c206ce55d1d9';

// TODO: Look for a better way if not wrap it up with try catch block

describe('User endpoint', () => {
  const client = new Client(API_KEY);
  it('should get user without error', async () => {
    const result = await User.getUser(client);
    const response = await result.json();
    const {content} = response;
    const {username} = content;
    expect(username).toBe('justaplant');
  });
  it('should get usage without error', async () => {
    const result = await User.getUsage(client);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should get submissions without error', async () => {
    const result = await User.getSubmissions(client);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should get subuseres without error', async () => {
    const result = await User.getSubusers(client);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should get folders without error', async () => {
    const result = await User.getFolders(client);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  //   it('should get history without error', async () => {
  //     const result = await User.getHistory(client);
  //     const response = await result.json();
  //     const {message} = response;
  //     expect(message).toBe('success');
  //   });
  it('should get settings without error', async () => {
    const result = await User.getSettings(client);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should post settings without error', async () => {
    const settings = {
      website: 'itsjustaplant.github.io',
    };
    const result = await User.postSettings(client, settings);
    const response = await result.json();
    const {content} = response;
    const {website} = content;
    expect(website).toBe(settings.website);
  });
});
