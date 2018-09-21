'use strict';

let error = {};

error.notFound = (req, res, next) => {
  res.status(404).send('404 ERROR - resource not found');
  next();
};

error.serverError = (req, res, next) => {
  res.status(500).send('500 ERROR - internal server error');
  next();
};

error.badRequest = (req, res, next) => {
  res.status(400).send('400 ERROR - bad request');
  next();
};

export default error;


