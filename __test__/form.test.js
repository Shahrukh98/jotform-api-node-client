/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const Client = require('./../lib/client');
const Form = require('./../lib/form/form');

const API_KEY = '13721ff14436d11b3165c206ce55d1d9';
const formID = '212096052907050';

describe('Form endpoint', () => {
  const client = new Client(API_KEY);

  it('shoud post form without error', async () => {
    const form = {
      questions: [
        {
          type: 'control_head',
          text: 'this is a test',
          order: 1,
          name: 'test',
        },
      ],
      properties: {
        title: 'this is a test form',
      },
    };
    const result = await Form.postForm(client, form);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should throw error when form is not valid', async () => {
    const form = {
      questions: [
        {
          type: 'control_head',
          text: 'this is a test',
          order: 1,
          name: 'test',
        },
      ],
      properties: {
      },
    };
    const test = () => {
      Form.postForm(client, form);
    };
    expect(test).toThrow('You need to provide required fields to create a form');
  });
  it('should put form without error', async () => {
    const form = {
      questions: [
        {
          type: 'control_head',
          text: 'this is a test',
          order: 1,
          name: 'test',
        },
      ],
      properties: {
        title: 'this is a test form',
      },
    };
    const result = await Form.putForm(client, form);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should get forms without error', async () => {
    const result = await Form.getForm(client, formID);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  // TODO: deleteForm test is needed
  it('should clone form without error', async () => {
    const result = await Form.cloneForm(client, formID);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  it('should get questions without error', async () => {
    const result = await Form.getQuestions(client, formID);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  // TODO: putQuestions and postQuestions tests are needed
});
