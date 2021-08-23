const Client = require('./client');
const Folder = require('./folder/folder');
const Form = require('./form/form');
const Report = require('./report/report');
const Submission = require('./submission/submission');
const System = require('./system/system');
const User = require('./user/user');

module.exports = {
  Client: Client,
  Folder: Folder,
  Form: Form,
  Report: Report,
  Submission: Submission,
  System: System,
  User: User,
};
