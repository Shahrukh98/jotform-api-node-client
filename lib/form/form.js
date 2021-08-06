/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');
const Helper = require('./../helpers');

const postForm = (client, form) => {
  const isFormValid = Helper.validateForm(form);

  if (isFormValid) {
    const request = new RequestHandler(client, 'POST', 'form', form);
    return request.make();
  } else {
    throw new Error('You need to provide required fields to create a form');
  }
};

const putForm = (client, form) => {
  const request = new RequestHandler(client, 'PUT', 'form', form);
  return request.make();
};

const getForm = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}`);
  return request.make();
};

const deleteForm = (client, formID) => {
  const request = new RequestHandler(client, 'DELETE', `form/${formID}`);
  return request.make();
};

const cloneForm = (client, formID) => {
  const request = new RequestHandler(client, 'POST', `form/${formID}/clone`);
  return request.make();
};

const getQuestions = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/questions`);
  return request.make();
};

const postQuestions = (client, formID, questions) => {
  const isQuestionsValid = Helper.validateQuestions(questions);

  if (isQuestionsValid) {
    const request = new RequestHandler(client, 'POST', `form/${formID}/questions`);
    return request.make();
  } else {
    throw new Error('You need to provide required fields to post a questions');
  }
};

const putQuestions = (client, formID, questions) => {
  const request = new RequestHandler(client, 'PUT', `form/${formID}/questions`, questions);
  return request.make();
};

const getQuestion = (client, formID, questionID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/question/${questionID}`);
  return request.make();
};

const postQuestion = (client, formID, questionID, question) => {
  const request = new RequestHandler(client, 'POST', `form/${formID}/question/${questionID}`, question);
  return request.make();
};

const deleteQuestion = (client, formID, questionID) => {
  const request = new RequestHandler(client, 'DELETE', `form/${formID}/question/${questionID}`);
  return request.make();
};

const getProperties = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/properties`);
  return request.make();
};

const postProperties = (client, formID, properties) => {
  const request = new RequestHandler(client, 'POST', `form/${formID}/properties`, properties);
  return request.make();
};

const putProperties = (client, formID, properties) => {
  const request = new RequestHandler(client, 'PUT', `form/${formID}/properties`, properties);
  return request.make();
};

const getProperty = (client, formID, propertyKey) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/properties/${propertyKey}`);
  return request.make();
};

const getReports = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/reports`);
  return request.make();
};

const postReports = (client, formID, report) => {
  const isReportValid = Helper.validateReport(report);

  if (isReportValid) {
    const request = new RequestHandler(client, 'POST', `form/${formID}/reports`, report);
    return request.make();
  } else {
    throw new Error('You have to provide required fields to post report');
  }
};

const getFiles = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/files`);
  return request.make();
};

const getSubmissions = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/submissions`);
  return request.make();
};

const postSubmissions = (client, formID, submission) => {
  const request = new RequestHandler(client, 'POST', `form/${formID}/submissions`);
  return request.make();
};

const putSubmissions = (client, formID, submission) => {
  const request = new RequestHandler(client, 'PUT', `form/${formID}/submissions`);
  return request.make();
};

module.exports = {
  postForm: postForm,
  putForm: putForm,
  getForm: getForm,
  deleteForm: deleteForm,
  cloneForm: cloneForm,
  getQuestions: getQuestions,
  putQuestions: putQuestions,
  postQuestions: postQuestions,
  getQuestion: getQuestion,
  postQuestion: postQuestion,
  deleteQuestion: deleteQuestion,
  getProperties: getProperties,
  postProperties: postProperties,
  putProperties: putProperties,
  getProperty: getProperty,
  postReports: postReports,
  getFiles: getFiles,
  getSubmissions: getSubmissions,
  postSubmissions: postSubmissions,
  putSubmissions: putSubmissions,
};
