/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const RequestHandler = require('../request_handler');
const Helper = require('./../helpers');

const postForm = (client, settings) => {
  try {
    const isFormValid = Helper.validateForm(settings);

    if (isFormValid) {
      const request = new RequestHandler(client, 'POST', 'form', settings);
      return request.make();
    } else {
      throw new Error('You need to provide required fields to create a form');
    }
  } catch (e) {
    console.error(e);
  }
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
  try {
    const isQuestionsValid = Helper.validateQuestions(questions);

    if (isQuestionsValid) {
      const request = new RequestHandler(client, 'POST', `form/${formID}/questions`);
      return request.make();
    } else {
      throw new Error('You need to provide required fields to post a questions');
    }
  } catch (e) {
    console.error(e);
  }
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

const getProperty = (client, formID, propertyKey) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/properties/${propertyKey}`);
  return request.make();
};

const getReports = (client, formID) => {
  const request = new RequestHandler(client, 'GET', `form/${formID}/reports`);
  return request.make();
};

const postReports = (client, formID, report) => {
  try {
    const isReportValid = Helper.validateReport(report);

    if (isReportValid) {
      const request = new RequestHandler(client, 'POST', `form/${formID}/reports`, report);
      return request.make();
    } else {
      throw new Error('You have to provide required fields to post report');
    }
  } catch (e) {
    console.error(e);
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

module.exports = {
  postForm: postForm,
  getForm: getForm,
  deleteForm: deleteForm,
  cloneForm: cloneForm,
  getQuestions: getQuestions,
  postQuestions: postQuestions,
  getQuestion: getQuestion,
  postQuestion: postQuestion,
  deleteQuestion: deleteQuestion,
  getProperties: getProperties,
  postProperties: postProperties,
  getProperty: getProperty,
  postReports: postReports,
  getFiles: getFiles,
  getSubmissions: getSubmissions,
};
