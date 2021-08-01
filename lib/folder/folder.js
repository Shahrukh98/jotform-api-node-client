/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');


const getFolder = (client, folderID) => {
  const request = new RequestHandler(client, 'GET', `folder/${submissionID}`);
  return request.make();
};

module.exports = {
  getFolder: getFolder,
};
