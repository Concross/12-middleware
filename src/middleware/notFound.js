'use strict';

let notFound = (req, res, next) => {
  res.status(404).send('404 ERROR - resource not found');
  next();
};

export default notFound;


