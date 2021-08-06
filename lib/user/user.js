/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');
const Helper = require('./../helpers');

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

const getSettings = (client) => {
  const request = new RequestHandler(client, 'GET', 'user/settings');
  return request.make();
};

const postSettings = (client, settings) => {
  const request = new RequestHandler(client, 'POST', 'user/settings', settings);
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

const postForm = (client, form) => {
  const isFormValid = Helper.validateForm(form);

  if (isFormValid) {
    const request = new RequestHandler(client, 'POST', 'user/forms', form);
    return request.make();
  } else {
    throw new Error('You need to provide required fields to create a form');
  }
};

const putForm = (client, form) => {
  const request = new RequestHandler(client, 'PUT', 'user/forms', form);
  return request.make();
};

module.exports = {
  getUser: getUser,
  getUsage: getUsage,
  getSubmissions: getSubmissions,
  getSubusers: getSubusers,
  getFolders: getFolders,
  getReports: getReports,
  getHistory: getHistory,
  getSettings: getSettings,
  postSettings: postSettings,
  getForms: getForms,
  postForm: postForm,
  putForm: putForm,
};
