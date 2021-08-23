/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const validateForm = (formData) => {
  const {questions, properties} = formData;

  // TODO: Find a better way to check if all questions has these properties
  const questionHasType = questions.every((item) =>item.hasOwnProperty('type'));
  const questionHasText = questions.every((item) =>item.hasOwnProperty('text'));
  const questionHasName = questions.every((item) =>item.hasOwnProperty('name'));
  const questionHasOrder = questions.every((item) =>item.hasOwnProperty('order'));

  const isQuestionsValid = questionHasType && questionHasText && questionHasName && questionHasOrder;
  const isPropertiesValid = properties.hasOwnProperty('title');
  return isQuestionsValid && isPropertiesValid;
};

const validateQuestions = (questions) => {
  const isQuestionsValid = questions.every((item) => item.hasOwnProperty('type'));
  return isQuestionsValid;
};

const validateReport = (report) => {
  const reportHasTitle = report.hasOwnProperty('title');
  const reportHasListType = report.hasOwnProperty('list_type');
  return reportHasTitle && reportHasListType;
};

module.exports = {
  validateForm: validateForm,
  validateQuestions: validateQuestions,
  validateReport: validateReport,
};
