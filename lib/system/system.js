/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');

// TODO: Remove apiKEY for this request
const getSystem = (client, planName) => {
  const request = new RequestHandler(client, 'GET', `system/plan/${planName}`);
  return request.make();
};

module.exports = {
  getSystem: getSystem,
};
