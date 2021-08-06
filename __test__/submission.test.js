/* eslint-disable require-jsdoc, no-unused-vars, max-len, camelcase*/

const Client = require('./../lib/client');
const Submission = require('./../lib/submission/submission');

const API_KEY = '13721ff14436d11b3165c206ce55d1d9';

describe('Submission endpoint', () => {
  const client = new Client(API_KEY);
  const submissionID = '5031283627514257312';
  it('should get submission without error', async () => {
    const result = await Submission.getSubmission(client, submissionID);
    const response = await result.json();
    const {content} = response;
    const {form_id} = content;
    expect(form_id).toBe('212065437293051');
  });
  // FIXME: due to an unknown reason it is failing again and again
  it('should post submission without error', async () => {
    const result = await Submission.postSubmission(client, submissionID);
    const response = await result.json();
    const {message} = response;
    expect(message).toBe('success');
  });
  // TODO: add a test for deleteSubmission
});
