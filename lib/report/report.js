/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');


const getReport = (client, reportID) => {
  const request = new RequestHandler(client, 'GET', `report/${reportID}`);
  return request.make();
};

const deleteReport = (client, reportID) => {
  const request = new RequestHandler(client, 'DELETE', `report/${reportID}`);
  return request.make();
};

module.exports = {
  getReport: getReport,
  deleteReport: deleteReport,
};
