/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');


const getSubmission = (client, submissionID) => {
  const request = new RequestHandler(client, 'GET', `submission/${submissionID}`);
  return request.make();
};

const postSubmission = (client, submissionID, submission) => {
  const request = new RequestHandler(client, 'POST', `submission/${submissionID}`, submission);
  return request.make();
};

const deleteSubmission = (client, submissionID) => {
  const request = new RequestHandler(client, 'DELETE', `submission/${submissionID}`);
  return request.make();
};

module.exports = {
  getSubmission: getSubmission,
  postSubmission: postSubmission,
  deleteSubmission: deleteSubmission,
};
