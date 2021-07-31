/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');


const getUser = (client) => {
  const request = new RequestHandler(client, 'GET', 'user');
  return request.make();
};

const getUsage = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/usage');
  return request.make();
};

const getSubmissions = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/submissions');
  return request.make();
};

const getSubusers = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/subusers');
  return request.make();
};

const getFolders = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/folders');
  return request.make();
};

const getReports = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/reports');
  return request.make();
};

const getHistory = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/history');
  return request.make();
};

const getForms = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/forms');
  return request.make();
};

const getSettings = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/settings');
  return request.make();
};

const postSettings = (client, settings) => {
  const request = new RequestHandler(client, 'POST', 'user/settings', settings);
  return request.make();
};

const postForm = (client, settings) => {
  try {
    const {questions, properties} = settings;

    const questionHasType = questions.every((item) =>item.hasOwnProperty('type'));
    const questionHasText = questions.every((item) =>item.hasOwnProperty('text'));
    const questionHasName = questions.every((item) =>item.hasOwnProperty('name'));
    const questionHasOrder = questions.every((item) =>item.hasOwnProperty('order'));

    const isQuestionsValid = questionHasType && questionHasText && questionHasName && questionHasOrder;
    const isPropertiesvalid = properties.hasOwnProperty('title');

    if (isQuestionsValid && isPropertiesvalid) {
      const request = new RequestHandler(client, 'POST', 'user/forms', settings);
      return request.make();
    } else {
      throw new Error('You need to provide required fields to create a form');
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getUser: getUser,
  getUsage: getUsage,
  getSubmissions: getSubmissions,
  getSubusers: getSubusers,
  getFolders: getFolders,
  getReports: getReports,
  getHistory: getHistory,
  getForms: getForms,
  getSettings: getSettings,
  postSettings: postSettings,
  postForm: postForm,
};
