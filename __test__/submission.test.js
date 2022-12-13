/* eslint-disable require-jsdoc, no-unused-vars, max-len, camelcase*/

const Client = require('./../lib/client');
const Submission = require('./../lib/submission/submission');

const BASE_PATH = 'https://api.jotform.com/'
const API_KEY = '13721ff14436d11b3165c206ce55d1d9';

describe('Submission endpoint', () => {
  const client = new Client(BASE_PATH,API_KEY);
  const submissionID = '5043241216116113405';
  it('should get submission without error', async () => {
    const result = await Submission.getSubmission(client, submissionID);
    const response = await result.json();
    const {content} = response;
    const {form_id} = content;
    expect(form_id).toBe('212204144182038');
  });
  // FIXME: due to an unknown reason it is failing again and again
  // Optional fields are not optional enough
  it('should post submission without error', async () => {
    const result = await Submission.postSubmission(client, submissionID);
    const response = await result.json();
    console.log(result);
    const {message} = response;
    expect(message).toBe('success');
  });
  // TODO: add a test for deleteSubmission
});
